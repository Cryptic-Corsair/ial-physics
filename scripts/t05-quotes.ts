/* Verify every verbatim mark-scheme / examiner-report quote carried
   by the Topic 5 note (notes-ph05-a/b/c) against the tracked
   corpora: the paper text extracts (research/wph11/txt) for printed
   mark schemes, and the digests (research/wph11/digest-*.md) for
   examiner-report lines. Same normalisation as t04-quotes.ts.
   Quoted spans are read only from quote-bearing fields — the
   "note" blocks labelled Mark scheme wording / Not accepted /
   Examiner's report, and the worked cards' ms text. */
import { readFileSync, readdirSync } from "node:fs";

const DIRS = ["research/wph11/txt", "research/wph11"];
const files: string[] = [];
for (const d of DIRS) {
  for (const f of readdirSync(d)) {
    if (f.endsWith(".txt") || /^digest-[A-D]\.md$/.test(f)) files.push(`${d}/${f}`);
  }
}

function foldMath(s: string): string {
  return s.replace(/[\u{1D400}-\u{1D7FF}]/gu, (ch) => {
    const d = ch.codePointAt(0)!;
    if (d >= 0x1d7ce) return String((d - 0x1d7ce) % 10);
    if (d >= 0x1d6a8 && d <= 0x1d6e1) return String.fromCharCode(0x391 + (d - 0x1d6a8));
    if (d >= 0x1d6e2 && d <= 0x1d71b) return String.fromCharCode(0x391 + (d - 0x1d6e2));
    if (d >= 0x1d71c && d <= 0x1d755) return String.fromCharCode(0x3b1 + (d - 0x1d71c));
    const idx = d - 0x1d400;
    if (idx < 26) return String.fromCharCode(65 + idx);
    if (idx < 52) return String.fromCharCode(97 + idx - 26);
    const i2 = idx - 52;
    if (i2 < 26) return String.fromCharCode(65 + i2);
    const i3 = i2 - 26;
    if (i3 < 26) return String.fromCharCode(97 + i3);
    const i4 = i3 - 26;
    if (i4 < 26) return String.fromCharCode(65 + i4);
    const i5 = i4 - 26;
    if (i5 < 26) return String.fromCharCode(97 + i5);
    return ch;
  });
}

const norm = (s: string) =>
  foldMath(s)
    .replace(/[\u2018\u2019\u02bc]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2212/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/\s+/g, " ")
    .toLowerCase();

const corpus = files.map((f) => ({ f, t: norm(readFileSync(f, "utf8")) }));
const all = corpus.map((c) => c.t).join(" \u0000 ");

/* walk each file; collect *…* spans only from quote-bearing fields */
const srcs = ["notes-ph05-a.ts", "notes-ph05-b.ts", "notes-ph05-c.ts"].map((f) =>
  readFileSync(`src/lib/spectra/content/${f}`, "utf8"),
);

let fail = 0;
let checked = 0;
for (const src of srcs) {
  let curK = "";
  let label = "";
  let field = "";
  for (const line of src.split("\n")) {
    const mk = line.match(/\bk:\s*"(\w+)"/);
    if (mk) [curK, label, field] = [mk[1], "", ""];
    const ml = line.match(/\blabel:\s*"([^"]*)"/);
    if (ml) label = ml[1];
    const mf = line.match(/\b(question|ms|steps|answer):\s*\[?"?/);
    if (mf) field = mf[1];

    const quoteBlock = /mark scheme|examiner|not accepted/i.test(label);
    const inWorkedMs = curK === "worked" && field === "ms";
    if (!quoteBlock && !inWorkedMs) continue;
    if (!/\bk:\s*"/.test(line) && /^\s*(?:k|label|spec|title|statement)\s*:\s*"/.test(line)) continue;

    const strs = [...line.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) =>
      m[1].replace(/\\n/g, " ").replace(/\\"/g, '"'),
    );
    for (const s of strs) {
      /* the worked-ms citation sits outside the final *…* — split on it */
      for (const q of [...s.matchAll(/\*([^*]+)\*/g)].map((m) => m[1])) {
        const nq = norm(q);
        if (!nq.trim()) continue;
        checked++;
        if (!all.includes(nq)) {
          fail++;
          console.log(`MISS  ${nq}`);
        }
      }
    }
  }
}
console.log(`\n${checked - fail}/${checked} quoted spans verified verbatim in the corpus`);
console.log(fail === 0 ? "ALL PASS — every t05 quote is printed wording" : `${fail} QUOTES NOT FOUND`);
if (fail > 0) process.exit(1);
