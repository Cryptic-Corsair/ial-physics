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
/* the group heading sits above the worked cards at the end of each
   spec section — one per section, by design (owner instruction:
   worked examples stay at the end of the section) */
const EXEMPT_WITHIN = new Set(["Worked examples"]);

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
      if (
        doc.enforceWithin &&
        !EXEMPT_WITHIN.has(t.text) &&
        docSeen.has(key)
      ) {
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

/* — the worked cards sit at the end of their spec section —
   after the "Worked examples" heading only worked cards may
   follow, until the section ends (owner instruction: worked
   examples stay at the end of the section, only in topic 4) */
const t04Files = DOCS.find((d) => d.name === "t04 fluids")!.files;
for (const f of t04Files) {
  const src = read(f);
  /* each spec section's chunk of source */
  const marks = [...src.matchAll(/\n  \{\n    spec: "/g)].map((m) => m.index!);
  const chunks = marks.map((start, i) =>
    src.slice(start, i + 1 < marks.length ? marks[i + 1] : undefined),
  );
  for (const chunk of chunks) {
    /* ordered positions of the h tokens, the worked cards and every
       other block kind inside this section's source */
    let folded = false;
    const tokens: { pos: number; kind: string }[] = [];
    for (const m of chunk.matchAll(/\{ k: "h", text: "(?:[^"]+)" \}/g))
      tokens.push({ pos: m.index!, kind: "h" });
    for (const m of chunk.matchAll(/k: "worked",/g))
      tokens.push({ pos: m.index!, kind: "worked" });
    for (const m of chunk.matchAll(/\{\s*\n?\s*k: "(?!h"|worked")[a-z]+"/g))
      tokens.push({ pos: m.index!, kind: "block" });
    tokens.sort((a, b) => a.pos - b.pos);
    for (const t of tokens) {
      if (t.kind === "h") {
        /* is this h the group heading? */
        const seg = chunk.slice(t.pos, t.pos + 40);
        if (seg.includes('"Worked examples"')) folded = true;
        else if (folded) {
          console.log(`FAIL  ${f}: a teaching heading follows the worked cards (cards must end the section)`);
          fail++;
          folded = false;
        }
      } else if (t.kind === "block" && folded) {
        console.log(`FAIL  ${f}: a non-worked block follows the worked cards (cards must end the section)`);
        fail++;
        folded = false;
      }
    }
  }
}

console.log(`\n${fail === 0 ? "ALL PASS" : fail + " FAILURES"} — statements byte-identical, h/worked uniqueness, citations, cards at the end of their sections`);
if (fail > 0) process.exit(1);
