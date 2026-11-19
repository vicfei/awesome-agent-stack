# 02 · Tool & context

> How agents reach tools and context — the first layer that got standardized, and the most settled.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [MCP](https://github.com/modelcontextprotocol/modelcontextprotocol) | wire protocol | 🟢 production | 9725 | 290 | 2026-11-19 | ✗ |
| [NLWeb](https://github.com/microsoft/nlweb) | protocol | ⚪ experimental | 6261 | 0 | 2026-08-11 | ✗ |
| [agents.json](https://github.com/vercel/agents-json) | convention | ⚪ experimental | — | — | — | ✗ |

### notes
- **MCP** — Model Context Protocol — agents↔tools/context. The first agent-layer standard to win universally. *(source-verified 2026-11-18)*
  - JSON-RPC over stdio/HTTP; servers expose tools/resources/prompts. Now Linux-Foundation hosted.
  - adopted by: Claude Code, Codex, DSH, OpenCode, Cursor
- **NLWeb** — Natural-language web query protocol (Microsoft). *(not yet source-verified)*
- **agents.json** — Declarative site capability descriptor for agents. *(not yet source-verified)*
