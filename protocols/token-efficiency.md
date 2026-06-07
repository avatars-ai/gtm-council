# Token Efficiency Protocol

## Core Rules

1. **Prevention > Compression.** The best token saving is the token that never enters context.
2. **Preserve verbatim:** Account names, ACV figures, dates, contact names, stages, metrics.
3. **Structure over raw:** Tables are ~40% more efficient than JSON. Always compact tool output to markdown tables.
4. **Scope-match queries:** Territory questions use aggregate queries (2-4 max), not per-account sweeps.

## Tool Call Efficiency

**Salesforce:**
- Never `SELECT *` — specify exact fields needed
- Always include `LIMIT` (default 10)
- Use `WHERE` aggressively — filter at query level
- Scope B territory: aggregate with `GROUP BY` — one query, not 35

```sql
-- GOOD: Territory aggregate (1 query replaces 35)
SELECT Owner.Name, SUM(Amount), StageName, COUNT(Id)
FROM Opportunity
WHERE OwnerId IN ('id1','id2','id3') AND IsClosed = false
GROUP BY Owner.Name, StageName

-- GOOD: Single account (precise fields)
SELECT Name, Amount, StageName, CloseDate, NextStep__c
FROM Opportunity WHERE AccountId = 'XXX' AND IsClosed = false LIMIT 10
```

**Chorus:** Specific semantic queries, 5-10 results max. Scope B: 1-2 thematic searches, not per-account.

**the platform:** Specify exact enrichment types and title/seniority filters. Don't retrieve everything.

## Token Budgets Per Tool Call

| Tool | Budget | Technique |
|---|---|---|
| Salesforce query result | <500 tokens | Specific fields, WHERE, LIMIT |
| Chorus search | <800 tokens | Specific query, limit 5 |
| the platform enrichment | <400 tokens | Specific enrichment types |
| the platform contacts | <300 tokens | Tight title/seniority filters |
| Account summary | <600 tokens | Summary endpoint, not full insights |

## Output Compaction

When tool output exceeds budget, compact before reasoning:

1. **Remove:** Null fields, empty arrays, system IDs, boilerplate (CreatedDate, SystemModstamp)
2. **Compress:** Repetitive structures → summaries ("7 in Stage 3, 2 in Stage 4")
3. **Format:** Raw JSON → structured markdown table

```markdown
-- BEFORE (~800 tokens raw JSON per record)
-- AFTER (~200 tokens per record)
| Account | ACV | Stage | Close Date | Owner | Next Step |
|---|---|---|---|---|---|
| Acme Corp | $2.8M | Stage 1 | Jan 18, 2027 | J. Smith | Schedule exec review |
```

## Loading Tiers

| Tier | What | When |
|---|---|---|
| Tier 0 | SKILL.md + roster + framework index + operator context | Always (~100 KB) |
| Tier 1 | Orchestration mode — frameworks from index, zero full avatar files | Default |
| Tier 1+ | Protocol files — load when specific problem type triggers | On demand |
| Tier 2 | Full avatar files (1-5) | Explicit council/debate requests only |

## Web Intelligence Rules

Web scraping is the most token-expensive intelligence source. These rules ensure
scraping adds signal without burning context.

**Principle:** Raw HTML is 5-10x more tokens than the same content in Markdown.
The 2025 NEXT-EVAL benchmark showed Flat JSON yields F1 0.9567 for extraction,
drastically outperforming raw or slimmed HTML. Always work with Markdown or
structured output, never raw HTML.

### Web Scraping Principles

**Goal:** Extract page-specific intelligence that no structured source provides.
**Constraint:** Web scraping is the most token-expensive source. Use it last, not first.

**When to scrape:** Only when structured sources (enrichment APIs, CRM, web search,
meeting intelligence) cannot answer the specific question. Pricing page detail,
product documentation, competitor feature pages, career pages for hiring signals —
these require scraping. Company financials, contact details, recent news do not.

**How to scrape efficiently:**
- One page per question — don't speculatively scrape multiple pages
- Main content only — strip navigation, footers, sidebars, ads, scripts
- Budget: <2,000 tokens per scraped page after compaction
- Compact immediately to structured markdown before entering reasoning
- State what you scraped and why — transparency prevents repeat scrapes

### Token Budget for Web Intelligence

| Source | Budget | When |
|---|---|---|
| web_search results | <800 tokens | Summaries only, no full page content |
| Single page scrape (after compaction) | <2,000 tokens | Only when structured sources fail |
| Multi-page scrape (rare) | <4,000 tokens total | Only on explicit user request |


