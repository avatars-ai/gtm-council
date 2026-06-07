# ZoomInfo MCP Integration — Trigger Rules

When the ZoomInfo MCP is connected, GTM OS calls it automatically on specific
triggers. This is not optional enrichment — when the tools are available, the
skill MUST call them as part of the data-gathering protocol. The ZoomInfo MCP
is the richest single source for company intelligence, intent signals, contact
discovery, and account research. Skipping it when available leaves blind spots
the operator will notice.

**Repository:** https://github.com/Zoominfo/zoominfo-mcp-plugin
**Server:** `https://mcp.zoominfo.com/mcp` (OAuth, remote MCP)
**Available on:** Claude (Code, .ai, API), ChatGPT, Perplexity, Codex, any MCP-compatible client

---

## Tool Discovery

At session start, check for these ZoomInfo MCP tools. If ANY are present,
the ZoomInfo MCP is connected:

```
search_companies, enrich_companies, enrich_news, enrich_scoops,
enrich_intent, search_contacts, get_recommended_contacts,
enrich_contacts, account_research, contact_research,
get_gtm_context, find_similar_companies, lookup
```

If connected, apply ALL trigger rules below. If not connected, fall back to
the generic data source types in `protocols/tool-abstraction.md`.

---

## Trigger Rules

### Trigger 1: Account Research

**When:** Any prompt about a specific account — renewal strategy, account plan,
QBR prep, expansion strategy, competitive response, exec briefing, deal strategy.
Matches Data-Gathering Protocol Scope A (single account).

**Call sequence:**
1. `get_gtm_context` — retrieve your org's offerings, ICP, personas, competitors
2. `search_companies` — resolve company name/domain to `companyId` (skip if ID provided)
3. **In parallel:**
   - `enrich_companies` with `companyId` — firmographics, technographics, org structure
   - `account_research` with `companyId` + purpose-tailored query — CRM context, relationship history, engagement signals. **Tailor the query to the purpose.** Don't pass generic strings. Example: "Preparing for QBR. Surface renewal status, contract dates, recent engagement, open expansion, champions and detractors, competitive evaluation signals."
   - `enrich_news` with `companyId`, last 90 days, `pageSize: 20` — recent company news
   - `enrich_scoops` with `companyId`, last 90 days, `pageSize: 15` — leadership moves, growth signals
   - `enrich_intent` with `companyId` only (no topic filter, `signalScoreMin: 60`) — unconstrained intent
   - `find_similar_companies` with `companyId` — competitive cohort
4. `search_contacts` or `get_recommended_contacts` — buying committee, white space contacts

**Why all of these:** A single-account decision requires seeing the full picture.
Each tool answers a different question. Skipping any one creates a blind spot the
operator discovers in the meeting, not before it.

### Trigger 2: Contact & Stakeholder Discovery

**When:** Buying committee mapping, multi-threading strategy, "who should I talk to",
stakeholder mapping, meeting prep, account org chart.

**Call sequence:**
1. `search_companies` — resolve to `companyId` if needed
2. `get_recommended_contacts` with `companyId` — suggested contacts based on your ICP
3. `search_contacts` with filters (job title, function, seniority) — targeted search
4. `enrich_contacts` for each key contact — verification, direct dials, email status

**Classify contacts** using F-113 (Eight-Role Stakeholder Classification) and F-115
(Relationship Posture Classification) from `council/framework-index.md`.

### Trigger 3: Intent Signal Enrichment

**When:** Competitive evaluation, renewal risk assessment, expansion timing,
"what are they researching", pipeline prioritisation, account scoring.

**Call sequence:**
1. `enrich_intent` with `companyId` only — **never pre-filter by topic**
   - Use `signalScoreMin: 60`, `sort: "-signalScore"`
   - The goal is to see what they're ACTUALLY researching, not confirm hypotheses

