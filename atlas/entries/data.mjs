// awesome-agent-stack — the entry database.
// EDITORIAL fields (what/mechanism/status/adopted-by/verified) are human-written, changed via PR.
// AUTO fields (stars/pushed/lastRelease) are machine-written by scripts/refresh.mjs — never hand-edit.
// verified: only set a date when we actually read the source / ran the thing. Otherwise "not-yet-verified".

export const LAYERS = [
  { id: "01", slug: "foundations", name: "Foundations & formats", mission: "The base protocols and conventions everything else borrows vocabulary from." },
  { id: "02", slug: "tool-context", name: "Tool & context", mission: "How agents reach tools and context — the first layer that got standardized, and the most settled." },
  { id: "03", slug: "agent-to-agent", name: "Agent-to-agent", mission: "Protocols for independent agents to find, delegate to, and pay each other." },
  { id: "04", slug: "agent-to-ui", name: "Agent-to-UI & editor", mission: "How interfaces (editors, web UIs) drive an agent and render its work." },
  { id: "05", slug: "harness-interfaces", name: "Harness interfaces", mission: "Programming interfaces for driving ANY harness with one API — the actively contested slot." },
  { id: "06", slug: "runtimes", name: "Runtimes & harnesses", mission: "The agent execution loops themselves: model ↔ tools ↔ files, with sessions, approvals, compaction." },
  { id: "07", slug: "orchestration", name: "Orchestration & swarms", mission: "Multi-agent coordination, teaming, and cluster-scale task running." },
  { id: "08", slug: "delivery", name: "Delivery & SOP", mission: "Turning agent work into governed deliveries: pipelines, human gates, SOPs." },
  { id: "09", slug: "cockpits", name: "Cockpits", mission: "The surfaces humans steer fleets from — web panels, phone apps, desktop decks." },
  { id: "10", slug: "durable", name: "Durable execution", mission: "Checkpointing, resumption, and workflow state that survives crashes." },
  { id: "11", slug: "sandboxing", name: "Sandboxing & substrate", mission: "Isolation for untrusted agent work — from worktrees to gVisor actors." },
  { id: "12", slug: "observability", name: "Observability & diaries", mission: "Recording what agents did: session diaries, ledgers, traces." },
  { id: "13", slug: "governance", name: "Governance, admission & evidence", mission: "WHO may act, on WHAT evidence, approved by WHOM. The blank continent — every other list skips it." },
];

