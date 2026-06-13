# Installing GTM OS in Claude.ai

## Quick Install

1. Download the `gtm-council` folder as a ZIP file
2. Go to **claude.ai** -> **Settings** -> **Skills**
3. Click **Upload Skill**
4. Select the ZIP file
5. The skill appears in your skills list as "gtm-council"

The skill triggers automatically when you ask GTM-related questions.

## Alternative: Manual Upload

If ZIP upload isn't available:

1. Open **Settings** -> **Skills** -> **Create Skill**
2. Set name to `gtm-council`
3. Paste the contents of `SKILL.md` into the instructions field
4. Upload supporting files:
   - `council/roster.md`
   - `council/framework-index.md`
   - `operator/universal-context.md`
   - Any protocol files you want available

The minimum viable install is just `SKILL.md` — the skill works with reduced depth
but still provides multi-framework advisory.

## What Works

| Feature | Status |
|---|---|
| Orchestration Protocol | Full |
| Framework routing (145+ frameworks) | Full |
| Avatar voice in explicit modes | Full (if avatar files uploaded) |
| Data gathering from connected tools | Depends on Claude.ai tool access |
| Self-learning (`/capture`) | Partial — presents report, cannot write files |
| Self-testing (`/eval`) | Manual only — presents prompts for you to test |
| Customer-facing output gate | Full |
| Document review | Full |

## What Doesn't Work

- **File system writes**: Claude.ai cannot write to skill files, so `/capture`
  presents recommendations but you apply them manually.
- **Script execution**: `scripts/run_eval.js` cannot run. Use `/eval` for manual
  testing against the eval prompts.
- **MCP servers**: Claude.ai doesn't support MCP connections (as of June 2026).
  The skill works with web search and whatever tools Claude.ai provides natively.

## Customising for Your Team

Since Claude.ai can't write files, customise before uploading:

1. Copy `operator/team-os-template.md` to `operator/team-os.md`
2. Fill in your team's values in the local copy
3. Upload the customised `team-os.md` as part of the skill

## Verify Installation

Start a new conversation and type:

```
How's my pipeline looking? Should I be worried about coverage?
```

You should see the GTM OS initialisation banner. Without CRM access, the skill
will ask you to provide the data and then advise based on what you share.

## Tips

- **Attach documents for review**: Drop a draft email, proposal, or executive
  briefing into the chat and say "Review this document." The four-cohort document
  review works fully in Claude.ai.

- **Provide context manually**: Without CRM/meeting intelligence, give the skill
  context: "Account X has $500K ACV, renewal in 45 days, champion just left,
  competitor evaluating." The skill works with whatever data you provide.

- **Use Projects**: If your Claude.ai plan supports Projects, add GTM OS as a
  project-level skill so it's available across all conversations in that project.
