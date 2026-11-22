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
const sa = specWords(read("src/lib/spectra/content/notes-ph01-a.ts"));
const sb = specWords(read("src/lib/spectra/content/notes-ph01-b.ts"));
const sc = specWords(read("src/lib/spectra/content/notes-ph01-c.ts"));
const sd = specWords(read("src/lib/spectra/content/notes-ph01-d.ts"));

const rate = 19263 / 80; // w/min, the old t01 calibration
const rows: [string, number, number][] = [
  ["t01 Forces  ", sum(sa, 1, 7) + sum(sb, 8, 11), landings[0]],
  ["t02 M&M     ", sum(sc, 12, 16), landings[1]],
  ["t03 WEP     ", sum(sd, 17, 22), landings[2]],
  ["t04 Materials (reference, set 66)", sum(specWords(read("src/lib/spectra/content/notes-ph02-a.ts")), 23, 27) + sum(specWords(read("src/lib/spectra/content/notes-ph02-b.ts")), 28, 32), landings[3]],
];
for (const [name, sec, land] of rows) {
  const total = sec + land;
  console.log(`${name} · sections ${sec} + landing ${land} = ${total} w → ${(total / rate).toFixed(1)} min`);
}
