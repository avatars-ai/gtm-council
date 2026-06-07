#!/usr/bin/env node
// Created by AZS
/**
 * Score engagement records and generate pattern review metrics.
 * 
 * Reads engagement records from learning/engagements/, scores avatar effectiveness,
 * routing accuracy, and framework application quality. Outputs a pattern review
 * to learning/reviews/.
 * 
 * Usage:
 *   node scripts/score_engagement.js [--review-period 10] [--format json|md] [--council-dir ./gtm-council]
 */

const fs = require('fs');
const path = require('path');

// --- Config ---
const ALL_AVATARS = [
  'jamal-reimer', 'kyle-norton', 'james-roth', 'henry-schuck',
  'john-mcmahon', 'chris-voss', 'mark-roberge', 'jeb-blount',
  'aaron-ross', 'steli-efti', 'david-priemer', 'mark-kosoglow',
  'brent-adamson', 'josh-braun', 'jacco-van-der-kooij', 'david-skok',
  'peter-drucker', 'barbara-minto', 'donella-meadows', 'bill-campbell',
  'simon-sinek', 'steven-bartlett'
];

const POSITIVE_WORDS = ['helpful', 'useful', 'good', 'great', 'exactly', 'perfect', 'excellent', 'spot on'];

// --- Parse args ---
function parseArgs() {
  const args = process.argv.slice(2);
  const config = { reviewPeriod: 10, format: 'md', councilDir: 'gtm-council' };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--review-period' && args[i + 1]) config.reviewPeriod = parseInt(args[++i]);
    if (args[i] === '--format' && args[i + 1]) config.format = args[++i];
    if (args[i] === '--council-dir' && args[i + 1]) config.councilDir = args[++i];
  }
  return config;
}

// --- File discovery ---
function findEngagementFiles(dir, limit) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md') && f !== '.gitkeep')
    .sort()
    .reverse()
    .slice(0, limit)
    .map(f => path.join(dir, f));
}

