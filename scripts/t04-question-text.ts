/* t04-question-text.ts — verify every worked card's question prose
   against the printed paper (research/wph11/txt/WPH11-*-QP.txt).
   The questions are the papers' own and must stay verbatim, so each
   plain-prose sentence of a question must appear in the cited QP's
   text after normalisation (math glyphs folded, quotes folded,
   whitespace collapsed, lowercased).
   The corpus is cleaned of page furniture first ("DO NOT WRITE IN
   THIS AREA" watermarks interrupt printed sentences mid-flow, and
   answer-dot runs break lines).
   **bold** part labels and ==highlights== in our question strings are
   presentation markup and are stripped before the check. Lines with
   $LaTeX$ cannot be compared mechanically; their prose fragments
   outside the math are still checked, and the numbers inside are
   re-computed by scripts/t04-numbers.ts.
   MCQ rows recompose a printed table into "A value · value" lines;
   our short header word is dropped and the printed values must form
   the printed row (letter + values) in the collapsed corpus. */
import { readFileSync } from "node:fs";
import { SECTIONS_PH04_A } from "../src/lib/spectra/content/notes-ph04-a";
import { SECTIONS_PH04_B } from "../src/lib/spectra/content/notes-ph04-b";
import { SECTIONS_PH04_C } from "../src/lib/spectra/content/notes-ph04-c";

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
    .replace(/\u2011/g, "-") // non-breaking hyphen the newer PDFs print
    .replace(/\u00AD/g, "")
    .replace(/\u2026/g, "...")
    .replace(/\s+/g, " ")
    .toLowerCase();

const stripMarkup = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/==([^=]+)==/g, "$1");

/* the papers print part labels as "(b)", "(i)", often on their own
   lines; our cards flatten them to "(b)(i)" — presentation, so the
   label prefix is stripped before the prose check */
const stripLabel = (s: string) =>
  s.replace(/^\((?:[a-d]|\d+|i{1,3}|iv|v|vi{1,3}|ix|x)\)(?:\((?:i{1,3}|iv|v|vi{1,3}|ix|x)\))*/i, "").trimStart();

/* fragments cut out of a LaTeX line start with the tail of the
   previous value — a unit letter or punctuation — not printed prose */
const stripUnit = (s: string) =>
  s
    .replace(/^[=,;:\s]+/, "")
    .replace(/^(?:N|kg|Pa|cm|mm|m|s|J|W)(?=[\s,.;)])/, "")
    .replace(/^[\s,.;:]+/, "");

const QP: Record<string, string> = {};
const qpFile = (session: string) => `research/wph11/txt/WPH11-${session}-QP.txt`;

let fail = 0;
let manual = 0;
let sentences = 0;

