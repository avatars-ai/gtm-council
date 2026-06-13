# Installing GTM OS in Cursor and Windsurf

Cursor and Windsurf both support project-level skills through instruction files.
GTM OS installs the same way in both.

## Quick Install

```bash
# Cursor
git clone https://github.com/avatars-ai/gtm-council.git .cursor/skills/gtm-council

# Windsurf
git clone https://github.com/avatars-ai/gtm-council.git .windsurf/skills/gtm-council
```

Or copy manually from a local download into your project's skills folder.

## Alternative: Rules File

If your IDE uses a rules file (`.cursorrules`, `.windsurfrules`, or similar):

1. Paste the contents of `SKILL.md` into your rules file
2. Place supporting files in a `references/` directory the IDE can access
3. The skill triggers when you ask GTM-related questions in the AI chat

## What Works

| Feature | Status |
|---|---|
| Orchestration Protocol | Full |
| Framework routing | Full |
| Avatar voice in explicit modes | Full (if avatar files accessible) |
| File system access | Yes — `/capture` can write changes |
| Script execution | Yes — `/eval` can run `scripts/run_eval.js` |
| Self-learning | Full |
| MCP connections | Depends on IDE MCP support |

## Connecting Data Sources

Both Cursor and Windsurf support MCP servers. Configure them in your IDE's
MCP settings:

### Cursor
Add to `.cursor/mcp.json`:
```json
{
  "mcpServers": {
    "salesforce": {
      "command": "npx",
      "args": ["@salesforce/mcp-server"]
    },
    "zoominfo": {
      "command": "npx",
      "args": ["@nicholasgriffintn/zoominfo-mcp"]
    }
  }
}
```

### Windsurf
Configure MCP servers through Windsurf's settings panel or configuration file
per their current documentation.

## Customising for Your Team

1. Copy the template:
```bash
cp gtm-council/operator/team-os-template.md gtm-council/operator/team-os.md
```

2. Edit `team-os.md` with your team's values

3. The skill loads it automatically

## Use Case: Deal Strategy in Your IDE

GTM OS in an IDE is particularly useful when you're:

- **Working with CRM data exports**: Drop a CSV in your project, ask the skill
  to analyse pipeline coverage or identify risk accounts

- **Preparing customer communications**: Draft emails and documents in your editor,
  then ask the skill to run the document review protocol

- **Building reports**: Use the skill to structure executive briefings, QBR
  materials, or board memos while you write them

- **Coaching prep**: Ask the skill to diagnose a rep's performance while you
  have their data open in another tab

## Troubleshooting

**Skill doesn't trigger:**
Verify the skill directory is in the correct location for your IDE. Try
explicitly referencing it: "Using the GTM OS skill, help me with..."

**Context window limits:**
Cursor and Windsurf have smaller context windows than some other platforms.
If you're hitting limits, the skill's tiered loading helps — Tier 0 is ~100KB
and covers most use cases without loading full avatar files.

**MCP not connecting:**
Check your IDE's MCP configuration and ensure the server packages are installed.
Run the MCP server manually first to verify it works before connecting through the IDE.
