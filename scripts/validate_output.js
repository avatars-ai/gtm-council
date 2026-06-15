#!/usr/bin/env node
/**
 * GTM OS — Output Validator
 *
 * Deterministic pre-delivery checks run against any output before it leaves
 * the skill. Replaces probabilistic language instructions with code execution.
 *
 * Usage (Claude Code / Cursor / Windsurf / Gemini CLI):
 *   node scripts/validate_output.js --text "output text here"
 *   node scripts/validate_output.js --file path/to/output.md
 *   node scripts/validate_output.js --file output.md --mode customer-facing
 *   node scripts/validate_output.js --file output.md --mode council
 *   node scripts/validate_output.js --file output.md --mode coaching
 *
 * Exit codes:
 *   0 = All checks passed
 *   1 = Warnings only (output can proceed with review)
 *   2 = Hard failures (output must not be delivered as-is)
 */

'use strict';

const fs = require('fs');

// ---------------------------------------------------------------------------
// Rule definitions
// ---------------------------------------------------------------------------

const AI_VOCABULARY = [
  'pivotal', 'underscores', 'showcase', 'vibrant', 'landscape',
  'testament', 'highlight', 'foster', 'crucial', 'enhance', 'delve',
  'tapestry', 'transformative', 'leverage', 'navigate', 'synergy',
  'game-changer', 'paradigm', 'holistic', 'seamless', 'robust',
  'innovative', 'cutting-edge', 'best-in-class', 'world-class',
  'actionable insights', 'move the needle', 'at the end of the day',
  'in today\'s landscape', 'it\'s worth noting', 'it is important to note',
  'I hope this helps', 'feel free to', 'please let me know',
  'great question', 'certainly', 'absolutely', 'of course',
  'dive into', 'delve into', 'explore', 'journey', 'unlock', 'empower'
];

const THEATRICAL_CLOSINGS = [
  /in conclusion[,.]?/i,
  /to summarize[,.]?/i,
  /in summary[,.]?/i,
  /to wrap up[,.]?/i,
  /hope this helps/i,
  /let me know if you have any questions/i,
  /feel free to reach out/i,
  /don't hesitate to/i,
  /i trust this/i,
  /i believe this/i,
  /this should give you/i
];

const QUALITY_GATE_RULES = {
  'no-em-dash': {
    level: 'hard',
    description: 'No em dashes in output (AI writing tell)',
    test: (text) => {
      const matches = text.match(/\u2014|—/g);
      return matches
        ? { pass: false, detail: `Found ${matches.length} em dash(es). Replace with commas, colons, or rewrite.` }
        : { pass: true };
    }
  },
  'no-ai-vocabulary': {
    level: 'hard',
    description: 'No banned AI vocabulary',
    test: (text) => {
      const found = AI_VOCABULARY.filter(word => {
        const pattern = new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        return pattern.test(text);
      });
      return found.length
        ? { pass: false, detail: `Banned words found: ${found.join(', ')}` }
        : { pass: true };
    }
  },
  'no-theatrical-closing': {
    level: 'hard',
    description: 'No theatrical closings',
    test: (text) => {
      const lastParagraph = text.split('\n').filter(l => l.trim()).slice(-3).join(' ');
      const found = THEATRICAL_CLOSINGS.filter(pattern => pattern.test(lastParagraph));
      return found.length
        ? { pass: false, detail: `Theatrical closing detected in final lines. Remove or rewrite the ending.` }
        : { pass: true };
    }
  },
  'has-next-steps': {
    level: 'warn',
    description: 'Output ends with specific next steps',
    test: (text) => {
      const hasNextSteps = /next step|action|by \[date\]|owner|timeline|priority/i.test(text);
      return hasNextSteps
        ? { pass: true }
        : { pass: false, detail: 'No next steps or actions detected. GTM OS output must end with specific, time-bound actions.' };
    }
  },
  'has-big-idea': {
    level: 'warn',
    description: 'Output opens with a clear position (not preamble)',
    test: (text) => {
      const firstLine = text.split('\n').find(l => l.trim() && !l.startsWith('#'));
      if (!firstLine) return { pass: false, detail: 'No opening line detected.' };
      const isWeak = /^(this|here|in this|let me|i will|the purpose|below|as requested)/i.test(firstLine.trim());
      return isWeak
        ? { pass: false, detail: `Weak opener detected: "${firstLine.trim().substring(0, 80)}..." — start with the Big Idea, not a preamble.` }
        : { pass: true };
    }
  }
};

