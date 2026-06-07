# Example: Deal at Risk — Champion Departure

> Worked example showing the complete flow: operator asks → data-gathering sweep
> runs → tool results summarised → white space identified → avatars advise with real data.

## Operator Input

*"I have a $500K renewal due in 45 days. My champion — the VP of Revenue Operations
who drove the original purchase — left the company two weeks ago. The new person in the
role is someone we've never spoken to. The economic buyer (CFO) signed the original deal
but hasn't been engaged since. What do I do?"*

---

## Step 1: Data-Gathering Sweep

**Scope:** A (Single Account). Operator = Manager+, deal owned by direct report.

| Source | Key Findings |
|---|---|
| Salesforce | ACV $487,200 (not $500K). Stage 4. 320 seats, 217 active (68%). Last activity 62 days ago. Only 2 contact roles from 18 months ago. MEDDPICC Champion blank. |
| Chorus Search 1 (commercial) | Last QBR: champion confirmed value, mentioned APAC expansion. Original close: CFO criteria = "time to value" + "reduce manual reconciliation" |
| Chorus Search 2 (blockers) | No competitor evaluation or budget freeze. One mention: "procurement stricter on renewals >$200K" |
| Company Enrichment | Acquisition completed 3 months ago. Headcount +40% YoY. New CTO (ex-Gong customer). |
| Intent Signals | Active research: "revenue operations platforms" + "data enrichment" (past 30 days) |
| Contact Discovery | 14 VP+ in org chart, only 2 in Salesforce. New VP RevOps started 3 weeks ago — previously at competitor customer. |
| Web Search | CEO: "consolidating vendors to reduce operational complexity." VP RevOps LinkedIn: "build a world-class revenue engine" |

---

## Step 2: White Space Analysis (What's NOT There)

| Gap Type | Finding |
|---|---|
| **Stakeholder white space** | 14 VP+ contacts, only 2 in CRM. New CTO (ex-Gong customer) not engaged. New VP RevOps not contacted. Zero APAC team contacts despite expansion mention. |
| **Product white space** | Account has SalesOS only. No Intent, no Chorus, no GTM Studio. Similar accounts at this ACV typically have 2-3 products. |
| **Use-case white space** | Original use case was "manual process." Post-acquisition, they likely have entity resolution and data deduplication problems across merged systems — not discussed with them. |
| **Signal white space** | Intent signals show "data enrichment" research — but no one on the team has responded to this signal. 30-day window closing. |

---

## Step 3: Cross-Validation & Confidence

- ACV discrepancy: Operator said $500K, Salesforce shows $487,200. Using Salesforce figure.
- Champion departure confirmed by both Salesforce (contact role inactive) and Chorus (no calls in 62 days)
- Intent signals + CEO vendor consolidation quote = aligned. This account is actively evaluating its stack.
- **Risk not visible to operator:** New VP RevOps previously used a competitor. Combined with intent signals and CEO consolidation quote, this is a competitive displacement threat — not just a champion departure.

**Overall confidence:** High on diagnosis. Medium on recommended path (depends on first meeting with new VP RevOps).

---

## Council Session Output

**Mode:** Council Session
**Data Sources:** Salesforce, Chorus (×2), enrichment platform (company + contacts + intent + news), Account Intelligence, Web Search
**Avatars Present:** Jamal Reimer, Chris Voss, John McMahon, Kyle Norton

---

### Jamal Reimer — Mega-Deal Architecture

**Diagnosis:** The data changes this picture. This isn't just a champion departure — it's a potential competitive displacement wrapped in a renewal. The new VP RevOps used a competitor at their previous company. Intent data shows active research on "revenue operations platforms." The CEO is publicly talking about vendor consolidation.

Your Mountain 2 (Political Case) isn't just lost — the new buyer may be building a case for someone else.

**What the data tells us to do:**
1. **The CTO is your hidden asset.** New CTO came from a Gong customer — they understand the category. They're senior to the VP RevOps. A CTO who validates your data layer can override a VP's vendor preference. This is your champion development target.
2. **The APAC expansion is your expansion bridge.** The departed champion mentioned APAC expansion 4 months ago. That's a Mountain 1 (Business Case) opportunity — new region, new headcount, new seats. Frame the renewal as "renew + expand" not "renew at the same level."
3. **The acquisition creates a data problem they haven't articulated yet.** 40% headcount growth from an acquisition means duplicate records, conflicting data sources, entity resolution chaos. Your platform solves this — but no one has told them that. This is the insight that changes the conversation.

---

### Chris Voss — Tactical Empathy & Negotiation

**Diagnosis:** The new VP RevOps posted about "building a world-class revenue engine" two weeks ago. That's their identity statement. Every vendor interaction will be filtered through: "Does this help me build what I promised?"

**Accusation Audit (informed by data):**
*"You've probably inherited a dozen vendor relationships you didn't choose, and you're under pressure to build something world-class fast. The last thing you need is a vendor defending their renewal. I'm not going to do that."*

This pre-empts their defensive reaction AND references their actual stated priority.

**Calibrated questions (designed from intelligence):**
- "What does a world-class revenue engine look like to you?" (Maps to their LinkedIn identity statement)
- "How are you handling the data from the [subsidiary] acquisition?" (Surfaces the problem no one has raised yet)
- "What would make this renewal the easiest decision on your plate?" (Reduces friction)

