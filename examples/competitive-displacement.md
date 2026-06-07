# Example: Competitive Displacement Threat

> Worked example showing the complete flow: operator asks → data-gathering sweep
> runs → tool results summarised → white space identified → avatars debate with real data.

## Operator Input

*"One of my $200K accounts just told us they're evaluating a competitor. The
customer's Ops Director said 'we need to understand our options before renewal.'
Renewal is in 90 days. The competitor is cheaper on a per-seat basis but
doesn't have our data depth. How do I handle this?"*

---

## Step 1: Data-Gathering Sweep

**Scope:** A (Single Account). Operator = Manager+, deal owned by direct report's AM.

| Source | Key Findings |
|---|---|
| Salesforce | ACV $196,400. Stage 3. 85 seats, 61 active (72%). Products: SalesOS Elite + NeverBounce. Customer since 2023. Single-threaded to Ops Director. VP Sales (EB) never engaged. Decision Process blank. |
| Chorus Search 1 (commercial) | Renewal kickoff (12 days ago): "leadership asking us to evaluate alternatives for everything >$100K" — driven by new CFO. QBR positive but flagged "SDR team finds interface clunky." |
| Chorus Search 2 (blockers) | Last renewal: "I went to bat for you internally." IT Manager mentioned data migration costs. No specific competitor named on calls. |
| Company Enrichment | 450 employees, Series C, ~$80M revenue, 30% YoY growth. New CFO (4 months, ex-PE). |
| Intent Signals | Active research: "sales engagement tools" + "B2B data providers" (past 21 days). |
| Contact Discovery | VP Sales (EB, 8yr tenure, never engaged). New CFO. CRO exists. Head of RevOps (new hire, 2 months). None in CRM. Scoops: competitor SDR visited office 3 weeks ago. |
| Web Search | CFO LinkedIn: "every SaaS company needs vendor rationalisation post-Series C." Competitor pricing: ~40% lower per-seat but per-query enrichment add-ons not included. G2: strong UI/UX, weak data accuracy and EMEA coverage. |

---

## Step 2: White Space Analysis (What's NOT There)

| Gap Type | Finding |
|---|---|
| **Stakeholder white space** | VP Sales (EB) NEVER engaged. New CFO driving the evaluation — not in CRM. CRO exists — not in CRM. Head of RevOps (new hire) — not in CRM. Account is effectively single-threaded to Ops Director. |
| **Product white space** | Only SalesOS + NeverBounce. No Intent (despite being a SaaS company that would benefit from signal-driven prospecting). No Chorus (despite having an SDR team). No GTM Studio. |
| **Competitive intelligence gap** | Competitor SDR visited the office 3 weeks ago. Nobody on the team knew. No competitive early-warning triggered. |
| **Pricing structure gap** | Customer sees per-seat pricing comparison. Nobody has built the TCO analysis showing competitor's per-query enrichment add-ons. At 61 active users doing enrichment, the competitor's true cost is likely higher. |
| **Champion risk** | Ops Director said "I went to bat for you" last renewal. They're the only advocate. If the CFO overrules them on cost grounds, there's no second champion. |

---

## Step 3: Cross-Validation & Confidence

- ACV: Operator said $200K, Salesforce shows $196,400. Using Salesforce figure.
- "Evaluating a competitor" is real: confirmed by (1) Ops Director statement on Chorus, (2) competitor SDR office visit via Company Intelligence, (3) intent signals for "B2B data providers"
- The driver isn't product dissatisfaction — it's the new CFO's vendor rationalisation mandate. Chorus confirms positive usage sentiment. This is a cost play, not a product play.
- Competitor's per-seat price is ~40% lower. BUT their per-query enrichment model means actual cost at usage depends on volume. TCO comparison is the critical artefact to build.

**Overall confidence:** High on diagnosis. Medium-High on recommended path (depends on engaging VP Sales and CFO — neither of whom the team has ever spoken to).

