# Example: Pipeline Diagnosis — Coverage Gap

> Worked example showing the complete flow: operator asks → data-gathering sweep
> runs → tool results summarised → white space identified → avatars advise with real data.

## Operator Input

*"My enterprise segment has 3.1x pipeline coverage against a $4M quarterly target.
On paper that's close to minimum. But something feels off — we had 3.5x last quarter
and only hit 92% of plan. Should I be worried?"*

---

## Step 1: Data-Gathering Sweep — Scope B (Territory/Book)

**Scope:** B (Territory). Operator = Director+ → aggregate-first, deep-dive on exceptions only.

### Layer 1 — Aggregate Queries

**Salesforce — Pipeline summary (5 reps):**
- Total open: $12.4M. Stage 3+: $6.7M. Total coverage: 3.1x. Stage 3+ coverage: 1.7x.
- **Exceptions:** Rep B — $3.1M pipeline but $2.3M (74%) in ONE 112-day deal, 0 new opps in 60 days. Rep D — $1.2M pipeline, 0.6x coverage, 3 meetings in 60 days, 87-day stale deal.
- Historical conversion: ~27% (consistent across last 4 quarters).
- Closed-lost (90 days): 6 deals/$1.8M. 2 losses to same competitor.

**Chorus (thematic search):**
- Competitor mentioned on 4 calls across 3 accounts in 30 days (up from 1). Prospect: "Your competitor showed us their new AI features."
- Rep B: low discovery quality. Rep D: 2 calls in 60 days, low energy.
- Rep E: consistently multi-threading (3+ stakeholders per deal).

### Layer 2 — Exceptions Identified
1. Rep B's whale deal ($2.3M, 112 days) — concentration risk, no activity
2. Rep D's target account — 87-day stale deal, minimal rep activity
3. Competitor win — one of the 2 losses, same competitor appearing on calls

### Layer 3 — Deep-Dives (3 flagged accounts only)

| Source | Key Findings |
|---|---|
| Intent Signals | 8 accounts showing intent for "sales intelligence" / "revenue operations" — 5 NOT in pipeline |
| Company Intelligence | Competitor raised Series D ($120M), announced 3 new EMEA hires |
| Contact Discovery | Rep D's targets: 6 VP+ contacts each, only 1 per account in CRM |
| Web Search | Competitor published case study vs your platform. Analyst report: "buyers evaluating AI-native alternatives" |

---

## Step 2: White Space Analysis (What's NOT There)

| Gap Type | Finding |
|---|---|
| **Pipeline creation gap** | Rep B: 0 new opps in 60 days. Rep D: 0 new opps in 60 days. Two of five reps have stopped generating. |
| **Stage progression gap** | $12.4M total but only $6.7M at Stage 3+. 46% of pipeline is early-stage — won't convert in-quarter. |
| **Intent response gap** | 5 accounts showing active intent signals for your category. None are in any rep's pipeline. |
| **Competitive response gap** | Competitor mentioned on 4 calls (4x increase). No competitive battle card or positioning guidance issued to team. |
| **Contact coverage gap** | Rep D's target accounts have 6 VP+ contacts each, only 1 in CRM per account. Single-threaded on target accounts. |
| **Deal concentration risk** | Rep B has $3.1M pipeline but $2.3M (74%) is ONE deal that's 112 days old. If that deal slips, Rep B's effective coverage drops to 1.2x. |

---

## Step 3: Cross-Validation & Confidence

- Coverage math: 3.1x at historical 26.3% conversion = 81.5% predicted attainment. Operator's gut is correct — this misses plan.
- Stage 3+ coverage of 1.7x is the real number. At 45% Stage 3+ conversion, that's 76.5% attainment.
- Activity decline started ~60 days ago for Rep B and Rep D — aligns with the pipeline decline from 3.5x to 3.1x.
- Competitive threat is real and growing: Series D funding, EMEA expansion, 4x increase in call mentions, published case study.

**Overall confidence:** High. Multiple data sources converge on the same diagnosis.

---

## Council Session Output

