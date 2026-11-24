/* Invariants for the rebuilt Forces note (notes-ph01f-a/b):
   1. the eleven spec statements are byte-identical to the ones the
      old parts carried — the spec text never drifts
   2. every h text and worked-card title is unique site-wide (across
      the four imported docs)
   3. every worked card cites a WPH11 session
   4. every card's ms quote survives forces-quotes.ts (run that
      script separately) */
import { readFileSync } from "node:fs";

const read = (f: string) => readFileSync(f, "utf8");

/* pull `spec: / statement: / title: /` triplets out of a sections file */
function sections(src: string): { spec: string; statement: string; title: string }[] {
  const out: { spec: string; statement: string; title: string }[] = [];
  const re = /spec:\s*"(\d+)",\s*statement:\s*"((?:[^"\\]|\\.)*)",\s*title:\s*"((?:[^"\\]|\\.)*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push({ spec: m[1], statement: m[2], title: m[3] });
  return out;
}

const oldA = sections(read("src/lib/spectra/content/notes-ph01-a.ts"));
const oldB = sections(read("src/lib/spectra/content/notes-ph01-b.ts"));
const oldAll = new Map([...oldA, ...oldB].map((s) => [s.spec, s]));
const newA = sections(read("src/lib/spectra/content/notes-ph01f-a.ts"));
const newB = sections(read("src/lib/spectra/content/notes-ph01f-b.ts"));
const newC = sections(read("src/lib/spectra/content/notes-ph01f-c.ts"));
const newD = sections(read("src/lib/spectra/content/notes-ph01f-d.ts"));
const newAll = new Map([...newA, ...newB, ...newC, ...newD].map((s) => [s.spec, s]));

let fail = 0;
for (let i = 1; i <= 11; i++) {
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

/* — h texts + worked titles: unique within each doc, and the
   rebuilt Forces doc's h texts unique across the whole shelf.
   (Two intentional repeats exist outside t01 — the two-part
   Materials doc re-uses "The method" and "Design choices" across
   its own parts, and t03/t04 both close with "The marking rules
   that never change". Those live in the exemption list.) */
const DOCS: { name: string; files: string[] }[] = [
  { name: "t01 Forces", files: ["src/lib/spectra/content/notes-ph01f-a.ts", "src/lib/spectra/content/notes-ph01f-b.ts", "src/lib/spectra/content/notes-ph01f-c.ts", "src/lib/spectra/content/notes-ph01f-d.ts"] },
  { name: "t02 M&M", files: ["src/lib/spectra/content/notes-ph01-c.ts"] },
  { name: "t03 WEP", files: ["src/lib/spectra/content/notes-ph01-d.ts"] },
  { name: "t04 Materials", files: ["src/lib/spectra/content/notes-ph02-a.ts", "src/lib/spectra/content/notes-ph02-b.ts"] },
];
const LANDING = "src/lib/spectra/content/wph11.ts";
const EXEMPT_CROSS_DOC = new Set(["The method", "Design choices", "The marking rules that never change"]);

function textsOf(src: string): { kind: string; text: string }[] {
  const out: { kind: string; text: string }[] = [];
  for (const m of src.matchAll(/\{ k: "h", text: "([^"]+)" \}/g)) out.push({ kind: "h", text: m[1] });
  for (const m of src.matchAll(/k: "worked",\s*\n\s*title: "([^"]+)"/g)) out.push({ kind: "worked", text: m[1] });
  return out;
}

const globalSeen = new Map<string, string>();
for (const doc of DOCS) {
  const docSeen = new Map<string, string>();
  /* within-doc uniqueness is enforced on the rebuilt doc (t01);
     the untouched docs keep their own established patterns */
  const enforceWithin = doc.name === "t01 Forces";
  for (const f of doc.files) {
    for (const t of textsOf(read(f))) {
      const key = `${t.kind}:${t.text}`;
      if (enforceWithin && docSeen.has(key)) {
        console.log(`FAIL  duplicate within ${doc.name}: ${t.kind} "${t.text}" (${f}, also ${docSeen.get(key)})`);
        fail++;
      }
      docSeen.set(key, f);
      if (doc.name !== "t01 Forces" && EXEMPT_CROSS_DOC.has(t.text)) continue;
      if (globalSeen.has(key) && globalSeen.get(key) !== doc.name) {
        console.log(`FAIL  cross-doc repeat: ${t.kind} "${t.text}" in ${doc.name} (first in ${globalSeen.get(key)})`);
        fail++;
      }
      globalSeen.set(key, doc.name);
    }
  }
}
/* the four landing cards in the registry — no h of theirs may
   collide with a doc's h of the same topic */
const landingSrc = read(LANDING);
for (const m of landingSrc.matchAll(/\{\s*\n\s*k: "h", text: "([^"]+)"\s*\n\s*\}/g)) {
  const key = `h:${m[1]}`;
  if (globalSeen.has(key)) {
    console.log(`FAIL  landing h "${m[1]}" collides with ${globalSeen.get(key)}`);
    fail++;
  }
}

/* — every worked card cites a WPH11 session (01A regional papers included) — */
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
