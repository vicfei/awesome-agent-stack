# Editorial policy — the authority contract

This list claims to be *source-verified* and *kept live*. Both claims are only as good as the rules behind them. These are the rules.

## 1. Source verification marks

Every entry carries one of:

- **`source-verified <date>`** — a maintainer read the source, ran the thing, or drove its interface, and wrote the `mechanism` note from that. The date is when.
- **`not yet source-verified`** — the entry's `what` line comes from public docs/README only. Honest incompleteness beats fake authority.

## 2. Status rubric (atlas/criteria.md holds the long form)

- 🟢 **production** — real production adoption + ≥6 months maintenance + breaking changes managed
- 🟡 **beta** — real usage, active development, rough edges
- ⚪ **experimental** — early, pre-adoption, or explicitly unstable

## 3. Same ruler for everyone — including ourselves

Maintainer-affiliated projects (dsh-super-agent, agentdiary, the plugins) are listed under **the same criteria, the same table columns, and the same editorial tone** as everything else. They do not get hero placement, a pinned position, or adjective inflation. Their numbers are refreshed by the same script.

## 4. Inclusion & ordering

- Inclusion is generous, judgment is strict.
- Tables default-sort by **90-day commit activity, not stars** — star counts reflect audience, not maintenance. Stars are shown, never worshipped.
- The `governance-adjacent` column is a factual flag (does the project ship policy / evidence / human-approval surfaces), not an endorsement.

## 5. Corrections & contributions

- Issues and PRs welcome; corrections get priority (target: 72h first response).
- Contributors are credited in the CHANGELOG of the release they landed in.
- Adding an entry: edit `atlas/entries/data.mjs` (editorial fields only — `atlas/metrics.json` is machine-written and hand-edits will be reverted).

## 6. Zero commercial placement

No paid inclusion, no sponsored ordering, no vendor review of their own entry before publication.

## 7. The heartbeat

`atlas/metrics.json` and the rendered tables are refreshed weekly by automation (`.github/workflows/refresh.yml`) via a pull request a human merges. The update ledger (`ledger/`) records each refresh. If the heartbeat stops for more than two cycles, treat the tables as stale and file an issue — that's the contract.
