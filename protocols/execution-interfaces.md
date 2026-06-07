# Execution Interfaces

GTM OS is an advisory skill — it diagnoses, strategises, coaches, and recommends.
It does NOT execute. This file defines the execution interfaces where companion
skills plug in to handle the actions GTM OS prescribes.

The pattern mirrors `tool-abstraction.md` (which handles data INPUT). This file
handles ACTION OUTPUT — what happens after the board advises.

---

## Architecture Principle

**GTM OS is the brain. Companion skills are the hands.**

Skills stack without conflict. The model loads the right ones for whatever the
task requires. GTM OS produces structured strategy; execution skills carry it out.

When no execution skill is available for a given interface, GTM OS outputs the
full instructions for manual execution instead. The user never gets stuck — they
either get automated execution or a detailed playbook.

---

## Execution Interface Types

### 1. Web Extraction

**What it does:** Scrape websites, extract structured data, capture competitive
intelligence from live web pages, crawl documentation sites.

**When GTM OS invokes it:**
- Data-Gathering Protocol needs live competitor pricing, positioning, or product pages
- `/optimise avatars` needs recent publications, talks, or frameworks
- Account research requires company website analysis beyond what enrichment APIs return
- Competitive displacement scenarios need current competitor messaging

**Input contract GTM OS provides:**
```
{
  "url": "target URL or search query",
  "extraction_type": "markdown | structured | screenshot",
  "schema": { ... },  // optional — for structured extraction
  "purpose": "competitive analysis | account research | avatar freshness"
}
```

**Recommended companion skills:**

| Skill | Repo | Strengths |
|---|---|---|
| **Firecrawl** | `BexTuychiev/firecrawl-claude-code-skill` | Clean markdown extraction, structured data via JSON schemas, screenshot capture, doc site crawling. Free tier: 1,000 credits/month. |
| **Bright Data Skills** | `brightdata/skills` | Enterprise-grade scraping with anti-bot bypass. 60+ MCP tools. Built-in competitive intel skill with SWOT, Porter's Five Forces, positioning matrix. Replaces $15K-$50K/year CI tools. |
| **Web Scraper** | `yfe404/web-scraper` | Self-critiquing intelligence reports with gap analysis and staleness warnings. 5-phase reconnaissance with automatic strategy selection. Production-ready Apify Actor output. |

**Graceful fallback (no execution skill):**
Output the URLs that need scraping and the specific data points required. State:
"I need live data from [URLs] but no web extraction tool is connected. Here's what
to look for manually: [structured checklist]."

---

### 2. Competitive Intelligence

**What it does:** Gather live competitive data — pricing, positioning, product changes,
hiring signals, tech stack shifts — and apply strategic analysis frameworks.

**When GTM OS invokes it:**
- Competitive displacement scenarios (Scope A)
- Battle card refresh during deal strategy
- Market mapping for territory design
- Renewal risk assessment when competitor signals detected

**Input contract GTM OS provides:**
```
{
  "competitor": "company name",
  "analysis_type": "pricing | positioning | product | hiring | full",
  "frameworks": ["SWOT", "Porters", "positioning_matrix"],
  "context": "deal-specific context from GTM OS analysis"
}
```

**Recommended companion skills:**

| Skill | Repo | Strengths |
|---|---|---|
| **Bright Data Competitive Intel** | `brightdata/skills` (competitive-intel skill) | Live web data via bdata CLI combined with strategic analysis frameworks. Structured reports with source citations and strategic recommendations. |

**Graceful fallback:**
GTM OS applies the strategic frameworks using whatever data is available (ZoomInfo MCP
intent signals, web search, CRM competitive mentions from meeting intelligence) and
flags where live scraping would improve confidence.

---

### 3. Document Build

**What it does:** Generate presentations, PDF reports, executive briefs, and business
cases from GTM OS analysis output.

