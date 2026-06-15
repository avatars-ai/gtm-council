# Changelog

All notable changes to GTM OS are documented here.

## [0.2.1] — 2026-06-15

### Gap Fixes — Anthropic Guide Compliance

Three structural gaps identified against Anthropic's Complete Guide to Building Skills for Claude (June 2026) closed.

**Gap 1: Executable script wired into output gate**
- `protocols/output-gate.md` — added Deterministic Validation section with full `scripts/validate_output.js` invocation instructions, usage modes (default / customer-facing / council / coaching), exit code reference, and per-check descriptions. The script existed but was orphaned — no instruction in the skill told Claude to run it. Language-based humanizer audit remains the fallback for platforms without script execution.
- `docs/file-manifest.md` — added `validate_output.js` to Scripts section (was missing entirely, listed only 2 scripts).

**Gap 2: Assets directory registered**
- `SKILL.md` on-demand file table — added `assets/` entry with description of copy-ready delivery artifacts.
- `docs/file-manifest.md` — added Assets section (5 files) with correct distinction from Templates section. `assets/` directory and files already existed; were simply unregistered in the skill's routing layer.

**Gap 3: Baseline comparison registered**
- `SKILL.md` on-demand file table — added `docs/baseline-comparison.md` with load trigger (when asked about skill performance or improvement evidence).
- `protocols/self-learning.md` — added `/eval --baseline` command that surfaces the baseline document, and `/optimise baseline` command that checks whether the baseline is stale relative to the current version and prompts an update.
- `docs/file-manifest.md` — added `docs/baseline-comparison.md` to Docs section. Document already existed (149 lines, v0.2.0 dated); was simply invisible to the skill routing layer.

---

## [0.2.0] — 2026-06-12

### Avatar Additions

- **The Financial Architect** (`avatars/the-financial-architect.md`, 32K) — new composite archetype covering Financial Decomposition, Customer Affordability Modelling, Gap-to-Opportunity Translation, Deal Economics Modelling, and Benchmarking. Built from research into Aswath Damodaran, Patrick Boyle, Madhavan Ramanujam, Kyle Poyar, and Jason Lemkin. Includes two supporting system files:
  - `avatars/financial-architect-system/affordability-corridor-calculator.md` — structured affordability modelling tool
  - `avatars/financial-architect-system/filing-analysis-checklist.md` — Boyle 4-layer filing analysis method
- **The GTM Data Strategist** (`avatars/the-gtm-data-strategist.md`, 42K) — new composite archetype covering data quality diagnostics, signal separation, pipeline forensics, CRM health, and enrichment strategy. Largest avatar file in the roster.
- **The Marketing Strategist** (`avatars/the-marketing-strategist.md`, 32K) — new composite archetype covering marketing strategy, ABM, category creation, demand generation, and marketing org design.

### Avatar Updates

- **Brent Adamson** — expanded from 7.5K to 10.7K (+3.2K). JOLT Effect framework added (status quo vs. indecision distinction), additional Challenger frameworks deepened, diagnostic questions expanded.
- **John McMahon** — expanded from 6.7K to 9.1K (+2.4K). Paper process, POC discipline gates, and rep development diagnostics added. Champion vs. Economic Buyer distinction sharpened.

### Framework Index

- `council/framework-index.md` expanded from 58.9K to 68.4K (+9.5K). Financial Architect, GTM Data Strategist, and Marketing Strategist frameworks integrated. All new avatar frameworks indexed with routing rules and debate pairings.

### Roster

- `council/roster.md` expanded from 4.7K to 7.4K (+2.7K). Three new avatars added with domain coverage, trigger conditions, and debate pairings. Financial Architect paired with Revenue Architect and David Skok for deal economics debates.

### Coaching Protocol

- `protocols/coaching.md` rewritten from 2.0K to 5.0K (+3.0K). Skill/Will/System diagnostic expanded, TRM (Task-Relevant Maturity) framework integrated, 30/60/90 coaching plan structure added, rep progression stages (observation → absorption → independence) documented.

### Eval Suite

- `evals/evals.json` expanded from 18 to 39 evals. 21 new evals added covering: Financial Architect deal economics, GTM Data Strategist diagnostics, Marketing Strategist strategy sessions, coaching scenarios, M&A evaluation, council debate fidelity, executive presentation, and cross-functional arbitration. Assertion count now ~140.

### Description

- Removed `Do NOT trigger on:` anti-trigger block from frontmatter description. Description reduced from 1020 to 851 chars (173 chars of headroom). Anti-triggers are handled by the "Not in Scope" section in the SKILL.md body. Removing them from the description improves triggering accuracy — Claude tends to undertrigger skills and negative examples in the description compound that.

---

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
