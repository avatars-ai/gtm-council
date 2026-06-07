# Tool Connectors — Data Synthesis Discipline

For data source types and platform-specific tool mapping, see `protocols/tool-abstraction.md`.
This file governs HOW data is synthesised after gathering, not what tools to call.

---

## If a Data Source Is Not Connected

Tell the user: "I don't have access to [source type]. This means I'm missing
[specific intelligence type]. The analysis may be incomplete in [specific area]."

Never silently skip a source. Never fabricate data from an unavailable source.

---

## DATA SYNTHESIS DISCIPLINE

These patterns are applied after the Mandatory Data-Gathering Protocol completes.

### 1. ACV Determination

Never use account-level rollup fields as current ACV without cross-validation.
These fields may represent lifetime sums, multi-entity aggregates, or stale
calculations. To determine current active ACV: query the last closed-won renewal
opportunity (Type = 'Renewal', IsClosed = true, IsWon = true, ORDER BY CloseDate
DESC LIMIT 1) plus any active upsell ACVs closed after that renewal date. If an
open renewal exists, note both the expiring value and proposed value — neither is
the confirmed current ACV until closed.

### 2. Purpose-Anchored Research

Every data sweep starts by restating the PURPOSE in one sentence, then deriving
2-4 priority GTM themes from it. These themes drive all downstream triage.

**Before pulling data:** "I am researching [account] because [purpose]. The priority
themes are: [theme 1], [theme 2], [theme 3]."

**During synthesis:** Every piece of data is evaluated against the purpose and themes.
Data that connects to purpose = include. Data that doesn't = drop or footnote.

### 3. Intent Triage Rules

Avoid pre-filtering intent by topic. Call intent enrichment with the company
identifier only. The goal is to see what topics this company is actually expressing
intent on, not to confirm hypotheses.

**Triage after retrieval:**
- Keep topics that map to the purpose, priority themes, or your GTM offerings
- Keep non-obvious signals worth flagging (competitor's category, adjacent buying motion)
- Drop topics that are noise or irrelevant to the purpose
- If nothing meaningful remains, say so explicitly — don't infer from absence

### 4. Cross-Reference Discipline

Connect data points across sources. Single-source findings are observations.
Cross-referenced findings are intelligence.

**Pattern:** New CTO scoop + cloud migration intent + open renewal in 90 days ->
this isn't three data points, it's one story: new leadership is re-evaluating
the stack on a specific timeline.

**Always connect to the user's stated goal.** Cross-references without purpose
connection are interesting but not actionable.

### 5. Past-Date Flagging

Any date from account research or CRM that is in the past (renewal date,
contract end, last activity, scheduled meeting) — retain but flag for verification.
Could be: active negotiation, stale CRM sync, or a missed milestone.

**Never silently drop past dates.** Never treat past dates as current without flagging.

### 6. Relationship Posture Classification

When researching contacts for account strategy or meeting prep, classify each
contact's relationship posture:

| Posture | Definition | Implication |
|---|---|---|
| **Cold** | No prior interaction signal | Standard outreach required |
| **Warm-but-dormant** | Significant past engagement but no current activity | **Highest leverage** — relationship exists, needs reactivation |
| **Active** | Current engagement (recent calls, emails, meetings) | Maintain and deepen |
| **Hostile** | Negative signal (rejected, complained, competitor advocate) | Handle with care or avoid |

**Warm-but-dormant is the most valuable classification.** It's the one most systems
miss because it requires cross-referencing historical engagement across companies.

### 7. Stakeholder Role Classification (Conservative)

When mapping buying committees, use eight roles with conservative assignment rules:

| Role | Definition | Classification Rule |
|---|---|---|
| **Economic Buyer** | Budget authority. Final yes/no. | C-Level Finance, function head, or CEO for strategic deals |
| **Champion** | Advocates for your solution. Has credibility + personal win. | **Requires explicit engagement evidence** (CRM activity, demo attended, prior emails). Title alone is not sufficient. |
| **User Buyer** | Will use the system daily. | The person whose workflow changes most |
| **Technical Buyer** | Evaluates integration, security, compliance. | Director+ in IT, Engineering, or the function being sold to |
| **Coach/Mentor** | Trusted advisor to the EB. No formal authority but carries weight. | Ask: "Who does [EB] trust for advice on decisions like this?" |
| **Initiator** | Raised the need internally. Often NOT the economic buyer. | Ask: "Who first said 'we need to fix this'?" |
| **Legal/Procurement** | Contracts, compliance, vendor onboarding. | Paper process stakeholders |
| **Saboteur** | Opposes your solution. | Who has incentive to maintain status quo? Who competes for budget? |

**Critical rule:** Most "Champions" that reps report are actually Coaches or Initiators.
True Champions sell when you're not in the room and give you access to the EB.

---

## Meeting Intelligence Calibration Protocol

### When to Run
- Before finalising any risk score on accounts with significant ACV
- Before any council session that will make recommendations on specific accounts
- Before any executive intervention decision

### How to Run — Scope-Aware Search Rules

**Scope A (Single Account):**

**Goal:** Find all meeting intelligence for this account going back 12 months.
**Constraint:** Try multiple search strategies before concluding zero results.

Search by account name first. If zero results, try the account owner's name (some
meetings are logged under the rep). If still zero, try the parent company name or
alternate trading names. Exhaust all reasonable search variations.

**Critical:** If zero results after all retries, the absence IS the signal. Zero
calls on a significant account is actionable intelligence — state it explicitly.

**Scope B (Territory / Team Pipeline):**

Territory questions need breadth across source *types*, not just multiple searches
within one tool. Two similar searches feel like two sources but deliver one source's
worth of signal.

**Minimum Source-Type Ladder (3 of 5 required):**

| Priority | Source | What It Answers |
|---|---|---|
| 1 | **CRM** (pipeline/renewals) | Exposure, coverage, stage distribution, ACV concentration |
| 2 | **Meeting Intelligence — commercial** | Rep execution quality, deal themes, customer sentiment |
| 3 | **Meeting Intelligence — constraints** | Budget pressure, competitive mentions, churn signals |
| 4 | **Product usage** (if available) | Adoption trends, feature utilisation |
| 5 | **Web search** (market/competitive) | Market context, competitive landscape |

**Rules:**
- Sources 1-3 are mandatory for every Scope B response
- Both meeting intelligence searches (commercial + constraints) count as separate
  sources only when scoped with distinct queries
- All meeting intelligence searches must be scoped to the operator's team members.
  Unscoped searches return noise from across the entire organisation.
- For exception accounts flagged for deep-dive, switch to Scope A rules

**Scope C (Coaching / Rep-focused):**
1. Search by the specific rep being coached
2. Isolate customer-facing calls (not internal syncs)
3. Query for discovery quality, talk patterns, and objection handling

### What to Look For
- **Call frequency:** How many calls in last 6 months? Trend up or down?
- **Stakeholder breadth:** Talking to 1 person or 5? Who's the most senior?
- **Conversation quality:** Discovery or admin? Strategic or transactional?
- **Competitive mentions:** Any competitors named in calls?
- **Champion evidence:** Is someone inside the account advocating?
- **Sentiment:** Customer bringing problems to solve, or grudgingly attending?
