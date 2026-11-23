# 13 · Governance, admission & evidence

> WHO may act, on WHAT evidence, approved by WHOM. The blank continent — every other list skips it.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [dsh-super-agent](https://github.com/vicfei/dsh-super-agent) | governance daemon | 🟡 beta | 29 | 132 | 2026-11-22 | ✓ |
| [Piccolo](https://github.com/agentscope-ai/Piccolo) | decision models | 🟡 beta | 64 | 35 | 2026-11-23 | ✓ |

### notes
- **dsh-super-agent** — Admission control & the earned-autonomy ladder for any CLI agent — the (currently only) resident of this layer. *(source-verified 2026-11-18)*
  - Deterministic admission table (scope×cell) → slow-path assessment (BYO LLM or BYO judge via logprob probability mass) → observe/auto ladder with per-scope rungs → hash-chained event ledger (dsh events verify) → IM human surface (digit approvals). Messages cannot change permissions — host-enforced policy only.
  - adopted by: 4-engine dogfood fleet, merged bot PRs on 2 repos
- **Piccolo** — AgentScope's decision models for agent tool review (4B/9B/27B) — the judge as a model class. *(not yet source-verified)*
  - note: model-layer entrant; pairs with governance layers as the pluggable judge
