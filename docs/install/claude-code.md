# Installing GTM OS in Claude Code

## Quick Install

**Option 1: One-command install**
```bash
npx skills add avatars-ai/gtm-os
```

**Option 2: Git clone**
```bash
git clone https://github.com/avatars-ai/gtm-os.git ~/.claude/skills/gtm-os
```

**Option 3: Manual copy**
```bash
# macOS / Linux
cp -r gtm-os ~/.claude/skills/gtm-os

# Windows (PowerShell)
Copy-Item -Path "gtm-os" -Destination "$env:USERPROFILE\.claude\skills\gtm-os" -Recurse
```

That's it. Claude Code reads `SKILL.md` automatically on the next session.

## Verify Installation

Start a new Claude Code session and type anything that should trigger the skill:

```
My $500K renewal is at risk — the champion just left. What do I do?
```

You should see the GTM OS session initialisation banner followed by a data-gathering
sequence and multi-framework advisory response.

## Connecting Data Sources

GTM OS adapts to whatever tools you have available. To get the most out of it,
connect one or more data sources:

### CRM (Salesforce)
Install the Salesforce MCP server. GTM OS will detect `querySalesforce` and
`getSalesforceEntitySchema` automatically and use them for pipeline, account,
and opportunity data.

```bash
# Example: install Salesforce MCP
claude mcp add salesforce -- npx @salesforce/mcp-server
```

### Meeting Intelligence (Gong)
Install the Gong MCP server for call transcript analysis:

```bash
claude mcp add gong -- npx @gong/mcp-server
```

### ZoomInfo MCP (Optional Premium)
The richest single-source enrichment. Covers company enrichment, intent signals,
contact discovery, and account intelligence.

```bash
claude mcp add zoominfo -- npx @nicholasgriffintn/zoominfo-mcp
```

Repository: https://github.com/Zoominfo/zoominfo-mcp-plugin

### Web Search
Most Claude Code environments have web search available by default. If not,
install a search MCP:

```bash
claude mcp add brave-search -- npx @anthropic/brave-search-mcp
```

## Customising for Your Team

1. Copy the team operating system template:
```bash
cp ~/.claude/skills/gtm-os/operator/team-os-template.md \
   ~/.claude/skills/gtm-os/operator/team-os.md
```

2. Open `team-os.md` and replace all `[bracketed placeholders]` with your
   team's values — forecast categories, pipeline coverage targets, stage
   definitions, churn signals, execution gates.

3. The skill loads `team-os.md` automatically for VP and below.

## Self-Learning

Claude Code has file system access, so the self-learning commands work fully:

| Command | What It Does |
|---|---|
| `/capture` | Scan session, propose changes, write to skill files on approval |
| `/eval` | Run the eval suite via `node scripts/run_eval.js` |
| `/optimise` | Test triggers, check avatar freshness, analyse token efficiency |

## Updating

To update GTM OS, replace the skill directory with the new version:

```bash
rm -rf ~/.claude/skills/gtm-os
cp -r gtm-os-new ~/.claude/skills/gtm-os
```

Your `operator/team-os.md` will be overwritten — back it up first if you've customised it.

## Troubleshooting

**Skill doesn't trigger:**
Check that `gtm-os/SKILL.md` exists at the correct path. Run `ls ~/.claude/skills/gtm-os/SKILL.md`.

**"I don't have access to [tool]" messages:**
This is expected behaviour. GTM OS tells you which data sources are missing so you
know the shape of any blind spots. Connect MCP servers to fill the gaps.

**Token limit warnings on large sessions:**
The skill's Tier 0 context is ~100KB. If you're hitting limits in long sessions,
the skill will automatically reduce depth. For very long sessions, start a new
session — the skill re-initialises cleanly.
