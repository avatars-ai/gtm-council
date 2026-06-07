# Tool Abstraction Layer

GTM OS works with whatever data sources are connected. This file defines the 7 data
source types the skill needs, maps them to platform-specific tools, and provides
a discovery mechanism so the skill adapts at runtime.

---

## Data Source Types

| Type | What It Provides | Why It Matters |
|---|---|---|
| **CRM** | Accounts, opportunities, contacts, activity, pipeline, attainment | The structural foundation — without CRM, the skill can advise but not ground in data |
| **Meeting Intelligence** | Call transcripts, discovery quality, competitive mentions, stakeholder sentiment | Reveals what's actually happening in conversations — CRM records what happened, meetings reveal how |
| **Company Enrichment** | Financials, technographics, news, executive moves, partnerships | External context that CRM doesn't capture — market position, tech stack, leadership changes |
| **Intent Signals** | Topic research signals — what accounts are actively researching | Leading indicator of buying motion or competitive evaluation |
| **Contact Discovery** | Org chart, decision-makers, stakeholder mapping, contact verification | Identifies who you're NOT talking to — the white space in your stakeholder coverage |
| **Account Intelligence** | Company summary, strategic priorities, market position | Narrative layer on top of structured data — connects dots across sources |
| **Web Search** | Earnings, press releases, leadership changes, market context | Universal fallback — always available on every platform |

## Platform-Specific Tool Mapping

### CRM

| Platform / Tool | Discovery Pattern |
|---|---|
| Salesforce MCP | `querySalesforce`, `getSalesforceEntitySchema` |
| HubSpot MCP | `hubspot_search`, `hubspot_get_object` |
| Pipedrive MCP | `pipedrive_search_deals`, `pipedrive_get_organization` |
| Generic CRM | Any tool that queries accounts, opportunities, contacts |
| No CRM connected | State: "No CRM connected. Analysis will be based on information you provide and external sources only." |

**CRM schema discovery is mandatory before any query.** Every CRM names fields
differently. Query the schema first, then build queries using actual field names.

### Meeting Intelligence

| Platform / Tool | Discovery Pattern |
|---|---|
| Gong MCP | `gong_search_calls`, `gong_get_call_transcript` |
| Chorus | `embed-search-chorus` or Chorus MCP |
| Fireflies MCP | `fireflies_search`, `fireflies_get_transcript` |
| Generic | Any tool that searches call transcripts or meeting recordings |
| No meeting intelligence | State: "No meeting intelligence connected. Cannot verify engagement quality, stakeholder sentiment, or competitive mentions from calls." |

**Dual search is mandatory for Scope A:** One search for commercial context, one for
constraints/blockers. These answer fundamentally different questions.

### Company Enrichment

| Platform / Tool | Discovery Pattern |
|---|---|
| ZoomInfo MCP | `enrich_companies`, `enrich_news`, `enrich_scoops` — most comprehensive single source |
| Clearbit / Breeze | `clearbit_enrich_company` |
| Apollo MCP | `apollo_enrich_organization` |
| Generic | Any tool that returns company financials, technographics, or news |
| No enrichment | Use web search as fallback. State: "No company enrichment source connected. Using web search only — coverage will be limited." |

### Intent Signals

| Platform / Tool | Discovery Pattern |
|---|---|
| ZoomInfo MCP | `enrich_intent` — topic-level research signals |
| Bombora MCP | `bombora_get_surge_scores` |
| G2 MCP | `g2_get_buyer_intent` |
| No intent data | State: "No intent signals available. Cannot detect active research behaviour." |

### Contact Discovery

| Platform / Tool | Discovery Pattern |
|---|---|
| ZoomInfo MCP | `search_contacts`, `get_recommended_contacts`, `enrich_contacts` |
| Apollo MCP | `apollo_search_people`, `apollo_enrich_person` |
| LinkedIn MCP | `linkedin_search_people` |
| No contact discovery | State: "No contact discovery source connected. Stakeholder mapping limited to CRM contacts only." |

### Account Intelligence

| Platform / Tool | Discovery Pattern |
|---|---|
| ZoomInfo MCP | `account_research`, `contact_research`, `getCompanySummary` |
| Generic | Any tool providing narrative company summaries or relationship context |
| No account intelligence | Use web search + CRM activity as proxy |

### Web Search

| Platform / Tool | Discovery Pattern |
|---|---|
| Universal | `web_search`, `search`, `brave_search`, `tavily_search`, or equivalent |
| Always available | Web search is available on every platform. If not, state the limitation explicitly. |

---

## Tool Discovery Protocol

At the start of any data-gathering sequence, identify which data source types are
connected. This takes one step and prevents failed tool calls throughout the session.

**Discovery sequence:**
1. Check which tools are available in the current environment
2. Map available tools to the 7 data source types above
3. Identify gaps — which types have no tool connected
4. State gaps to the operator: "I have access to [CRM, Web Search]. I don't have
   [Meeting Intelligence, Company Enrichment, Intent Signals, Contact Discovery,
   Account Intelligence]. The analysis will be limited in [specific areas]."

**Adapt, don't fail.** If a data source is missing, the skill still works — it just
flags what intelligence is unavailable and adjusts confidence ratings accordingly.
A CRM-only analysis is still valuable. A web-search-only analysis is still better
than no analysis.

---

## ZoomInfo MCP — Optional Premium Integration

When connected, the ZoomInfo MCP provides the richest single-source coverage across
Company Enrichment, Intent Signals, Contact Discovery, and Account Intelligence.
No other single integration covers all four types.

**Repository:** https://github.com/Zoominfo/zoominfo-mcp-plugin

**What it adds:**
- `enrich_companies` — financials, technographics, org structure
- `enrich_news`, `enrich_scoops` — real-time company intelligence
- `enrich_intent` — topic-level research signals (unconstrained)
- `search_contacts`, `get_recommended_contacts` — org chart, buying committee
- `enrich_contacts` — contact verification and enrichment
- `account_research`, `contact_research` — narrative intelligence
- `get_gtm_context` — your organisation's GTM context
- `find_similar_companies` — lookalike discovery
- `lookup` — standardised filter resolution (industries, employee bands, revenue ranges)

**When not connected:** The skill works with whatever sources are available and flags
the enrichment gaps. Web search provides partial coverage for company intelligence
but cannot replace structured enrichment data, intent signals, or contact discovery.