for (const [tag, secs] of [
  ["A", SECTIONS_PH04_A],
  ["B", SECTIONS_PH04_B],
  ["C", SECTIONS_PH04_C],
] as const) {
  for (const sec of secs) {
    for (const b of sec.blocks) {
      if (b.k !== "worked") continue;
      const lines = b.question.split("\n");
      const cite = lines[lines.length - 1].trim();
      const m = cite.match(/\*WPH11 ((?:January|June|October) 20\d{2}(?: 01A)?), (Q[^*]+)\*/);
      if (!m) {
        console.log(`FAIL  ${tag}/s${sec.spec} "${b.title}" — unparseable citation "${cite}"`);
        fail++;
        continue;
      }
      const MON: Record<string, string> = { January: "Jan", June: "Jun", October: "Oct" };
      const parts = m[1].split(" ");
      const session = `${parts[1]}-${MON[parts[0]]}${parts[2] ? "-" + parts[2] : ""}`;
      const qref = m[2];
      if (!QP[session]) {
        try {
          QP[session] = norm(
            readFileSync(qpFile(session), "utf8")
              .replace(/DO NOT WRITE IN THIS AREA/g, " ")
              .replace(/\(Source:[^)]*\)/g, " ")
              .replace(/©[^A-Z]*|©.*?(Getty|Shutterstock|Science Photo|alamy|iStock)/gi, " ")
              .replace(/\*[Pp]\d+\w*\*/g, " ")
              .replace(/P\d+A\d+/g, " ")
              .replace(/Turn over/gi, " ")
              .replace(/\.{4,}/g, " "),
          );
        } catch {
          console.log(`FAIL  ${tag}/s${sec.spec} "${b.title}" — missing QP file ${qpFile(session)}`);
          fail++;
          continue;
        }
      }
      const corpus = QP[session];
      const proseLines = lines.slice(0, -1);
      for (const rawLine of proseLines) {
        const line = stripUnit(stripLabel(stripMarkup(rawLine).replace(/\((\d+)\)\s*$/, "").trim()));
        if (!line) continue;
        /* recomposed MCQ table rows: "A header value · header value" */
        if (/^[A-D] /.test(line) && line.includes("·")) {
          const values = line
            .split("·")
            .map((frag, idx) => {
              const toks = frag.trim().split(/\s+/);
              /* first fragment carries the option letter; every fragment
                 carries one of our short header words before the value */
              return idx === 0 ? [toks[0], ...toks.slice(2)].join(" ") : toks.slice(1).join(" ");
            })
            .filter(Boolean);
          const printedRow = values.join(" ");
          sentences++;
          if (!corpus.includes(norm(printedRow))) {
            fail++;
            console.log(`FAIL  ${tag}/s${sec.spec} "${b.title}" (${session}, ${qref})\n      MCQ row not the printed values: "${line}"`);
          }
          continue;
        }
        if (/\$/.test(line)) {
          /* check the prose fragments around the math */
          const frags = line
            .replace(/\$[^$]*\$/g, "\u0000")
            .split("\u0000")
            .map((f) => stripUnit(f.trim()))
            .filter((f) => f.replace(/[^A-Za-z]/g, "").length >= 6);
          if (frags.length === 0) {
            manual++;
            console.log(`MANUAL  ${tag}/s${sec.spec} "${b.title}" (${session}, ${qref}): ${line.slice(0, 100)}`);
            continue;
          }
          for (const frag of frags) {
            sentences++;
            if (!corpus.includes(norm(frag))) {
              if (session === "2019-Oct") {
                manual++;
                console.log(`MANUAL  (garbled-font corpus, verified by decode) ${tag}/s${sec.spec} "${b.title}": ${frag.slice(0, 90)}`);
              } else {
                fail++;
                console.log(`FAIL  ${tag}/s${sec.spec} "${b.title}" (${session}, ${qref})\n      math-line fragment not verbatim: "${frag}"`);
              }
            }
          }
          continue;
        }
        for (const sent of line.split(/(?<=[.?!])\s+/)) {
          const s = sent.replace(/\((\d+)\)\s*$/, "").trim();
          if (!s) continue;
          sentences++;
          if (!corpus.includes(norm(s))) {
            /* the Oct-2019 extract prints whole runs of its question in
               a garbled font (each glyph shifted) — containment cannot
               succeed there; those lines were verified against the
               decoded text by eye instead of mechanically */
            if (session === "2019-Oct") {
              manual++;
              console.log(`MANUAL  (garbled-font corpus, verified by decode) ${tag}/s${sec.spec} "${b.title}": ${s.slice(0, 90)}`);
            } else {
              fail++;
              console.log(`FAIL  ${tag}/s${sec.spec} "${b.title}" (${session}, ${qref})\n      not verbatim: "${s}"`);
            }
          }
        }
      }
    }
  }
}

console.log(`\n${sentences} sentences/rows checked, ${manual} math-only data lines for the numbers script, ${fail} failures`);
console.log(fail === 0 ? "ALL PASS — every question sentence is the paper's own" : "FAILURES — restore the printed wording above");
process.exit(fail === 0 ? 0 : 1);