const COUNCIL_RULES = {
  'has-disagreement': {
    level: 'hard',
    description: 'Council session must contain at least one point of disagreement',
    test: (text) => {
      const hasDisagreement = /disagree|challenge|however|contrary|tension|pushback|on the other hand|alternatively|disputes|counters/i.test(text);
      return hasDisagreement
        ? { pass: true }
        : { pass: false, detail: 'No disagreement or tension detected. A council where all avatars agree has failed (Gotcha #3 — Consensus Smoothing).' };
    }
  },
  'has-multiple-avatars': {
    level: 'hard',
    description: 'Council session must name at least 2 distinct avatars',
    test: (text) => {
      const avatarSection = text.match(/###\s+[\w\s]+\n/g) || [];
      const unique = [...new Set(avatarSection.map(s => s.trim()))];
      return unique.length >= 2
        ? { pass: true }
        : { pass: false, detail: `Only ${unique.length} named avatar section(s) found. Council sessions require at least 2 distinct avatars.` };
    }
  },
  'has-data-sources': {
    level: 'warn',
    description: 'Council session should reference data sources consulted',
    test: (text) => {
      const hasData = /data sources|salesforce|chorus|enrichment|snowflake|meeting intelligence|intent signal/i.test(text);
      return hasData
        ? { pass: true }
        : { pass: false, detail: 'No data source references detected. Council output should reference what was gathered (Gotcha #2 — Data-Free Advice).' };
    }
  }
};

const COACHING_RULES = {
  'names-skill-will-or-system': {
    level: 'warn',
    description: 'Coaching output should diagnose Skill, Will, or System root cause',
    test: (text) => {
      const hasDiag = /skill|will|system|trm|task.relevant maturity|capability|motivation|process/i.test(text);
      return hasDiag
        ? { pass: true }
        : { pass: false, detail: 'No Skill/Will/System diagnosis detected. Coaching output without a root cause diagnosis is incomplete.' };
    }
  }
};

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { text: null, file: null, mode: 'default' };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--text' && args[i + 1]) config.text = args[++i];
    if (args[i] === '--file' && args[i + 1]) config.file = args[++i];
    if (args[i] === '--mode' && args[i + 1]) config.mode = args[++i];
  }
  return config;
}

function loadText(config) {
  if (config.text) return config.text;
  if (config.file) {
    if (!fs.existsSync(config.file)) {
      console.error(`File not found: ${config.file}`);
      process.exit(2);
    }
    return fs.readFileSync(config.file, 'utf8');
  }
  // Read from stdin if available
  try {
    return fs.readFileSync('/dev/stdin', 'utf8');
  } catch {
    console.error('No input provided. Use --text "..." or --file path.md');
    process.exit(2);
  }
}

function selectRules(mode) {
  const rules = { ...QUALITY_GATE_RULES };
  if (mode === 'customer-facing') {
    // All quality gate rules — strictest mode
    return rules;
  }
  if (mode === 'council') {
    return { ...rules, ...COUNCIL_RULES };
  }
  if (mode === 'coaching') {
    return { ...rules, ...COACHING_RULES };
  }
  // Default: core quality gates only
  return rules;
}

function runValidation(text, mode) {
  const rules = selectRules(mode);
  const results = [];

  for (const [id, rule] of Object.entries(rules)) {
    const result = rule.test(text);
    results.push({
      id,
      level: rule.level,
      description: rule.description,
      pass: result.pass,
      detail: result.detail || null
    });
  }

  return results;
}

function printResults(results, mode) {
  const hardFails = results.filter(r => !r.pass && r.level === 'hard');
  const warnings  = results.filter(r => !r.pass && r.level === 'warn');
  const passes    = results.filter(r => r.pass);

  console.log(`\n${'='.repeat(60)}`);
  console.log(`GTM OS OUTPUT VALIDATOR`);
  console.log(`Mode: ${mode} | Rules checked: ${results.length}`);
  console.log(`${'='.repeat(60)}\n`);

  if (passes.length) {
    console.log(`PASSED (${passes.length})`);
    for (const r of passes) {
      console.log(`  [PASS] ${r.id}: ${r.description}`);
    }
  }

  if (warnings.length) {
    console.log(`\nWARNINGS (${warnings.length}) — review before delivery`);
    for (const r of warnings) {
      console.log(`  [WARN] ${r.id}: ${r.description}`);
      if (r.detail) console.log(`         ${r.detail}`);
    }
  }

  if (hardFails.length) {
    console.log(`\nHARD FAILURES (${hardFails.length}) — output must not be delivered`);
    for (const r of hardFails) {
      console.log(`  [FAIL] ${r.id}: ${r.description}`);
      if (r.detail) console.log(`         ${r.detail}`);
    }
  }

  console.log(`\n${'='.repeat(60)}`);

  if (hardFails.length) {
    console.log(`RESULT: BLOCKED — Fix ${hardFails.length} hard failure(s) before delivery.\n`);
    return 2;
  }
  if (warnings.length) {
    console.log(`RESULT: PROCEED WITH REVIEW — ${warnings.length} warning(s) to address.\n`);
    return 1;
  }
  console.log(`RESULT: CLEAR — All checks passed.\n`);
  return 0;
}

function main() {
  const config = parseArgs();
  const text = loadText(config);
  const results = runValidation(text, config.mode);
  const exitCode = printResults(results, config.mode);
  process.exit(exitCode);
}

main();
