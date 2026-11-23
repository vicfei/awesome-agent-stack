# 05 · Harness interfaces

> Programming interfaces for driving ANY harness with one API — the actively contested slot.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [OAR](https://github.com/botiverse/oar) | SDK + CLI + MCP | 🟡 beta | 754 | 1113 | 2026-11-23 | ✗ |
| [Agent Protocol](https://github.com/langchain-ai/agent-protocol) | HTTP spec + SDKs | 🟡 beta | 698 | 28 | 2026-11-19 | ✗ |
| [UHP](https://github.com/universal-harness/protocol) | HTTP spec | ⚪ experimental | — | — | — | ✗ |

### notes
- **OAR** — Open Agent Runtime — one programming interface for ~15 coding-agent harnesses. *(source-verified 2026-11-18)*
  - Typed control surface (capabilities declared, not guessed — unsupported options refused upfront), attributed event stream (seq + agentPath, rawEvents() verbatim passthrough), sessionless machine-lifecycle queries (install/login/usage/inventories), scripted testing runtime with no binary. Positioned as the ACP alternative.
  - adopted by: Raft, Kaze, DSH (subagent-oar)
- **Agent Protocol** — LangChain's REST protocol for agent serving (adopted into AGNTCY). *(not yet source-verified)*
- **UHP** — Unified Harness Protocol — versioned HTTP spec for applications invoking agent harnesses. *(not yet source-verified)*
  - note: slot-mate of OAR; deep dive pending
