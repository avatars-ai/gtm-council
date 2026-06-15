# assets/

Copy-ready output artifacts. These are blank delivery documents — not instruction guides.

Claude copies the appropriate file, fills in the bracketed fields, and delivers the completed output. This makes output deterministic and consistent across sessions.

## Files

| File | Use when |
|---|---|
| `cliff-edge-memo.md` | Executive briefing, deal status update, risk escalation, CRO memo |
| `deal-qualification-card.md` | Full MEDDPICC qualification, deal inspection, stage gate review |
| `council-session-output.md` | Any council session — deal strategy, pipeline, coaching, marketing |
| `churn-save-brief.md` | Pre-call prep for any at-risk renewal or active churn situation |

## How Claude uses these

When producing a structured output in one of these categories, Claude:
1. Copies the relevant asset file
2. Fills all bracketed fields from gathered data
3. Deletes any sections not applicable to the specific situation
4. Runs `scripts/validate_output.js` (in Claude Code / file system environments)
5. Delivers the completed document

## Adding new assets

Follow the same pattern:
- Copy-ready format — no instructions, only structure
- Every section has a bracketed placeholder with a one-line hint
- Delete-don't-leave-blank discipline: sections without content are removed, not left empty
- Include a quality gate at the end if the asset type has specific delivery standards
