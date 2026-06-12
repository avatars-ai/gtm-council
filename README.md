# GTM OS

[![GitHub](https://img.shields.io/github/stars/avatars-ai/gtm-os?style=social)](https://github.com/avatars-ai/gtm-os)
[![License](https://img.shields.io/badge/license-custom-blue)](LICENSE.md)

A virtual advisory board of 27 world-class GTM strategists that operates as an AI skill — providing deal strategy, pipeline diagnosis, coaching, marketing strategy, RevOps diagnostics, and executive communication grounded in 145+ research-verified frameworks.

---

## What It Is

An AI skill that gives any revenue leader access to a panel of 27 distinct advisors — each modelled on a specific, real GTM expert (or composite archetype) with verified frameworks, career history, and authentic voice. The board doesn't blend into a single generic advisor. Each member responds using their own mental models, disagrees with other members when appropriate, and challenges your assumptions.

Works on any frontier model. No dependencies. No API keys. One file to install.

## Install

Detailed per-platform guides in `docs/install/`.

**One-Command Install (Claude Code, Codex, Cursor, Gemini CLI, and 67+ agents)**
```bash
npx skills add avatars-ai/gtm-os
```

**Manual Install — Claude Code**
```bash
git clone https://github.com/avatars-ai/gtm-os.git ~/.claude/skills/gtm-os
```

**Claude.ai**
Download ZIP -> Settings -> Skills -> Upload. See `docs/install/claude-ai.md`.

**ChatGPT**
Copy `SKILL.md` contents into Custom GPT instructions. Upload `council/framework-index.md`
and `council/roster.md` to Knowledge. See `docs/install/chatgpt.md`.

**Codex**
Copy `gtm-os/` to your project's skills directory.

**OpenAI Agent Registries**
`agents/openai.yaml` provides display name, short description, and default prompt
for OpenAI-compatible agent registry formats.

**Cursor / Windsurf**
Copy `gtm-os/` to `.cursor/skills/` or `.windsurf/skills/`. See `docs/install/cursor-windsurf.md`.

**Gemini CLI**
Copy `gtm-os/` to `~/.gemini/skills/`. See `docs/install/gemini-cli.md`.

## What You Get

- **27 research-verified advisor personas** with distinct frameworks, voices, and expertise
- **145+ frameworks** across deal strategy, pipeline, coaching, RevOps, marketing, M&A, data quality
- **Invisible orchestration** — multi-framework analysis woven into every response
- **6 interaction modes** — orchestrated advisory, individual consultation, council session, debate, document review, cross-functional arbitration
- **Mandatory data-gathering** with 4 scope levels that adapts to whatever tools you have connected
- **Self-learning** — `/capture`, `/eval`, `/optimise` commands to improve the skill over time
- **Customer-facing output gate** with humanizer audit (zero AI tells)
- **39 evals with ~140 assertions** for quality verification

## Quick Start

Just ask naturally. The board routes automatically.

**Deal rescue:**
> "My $500K renewal is at risk — the champion just left. What do I do?"

**Pipeline diagnosis:**
> "My pipeline is 3.1x against a $4M target. We had 3.5x last quarter and only hit 92%. Should I be worried?"

**Coaching:**
> "I have a rep who's great at renewals but can't close expansion deals. Numbers are fine on retention but zero growth. What's going on?"

**Document review:**
> "Review this executive briefing before I send it to the customer."

**Debate:**
> "Debate whether I should lead with empathy or challenge in this competitive displacement."

## How It Works

### Tiered Loading
- **Tier 0** (always loaded): SKILL.md + framework index + roster + universal context
- **Tier 1** (default): No additional files. Framework Index cues the right mental models.
- **Tier 2** (on request): Full avatar files loaded for authentic voice in explicit modes.

### Orchestration Protocol
Every qualifying prompt runs through: Assumption Scan -> Framework Routing -> Woven Integration -> Tension Surfacing. The user feels the quality without seeing the machinery.

### Data Gathering
Before advising, the board gathers data proportional to the question. Scope A (single account) = full sweep. Scope B (territory) = aggregate first, exception deep-dives. Scope C (coaching) = rep patterns. Scope D (executive) = business-level patterns.

### Tool Abstraction
Works with any CRM (Salesforce, HubSpot, Pipedrive), any meeting intelligence (Gong, Chorus, Fireflies), any enrichment source (ZoomInfo, Clearbit, Apollo), and web search. Adapts to whatever tools are connected and flags gaps.

## Advisors

| # | Avatar | Domain |
|---|---|---|
| 1 | Steven Bartlett | First-principles, narrative, founder mentality |
| 2 | Jacco van der Kooij | Revenue architecture, SPICED, bow-tie |
| 3 | Jeb Blount | Prospecting discipline, pipeline, objection handling |
| 4 | John McMahon | MEDDPICC, enterprise deals, forecast, sales leadership |
| 5 | Josh Braun | Permission-based prospecting, curiosity-led discovery |
| 6 | Mark Kosoglow | Customer success, adoption, post-sale GTM |
| 7 | Mark Roberge | Data-driven management, hiring science, coaching |
| 8 | Peter Drucker | Executive effectiveness, org design, abandonment |
| 9 | Simon Sinek | Purpose-driven leadership, infinite game, trust |
| 10 | Steli Efti | Follow-up discipline, speed, founder-led sales |
| 11 | Aaron Ross | Sales specialisation, outbound systems |
| 12 | Barbara Minto | Pyramid Principle, MECE, executive communication |
| 13 | Bill Campbell | Trust coaching, people-first leadership |
| 14 | Brent Adamson | Challenger Sale, buyer consensus, JOLT |
| 15 | Chris Voss | Tactical empathy, negotiation |
| 16 | David Priemer | Buyer neuroscience, authentic selling |
| 17 | David Skok | SaaS metrics, unit economics |
| 18 | Donella Meadows | Systems thinking, leverage points |
| 19 | Jamal Reimer | Mega-deal strategy, Two Mountain Model |
| 20 | Kyle Norton | Revenue OS, scaling GTM, talent density |
| 21 | The Revenue Architect | CRO operating system, upmarket enterprise |
| 22 | The Category Architect | Category creation, data business strategy |
| 23 | The Cognitive Architect | Cognitive biases, decision architecture, pre-suasion |
| 24 | The Depth Psychologist | Unconscious motivation, shadow psychology, power dynamics |
| 25 | The Financial Architect | Financial decomposition, deal economics, pricing architecture |
| 26 | The GTM Data Strategist | Data quality, signal separation, pipeline forensics |
| 27 | The Marketing Strategist | Marketing strategy, ABM, category creation, marketing org design |

## Connecting Data Sources

GTM OS works with whatever tools you have connected. See `protocols/tool-abstraction.md` for the full mapping.

| Data Source Type | Example Tools |
|---|---|
| CRM | Salesforce MCP, HubSpot MCP, Pipedrive MCP |
| Meeting Intelligence | Gong MCP, Chorus, Fireflies MCP |
| Company Enrichment | ZoomInfo MCP, Clearbit, Apollo MCP |
| Intent Signals | ZoomInfo MCP, Bombora, G2 |
| Contact Discovery | ZoomInfo MCP, Apollo MCP, LinkedIn MCP |
| Account Intelligence | ZoomInfo MCP, web search |
| Web Search | Universal — available on all platforms |

### ZoomInfo MCP — Optional Premium Integration

When connected, the [ZoomInfo MCP](https://github.com/Zoominfo/zoominfo-mcp-plugin) provides the richest single-source coverage across Company Enrichment, Intent Signals, Contact Discovery, and Account Intelligence. No other single integration covers all four types.

**Available on:** Claude (Code, .ai, API), ChatGPT, Perplexity, Codex, any MCP-compatible client.

**Automatic triggers:** When connected, GTM OS calls ZoomInfo MCP tools automatically on:

| Trigger | When It Fires |
|---|---|
| Account Research | Any prompt about a specific account — renewal, expansion, QBR, deal strategy |
| Contact Discovery | Buying committee mapping, multi-threading, "who should I talk to" |
| Intent Signals | Competitive evaluation, renewal risk, expansion timing, account scoring |
| Company Enrichment | Territory planning, account scoring, ICP validation, market mapping |
| Competitive Intelligence | Competitor evaluation, displacement, win/loss analysis |
| Meeting Prep | "I have a meeting with...", call prep, pre-meeting briefing |
| List Building & TAM | "Build me a list of...", TAM sizing, ABM list building |

See `protocols/zoominfo-mcp-triggers.md` for the full trigger rules and call sequences.

When not connected, the skill works with whatever sources are available and flags the gaps.

## Companion Skills — Execution Layer

GTM OS is the brain — it diagnoses, strategises, coaches, and recommends. These companion skills are the hands — they execute the actions GTM OS prescribes. Install alongside GTM OS for the richest experience. Without them, GTM OS still works perfectly — it outputs full manual playbooks instead.

See `protocols/execution-interfaces.md` for the full interface definitions and input contracts.

### Must-Have

| Skill | Repo | What It Does for GTM OS |
|---|---|---|
| **Firecrawl** | [`BexTuychiev/firecrawl-claude-code-skill`](https://github.com/BexTuychiev/firecrawl-claude-code-skill) | Feeds the data-gathering protocol with live web intelligence — competitor pricing pages, product positioning, company websites. Clean markdown extraction, structured data via JSON schemas, screenshots. Free tier: 1,000 credits/month. |
| **Bright Data Skills** | [`brightdata/skills`](https://github.com/brightdata/skills) | Enterprise-grade competitive intelligence with anti-bot bypass. |
| **Avoid AI Writing** | [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) collection | Second-pass audit layer on top of GTM OS's built-in humanizer. Audits and rewrites content to remove 21 categories of AI writing patterns with a 43-entry replacement table. Zero AI tells on customer-facing output. |

### Nice-to-Have

| Skill | Repo | What It Does for GTM OS |
|---|---|---|
| **AI Marketing Skills** | [`BrianRWagner/ai-marketing-claude-code-skills`](https://github.com/BrianRWagner/ai-marketing-claude-code-skills) | Turns GTM OS outreach strategy into executable email campaigns and sequences. Multi-platform: Claude Code, OpenClaw, Cursor, Windsurf. |
| **Alpha Insights** | [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) collection | Structured business research with strategy frameworks and evidence grading. Amplifies Financial Architect and deal economics analysis. |
| **Content Research Writer** | [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) collection | Research-backed content generation with citations and iterative feedback. Powers document build after council sessions. |
| **YouTube Full** | [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills) collection | YouTube transcripts and search. Powers `/optimise avatars` — detecting new frameworks from avatar source talks and publications. |

### Specialist

| Skill | What It Does for GTM OS |
|---|---|
| **PPTX Templater** (OpenClaw registry) | When GTM OS output must be a branded PowerPoint deck — clones any .pptx template. |
| **X/Twitter Scraper** (BehiSecc collection) | Prospect and competitor social signal monitoring for account research. |
| **Claude Persona** (BehiSecc collection) | AI persona panels for ICP validation and message testing — augments GTM OS's avatar debates. |

### How It Works

GTM OS checks for installed companion skills when it reaches an execution step. If a companion skill is installed, GTM OS passes a structured input contract and lets the companion handle mechanics. If no companion is installed, GTM OS outputs the full manual playbook — URLs to scrape, emails to draft, calculations to run. You never get stuck.

## Self-Learning

| Command | What It Does |
|---|---|
| `/capture` | Scan session for corrections and new patterns. Apply changes on approval. |
| `/eval` | Run eval suite. Report pass rate. Detect regressions. |
| `/optimise` | Test trigger accuracy. Check avatar freshness. Analyse token efficiency. |

On platforms with file system access, changes are applied directly. On platforms without, changes are presented as recommendations.

## Contributing

### Adding an Avatar
1. Research: web search for career, books, frameworks, talks. Minimum 3 sources.
2. Copy `avatars/AVATAR-TEMPLATE.md`, fill every section.
3. Score against `docs/avatar-quality-rubric.md` (must score 80+).
4. Add to `council/roster.md` and `council/framework-index.md`.

### Adding a Framework
1. Add to the relevant avatar's section in `council/framework-index.md`.
2. Include: avatar attribution, source, when to invoke, core content, connections to other frameworks.

### Running Evals
```bash
node scripts/run_eval.js --council-dir .
```

## License

Custom license. See [LICENSE.md](LICENSE.md).

Copyright (c) 2026 Ali Syed. Attribution required. Not for resale as a standalone product.

---

Built on the frameworks of the best revenue operators in the world.