---

## Structured Debate Output

**Mode:** Debate
**Data Sources:** Salesforce, Chorus (×2), enrichment platform (company + contacts + intent + scoops + technographics), Account Intelligence, Web Search
**Avatars:** David Priemer vs Brent Adamson
**Topic:** Should we lead with empathy (understand their evaluation) or challenge (reframe their criteria)?

---

### David Priemer — Science of Selling

**Position: Lead with empathy — but the data tells us WHERE to direct it.**

The customer said "we need to understand our options." But Chorus tells us the real story: the Ops Director went to bat for us last time and is under pressure from a new CFO who published an article about vendor rationalisation. The Ops Director isn't evaluating because they WANT to — they're evaluating because they've been TOLD to.

**Sell-the-Way-You-Buy applied to real data:**
The Ops Director is your champion under pressure. If you treat them like a threat, you lose your only advocate. Instead:

*"I read between the lines — this feels like something leadership is asking you to do, not something you woke up wanting to do. Am I wrong? Either way, I'd rather help you run a clean evaluation than leave you to do it alone."*

This is the Unselling move. You're not defending — you're acknowledging their reality (new CFO mandate) and positioning yourself as an ally in the process.

**Three Why Questions with data:**
- **Why Change?** They haven't decided to change. The CFO mandated an evaluation of everything above $100K. The Ops Director's positive usage sentiment confirms they're satisfied.
- **Why You (still)?** Reporting was flagged as a gap. SDR team finds the interface clunky. If you can address these two specific complaints before the evaluation concludes, you eliminate the only product objections.
- **Why Now?** 90 days to renewal. But the CFO article on vendor rationalisation suggests this is a broader initiative — not specific to your platform. That means winning THIS evaluation creates precedent.

**Peak-End Rule:** The Ops Director's memory of this renewal will be the last thing that happens. If you make the evaluation painless and transparent, they remember trust. If you pressure, they remember resentment — even if they stay.

---

### Brent Adamson — Challenger Sale

**Position: Empathy without insight leaves money on the table. The data gives us the insight.**

Priemer is right that pressure is wrong. But the data reveals something the customer hasn't thought about — and it's our job to teach them.

**The Commercial Insight (built from data, not speculation):**

The competitor is ~40% cheaper per seat. That's the number the CFO will fixate on. But the competitor's pricing page shows enrichment credits are per-query add-ons. At 61 active users doing regular enrichment queries, the actual cost over 12 months could exceed the current contract.

The Ops Director doesn't know this. The CFO doesn't know this. The competitor certainly isn't going to tell them.

*"Most companies that evaluate on per-seat pricing find the comparison misleading. Your team does [X] enrichment queries per month. At the competitor's per-query rate, that's $[Y] annually on top of the seat fee. We've built a 12-month TCO comparison for your actual usage. The result might surprise you."*

That's not a sales tactic — it's a fact the customer needs to make a good decision.

**Consensus Building — data tells us who to mobilise:**

The data shows 4 stakeholders not in CRM: VP Sales (EB), CFO, CRO, Head of RevOps. Each cares about a different dimension:

| Stakeholder | What They Care About | Your Proof Point |
|---|---|---|
| **CFO** | Total cost, not unit price | TCO analysis: per-seat vs per-seat + per-query at actual volume |
| **VP Sales (EB)** | Sales team productivity, pipeline quality | Usage data: 61 active users, pipeline generated through platform |
| **CRO** | Revenue impact of switching mid-cycle | Migration risk: data gap during transition = pipeline disruption |
| **Head of RevOps** | Integration, data accuracy, workflow continuity | enrichment platform data depth vs competitor (especially EMEA gap from G2 reviews) |
| **SDR Manager** | Daily workflow, ease of use | Address the "clunky interface" feedback — show what's improved or roadmapped |

