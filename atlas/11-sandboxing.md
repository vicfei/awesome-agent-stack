# 11 · Sandboxing & substrate

> Isolation for untrusted agent work — from worktrees to gVisor actors.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [OpenSandbox](https://github.com/opensandbox-group/OpenSandbox) | sandbox runtime | 🟡 beta | 17958 | 2994 | 2026-11-27 | ✓ |
| [Agent Substrate](https://github.com/agent-substrate/substrate) | substrate | 🟡 beta | 8440 | 1099 | 2026-11-25 | ✗ |
| [OpenShell](https://github.com/ai-openshell/openshell) | sandbox runtime | 🟡 beta | 21968 | 960 | 2026-11-26 | ✓ |
| [worktree + bwrap pattern](https://github.com/vicfei/dsh-super-agent) | pattern | 🟢 production | 29 | 137 | 2026-11-25 | ✗ |

### notes
- **OpenSandbox** — Sandbox runtime for AI agents on your own infrastructure — unified lifecycle/exec/file APIs plus browsers and desktops, local Docker to Kubernetes. AAIF project. *(source-verified 2026-11-27)*
  - Server + SDKs (py/ts/go/java/c#) + osb CLI + MCP surface; fast-sandbox backend runs Firecracker microVMs inside pre-warmed Fastlet pods with a FastPath gRPC control plane off the K8s scheduler hot path (64ms P50 create); sandbox CRDs are the durable source of truth — control planes are replayable, reconcilers converge from CRs; per-sandbox egress runs in a per-Fastlet egress process, fail-closed ('policy may be late, never open'), no per-sandbox sidecars; template builder bakes OCI images into golden microVM artifacts; pause/resume checkpoints preserve memory+disk; credential vault keeps real secrets out of workloads; resource pools + batch creation target eval/RL fleets.
- **Agent Substrate** — Sandboxed execution substrate (actors) — what google/ax runs tasks on. *(not yet source-verified)*
- **OpenShell** — Safe, private runtime for fleets of autonomous agents — kernel-enforced sandbox policy plus formally verified policy changes. NVIDIA-origin, CNCF. *(source-verified 2026-11-27)*
  - Gateway + supervisor + sandbox split, all gRPC (proto/: sandbox lifecycle, sandbox templates, attachable sandbox providers, isolation_backend, credential_driver, compute_driver, supervisor middleware, gateway interceptors); kernel instrumentation confines file access, syscalls and network per policy — every connection is checked before it leaves the sandbox; credential providers inject secrets only into requests bound for approved endpoints, agents never hold them; policy changes run through a prover (formal verification flags newly-granted access) and wait for human review; SDKs py/ts/go/rust + Skills that teach agents to drive it. Docker/Podman/VM backends; Helm for K8s.
- **worktree + bwrap pattern** — Per-ticket git worktrees + bubblewrap namespaces with network kill — the lightweight end of the isolation spectrum. *(source-verified 2026-11-18)*
