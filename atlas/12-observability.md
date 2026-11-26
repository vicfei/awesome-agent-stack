# 12 · Observability & diaries

> Recording what agents did: session diaries, ledgers, traces.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [dsh-agentdiary-plugin](https://github.com/vicfei/agentdiary-dsh-plugin) | DSH plugin | 🟡 beta | 0 | 19 | 2026-11-23 | ✗ |
| [dsh-evidence-plugin](https://github.com/vicfei/dsh-evidence-plugin) | DSH plugin | 🟡 beta | 0 | 12 | 2026-11-25 | ✓ |
| [agentdiary](https://github.com/vicfei/agentdiary) | CLI | 🟡 beta | 1 | 8 | 2026-11-25 | ✗ |
| [agent-diary](https://github.com/viandikafauzi/agent-diary) | CLI | 🟡 beta | 0 | 0 | 2026-08-11 | ✗ |

### notes
- **dsh-agentdiary-plugin** — agentdiary writer inside DeepSeek Harness — one rich entry per settled turn. *(source-verified 2026-11-18)*
  - Keys on turn/end settlement (reason ∈ completed/error/max-tokens/aborted); active-duration accounting (idle gaps capped at 15 min); pure core + ~100-line Cordis glue.
- **dsh-evidence-plugin** — Every session transition lands in a hash-chained ledger in your own git repo. *(source-verified 2026-11-18)*
  - entryHash = sha256(kind⟟payload⟟prevHash) + head anchor; live-smoked 242-row chain with auto-commits.
- **agentdiary** — Your agents keep a diary — in your own git repo. Append-only entries, snapshot memory, CI-grade verify. *(source-verified 2026-11-18)*
  - Directory contract (sessions/ append-only + memory/ snapshot + agentdiary.toml); zero-dep offline fast paths; scan tiers; same entry spelling as the DSH plugin.
- **agent-diary** — Sentiment + interaction analysis of agent conversation logs → HTML daily report. *(not yet source-verified)*
  - note: adjacent: analysis-on-logs, not record-of-work
