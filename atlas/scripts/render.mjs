// render.mjs — entries + metrics → per-layer markdown tables. Pure, zero-dep, deterministic.
// Usage: node atlas/scripts/render.mjs [--metrics atlas/metrics.json]
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { LAYERS, ENTRIES } from "../entries/data.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const metricsPath = process.argv.includes("--metrics") ? process.argv[process.argv.indexOf("--metrics") + 1] : join(root, "atlas", "metrics.json");
let metrics = {};
try { metrics = JSON.parse(readFileSync(metricsPath, "utf8")); } catch { /* first run: tables render with — */ }

const m = (repo, k) => metrics[repo]?.[k] ?? "—";
const statusIcon = { production: "🟢", beta: "🟡", experimental: "⚪" };
const gov = (e) => e.layer === "13" || /admission|policy|ledger|evidence|approval/i.test((e.mechanism ?? "") + (e.what ?? ""));

mkdirSync(join(root, "atlas"), { recursive: true });
for (const layer of LAYERS) {
  const rows = ENTRIES.filter((e) => e.layer === layer.id)
    .map((e) => ({ e, activity: m(e.repo, "commits90d") === "—" ? -1 : Number(m(e.repo, "commits90d")) }))
    .sort((a, b) => b.activity - a.activity); // default sort: 90d activity, NOT stars — editorial stance
  const L = [`# ${layer.id} · ${layer.name}`, "", `> ${layer.mission}`, ""];
  L.push(`| entry | form | status | ★ | 90d commits | last push | governance-adjacent |`);
  L.push(`|---|---|---|---|---|---|---|`);
  for (const { e } of rows) {
    L.push(`| [${e.name}](https://github.com/${e.repo}) | ${e.form} | ${statusIcon[e.status] ?? "⚪"} ${e.status} | ${m(e.repo, "stars")} | ${m(e.repo, "commits90d")} | ${String(m(e.repo, "pushed") ?? "—").slice(0, 10)} | ${gov(e) ? "✓" : "✗"} |`);
  }
  L.push("");
  L.push(`### notes`);
  for (const { e } of rows) {
    L.push(`- **${e.name}** — ${e.what}${e.verified ? ` *(source-verified ${e.verified})*` : " *(not yet source-verified)*"}`);
    if (e.mechanism) L.push(`  - ${e.mechanism}`);
    if (e.adopted?.length) L.push(`  - adopted by: ${e.adopted.join(", ")}`);
    if (e.note) L.push(`  - note: ${e.note}`);
  }
  L.push("");
  writeFileSync(join(root, "atlas", `${layer.id}-${layer.slug}.md`), L.join("\n"));
}
console.log(`rendered ${LAYERS.length} layer files, ${ENTRIES.length} entries`);
