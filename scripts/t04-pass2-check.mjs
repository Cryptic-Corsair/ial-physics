/* Drift + layout checker for the pass-2 finish of notes-ph04-b/c.
   Baseline: the OLD content strings, lifted verbatim from the
   deployed JS bundle (/tmp/chunks/*.js — the running site's own
   bundle, whose b/c questions are still the pre-pass-2 single-line
   versions). Proves, per card:
     1. title / steps / answer / ms are byte-identical
     2. the question's text is identical once whitespace is
        collapsed and the "— " before the citation is dropped
        (only layout moves)
     3. the new question renders as the paper prints it: scenario
        line, each part on its own line ending in its mark count,
        MCQ rows one to a line, citation on the last line
   Also: h uniqueness within t04, citation coverage, the statements
   untouched, and the three renamed h texts absent from every other
   doc in the bundle. */
import { readFileSync, readdirSync } from "node:fs";

const root = "/home/z/my-project/ial";
let fails = 0;
const check = (name, ok, detail = "") => {
  if (!ok) fails++;
  console.log(`${ok ? "pass" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
};

/* — read a JS string literal from the minified bundle, unescaping
   exactly what the bundler kept (\n, \', \", \\, \u…) — */
function readString(src, i) {
  if (src[i] !== '"') throw new Error(`expected " at ${i}`);
  let out = "";
  i++;
  while (i < src.length) {
    const c = src[i];
    if (c === "\\") {
      const n = src[i + 1];
      if (n === "n") out += "\n";
      else if (n === "'") out += "'";
      else if (n === '"') out += '"';
      else if (n === "\\") out += "\\";
      else if (n === "$") out += "$";
      else if (n === "u") {
        out += String.fromCharCode(parseInt(src.slice(i + 2, i + 6), 16));
        i += 4;
      } else if (n === "x") {
        out += String.fromCharCode(parseInt(src.slice(i + 2, i + 4), 16));
        i += 2;
      } else out += n;
      i += 2;
      continue;
    }
    if (c === '"') return { s: out, end: i };
    out += c;
    i++;
  }
  throw new Error("unterminated string");
}

/* unescape a JS string-literal BODY (the raw regex group) */
function unescBody(raw) {
  let out = "";
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i];
    if (c === "\\") {
      const n = raw[i + 1];
      if (n === "n") out += "\n";
      else if (n === "'") out += "'";
      else if (n === '"') out += '"';
      else if (n === "\\") out += "\\";
      else if (n === "$") out += "$";
      else if (n === "u") {
        out += String.fromCharCode(parseInt(raw.slice(i + 2, i + 6), 16));
        i += 4;
      } else if (n === "x") {
        out += String.fromCharCode(parseInt(raw.slice(i + 2, i + 4), 16));
        i += 2;
      } else out += n;
      i++;
      continue;
    }
    out += c;
  }
  return out;
}

/* pull the 17 topic-4 b/c worked cards out of the bundle (old state).
   The bundle minifies other docs' cards differently, so every field
   is taken from a bounded window after the question literal. */
function cardsFromBundle(src) {
  const cards = new Map();
  const re = /title:"((?:[^"\\]|\\.)*)",question:"/g;
  let m;
  while ((m = re.exec(src))) {
    const title = unescBody(m[1]);
    const qStart = m.index + m[0].length - 1;
    const q = readString(src, qStart);
    const next = src.indexOf('title:"', q.end);
    const win = src.slice(q.end + 1, next > 0 ? Math.min(next, q.end + 9000) : q.end + 9000);
    const card = { title, question: q.s };
    const stepsM = win.match(/^,steps:\[([\s\S]*?)\],answer:"/);
    if (stepsM) {
      card.steps = [...stepsM[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((s) => unescBody(s[1]));
    }
    const ansM = win.match(/^,steps:\[[\s\S]*?\],answer:"((?:[^"\\]|\\.)*)"/) || win.match(/^,answer:"((?:[^"\\]|\\.)*)"/);
    if (ansM) card.answer = unescBody(ansM[1]);
    const msM = win.match(/,ms:\{label:"((?:[^"\\]|\\.)*)",text:"((?:[^"\\]|\\.)*)"/);
    if (msM) card.ms = { label: unescBody(msM[1]), text: unescBody(msM[2]) };
    cards.set(title, card);
  }
  return cards;
}

function hSetFromBundle(src) {
  const set = new Map();
  const re = /\{k:"h",text:"((?:[^"\\]|\\.)*)"\}/g;
  let m;
  while ((m = re.exec(src))) {
    const t = unescBody(m[1]);
    set.set(t, (set.get(t) || 0) + 1);
  }
  return set;
}
function statementsFromBundle(src) {
  const map = new Map();
  const re = /spec:"(\d+)",statement:"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(src))) {
    if (!map.has(m[1])) map.set(m[1], unescBody(m[2]));
  }
  return map;
}

