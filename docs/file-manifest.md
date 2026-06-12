# File Manifest — GTM OS

*Last verified: 2026-06-12 (v0.2.0)*
*Audit cadence: Quarterly — verify all references resolve, delete unused files*

---

## Tier 0 — Always Loaded

| File | Purpose | Size |
|---|---|---|
| `SKILL.md` | Orchestration, data-gathering summary, modes, output standards | ~20 KB |
| `council/roster.md` | Avatar routing table + debate pairings | ~7 KB |
| `council/framework-index.md` | 145+ frameworks across 27 avatars — orchestration engine | ~68 KB |
| `operator/universal-context.md` | Universal GTM principles, diagnostics, standards | ~14 KB |
| `operator/team-os-template.md` | Team operating system template — copy to team-os.md and customise | ~10 KB |

## References (Extracted from SKILL.md)

| File | Purpose | Size |
|---|---|---|
| `references/data-gathering.md` | Full Mandatory Data-Gathering Protocol (Scopes A–D, 5-source minimum, white space) | ~8 KB |
| `references/interaction-modes.md` | Modes 2–6 detailed specifications (council, debate, document review, arbitration) | ~5 KB |
| `references/capture.md` | Full /capture session learning protocol, schema, integration steps | ~4 KB |

## Avatars (27 files + template + 2 systems)

| Directory | Count | Purpose |
|---|---|---|
| `avatars/*.md` | 27 + template | One file per board member |
| `avatars/jamal-reimer-system/` | 7 files | Mega-deal execution support files |
| `avatars/financial-architect-system/` | 2 files | Filing analysis + affordability calculator |

## Protocols (13 files)

| File | Purpose |
|---|---|
| `protocols/tool-abstraction.md` | 7 data source types, platform mapping, tool discovery |
| `protocols/execution-interfaces.md` | 6 execution interface types, companion skill mapping, discovery protocol |
| `protocols/zoominfo-mcp-triggers.md` | ZoomInfo MCP automatic trigger rules (7 triggers) |
| `protocols/tool-connectors.md` | Data synthesis discipline, stakeholder classification |
| `protocols/deal-strategy.md` | Deal qualification, negotiation, competitive |
| `protocols/coaching.md` | Rep development, skill/will diagnosis |
| `protocols/gtm-strategy.md` | Org design, positioning, pricing |
| `protocols/revops-diagnostics.md` | Revenue system diagnostic, CRM platform reference |
| `protocols/document-review.md` | Four-cohort review, humanizer pass |
| `protocols/output-gate.md` | Customer-facing output gate |
| `protocols/strategic-futures.md` | Category strategy, moat assessment, pricing transitions |
| `protocols/token-efficiency.md` | Tool call optimisation, loading tiers |
| `protocols/self-learning.md` | /capture, /eval, /optimise commands |

## Operator (3 files)

| File | Purpose |
|---|---|
| `operator/operator-context.md` | Auto-detected identity, department routing |
| `operator/universal-context.md` | Cross-functional tension maps, diagnostics, communication |
| `operator/team-os-template.md` | Template — copy to team-os.md and customise |

## Docs (10 files)

| File | Purpose |
|---|---|
| `docs/artifact-design-system.md` | Duarte principles, Cliff Edge Structure |
| `docs/avatar-quality-rubric.md` | 8-dimension scoring rubric |
| `docs/british-audience-calibration.md` | British register guidance |
| `docs/design-principles.md` | Skill architecture rationale |
| `docs/file-manifest.md` | This file |
| `docs/install/claude-code.md` | Installation guide for Claude Code |
| `docs/install/claude-ai.md` | Installation guide for Claude.ai |
| `docs/install/chatgpt.md` | Installation guide for ChatGPT (Custom GPTs, Projects, Codex) |
| `docs/install/cursor-windsurf.md` | Installation guide for Cursor and Windsurf |
| `docs/install/gemini-cli.md` | Installation guide for Gemini CLI |

## Evals (3 files)

| File | Purpose |
|---|---|
| `evals/evals.json` | 39 evals with ~140 assertions |
| `evals/trigger-eval-queries.json` | Trigger accuracy testing |
| `evals/candidates.json` | Eval candidates for future promotion |

## Examples (7 files)

| File | Purpose |
|---|---|
| `examples/competitive-displacement.md` | Full Scope A competitive response |
| `examples/deal-at-risk.md` | Champion-left rescue with MEDDPICC |
| `examples/pipeline-diagnosis.md` | Scope B territory analysis |
| `examples/debate-embedded-deployment.md` | Genuine council debate (6 avatars, 5+ disagreements) |
| `examples/scope-d-company-wide.md` | Pattern-level executive analysis |
| `examples/mna-evaluation.md` | Strategic-first M&A assessment |
| `examples/anti-patterns.md` | Four failure modes to avoid |

## Templates (6 files)

| File | Purpose |
|---|---|
| `templates/board-memo.md` | Executive memo template |
| `templates/commercial-pov.md` | Customer-facing POV template |
| `templates/council-session.md` | Council session output template |
| `templates/debate-brief.md` | Debate output template |
| `templates/individual-consult.md` | Individual consultation template |
| `templates/marketing-review.md` | Marketing strategy review template |

## Scripts (2 files)

| File | Purpose |
|---|---|
| `scripts/run_eval.js` | Eval runner |
| `scripts/score_engagement.js` | Engagement scoring |

## Other

| File | Purpose |
|---|---|
| `CLAUDE.md` | Pointer to SKILL.md for Claude Code and Cursor |
| `AGENTS.md` | Pointer to SKILL.md for multi-agent platforms (mirrors CLAUDE.md) |
| `agents/openai.yaml` | OpenAI agent definition — display name, short description, default prompt for OpenAI-compatible agent registries |
| `README.md` | GitHub landing page |
| `CHANGELOG.md` | Version history |
| `CONTRIBUTING.md` | Contribution guide |
| `LICENSE.md` | Custom license with avatar disclaimer |
