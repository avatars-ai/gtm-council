# Self-Learning Protocol

GTM OS improves through structured feedback loops. Three commands, one principle:
the skill proposes, the user confirms, the skill executes.

On platforms with file system access (Claude Code, Cursor, Windsurf, Gemini CLI),
changes are applied directly. On platforms without (Claude.ai, ChatGPT), changes
are presented as recommendations for manual application.

---

## /capture — Session Learning

**Trigger:** `/capture`, "capture learnings", "save what we learned"

Full protocol: `references/capture.md`

**Summary:**
1. Scan the conversation for corrections, calibrations, new patterns, data findings, eval candidates
2. Present structured report with specific file changes
3. On approval: apply changes, update CHANGELOG, bump patch version
4. Suggest `/eval --regression` to verify nothing broke

**Safety:** No silent writes. Every change requires explicit confirmation.

---

## /eval — Self-Testing

**Trigger:** `/eval`, "run evals", "test the skill"

Uses `evals/evals.json` and `scripts/run_eval.js`.

| Command | What It Does |
|---|---|
| `/eval` | Full suite — runs all evals, reports pass rate |
| `/eval --quick` | Spot check — 5 randomly selected evals |
| `/eval --id 7` | Single eval by ID |
| `/eval --regression` | Compares against last saved baseline in `evals/eval-results.json` |

**Output format:**
```
## Eval Results — v[version]
**Pass rate:** X/Y (Z%)
**Regression:** +/- N from baseline

### Failures
| Eval | Assertion | Expected | Got |
|---|---|---|---|

### Regression Analysis
[Which change likely caused any regressions]
```

On failure: propose targeted fix, present it, apply on confirmation.

**Platform note:** On platforms without script execution, `/eval` presents the eval
prompts for the user to test manually and score against the assertions.

---

## /optimise — Skill Optimisation

**Trigger:** `/optimise`, "optimise triggers", "optimise avatars", "optimise size"

### /optimise triggers

Tests the SKILL.md description against `evals/trigger-eval-queries.json`:
- Runs each query against the description
- Reports trigger accuracy (should-trigger hit rate, should-not-trigger rejection rate)
- Proposes description improvements
- Applies on confirmation

### /optimise avatars

Freshness check for avatar research:
- Web search each avatar's name + "2026" (or current year)
- Flag avatars with new books, talks, frameworks not yet captured
- Present update recommendations
- On approval: update avatar files with new material

### /optimise size

Token efficiency analysis:
- Measure Tier 0 file sizes
- Identify compression opportunities in framework-index.md
- Flag any files that have grown beyond their intended scope
- Propose specific cuts or consolidations

---

## Learning Directory Structure

```
learning/
├── README.md                    # How the learning system works
├── engagements/                 # Session logs from /capture
│   └── YYYY-MM-DD-topic.md
├── avatar-calibrations/         # Avatar-specific corrections
├── promoted-examples/           # Sessions promoted to examples/
├── reviews/                     # Quarterly freshness reviews
└── pending-captures/            # Saved but not yet applied
```

---

## Version Management

- `/capture` that applies changes: bumps **patch** (0.1.0 -> 0.1.1)
- New avatar or framework category: bumps **minor** (0.1.x -> 0.2.0)
- Structural changes to SKILL.md or protocols: bumps **minor**
- Breaking changes to interaction modes or eval format: bumps **major**

Every version bump updates:
1. `SKILL.md` frontmatter `version` field
2. `CHANGELOG.md` with dated entry
3. `docs/file-manifest.md` if file count changed

---

## Safety Rails

1. **No silent writes.** Every file modification requires explicit user confirmation.
2. **Version tracking.** Every applied `/capture` bumps the patch version and logs to CHANGELOG.
3. **Regression gate.** After applying changes, the skill suggests `/eval --regression`.
4. **Rollback documentation.** Before applying, note which files change and previous content.
5. **Eval integrity.** New eval candidates from `/capture` are added to `evals/candidates.json`
   first, then promoted to `evals/evals.json` only after the user reviews and approves assertions.
