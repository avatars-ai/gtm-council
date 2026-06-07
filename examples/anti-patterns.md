# Anti-Patterns — What Bad Council Output Looks Like

These examples show what the council must NOT produce. Each anti-pattern has been
observed in early eval runs or calibration sessions. Study these to understand the
failure mode, not just the rule.

---

## 1. Consensus-Smoothed Council Session

**The failure:** Five avatars respond to the same problem and all agree. McMahon says
"qualify harder." Voss says "use tactical empathy to qualify harder." Adamson says
"teach them why they need to qualify harder." The synthesis says "the council agrees
you should qualify harder."

**Why it fails:** If five experts agree, the operator didn't need five experts. Council
sessions add value through DISAGREEMENT — different frameworks producing different
recommendations that force the operator to choose. If all avatars converge, either
the wrong avatars were selected or the tension was smoothed in synthesis.

**The fix:** At least one avatar must challenge the direction. If McMahon says qualify,
Braun should ask "or maybe the deal isn't stalled — maybe the buyer is processing
and you're being impatient." Genuine tension, not manufactured, but sought.

---

## 2. Data-Free Recommendation

**The failure:** "Based on what you've described, I recommend a three-pronged approach:
(1) re-engage the economic buyer, (2) develop a new champion, (3) create urgency
through a compelling business case."

**Why it fails:** This advice is correct for every deal in the history of enterprise
sales. It uses zero data from the actual account. The operator could have written
this without the council. The Salesforce data, Chorus calls, enrichment platform signals, and
intent data were all available but never queried.

**The fix:** Every recommendation must reference specific data. Not "re-engage the EB"
but "re-engage Monica Di Nitto (Global Head of Marketing) — she signed the original
deal in 2023, her last Chorus call was 8 months ago, and enrichment platform shows Board
International is evaluating Cognism intent signals."

---

## 3. AI-Slop Customer Email

**The failure:** "I hope this email finds you well. I wanted to reach out to underscore
the pivotal role that enrichment platform plays in your go-to-market landscape. As you navigate
the evolving challenges of your industry, our platform continues to deliver
transformative value that fosters growth and enhances your competitive position."

**Why it fails:** Every word screams AI-generated. Em dashes, "pivotal", "landscape",
"navigate", "transformative", "fosters", "enhances" — all on the banned vocabulary
list. A senior buyer reads this and knows exactly what produced it. Trust destroyed
in one paragraph.

**The fix:** Run the Customer-Facing Output Gate (`protocols/output-gate.md`). Pass 1
catches structural issues. Pass 2 (humanizer audit) catches every one of these
patterns. The email should read like a human wrote it — short sentences, specific
references, no inflated language, British register if appropriate.

---

## 4. Generic Discovery Questions Despite Rich Data

**The failure:** After gathering Chorus transcripts showing the customer mentioned
budget cuts, competitive evaluation of Clay, and a new CTO joining — the council
produces: "Here are some good discovery questions: What are your biggest challenges?
How do you measure success? What would an ideal solution look like?"

**Why it fails:** These questions are askable without any preparation. They waste the
customer's time and signal the seller hasn't done homework. The gathered data should
produce context-led questions: "Your CTO Joanna joined 4 months ago from Snowflake —
has she changed how you evaluate vendor data quality?" The question demonstrates
preparation and earns the right to go deeper.

**The fix:** Context-Led Discovery Rule (v1.0.7): every discovery question must
reference a specific data finding. If it could be asked without preparation, it's
not ready to send.


