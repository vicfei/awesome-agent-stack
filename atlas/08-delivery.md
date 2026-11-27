# 08 · Delivery & SOP

> Turning agent work into governed deliveries: pipelines, human gates, SOPs.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [LoopForge](https://github.com/Tencent/LoopForge) | delivery orchestrator | 🟡 beta | 6011 | 456 | 2026-11-27 | ✓ |

### notes
- **LoopForge** — Self-hosted coding-agent delivery: SOP engine with Agent/Script/Human-gate nodes, per-conversation sandboxes. *(source-verified 2026-11-19)*
  - Positioning moved to 'human on the loop' (pause/steer/take over, approval gates, needs-review inbox) — but supervision is in-flow and manual: human-INITIATED flows (no event-driven admission), permission modes undocumented, workflow state rather than tamper-evident audit, multi-tenant safety explicitly disclaimed. On-the-loop is UX; earned autonomy is absent. Fast riser: 2.7k→4k stars in two days (Tencent stacking trpc-agent-go + LoopForge).