**Mode:** Council Session
**Data Sources:** Salesforce (pipeline, activity, closed-lost), Chorus (×2), enrichment platform (intent, scoops, contacts), Web Search
**Avatars Present:** Kyle Norton, Jeb Blount, Mark Roberge, Donella Meadows

---

### Kyle Norton — Revenue Operating System

**Diagnosis:** The blended 3.1x is hiding three distinct problems. Let me decompose:

**Problem 1 — Two reps have stopped generating.** Rep B and Rep D created zero new opportunities in 60 days. Rep B is hiding behind a $2.3M whale deal that's 112 days old. Rep D has had 3 meetings in 60 days. This isn't a pipeline problem — it's an activity problem concentrated in 40% of the team.

**Problem 2 — Stage 3+ coverage is 1.7x, not 3.1x.** 46% of the pipeline is Stage 1-2. At enterprise sales cycles, that pipeline won't close this quarter. The number that matters for THIS quarter is 1.7x — and that predicts ~76% attainment.

**Problem 3 — The system isn't catching signals.** Five accounts showing active intent for your category aren't in anyone's pipeline. A competitor is expanding in EMEA and being mentioned 4x more on calls. Neither signal triggered an action. That's a system gap.

**Revenue Operating System fix:**
- **Coverage alert:** When any rep drops below 3.0x Stage 3+ coverage, auto-flag in the weekly forecast
- **Intent routing:** Intent signals above threshold auto-create tasks for the assigned rep. No manual monitoring.
- **Competitive alert:** When competitor mentions increase >2x in any 30-day period, trigger a team-level competitive response

---

### Jeb Blount — Pipeline Discipline

**Diagnosis:** The data confirms what your gut told you. But the problem isn't "coverage is 3.1x." The problem is Rep B and Rep D have STOPPED PROSPECTING. And nobody caught it for 60 days.

**The 30-Day Rule applied:** The pipeline you need in Q4 depends on prospecting that happens NOW. Rep B hasn't prospected in 60 days. Rep D hasn't meaningfully prospected in 60 days. That's 60 days of zero input into the pipeline engine for 40% of your team.

**The whale deal danger:** Rep B's $2.3M deal is 112 days old. That's either closing imminently or it's a ghost. There's no in-between at 112 days. Pull the call transcripts. If the last interaction was a "checking in" email, it's a ghost. Rep B is using this deal as a shield against prospecting accountability.

