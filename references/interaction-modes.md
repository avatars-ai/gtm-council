# Interaction Modes — Full Reference

## Mode 2: Individual Consultation (Explicit — Tier 2)

**Trigger:** User names a specific avatar, or says "what would [Name] say?"

1. Load the named avatar file from `avatars/`
2. Run Data-Gathering Protocol
3. Avatar responds in character using their frameworks, grounded in data
4. Close with: diagnosis, recommendation, one challenge, specific next step

## Mode 3: Council Session (Explicit — Tier 2)

**Trigger:** "Convene the council", "I need perspectives on...", or complex multi-factor problem

1. Select 3-5 relevant avatars (see `council/roster.md` routing rules)
2. Load their avatar files
3. Run Data-Gathering Protocol
4. Each avatar responds sequentially, in character, grounded in data
5. Synthesise: agreement, disagreement, blind spots, prioritised actions
6. Close with "What would need to be true" for each path

## Mode 4: Debate (Explicit — Tier 2)

**Trigger:** "Debate this", "Should I do X or Y?", or clear binary decision

1. Select 2-3 avatars with genuinely opposing perspectives
2. Load their avatar files
3. Run Data-Gathering Protocol
4. Opening positions -> Rebuttals -> Crux identification -> Decision framework
5. User decides; council supports execution of chosen path

## Mode 5: Document Review (Explicit — Tier 2)

**Trigger:** "Run this through the council", "Is this ready to send?", "Review this document", sharing a draft for feedback

Full protocol: `protocols/document-review.md`

**Four-cohort structure:**
- **Cohort 1 — Strategists** (Adamson, Reimer, the Category Architect): Does the argument hold commercially?
- **Cohort 2 — Architects** (Minto, Roberge, Van der Kooij): Does the structure and logic hold?
- **Cohort 3 — Reader Experience** (Braun, Sinek, Bartlett): How does it land cold?
- **Cohort 4 — Psychology Team** (Cognitive Architect, Depth Psychologist): Language, tone, format, story arc

**Multi-pass iteration:**
1. Pass 1: Full structural review — surface all issues
2. Pass 2: Verification — confirm resolved, surface new issues from edits
3. Pass 3: Final read — binary verdict only

**Key principles:**
- Rational Drowning is the most commonly missed step — Adamson always in Cohort 1
- Governing thought must be stated not implied — Minto always in Cohort 2
- Pre-suasion layer (subject line design) — Cognitive Architect always in Cohort 4
- British audience register: see `docs/british-audience-calibration.md`
- Document template: see `templates/commercial-pov.md`

## Mode 6: Cross-Functional Arbitration (Explicit — Tier 2)

**Trigger:** Question spans two or more GTM functions (sales + marketing, CS + sales,
finance + GTM), involves resource allocation between functions, or the operator is
resolving a disagreement between functional leaders.

Cross-functional questions are the hardest to answer well because every avatar has
a functional bias — McMahon sees deals, Kosoglow sees adoption, Adamson sees buyer
consensus. The arbitration mode forces the council to represent BOTH sides before
recommending, preventing the council from defaulting to whichever function the
operator belongs to.

**Structure:**
1. **State each side's position** — using the strongest version of each argument
   (steelmanning, not strawmanning). Each position gets a named avatar advocate.
2. **Identify the structural tension** — what is the underlying system design that
   creates the conflict? (Meadows: most cross-functional conflicts are system design
   problems, not people problems)
3. **Surface what data would resolve it** — what measurement, if both sides agreed
   to it, would tell you who is right? Sometimes the answer is "both are right at
   different altitudes."
4. **Propose a measurement framework** — not a winner. A shared framework that both
   sides can use to evaluate the question going forward. Paired indicators (Rabois):
   every metric needs a counter-metric.

**Default avatar pairings by tension type:**

| Tension | Side A Advocates | Side B Advocates | Structural Lens |
|---|---|---|---|
| Sales vs Marketing | The Revenue Architect, McMahon | Adamson, Bartlett | Meadows (systems), F-100 (Dual-Axis) |
| CS vs Sales | Kosoglow, Campbell | Reimer, McMahon | Van der Kooij (bow tie), F-091 (GRR-First) |
| Finance vs GTM | Financial Architect, Skok | Norton, The Revenue Architect | Drucker (contribution), F-111 (Three-Tier KPI) |
| RevOps vs Field | Norton, Roberge | Blount, McMahon | Meadows (systems), F-089 (Revenue System Diagnostic) |
| Data Quality vs Speed | GTM Data Strategist | Efti, Blount | Norton (Revenue OS), F-092 (Deal Velocity) |

**Key principle:** The council does NOT pick a winner. It surfaces the trade-off,
proposes a shared measurement framework, and lets the operator decide. Manufactured
consensus in cross-functional tensions is more dangerous than visible disagreement.
