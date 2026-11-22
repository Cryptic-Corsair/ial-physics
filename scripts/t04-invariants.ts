/* Invariants for the rebuilt Topic 4 note (notes-ph04-a/b/c):
   1. the four fluids spec statements (23–26) are byte-identical to
      the ones the old ph02-a carried — the spec text never drifts
   2. every h text and worked-card title is unique site-wide (across
      the four imported docs)
   3. every worked card cites a WPH11 session
   4. every card's ms quote survives t04-quotes.ts (run separately) */
import { readFileSync } from "node:fs";

const read = (f: string) => readFileSync(f, "utf8");

function sections(src: string): { spec: string; statement: string; title: string }[] {
  const out: { spec: string; statement: string; title: string }[] = [];
  const re = /spec:\s*"(\d+)",\s*statement:\s*"((?:[^"\\]|\\.)*)",\s*title:\s*"((?:[^"\\]|\\.)*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push({ spec: m[1], statement: m[2], title: m[3] });
  return out;
}

const oldA = sections(read("src/lib/spectra/content/notes-ph02-a.ts"));
const oldAll = new Map(oldA.map((s) => [s.spec, s]));
const newA = sections(read("src/lib/spectra/content/notes-ph04-a.ts"));
const newB = sections(read("src/lib/spectra/content/notes-ph04-b.ts"));
const newC = sections(read("src/lib/spectra/content/notes-ph04-c.ts"));
const newAll = new Map([...newA, ...newB, ...newC].map((s) => [s.spec, s]));

let fail = 0;
for (let i = 23; i <= 26; i++) {
  const o = oldAll.get(String(i));
  const n = newAll.get(String(i));
  if (!o || !n) {
    console.log(`FAIL  spec ${i}: missing section (old ${!!o}, new ${!!n})`);
    fail++;
    continue;
  }
  if (o.statement !== n.statement) {
    console.log(`FAIL  spec ${i}: statement drifted\n  old: ${o.statement}\n  new: ${n.statement}`);
    fail++;
  }
}

/* — h texts + worked titles: unique within the rebuilt doc, and
   unique across the whole shelf. (t02/t03 keep their own
   established patterns; their cross-doc repeats stay in the
   exemption list.) */
const DOCS: { name: string; files: string[]; enforceWithin: boolean }[] = [
  {
    name: "t01 Forces",
    files: ["src/lib/spectra/content/notes-ph01f-a.ts", "src/lib/spectra/content/notes-ph01f-b.ts"],
    enforceWithin: false,
  },
  { name: "t02 M&M", files: ["src/lib/spectra/content/notes-ph01-c.ts"], enforceWithin: false },
  { name: "t03 WEP", files: ["src/lib/spectra/content/notes-ph01-d.ts"], enforceWithin: false },
  {
    name: "t04 fluids",
    files: [
      "src/lib/spectra/content/notes-ph04-a.ts",
      "src/lib/spectra/content/notes-ph04-b.ts",
      "src/lib/spectra/content/notes-ph04-c.ts",
    ],
    enforceWithin: true,
  },
];
const LANDING = "src/lib/spectra/content/wph11.ts";
const EXEMPT_CROSS_DOC = new Set(["The marking rules that never change"]);

function textsOf(src: string): { kind: string; text: string }[] {
  const out: { kind: string; text: string }[] = [];
  for (const m of src.matchAll(/\{ k: "h", text: "([^"]+)" \}/g)) out.push({ kind: "h", text: m[1] });
  for (const m of src.matchAll(/k: "worked",\s*\n\s*title: "([^"]+)"/g)) out.push({ kind: "worked", text: m[1] });
  return out;
}

const globalSeen = new Map<string, string>();
for (const doc of DOCS) {
  const docSeen = new Map<string, string>();
  for (const f of doc.files) {
    for (const t of textsOf(read(f))) {
      const key = `${t.kind}:${t.text}`;
      if (doc.enforceWithin && docSeen.has(key)) {
        console.log(`FAIL  duplicate within ${doc.name}: ${t.kind} "${t.text}" (${f}, also ${docSeen.get(key)})`);
        fail++;
      }
      docSeen.set(key, f);
      if (!doc.enforceWithin && EXEMPT_CROSS_DOC.has(t.text)) continue;
      if (globalSeen.has(key) && globalSeen.get(key) !== doc.name) {
        console.log(`FAIL  cross-doc repeat: ${t.kind} "${t.text}" in ${doc.name} (first in ${globalSeen.get(key)})`);
        fail++;
      }
      globalSeen.set(key, doc.name);
    }
  }
}
/* the landing cards in the registry — no h of theirs may collide
   with a doc's h of the same topic */
const landingSrc = read(LANDING);
for (const m of landingSrc.matchAll(/\{\s*\n\s*k: "h", text: "([^"]+)"\s*\n\s*\}/g)) {
  const key = `h:${m[1]}`;
  if (globalSeen.has(key)) {
    console.log(`FAIL  landing h "${m[1]}" collides with ${globalSeen.get(key)}`);
    fail++;
  }
}

/* — every worked card cites a WPH11 session — */
const citeRe = /WPH11 (?:January|June|October) \d{4}(?: 01A)?, Q\d+/;
for (const doc of DOCS) {
  for (const f of doc.files) {
    const src = read(f);
    for (const m of src.matchAll(/k: "worked",\s*\n\s*title: "([^"]+)"[\s\S]*?question:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g)) {
      if (!citeRe.test(m[2])) {
        console.log(`FAIL  worked "${m[1]}" (${f}) carries no WPH11 citation`);
        fail++;
      }
    }
  }
}

console.log(`\n${fail === 0 ? "ALL PASS" : fail + " FAILURES"} — statements byte-identical, h/worked uniqueness, citations`);
if (fail > 0) process.exit(1);
