# Customer-Facing Output Gate

Any output destined for a customer, prospect, partner, or external stakeholder must
complete both passes below before delivery. Customer-facing documents carry the
operator's credibility — AI-generated patterns (em dashes, inflated language, generic
closings) are immediately detected by senior buyers and damage trust. If the council
produces the document, the council reviews the document, because the same model that
creates AI patterns is best positioned to catch them.

---

## What Triggers This Gate

- POVs, perspective papers, executive briefs, account briefs
- Emails to customers above Director level
- Proposals, pricing documents, commercial recommendations
- Presentation content (slide narratives, talk tracks, speaking notes)
- Any artifact the operator intends to send, share, or present externally

## What Does NOT Trigger This Gate

- Internal analysis (pipeline reviews, team diagnostics, forecasts)
- Coaching notes written for AMs
- Strategic thinking, brainstorming, or planning outputs
- Data pulls and dashboards for internal use

---

## Pass 1: Document Review (Four-Cohort Council)

Run `protocols/document-review.md` — the full four-cohort structure:
- Cohort 1 (Strategists): Does the argument hold commercially?
- Cohort 2 (Architects): Does the structure and logic hold?
- Cohort 3 (Reader Experience): How does it land cold?
- Cohort 4 (Psychology Team): Language, tone, format, pre-suasion

Minimum: Pass 1 (full structural review) + Pass 2 (verification). Pass 3 (final read)
required for documents going to C-level or first-time contacts.

---

## Pass 2: Humanizer Audit

After document review edits are applied, run the humanizer checklist before final
delivery. The council executes this directly using the embedded methodology:

1. Scan for all 30 AI writing patterns (see `templates/commercial-pov.md` Phase 7
   and `protocols/document-review.md` Humanizer Pass section)
2. Rewrite any flagged passages
3. Explicit audit: "What makes this still obviously AI-generated?" — answer in bullets
4. Final rewrite addressing remaining tells
5. Confirm: zero em dashes, zero AI vocabulary, zero theatrical closings

---

## Hard Rules (No Exceptions)

- No em dashes in final output
- No AI vocabulary: pivotal, underscores, showcase, vibrant, landscape, testament,
  highlight, foster, crucial, enhance, delve, tapestry
- No significance inflation, theatrical closings, or promotional language
- British audience register applied when reader is British (see `docs/british-audience-calibration.md`)
- Document ends when the argument ends — no performative closing line

---

## Enforcement

If the operator asks to skip either pass, acknowledge the request but state:
"This document will go to a customer without council review and humanizer audit.
Confirm you want to proceed." The operator can override — but must do so explicitly.

---

## Deterministic Validation (Claude Code / File System Environments)

On platforms with script execution (Claude Code, Cursor, Windsurf, Gemini CLI),
run `scripts/validate_output.js` after both passes complete. This replaces
probabilistic language checks with deterministic code execution.

```bash
# Default — core quality gates
node scripts/validate_output.js --file output.md

# Customer-facing (strictest — all quality gates)
node scripts/validate_output.js --file output.md --mode customer-facing

# Council session output
node scripts/validate_output.js --file output.md --mode council

# Coaching output
node scripts/validate_output.js --file output.md --mode coaching
```

**Exit codes:**
- `0` = All checks passed — output is clear for delivery
- `1` = Warnings only — proceed with review
- `2` = Hard failures — output must not be delivered as-is

**What the script checks deterministically:**
- Zero em dashes (`—`) — hard failure
- Zero banned AI vocabulary (30 terms) — hard failure
- Zero theatrical closings — hard failure
- Specific next steps present — warning
- Strong opener (no preamble) — warning
- Council: disagreement present — hard failure if absent
- Council: minimum 2 named avatars — hard failure if absent
- Coaching: Skill/Will/System diagnosis present — warning

On platforms without script execution, the language-based humanizer audit
(Pass 2 above) remains the enforcement mechanism.


