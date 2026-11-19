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
// README layer-index tables with a machine-generated "representative projects" column:
// top-2 entries per layer BY STARS from metrics.json — data decides, not taste (EDITORIAL-POLICY §4).
const fmtStars = (n) => (n >= 1000 ? `${Math.round(n / 100) / 10}k★` : `${n}★`);
// A repo represents its FIRST layer only (DSH's agent-team belongs to 06's DSH pick, not 07's) —
// otherwise package-style entries inherit the host repo's stars and double-count.
const seenRepos = new Set();
const topByStars = (layerId) => ENTRIES
  .filter((e) => e.layer === layerId && !seenRepos.has(e.repo) && !e.noRep)
  .map((e) => ({ e, stars: Number(m(e.repo, "stars")) || 0 }))
  .sort((a, b) => b.stars - a.stars)
  .slice(0, 2)
  .map(({ e, stars }) => { seenRepos.add(e.repo); return `[${e.name}](https://github.com/${e.repo}) ${fmtStars(stars)}`; });
for (const [file, lang] of [[join(root, "README.md"), "en"], [join(root, "README.zh-CN.md"), "zh"]]) {
  let readme = readFileSync(file, "utf8");
  const rows = LAYERS.map((l) => {
    const name = lang === "zh" ? l.zhName : l.name;
    const q = lang === "zh" ? l.zhQ : l.q;
    const reps = topByStars(l.id).join(" · ");
    return `| [${l.id}](atlas/${l.id}-${l.slug}.md) | ${name} | ${q} | ${reps} |`;
  }).join("\n");
  const table = (lang === "en"
    ? `| # | Layer | The question it answers | Representative projects |\n|---|---|---|---|\n${rows}`
    : `| # | 层 | 回答的问题 | 代表项目 |\n|---|---|---|---|\n${rows}`);
  readme = readme.replace(/<!-- BEGIN layer-index -->[\s\S]*?<!-- END layer-index -->/, `<!-- BEGIN layer-index -->\n${table}\n<!-- END layer-index -->`);
  writeFileSync(file, readme);
}
console.log(`rendered ${LAYERS.length} layer files, ${ENTRIES.length} entries, 2 README indexes`);
