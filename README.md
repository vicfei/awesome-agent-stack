# awesome-agent-stack

**The source-verified map of the agent stack — layered, compared, and kept live by a governed agent.**

Not another link dump. Thirteen layers from protocols to governance, each with a machine-refreshed comparison table, and editorial notes we only write after reading the source (the ones we haven't read yet say so).

> The governance, admission & evidence layer (13) exists in **no other catalog** — we checked. Every map we could find stops at orchestration. This one doesn't.

## The layers

<!-- BEGIN layer-index -->
| # | Layer | The question it answers | Representative projects |
|---|---|---|---|
| [01](atlas/01-foundations.md) | Foundations & formats | What conventions does everything borrow? | [SKILL.md](https://github.com/anthropics/skills) 197.6k★ · [AGENTS.md](https://github.com/openai/agents.md) 25.6k★ |
| [02](atlas/02-tool-context.md) | Tool & context | How do agents reach tools? (the settled layer) | [MCP](https://github.com/modelcontextprotocol/modelcontextprotocol) 9.7k★ · [NLWeb](https://github.com/microsoft/nlweb) 6.3k★ |
| [03](atlas/03-agent-to-agent.md) | Agent-to-agent | How do independent agents find & delegate? | [A2A](https://github.com/a2aproject/A2A) 26.6k★ · [ANP](https://github.com/agent-network-protocol/ANP) 359★ |
| [04](atlas/04-agent-to-ui.md) | Agent-to-UI & editor | How do interfaces drive agents? | [AG-UI](https://github.com/ag-ui-protocol/ag-ui) 20.6k★ · [Agent Client Protocol](https://github.com/zed-industries/agent-client-protocol) 4.7k★ |
| [05](atlas/05-harness-interfaces.md) | Harness interfaces | One API for ANY harness — the contested slot | [Agent Protocol](https://github.com/langchain-ai/agent-protocol) 698★ · [OAR](https://github.com/botiverse/oar) 662★ |
| [06](atlas/06-runtimes.md) | Runtimes & harnesses | What actually runs the model↔tools↔files loop? | [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 284.2k★ · [OpenCode](https://github.com/sst/opencode) 228k★ |
| [07](atlas/07-orchestration.md) | Orchestration & swarms | How do many agents coordinate? | [LangGraph](https://github.com/langchain-ai/langgraph) 45.2k★ · [AX (Agent Executor)](https://github.com/google/ax) 14.8k★ |
| [08](atlas/08-delivery.md) | Delivery & SOP | How does agent work become governed deliveries? | [LoopForge](https://github.com/Tencent/LoopForge) 4k★ |
| [09](atlas/09-cockpits.md) | Cockpits | Where do humans steer fleets from? | [t3code](https://github.com/pingdotgg/t3code) 66.2k★ · [dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) 28.1k★ |
| [10](atlas/10-durable.md) | Durable execution | What survives the crash? | [Temporal](https://github.com/temporalio/temporal) 24.5k★ · [LoopX](https://github.com/loopx-project/loopx) 6.7k★ |
| [11](atlas/11-sandboxing.md) | Sandboxing & substrate | How is untrusted work isolated? | [Agent Substrate](https://github.com/agent-substrate/substrate) 7.8k★ |
| [12](atlas/12-observability.md) | Observability & diaries | What did the agents actually do? | [agentdiary](https://github.com/vicfei/agentdiary) 1★ · [dsh-agentdiary-plugin](https://github.com/vicfei/agentdiary-dsh-plugin) 0★ |
| [13](atlas/13-governance.md) | Governance, admission & evidence | Who may act, on what evidence, approved by whom? | [Piccolo](https://github.com/agentscope-ai/Piccolo) 58★ · [dsh-super-agent](https://github.com/vicfei/dsh-super-agent) 26★ |
<!-- END layer-index -->

## How to read it

- Tables sort by **90-day commits** (maintenance), not stars (audience). Stars are shown; they're just not the ranking.
- **`source-verified <date>`** = we read the source / ran it and wrote the mechanism note ourselves. **`not yet source-verified`** = docs-level only. No pretending.
- The **governance-adjacent** column flags whether an entry ships policy / evidence / human-approval surfaces — most rows are ✗, and that's the point: the map makes the gap visible.

## Quick decisions

- *I'm picking a coding agent runtime* → [06](atlas/06-runtimes.md)
- *I'm building a tool/app that must drive several of them* → [05](atlas/05-harness-interfaces.md) first, [04](atlas/04-agent-to-ui.md) if it's an editor
- *I want my agents to cooperate* → [07](atlas/07-orchestration.md)
- *I need to trust what they did (audit, evidence, approval)* → [13](atlas/13-governance.md) and [12](atlas/12-observability.md)
- *I run agent workloads in a cluster* → [07](atlas/07-orchestration.md) + [10](atlas/10-durable.md) + [11](atlas/11-sandboxing.md)

## The heartbeat

Metrics refresh weekly via automation (`atlas/scripts/refresh.mjs` → PR → human merge); every refresh lands in the [update ledger](ledger/updates.jsonl). Rules for all of this live in [EDITORIAL-POLICY.md](EDITORIAL-POLICY.md) — including the part where maintainer-affiliated projects get the same ruler as everyone else.

## Contributing

Add entries via PR to `atlas/entries/data.mjs` (editorial fields only). Corrections get priority. See [EDITORIAL-POLICY.md](EDITORIAL-POLICY.md).

## Credits

- Layer taxonomy stands on the shoulders of [awesome-agent-protocols](https://github.com/insodimension/awesome-agent-protocols) (extended here from protocols to the full stack).
- Content license: CC-BY-4.0. Automation code: MIT.
