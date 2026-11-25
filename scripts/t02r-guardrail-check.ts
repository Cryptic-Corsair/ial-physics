/* Register guardrail check for the Topic 2 rebuilt note (wph11-t02).
   Walks the TEACHING BODY of all three part files and fails on:
   1. banned vocabulary (owner rulings 2026-11-25 — see
      research/wph11/scenario-register-guardrails.md);
   2. session tags anywhere in the teaching body (worked cards keep
      theirs; labelled notes must be clean too);
   3. multi-sentence bullets (one sentence per bullet; a single "\n"
      carrying two linked lines is allowed);
   4. scenario sections (h titled "A …/An …/Two …/Three …/Four …/How
      …/Deducing …/Combining …") whose first bullets block does not
      close with a "Therefore," line.
   Mark-scheme talk inside craft sections and labelled notes is
   allowed by the owner's own practice ("The method", "The moments
   method"). Run: bun scripts/t02r-guardrail-check.ts */
import { readFileSync } from "node:fs";

const FILES = [
  "src/lib/spectra/content/notes-ph02r-a.ts",
  "src/lib/spectra/content/notes-ph02r-b.ts",
  "src/lib/spectra/content/notes-ph02r-c.ts",
];

const BANNED: [RegExp, string][] = [
  [/\bgrows\b/i, "grows → say increases"],
  [/\bshrinks\b/i, "shrinks → say decreases/reduces"],
  [/\bconsequently\b/i, "consequently → use So/Therefore"],
  [/\bfurthermore\b/i, "furthermore → use So/Also"],
  [/\bmoreover\b/i, "moreover → use So/Also"],
  [/\badditionally\b/i, "additionally → use So/Also"],
  [/\bthus\b/i, "thus → use So/Therefore"],
  [/\bhence\b/i, "hence → use So/Therefore"],
  [/due to the fact that/i, "due to the fact that → use Since"],
  [/in order to/i, "in order to → use to"],
  [/is determined by/i, "is determined by → say it plainly"],
  [/\brepresents\b/i, "represents → say it plainly"],
  [/corresponds to/i, "corresponds to → say it plainly"],
  [/\bfixes\b/i, "fixes → say sets"],
  [/\butilize\b/i, "utilize → use use"],
  [/\bpossess\b/i, "possess → use has"],
  [/\bessentially\b/i, "essentially — filler"],
  [/\bbasically\b/i, "basically — filler"],
  [/note that/i, "note that — drop it"],
  [/it is important to note/i, "it is important to note — drop it"],
  [/this implies/i, "This implies → use So"],
  [/in summary/i, "In summary → use Therefore"],
  [/the exam's version of this/i, "the exam's version of this — banned meta"],
];

const SESSION_TAG = /\(WPH11/;

/* ———— extract the teaching body ———— */

function stringLiterals(src: string): { s: string; at: number }[] {
  const out: { s: string; at: number }[] = [];
  const re = /"((?:[^"\\]|\\.)*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push({ s: m[1], at: m.index });
  return out;
}

/** ranges of worked blocks and labelled notes — exempt from the
    banned-vocabulary walk (they quote mark schemes verbatim) */
function exemptRanges(src: string): [number, number][] {
  const out: [number, number][] = [];
  for (const re of [
    /k: "worked",[\s\S]*?\n      \},/g, // worked cards, incl. ms
    /k: "note",[\s\S]*?\n      \},/g, // labelled notes
  ]) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(src))) out.push([m.index, m.index + m[0].length]);
  }
  return out;
}

function inRanges(at: number, ranges: [number, number][]): boolean {
  return ranges.some(([a, b]) => at >= a && at < b);
}

/* ———— sentence counting ———— */

function sentences(item: string): number {
  const noMath = item.replace(/\$[^$]*\$/g, " ");
  const noDecimals = noMath.replace(/(\d)\.(\d)/g, "$1$2");
  const matches = noDecimals.match(/[.!?](?=\s|$)/g);
  return matches ? matches.length : 0;
}

/* ———— scenario closers ———— */

interface HBlock {
  at: number;
  title: string;
}

function hBlocks(src: string): HBlock[] {
  const out: HBlock[] = [];
  const re = /\{ k: "h", text: "((?:[^"\\]|\\.)*)" \}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push({ at: m.index, title: m[1] });
  return out;
}

function firstItemsArrayAfter(src: string, at: number): string[] | null {
  const re = /items: \[([\s\S]*?)\]/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m.index! > at) {
      return stringLiterals(m[1]).map((x) => x.s);
    }
  }
  return null;
}

const SCENARIO_TITLE = /^(A|An|Two|Three|Four|How|Deducing|Combining)\s/;

let fails = 0;
const fail = (file: string, msg: string) => {
  fails++;
  console.log(`FAIL  ${file} — ${msg}`);
};

for (const file of FILES) {
  const raw = readFileSync(file, "utf8");
  // strip block comments first — the part headers list the banned
  // words as quoted examples, and comments are not the teaching body
  const src = raw.replace(/\/\*[\s\S]*?\*\//g, "");
  const exempt = exemptRanges(src);
  const label = file.replace("src/lib/spectra/content/", "");

  // 1 + 2: banned vocabulary and session tags in the teaching body
  for (const { s, at } of stringLiterals(src)) {
    const text = s.replace(/\\n/g, " ");
    if (!text.trim()) continue;
    const exemptHere = inRanges(at, exempt);
    if (!exemptHere) {
      for (const [re, why] of BANNED) {
        if (re.test(text)) fail(label, `banned vocabulary: “${why}” — in: ${text.slice(0, 80)}…`);
      }
    }
    if (!exemptHere && SESSION_TAG.test(text)) {
      fail(label, `session tag in the teaching body: ${text.slice(0, 90)}…`);
    }
  }

  // 3: multi-sentence bullets — walk every items array, but skip
  //    those inside worked/note blocks
  const itemsRe = /items: \[([\s\S]*?)\]/g;
  let m: RegExpExecArray | null;
  while ((m = itemsRe.exec(src))) {
    if (inRanges(m.index!, exempt)) continue;
    for (const { s } of stringLiterals(m[1])) {
      const hardLines = (s.match(/\\n/g) || []).length;
      const limit = hardLines > 0 ? 2 : 1;
      const n = sentences(s);
      if (n > limit) {
        fail(label, `bullet carries ${n} sentences (limit ${limit}): ${s.slice(0, 90)}…`);
      }
    }
  }

  // 4: scenario sections close with "Therefore,"
  for (const h of hBlocks(src)) {
    if (!SCENARIO_TITLE.test(h.title)) continue;
    const items = firstItemsArrayAfter(src, h.at);
    if (!items || items.length === 0) {
      fail(label, `scenario “${h.title}” has no bullets block after it`);
      continue;
    }
    const last = items[items.length - 1];
    if (!/^Therefore,/.test(last)) {
      fail(label, `scenario “${h.title}” does not close with a “Therefore,” line — last item: ${last.slice(0, 80)}…`);
    }
  }
}

const total = fails === 0 ? "ALL CLEAN" : `${fails} failure${fails > 1 ? "s" : ""}`;
console.log(`\nt02r register guardrails: ${total}`);
process.exit(fails ? 1 : 0);