**Don't fight the evaluation. Expand the criteria.** The CFO set a per-seat cost criterion. By the time you engage all 5 stakeholders, the criteria include TCO, data accuracy, EMEA coverage, migration risk, integration cost, and workflow disruption. Your strengths outnumber theirs 5-to-1.

---

## Moderator Synthesis

### Where They Agree
- Both reject pressure tactics and defensive positioning
- Both would build the TCO analysis — the cost comparison is a fact, not a tactic
- Both agree the Ops Director is a champion under pressure, not a defector
- Both agree: engaging VP Sales and CFO is critical (currently not in CRM at all)

### Where They Diverge
- **Priemer** leads with emotional acknowledgment (ally positioning), then lets the customer guide the evaluation while embedding strengths through questions. The energy is warm, trust-building, non-threatening.
- **Adamson** leads with commercial insight (TCO reframe), then expands the evaluation criteria by engaging multiple stakeholders with tailored messages. The energy is confident, educational, data-driven.

### What Would Need to Be True
- **For Priemer's approach to win:** The Ops Director has enough internal influence to guide the evaluation outcome. The relationship is strong enough that "helping them evaluate" lands as authentic. The CFO is open to the Ops Director's recommendation.
- **For Adamson's approach to win:** The TCO numbers are genuinely compelling (per-query costs at actual usage volume exceed the seat savings). The team can engage VP Sales and CFO directly — stakeholders they've never spoken to — without the Ops Director feeling bypassed.

### Recommended Hybrid Approach (Data-Informed)
1. **First move — Priemer (with Ops Director):** Acknowledge the CFO mandate. Position as ally. Get the evaluation criteria. Understand the timeline and process.
2. **Same week — Build the artefact:** 12-month TCO comparison at actual usage volume. Include migration cost estimate. This is the Adamson insight, built on real data.
3. **Week 2 — Adamson (expand stakeholders):** With Ops Director's knowledge, request introductions to VP Sales (EB) and Head of RevOps. Frame as "helping them run a thorough evaluation." Share the TCO analysis.
4. **Week 2 — Address product objections:** The "clunky interface" and "better reporting" feedback from Chorus — bring product team or solutions consultant response. Fix the fixable before the evaluation concludes.
5. **Week 3 — CFO engagement:** Leader-level outreach to CFO. Reference the vendor rationalisation article. Frame as: "We support the rigour. Here's the full TCO analysis your team has been reviewing."

## White Space Opportunities (From Data Gathering)
1. **VP Sales engagement** — Economic Buyer never contacted in 3+ years as customer. Net-new relationship to build.
2. **Head of RevOps** — New hire, not in CRM. Natural champion candidate for data infrastructure decisions.
3. **Intent signals** — "Sales engagement tools" search suggests they may also be evaluating their engagement stack. Cross-sell opportunity if primary relationship is secured.
4. **Reporting gap** — Ops Director asked for better reporting 74 days ago. If addressed, removes one of two product objections.

## Recommended Actions
1. **Within 48 hours:** Priemer-framed meeting with Ops Director — ally positioning, get evaluation criteria and timeline — *Owner: AM*
2. **This week:** Build 12-month TCO comparison: your contract vs competitor at actual enrichment volume. Include migration cost estimate. — *Owner: AM + RevOps*
3. **This week:** Address "clunky interface" and "better reporting" feedback — get product/SC response — *Owner: AM + Solutions Consultant*
4. **Week 2:** Request introduction to VP Sales and Head of RevOps through Ops Director — *Owner: AM*
5. **Week 2:** Share TCO analysis with VP Sales and Head of RevOps — *Owner: AM*
6. **Week 3:** Leader-to-CFO outreach — reference vendor rationalisation article, share TCO analysis — *Owner: Leader (executive sponsor)*
7. **Day 60:** Full competitive assessment checkpoint. If competitor is still in play, escalate to deal clinic. — *Owner: AM + Leader*


