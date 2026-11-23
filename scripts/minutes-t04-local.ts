/* The t04 row of scripts/minutes-check.ts, run locally: sections
   23–26 words + landing words at the mechanics rate (19263 w / 80
   min). The t01–t03 rows are untouched by this pass. */
import { readFileSync } from "node:fs";

const read = (f) => readFileSync(f, "utf8");

function strings(src) {
  const out = [];
  const re = /"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

function words(strs) {
  const text = strs
    .join(" ")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/[*=~^]+/g, "")
    .trim();
  return text.split(/\s+/).filter(Boolean).length;
}

function landingWords(src) {
  const blocksRe = /blocks:\s*\[(.*?)\n    \],/gs;
  return [...src.matchAll(blocksRe)].map((m) => words(strings(m[1])));
}

function specWords(src) {
  const map = new Map();
  const re = /spec:\s*"(\d+)"/g;
  const marks = [...src.matchAll(re)].map((m) => ({ no: m[1], at: m.index }));
  const end = src.lastIndexOf("];");
  for (let i = 0; i < marks.length; i++) {
    const to = i + 1 < marks.length ? marks[i + 1].at : end;
    map.set(marks[i].no, words(strings(src.slice(marks[i].at, to))));
  }
  return map;
}

const sa = specWords(read("src/lib/spectra/content/notes-ph04-a.ts"));
const sf = specWords(read("src/lib/spectra/content/notes-ph04-b.ts"));
const sg = specWords(read("src/lib/spectra/content/notes-ph04-c.ts"));
const land = landingWords(read("src/lib/spectra/content/wph11.ts"))[3];

const rate = 19263 / 80;
const sec = (sa.get("23") || 0) + (sa.get("24") || 0) + (sf.get("25") || 0) + (sg.get("26") || 0);
const total = sec + land;
console.log(`t04 fluids · sections ${sec} + landing ${land} = ${total} w → ${(total / rate).toFixed(1)} min`);
console.log(`wph11.ts minutes field: 46 → ${Math.round(total / rate) === 46 ? "matches" : "MISMATCH — recalibrate"}`);