// --- Parse engagement record ---
function parseEngagement(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const filename = path.basename(filepath);
  const record = {
    file: filename,
    date: null,
    type: null,
    scope: null,
    avatars_invoked: [],
    operator_feedback: null,
    action_taken: null,
    friction_points: [],
    promotion_candidate: false,
  };

  // Parse YAML frontmatter
  const yamlMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  if (yamlMatch) {
    const lines = yamlMatch[1].split('\n');
    for (const line of lines) {
      const colonIdx = line.indexOf(':');
      if (colonIdx === -1) continue;
      const key = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
      if (key === 'date') record.date = value;
      if (key === 'type') record.type = value;
      if (key === 'scope') record.scope = value;
      if (key === 'avatars_invoked') {
        record.avatars_invoked = value.replace(/[\[\]]/g, '').split(',').map(s => s.trim()).filter(Boolean);
      }
    }
  }

  // Parse outcome signals
  const outcomeMatch = content.match(/## Outcome Signals[\s\S]*?(?=##|$)/);
  if (outcomeMatch) {
    const block = outcomeMatch[0];
    const fbMatch = block.match(/operator_feedback:\s*(.+)/);
    if (fbMatch) record.operator_feedback = fbMatch[1].trim();
    const atMatch = block.match(/action_taken:\s*(\w+)/);
    if (atMatch) record.action_taken = atMatch[1].trim().toLowerCase();
  }

  // Parse friction points
  const frictionMatch = content.match(/## Friction Points\s*\n([\s\S]*?)(?=##|$)/);
  if (frictionMatch) {
    const text = frictionMatch[1].trim();
    if (text && text !== 'None' && text !== 'N/A') {
      record.friction_points = text.split('\n')
        .map(l => l.trim().replace(/^-\s*/, ''))
        .filter(l => l.length > 0);
    }
  }

  // Promotion candidacy
  if (record.operator_feedback && ['yes', 'partial'].includes(record.action_taken) && record.friction_points.length === 0) {
    record.promotion_candidate = true;
  }

  return record;
}

// --- Avatar scoring ---
function scoreAvatars(engagements) {
  const stats = {};
  for (const eng of engagements) {
    for (const avatar of eng.avatars_invoked) {
      if (!stats[avatar]) stats[avatar] = { invocations: 0, positive_feedback: 0, actions_taken: 0, friction_mentions: 0 };
      const s = stats[avatar];
      s.invocations++;
      if (eng.operator_feedback && POSITIVE_WORDS.some(w => eng.operator_feedback.toLowerCase().includes(w))) s.positive_feedback++;
      if (['yes', 'partial'].includes(eng.action_taken)) s.actions_taken++;
      if (eng.friction_points.some(fp => fp.toLowerCase().includes(avatar))) s.friction_mentions++;
    }
  }

  const scored = {};
  for (const [avatar, s] of Object.entries(stats)) {
    const inv = s.invocations;
    const feedbackRate = inv > 0 ? s.positive_feedback / inv : 0;
    const actionRate = inv > 0 ? s.actions_taken / inv : 0;
    const frictionRate = inv > 0 ? s.friction_mentions / inv : 0;
    const score = Math.round((feedbackRate * 40 + actionRate * 40 - frictionRate * 20) * 10) / 10;
    scored[avatar] = { ...s, effectiveness_score: score };
  }

  return Object.fromEntries(Object.entries(scored).sort((a, b) => b[1].effectiveness_score - a[1].effectiveness_score));
}

// --- Routing analysis ---
function analyseRouting(engagements) {
  const typeMap = {}, scopeMap = {};
  const invoked = new Set();

  for (const eng of engagements) {
    for (const avatar of eng.avatars_invoked) {
      invoked.add(avatar);
      if (eng.type) {
        if (!typeMap[eng.type]) typeMap[eng.type] = {};
        typeMap[eng.type][avatar] = (typeMap[eng.type][avatar] || 0) + 1;
      }
      if (eng.scope) {
        if (!scopeMap[eng.scope]) scopeMap[eng.scope] = {};
        scopeMap[eng.scope][avatar] = (scopeMap[eng.scope][avatar] || 0) + 1;
      }
    }
  }

  const neverInvoked = ALL_AVATARS.filter(a => !invoked.has(a)).sort();

  return {
    type_avatar_distribution: typeMap,
    scope_avatar_distribution: scopeMap,
    never_invoked: neverInvoked,
    total_unique_avatars_used: invoked.size,
  };
}

// --- Friction analysis ---
function analyseFriction(engagements) {
  const allFriction = [];
  let withFriction = 0;
  for (const eng of engagements) {
    if (eng.friction_points.length > 0) {
      withFriction++;
      allFriction.push(...eng.friction_points);
    }
  }
  return {
    total_friction_points: allFriction.length,
    engagements_with_friction: withFriction,
    friction_rate: engagements.length > 0 ? Math.round(withFriction / engagements.length * 1000) / 10 : 0,
    friction_points: allFriction,
  };
}

// --- Promotion candidates ---
function identifyPromotions(engagements) {
  return engagements.filter(e => e.promotion_candidate).map(e => e.file);
}

// --- Markdown report ---
function generateMarkdown(engagements, avatarScores, routing, friction, promotions, reviewNum) {
  const now = new Date().toISOString().slice(0, 10);
  const total = engagements.length;
  const firstDate = engagements[total - 1]?.date || 'unknown';
  const lastDate = engagements[0]?.date || 'unknown';

  let md = `# Pattern Review #${reviewNum}\n\n`;
  md += `**Date:** ${now}\n**Engagements reviewed:** ${total}\n**Period:** ${firstDate} to ${lastDate}\n\n---\n\n`;

  // Avatar effectiveness
  md += `## Avatar Effectiveness\n\n`;
  md += `| Avatar | Invocations | Positive | Actions | Friction | Score |\n|---|---|---|---|---|---|\n`;
  for (const [avatar, s] of Object.entries(avatarScores)) {
    md += `| ${avatar} | ${s.invocations} | ${s.positive_feedback} | ${s.actions_taken} | ${s.friction_mentions} | ${s.effectiveness_score} |\n`;
  }

  // Routing
  md += `\n## Routing Analysis\n\n`;
  md += `**Unique avatars used:** ${routing.total_unique_avatars_used} / ${ALL_AVATARS.length}\n\n`;
  if (routing.never_invoked.length > 0) md += `**Never invoked:** ${routing.never_invoked.join(', ')}\n\n`;
  for (const [type, dist] of Object.entries(routing.type_avatar_distribution)) {
    md += `**${type}:** ${Object.entries(dist).map(([a, c]) => `${a} (${c})`).join(', ')}\n`;
  }

  // Friction
  md += `\n## Friction Analysis\n\n`;
  md += `**Friction rate:** ${friction.friction_rate}%\n**Total points:** ${friction.total_friction_points}\n\n`;
  if (friction.friction_points.length > 0) {
    for (const fp of friction.friction_points) md += `- ${fp}\n`;
  }

  // Promotions
  md += `\n## Promotion Candidates\n\n`;
  if (promotions.length > 0) {
    for (const p of promotions) md += `- \`${p}\`\n`;
  } else {
    md += `No engagements qualify for promotion in this period.\n`;
  }

  // Recommendations
  md += `\n---\n\n## Recommended Actions\n\n`;
  if (routing.never_invoked.length > 0) {
    md += `- **Routing gap:** ${routing.never_invoked.length} avatars never invoked. Review routing for: ${routing.never_invoked.slice(0, 5).join(', ')}\n`;
  }
  if (friction.friction_rate > 30) {
    md += `- **High friction:** ${friction.friction_rate}% of engagements had friction. Review top points for patterns.\n`;
  }
  if (promotions.length > 0) {
    md += `- **Promote examples:** ${promotions.length} engagement(s) qualify for few-shot promotion.\n`;
  }
  if (total === 0) {
    md += `- **No data yet.** Use the skill to generate engagement records, then re-run this script.\n`;
  }

  return md;
}

// --- Avatar freshness check ---
function checkAvatarFreshness(councilDir) {
  const avatarsDir = path.join(councilDir, 'avatars');
  if (!fs.existsSync(avatarsDir)) return [];

  const now = Date.now();
  const NINETY_DAYS = 90 * 24 * 60 * 60 * 1000;
  const results = [];

  const files = fs.readdirSync(avatarsDir)
    .filter(f => f.endsWith('.md') && f !== 'AVATAR-TEMPLATE.md');

  for (const file of files) {
    const filepath = path.join(avatarsDir, file);
    const stat = fs.statSync(filepath);
    const content = fs.readFileSync(filepath, 'utf8');
    const age = now - stat.mtimeMs;
    const daysOld = Math.floor(age / (24 * 60 * 60 * 1000));

    // Check for last_reviewed in frontmatter
    let lastReviewed = null;
    const reviewMatch = content.match(/last_reviewed:\s*(\d{4}-\d{2}-\d{2})/);
    if (reviewMatch) {
      lastReviewed = reviewMatch[1];
    }

    const stale = age > NINETY_DAYS;
    results.push({
      avatar: file.replace('.md', ''),
      last_modified: stat.mtime.toISOString().slice(0, 10),
      days_since_update: daysOld,
      last_reviewed: lastReviewed,
      stale,
      size_bytes: stat.size,
    });
  }

  return results.sort((a, b) => b.days_since_update - a.days_since_update);
}

// --- Eval expansion check ---
function checkEvalCoverage(engagements, councilDir) {
  const evalsPath = path.join(councilDir, 'evals', 'evals.json');
  const candidatesPath = path.join(councilDir, 'evals', 'candidates.json');
  
  if (!fs.existsSync(evalsPath)) return { new_candidates: 0, promoted: 0 };
  
  const evals = JSON.parse(fs.readFileSync(evalsPath, 'utf8'));
  const existingScopes = new Set(evals.evals.map(e => e.scope).filter(Boolean));
  const existingModes = new Set(evals.evals.map(e => e.interaction_mode).filter(Boolean));
  
  let candidates = { description: "Staging area for eval candidates", candidates: [] };
  if (fs.existsSync(candidatesPath)) {
    candidates = JSON.parse(fs.readFileSync(candidatesPath, 'utf8'));
  }

  let newCandidates = 0;
  let promoted = 0;

  for (const eng of engagements) {
    if (!eng.type || !eng.scope) continue;
    
    const novelDimensions = [];
    if (!existingScopes.has(eng.scope)) novelDimensions.push(`scope: ${eng.scope}`);
    if (!existingModes.has(eng.type)) novelDimensions.push(`mode: ${eng.type}`);
    
    if (novelDimensions.length === 0) continue;

    // Check if this pattern already exists in candidates
    const existingCandidate = candidates.candidates.find(c => 
      c.scope === eng.scope && c.mode === eng.type
    );

    if (existingCandidate) {
      existingCandidate.instances++;
      existingCandidate.similar_prompts.push(eng.file);
      
      // Promote at 3 instances
      if (existingCandidate.instances >= 3 && !existingCandidate.promoted) {
        const nextId = Math.max(...evals.evals.map(e => e.id), 0) + 1;
        evals.evals.push({
          id: nextId,
          prompt: existingCandidate.original_prompt,
          expected_output: `Auto-generated from ${existingCandidate.instances} similar engagements. Review and refine assertions.`,
          should_trigger: true,
          interaction_mode: existingCandidate.mode,
          scope: existingCandidate.scope,
          auto_generated: true,
          promoted_from_candidates: true,
          assertions: [
            { text: "Output addresses the specific problem type", type: "completeness" },
            { text: "Output includes specific actions with owners and deadlines", type: "actionability" },
            { text: "Output uses relevant avatar frameworks", type: "framework" }
          ]
        });
        existingCandidate.promoted = true;
        promoted++;
      }
    } else {
      candidates.candidates.push({
        captured_date: eng.date || new Date().toISOString().slice(0, 10),
        original_prompt: `[From engagement: ${eng.file}]`,
        novel_dimensions: novelDimensions,
        scope: eng.scope,
        mode: eng.type,
        tools_used: [],
        instances: 1,
        similar_prompts: [],
        promoted: false
      });
      newCandidates++;
    }
  }

  // Write back
  fs.writeFileSync(candidatesPath, JSON.stringify(candidates, null, 2));
  if (promoted > 0) {
    fs.writeFileSync(evalsPath, JSON.stringify(evals, null, 2));
  }

  return { new_candidates: newCandidates, promoted };
}

// --- Main ---
function main() {
  const config = parseArgs();
  const engDir = path.join(config.councilDir, 'learning', 'engagements');
  const reviewsDir = path.join(config.councilDir, 'learning', 'reviews');

  const files = findEngagementFiles(engDir, config.reviewPeriod);
  if (files.length === 0) {
    console.log('No engagement records found. Use the skill first to generate data.');
    console.log(`Looked in: ${engDir}`);
    process.exit(0);
  }

  const engagements = files.map(parseEngagement);
  console.log(`Parsed ${engagements.length} engagement records.\n`);

  const avatarScores = scoreAvatars(engagements);
  const routing = analyseRouting(engagements);
  const friction = analyseFriction(engagements);
  const promotions = identifyPromotions(engagements);

  // Eval expansion check
  const evalExpansion = checkEvalCoverage(engagements, config.councilDir);
  if (evalExpansion.new_candidates > 0) {
    console.log(`Eval expansion: ${evalExpansion.new_candidates} new candidate(s) captured.`);
  }
  if (evalExpansion.promoted > 0) {
    console.log(`Eval expansion: ${evalExpansion.promoted} candidate(s) promoted to evals.json.`);
  }

  // Avatar freshness check
  const freshness = checkAvatarFreshness(config.councilDir);
  const staleAvatars = freshness.filter(a => a.stale);
  if (staleAvatars.length > 0) {
    console.log(`\nAvatar freshness: ${staleAvatars.length} avatar(s) due for quarterly review.`);
    for (const a of staleAvatars) {
      console.log(`  ${a.avatar}: ${a.days_since_update} days since last update`);
    }
  }
  console.log('');

  // Determine review number
  const existingReviews = fs.existsSync(reviewsDir)
    ? fs.readdirSync(reviewsDir).filter(f => f.startsWith('review-')).length
    : 0;
  const reviewNum = existingReviews + 1;

  if (config.format === 'json') {
    const result = { review_number: reviewNum, engagements_reviewed: engagements.length, avatar_effectiveness: avatarScores, routing_analysis: routing, friction_analysis: friction, promotion_candidates: promotions, eval_expansion: evalExpansion };
    const outPath = path.join(reviewsDir, `review-${String(reviewNum).padStart(3, '0')}.json`);
    fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
    console.log(`Review saved to ${outPath}`);
    console.log(JSON.stringify(result, null, 2));
  } else {
    const report = generateMarkdown(engagements, avatarScores, routing, friction, promotions, reviewNum);
    
    // Append freshness section to report
    let freshnessSection = '\n## Avatar Freshness\n\n';
    freshnessSection += '| Avatar | Last Updated | Days Old | Status |\n|---|---|---|---|\n';
    for (const a of freshness) {
      const status = a.stale ? 'DUE FOR REVIEW' : 'Current';
      freshnessSection += `| ${a.avatar} | ${a.last_modified} | ${a.days_since_update} | ${status} |\n`;
    }
    if (staleAvatars.length > 0) {
      freshnessSection += `\n**${staleAvatars.length} avatar(s) are 90+ days old and due for quarterly freshness review.**\n`;
      freshnessSection += 'Run web search on each flagged avatar to check for new publications, talks, career changes, or framework updates.\n';
    }
    
    const fullReport = report + freshnessSection;
    const outPath = path.join(reviewsDir, `review-${String(reviewNum).padStart(3, '0')}.md`);
    fs.writeFileSync(outPath, fullReport);
    console.log(`Review saved to ${outPath}`);
    console.log(report);
  }
}

main();
