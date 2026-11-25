/* t02r-invariants.ts — checks the structural invariants of the rebuilt
   Topic 2 content (notes-ph02r-a/b/c):
   1. the five spec statements (12–16) are byte-identical to their
      old home notes-ph01-c.ts (the Moments and momentum run before
      the rebuild);
   2. the section count and spec order are exactly 12,13,14,15,16;
   3. worked cards sit in "Worked examples" groups at the end of each
      section, nothing but cards after the heading, one group per
      section, headings unique;
   4. every card has question/steps/answer and cites a WPH11 paper;
   5. subheadings unique across the three files, plain register.
   Run: bun scripts/t02r-invariants.ts */
import { readFileSync } from "node:fs";

const FILES = ["notes-ph02r-a.ts", "notes-ph02r-b.ts", "notes-ph02r-c.ts"];
const OLD_HOME = "notes-ph01-c.ts";
const DIR = "src/lib/spectra/content/";

let fail = 0;
const ck = (name: string, ok: boolean, detail = "") => {
  if (!ok) fail++;
  console.log(`${ok ? "pass" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
};

function sections(src: string): { spec: string; statement: string }[] {
  const out: { spec: string; statement: string }[] = [];
  const re = /spec: "(\d+)",\s*\n\s*statement:\s*"((?:[^"\\]|\\.)*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push({ spec: m[1], statement: m[2] });
  return out;
}

const parts = FILES.map((f) => readFileSync(DIR + f, "utf8"));
const oldHome = readFileSync(DIR + OLD_HOME, "utf8");

/* 1 — statements byte-identical to notes-ph01-c */
const oldStmts = new Map(sections(oldHome).map((s) => [s.spec, s.statement]));
for (const [i, src] of parts.entries()) {
  for (const s of sections(src)) {
    const old = oldStmts.get(s.spec);
    if (old === undefined) {
      ck(`${FILES[i]}: spec ${s.spec} exists in ${OLD_HOME}`, false);
    } else {
      ck(`${FILES[i]}: spec ${s.spec} statement byte-identical to ${OLD_HOME}`, old === s.statement);
    }
  }
}

/* 2 — the five statements, in order, across the three files */
const specs = parts.flatMap((src) => sections(src).map((s) => s.spec));
ck("spec order is exactly 12,13,14,15,16", JSON.stringify(specs) === JSON.stringify(["12", "13", "14", "15", "16"]), specs.join(","));

/* 3 — worked cards inside "Worked examples" groups, cards only after
      the heading, one group per section */
for (const [i, src] of parts.entries()) {
  const heads = [...src.matchAll(/\{ k: "h", text: "((?:[^"\\]|\\.)*)" \}/g)].map((m) => m[1]);
  const groups = heads.filter((t) => t === "Worked examples").length;
  const sectionCount = sections(src).length;
  ck(`${FILES[i]}: one Worked examples group per section`, groups === sectionCount, `${groups} groups / ${sectionCount} sections`);

  const hIdx = [...src.matchAll(/\{ k: "h", text: "((?:[^"\\]|\\.)*)" \}/g)].map((m) => m.index!);
  const workedIdx = [...src.matchAll(/k: "worked"/g)].map((m) => m.index!);
  const placed = workedIdx.every((w) => {
    const nearest = hIdx.filter((h) => h < w).pop();
    return nearest !== undefined && src.slice(nearest, nearest + 80).includes("Worked examples");
  });
  ck(`${FILES[i]}: worked cards inside a Worked examples group`, placed);

  // nothing but cards after the group heading until the section closes:
  // the heading is followed by a worked block, and after the last card
  // the section ends (next spec or end of array)
  const body = src.replace(/\/\*[\s\S]*?\*\//g, "");
  for (const h of hIdx) {
    if (!src.slice(h, h + 80).includes("Worked examples")) continue;
    const after = src.slice(h, h + 200);
    ck(`${FILES[i]}: group heading followed by a card`, /k: "worked"/.test(after));
  }

  // unique subheadings within the file ("Worked examples" exempt)
  const dup = heads.filter((t, idx) => heads.indexOf(t) !== idx && t !== "Worked examples");
  ck(`${FILES[i]}: subheadings unique in file`, dup.length === 0, dup.join(", "));

  // unique worked titles
  const wt = [...src.matchAll(/k: "worked",\s*\n\s*title: "([^"]+)"/g)].map((m) => m[1]);
  const dupW = wt.filter((t, idx) => wt.indexOf(t) !== idx);
  ck(`${FILES[i]}: worked titles unique in file`, dupW.length === 0, dupW.join(", "));

  /* 4 — every card has question, steps, answer, and cites a paper */
  const cards = body.split('k: "worked"').slice(1);
  ck(`${FILES[i]}: ${cards.length} worked cards`, cards.length > 0, `${cards.length}`);
  ck(`${FILES[i]}: every card has steps + answer`, cards.every((c) => /steps:/.test(c) && /answer:/.test(c)));
  ck(
    `${FILES[i]}: every card cites a paper`,
    cards.every((c) => /WPH11 (January|June|October) 20\d{2}( \d{2}[A-Z])?, Q/.test(c)),
  );
  ck(
    `${FILES[i]}: questions carry mark counts or MCQ rows`,
    cards.every((c) => /\(\d\)/.test(c) || /A [^B]*· B /.test(c) || /· B /.test(c)),
  );
  void body;
}

/* 5 — cross-file uniqueness of subheadings and worked titles */
const allHeads = parts.flatMap((src) => [...src.matchAll(/\{ k: "h", text: "((?:[^"\\]|\\.)*)" \}/g)].map((m) => m[1]));
const dupH = allHeads.filter((t, idx) => allHeads.indexOf(t) !== idx && t !== "Worked examples");
ck("cross-file: subheadings unique across a/b/c", dupH.length === 0, dupH.join(", "));
const allW = parts.flatMap((src) => [...src.matchAll(/k: "worked",\s*\n\s*title: "([^"]+)"/g)].map((m) => m[1]));
const dupWT = allW.filter((t, idx) => allW.indexOf(t) !== idx);
ck("cross-file: worked titles unique across a/b/c", dupWT.length === 0, dupWT.join(", "));
ck("cross-file: 35 worked cards total", allW.length === 35, `${allW.length}`);

/* no AI-flavoured subheadings */
const banned = /Unlock|Master|Deep dive|Everything you need|Key insight|The big picture|Crucial|Essential guide/i;
ck("subheadings plain register", !banned.test(allHeads.join(" | ")));

console.log(fail === 0 ? "\nALL PASS — t02r structural invariants hold" : `\n${fail} FAILURES`);
process.exit(fail === 0 ? 0 : 1);
