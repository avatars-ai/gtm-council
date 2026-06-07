# Mandatory Data-Gathering Protocol

The single biggest failure mode of AI advisory is confidently advising on incomplete
data. A recommendation that sounds right but is factually wrong — wrong ACV, missed
competitive eval, stale renewal date — destroys the operator's trust faster than
giving no answer at all. The bar: the operator should never need to ask "did you
check [tool]?" because they already assume you did.

**Proportionality Rule:** A factual lookup (ACV, close date, owner) needs 1-2
CRM queries. A strategic account review needs the full 7-source sweep.
The reason: over-gathering on a simple question wastes time and floods the response
with noise, while under-gathering on a complex question produces blind-spot advice
that the operator acts on. Match depth to stakes.

---

## Step 1: Understand Scope — Team or Individual?

A VP asking "how's my pipeline?" means their entire team's pipeline. An AM asking
the same question means their personal book. Getting this wrong means every subsequent
query returns the wrong dataset — and every recommendation built on it is misscoped.

Read the operator's title. If it indicates management (Director, VP, AVP, SVP, CRO,
Head of, Manager):
- Query CRM for the operator's team: find the operator's direct reports
- All queries include the operator's direct reports, not just their personal accounts

If individual contributor (AE, AM, SDR, BDR), query their personal accounts only.

## Step 2: CRM — Schema First, Then Query

Every CRM org names its fields differently — one calls it Annual_Contract_Value__c,
another ACV__c, another Amount. Guessing produces failed queries, and failed queries
waste the operator's time and erode trust in the skill's competence. One extra call
to the schema guarantees every subsequent query works.

```
Use CRM schema discovery BEFORE any query.
Identify actual field names for: ACV, seat count, renewal date, segment, stage, owner, product.
```

## Step 3: Scope-Aware Intelligence Sweep

Different questions require different depths. A single-account deep dive needs every
available data source because the operator will make a specific decision based on
the output. A territory review that deep-dived every account would take 30 minutes
and produce a wall of text no one reads. A coaching conversation needs rep-level
patterns, not account-level detail.

### Scope A: Single Account or Deal — Full 7-source sweep

The operator is about to make a decision on this account — renewal strategy,
exec intervention, pricing, competitive response. Every missing data source is a
blind spot they'll discover in the meeting, not before it.

| Source | What to Pull | Data Source Type |
|---|---|---|
| CRM | Account data, open opps, closed history, contacts, activity | CRM |
| Meeting Intelligence (x2) | (1) Commercial context (2) Constraints/blockers | Meeting Intelligence |
| Company Enrichment | Financials, technographics, news, executive moves | Company Enrichment |
| Intent Signals | Topic research signals | Intent Signals |
| Contact Discovery | Decision-makers you're NOT talking to | Contact Discovery |
| Account Intelligence | Company summary, strategic priorities | Account Intelligence |
| Web Search | Earnings, press releases, leadership changes | Web Search |

If a data source is not connected, state what's missing and why it matters — the operator
needs to know the shape of their blind spot, not just that one exists.

### Scope B: Territory, Book, or Pipeline — Aggregate-first

Territory-level questions need patterns, not individual account detail. Starting with
aggregates reveals where the exceptions are — and exceptions are where the operator's
time is best spent. Deep-diving without aggregating first risks spending all the
operator's attention on the first account that looks interesting rather than the one
that matters most.

**Layer 1 — Aggregate (start here):**
- CRM: All open opps across team — ACV, stage, close date, owner, renewal date. Pipeline by rep/stage/segment. Closed-won/lost last 90 days. Attainment YTD. (2-4 queries max)
- Meeting Intelligence: 1-2 thematic searches on territory patterns — NOT per-account

**Layer 2 — Exception identification (from Layer 1):**
Flag 3-5 accounts for deep-dive: renewal <90 days + risk signals, largest ACV, anomalies (stage regression, activity drop), or operator-specified.

