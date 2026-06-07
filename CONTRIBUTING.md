# Contributing to GTM OS

## Adding a New Avatar

### Before You Start

1. Read `docs/avatar-quality-rubric.md` — every avatar must score 80+ on the 8-dimension rubric
2. Read `avatars/AVATAR-TEMPLATE.md` — follow the template exactly
3. Research the person thoroughly — minimum 3 independent published sources (books, interviews, verified profiles)

### Avatar Quality Bar

The bar is high. Generic personas that could be anyone are rejected. Every avatar must have:

- **Verified biography** — Real career arc with dates, companies, roles. Not "a thought leader in sales."
- **Sourced frameworks** — Every framework must be traceable to the person's actual published work. No invented frameworks attributed to real people.
- **Authentic voice** — The avatar should sound like the real person, not like a generic AI advisor wearing their name.
- **Practical application** — Frameworks must be actionable in a real deal, real account, or real team scenario. Theory without execution is rejected.
- **Council integration** — Debate pairings, routing rules, and operator context connections. The avatar must fit the system.

### Step-by-Step Process

1. **Research** — Gather minimum 3 independent sources. Books, podcast transcripts, conference talks, published articles. Not Wikipedia summaries.
2. **Draft** — Copy `avatars/AVATAR-TEMPLATE.md` and fill in every section. Don't skip sections.
3. **Verify** — Every biographical claim must be verifiable. Every framework must have a source. Flag anything you're uncertain about.
4. **Score** — Self-score against the rubric in `docs/avatar-quality-rubric.md`. If any dimension scores below 6/10, strengthen it before submitting.
5. **Integrate** — Add the avatar to `council/roster.md` with domain coverage, debate pairings, and routing rules.
6. **Test** — Run at least 3 test consultations with the avatar. Does it produce advice that's distinctly THEIRS, not generic?

### What Gets Rejected

- Avatars with unverified biographical claims
- Avatars whose frameworks are generic and could be attributed to anyone
- Avatars that duplicate an existing council member's domain without adding distinct value
- Avatars with fewer than 4 distinct, actionable frameworks
- Avatars missing debate pairings or operator context connections

---

## Improving an Existing Avatar

### When to Improve

- The avatar scores below 80 on the quality rubric
- A Pattern Review (from self-optimisation) flags low contribution quality or routing mismatches
- New published material from the real person adds significant frameworks

### Process

1. Read the current avatar file
2. Identify specific gaps (use the rubric dimensions)
3. Research to fill gaps — same 3-source minimum applies
4. Update the file — preserve what works, enrich what's thin
5. Log the change in `learning/avatar-enrichment-log.md`

---

## Extending the Operator Framework

The operator files (02-08) contain universal frameworks. To add a new framework:

1. **Verify the source** — Is this framework from a recognised, published expert?
2. **Test for universality** — Does it apply to any revenue leader, not just one specific context?
3. **Write for execution** — Frameworks must be actionable. "Think strategically" is not a framework. "Before any decision, ask: is this true, does it matter, is it actionable" IS a framework.
4. **Place correctly** — Each operator file has a clear domain. Don't put negotiation frameworks in the coaching file.

---

## Extending the Self-Optimisation Protocol

The learning system is designed to improve itself. To extend it:

1. **New capture fields** — If engagement records consistently need a field that doesn't exist, add it to the schema in `protocols/self-optimisation.md`
2. **New evaluation metrics** — If Pattern Reviews should measure something they currently don't, add the metric with clear measurement criteria
3. **New integration mechanisms** — If learning should produce a new type of improvement (beyond routing, calibration, and profile), document the mechanism

### Quality Gate for Learning Changes
Any change to the self-optimisation protocol must pass:
- **Would this improvement also apply to a clearly wrong output?** If yes, too vague.
- **Does this address a real friction point from engagement records?** If no, theoretical.
- **Can this be verified in the next engagement?** If no, not actionable.


