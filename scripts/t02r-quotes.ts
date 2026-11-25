/* t02r-quotes.ts — verifies every verbatim mark-scheme / examiner-report
   quote carried by the rebuilt Topic 2 note (notes-ph02r-a/b/c).
   Extracts every starred span *...* from the teaching files (comments,
   **bold** and ==highlights== stripped first), splits it on the note's
   own join marks (" / ", "…", "\n") and into sentences, and requires
   every sentence to appear verbatim in the research corpus (txt paper
   extracts, digests, analyses). Whitelisted: the note's own model
   comparison line and the illustrative wrong-answer phrases, which
   are our wording, not paper text. Run: bun scripts/t02r-quotes.ts */
import { readFileSync, readdirSync } from "node:fs";

const DIRS = ["research/wph11/txt", "research/wph11"]; // strict corpus: paper extracts + digests
const corpusFiles: string[] = [];
for (const d of DIRS) {
  for (const f of readdirSync(d)) {
    if (f.endsWith(".txt") || /^digest-[A-D]\.md$/.test(f) || f.endsWith(".md")) {
      if (!corpusFiles.includes(`${d}/${f}`)) corpusFiles.push(`${d}/${f}`);
    }
  }
}

/* fold the mathematical-alphanumeric glyphs the PDF extractions emit */
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
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/, "")
    .toLowerCase();

const corpus = norm(corpusFiles.map((f) => readFileSync(f, "utf8")).join(" \n "));

/* our own wording inside italics — the model comparison the student
   writes, and the illustrative wrong answers students give */
const WHITELIST = [
  "775 ≠ 808, so momentum was not conserved",
  "the point where the weight acts",
  "where the weight is concentrated",
  "where the mass is concentrated",
].map(norm);

const FILES = ["notes-ph02r-a.ts", "notes-ph02r-b.ts", "notes-ph02r-c.ts"];
const spans: { file: string; q: string }[] = [];
for (const f of FILES) {
  let src = readFileSync(`src/lib/spectra/content/${f}`, "utf8");
  src = src.replace(/\/\*[\s\S]*?\*\//g, ""); // strip comments
  src = src.replace(/\*\*[^*]+\*\*/g, ""); // strip bold
  src = src.replace(/==[^=]+==/g, ""); // strip highlights
  for (const m of src.matchAll(/\*([^*\n]+)\*/g)) {
    const q = m[1];
    if (/WPH11/.test(q)) continue; // citations, not quotes
    for (const part of q.split(/ \/ |…|\.\.\./)) {
      const p = part.trim();
      if (p.length >= 12) spans.push({ file: f, q: p });
    }
  }
}

let fail = 0;
let checked = 0;
for (const { file, q } of spans) {
  if (WHITELIST.includes(norm(q))) continue;
  // split into sentences; each must appear verbatim in the corpus
  const sentences = q
    .split(/(?<=\.)\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= 12);
  for (const s of sentences) {
    checked++;
    const ns = norm(s);
    if (!corpus.includes(ns)) {
      fail++;
      console.log(`FAIL  ${file}: ${s.slice(0, 130)}`);
    }
  }
}

console.log(
  `\n${fail === 0 ? "ALL PASS" : fail + " FAILURES"} — ${checked} quoted sentences verified verbatim across ${corpusFiles.length} corpus files`,
);
if (fail > 0) process.exit(1);