**Layer 3 — Targeted deep-dives (ONLY on flagged accounts):**
Full Scope A sweep on 3-5 exceptions only. Name which accounts were deep-dived and why.

### Scope C: Coaching — Rep-focused

Coaching conversations are about the rep's patterns, not any single deal. Pulling
the rep's pipeline composition and recent call quality reveals whether this is a
skill problem, a will problem, or a system problem — and that diagnosis determines
whether the answer is training, a hard conversation, or a process change.

| Source | What to Pull |
|---|---|
| CRM | Rep's pipeline, win rates, deal velocity, attainment, activity (1-2 queries) |
| Meeting Intelligence | Rep's recent calls: discovery quality, talk time, objection handling (1-2 searches by rep name) |

### Scope D: Company / BU-Wide — Executive altitude

The operator is a CRO, CMO, CEO, or SVP asking about the entire business or a major
business unit — not a specific territory or deal. Starting at account-level would
produce a wall of data that buries the signal. Start at the highest aggregation,
identify the 3-5 patterns that matter, and only deep-dive on exception.

**Trigger:** Operator title is C-Suite/SVP/VP AND question is about business performance,
segment health, cross-functional metrics, or strategic direction — not a specific
account or deal.

**Layer 1 — Business-level aggregates (start here):**
- CRM: Pipeline by segment (Enterprise/MM/SMB), attainment by rep/team, NRR by
  cohort, stage distribution, win/loss by segment and quarter, close rate trends,
  average deal size trends. (3-5 aggregate queries, no account-level detail)
- Product Usage (if available): DAU/MAU, feature adoption by segment, credit
  consumption trends, seat utilisation rates. Company-wide, not per-account.
- Web search: Company earnings, market positioning, competitive landscape, analyst coverage

**Layer 2 — Pattern identification (from Layer 1):**
Identify 3-5 patterns at the business level: which segment is outperforming/underperforming,
where is NRR strongest/weakest, which product line is gaining/losing adoption,
where is the pipeline stage distribution unhealthy.

**Layer 3 — Targeted deep-dives (ONLY on exception patterns):**
For each pattern that warrants investigation, pull one level deeper:
- Underperforming segment: rep-level decomposition (who is dragging/carrying)
- NRR weakness: top 5 accounts by churn risk or downsell
- Adoption decline: signal separation (is it real decline or measurement change?)
- Pipeline stage bloat: zombie detection on the bloated stage

**Layer 4 — Account-level (ONLY if the executive asks):**
Never default to account-level analysis for a C-suite operator. If they ask about
a specific account, switch to Scope A. Otherwise, stay at pattern level.

**Key difference from Scope B:** Scope B is territory-level for a manager's team
(6-20 reps, known accounts). Scope D is company-level for an executive (100+ reps,
all segments, cross-functional). Scope D aggregates ACROSS territories, not within one.

---

## Step 4: White Space Analysis

The most dangerous pipeline is the one that looks full but is missing the deals that
should be there. Pipeline reviews that only examine existing opportunities miss
coverage gaps, underworked accounts, and competitive displacement risks. White space
is where the next quarter's problems are hiding.

- **Scope A:** Product white space, stakeholder white space, use-case white space, signal white space
- **Scope B:** Coverage gaps (<3.5x Stage 3+), activity gaps (30-Day Rule), renewal concentration, competitive patterns, product penetration. Deep white space on exception accounts only.
- **Scope C:** Skill gaps, activity gaps, pipeline composition gaps

## Step 5: Verify Before Presenting

The final check prevents the most embarrassing failure: presenting the operator with
analysis built on the wrong data. A misscoped query, a missed tool, or two sources
that disagree on ACV — any of these discovered by the operator mid-conversation
undermines everything else in the analysis.

Confirm: (1) correct scope (individual vs team), (2) all available data sources queried,
(3) white space identified, (4) numbers cross-validated, (5) confidence rated.
