/* Recompute the per-topic reading minutes after the split: landing
   blocks + section words at the old mechanics rate (19263 w / 80 min). */
import { readFileSync } from "node:fs";

const read = (f: string) => readFileSync(f, "utf8");

function strings(src: string): string[] {
  const out: string[] = [];
  const re = /"((?:[^"\\]|\\.)*)"/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) out.push(m[1]);
  return out;
}

function words(strs: string[]): number {
  const text = strs
    .join(" ")
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/[*=~^]+/g, "")
    .trim();
  return text.split(/\s+/).filter(Boolean).length;
}

function landingWords(src: string): number[] {
  const blocksRe = /blocks:\s*\[(.*?)\n    \],/gs;
  return [...src.matchAll(blocksRe)].map((m) => words(strings(m[1])));
}

function specWords(src: string): Map<string, number> {
  const map = new Map<string, number>();
  const re = /spec:\s*"(\d+)"/g;
  const marks: { no: string; at: number }[] = [...src.matchAll(re)].map((m) => ({ no: m[1], at: m.index }));
  const end = src.lastIndexOf("];");
  for (let i = 0; i < marks.length; i++) {
    const to = i + 1 < marks.length ? marks[i + 1].at : end;
    map.set(marks[i].no, words(strings(src.slice(marks[i].at, to))));
  }
  return map;
}

const reg = read("src/lib/spectra/content/wph11.ts");
const landings = landingWords(reg);
const sum = (m: Map<string, number>, from: number, to: number) => {
  let n = 0;
  for (let i = from; i <= to; i++) n += m.get(String(i)) ?? 0;
  return n;
};
const sa = specWords(read("src/lib/spectra/content/notes-ph01f-a.ts"));
const sb = specWords(read("src/lib/spectra/content/notes-ph01f-b.ts"));
const sa2 = specWords(read("src/lib/spectra/content/notes-ph01f-c.ts"));
const sb2 = specWords(read("src/lib/spectra/content/notes-ph01f-d.ts"));
const sc = specWords(read("src/lib/spectra/content/notes-ph02r-a.ts"));
const sc2 = specWords(read("src/lib/spectra/content/notes-ph02r-b.ts"));
const sc3 = specWords(read("src/lib/spectra/content/notes-ph02r-c.ts"));
const sd = specWords(read("src/lib/spectra/content/notes-ph01-d.ts"));

/* the alternate note (2026-11-25) */
const srA = specWords(read("src/lib/spectra/content/notes-ph01r-a.ts"));
const srB = specWords(read("src/lib/spectra/content/notes-ph01r-b.ts"));
const srC = specWords(read("src/lib/spectra/content/notes-ph01r-c.ts"));
const srD = specWords(read("src/lib/spectra/content/notes-ph01r-d.ts"));

const rate = 19263 / 80; // w/min, the old t01 calibration
const se = specWords(read("src/lib/spectra/content/notes-ph04-a.ts"));
const sf = specWords(read("src/lib/spectra/content/notes-ph04-b.ts"));
const sg = specWords(read("src/lib/spectra/content/notes-ph04-c.ts"));
const sh = specWords(read("src/lib/spectra/content/notes-ph05r-a.ts"));
const si = specWords(read("src/lib/spectra/content/notes-ph05r-b.ts"));
const sj = specWords(read("src/lib/spectra/content/notes-ph05r-c.ts"));

const rows: [string, number, number][] = [
  ["t01 Forces  ", sum(sa, 1, 3) + sum(sb, 4, 6) + sum(sa2, 7, 8) + sum(sb2, 9, 11), landings[0]],
  ["t02 M&M     ", sum(sc, 12, 13) + sum(sc2, 14, 14) + sum(sc3, 15, 16), landings[1]],
  ["t03 WEP     ", sum(sd, 17, 22), landings[2]],
  ["t04 fluids  ", sum(se, 23, 24) + sum(sf, 25, 25) + sum(sg, 26, 26), landings[3]],
  ["t05 elastic ", sum(sh, 27, 28) + sum(si, 29, 30) + sum(sj, 31, 32), landings[4]],
  ["t01 revised ", sum(srA, 1, 2) + sum(srB, 3, 5) + sum(srC, 6, 8) + sum(srD, 9, 11), 0],
];
for (const [name, sec, land] of rows) {
  const total = sec + land;
  console.log(`${name} · sections ${sec} + landing ${land} = ${total} w → ${(total / rate).toFixed(1)} min`);
}
