# Filing Analysis Checklist — Financial Architect


## Purpose
Structured 4-layer analysis of a customer's financial filings before any deal above $100K ACV. Ensures the Financial Architect processes the filing systematically and surfaces commercial opportunities, affordability signals, and red flags — not just ratios.

## When to Use
- Pre-deal: any opportunity >$100K ACV
- Pre-council: before a council strategy session on a strategic account
- Renewal risk assessment: when churn signals are present
- LOI structuring: before designing commercial terms

## Input Required
- Most recent annual filing (audited preferred over interim)
- Prior year filing for comparison (minimum)
- Company type determines source:
  - **UK AIM/LSE:** Companies House + RNS filings (investegate.co.uk)
  - **US public:** SEC EDGAR (10-K, 10-Q)
  - **EU:** National filing registers (FCA, BaFin, etc.)
  - **Private:** Crunchbase, press releases, funding announcements, LinkedIn headcount proxy

---

## Layer 1: The Headline Story
*What management wants you to see. The press release version.*

| Check | Metric | Extract | Y/N |
|---|---|---|---|
| 1.1 | Revenue (total) | £/$ amount, YoY growth % | |
| 1.2 | Revenue (recurring vs non-recurring) | Split %, ARR if disclosed | |
| 1.3 | Gross margin | %, YoY direction | |
| 1.4 | EBITDA / Adj EBITDA | £/$ amount, margin % | |
| 1.5 | Headline growth narrative | What does management say is driving growth? | |
| 1.6 | Guidance / outlook | Forward-looking statements, range width | |

**Layer 1 question:** *"What story is management telling about this business?"*

---

## Layer 2: The Structural Story
*What the notes reveal. Requires reading beyond the summary.*

| Check | Metric | Extract | Y/N |
|---|---|---|---|
| 2.1 | Organic vs acquired revenue | Split £/$, organic growth % isolated | |
| 2.2 | Revenue by segment/geography | Concentration risk, fastest/slowest segments | |
| 2.3 | Customer count and ARPC | Direction of each. Both growing = healthy. Count up/ARPC down = moving downmarket | |
| 2.4 | Customer concentration | Top 10 customer % of revenue, any single customer >10% | |
| 2.5 | NRR / GRR (if disclosed) | Net and gross retention rates | |
| 2.6 | Headcount and revenue per employee | Efficiency trend. Headcount growing faster than revenue = problem | |
| 2.7 | R&D spend | % of revenue, capitalised vs expensed split | |
| 2.8 | Sales & marketing spend | % of revenue, YoY change, implied CAC if calculable | |

**Layer 2 question:** *"Is this company growing because of its product, or because it's buying growth?"*

**Challenger insight lives here.** The structural story is where narrative-number gaps surface. If organic growth is 3-6% but total growth is 13% — the acquisitions are doing the work, not the core product. That gap IS the commercial opportunity.

---

## Layer 3: The Cash Story
*What the business actually generates. Companies can report profit while burning cash.*

| Check | Metric | Extract | Y/N |
|---|---|---|---|
| 3.1 | Operating cash flow | £/$ amount, vs reported profit | |
| 3.2 | Free cash flow | OCF minus CapEx, FCF margin % | |
| 3.3 | Cash and equivalents | Balance, YoY change | |
| 3.4 | Debt position | Total debt, net debt (debt minus cash), debt/EBITDA ratio | |
| 3.5 | Working capital movement | Debtors, creditors, inventory direction | |
| 3.6 | Acquisition cash outflows | Total spent on acquisitions, earnout liabilities outstanding | |
| 3.7 | Shareholder returns | Dividends paid, buyback programmes, total shareholder outflow | |
| 3.8 | Remaining deployable cash | Cash minus debt service minus earnouts minus committed dividends/buybacks | |

**Layer 3 question:** *"Can this company afford my deal? Not 'can they spend £X' — can they commit £X without distressing their cash position?"*

**Affordability corridor ceiling calculation:**
- Take deployable cash (3.8)
- Take annual operating cash generation (3.1)
- Ceiling = amount that represents <5% of deployable cash OR <2% of annual operating cash flow (whichever is lower)
- This is the MAXIMUM single-vendor commitment, not the deal price

---

## Layer 4: The Unwritten Story
*What's NOT in the filing. What management chose not to emphasise.*

| Check | Signal | Look For | Y/N |
|---|---|---|---|
| 4.1 | Changed accounting treatments | New revenue recognition, reclassified expenses, changed depreciation | |
| 4.2 | Adjusted vs statutory gap | Adj EBITDA >> statutory profit? What's being added back? | |
| 4.3 | One-time items that recur | "Exceptional" charges appearing 2+ years running | |
| 4.4 | Missing disclosures | Segments previously reported now merged. Metrics previously disclosed now absent | |
| 4.5 | Management changes | New CFO, CRO, CEO within 12 months. Board changes | |
| 4.6 | Auditor notes | Qualified opinion, emphasis of matter, going concern language | |
| 4.7 | Subsequent events | Post-balance-sheet events (acquisitions, disposals, restructuring) | |
| 4.8 | Widening guidance ranges | Prior period gave tight range, current period wider = uncertainty increasing | |

**Layer 4 question:** *"What is this company NOT telling me, and what does that silence mean for my deal timing?"*

**Timing windows live here.** Management changes, restructuring, and subsequent events create urgency and decision-making windows that don't exist in normal operating periods.

---

## Red Flag Summary

After completing all four layers, flag any of the following patterns:

| Red Flag | Layers | Implication |
|---|---|---|
| Revenue growing, cash declining | 1 + 3 | Revenue quality problem. Affordability may be lower than headline suggests |
| Adj EBITDA >> statutory profit | 1 + 4 | Aggressive addbacks. Real profitability lower than presented |
| Acquired revenue > organic growth | 1 + 2 | Buying growth, not building it. Core product may underperform. Challenger insight territory |
| Customer count up, ARPC down | 2 | Moving downmarket unintentionally. Opportunity to help them reverse this |
| Admin costs growing > revenue | 2 | Cost control deteriorating. May resist new spend |
| Headcount growing > revenue | 2 | Efficiency declining. Pressure to do more with less |
| R&D capitalisation increasing | 2 + 4 | Flattering reported profit by capitalising development spend |
| Dividends + buybacks > FCF | 3 | Returning more than they generate. Unsustainable without debt or cash drawdown |
| New CFO + changed accounting | 4 | Kitchen-sinking (new CFO writes off predecessor's decisions). Creates budget reset window |
| Earnout liabilities outstanding | 3 + 4 | Future cash committed. Reduces deployable cash for new vendors |

---

## Output Format

After completing the checklist, produce:

1. **One-paragraph story** — "This is a company that [narrative]. Their numbers [confirm/contradict] this because [evidence]"
2. **Affordability assessment** — Floor, ceiling, recommended corridor position
3. **Challenger insight** (if present) — The gap between narrative and numbers, expressed as a question
4. **Timing signals** — Windows of opportunity or constraint from Layer 4
5. **Confidence rating** — High (3 years of data, public filings) / Medium (1-2 years, partial data) / Low (private, inferred from proxies)
