# Template: Commercial POV / Perspective Document



## Purpose

A reusable structure for customer-facing analytical documents: perspective papers, upmarket opportunity briefs, GTM architecture recommendations, and any written artefact that must establish analytical credibility before making a commercial argument.

Distinct from a proposal (which presents a solution) or a case study (which proves past value). A POV teaches the reader something about their own situation they couldn't have concluded without the document.

---

## Document Architecture

### Section 1: The Market Frame
**Purpose:** Establish the context at a level the reader already believes. Independent of vendor.
**Register:** Analyst. No vendor references.
**Length:** 1–2 paragraphs.
**Test:** Could this section appear in a Gartner report without attribution?

### Section 2: The Evidence Against Them
**Purpose:** Use the company's own data to reframe their situation.
**Register:** Still independent. Vendor invisible.
**Key move:** The "evidence base is pointing in the wrong direction" structure — name the specific observable gap, using data the company themselves produced.
**The Own Evidence principle:** A case study analysis, a pricing page review, a customer segmentation finding from their own public data — these cannot be dismissed as vendor bias.

### Section 3: Rational Drowning
**Purpose:** Make the reader feel the cost of the gap, not just observe it.
**This is the most commonly missed section.** Most documents show the problem and immediately jump to the solution. There must be a bridge that lands the consequence specifically.
**Test:** If the reader closed the document here, would they feel the gap in their stomach?

### Section 4: The Addressable Opportunity
**Purpose:** Show that the solution exists in meaningful volume.
**Include:** TAM data, vertical breakdown, company counts.
**Register:** Data-led. Let the numbers carry the argument.

### Section 5: The Governing Thought
**Purpose:** State explicitly what connecting the evidence means.
**Minto rule:** This must be stated, not implied. One to three sentences. The reader should be able to repeat it without having read the rest of the document.
**Placement:** Immediately before the financial model. Transitions from "what exists" to "what it's worth."

### Section 6: The Financial Model
**Purpose:** Quantify the opportunity in the company's own commercial terms.
**Structure:** Three levers minimum. Each lever independently traceable to a stated input.
**Currency rule:** Company-reported figures in local currency. Global market benchmarks in USD.
**Financial claim validation:**
- All time-based claims must state the assumption (*"at X% growth rate..."*)
- All "comparable customer" benchmarks need one line of evidential grounding
- When a specific claim cannot be defended across the full range of plausible assumptions, replace with directional language (*"more than twice the organic growth rate"* > *"shortens the path by 6 months"*)
- Verify internal consistency: every lever sum should be independently calculable

### Section 7: What Connected Looks Like
**Purpose:** Show the activation sequence — what the architecture actually does in practice.
**Register:** Operational. Concrete. Sequence-based.
**Vendor introduction:** This is the appropriate point to introduce the vendor by name. They appear as the logical answer to an architecture question the reader has already accepted — not as the reason for writing.
**Do not:** Name the vendor before this section.

### Section 8: The Competitive Context
**Purpose:** Place the reader in the competitive landscape. Define the uncontested space.
**Structure:** Name the platforms that can't serve the tier from above and below. State why specifically (ARPC, customer profile, pricing model). Let the gap speak for itself.
**Do not:** Frame as urgency or countdown clock. Frame as structural reality.

### Section 9: The Close
**Purpose:** Create a clear, specific next step.
**One rule:** Close on a date. Not a question. Not an invitation for "thoughts." A specific action.
*"We can show you how on [date]."* — this is the correct register.
**Do not:** Close with a rhetorical flourish. Do not perform inspiration. Do not explain what the reader is now "empowered" to do.

---

## Structural Principles

### Vendor Visibility Rule
The vendor should be invisible for at least the first two sections. The analytical credibility of the document depends on this. When your product appears, it appears as the logical tool for a data architecture the reader has already accepted — not as the author of the argument.

### Governing Thought Rule (Minto)
The governing thought must be explicitly stated. If the reader must reconstruct it from the evidence, it is not there. One sentence that a CRO under time pressure can extract and repeat.

### Rational Drowning Rule (Adamson)
The most commonly missed step. The bridge between "here is the problem" and "here is the data" must exist. The reader must feel the consequence before they receive the solution. The specific mechanism of the cost — not just the observation that a cost exists.

### Own Evidence Rule
The highest-value commercial teaching moment uses the reader's own words, data, or actions. A case study analysis, a pricing page observation, a segmentation finding from their own public data. No competitor can replicate it. No vendor bias can be alleged.

### Close Rule
Specific action. A date. Confidence, not performance. The document should feel like it was written by someone who already knows the meeting will happen — not by someone who hopes it might.

---

## Currency Framework

For UK-headquartered companies with global market context:

| Type of figure | Currency |
|---|---|
| Company-reported revenue, ARR, ARPC | Local currency (£ for UK companies) |
| Global market benchmarks, TAM, competitor data | USD ($) |
| Financial model projections derived from company data | Local currency (£) |
| Financial model projections from global benchmarks | USD ($) |

This creates a natural and readable distinction: the company's own P&L is always in their reporting currency; the market opportunity is always in the global benchmark currency.

---

## Production Workflow

### Overview

```
Phase 1: Research (mandatory before any writing)
     → Phase 2: Pre-draft answers (answer all section questions)
     → Phase 3: First draft (follow section architecture — all 9 sections)
     → Phase 4: Self-check (quality gate before council)
     → Phase 5: Council Pass 1 (full four-cohort review)
     → Phase 6: Iterative editing
     → Phase 7: Humanizer pass
     → Phase 8: Final council pass (verification only)
     → Phase 9: Pre-suasion layer (subject line + Mobiliser briefing)
     → Phase 10: Send
```

---

### Phase 1: Research (Mandatory — Complete Before Writing a Single Word)

Run all of the following before beginning the draft. Do not start writing until every item below is answered.

**Company financial data (from earnings report / annual report):**
- Platform ARR (most recent)
- ARPC: monthly and annual
- Customer count (connected customers)
- Revenue per connected customer growth rate (YoY)
- Customer retention rate
- Revenue by geography (EMEA %, US %, other)
- Total revenue growth rate (YoY) — *not the same as ARPC growth rate*
- Path to next ARR milestone (e.g., £100M): gap and organic timeline

**Their own evidence (case studies, proof points, public marketing):**
- Scrape or review the company's full case study library
- Count total case studies
- Categorise by revenue tier of featured company (below $100M / $100M–$500M / above $500M)
- Calculate the percentage skewed toward the wrong tier
- Note: the percentage mismatch between case study evidence and stated ICP is almost always the highest-value insight in the document

**TAM data:**
- Run TAM search using your enrichment tools for the target segment (revenue tier × verticals × geographies)
- Total company count
- Breakdown by vertical and geography
- Confirm these are companies that actually use the relevant channel (email / SMS / WhatsApp / etc.)

**Competitor data (from SEC filings / earnings reports — not secondary sources):**
- For each named competitor: total customers, ARPC, revenue, enterprise cohort threshold and count
- Calculate blended ARPC from revenue ÷ customers
- Note the enterprise threshold figure (e.g., Klaviyo $50K+, Braze $500K+)
- Direct quotes from investor filings where relevant (e.g., "successfully moving upmarket")
- This research verifies the competitive gap claim — do not state a gap without evidencing it

**Currency decision:**
- Confirm company reporting currency (£ for UK companies, € for European, etc.)
- Apply framework: company-reported figures in local currency; global market benchmarks in USD

---

### Phase 2: Pre-Draft Answers

Before writing, answer these questions explicitly. They map directly to the nine document sections.