**The CTO angle:** Don't ask the VP RevOps about the CTO. Find a separate path to the CTO. A label like "It seems like the CTO would have a perspective on the data infrastructure layer" plants the seed without threatening the VP's authority.

---

### John McMahon — MEDDPICC Triage

**Diagnosis:** MEDDPICC with data — not guesswork:

| Element | Status | Evidence | Action |
|---|---|---|---|
| **Metrics** | Partial — 68% utilisation, 217 active users | Salesforce usage data | Build value summary showing per-user ROI |
| **Economic Buyer** | CFO, dormant 18 months | Original close call confirmed. Still in role. | 2-paragraph ROI email — not a meeting request |
| **Decision Criteria** | HIGH RISK — new VP likely has different criteria | Previous employer used competitor | Discovery meeting critical within 5 days |
| **Decision Process** | Changed — "procurement stricter on >$200K renewals" | Chorus from 6 months ago | Map new process immediately |
| **Paper Process** | 45 days — tight, especially with new procurement rules | Chorus intelligence | Confirm: who signs, what documentation, what timeline |
| **Identify Pain** | Original pain was "manual process." New pain is likely data consolidation post-acquisition | enrichment platform news + web search | Revalidate pain with new stakeholder |
| **Champion** | LOST — and replacement may favour competitor | Contact Discovery: VP RevOps previously at competitor customer | CTO is the champion development target |
| **Competition** | ACTIVE THREAT — not just evaluation | Intent signals + VP RevOps background + CEO consolidation quote | This is a competitive displacement scenario |

**Verdict:** This deal has moved from "renewal at risk" to "competitive displacement defence." 4 red elements. The ONLY priority is a meeting with the new VP RevOps within 5 business days, AND a separate engagement path to the CTO within 10 days. Single-threading this through the VP RevOps alone is a losing strategy.

---

### Kyle Norton — Revenue Operating System

**Diagnosis:** Let me focus on what the system should have caught earlier.

**Immediate (this deal):**
- 62 days of zero activity on a $487K account should have triggered an alert at day 14. Your operating rhythm needs a dead-deal detector.
- 68% seat utilisation is a leading indicator of churn risk. Accounts below 70% utilisation that enter renewal without an adoption play have 2.3x higher churn probability. This should have been flagged 90 days ago.
- The Contact Discovery data shows 14 VP+ contacts and only 2 in CRM. That's a single-threaded account by any standard. Multi-threading should be a system-enforced standard, not a deal-by-deal reaction.

**The data-informed play:**
- Build a usage dashboard showing exactly which 217 users are active, what they do, and what value they create. This is your defence against "we can get this cheaper elsewhere."
- The 103 inactive seats are actually your leverage — "you're paying for 320 and using 217. Let's fix the adoption gap rather than switching platforms and starting from zero."

**Systemic (prevent recurrence):**
- Alert trigger: Any account >$200K ACV with <14-day activity gap → flag to AM and leader
- Coverage standard: Top 50 accounts by ACV must have minimum 3 active contacts with activity in last 90 days
- Utilisation review: Monthly check on seat utilisation. Below 70% → adoption play initiated automatically

---

## Points of Agreement
- All four avatars agree: this is a competitive displacement threat, not just a champion departure (data changed the diagnosis)
- All agree: the CTO is the strategic champion development target (not just the VP RevOps)
- All agree: the post-acquisition data consolidation problem is the insight that reframes the conversation
- All agree: 5 business days to first meeting with new VP RevOps is the hard deadline

## Points of Disagreement
- **Voss** would approach the CTO through a separate channel quietly. **McMahon** would be direct: "Who else is involved in evaluating the renewal?" Different risk profiles on the same move.
- **Norton** wants to fix the systemic issues now (alerts, coverage standards). **Reimer** says save the deal first, fix the system after.

## White Space Opportunities (From Data Gathering)
1. **APAC expansion** — 40% headcount growth, new region, new seats → potential $150-200K expansion
2. **Post-acquisition data consolidation** — Entity resolution, deduplication → use case for GTM Studio
3. **CTO engagement** — Net-new stakeholder not in CRM. Ex-Gong customer = understands category.
4. **Intent response** — "Data enrichment" intent signal active. No one has responded. 30-day window.

## Recommended Actions
1. **Today:** Pull full usage dashboard — 217 active users, what they do, value created — *Owner: AM*
2. **Today:** Send 2-paragraph ROI email to CFO showing value delivered over 18 months — *Owner: Leader (executive sponsor)*
3. **Within 48 hours:** Voss-style outreach to new VP RevOps — *Owner: AM*
4. **Within 5 business days:** Discovery meeting with new VP RevOps — NOT a pitch. Diagnose their priorities. — *Owner: AM + Leader*
5. **Within 10 business days:** Separate engagement with CTO — data infrastructure conversation, not renewal conversation — *Owner: Leader*
6. **Within 2 weeks:** Full MEDDPICC re-qualification + competitive displacement battle card activated — *Owner: AM*
7. **This month:** Audit top 20 accounts for single-threaded risk and utilisation below 70% — *Owner: Leader*


