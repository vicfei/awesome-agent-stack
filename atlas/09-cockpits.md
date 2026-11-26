# 09 · Cockpits

> The surfaces humans steer fleets from — web panels, phone apps, desktop decks.

| entry | form | status | ★ | 90d commits | last push | governance-adjacent |
|---|---|---|---|---|---|---|
| [t3code](https://github.com/pingdotgg/t3code) | cockpit | 🟢 production | 80675 | 11267 | 2026-11-26 | ✓ |
| [dsh-Go](https://github.com/ccch1mneyyy/dsh-Go) | mobile cockpit | 🟡 beta | 32605 | 4272 | 2026-11-26 | ✓ |
| [Paseo](https://github.com/getpaseo/paseo) | cockpit | 🟡 beta | 25676 | 1663 | 2026-11-26 | ✗ |
| [herdr](https://github.com/herdrdev/herdr) | cockpit (terminal fleet) | 🟡 beta | 53026 | 407 | 2026-11-19 | ✓ |

### notes
- **t3code** — Control Claude Code/Codex/… from any device — approval-first UX, 64k★ in 9 months. *(source-verified 2026-11-18)*
  - One server + desktop/web/iOS/Android; hero interaction IS phone approval. Trust = approval-as-interrupt only; no admission policy/evidence/observe ladder.
- **dsh-Go** — DeepSeek Harness in your pocket — phone-native DSH + desktop pets that raise hands for confirmation. *(source-verified 2026-11-18)*
  - Consumer-grade approval-as-cute-pet; 26k★ in 3.5 weeks off the DSH ecosystem. Third phone-approval validation in as many days.
- **Paseo** — Agent cockpit with deepening plugin API (sidebar views, composer controls). *(not yet source-verified)*
- **herdr** — The runtime coding agents live on — one window owning many agents' terminals: a background server keeps sessions alive across detach and restart, and every pane reports working/blocked/idle. *(source-verified 2026-11-27)*
  - Single Rust binary + background server (tmux-shaped); persisted layouts restore after SSH drop or reboot with per-agent resume commands (herdr-api.schema.json: 'resumes this agent's session after a Herdr restart' — original processes do not survive); agents drive herdr itself over a socket API — spawn panes, prompt each other, wait until another is genuinely blocked; harness-agnostic (owns claude code/codex/opencode/… terminals, never wraps them). Trust surface = surfacing blocked-on-human (approval-as-interrupt); no admission policy, no evidence ledger.
