# 07 · Orchestration & swarms

> Multi-agent coordination, teaming, and cluster-scale task running.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [agent-team (DSH)](https://github.com/deepseek-ai/deepseek-harness) | experimental package | ⚪ experimental | 284145 | 14843 | 2026-11-18 | ✗ |
| [LangGraph](https://github.com/langchain-ai/langgraph) | framework | 🟢 production | 45157 | 274 | 2026-11-19 | ✗ |
| [AX (Agent Executor)](https://github.com/google/ax) | cluster orchestrator | ⚪ experimental | 14805 | 120 | 2026-11-19 | ✗ |
| [AutoSwarm](https://github.com/HKUDS/AutoSwarm) | orchestrator + desktop | 🟡 beta | 2661 | 110 | 2026-11-19 | ✓ |
| [AgentCore](https://github.com/awslabs/agentcore-samples) | framework | 🟡 beta | 3540 | 90 | 2026-11-19 | ✗ |

### notes
- **agent-team (DSH)** — DSH's native multi-agent roster/task-board (packages/experimental/agent-team). *(source-verified 2026-11-18)*
- **LangGraph** — Graph-based agent workflow runtime; the orchestration incumbent. *(not yet source-verified)*
- **AX (Agent Executor)** — Google's 'K8s for agents' — declarative Task/Workspace/Model, kubectl-shaped CLI, millions of tasks per cluster. *(source-verified 2026-11-18)*
  - ax.io/v1alpha1 manifests; Agent Substrate actors in gVisor WorkerPools; pluggable runner images (claude-code/custom); suspend/resume checkpointing; heavy-development warnings. Governance axis empty — kubectl is the human surface.
- **AutoSwarm** — Turn your installed agents into one team — selection, shared context/memory, parallel, approvals bridging. *(source-verified 2026-11-18)*
  - Host agent installs a Skill; delegates to 12 runtimes via their native CLIs; wait-any collection; in-flow approval handling; deliverable verification. Ships its own per-agent adapters where an interface layer (OAR) would serve.
- **AgentCore** — AWS's managed agent runtime. *(not yet source-verified)*
