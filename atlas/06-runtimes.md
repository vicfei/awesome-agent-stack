# 06 · Runtimes & harnesses

> The agent execution loops themselves: model ↔ tools ↔ files, with sessions, approvals, compaction.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) | runtime | 🟢 production | 284153 | 14842 | 2026-11-18 | ✗ |
| [OpenCode](https://github.com/sst/opencode) | runtime | 🟡 beta | 228002 | 5527 | 2026-11-19 | ✗ |
| [Codex](https://github.com/openai/codex) | runtime | 🟢 production | 135882 | 4246 | 2026-11-19 | ✗ |
| [Claude Code](https://github.com/anthropics/claude-code) | runtime | 🟢 production | 156310 | 339 | 2026-11-19 | ✗ |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | runtime | 🟡 beta | 108939 | 250 | 2026-11-19 | ✗ |
| [Cursor](https://github.com/getcursor/cursor) | runtime (IDE) | 🟢 production | 33342 | 0 | 2026-05-12 | ✗ |

### notes
- **DeepSeek Harness** — The open agent runtime with a full plugin system (Cordis), profiles, skills, MCP. *(source-verified 2026-11-18)*
  - Cordis plugin runtime (ctx.on session/* events, schemastery config, cordis.patch.yml UI patches); SessionEvent = {type, seq, time, data} append-only event log with turn/step/tool taxonomy; store + carrier-scoped dispatch with per-listener containment.
  - adopted by: official 279k★ ecosystem, dsh plugins
- **OpenCode** — Provider-agnostic open coding agent. *(not yet source-verified)*
- **Codex** — OpenAI's coding agent CLI. *(not yet source-verified)*
- **Claude Code** — Anthropic's coding agent CLI — subagents, skills, hooks, MCP. *(not yet source-verified)*
- **Gemini CLI** — Google's open coding agent CLI. *(not yet source-verified)*
- **Cursor** — The agent-native IDE. *(not yet source-verified)*
