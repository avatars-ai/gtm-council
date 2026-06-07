# RevOps Diagnostics Protocol

*Source: Absorbed from NEON-Rutger/B2B-revops-skills (revops-diagnostic, revops-crisis,
revops-data-governance, revops-tech-stack). Advisory frameworks only — no platform-specific
execution detail.*

## When to Use This Protocol

Invoke when the user describes systemic revenue problems, not individual deal issues:
- "We keep missing plan" / "everything is broken"
- Pipeline coverage falling across the team
- Forecast variance >±30% for 2+ quarters
- Win rate declining structurally (not one bad quarter)
- Data trust collapsed ("our reports don't match")
- Multiple functions blaming each other

For individual deal/account problems, use `protocols/deal-strategy.md` instead.

---

## Revenue System Diagnostic (3-Layer Model)

### The Three Layers

```
GOVERNANCE (Outer)
  Strategy + Priorities + KPIs + Steering Rhythm
  The control system. Gap between current and desired state = real roadmap.
  Failures: strategies reset every quarter, conflicting priorities, no shared KPIs,
  meetings without decisions, new initiatives launched without killing old ones.

ENABLEMENT (Middle)
  People + Process + Platforms + Data Spine
  The infrastructure revenue runs on.
  People: capacity, roles, skills, onboarding, coaching rhythm, compensation
  Process: handovers, workflows, ICP targeting, qualification, methodology
  Platforms: CRM (configured, not just installed), tools, AI/LLMs, stack architecture
  Data Spine: definitions, data flows, quality, metrics, single source of truth

ICP VALUE LOOPS (Core)
  Product Value Engine + Revenue Engine
  Where value is created. Customer insights are a living output.
```

### Diagnostic Rule

**Problems usually sit one layer out from where they appear.**
- Pipeline weak → look at Enablement (process, data)
- Reps underperforming → look at Platforms and coaching
- Forecast unreliable → look at Governance (cadence, KPI definitions)
- Direction flows down, results flow up. Break either flow = system drifts.

### Six Stages of Check

1. Define desired state (specific, measurable)
2. Map current state (with data, not opinion)
3. Identify gap (current vs desired — this IS the roadmap)
4. Find root cause in the correct layer (not symptoms)
5. Design intervention (targeted at root cause layer)
6. Measure + re-steer (close the loop)

---

## Crisis Recognition & Triage

### Crisis Thresholds (Any ONE = Crisis Mode)

```
FORECAST:  ±30%+ variance for 2+ consecutive quarters
WIN RATE:  Declined 5+ points over 3 quarters
PIPELINE:  Coverage below 3x AND falling month-over-month
RETENTION: NRR below 90% OR GRR below 80%
DATA:      Critical deal fields <70% complete; CRM ≠ finance by >10%
TRUST:     3+ functions blaming each other
PEOPLE:    2+ top performers leaving in one quarter; open cynicism
```

### Emergency Triage (Goals, Not a Script)

When crisis thresholds are hit, the goal is to rebuild trust in data, forecast,
process, and cross-functional communication — in that order. Sequence matters
because each layer depends on the one before it.

**Goal 1: Data Audit.** Can you trust your numbers? Sample open deals and check
field completeness. Below 70% on critical fields = stop planning, fix data first.
You cannot forecast what you cannot see.

**Goal 2: Forecast Rebuild.** Rebuild forecast using only deals that pass the data
audit. The gap between this number and the current forecast = the trust deficit.
This is usually 30-50% lower. That's the real starting point.

**Goal 3: Process Triage.** Find the biggest handoff failure using conversion rate
drops between stages. Fix the worst bottleneck. Don't fix all three simultaneously —
parallel fixes compete for attention and none get done.

**Goal 4: Communication Reset.** Rebuild shared definitions, shared dashboards,
shared accountability between functions. One decision per meeting. No meeting
without a decision.

**Constraint:** Time-box each goal. If Goal 1 takes two weeks, that's a signal —
not a failure. Adapt the sequence to what you find.

---

## CRM Platform Reference (Advisory Use)

When advising on RevOps implementation, the customer's CRM platform changes HOW
advice translates to action. Key differences:

| Aspect | Salesforce | HubSpot |
|---|---|---|
| Data model | Account-centric (Account → Contact → Opportunity) | Person-centric (Contact-first, company association) |
| Leads | Separate Lead object; conversion creates Account + Contact + Opp | Lifecycle stages on same Contact record |
| Custom objects | Full RDBMS (lookups, master-detail, junction, roll-ups) | Simpler; fewer relational capabilities |
| Automation | Flows (record-triggered, scheduled, platform events, screen) | Workflows (simpler branching) |
| Forecasting | Collaborative with multi-level rollup, manager overrides, splits | Basic in Enterprise only |
| Territory mgmt | Enterprise Territory Management with hierarchies | Basic assignment rules only |
| Enrichment | No native — requires the platform, Apollo, Clearbit | Native Clearbit (HubSpot-owned) |
| Scoring | Einstein AI (paid) or custom Flow-based | Property-based + predictive (paid) |

### Platform-Specific Gotchas

**HubSpot:**
- Required fields on first deal stage have NO effect during deal creation
- Can't natively trigger on "time in current deal stage"
- Lifecycle stage, deal stage, and lead status serve different functions — don't overload one
- Use consistent property naming prefixes by function

**Salesforce:**
- Consolidate Flows: minimise per-object to prevent execution order conflicts
- Feature flags via Custom Metadata Types (enable/disable without redeployment)
- Flow-first; Apex only for >10K records, complex error handling, sub-second integrations
- Process Builders deprecated Dec 2025 — migrate to Flow
- Common anti-pattern: >500 fields on Account/Opportunity — audit and deprecate quarterly

### When to Ask "Which CRM?"

Always ask when the user's question involves:
- Pipeline stage design or forecasting setup
- Lead scoring or routing implementation
- Health scoring or automation architecture
- Data governance or field management
- Integration patterns or enrichment workflows

---

## Tech Stack Evaluation Framework

When assessing a revenue tech stack:

1. **Map current state:** Every tool, who uses it, what it connects to, what data it holds,
   what it costs, who owns the contract. Most companies can't produce this list — which is
   itself a finding.

2. **Measure adoption:** Pull actual usage data, not licence counts. A tool with 30% adoption
   is 70% waste.

3. **Check integration health:** Is data flowing between systems? Real-time or batch? What
   happens when sync breaks? Who gets alerted?

4. **Identify overlaps and gaps:** Multiple tools doing the same job = fragmented data. No
   tool covering a critical function = manual workarounds.

5. **Capability-First Principle:** Think in capabilities, not tool categories. "We need
   automated prospect engagement" not "we need Outreach." The cheapest, fastest tool to
   implement is often the one you already own.