1. **What is the governing thought?** State it in one sentence. If you cannot, do not proceed.
2. **What is the specific evidence gap?** (e.g., "91% of 98 case studies feature companies below $100M")
3. **What is the Rational Drowning moment?** Specifically: what is the *mechanism* by which the gap costs the company money or opportunity right now? Not "there is a gap" — *what specifically is happening as a result of the gap?*
4. **What are the three financial levers?** For each: input figure, calculation, output figure. Verify all three independently before proceeding.
5. **Is the "comparable customer" benchmark evidenced?** One line of grounding required.
6. **Who is Platform A (can't serve from below) and why?** ARPC, customer profile, specific reason.
7. **Who is Platform B (can't serve from above) and why?** ARPC, pricing floor, specific reason.
8. **What is the specific close?** Date, meeting, or action. Must be specific.

---

### Phase 3: First Draft Standards

The first draft submitted to the council must meet these standards. Do not submit a draft that fails any of these checks.

**Section 1 — Market Frame:** No vendor reference. Could appear in a Gartner report without attribution.

**Section 2 — Evidence Against Them:** Uses the company's own data. Specific percentage or number. Not a general observation.

**Section 3 — Rational Drowning:** The mechanism of the cost is stated specifically. The reader feels the consequence. Ask: *"If they stopped reading here, would they feel the gap in their stomach?"* If no — rewrite.

**Section 4 — Addressable Market:** TAM with breakdown. Numbers sourced from enrichment data pull.

**Section 5 — Governing Thought:** Explicitly stated. One to three sentences. Not implied by the surrounding evidence.

**Section 6 — Financial Model:** Three levers. Every number independently traceable. Internal consistency verified. No specific time claims without stated growth rate assumption.

**Section 7 — Activation Sequence:** Vendor introduced here for the first time. Not before. Concrete and operational.

**Section 8 — Competitive Context:** Two platforms named. Neither can serve the target tier. ARPC evidence for both. No urgency frame — structural reality only.

**Section 9 — Close:** Specific action with a date. No rhetorical flourish.

---

### Phase 4: Self-Check (Quality Gate Before Council)

Before submitting to the council, verify every item:

**Structure:**
- [ ] Governing thought explicitly stated (not implied)
- [ ] Rational Drowning present as a distinct bridge paragraph
- [ ] Vendor invisible in sections 1 and 2
- [ ] Vendor introduced naturally in section 7 as the logical answer to an architecture question

**Numbers:**
- [ ] Every financial figure has a stated source or calculation
- [ ] All three levers sum to the combined figure
- [ ] ARPC growth rate ≠ total ARR growth rate (not conflated)
- [ ] Time-based claims state their growth rate assumption
- [ ] Currency framework applied consistently

**Register (British audience):**
- [ ] No theatrical close
- [ ] No "unlock", "leverage", "transformative", "thrilled", "empowered"
- [ ] Close is a specific date or action, not an invitation
- [ ] Headings carry the argument at scan speed
- [ ] Document ends when the point is made

**Delivery:**
- [ ] Subject line designed (not defaulted to document title)
- [ ] Mobiliser briefing plan identified

---

### Phase 5–8: Council and Iteration

See `protocols/document-review.md` for the full four-cohort council protocol and multi-pass rules.

**Humanizer pass note:** Documents produced through iterative AI-assisted editing accumulate an assembled-by-committee register. A humanizer pass before the final council review produces materially better prose. This is a standard step, not optional.

**Humanizer skill reference:** `blader/humanizer` (v2.7.0) — removes 30 specific AI writing patterns based on Wikipedia's "Signs of AI writing" guide. Three-step process: draft rewrite → explicit audit ("what makes this still obviously AI?") → final rewrite.

Patterns most relevant to commercial documents:
- Em dash overuse (one of the most reliable AI tells — hard rule: no em dashes in final output)
- AI vocabulary words: *pivotal, underscores, showcase, vibrant, landscape, testament, highlight, foster, crucial, enhance, delve, tapestry*
- Significance inflation: *marks a pivotal moment, sets the stage for, represents a shift, enduring testament*
- Promotional language: *nestled, breathtaking, groundbreaking, boasts, renowned*
- Rule of three overuse
- Theatrical closings and generic positive conclusions
- Inline-header bold lists (bold word: body text)
- Title case in headings
- Passive voice and subjectless fragments

For voice calibration: provide a sample of the intended author's writing before humanizing. For commercial documents going to a British executive, the humanizer should apply neutral/professional register (not personal essay mode) — instruct accordingly.

---

### Phase 9: Pre-Suasion and Mobiliser Briefing

**Primer call rule:** A document that arrives after a conversation gets read as a strategic recommendation. A document that arrives cold gets read as a proposal. Always brief the Mobiliser before sending to the Economic Buyer.

**Mobiliser briefing checklist:**
- Walk through the argument verbally (15 minutes) before Mobiliser presents it
- Identify the finding most likely to trigger a defensive response — prepare the Mobiliser to hold it as a market positioning observation, not a performance critique
- Confirm the Mobiliser can present the document as their own strategic framing
- Agree the subject line together

See `protocols/deal-strategy.md` for subject line design principles.

---

## Title and Heading Conventions

**Document title format:**
- *[Company] — A analytical perspective on [the specific opportunity]*
- Not: *[Company] — Point of View* (too generic, primes for vendor document)
- Not: *[Company] — POV* (American jargon, British audiences read it as sales material)

**Section heading style:**
- Declarative statements, not labels
- *"The evidence base is pointing in the wrong direction"* not *"Evidence section"*
- Sentence case, not title case
- Full stops on declarative headings; no full stops on noun-phrase headings
- The heading should carry the argument at System 1 speed — a reader scanning headings only should get the shape of the argument

---

## What Not to Do

- **Do not open with the vendor.** The vendor is invisible until section seven.
- **Do not skip Rational Drowning.** The most common failure mode in commercial documents.
- **Do not close with a rhetorical invitation.** "We'd love to hear your thoughts" is not a close.
- **Do not use theatrical language for a British audience.** See `docs/british-audience-calibration.md`.
- **Do not assert financial claims without traceable assumptions.** Specific numbers that can't be defended are worse than directional language.
- **Do not present a fully formed thesis without leaving space for the reader.** The close should invite completion, not deliver it. The reader should feel they are co-authoring the conclusion.

---

*Template established: June 2026 — Dotdigital POV session*

