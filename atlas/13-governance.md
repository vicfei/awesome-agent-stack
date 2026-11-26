# 13 · Governance, admission & evidence

> WHO may act, on WHAT evidence, approved by WHOM. The blank continent — every other list skips it.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [nasiko](https://github.com/Nasiko-Labs/nasiko) | governance control plane | 🟡 beta | 11924 | 2871 | 2026-11-26 | ✓ |
| [dsh-super-agent](https://github.com/vicfei/dsh-super-agent) | governance daemon | 🟡 beta | 29 | 137 | 2026-11-25 | ✓ |
| [Piccolo](https://github.com/agentscope-ai/Piccolo) | decision models | 🟡 beta | 68 | 38 | 2026-11-26 | ✓ |

### notes
- **nasiko** — The Open Runtime for AI agents — one control plane that discovers coding agents, attributes token spend per agent and model, routes models, and governs tools and flows. *(source-verified 2026-11-27)*
  - Single Rust server every agent call passes through (Postgres/Redis/S3 + OTel, one end-to-end trace per request); LLM router mints short-lived tokens — real API keys never reach agents; MCP gateway holds tool credentials and grants per-agent tool sets; A2A proxy = single ingress with ownership/grants plus an allowlist of which agents may call which; flow guards cap depth, fan-out, token budget and cycles; per-tool 'ask' mode pauses the agent for human approval; per-agent secrets AES-256-GCM at rest; embedded OCI registry deploys agents as containers; ships a dedicated coding-policy crate; token optimization (payload compression, tool-schema compaction) records every saving. Apache-2.0.
- **dsh-super-agent** — Admission control & the earned-autonomy ladder for any CLI agent — the (currently only) resident of this layer. *(source-verified 2026-11-18)*
  - Deterministic admission table (scope×cell) → slow-path assessment (BYO LLM or BYO judge via logprob probability mass) → observe/auto ladder with per-scope rungs → hash-chained event ledger (dsh events verify) → IM human surface (digit approvals). Messages cannot change permissions — host-enforced policy only.
  - adopted by: 4-engine dogfood fleet, merged bot PRs on 2 repos
- **Piccolo** — AgentScope's decision models for agent tool review (4B/9B/27B) — the judge as a model class. *(not yet source-verified)*
  - note: model-layer entrant; pairs with governance layers as the pluggable judge
