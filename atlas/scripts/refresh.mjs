// refresh.mjs — pull repo metrics from the GitHub API and write atlas/metrics.json (auto fields only).
// Zero-dep; uses GITHUB_TOKEN if present (CI), else anonymous (rate-limited but works for a first run).
// In production this runs weekly via .github/workflows/refresh.yml and opens a PR — the atlas's heartbeat.
import { writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { LAYERS, ENTRIES } from "../entries/data.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const token = process.env.GITHUB_TOKEN;
const repos = [...new Set(ENTRIES.map((e) => e.repo))];

// commits90d via the commit list API is expensive; use the events-free proxy: pushes + releases + stars from the repo object,
// plus one commits?since= call per repo (fine for ~50 repos with a token).
const since = new Date(Date.now() - 90 * 864e5).toISOString();

let prev = {};
try { prev = JSON.parse(readFileSync(join(root, "atlas", "metrics.json"), "utf8")); } catch {}

const out = {};
let i = 0;
for (const repo of repos) {
  const headers = { accept: "application/vnd.github+json", ...(token ? { authorization: `Bearer ${token}` } : {}) };
  const meta = await (await fetch(`https://api.github.com/repos/${repo}`, { headers })).json();
  if (meta.message && !meta.stargazers_count) { out[repo] = prev[repo] ?? { error: meta.message }; continue; }
  let commits90d = 0;
  try {
    // per_page=1 + since → the Link header's rel="last" page number IS the 90d commit count (cheap, exact)
    const res = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=1&since=${since}`, { headers });
    const link = res.headers.get("link") ?? "";
    const last = /[?&]page=(\d+)>; rel="last"/.exec(link);
    commits90d = last ? Number(last[1]) : ((await res.json()).length ?? 0);
  } catch { /* keep 0 */ }
  out[repo] = {
    stars: meta.stargazers_count,
    pushed: meta.pushed_at,
    lastRelease: meta.pushed_at?.slice(0, 10) ?? null,
    commits90d: commits90d ?? 0,
    archived: meta.archived,
  };
  if (++i % 10 === 0) console.log(`  …${i}/${repos.length}`);
}
writeFileSync(join(root, "atlas", "metrics.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`metrics for ${Object.keys(out).length} repos → atlas/metrics.json`);