export const ENTRIES = [
  // ── 01 foundations ─────────────────────────────────────────────────────────
  { layer: "01", name: "LSP", repo: "microsoft/language-server-protocol", form: "protocol", what: "Language Server Protocol — editor↔language-tool, the ancestor template for agent interface layers.", status: "production" },
  { layer: "01", name: "AGENTS.md", repo: "openai/agents.md", form: "convention", what: "The repo-level instruction file agents read first; converging as the cross-harness convention.", status: "beta" },
  { layer: "01", name: "SKILL.md", repo: "anthropics/skills", form: "convention", what: "Skill packaging format (SKILL.md + assets) adopted across Claude Code-class runtimes.", status: "beta" },
  { layer: "01", name: "llms.txt", repo: "AnswerDotAI/llms-txt", form: "convention", what: "robots.txt-for-models: a markdown index of a site for LLM consumption.", status: "beta" },

  // ── 02 tool & context ──────────────────────────────────────────────────────
  { layer: "02", name: "MCP", repo: "modelcontextprotocol/modelcontextprotocol", form: "wire protocol", what: "Model Context Protocol — agents↔tools/context. The first agent-layer standard to win universally.", status: "production", mechanism: "JSON-RPC over stdio/HTTP; servers expose tools/resources/prompts. Now Linux-Foundation hosted.", adopted: ["Claude Code", "Codex", "DSH", "OpenCode", "Cursor"], verified: "2026-11-18" },
  { layer: "02", name: "agents.json", repo: "vercel/agents-json", form: "convention", what: "Declarative site capability descriptor for agents.", status: "experimental" },
  { layer: "02", name: "NLWeb", repo: "microsoft/nlweb", form: "protocol", what: "Natural-language web query protocol (Microsoft).", status: "experimental" },

  // ── 03 agent-to-agent ──────────────────────────────────────────────────────
  { layer: "03", name: "A2A", repo: "a2aproject/A2A", form: "wire protocol", what: "Agent2Agent — Google-originated, LF-hosted. Agent Cards discovery, task lifecycle, streaming.", status: "beta", mechanism: "JSON-RPC over HTTPS; capability discovery at /.well-known/; assumes long-lived network services — heavy for local-first workflows.", verified: "2026-11-18" },
  { layer: "03", name: "ANP", repo: "agent-network-protocol/ANP", form: "wire protocol", what: "Agent Network Protocol — decentralized identity-first agent web.", status: "experimental" },
  { layer: "03", name: "AITP", repo: "nepsig/aitp", form: "wire protocol", what: "Agent Interaction & Transaction Protocol (NEAR).", status: "experimental" },

  // ── 04 agent-to-UI / editor ────────────────────────────────────────────────
  { layer: "04", name: "Agent Client Protocol", repo: "zed-industries/agent-client-protocol", form: "wire protocol", what: "Zed's editor↔agent JSON-RPC; adopted by Zed, JetBrains, VS Code extensions.", status: "beta" },
  { layer: "04", name: "AG-UI", repo: "ag-ui-protocol/ag-ui", form: "wire protocol", what: "Agent-to-frontend event stream protocol for building agent UIs.", status: "experimental" },
  { layer: "04", name: "LSAP", repo: "zed-industries/lsap", form: "protocol", what: "Language Server Agent Protocol — LSP-shaped agent extension.", status: "experimental" },

  // ── 05 harness interfaces ──────────────────────────────────────────────────
  { layer: "05", name: "OAR", repo: "botiverse/oar", form: "SDK + CLI + MCP", what: "Open Agent Runtime — one programming interface for ~15 coding-agent harnesses.", status: "beta", mechanism: "Typed control surface (capabilities declared, not guessed — unsupported options refused upfront), attributed event stream (seq + agentPath, rawEvents() verbatim passthrough), sessionless machine-lifecycle queries (install/login/usage/inventories), scripted testing runtime with no binary. Positioned as the ACP alternative.", adopted: ["Raft", "Kaze", "DSH (subagent-oar)"], verified: "2026-11-18" },
  { layer: "05", name: "UHP", repo: "universal-harness/protocol", form: "HTTP spec", what: "Unified Harness Protocol — versioned HTTP spec for applications invoking agent harnesses.", status: "experimental", note: "slot-mate of OAR; deep dive pending" },
  { layer: "05", name: "Agent Protocol", repo: "langchain-ai/agent-protocol", form: "HTTP spec + SDKs", what: "LangChain's REST protocol for agent serving (adopted into AGNTCY).", status: "beta" },

  // ── 06 runtimes & harnesses ────────────────────────────────────────────────
  { layer: "06", name: "DeepSeek Harness", repo: "deepseek-ai/deepseek-harness", form: "runtime", what: "The open agent runtime with a full plugin system (Cordis), profiles, skills, MCP.", status: "production", mechanism: "Cordis plugin runtime (ctx.on session/* events, schemastery config, cordis.patch.yml UI patches); SessionEvent = {type, seq, time, data} append-only event log with turn/step/tool taxonomy; store + carrier-scoped dispatch with per-listener containment.", adopted: ["official 279k★ ecosystem", "dsh plugins"], verified: "2026-11-18" },
  { layer: "06", name: "Claude Code", repo: "anthropics/claude-code", form: "runtime", what: "Anthropic's coding agent CLI — subagents, skills, hooks, MCP.", status: "production" },
  { layer: "06", name: "Codex", repo: "openai/codex", form: "runtime", what: "OpenAI's coding agent CLI.", status: "production" },
  { layer: "06", name: "OpenCode", repo: "sst/opencode", form: "runtime", what: "Provider-agnostic open coding agent.", status: "beta" },
  { layer: "06", name: "Gemini CLI", repo: "google-gemini/gemini-cli", form: "runtime", what: "Google's open coding agent CLI.", status: "beta" },
  { layer: "06", name: "Cursor", repo: "getcursor/cursor", form: "runtime (IDE)", what: "The agent-native IDE.", status: "production" },

  // ── 07 orchestration & swarms ──────────────────────────────────────────────
  { layer: "07", name: "AutoSwarm", repo: "HKUDS/AutoSwarm", form: "orchestrator + desktop", what: "Turn your installed agents into one team — selection, shared context/memory, parallel, approvals bridging.", status: "beta", mechanism: "Host agent installs a Skill; delegates to 12 runtimes via their native CLIs; wait-any collection; in-flow approval handling; deliverable verification. Ships its own per-agent adapters where an interface layer (OAR) would serve.", verified: "2026-11-18" },
  { layer: "07", name: "AX (Agent Executor)", repo: "google/ax", form: "cluster orchestrator", what: "Google's 'K8s for agents' — declarative Task/Workspace/Model, kubectl-shaped CLI, millions of tasks per cluster.", status: "experimental", mechanism: "ax.io/v1alpha1 manifests; Agent Substrate actors in gVisor WorkerPools; pluggable runner images (claude-code/custom); suspend/resume checkpointing; heavy-development warnings. Governance axis empty — kubectl is the human surface.", verified: "2026-11-18" },
  { layer: "07", name: "LangGraph", repo: "langchain-ai/langgraph", form: "framework", what: "Graph-based agent workflow runtime; the orchestration incumbent.", status: "production" },
  { layer: "07", name: "AgentCore", repo: "awslabs/agentcore-samples", form: "framework", what: "AWS's managed agent runtime.", status: "beta" },
  { layer: "07", name: "agent-team (DSH)", repo: "deepseek-ai/deepseek-harness", form: "experimental package", what: "DSH's native multi-agent roster/task-board (packages/experimental/agent-team).", status: "experimental", verified: "2026-11-18" },

  // ── 08 delivery & SOP ──────────────────────────────────────────────────────
  { layer: "08", name: "LoopForge", repo: "Tencent/LoopForge", form: "delivery orchestrator", what: "Self-hosted coding-agent delivery: SOP engine with Agent/Script/Human-gate nodes, per-conversation sandboxes.", status: "beta", mechanism: "Positioning moved to 'human on the loop' (pause/steer/take over, approval gates, needs-review inbox) — but supervision is in-flow and manual: human-INITIATED flows (no event-driven admission), permission modes undocumented, workflow state rather than tamper-evident audit, multi-tenant safety explicitly disclaimed. On-the-loop is UX; earned autonomy is absent. Fast riser: 2.7k→4k stars in two days (Tencent stacking trpc-agent-go + LoopForge).", verified: "2026-11-19" },

  // ── 09 cockpits ────────────────────────────────────────────────────────────
  { layer: "09", name: "t3code", repo: "pingdotgg/t3code", form: "cockpit", what: "Control Claude Code/Codex/… from any device — approval-first UX, 64k★ in 9 months.", status: "production", mechanism: "One server + desktop/web/iOS/Android; hero interaction IS phone approval. Trust = approval-as-interrupt only; no admission policy/evidence/observe ladder.", verified: "2026-11-18" },
  { layer: "09", name: "Paseo", repo: "getpaseo/paseo", form: "cockpit", what: "Agent cockpit with deepening plugin API (sidebar views, composer controls).", status: "beta" },
  { layer: "09", name: "dsh-Go", repo: "ccch1mneyyy/dsh-Go", form: "mobile cockpit", what: "DeepSeek Harness in your pocket — phone-native DSH + desktop pets that raise hands for confirmation.", status: "beta", mechanism: "Consumer-grade approval-as-cute-pet; 26k★ in 3.5 weeks off the DSH ecosystem. Third phone-approval validation in as many days.", verified: "2026-11-18" },

  // ── 10 durable execution ───────────────────────────────────────────────────
  { layer: "10", name: "Temporal", repo: "temporalio/temporal", form: "durable runtime", what: "The durable-execution incumbent agents increasingly run on.", status: "production" },
  { layer: "10", name: "Restate", repo: "restatedev/restate", form: "durable runtime", what: "Lighter-weight durable execution.", status: "production" },
  { layer: "10", name: "dapr-agents", repo: "dapr/dapr-agents", form: "framework", what: "Dapr's agent building blocks.", status: "beta" },

  // ── 11 sandboxing & substrate ──────────────────────────────────────────────
  { layer: "11", name: "Agent Substrate", repo: "agent-substrate/substrate", form: "substrate", what: "Sandboxed execution substrate (actors) — what google/ax runs tasks on.", status: "beta" },
  { layer: "11", name: "worktree + bwrap pattern", repo: "vicfei/dsh-super-agent", form: "pattern", what: "Per-ticket git worktrees + bubblewrap namespaces with network kill — the lightweight end of the isolation spectrum.", status: "production", verified: "2026-11-18" },

  // ── 12 observability & diaries ─────────────────────────────────────────────
  { layer: "12", name: "agentdiary", repo: "vicfei/agentdiary", form: "CLI", what: "Your agents keep a diary — in your own git repo. Append-only entries, snapshot memory, CI-grade verify.", status: "beta", mechanism: "Directory contract (sessions/ append-only + memory/ snapshot + agentdiary.toml); zero-dep offline fast paths; scan tiers; same entry spelling as the DSH plugin.", verified: "2026-11-18" },
  { layer: "12", name: "dsh-agentdiary-plugin", repo: "vicfei/agentdiary-dsh-plugin", form: "DSH plugin", what: "agentdiary writer inside DeepSeek Harness — one rich entry per settled turn.", status: "beta", mechanism: "Keys on turn/end settlement (reason ∈ completed/error/max-tokens/aborted); active-duration accounting (idle gaps capped at 15 min); pure core + ~100-line Cordis glue.", verified: "2026-11-18" },
  { layer: "12", name: "dsh-evidence-plugin", repo: "vicfei/dsh-evidence-plugin", form: "DSH plugin", what: "Every session transition lands in a hash-chained ledger in your own git repo.", status: "beta", mechanism: "entryHash = sha256(kind⟟payload⟟prevHash) + head anchor; live-smoked 242-row chain with auto-commits.", verified: "2026-11-18" },
  { layer: "12", name: "agent-diary", repo: "viandikafauzi/agent-diary", form: "CLI", what: "Sentiment + interaction analysis of agent conversation logs → HTML daily report.", status: "beta", note: "adjacent: analysis-on-logs, not record-of-work" },

  // ── 13 governance ──────────────────────────────────────────────────────────
  { layer: "13", name: "dsh-super-agent", repo: "vicfei/dsh-super-agent", form: "governance daemon", what: "Admission control & the earned-autonomy ladder for any CLI agent — the (currently only) resident of this layer.", status: "beta", mechanism: "Deterministic admission table (scope×cell) → slow-path assessment (BYO LLM or BYO judge via logprob probability mass) → observe/auto ladder with per-scope rungs → hash-chained event ledger (dsh events verify) → IM human surface (digit approvals). Messages cannot change permissions — host-enforced policy only.", adopted: ["4-engine dogfood fleet", "merged bot PRs on 2 repos"], verified: "2026-11-18" },
  { layer: "13", name: "Piccolo", repo: "agentscope-ai/Piccolo", form: "decision models", what: "AgentScope's decision models for agent tool review (4B/9B/27B) — the judge as a model class.", status: "beta", note: "model-layer entrant; pairs with governance layers as the pluggable judge" },
];
