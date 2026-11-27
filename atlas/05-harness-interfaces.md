# 05 · Harness interfaces

> Programming interfaces for driving ANY harness with one API — the actively contested slot.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [OAR](https://github.com/botiverse/oar) | SDK + CLI + MCP | 🟡 beta | 782 | 1139 | 2026-11-26 | ✗ |
| [HarnessRouter (UHP)](https://github.com/HarnessRouter/harnessrouter) | spec + reference impl | 🟡 beta | 4570 | 637 | 2026-11-26 | ✗ |
| [Agent Protocol](https://github.com/langchain-ai/agent-protocol) | HTTP spec + SDKs | 🟡 beta | 700 | 24 | 2026-11-19 | ✗ |

### notes
- **OAR** — Open Agent Runtime — one programming interface for ~15 coding-agent harnesses. *(source-verified 2026-11-18)*
  - Typed control surface (capabilities declared, not guessed — unsupported options refused upfront), attributed event stream (seq + agentPath, rawEvents() verbatim passthrough), sessionless machine-lifecycle queries (install/login/usage/inventories), scripted testing runtime with no binary. Positioned as the ACP alternative.
  - adopted by: Raft, Kaze, DSH (subagent-oar)
- **HarnessRouter (UHP)** — Unified Harness Protocol — one API over 31 harness backends (Codex, Claude Code, DSH, …) with sessions, streaming, files, cancellation; hosts the UHP spec and its conformance suite in-repo. *(source-verified 2026-11-27)*
  - Self-hosted Apache-2.0 Community Edition (one Docker container, your keys; named volume persists DB/files/harness CLIs/workspaces) + managed cloud; OpenAI Responses-compatible facade over UHP; Console/Gateway run unprivileged while a root Runner manages per-session users — agent processes run as their session's user. UHP lives in protocol/: maintainer-led, proposal-first, and spec + reference implementation + conformance suite must land in the same change ('a specification sentence that nothing enforces is a wish'). Vendor-governed open standard — the reference implementer is the company.
  - note: spec formerly at universal-harness/protocol (now 404) — entry repointed to its living home; OAR remains the incumbent harness-agnostic SDK in this slot
- **Agent Protocol** — LangChain's REST protocol for agent serving (adopted into AGNTCY). *(not yet source-verified)*