const dir = "/tmp/chunks";
let bundle = "";
for (const f of readdirSync(dir)) if (f.endsWith(".js")) bundle += readFileSync(`${dir}/${f}`, "utf8");

const old = cardsFromBundle(bundle);
const bundleH = hSetFromBundle(bundle);
const bundleStmt = statementsFromBundle(bundle);
check("baseline cards lifted from the deployed bundle", old.size >= 27, `${old.size} cards`);

const readB = readFileSync(`${root}/src/lib/spectra/content/notes-ph04-b.ts`, "utf8");
const readC = readFileSync(`${root}/src/lib/spectra/content/notes-ph04-c.ts`, "utf8");

function cardsFromSource(src) {
  const cards = [];
  const re = /\{\s*\n\s*k: "worked",\s*\n\s*title: "((?:[^"\\]|\\.)*)",\s*\n\s*question:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(src))) {
    const title = m[1].replace(/\\"/g, '"');
    const question = m[2]
      .replace(/\\"/g, '"')
      .replace(/\\n/g, "\n")
      .replace(/\\\\/g, "\\");
    cards.push({ title, question });
  }
  return cards;
}
const newCards = [...cardsFromSource(readB), ...cardsFromSource(readC)];
check("new b+c card count is 17 (a's 9 already re-flowed)", newCards.length === 17, `${newCards.length}`);

const norm = (s) =>
  s
    .replace(/·/g, " ") /* the option separator the line breaks replace */
    .replace(/\s+/g, " ")
    .replace(/\s+—\s*\*WPH11/g, " *WPH11")
    .trim();

