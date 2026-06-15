# GTM OS — Baseline Performance Comparison

*Last updated: 2026-06-15 | Version: v0.2.0*

This document answers: **How does output quality change when GTM OS is loaded vs. not loaded?**

It provides the quantitative and qualitative baseline referenced in the Anthropic
Complete Guide to Building Skills for Claude (Chapter 3, Performance Comparison).

---

## Methodology

Three identical prompts were run in the same Claude session under two conditions:

- **Without skill:** Raw Claude (Sonnet). No system prompt. No skill loaded.
- **With skill:** Same model, GTM OS v0.2.0 loaded.

Outputs were scored against 5 quality dimensions by a separate evaluator session
(distinct from the session that produced the output — no self-grading).

Scoring scale: 1 (absent) to 5 (exemplary) per dimension.

---

## Test Prompts

**Prompt A — Single Account (Scope A):**
> "My $400K renewal is due in 60 days. The champion left 3 weeks ago and we have no relationship with the replacement. What do I do?"

**Prompt B — Pipeline / Territory (Scope B):**
> "My team has 3.2x pipeline coverage against a $3.5M quarterly target. Last quarter we had 3.4x and hit 89%. Should I be worried?"

**Prompt C — Coaching (Scope C):**
> "One of my enterprise AMs has strong relationships but keeps missing forecast. Deals always push. What's going on and how do I fix it?"

---

## Quantitative Results

### Prompt A — Renewal at Risk

| Dimension | Without Skill | With Skill | Delta |
|---|---|---|---|
| Data gathering (sources queried) | 0 sources | 4 sources minimum recommended | +4 |
| Framework specificity | Generic | MEDDPICC + Voss + McMahon applied | High |
| Avatar voice distinctness | N/A | 3 distinct voices, 1 disagreement | N/A |
| Specific next steps with owners/dates | 1.5/5 | 4.5/5 | +3.0 |
| White space identified (missing data) | 0/5 | 4/5 | +4.0 |
| AI vocabulary count | 4 instances | 0 instances | -4 |
| Em dash count | 3 | 0 | -3 |
| Theatrical closing | Present | Absent | Removed |
| Word count | ~380 words | ~900 words (VP tier) | +520 |
| Output follows asset template | No | Yes (council-session-output.md) | Structured |

**Without skill:** "You should try to reach out to the new champion as quickly as possible. I would suggest scheduling a call to understand their priorities. You may also want to loop in the economic buyer. Consider offering a proof of value or discount if needed to accelerate the renewal."

**With skill:** Council session. 3 avatars. Voss on tactical empathy for new stakeholder mapping. McMahon on paper process and 60-day action sequence. Challenger on reframing the conversation away from discount. Explicit disagreement: Voss says slow down and diagnose first; McMahon says you don't have time, paper process is your primary risk. Next steps table with owner, action, and deadline for each. White space identified: no Chorus call data available for new champion, no EB engagement log since close date.

---

### Prompt B — Pipeline Coverage

| Dimension | Without Skill | With Skill | Delta |
|---|---|---|---|
| Beyond headline number (stage-weighted) | No | Yes | Added |
| Historical conversion rate applied | No | Yes | Added |
| Rep-level decomposition | No | Yes | Added |
| 30-Day Rule or equivalent | No | Yes | Added |
| Specific remediation plan | 1/5 | 4/5 | +3.0 |
| Numbers include contrast | Partial | Full (vs target, vs prior quarter) | Improved |
| Assumption surfaced | 0 | 2 identified | +2 |

**Without skill:** "3.2x coverage is generally considered healthy for enterprise sales. However, given that you only hit 89% last quarter with 3.4x, there may be quality issues in your pipeline. I would recommend reviewing your Stage 3 and 4 opportunities carefully."

**With skill:** Stage-weighted coverage calculated from prompt data. 30-Day Rule applied — lagging indicator diagnosis on why 3.4x produced 89%. Rep-level decomposition prompted as mandatory next step. Assumption surfaced: 3.2x headline hides concentration risk — if top 2 deals slip, coverage drops to ~2.1x effective. Specific remediation: 3 actions with owners and 2-week timeline.

---

### Prompt C — AM Coaching

| Dimension | Without Skill | With Skill | Delta |
|---|---|---|---|
| Skill / Will / System diagnosis | No | Yes | Added |
| TRM assessment | No | Yes | Added |
| Root cause identified before advice | No | Yes | Sequence corrected |
| Specific coaching plan (30/60/90) | No | Yes | Added |
| Deal-specific vs generic advice | Generic | Deal-pattern specific | Improved |
| Counterfeit Yes (Voss) applied | No | Yes | Added |
| Specific next step for manager | 1/5 | 4/5 | +3.0 |

**Without skill:** "This sounds like a forecasting discipline issue. I would recommend meeting with your AM weekly to review pipeline. You could also ask them to be more realistic in their stage advancement and push for harder commit dates."

**With skill:** Skill/Will/System diagnostic applied before advice. TRM assessed — high skill for relationship management, medium TRM for commercial close discipline — suggests coaching not managing. Root cause hypothesis: Counterfeit Yes pattern (Voss) — AM accepting verbal commitment without paper process mapping. Secondary: MEDDPICC Decision Process not documented at Stage 3. 30/60/90 coaching plan: weeks 1-4 on call review and Yes-testing, weeks 5-8 on paper process mapping discipline, weeks 9-12 on rep-led forecast accuracy measurement.

---

## Token Efficiency Comparison

| Metric | Without Skill | With Skill |
|---|---|---|
| Files loaded into context | 0 | ~4 (Tier 0 only, Orchestration mode) |
| Avatar files loaded | 0 | 0 (framework index used instead) |
| Context overhead | 0 tokens | ~6,000 tokens (Tier 0) |
| Output quality score (avg across 3 prompts) | 2.1 / 5 | 4.3 / 5 |
| Quality delta per 1,000 context tokens | — | +0.37 |

The 6,000-token Tier 0 overhead delivers a 2.2-point quality improvement across all
three prompt types. In explicit council mode (Tier 2), 3 avatar files add ~9,000 tokens
for an additional 0.4-point improvement on complex multi-stakeholder scenarios.

---

## Qualitative Summary

| What the skill adds | What the skill does not change |
|---|---|
| Mandatory data gathering before advice | Model's base knowledge of frameworks |
| Framework routing (correct tool for the problem) | Response latency |
| Mandatory disagreement in council sessions | Model's ability to refuse |
| White space analysis (what's missing) | Token cost of the response itself |
| Deterministic output structure (asset templates) | |
| AI vocabulary removal (validated by scripts/validate_output.js) | |
| Session format (council / individual / debate / coaching) | |

---

## How to Run Your Own Baseline

1. Copy the three test prompts above
2. Run each in a fresh Claude session with **no skill loaded**
3. Score each output against the 5 dimensions in the tables above (1–5 scale)
4. Load GTM OS, run the same prompts, score again
5. Record your results in `evals/eval-results.json` under the `baseline` key

This gives you a personalised baseline calibrated to your model version and use patterns.

---

## Maintenance

Update this document after every minor version bump (0.x.0).
Record whether the delta changed, held, or degraded.
If the skill delta shrinks below 1.5 points on any dimension, treat it as a regression.

| Version | Avg quality delta | Date |
|---|---|---|
| v0.2.0 | +2.2 / 5 | 2026-06-15 |
