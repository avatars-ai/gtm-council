# Design Principles

## Why This Exists

Revenue leaders make hundreds of decisions per week — deal strategy, team coaching, pipeline management, competitive positioning, pricing, hiring, territory design. The best leaders have a diverse mental model library. The rest rely on a few patterns and hope they fit.

The GTM Council externalises the mental model library of 25 world-class GTM operators into an AI-native format that can be invoked, combined, and debated on demand.

## Architectural Decisions

### 1. Distinct Avatars Over Blended Advice

**Decision:** Each avatar maintains its own voice, frameworks, and thinking patterns. The system never blends them into a single "best practice" response.

**Why:** The value is in the diversity of perspectives, not in consensus. A recommendation that Jeb Blount and Josh Braun both agree on is more trustworthy than either alone. A recommendation where they disagree is more useful than a smoothed-over middle ground — it forces the operator to think.

**Implication:** Avatar files must be written with enough specificity that removing the name, an expert could identify who's speaking.

### 2. Operator Context Is Non-Negotiable

**Decision:** Every avatar recommendation is filtered through the operator's actual context — their frameworks, team structure, decision-making style, and current priorities.

**Why:** Generic advice is worse than no advice because it creates false confidence. "Build a champion" is useless without knowing the operator's specific account dynamics. "Increase prospecting activity" is useless without knowing the team's current capacity and data quality.

**Implication:** The `operator/` directory exists as a constraint on every avatar. Avatars adapt their recommendations to the operator's model, not the other way around.

### 3. Self-Optimisation Through Structured Learning

**Decision:** The system captures structured data from every engagement and uses it to improve routing, calibrate avatars, and evolve the operator profile over time.

**Why:** A skill that performs identically on day 1 and day 100 is a static tool. A skill that performs better on day 100 because it learned from days 1-99 is a compound asset.

**Design influences:**
- **DSPy (Stanford, 21K+ stars):** Optimise against metrics, not vibes. Define what "good output" means, measure it, and compile improvements.
- **Anthropic Skill Creator:** Evaluate → Improve → Retest loops. Grade the grades themselves — surface compliance ≠ genuine quality.
- **Reflexion (Shinn et al.):** After execution, write structured self-reflection that becomes context for the next attempt. Learning is text, not weight updates.
- **Three-Data-Point Rule:** One instance = event. Three = pattern. Never change the system based on a single engagement.

### 4. Minimum Effective Dosage (Norton)

**Decision:** The system has just enough structure to produce quality outputs. Not more.

**Why:** Over-engineered AI systems spend more time configuring themselves than producing value. The learning directory starts empty. It populates through use. No pre-loaded assumptions.

**Implication:** If a file, field, or protocol doesn't demonstrably improve output quality, it doesn't belong.

### 5. Evidence-First, Confidence-Rated

**Decision:** Every recommendation includes a confidence level and cites its evidence. Unknowns are stated, not hidden.

**Why:** The most dangerous output is one that sounds authoritative but is based on incomplete or inferred data. The operator must know what's confirmed (multiple sources), what's single-source, and what's inferred — so they can weight their decisions accordingly.

## What This Is Not

- **Not a replacement for human judgement.** The council provides structured thinking and diverse perspectives. The operator decides.
- **Not a CRM or pipeline tool.** The council consumes data from tools. It doesn't manage pipeline, update records, or automate workflows.
- **Not a training programme.** The operator frameworks in files 02-08 are reference material, not courses. They assume the reader is an experienced professional who benefits from structured reminders, not a beginner who needs everything explained.
- **Not a static system.** If the council isn't improving with use, the self-optimisation protocol isn't being followed.

## File Size and Complexity Budgets

| Component | Target | Rationale |
|---|---|---|
| SKILL.md | <500 lines | Must fit in context alongside avatar + operator files |
| Avatar file | 6,000-25,000 bytes | Enough for depth without overwhelming context window |
| Operator file | 3,000-8,000 bytes | Reference-grade, not textbook-grade |
| Protocol file | 2,000-15,000 bytes | Varies by domain complexity |
| Template file | 1,500-3,500 bytes | Structural guidance, not content |
| Learning file | Grows over time | No ceiling; files are read selectively, not in full |


