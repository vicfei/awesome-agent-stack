# 11 · Sandboxing & substrate

> Isolation for untrusted agent work — from worktrees to gVisor actors.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [Agent Substrate](https://github.com/agent-substrate/substrate) | substrate | 🟡 beta | 8211 | 1140 | 2026-11-22 | ✗ |
| [worktree + bwrap pattern](https://github.com/vicfei/dsh-super-agent) | pattern | 🟢 production | 29 | 132 | 2026-11-22 | ✗ |

### notes
- **Agent Substrate** — Sandboxed execution substrate (actors) — what google/ax runs tasks on. *(not yet source-verified)*
- **worktree + bwrap pattern** — Per-ticket git worktrees + bubblewrap namespaces with network kill — the lightweight end of the isolation spectrum. *(source-verified 2026-11-18)*