const citeLineRe = /^\*WPH11 (?:January|June|October) \d{4}(?: 01A)?, Q\d+(?:\([a-z)(\d]+)?\*$/;
const partRe = /^\*\*\([a-z]+\)(\([a-z]+\))*\*\* .+ \(\d\)$/;

for (const card of newCards) {
  const o = old.get(card.title);
  if (!o) {
    check(`"${card.title}" exists in the deployed baseline`, false);
    continue;
  }
  const same = norm(o.question) === norm(card.question);
  check(`"${card.title}" question text unchanged`, same,
    same ? "" : `old ${JSON.stringify(norm(o.question).slice(0, 110))} vs new ${JSON.stringify(norm(card.question).slice(0, 110))}`);

  const lines = card.question.split("\n");
  check(`"${card.title}" paper layout: multi-line`, lines.length >= 3, `${lines.length} lines`);
  check(`"${card.title}" citation is the last line`, citeLineRe.test(lines.at(-1)), lines.at(-1));
  check(`"${card.title}" scenario comes first (no part marker on line 1)`, !lines[0].startsWith("**("));
  const partLines = lines.map((l, i) => ({ l, i })).filter((x) => x.l.startsWith("**("));
  for (const x of partLines) {
    /* the paper prints the mark count at the end of the part — or,
       when the data is printed under the part, at the end of the
       data line (the layout part A already uses) */
    const ok = partRe.test(x.l) || (x.i + 1 < lines.length && /\(\d\)$/.test(lines[x.i + 1]) && !lines[x.i + 1].startsWith("**("));
    check(`"${card.title}" part carries its marks: ${x.l.slice(0, 26)}…`, ok);
  }
  const optIdx = lines.map((l, i) => (/^[ABCD] /.test(l) && i > 0 ? i : -1)).filter((i) => i >= 0);
  if (optIdx.length) {
    check(`"${card.title}" MCQ rows one to a line, A-D in order`, optIdx.length === 4 && optIdx.every((v, i) => v === optIdx[0] + i) && ["A", "B", "C", "D"].every((L, i) => lines[optIdx[i]].startsWith(L + " ")));
  }
}

/* steps / answer / ms byte-identity against the bundle */
function fullCardsFromSource(src) {
  const out = [];
  const re = /k: "worked",\s*\n\s*title: "((?:[^"\\]|\\.)*)",/g;
  let m;
  while ((m = re.exec(src))) {
    const title = m[1];
    const next = src.indexOf('k: "worked"', m.index + 10);
    const seg = src.slice(m.index, next > 0 ? next : undefined);
    out.push({ title, seg });
  }
  return out;
}
const unesc = (s) =>
  s
    .replace(/\\\\/g, "\u0000")
    .replace(/\\n/g, "\n")
    .replace(/\u0000/g, "\\")
    .replace(/\\"/g, '"');
for (const [name, src] of [["b", readB], ["c", readC]]) {
  for (const fc of fullCardsFromSource(src)) {
    const title = fc.title.replace(/\\"/g, '"');
    const o = old.get(title);
    if (!o) continue;
    const stepsSrc = fc.seg.match(/steps: \[([\s\S]*?)\],\s*\n\s*answer:/);
    if (stepsSrc && o.steps) {
      const joined = stepsSrc[1]
        .split('",\n')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => unesc(s.replace(/^"/, "").replace(/"$/, "")))
        .join("\u0001");
      check(`"${title}" steps unchanged`, joined === o.steps.join("\u0001"));
    }
    const ansSrc = fc.seg.match(/answer:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
    if (ansSrc && o.answer) {
      check(`"${title}" answer unchanged`, unesc(ansSrc[1]) === o.answer);
    }
    const msSrc = fc.seg.match(/ms: \{\s*\n\s*label: "((?:[^"\\]|\\.)*)",\s*\n\s*text: "((?:[^"\\]|\\.)*)"/);
    if (msSrc && o.ms) {
      check(`"${title}" ms note unchanged`, msSrc[1].replace(/\\"/g, '"') === o.ms.label && unesc(msSrc[2]) === o.ms.text);
    }
  }
}

/* — h uniqueness within t04 + renames absent elsewhere — */
const hRe = /\{ k: "h", text: "([^"]+)" \}/g;
const t04h = new Map();
const EXEMPT_WITHIN = new Set(["Worked examples"]);
for (const [name, src] of [["b", readB], ["c", readC]]) {
  for (const m of src.matchAll(hRe)) {
    if (!EXEMPT_WITHIN.has(m[1])) check(`h "${m[1]}" unique within t04 (so far)`, !t04h.has(m[1]));
    t04h.set(m[1], name);
  }
}
const aHeadings = ["Volumes of solids", "Conversions and flow rate", "Hollow objects", "Worked examples",
  "Pressure and depth", "Floating", "A sphere pushed fully under", "The free-body diagram of a floating object",
  "The balance experiment", "A hydrometer", "A submarine moving into less dense water", "A submarine lifted from the water",
  "A Cartesian diver", "A Galilean thermometer", "Ballast tanks"];
for (const h of aHeadings) {
  if (!EXEMPT_WITHIN.has(h)) check(`h "${h}" (part A) unique within t04`, !t04h.has(h));
  t04h.set(h, "a");
}
for (const renamed of ["Spheres of different sizes", "Testing Stokes' law", "A balloon rising"]) {
  const bundleCount = bundleH.get(renamed) || 0;
  check(`renamed h "${renamed}" exists nowhere else on the site`, bundleCount === 0, `${bundleCount} elsewhere`);
}

/* — statements byte-identical to the deployed build and to ph02-a — */
const stmtB = readB.match(/spec: "25",\s*\n\s*statement:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
const stmtC = readC.match(/spec: "26",\s*\n\s*statement:\s*\n?\s*"((?:[^"\\]|\\.)*)"/);
check("spec 25 statement byte-identical to deployed", !!stmtB && stmtB[1] === bundleStmt.get("25"));
check("spec 26 statement byte-identical to deployed", !!stmtC && stmtC[1] === bundleStmt.get("26"));
check(
  "spec 25 statement matches ph02-a verbatim",
  !!stmtB && stmtB[1] === "a be able to use the equation for viscous drag (Stokes' Law), F = 6πηrv. b understand that this equation applies only to small spherical objects moving at low speeds with laminar flow (or in the absence of turbulent flow) and that viscosity is temperature dependent",
);
check(
  "spec 26 statement matches ph02-a verbatim",
  !!stmtC && stmtC[1] === "CORE PRACTICAL 2: Use a falling-ball method to determine the viscosity of a liquid",
);

/* — every card still cites a WPH11 session — */
for (const card of newCards) {
  check(`"${card.title}" cites WPH11`, /WPH11 (?:January|June|October) \d{4}(?: 01A)?, Q\d+/.test(card.question));
}

console.log(`\n${fails === 0 ? "ALL PASS" : fails + " FAILURES"} — drift, paper layout, uniqueness, statements, citations`);
if (fails > 0) process.exit(1);
