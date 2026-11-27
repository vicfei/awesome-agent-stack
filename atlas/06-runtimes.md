# 06 · Runtimes & harnesses

> The agent execution loops themselves: model ↔ tools ↔ files, with sessions, approvals, compaction.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) | runtime | 🟢 production | 287671 | 14379 | 2026-11-22 | ✗ |
| [OpenCode](https://github.com/sst/opencode) | runtime | 🟡 beta | 229432 | 5245 | 2026-11-27 | ✗ |
| [Codex](https://github.com/openai/codex) | runtime | 🟢 production | 136590 | 4325 | 2026-11-27 | ✗ |
| [docker-agent](https://github.com/docker/docker-agent) | runtime (CLI plugin) | 🟢 production | 4720 | 2539 | 2026-11-26 | ✗ |
| [Claude Code](https://github.com/anthropics/claude-code) | runtime | 🟢 production | 157230 | 435 | 2026-11-26 | ✗ |
| [Gemini CLI](https://github.com/google-gemini/gemini-cli) | runtime | 🟡 beta | 109199 | 257 | 2026-11-27 | ✗ |
| [Cursor](https://github.com/getcursor/cursor) | runtime (IDE) | 🟢 production | 33361 | 0 | 2026-05-12 | ✗ |

### notes
- **DeepSeek Harness** — The open agent runtime with a full plugin system (Cordis), profiles, skills, MCP. *(source-verified 2026-11-18)*
  - Cordis plugin runtime (ctx.on session/* events, schemastery config, cordis.patch.yml UI patches); SessionEvent = {type, seq, time, data} append-only event log with turn/step/tool taxonomy; store + carrier-scoped dispatch with per-listener containment.
  - adopted by: official 279k★ ecosystem, dsh plugins
- **OpenCode** — Provider-agnostic open coding agent. *(not yet source-verified)*
- **Codex** — OpenAI's coding agent CLI. *(not yet source-verified)*
- **docker-agent** — Docker Engineering's agent builder & runtime — YAML-defined agents with MCP toolsets and multi-agent teams, packaged and shared as OCI artifacts. *(source-verified 2026-11-27)*
  - docker CLI plugin, pre-installed in Docker Desktop 4.63+; agents are defined against a versioned config schema (agent-schema.json, now at v16) — model/instruction/toolsets incl. docker: MCP tooling; built-in think/todo/memory tools; pluggable RAG (BM25/embeddings/hybrid/rerank); provider-agnostic incl. local models via Docker Model Runner; `docker agent run <registry>/<agent>` pulls and runs agents as OCI artifacts. Uses itself to build itself.
- **Claude Code** — Anthropic's coding agent CLI — subagents, skills, hooks, MCP. *(not yet source-verified)*
- **Gemini CLI** — Google's open coding agent CLI. *(not yet source-verified)*
- **Cursor** — The agent-native IDE. *(not yet source-verified)*