**When GTM OS invokes it:**
- After a council session or debate — producing the shareable deliverable
- Executive communication (board memos, CRO briefings, QBR materials)
- Customer-facing POVs and perspective papers
- Business cases and proposal documents

**Input contract GTM OS provides:**
```
{
  "document_type": "deck | pdf | brief | memo | pov",
  "content": { ... },  // structured content from GTM OS analysis
  "template": "board-memo | commercial-pov | council-session",
  "audience": "internal-exec | customer | board"
}
```

**Recommended companion skills:**

| Skill | Repo | Strengths |
|---|---|---|
| **PPTX Templater** | Available on OpenClaw registry | Clone any .pptx into a branded deck. Layout mimicry + content injection. 10 bundled styles. |
| **Content Research Writer** | Available on BehiSecc/awesome-claude-skills | Research-backed content with citations, outlines, and iterative feedback loops. |

**Graceful fallback:**
GTM OS outputs the full content in structured markdown using its templates
(`templates/board-memo.md`, `templates/commercial-pov.md`, etc.). The user copies
into their preferred tool (Google Slides, PowerPoint, Notion, etc.).

---

### 4. Outreach Composition

**What it does:** Draft emails, sequences, and multi-channel outreach from GTM OS
strategy recommendations.

**When GTM OS invokes it:**
- Churn save tri-pronged outreach (CEO, Budget Owner, Ops Champions)
- Multi-threading campaigns after stakeholder mapping
- Winback seeds after churn
- Post-meeting follow-up based on coaching output

**Input contract GTM OS provides:**
```
{
  "outreach_type": "churn_save | multi_thread | winback | follow_up",
  "recipients": [
    { "name": "...", "title": "...", "role_in_deal": "...", "angle": "..." }
  ],
  "messaging": {
    "core_value_prop": "...",
    "proof_points": ["..."],
    "tone": "executive | peer | technical",
    "constraints": ["no pricing in email", "reference specific meeting"]
  },
  "timing": { "send_sequence": "simultaneous | staggered", "delays": "..." }
}
```

**Recommended companion skills:**

| Skill | Repo | Strengths |
|---|---|---|
| **Campaign Orchestrator** | Available on OpenClaw registry (VoltAgent collection) | Multi-channel follow-up campaign orchestration. |
| **AI Marketing Skills** | `BrianRWagner/ai-marketing-claude-code-skills` | Marketing frameworks that AI actually executes. Dual SKILL.md/SKILL-OC.md for token efficiency. Multi-platform (Claude Code, OpenClaw, Cursor, Windsurf). |

**Graceful fallback:**
GTM OS outputs fully drafted emails with subject lines, body copy, send timing,
and sequence logic. The user copies into their outreach platform manually. All
output passes through the Customer-Facing Output Gate (protocols/output-gate.md)
and the humanizer audit before delivery.

---

### 5. Output Quality Enforcement

**What it does:** Audit generated content for AI writing patterns and enforce
human-quality output standards.

**When GTM OS invokes it:**
- Every customer-facing output (automatic)
- Executive communications
- LinkedIn posts, thought leadership
- Any content where AI tells would damage credibility

**Input contract GTM OS provides:**
```
{
  "content": "the text to audit",
  "audience": "customer | executive | public | internal",
  "voice": "direct | consultative | technical",
  "constraints": ["zero AI language", "British register", "no emojis"]
}
```

**Recommended companion skills:**

| Skill | Repo | Strengths |
|---|---|---|
| **Avoid AI Writing** | Available on BehiSecc/awesome-claude-skills | Audits and rewrites content to remove 21 categories of AI writing patterns with a 43-entry replacement table and two-pass detection. |

**Graceful fallback:**
GTM OS's built-in Customer-Facing Output Gate (`protocols/output-gate.md`) runs
the humanizer pass. The dedicated skill adds a second, independent audit layer.

---

### 6. Data Computation

**What it does:** Run calculations, build financial models, score lists, and
analyse exported datasets.

