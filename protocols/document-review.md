# Protocol: Commercial Document Review



## Purpose

A structured council-based review framework for customer-facing analytical documents: POVs, perspective papers, account briefs, executive memos, and any written artefact that must survive cold reading by a senior executive.

Distinct from deal strategy (which governs live commercial conversations) — this protocol governs *written intelligence delivered ahead of or instead of a conversation*.

---

## When to Invoke

Invoke this protocol when the operator asks for:
- Review of a draft document
- "Run this through the council"
- "Is this ready to send?"
- Any document destined for a C-level reader the operator has not yet met

---

## The Four-Cohort Structure

All document reviews use four cohorts. Each cohort has a defined lens. Do not conflate them.

### Cohort 1: The Strategists
**Lens:** Does the argument hold commercially? Does it teach something the reader couldn't conclude themselves?
**Default avatars:** Brent Adamson, Jamal Reimer, Henry Category Architect
**Key questions:**
- Does the commercial teaching choreography hold? (Warmer → Reframe → Rational Drowning → Emotional Impact → New Way → Solution)
- Is Rational Drowning complete — does the reader *feel* the cost of the problem, not just observe it?
- Is the governing thought taught, or merely stated?
- Who is the Mobiliser and what does this document arm them with?

### Cohort 2: The Architects
**Lens:** Does the structure hold? Do the numbers survive scrutiny?
**Default avatars:** Barbara Minto, Mark Roberge, Jacco van der Kooij
**Key questions:**
- Is the governing thought explicitly stated? (Minto: if the reader must reconstruct it, it isn't stated)
- Does SCR hold? (Situation → Complication → Resolution)
- Are claims MECE? Are financial figures internally consistent and traceable to stated inputs?
- Does every specific number have a visible source or stated assumption?

### Cohort 3: The Reader Experience
**Lens:** How does this land for the target reader reading cold?
**Default avatars:** Josh Braun, Simon Sinek, Steven Bartlett
**Key questions:**
- Does it read as consulting or vendor pitch?
- Does the close invite the reader's agency, or deliver their verdict for them?
- Is the atomic claim findable within the first 30 seconds?
- Does the document leave space for the reader to complete the thesis?

### Cohort 4: The Psychology Team
**Lens:** Does the language, tone, format, and story arc work on the reader's unconscious decision-making?
**Default avatars:** The Cognitive Architect, The Depth Psychologist
**Key questions:**
- Is the document designed for System 1 (scannable) as well as System 2 (logical)?
- What is the pre-suasion layer — what mental state does the delivery mechanism (email subject, covering note) create before the document is opened?
- What defence mechanisms might the document trigger, and in whom?
- Does the close respect the reader's authority, or does it perform deference?

---

## Multi-Pass Protocol

### Pass 1: Full structural review
All four cohorts. All questions. Surface every issue regardless of size.
Expected output: A complete list of issues by cohort, categorised as Critical / Should Fix / Nice to Have.

### Pass 2: Verification pass
Only address items flagged in Pass 1. Confirm resolved items. Flag anything new that emerged from edits.
Expected output: Shorter. Focused. Confirms what's clean, surfaces only new issues.

### Pass 3: Final read
Read the full document as a cold reader. Confirm no new issues. Declare ready or identify the single remaining blocker.
Expected output: One paragraph per cohort maximum. Binary verdict: ready or not ready.

**Pass-length rule:** If Pass 3 is as long as Pass 1, the first passes were not thorough enough.

---

## Critical Principles

**The Rational Drowning rule**
The most commonly missed step in commercial documents. The document must make the reader *feel* the cost of the problem before presenting the solution. Showing the problem and then immediately showing the data is insufficient — there must be a bridge paragraph that lands the consequence specifically. Ask: *"If the reader closed this document right now, would they feel the gap in their stomach?"*

**The Governing Thought rule (Minto)**
The governing thought must be explicitly stated in the document, not implied by the accumulation of evidence. A CRO under time pressure will not reconstruct a governing thought. If the reader must assemble it themselves, it isn't there.

**The Own Evidence rule**
The highest-value commercial teaching moment is always when the reader's own data is used to reframe their situation. No competitor can replicate the observation. No vendor bias can be alleged. "Their own words and data used against them" should be prioritised over any third-party statistic.

**The Vendor Visibility rule**
In a document designed to establish analytical credibility, the vendor (the platform) should be invisible for at least the first two sections. The argument should be buildable without a vendor at all. The vendor appears as the logical answer to an architecture question the reader has already accepted — not as the reason for writing.

**The Close rule**
Close on a specific action. A date. A meeting. A question. Never close on a rhetorical flourish or an invitation for the reader's "thoughts." Specificity signals confidence. Ambiguity signals hope.

---

## Audience Calibration

### British Professional Register
Apply whenever the primary reader is British or the document will be read in a British corporate context.

- Understatement is preferred over inspiration
- The argument should close the document — not a closing line
- Specific dates beat rhetorical invitations
- Let data be the dramatic device — don't dress language up to do work the evidence should do
- "View" or "perspective" not "POV"
- Em dashes in closing lines feel American — use sparingly
- See `docs/british-audience-calibration.md` for full checklist

---

## Pre-Suasion Layer

The document's effectiveness depends partly on the mental state of the reader at the moment of opening — not just the document's content. Design the delivery mechanism alongside the document.

**Subject line design principles:**
- The subject line primes the interpretive frame before a word of the document is read
- Avoid priming for "vendor proposal" — prime for "independent analysis"
- Three registers to choose from:
  - **Analyst frame:** *"What [company]'s earnings data says about the [opportunity]"* — primes for independent research
  - **Strategic frame:** *"[Data point] ahead of [upcoming meeting]"* — primes for relevance
  - **Low-pressure frame (Braun-style):** *"A data point I thought worth sharing"* — primes for curiosity, minimal resistance
- The analyst frame is default for cold C-level readers
- The strategic frame works when there is already a meeting to anchor to

---

## Humanizer Pass

Documents produced through iterative AI-assisted editing accumulate an "assembled by committee" register — multiple voices, inconsistent rhythms, over-precise language in places that should breathe.

**Recommended workflow:**

```
Draft → Council Pass 1 → Iterative editing → Humanizer pass → Final council pass → Send
```

A humanizer pass before the final council review produces materially better prose: more natural, better rhythm, reads like one person wrote it.

**Humanizer tools:** Use whatever humanizer tool is available on your platform, or
apply the three-step process manually. The goal is consistent: output that reads like
one thoughtful human wrote it.

Three-step process:
1. Draft rewrite — remove AI patterns
2. Explicit audit — *"What makes this still obviously AI-generated?"* Answer in bullets
3. Final rewrite — address remaining tells

**Patterns most relevant to commercial documents:**
- Em dashes — hard rule: none in final output (most reliable AI tell)
- AI vocabulary: *pivotal, underscores, showcase, vibrant, landscape, testament, highlight, foster, crucial, enhance, delve, tapestry*
- Significance inflation: *marks a pivotal moment, sets the stage for, enduring testament*
- Theatrical closings and generic positive conclusions
- Promotional language: *nestled, breathtaking, groundbreaking, boasts, renowned*
- Inline-header bold lists
- Rule of three overuse
- Title case headings

**Register instruction for commercial documents:** Instruct the humanizer to use neutral/professional register, not personal essay mode. The document should read like a thoughtful analyst wrote it, not like a blogger.

---

*Protocol established: v0.1.0*

