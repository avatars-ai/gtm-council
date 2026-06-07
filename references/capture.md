# /capture — Session Learning Capture

**Trigger:** User types `/capture` or "capture learnings" or "save what we learned"

**Purpose:** Structured process for capturing corrections, calibrations, and new
patterns from the current session before context is lost. On platforms with file
system access (Claude Code, Cursor, Windsurf, Gemini CLI), the skill can apply
changes directly. On platforms without file access (Claude.ai, ChatGPT), the skill
presents the report for the user to apply manually.

---

## Step 1: Session Review

Scan the full conversation and identify:

1. **Corrections** — Where did the user correct the output? What was wrong
   and what was the right answer? These become protocol fixes or meta-learnings.

2. **Calibrations** — Where did the user adjust the approach, tone, framing,
   or methodology? These become operator-context updates or avatar calibrations.

3. **New patterns** — Did a new framework, diagnostic, or interaction pattern emerge
   that isn't captured in the skill? These become framework-index additions.

4. **Data findings** — Were specific data points discovered that future sessions should
   know? (e.g., "ACV_Rollup__c is a lifetime sum", "call recording is banned at account X")

5. **Eval candidates** — Did the session test a scenario that should become a formal
   eval? Describe the prompt and assertions.

## Step 2: Structured Output

Present findings in this format:

```
## /capture — Session Learning Report

**Session date:** [date]
**Operator:** [name]
**Session topic:** [1-line summary]

### Corrections (protocol/framework fixes)
| # | What was wrong | What's right | File to update |
|---|---|---|---|
| 1 | ... | ... | ... |

### Calibrations (approach/tone adjustments)
| # | What was adjusted | New standard | File to update |
|---|---|---|---|
| 1 | ... | ... | ... |

### New Patterns (framework/diagnostic additions)
| # | Pattern | Where it applies | Proposed location |
|---|---|---|---|
| 1 | ... | ... | ... |

### Data Findings (facts to remember)
| # | Finding | Source | Impact |
|---|---|---|---|
| 1 | ... | ... | ... |

### Eval Candidates
| # | Scenario | Assertions | Priority |
|---|---|---|---|
| 1 | ... | ... | ... |

### Recommended File Updates
| File | Change | Priority |
|---|---|---|
| ... | ... | HIGH/MEDIUM/LOW |
```

## Step 3: Apply or Save

**On platforms with file system access:**
Ask: *"Which of these should I apply now?"*

If the user says apply:
- Write corrections to the relevant protocol/framework files
- Write calibrations to operator-context or avatar files
- Add new patterns to `council/framework-index.md`
- Add eval candidates to `evals/evals.json`
- Write an engagement record to `learning/engagements/`
- Update `CHANGELOG.md` with the changes
- Bump the patch version in SKILL.md frontmatter
- Suggest running `/eval --regression` to verify nothing broke

If the user says review later:
- Save the full /capture report to `learning/pending-captures/[date]-[topic].md`
- The report can be applied in a future session

**On platforms without file system access:**
Present the report and say: *"Copy these changes to the files listed. If you need
help with the exact edits, I can show you the before/after for each file."*

## What /capture Does NOT Do

- It does not modify the skill silently — every change requires user confirmation
- It does not capture personal information or data outside the session
- It does not replace formal eval runs — it identifies eval CANDIDATES
- It does not auto-increment the version — version bumps happen only when changes are applied
