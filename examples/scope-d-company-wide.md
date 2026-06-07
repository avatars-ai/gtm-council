# Example: Scope D Company-Wide Analysis
*Source: Eval #42 — 5/5 assertions passed, live data*

## What Makes This a Good Output

- Aggregate GROUP BY query (owner x stage x type) returned 161 rows across all 8 AMs
  in a single query — no pagination, no truncation
- Pattern-level analysis, not account-level detail:
  1. Renewal concentration — one AM holding disproportionate losses (53% of all team losses)
  2. Upsell pipeline inflation — $5.92M open at 32% historical win rate = ~$1.9M expected
  3. Departing AM execution risk — departing reps own $2.21M open pipeline
- Conclusion-first format — "Team GARR proxy 41%" in the first line
- No account-level detail in primary output — deep-dive only on request
- CEO altitude maintained throughout (pattern → implication → action, not data → data → data)

## Key Design Choice

The prompt was "how's the business?" — deliberately vague. The skill correctly scoped
to Scope D (company-wide), chose aggregate over per-account, and produced pattern-level
insights. It did NOT list every open opportunity. The restraint is the quality signal.

## Anti-Pattern This Avoids

Bad territory analysis lists every open deal in a table, sorts by ACV, and says
"here's your pipeline." That's a Salesforce report, not an advisory output. Scope D
should surface 3-5 patterns the operator didn't know about, not reorganise data they
already have.


