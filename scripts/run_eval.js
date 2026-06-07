#!/usr/bin/env node
// Created by AZS
/**
 * Eval runner and grader for the GTM Council skill.
 * Designed to run in Cowork/Mesh environments where Python and subagents
 * are not available.
 * 
 * This script:
 * 1. Reads evals/evals.json
 * 2. Presents each test case with its assertions
 * 3. Accepts grading input (from a file or interactive)
 * 4. Generates a benchmark report
 * 
 * Usage:
 *   node scripts/run_eval.js --council-dir ./gtm-council [--grade results.json] [--report]
 * 
 * Workflow:
 *   1. Run without --grade to see test cases and assertions
 *   2. Execute each test prompt in a Mesh session with the skill loaded
 *   3. Grade each output against assertions in results.json
 *   4. Run with --grade results.json --report to generate benchmark
 */

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const config = { councilDir: 'gtm-council', grade: null, report: false };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--council-dir' && args[i + 1]) config.councilDir = args[++i];
    if (args[i] === '--grade' && args[i + 1]) config.grade = args[++i];
    if (args[i] === '--report') config.report = true;
  }
  return config;
}

function loadEvals(councilDir) {
  const evalsPath = path.join(councilDir, 'evals', 'evals.json');
  if (!fs.existsSync(evalsPath)) {
    console.error(`Evals file not found: ${evalsPath}`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(evalsPath, 'utf8'));
}

function printTestCases(evals) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`GTM COUNCIL EVALUATION SET`);
  console.log(`Skill: ${evals.skill_name}`);
  console.log(`Total test cases: ${evals.evals.length}`);
  console.log(`Should trigger: ${evals.evals.filter(e => e.should_trigger).length}`);
  console.log(`Should NOT trigger: ${evals.evals.filter(e => !e.should_trigger).length}`);
  console.log(`Total assertions: ${evals.evals.reduce((s, e) => s + (e.assertions || []).length, 0)}`);
  console.log(`${'='.repeat(70)}\n`);

  for (const ev of evals.evals) {
    console.log(`${'─'.repeat(70)}`);
    console.log(`EVAL ${ev.id}: ${ev.should_trigger ? 'SHOULD TRIGGER' : 'SHOULD NOT TRIGGER'}`);
    if (ev.interaction_mode) console.log(`Mode: ${ev.interaction_mode} | Scope: ${ev.scope}`);
    console.log(`\nPrompt:\n  "${ev.prompt}"\n`);
    console.log(`Expected:\n  ${ev.expected_output}\n`);
    if (ev.assertions && ev.assertions.length > 0) {
      console.log(`Assertions (${ev.assertions.length}):`);
      for (const a of ev.assertions) {
        console.log(`  [${a.type}] ${a.text}`);
      }
    }
    console.log('');
  }

  console.log(`${'='.repeat(70)}`);
  console.log(`\nTo grade: Create a results file with this structure:`);
  console.log(`{`);
  console.log(`  "results": [`);
  console.log(`    { "eval_id": 1, "triggered": true, "assertions": { "0": true, "1": false, ... }, "notes": "..." },`);
  console.log(`    ...`);
  console.log(`  ]`);
  console.log(`}`);
  console.log(`\nThen run: node scripts/run_eval.js --grade results.json --report\n`);
}

function gradeResults(evals, resultsPath) {
  if (!fs.existsSync(resultsPath)) {
    console.error(`Results file not found: ${resultsPath}`);
    process.exit(1);
  }
  const results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));

  const report = {
    timestamp: new Date().toISOString(),
    skill: evals.skill_name,
    total_evals: evals.evals.length,
    results: [],
    summary: { total_assertions: 0, passed_assertions: 0, trigger_accuracy: 0, overall_score: 0 },
  };

  let triggerCorrect = 0;
  let totalAssertions = 0;
  let passedAssertions = 0;

  for (const ev of evals.evals) {
    const result = results.results.find(r => r.eval_id === ev.id);
    if (!result) {
      report.results.push({ eval_id: ev.id, status: 'NOT_GRADED', reason: 'No result provided' });
      continue;
    }

    // Trigger accuracy
    const triggerMatch = ev.should_trigger === result.triggered;
    if (triggerMatch) triggerCorrect++;

    // Assertion grading
    const assertionResults = [];
    if (ev.assertions && result.assertions) {
      for (let i = 0; i < ev.assertions.length; i++) {
        const assertion = ev.assertions[i];
        const passed = result.assertions[String(i)] === true;
        totalAssertions++;
        if (passed) passedAssertions++;
        assertionResults.push({
          text: assertion.text,
          type: assertion.type,
          passed,
        });
      }
    }

    report.results.push({
      eval_id: ev.id,
      trigger_correct: triggerMatch,
      assertions: assertionResults,
      assertion_pass_rate: assertionResults.length > 0
        ? Math.round(assertionResults.filter(a => a.passed).length / assertionResults.length * 100)
        : null,
      notes: result.notes || '',
    });
  }

  report.summary = {
    total_evals: evals.evals.length,
    graded: results.results.length,
    trigger_accuracy: Math.round(triggerCorrect / Math.max(results.results.length, 1) * 100),
    total_assertions: totalAssertions,
    passed_assertions: passedAssertions,
    assertion_pass_rate: totalAssertions > 0 ? Math.round(passedAssertions / totalAssertions * 100) : 0,
    overall_score: totalAssertions > 0
      ? Math.round((triggerCorrect / Math.max(results.results.length, 1) * 30 + passedAssertions / totalAssertions * 70))
      : 0,
  };

  return report;
}

