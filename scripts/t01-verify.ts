/* Verify the worked-card conversion and the three-way topic split
   kept the invariants:
   1. spec statements + section titles byte-identical to commit 431fb03
      — since the 2026-11-22 split, compared as one ordered sequence
      across the four mechanics part files (a: 1–7 Forces, b: 8–11
      Forces, c: 12–16 Moments and momentum, d: 17–22 Work, energy
      and power)
   2. every h text and worked-card title unique site-wide
   3. every worked card carries a WPH11 session citation
   4. every scenario h that used to exist is either gone or now a card title
*/
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const FILES = [
  "src/lib/spectra/content/notes-ph01-a.ts",
  "src/lib/spectra/content/notes-ph01-b.ts",
  "src/lib/spectra/content/notes-ph01-c.ts",
  "src/lib/spectra/content/notes-ph01-d.ts",
  "src/lib/spectra/content/notes-ph02-a.ts",
  "src/lib/spectra/content/notes-ph02-b.ts",
];

const read = (f: string) => readFileSync(f, "utf8");
/* notes-ph01-d.ts has no past at 431fb03 — its old content rode
   inside the old part c, so the baseline already counted it */
const old = (f: string) => {
  try {
    return execSync(`git show 431fb03:${f}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
  } catch {
    return "";
  }
};

// section-level statement: / title: pairs (spec sections), byte-exact
function sectionPairs(src: string) {
  const out: [string, string][] = [];
  const re = /spec:\s*"([^"]+)",\s*statement:\s*"((?:[^"\\]|\\.)*)",\s*title:\s*"((?:[^"\\]|\\.)*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push([m[1], m[2] + "||" + m[3]]);
  return out;
}

let fails = 0;
const bad = (msg: string) => { console.log("FAIL: " + msg); fails++; };

/* the mechanics split moved whole sections between part files, so
   the old-vs-new comparison runs over the CONCATENATED sequence:
   old a+b+c (22 sections, in order) vs new a+b+c+d (same 22 in the
   same order — the split reordered nothing) */
{
  const oldFiles = FILES.slice(0, 3);
  const newFiles = FILES.slice(0, 4);
  const a = oldFiles.flatMap((f) => sectionPairs(old(f)));
  const b = newFiles.flatMap((f) => sectionPairs(read(f)));
  if (a.length !== b.length) { bad(`mechanics sections ${a.length} -> ${b.length}`); }
  else {
    for (let i = 0; i < a.length; i++) {
      if (a[i][0] !== b[i][0]) bad(`#${i}: spec ${a[i][0]} -> ${b[i][0]}`);
      if (a[i][1] !== b[i][1]) bad(`#${i}: statement/title drift\n  old: ${a[i][1].slice(0, 90)}\n  new: ${b[i][1].slice(0, 90)}`);
    }
    console.log(`ok: mechanics 22 sections, statements + titles byte-identical across ${newFiles.length} part files`);
  }
}

// uniqueness of h texts and worked titles site-wide
// (duplicates that already existed at 431fb03 are pre-existing, not regressions)
function hTextsOf(src: string) {
  const m = new Map<string, number>();
  for (const hit of src.matchAll(/\{ k: "h", text: "((?:[^"\\]|\\.)*)" \}/g)) {
    const t = hit[1].replace(/\\"/g, '"').replace(/\\'/g, "'");
    m.set(t, (m.get(t) ?? 0) + 1);
  }
  return m;
}
const preExistingDupes = new Set<string>();
{
  const combined = new Map<string, number>();
  for (const f of FILES) {
    const oldSrc = old(f);
    for (const [t, n] of hTextsOf(oldSrc)) combined.set(t, (combined.get(t) ?? 0) + n);
  }
  for (const [t, n] of combined) if (n > 1) preExistingDupes.add(t);
}
const hTexts = new Map<string, number>();
const workedTitles = new Map<string, number>();
for (const f of FILES) {
  const src = read(f);
  for (const [t, n] of hTextsOf(src)) hTexts.set(t, (hTexts.get(t) ?? 0) + 1);
  for (const m of src.matchAll(/k: "worked",\s*title:\s*"((?:[^"\\]|\\.)*)"/g)) {
    const t = m[1].replace(/\\"/g, '"').replace(/\\'/g, "'");
    workedTitles.set(t, (workedTitles.get(t) ?? 0) + 1);
  }
}
for (const [t, n] of hTexts) if (n > 1 && !preExistingDupes.has(t)) bad(`h text used ${n}×: ${t}`);
for (const [t, n] of workedTitles) if (n > 1) bad(`worked title used ${n}×: ${t}`);
const hSet = new Set(hTexts.keys());
for (const t of workedTitles.keys()) if (hSet.has(t)) bad(`card title collides with an h text: ${t}`);
console.log(`h texts: ${hTexts.size} · worked titles: ${workedTitles.size} — uniqueness checked (pre-existing dupes aside: ${[...preExistingDupes].join(", ")})`);

// every worked card cites a WPH11 session, and no h leftover scenario in ph01
let cards = 0;
for (const f of FILES.slice(0, 4)) {
  const src = read(f);
  for (const m of src.matchAll(/k: "worked",[\s\S]*?question:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)) {
    cards++;
    if (!/WPH11 (January|February|March|April|May|June|July|August|September|October|November|December) \d{4}, Q\d+/.test(m[1]))
      bad(`${f}: card without WPH11 citation: ${m[1].slice(0, 60)}…`);
  }
}
console.log(`worked cards: ${cards} — citations checked`);

// old scenario h-groups of ph01 (from 431fb03) that are not teaching groups
const OLD_TEACHING = new Set([
  "Drawing graphs", "How the angle decides the function", "Terminal velocity",
  "Perpendicular distances", "Work done at an angle", "Efficiency calculations",
  "The marking rules that never change", "A ball falling through a liquid",
]);
// renamed on purpose to match the paper's own scenario (a person on skis, not a trolley)
const RENAMED = new Map([["A trolley on a slope", "A skier on a slope"]]);
const leftovers: string[] = [];
for (const f of FILES.slice(0, 3)) {
  const src = old(f);
  for (const m of src.matchAll(/\{ k: "h", text: "((?:[^"\\]|\\.)*)" \}/g)) {
    const t = m[1].replace(/\\"/g, '"').replace(/\\'/g, "'");
    if (!OLD_TEACHING.has(t) && !workedTitles.has(t) && !workedTitles.has(RENAMED.get(t) ?? "")) leftovers.push(`${f}: ${t}`);
  }
}
if (leftovers.length) leftovers.forEach((l) => bad("old scenario h not a card: " + l));
else console.log("every old scenario h is now a worked card title (or a kept teaching group)");

console.log(fails === 0 ? "ALL CHECKS PASS" : `${fails} FAILURES`);
process.exit(fails === 0 ? 0 : 1);