**What I'd do Monday morning:**
1. Rep B: Direct conversation. "Your pipeline is one deal. What happens to your quarter if that deal slips 30 days?" Force the maths.
2. Rep D: Skill/Will diagnosis. 3 meetings in 60 days with minimal activity. Is this a skill problem (doesn't know how to prospect effectively) or a will problem (checked out)?
3. Both reps: 30-Day Blitz with daily accountability. Not optional. Public tracking.
4. The 3 performing reps: Protect their time. Don't let the blitz distract them from closing their Stage 3+ pipeline.

---

### Mark Roberge — Data-Driven Diagnosis

**Diagnosis:** The data gives us a clean Skill/Will/System decomposition:

**Rep B — Will problem (probable).**
- Pipeline exists but is concentrated in one stale deal. Activity is minimal (4 meetings, 11 calls, 23 emails in 60 days). Zero new opps created.
- Chorus shows low discovery quality — surface-level questions.
- This profile suggests disengagement, not inability. A rep who CAN sell $2.3M deals but WON'T prospect for new ones has a motivation or accountability issue.

**Rep D — Could be Skill OR System.**
- Lowest activity AND lowest pipeline. Only 3 meetings in 60 days.
- BUT: Rep D's target accounts have 6 VP+ contacts each with only 1 in CRM. Are they struggling to multi-thread? That could be a skill problem.
- OR: Is Rep D's territory fundamentally weaker? Check: are Rep D's target accounts the same quality as other reps' targets?

**Rep A, C, E — System gap.**
- These reps are performing well individually. But none of them are working the 5 intent-signal accounts. That's a system gap — intent data exists but isn't routed to reps.

**The paired indicators (Rabois):**
- Pipeline volume (3.1x) WITHOUT stage-weighted quality (1.7x Stage 3+) is a misleading metric
- Activity volume WITHOUT activity quality (Chorus shows Rep B's calls are low-quality) hides the real problem
- Always show both in the forecast review. The counter-metric reveals what the primary metric hides.

---

### Donella Meadows — Systems Thinking

**Diagnosis:** You're looking at a stock (pipeline = 3.1x) but the system has three broken flows:

**Inflow is declining.** Two reps generating zero new opportunities is a 40% reduction in the pipeline creation engine. The bathtub is draining faster than it's filling.

**The reinforcing loop:** Low pipeline → pressure to close → reps focus on existing deals → less prospecting → lower pipeline → more pressure. Rep B is deep in this loop — clinging to a 112-day whale deal instead of prospecting. The loop is self-reinforcing.

**The balancing loop that's missing:** Your system has no automatic stabiliser. In a healthy system, when pipeline drops below 3.5x, prospecting activity increases automatically. In your system, pipeline dropped from 3.8x to 3.5x to 3.1x over three quarters with no corrective mechanism firing.

**The competitive dynamic is a new external variable.** Competitor funding ($120M Series D), EMEA expansion, and 4x increase in call mentions isn't a blip — it's a structural change in the competitive environment. Your system was designed for the old competitive landscape. The new landscape requires faster signal detection and response.

**The leverage point:** Don't just fix Rep B and Rep D. Fix the information flow. Intent signals sitting unactioned for 30 days while a competitor is actively expanding = a system that doesn't connect available intelligence to rep behaviour.

---

## Points of Agreement
- All four agree: 3.1x is a misleading number. Stage 3+ coverage (1.7x) is the real metric.
- All agree: Rep B and Rep D are the concentrated problem — not a team-wide issue
- All agree: the competitive threat is structural, not episodic (funding + EMEA expansion + case study + call mentions)
- All agree: 5 unworked intent-signal accounts is a system failure, not a rep failure

## Points of Disagreement
- **Blount** wants immediate action (blitz Monday). **Roberge** wants diagnosis first (is Rep D a skill or system problem?). **Meadows** wants root cause before either.
- **Norton** says fix the system (alerts, routing, competitive triggers). **Blount** says fix the people (discipline and accountability). Both are right — sequencing is the question.

## White Space Opportunities (From Data Gathering)
1. **5 intent-signal accounts** not in any rep's pipeline — immediate prospecting targets
2. **Rep D's target accounts** have 6 VP+ contacts each, only 1 in CRM — multi-threading opportunity
3. **Competitive positioning gap** — no battle card or team guidance issued despite 4x increase in mentions
4. **Rep B's whale deal** — if real, could be accelerated. If ghost, frees Rep B to prospect.

## Recommended Actions
1. **Today:** Pull Stage 3+ coverage and deal-age analysis. Present BOTH numbers in this week's forecast. — *Owner: Leader*
2. **Today:** Scrub Rep B's $2.3M deal. Pull Chorus transcripts. Determine: real or ghost. — *Owner: Leader*
3. **Monday:** Rep B — direct conversation on pipeline concentration and prospecting accountability — *Owner: Leader*
4. **Monday:** Rep D — Skill/Will/System diagnosis. Check territory quality alongside activity. — *Owner: Leader*
5. **This week:** Route 5 intent-signal accounts to Rep A, C, and E (the performing reps). Don't wait. — *Owner: RevOps/Leader*
6. **This week:** Issue competitive positioning brief to entire team — competitor funding, EMEA expansion, recommended talk track. — *Owner: Leader*
7. **Next Monday:** Launch 30-Day Blitz for Rep B and Rep D. Daily tracking. Protect Rep A/C/E's closing time. — *Owner: Leader*
8. **This month:** Build automatic pipeline threshold alert (below 3.0x Stage 3+ → flag) and intent routing (intent signal → task created). — *Owner: RevOps*


