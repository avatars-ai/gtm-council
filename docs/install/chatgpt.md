# Installing GTM OS in ChatGPT

GTM OS works in ChatGPT through Custom GPTs or Projects. The skill's instructions
are model-neutral — they work on any frontier model that follows structured prompts.

## Option 1: Custom GPT

Best for: a dedicated GTM advisory assistant you can share with your team.

1. Go to **chatgpt.com** -> **Explore GPTs** -> **Create a GPT**
2. In the **Configure** tab:
   - **Name**: GTM OS
   - **Description**: Virtual GTM advisory board — 27 strategists, 145+ frameworks, 6 interaction modes
   - **Instructions**: Paste the full contents of `SKILL.md`
3. Under **Knowledge**, upload these files:
   - `council/framework-index.md` (required — the orchestration engine)
   - `council/roster.md` (required — avatar routing)
   - `operator/universal-context.md` (recommended — diagnostics and standards)
   - Avatar files from `avatars/` for any avatars you want available in explicit modes
   - Protocol files from `protocols/` for specific use cases
4. Save and publish (private, team, or public)

**Knowledge file priority:** If you hit upload limits, prioritise in this order:
1. `council/framework-index.md` (~65 KB) — this is the engine
2. `council/roster.md` (~7 KB) — routing and debate pairings
3. `operator/universal-context.md` (~14 KB) — diagnostics
4. Avatar files for your most-used advisors

## Option 2: ChatGPT Projects

Best for: adding GTM advisory to an existing project workspace.

1. Open your Project in ChatGPT
2. Go to Project Settings -> Instructions
3. Paste the contents of `SKILL.md` into the project instructions
4. Upload supporting files to the Project's knowledge base

## Option 3: Codex

For ChatGPT's Codex environment:

1. Copy the `gtm-os/` directory to your Codex project's skills folder
2. Codex reads `SKILL.md` as the skill definition
3. If Codex supports MCP, connect your data sources per `protocols/tool-abstraction.md`

## What Works

| Feature | Status |
|---|---|
| Orchestration Protocol | Full |
| Framework routing | Full (with framework-index.md uploaded) |
| Avatar voice | Full (with avatar files uploaded) |
| Data gathering | Limited — depends on ChatGPT's available tools |
| Web search | Yes (ChatGPT has built-in browsing) |
| Self-learning | Report only — no file writes |
| Document review | Full |

## What to Expect

ChatGPT processes the instructions differently from Claude. A few things to note:

- **Framework routing depth** may vary. If responses feel generic, try being more
  specific: "Use MEDDPICC to qualify this deal" rather than "Help me with this deal."

- **Avatar voice fidelity** depends on whether avatar files are uploaded to Knowledge.
  Without them, the model approximates based on the framework-index descriptions.

- **Data gathering** is limited to web search and whatever you provide manually.
  ChatGPT doesn't have MCP support, so CRM and meeting intelligence queries
  require you to paste the data into the conversation.

## Customising

1. Copy `operator/team-os-template.md` to `operator/team-os.md`
2. Fill in your team's values
3. Upload to the GPT's Knowledge files
4. The skill references `team-os.md` for team-specific operating standards

## Tips

- **Upload deal data as files**: Drop a CSV of your pipeline into the chat.
  The skill can analyse it using ChatGPT's data analysis capability.

- **Use voice mode**: Ask deal strategy questions verbally. The orchestration
  protocol works through voice — you get multi-framework advisory in conversation.

- **Share the GPT**: Once configured, share the Custom GPT link with your team.
  Everyone gets the same advisory board without individual setup.