**When GTM OS invokes it:**
- Financial Architect affordability corridor calculations
- Pipeline scoring and weighting models
- Territory design book splits
- TAM sizing calculations
- Deal economics modelling (vendor-side P&L)

**Input contract GTM OS provides:**
```
{
  "computation_type": "affordability | pipeline_score | territory_split | tam | deal_economics",
  "inputs": { ... },  // structured data from GTM OS analysis
  "model": "reference to specific framework being applied",
  "output_format": "table | chart_data | summary"
}
```

**Recommended companion skills:**

| Skill | Repo | Strengths |
|---|---|---|
| **Alpha Insights** | Available on BehiSecc/awesome-claude-skills | Structured business research with strategy frameworks, evidence grading, and report output. |

**Graceful fallback:**
GTM OS outputs the formula, the input assumptions, and a worked example. On
platforms with code execution (Claude Code, Cursor, Codex), it can write and run
a script directly. On platforms without, it provides the spreadsheet formula.

---

## Execution Skill Discovery Protocol

At session start (or when an execution action is first needed), check which
execution capabilities are available.

**Discovery sequence:**
1. Check installed skills for capabilities matching the interfaces above
2. Map available skills to interface types
3. For actions where no execution skill exists, use graceful fallback
4. State capabilities to the operator only when relevant: "I can draft the emails
   but I don't have an outreach tool connected — I'll provide the copy for you
   to send manually."

**Key principle: Adapt, don't fail.** GTM OS always produces the strategy and the
structured output. Execution skills accelerate the last mile. Without them, the
user still gets everything they need — they just execute manually.

---

## Recommended Companion Skill Stack

For the richest GTM OS experience, install these alongside:

### Must-Have (Direct strategy amplifiers)

| Skill | Interface | Why |
|---|---|---|
| **Firecrawl** (`BexTuychiev/firecrawl-claude-code-skill`) | Web Extraction | Feeds the data-gathering protocol with live web intelligence. Free tier sufficient for most use. |
| **Bright Data Skills** (`brightdata/skills`) | Competitive Intelligence, Web Extraction | Enterprise-grade competitive intel with strategic frameworks. Replaces standalone CI subscriptions. |
| **Avoid AI Writing** (BehiSecc collection) | Output Quality | Second-pass audit layer. Enforces zero-AI-language standard on every customer-facing output. |

### Nice-to-Have (Execution accelerators)

| Skill | Interface | Why |
|---|---|---|
| **AI Marketing Skills** (`BrianRWagner/ai-marketing-claude-code-skills`) | Outreach Composition | Turns GTM OS outreach strategy into executable campaigns. |
| **Alpha Insights** (BehiSecc collection) | Data Computation, Research | Structured business research with evidence grading. |
| **Content Research Writer** (BehiSecc collection) | Document Build | Research-backed content generation with citations. |
| **YouTube Full** (BehiSecc collection) | Avatar Freshness (/optimise) | YouTube transcripts for detecting new frameworks from avatar sources. |

### Specialist (Niche scenarios)

| Skill | Interface | Why |
|---|---|---|
| **PPTX Templater** (OpenClaw registry) | Document Build | When output must be a branded PowerPoint deck. |
| **X/Twitter Scraper** (BehiSecc collection) | Social Intelligence | Prospect and competitor social signal monitoring. |
| **Claude Persona** (BehiSecc collection) | Customer Research | AI persona panels for ICP validation and message testing. |

---

## Interaction Pattern

When GTM OS reaches an execution step:

1. **Check** — Is there an execution skill installed for this interface?
2. **If yes** — Pass the structured input contract. Let the companion skill execute.
3. **If no** — Output the full manual playbook using the graceful fallback.
4. **Always** — GTM OS retains ownership of strategy. The execution skill handles
   mechanics only. GTM OS validates the output against its quality standards before
   the user sees it.

This ensures GTM OS works identically on a fully-loaded Claude Code setup with
6 companion skills AND on a bare ChatGPT Custom GPT with nothing installed.
