# 07 · Orchestration & swarms

> Multi-agent coordination, teaming, and cluster-scale task running.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [agent-team (DSH)](https://github.com/deepseek-ai/deepseek-harness) | experimental package | ⚪ experimental | 287545 | 14389 | 2026-11-22 | ✗ |
| [AgentTeams](https://github.com/agentscope-ai/AgentTeams) | multi-agent OS | 🟡 beta | 6158 | 355 | 2026-11-26 | ✓ |
| [LangGraph](https://github.com/langchain-ai/langgraph) | framework | 🟢 production | 45467 | 280 | 2026-11-26 | ✗ |
| [AX (Agent Executor)](https://github.com/google/ax) | cluster orchestrator | ⚪ experimental | 14905 | 179 | 2026-11-26 | ✓ |
| [AutoSwarm](https://github.com/HKUDS/AutoSwarm) | orchestrator + desktop | 🟡 beta | 2700 | 117 | 2026-11-26 | ✓ |
| [AgentCore](https://github.com/awslabs/agentcore-samples) | framework | 🟡 beta | 3554 | 78 | 2026-11-25 | ✗ |

### notes
- **agent-team (DSH)** — DSH's native multi-agent roster/task-board (packages/experimental/agent-team). *(source-verified 2026-11-18)*
- **AgentTeams** — Collaborative multi-agent OS — agents coordinate in transparent Matrix rooms with humans present by default. *(source-verified 2026-11-19)*
  - K8s-native controller (Worker/Team/Manager CRs) + Higress AI gateway with credential isolation (workers hold consumer tokens only) + self-hosted Matrix + MinIO. Multi-runtime workers coexist per room (OpenClaw/QwenPaw/Hermes/Codex/DSH-experimental), runtime switchable in place. Human-in-the-loop is the default architecture ('no hidden agent-to-agent calls') — the closest philosophical neighbor to IM-native governance; still no admission policy, no earned-autonomy ladder, audit via external AgentLoop integration.
  - adopted by: Aliyun commercial product
- **LangGraph** — Graph-based agent workflow runtime; the orchestration incumbent. *(not yet source-verified)*
- **AX (Agent Executor)** — Google's 'K8s for agents' — declarative Task/Workspace/Model, kubectl-shaped CLI, millions of tasks per cluster. *(source-verified 2026-11-18)*
  - ax.io/v1alpha1 manifests; Agent Substrate actors in gVisor WorkerPools; pluggable runner images (claude-code/custom); suspend/resume checkpointing; heavy-development warnings. Gateway manifests do ship a permission surface — egress allowlist (which hosts an agent may reach) plus credential injection without agent visibility — though no admission ladder or approval flow; kubectl remains the human surface.
- **AutoSwarm** — Turn your installed agents into one team — selection, shared context/memory, parallel, approvals bridging. *(source-verified 2026-11-18)*
  - Host agent installs a Skill; delegates to 12 runtimes via their native CLIs; wait-any collection; in-flow approval handling; deliverable verification. Ships its own per-agent adapters where an interface layer (OAR) would serve.
- **AgentCore** — AWS's managed agent runtime. *(not yet source-verified)*