**Triage after retrieval:**
- Keep topics that map to the operator's purpose or your GTM offerings
- Keep non-obvious signals (competitor's category, adjacent buying motion)
- Drop noise
- If nothing meaningful remains, say so explicitly — don't infer from absence
- Cross-reference with news/scoops: intent + leadership change = story

### Trigger 4: Company Enrichment

**When:** Territory planning, account scoring, ICP validation, market mapping,
TAM sizing, "tell me about this company", competitive analysis.

**Call sequence:**
1. `search_companies` — resolve to `companyId`
2. `enrich_companies` — full firmographic and technographic profile
3. `enrich_news` + `enrich_scoops` — recent events and intelligence

**For territory/pipeline (Scope B):** Don't enrich every account. Use CRM aggregates
first, flag 3-5 exceptions, then enrich the exceptions only.

### Trigger 5: Competitive Intelligence

**When:** "They're evaluating a competitor", competitive displacement, win/loss
analysis, competitive positioning.

**Call sequence:**
1. Full Trigger 1 sequence on the target account
2. `find_similar_companies` — identify the competitive cohort
3. `enrich_intent` — check for competitor category research
4. `enrich_scoops` — check for competitor visit signals, vendor mentions

**Cross-reference:** Intent signals showing competitor category research +
scoops showing competitor SDR visits + CRM showing open competitive eval =
confirmed competitive threat, not assumed.

### Trigger 6: Meeting Preparation

**When:** "I have a meeting with [account/person]", call prep, pre-meeting briefing.

**Call sequence:**
1. `search_companies` — resolve company
2. `enrich_companies` — quick firmographic snapshot
3. `account_research` with purpose: "Meeting prep. Surface recent engagement, relationship history, open issues, last call outcomes, key contacts."
4. `enrich_news` + `enrich_scoops` — conversation starters, recent events
5. `enrich_contacts` on the specific person being met — background, role history
6. `enrich_intent` — what are they researching right now?

### Trigger 7: List Building & TAM

**When:** "Build me a list of...", TAM sizing, ICP-based prospecting, territory
planning, ABM list building.

**Call sequence:**
1. `get_gtm_context` — retrieve ICP and persona definitions
2. `lookup` — resolve filter values (industries, employee bands, revenue ranges, technologies, job functions) to standardised IDs
3. `search_companies` with ICP-derived filters — build the target list
4. `search_contacts` with persona-derived filters — find contacts at target companies
5. `find_similar_companies` if starting from a reference account — expand the list

---

## Integration with Data-Gathering Protocol

The triggers above map to the Mandatory Data-Gathering Protocol scopes:

| Scope | Triggers to Execute |
|---|---|
| **Scope A** (single account) | Trigger 1 (full) + Trigger 2 (contacts) |
| **Scope B** (territory) | Trigger 4 (company enrichment) on exception accounts only |
| **Scope C** (coaching) | No ZoomInfo MCP triggers — coaching uses CRM + meeting intelligence |
| **Scope D** (executive) | Trigger 4 (company enrichment) on pattern exceptions only |

**Scope A always fires the full Trigger 1 sequence.** This is non-negotiable when
the ZoomInfo MCP is connected. A Scope A analysis without company enrichment, intent
signals, and contact discovery is incomplete by definition.

---

## Tool Call Efficiency

- **Parallel execution:** Tools 3a-3f in Trigger 1 can run in parallel. They all
  only need `companyId`.
- **Don't re-fetch:** If `enrich_companies` was already called in the session for
  this account, don't call it again. Cache within the session.
- **Scope B restraint:** Don't run Trigger 1 on every account in a territory review.
  Run CRM aggregates first, identify exceptions, then enrich exceptions only.
- **lookup before search:** Always call `lookup` to resolve filter values to
  standardised IDs before calling `search_companies` or `search_contacts` with
  filters. Guessing filter values produces empty results.

---

## When ZoomInfo MCP Is NOT Connected

Fall back to the generic tool abstraction (`protocols/tool-abstraction.md`):
- Company enrichment: use Clearbit, Apollo, or web search
- Intent signals: use Bombora, G2, or state "no intent data available"
- Contact discovery: use Apollo, LinkedIn, or CRM contacts only
- Account research: use web search + CRM activity

State the gap: "ZoomInfo MCP is not connected. Company enrichment, intent signals,
and contact discovery will be limited to [available alternatives]."