function printBenchmark(report) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`GTM COUNCIL BENCHMARK REPORT`);
  console.log(`${'='.repeat(70)}\n`);
  console.log(`Timestamp: ${report.timestamp}`);
  console.log(`Skill: ${report.skill}`);
  console.log(`Evals graded: ${report.summary.graded} / ${report.summary.total_evals}\n`);

  console.log(`SUMMARY`);
  console.log(`${'─'.repeat(40)}`);
  console.log(`Trigger accuracy:    ${report.summary.trigger_accuracy}%`);
  console.log(`Assertion pass rate: ${report.summary.assertion_pass_rate}% (${report.summary.passed_assertions}/${report.summary.total_assertions})`);
  console.log(`Overall score:       ${report.summary.overall_score}%`);
  console.log(`${'─'.repeat(40)}\n`);

  console.log(`PER-EVAL BREAKDOWN`);
  console.log(`${'─'.repeat(70)}`);
  for (const r of report.results) {
    if (r.status === 'NOT_GRADED') {
      console.log(`Eval ${r.eval_id}: NOT GRADED`);
      continue;
    }
    const triggerIcon = r.trigger_correct ? 'PASS' : 'FAIL';
    const assertRate = r.assertion_pass_rate !== null ? `${r.assertion_pass_rate}%` : 'N/A';
    console.log(`Eval ${r.eval_id}: Trigger=${triggerIcon} | Assertions=${assertRate}`);
    if (r.assertions) {
      for (const a of r.assertions) {
        const icon = a.passed ? 'PASS' : 'FAIL';
        console.log(`  [${icon}] [${a.type}] ${a.text}`);
      }
    }
    if (r.notes) console.log(`  Notes: ${r.notes}`);
    console.log('');
  }

  // Identify weaknesses
  const failedAssertions = report.results
    .flatMap(r => (r.assertions || []).filter(a => !a.passed))
    .reduce((acc, a) => { acc[a.type] = (acc[a.type] || 0) + 1; return acc; }, {});

  if (Object.keys(failedAssertions).length > 0) {
    console.log(`WEAKNESS ANALYSIS`);
    console.log(`${'─'.repeat(40)}`);
    for (const [type, count] of Object.entries(failedAssertions).sort((a, b) => b[1] - a[1])) {
      console.log(`  ${type}: ${count} failure(s)`);
    }
    console.log('');
  }
}

function main() {
  const config = parseArgs();
  const evals = loadEvals(config.councilDir);

  if (config.grade) {
    const report = gradeResults(evals, config.grade);
    printBenchmark(report);

    if (config.report) {
      const reportPath = path.join(config.councilDir, 'evals', 'benchmark.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`Benchmark saved to ${reportPath}`);

      const mdPath = path.join(config.councilDir, 'evals', 'benchmark.md');
      let md = `# GTM Council Benchmark\n\n`;
      md += `**Date:** ${report.timestamp}\n`;
      md += `**Overall score:** ${report.summary.overall_score}%\n`;
      md += `**Trigger accuracy:** ${report.summary.trigger_accuracy}%\n`;
      md += `**Assertion pass rate:** ${report.summary.assertion_pass_rate}%\n\n`;
      md += `| Eval | Trigger | Assertions | Notes |\n|---|---|---|---|\n`;
      for (const r of report.results) {
        if (r.status === 'NOT_GRADED') {
          md += `| ${r.eval_id} | - | - | Not graded |\n`;
        } else {
          md += `| ${r.eval_id} | ${r.trigger_correct ? 'PASS' : 'FAIL'} | ${r.assertion_pass_rate ?? 'N/A'}% | ${r.notes || ''} |\n`;
        }
      }
      fs.writeFileSync(mdPath, md);
      console.log(`Markdown report saved to ${mdPath}`);
    }
  } else {
    printTestCases(evals);
  }
}

main();
