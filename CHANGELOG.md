# Changelog

All notable changes to GTM OS are documented here.

## [0.1.0] — 2026-06-07

### Initial Release — Forked from gtm-council v1.0.10

GTM OS is a platform-agnostic fork of the GTM Council skill, transformed for
universal deployment across any frontier model.

### Context Engineering Optimisations (Post-Build)
- **Gotchas section added** — 8 codified failure modes (avatar bleed, data-free advice, consensus smoothing, AI-slop, generic discovery, over-loading avatars, ignoring white space, session rot) placed immediately after Core Principles for maximum model attention.
- **Description rewritten as pure trigger** — removed "Virtual GTM advisory board of 27 revenue strategists" self-description. Now answers "when should I fire?" not "what am I?" Added explicit anti-triggers ("Do NOT trigger on: writing code, building emails..."). 896 chars.
- **SKILL.md restructured for U-curve attention** — Output Standards, Customer-Facing Gate, Quality Gates, and Artifact rules moved from middle to bottom of file where recall accuracy is highest. Critical instructions now anchored at top (Principles, Gotchas, Orchestration) and bottom (Output Standards, Session Length Protection).
- **Session Length Protection added** — explicit compaction guidance after 15-20 exchanges with re-anchoring instructions to combat context rot.
- **`npx skills add` compatibility** — README install section updated with one-command install via Vercel Skills CLI. SKILL.md frontmatter already compliant.
- **Anti-trigger examples in description** — 7 explicit negative triggers to prevent over-firing on non-GTM prompts.

### Architecture
- **SKILL.md reduced to 278 lines** (from 750). Heavy sections extracted to `references/`.
- **Agent Skills spec compliant**: YAML frontmatter with name, description (<1024 chars), license, compatibility, metadata fields.
- **Progressive disclosure**: Tier 0 (~100KB) -> Tier 1 (framework cueing) -> Tier 2 (full avatars on demand).
- **CLAUDE.md pointer** added for platforms that look for CLAUDE.md.

### Platform Agnostic
- Works on Claude (Code, .ai, API), ChatGPT (Custom GPTs, Projects, Codex), Cursor, Windsurf, Gemini CLI.
- All instructions use model-neutral language.
- No hardcoded file paths or platform-specific tool names.

### Tool Abstraction
- **`protocols/tool-abstraction.md`** — 7 data source types (CRM, Meeting Intelligence, Company Enrichment, Intent Signals, Contact Discovery, Account Intelligence, Web Search) with platform-specific tool mapping.
- **`protocols/execution-interfaces.md`** — 6 execution interface types (Web Extraction, Competitive Intelligence, Document Build, Outreach Composition, Output Quality Enforcement, Data Computation) with companion skill mapping and graceful fallbacks.
- **Tool discovery protocol** — skill identifies connected tools at session start and adapts.
- **Execution skill discovery** — skill checks for companion skills when reaching execution steps. If installed, passes structured input contracts. If not, outputs full manual playbooks.
- **ZoomInfo MCP** retained as optional premium integration.
- **Recommended companion skills**: Firecrawl (web extraction), Bright Data (competitive intel), Avoid AI Writing (output quality), AI Marketing Skills (outreach), Alpha Insights (research), Content Research Writer (documents), YouTube Full (avatar freshness).

### Avatar Changes
- Henry Schuck renamed to **The Category Architect** (composite archetype).
- James Roth renamed to **The Revenue Architect** (composite archetype).
- All frameworks preserved. Avatar count remains 27.

### Removed (ZoomInfo-specific)
- Agent routing system (`protocols/agent-router.md`, `protocols/agent-routing-reference.md`)
- Agent routing step from Orchestration Protocol
- `operator/team-data.md` (BigQuery/Clari configuration)
- `operator/strategic/zi-futures-thought-partner.md` (universal parts extracted)
- GARR Data Pull Protocol, H2 Risk Scoring Protocol, Book Triage Pull from tool-connectors.md
- `docs/external-skills.md`
- `work/` directory (session artifacts)
- `evals/eval-results.json` (personal eval results)
- 8 ZoomInfo-specific evals (IDs 18, 19, 21, 22, 23, 24, 27, 45)

### Added
- **`protocols/tool-abstraction.md`** — Universal tool mapping and discovery
- **`protocols/strategic-futures.md`** — Category strategy, moat assessment, pricing transitions (extracted from zi-futures)
- **`protocols/self-learning.md`** — `/capture`, `/eval`, `/optimise` commands with file system awareness
- **`references/data-gathering.md`** — Full data-gathering protocol (extracted from SKILL.md)
- **`references/interaction-modes.md`** — Modes 2-6 detail (extracted from SKILL.md)
- **`references/capture.md`** — Full /capture protocol (extracted from SKILL.md)
- **`CLAUDE.md`** — Pointer to SKILL.md for compatible platforms
- **`LICENSE.md`** — Custom license with avatar disclaimer
- **`docs/install/`** — Per-platform installation instructions (planned)

### Changed
- `operator/personal-os.md` renamed to `operator/team-os-template.md` with template header and configurable placeholders
- Forecasting logic universalised: all specific numbers replaced with `[bracketed placeholders]`
- Churn signal B changed from "DACH/EMEA Data Quality Doubt" to "Product-Market Doubt"
- All tool references in SKILL.md and protocols use generic data source types
- Examples genericised (ZoomInfo -> enrichment platform, ZI -> the platform)
- Mawsool M&A example genericised to "Acme Data Solutions"
- `protocols/self-optimisation.md` replaced by `protocols/self-learning.md`
- `tool-connectors.md` stripped of ZI-specific protocols, retains universal synthesis discipline
- 39 evals remain with ~140 assertions
