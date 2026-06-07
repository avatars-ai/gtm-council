# Installing GTM OS in Gemini CLI

Gemini CLI supports agent skills through instruction files. GTM OS follows the
Agent Skills specification which Gemini CLI recognises.

## Quick Install

Copy the `gtm-os` directory to your Gemini CLI skills location:

```bash
cp -r gtm-os ~/.gemini/skills/gtm-os
```

Check Gemini CLI's current documentation for the exact skills directory path —
it may vary by version.

## Alternative: GEMINI.md

If Gemini CLI reads a `GEMINI.md` file instead of `SKILL.md`:

1. Copy `SKILL.md` to `GEMINI.md` in the skill directory
2. Or create a `GEMINI.md` that points to SKILL.md:

```markdown
# GTM OS
This skill's instructions are in [SKILL.md](SKILL.md).
Read SKILL.md for the full skill definition.
```

## What Works

| Feature | Status |
|---|---|
| Orchestration Protocol | Full |
| Framework routing | Full |
| Avatar voice | Full (if avatar files accessible) |
| File system access | Yes — self-learning commands work |
| Script execution | Yes (Node.js required for eval scripts) |
| MCP connections | Depends on Gemini CLI MCP support |
| Web search | Yes (Gemini has built-in search) |

## Connecting Data Sources

If Gemini CLI supports MCP servers, configure them per its documentation.
GTM OS discovers available tools at runtime — see `protocols/tool-abstraction.md`
for the full mapping of data source types to tool names.

Without MCP, Gemini's built-in web search provides the Web Search data source
type. The skill adapts and flags which other sources are unavailable.

## Customising

1. Copy `operator/team-os-template.md` to `operator/team-os.md`
2. Fill in your team's specific values
3. The skill loads it for VP and below automatically

## Notes on Model Differences

GTM OS was originally built for Claude but uses model-neutral instructions.
On Gemini, a few things to be aware of:

- **Framework depth**: Gemini may interpret framework instructions differently.
  If responses feel surface-level, try being explicit: "Apply MEDDPICC element
  by element to this deal" rather than just asking for help.

- **Avatar fidelity**: The quality of avatar voice in explicit modes depends on
  how well Gemini can maintain distinct personas across a long conversation.
  If voices blur, address avatars individually: "What would McMahon say about
  this specifically?"

- **Context window**: Gemini has a large context window which works well with
  GTM OS's Tier 0 files (~100KB). Full council sessions with multiple avatar
  files loaded should fit comfortably.

## Verify Installation

Start a session and type:

```
My pipeline is 3.1x against a $4M target. Should I be worried?
```

You should see the GTM OS initialisation banner and a framework-grounded response.
