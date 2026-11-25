# 06 · Runtimes & harnesses

> The agent execution loops themselves: model ↔ tools ↔ files, with sessions, approvals, compaction.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) | runtime | 🟢 production | 285997 | 14885 | 2026-11-22 | ✗ |
| [OpenCode](https://github.com/sst/opencode) | runtime | 🟡 beta | 228769 | 5446 | 2026-11-23 | ✗ |
| [Codex](https://github.com/openai/codex) | runtime | 🟢 production | 136238 | 4270 | 2026-11-23 | ✗ |
| [Claude Code](https://github.com/anthropics/claude-code) | runtime | 🟢 production | 156801 | 372 | 2026-11-23 | ✗ |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | runtime | 🟡 beta | 109021 | 253 | 2026-11-23 | ✗ |
| [Cursor](https://github.com/getcursor/cursor) | runtime (IDE) | 🟢 production | 33353 | 0 | 2026-05-12 | ✗ |

### notes
- **DeepSeek Harness** — The open agent runtime with a full plugin system (Cordis), profiles, skills, MCP. *(source-verified 2026-11-18)*
  - Cordis plugin runtime (ctx.on session/* events, schemastery config, cordis.patch.yml UI patches); SessionEvent = {type, seq, time, data} append-only event log with turn/step/tool taxonomy; store + carrier-scoped dispatch with per-listener containment.
  - adopted by: official 279k★ ecosystem, dsh plugins
- **OpenCode** — Provider-agnostic open coding agent. *(not yet source-verified)*
- **Codex** — OpenAI's coding agent CLI. *(not yet source-verified)*
- **Claude Code** — Anthropic's coding agent CLI — subagents, skills, hooks, MCP. *(not yet source-verified)*
- **Gemini CLI** — Google's open coding agent CLI. *(not yet source-verified)*
- **Cursor** — The agent-native IDE. *(not yet source-verified)*
