// DOM walkthrough of the rebuilt Topic 4 note (owner instruction
// 2026-11-23): the t04 reader opens on the rebuilt fluids sections,
// KaTeX typesets the math, worked cards render with the spacious
// step layout and the ms note, and no raw $…$ source leaks into
// text. t01–t03 stay untouched.
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
let fails = 0;
const check = (name, ok, detail = "") => {
  if (!ok) fails++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
};

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));

const flowText = async () =>
  page.evaluate(() => document.querySelector("main")?.textContent || "");

const scrollAll = async () => {
  await page.evaluate(() => {
    const el = document.scrollingElement;
    let y = 0;
    const step = () => {
      y += 1400;
      el.scrollTop = y;
      if (y < el.scrollHeight) setTimeout(step, 60);
    };
    step();
  });
  await page.waitForTimeout(1500);
};

await page.setViewportSize({ width: 1440, height: 2400 });
const res = await page.goto(`${BASE}/notes/wph11-t04`, { waitUntil: "networkidle" });
check("t04 loads", res.status() === 200, `status ${res.status()}`);
await scrollAll();
const text = await flowText();

/* — 1 · the rebuilt sections all render, in order — */
for (const t of [
  "Density",
  "Upthrust and flotation",
  "Viscosity, Stokes' law and terminal velocity",
  "Core Practical 2 — falling-ball viscometer",
]) check(`section renders: ${t}`, text.includes(t));

/* — 2 · spec statements verbatim — */
check("spec 23 statement verbatim", text.includes("be able to use the equation density ρ = m/V"));
check(
  "spec 25 statement verbatim",
  text.includes("applies only to small spherical objects moving at low speeds with laminar flow"),
);
check("spec 26 statement verbatim", text.includes("CORE PRACTICAL 2: Use a falling-ball method"));

/* — 3 · the Hooke's-law sections are gone from the page — */
check(
  "elasticity sections gone",
  !text.includes("Hooke's law and stiffness") &&
    !text.includes("Stress, strain and the Young modulus") &&
    !text.includes("Core Practical 3") &&
    !text.includes("Elastic strain energy"),
);

/* — 4 · KaTeX typeset, no raw math source — */
const counts = await page.evaluate(() => ({
  katex: document.querySelectorAll(".katex").length,
  katexErrors: document.querySelectorAll(".katex-error").length,
  rawDollars: (document.querySelector("main")?.textContent.match(/\$/g) || []).length,
}));
check("KaTeX renders", counts.katex > 100, `${counts.katex} nodes`);
check("no KaTeX errors", counts.katexErrors === 0, `${counts.katexErrors}`);
check("no raw $ in main", counts.rawDollars === 0, `${counts.rawDollars}`);

/* — 5 · worked cards with the spacious layout — */
const worked = await page.evaluate(() => ({
  cards: [...document.querySelectorAll("main div, main span")].filter(
    (el) => el.textContent?.trim() === "Worked example",
  ).length / 2,
  mathLines: [...document.querySelectorAll("main span")].filter(
    (el) => el.className?.baseVal === undefined && String(el.className).includes("my-2"),
  ).length,
  msNotes: [...document.querySelectorAll("main span")].filter(
    (el) => el.children.length === 0 && /Examiner's report|Mark scheme/i.test(el.textContent || ""),
  ).length,
}));
check("worked cards render", worked.cards >= 27, `${worked.cards} cards`);
check("ruled math lines render", worked.mathLines >= 40, `${worked.mathLines}`);
check("ms notes render inside cards", worked.msNotes >= 20, `${worked.msNotes}`);
check("cards cite papers", text.includes("WPH11 January 2020, Q19") && text.includes("WPH11 October 2021, Q17"));

/* — 6 · mark-scheme verbatims present — */
for (const q of [
  "An upwards force caused by the displacement of fluid (by an object)",
  "There was a clear misconception demonstrated by many candidates that the iceberg would float if weight is less than upthrust",
  "A more mathematically accurate description of 'weight = drag + upthrust' was sufficient",
  "(So) a smaller volume of seawater needs to be displaced (because seawater has a greater density)",
  "Upthrust on a bulb is equal to weight of liquid displaced.",
  "Weight remains constant [do not accept \"mass\"]",
]) check(`verbatim present: ${q.slice(0, 44)}…`, text.includes(q));

/* — 7 · screenshot the balance card (the spacious look, always open) — */
const cardTitle = page.locator("h4", { hasText: "The sphere lowered into water" }).first();
await cardTitle.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: "/tmp/render/t04-card.png" });

/* — 8 · other topics untouched: t01 and t02 readers still open — */
await page.goto(`${BASE}/notes/wph11-t01`, { waitUntil: "networkidle" });
await scrollAll();
const t1 = await flowText();
check("t01 untouched", t1.includes("The equations of uniformly accelerated motion") && t1.includes("Core Practical 1"));

await page.goto(`${BASE}/notes/wph11-t02`, { waitUntil: "networkidle" });
await scrollAll();
const t2 = await flowText();
check("t02 untouched", t2.includes("Newton's third law — the force-pair rules") || t2.includes("momentum"));

await page.goto(`${BASE}/notes/wph11-t03`, { waitUntil: "networkidle" });
await scrollAll();
const t3 = await flowText();
check("t03 untouched", t3.includes("Work done") || t3.includes("efficiency"));

check("no page errors", errors.length === 0, errors.slice(0, 2).join(" | "));

console.log(`\n${fails === 0 ? "ALL PASS" : fails + " FAILURES"}`);
await browser.close();
process.exit(fails === 0 ? 0 : 1);
