# 10 · Durable execution

> Checkpointing, resumption, and workflow state that survives crashes.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [Restate](https://github.com/restatedev/restate) | durable runtime | 🟢 production | 4720 | 568 | 2026-11-19 | ✗ |
| [Temporal](https://github.com/temporalio/temporal) | durable runtime | 🟢 production | 24503 | 552 | 2026-11-19 | ✗ |
| [dapr-agents](https://github.com/dapr/dapr-agents) | framework | 🟡 beta | 778 | 291 | 2026-11-12 | ✗ |
| [LoopX](https://github.com/loopx-project/loopx) | control plane | 🟡 beta | — | — | — | ✓ |

### notes
- **Restate** — Lighter-weight durable execution. *(not yet source-verified)*
- **Temporal** — The durable-execution incumbent agents increasingly run on. *(not yet source-verified)*
- **dapr-agents** — Dapr's agent building blocks. *(not yet source-verified)*
- **LoopX** — The control plane for 24/7 always-on agents — durable state (goals/requirements/decisions/ownership/evidence) that survives sessions, restarts, and harness changes. *(source-verified 2026-11-19)*
  - Kernel owns durable goal/todo/gate/evidence/quota truth; capabilities are provider-neutral verifiable outcomes; agent runtimes are peers with claims/leases/typed continuation. The most governance-fluent vocabulary in the durable layer (owner/safety/publication gates, authority+evidence on cards) — but evidence lives in mutable state, not tamper-evident chains, and there is no admission ladder. 17k commits of deep engineering; DSH first-class runtime (dsh-loopx-plugin).
  - adopted by: DSH plugin ecosystem, Trendshift
