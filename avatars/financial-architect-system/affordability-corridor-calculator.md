# Affordability Corridor Calculator — Financial Architect


## Purpose
Structured framework for calculating the price corridor on any deal above $100K ACV. Determines the floor (minimum vendor economics), the ceiling (maximum customer can bear), and the defensible zone between them. Prevents underpricing (minivation) and overpricing (trust destruction).

## When to Use
- After completing the Filing Analysis Checklist (Layer 3 cash story required for ceiling)
- Before any LOI, proposal, or commercial structure design
- When resizing a deal (expansion or downsell)
- When a customer pushes back on price — to determine whether the pushback is legitimate or reflexive

---

## Part 1: The Floor (Cost to Serve)

*Minimum price that sustains vendor economics. Below this, the deal destroys value.*

### Direct Costs

| Cost Category | Description | Estimate | Notes |
|---|---|---|---|
| Platform / credit costs | Infrastructure, compute, data credits consumed by this customer | | Scale with usage, not seats |
| Licensing costs | Third-party licenses required to serve this customer | | Pass-through costs |

### Deployment Costs

| Cost Category | Description | Estimate | Notes |
|---|---|---|---|
| Implementation / FDE | Deployment resources, location-dependent (India vs UK/US changes this by 3-5x) | | Amortise over contract length if multi-year |
| Onboarding | Training, enablement, documentation | | First-year only unless ongoing |
| Migration | Data migration, integration build, legacy system decommissioning support | | One-time, but real |

### Opportunity Costs

| Cost Category | Description | Estimate | Notes |
|---|---|---|---|
| Foregone revenue | Products given free to displace competitor or land the deal | | Real cost. Include in floor |
| Sales cost | Seller time, SC time, executive time invested in this deal | | Estimate as % of OTE allocated |
| CS cost | Ongoing customer success cost for contract duration | | Annual cost x contract years |

### Margin Requirement

| Input | Value |
|---|---|
| **Total cost to serve (sum above)** | |
| **Minimum acceptable margin** | Typically 65-80% for SaaS. Below 65% = services business economics |
| **Floor price** | Total cost / (1 - target margin %). Example: £270K cost at 75% margin = £270K / 0.25 = £1,080K |

**Floor test:** *"At this price, can we serve this customer profitably for the full contract term?"*

---

## Part 2: The Ceiling (Customer Economic Value)

*Maximum the customer's economics can support. Above this, trust is destroyed.*

### Revenue Impact

| Value Driver | Customer's Current State | With Our Solution | Delta | Source |
|---|---|---|---|---|
| ARPC / deal size expansion | | | | Filing Layer 2 |
| Win rate improvement | | | | Customer data or benchmark |
| Sales cycle compression | | | | Benchmark |
| Net new revenue from untapped segments | | | | TAM analysis |

### Cost Avoidance

| Value Driver | Current Cost | With Our Solution | Saving | Source |
|---|---|---|---|---|
| Tool consolidation | | | | Current vendor stack |
| Headcount efficiency | | | | Headcount vs productivity |
| Data / vendor spend reduction | | | | Current data vendors |
| Reduced churn (retention improvement) | | | | Filing Layer 2 NRR/GRR |

### Risk Reduction

| Risk | Probability | Impact | Mitigation Value | Source |
|---|---|---|---|---|
| Compliance / regulatory | | | | Industry-specific |
| Data quality / decay | | | | CRM audit if available |
| Competitive displacement | | | | Market analysis |

### Strategic Value

| Strategic Lever | Description | Quantifiable? | Estimate |
|---|---|---|---|
| Upmarket enablement | Does our solution enable a strategic shift? | | |
| Speed to market | Time-to-revenue compression | | |
| Category creation | First-mover advantage in new segment | | |

### Ceiling Calculation

| Input | Value |
|---|---|
| **Total revenue impact (annual)** | |
| **Total cost avoidance (annual)** | |
| **Total risk reduction value** | |
| **Total economic value** | Sum of above |
| **Ceiling price** | 20-35% of total economic value |
| **Express as:** | "Roughly X% of your revenue" or "Less than Y% of the value we identified" |

**Ceiling test:** *"Does our price represent less than 25% of the economic value we deliver? Can the customer's cash position absorb this commitment?"*

### Cash Affordability Cross-Check (from Filing Analysis Layer 3)

| Input | Value | Source |
|---|---|---|
| Deployable cash | | Filing Checklist 3.8 |
| Annual operating cash flow | | Filing Checklist 3.1 |
| Deal as % of deployable cash | | Should be <5% |
| Deal as % of annual OCF | | Should be <2% |
| **Cash-constrained ceiling** | Lower of the two % thresholds | |

**If the economic value ceiling exceeds the cash affordability ceiling, the customer cannot afford the deal at full value regardless of ROI.** Phase the deal, gate the payments, or reduce scope. Never force a deal above the cash ceiling — it creates buyer's remorse and churn risk.

---

## Part 3: The Corridor

| Element | Value |
|---|---|
| **Floor (cost to serve)** | |
| **Ceiling (economic value, capped by cash affordability)** | |
| **Corridor width** | Ceiling - Floor |
| **Recommended position** | 20-35% of economic value ceiling |
| **Corridor health** | Healthy (>3x floor), Tight (2-3x floor), Unviable (<2x floor) |

### Corridor Positioning Rules

| Position | When | Risk |
|---|---|---|
| **Near floor (cost + thin margin)** | Land-and-expand. First deal. Proving value. Lighthouse account | Anchors future pricing low. Hard to climb |
| **Mid corridor (20-25% of value)** | Standard positioning. Defensible. Customer retains clear ROI | None if value is properly surfaced |
| **Upper corridor (30-35% of value)** | Strategic deal. FDE included. Multi-product. Customer has strong cash | Customer may seek alternatives. Must defend with proof |
| **Above ceiling** | Never | Trust destruction. Deal may close but churns at renewal |
| **Below floor** | Never | Vendor loses money. Creates unsustainable precedent |

### Expression Rules

| Do | Don't |
|---|---|
| Express as % of value: "roughly 1% of your revenue" | Quote absolute number first: "it's £1M" |
| Express as range: "phased, gated, shared risk" | Quote single point: "the price is X" |
| Let the customer pull the number: seed, don't propose | Push the number: "here's what it costs" |
| Anchor to their own numbers: "based on the £10.9M opportunity" | Anchor to your cost: "based on what it costs us to serve you" |

---

## Part 4: Corridor Health Diagnostic

| Signal | Healthy | Warning | Action |
|---|---|---|---|
| Corridor width | >3x floor | <2x floor | Reduce scope or deployment cost |
| Cash ceiling vs economic ceiling | Cash > economic | Cash < economic | Phase the deal |
| Customer's Rule of 40 | >40 | <25 | Customer under pressure — timing and packaging critical |
| Customer NRR | >120% | <100% | Customer eroding — your deal must demonstrate retention impact |
| Floor margin | >75% | <65% | Too much services weight. Rebalance or price services separately |

---

## Output

After completing the calculator, produce:

1. **Floor** — Total cost to serve, minimum viable price, margin at floor
2. **Ceiling** — Economic value ceiling, cash affordability ceiling, binding constraint
3. **Recommended price** — Position within corridor, expressed as % of value
4. **Expression** — How to verbalise the price (never lead with the number)
5. **Phase recommendation** — If cash ceiling < economic ceiling: phased structure with gates
6. **Risk** — What breaks if the customer's situation changes (downturn, acquisition, management change)
