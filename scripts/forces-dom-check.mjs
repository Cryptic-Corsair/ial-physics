// DOM walkthrough of the rebuilt Forces note (owner instruction
// 2026-11-22): the t01 reader opens on the rebuilt sections, KaTeX
// typesets the math, worked cards render with the spacious step
// layout and the ms note, and no raw $…$ source leaks into text.
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
const res = await page.goto(`${BASE}/notes/wph11-t01`, { waitUntil: "networkidle" });
check("t01 loads", res.status() === 200, `status ${res.status()}`);
await scrollAll();

/* — 0 · the worked cards fold now (site-wide dropdowns): unfold
   every card before any content check reads the flow — */
const t1fold = await page.evaluate(() => ({
  heads: document.querySelectorAll(".worked-head").length,
  closed: document.querySelectorAll('.worked-head[aria-expanded="false"]').length,
}));
check("t01 cards fold by default", t1fold.heads > 0 && t1fold.closed === t1fold.heads, `${t1fold.heads} cards, ${t1fold.closed} closed`);
await page.evaluate(() =>
  document
    .querySelectorAll('.worked-head[aria-expanded="false"]')
    .forEach((el) => el.click()),
);
await page.waitForTimeout(1200);
await scrollAll();
const text = await flowText();

/* — 1 · the rebuilt sections all render, in order — */
for (const t of [
  "The equations of uniformly accelerated motion",
  "Reading and drawing motion graphs",
  "Slopes and areas — including non-uniform acceleration",
  "Scalars and vectors",
  "Resolving a vector into components",
  "Finding a resultant",
  "Projectiles — the two independent motions",
  "Free-body diagrams and centre of gravity",
  "ΣF = ma — Newton's second law, the first law, and terminal velocity",
  "Weight and gravitational field strength",
  "Core Practical 1 — the acceleration of free fall",
]) check(`section renders: ${t}`, text.includes(t));

/* — 2 · the spec statements are verbatim — */
check("spec 1 statement verbatim", text.includes("s = (u + v)t/2, v = u + at"));
check("spec 9 statement verbatim", text.includes("including Newton's first law of motion where a = 0"));

/* — 3 · KaTeX typeset, no raw math source — */
const counts = await page.evaluate(() => ({
  katex: document.querySelectorAll(".katex").length,
  katexErrors: document.querySelectorAll(".katex-error").length,
  rawDollars: (document.querySelector("main")?.textContent.match(/\$/g) || []).length,
}));
check("KaTeX renders", counts.katex > 100, `${counts.katex} nodes`);
check("no KaTeX errors", counts.katexErrors === 0, `${counts.katexErrors}`);
check("no raw $ in main", counts.rawDollars === 0, `${counts.rawDollars}`);

/* — 4 · worked cards with the spacious layout (folded open here;
   the label count is 2 nodes per card — span + wrapper) — */
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
check("worked cards render", worked.cards >= 25, `${worked.cards} cards`);
check("ruled math lines render", worked.mathLines >= 30, `${worked.mathLines}`);
check("ms notes render inside cards", worked.msNotes >= 10, `${worked.msNotes}`);
check("cards cite papers", text.includes("WPH11 January 2024, Q12") && text.includes("WPH11 October 2024, Q17"));
check("old narrated card lead is gone", !text.includes("Worked example · the dart"));

/* — 5 · mark-scheme verbatims present — */
for (const q of [
  "It was reasonably common for students to incorrectly round their calculated answer to 0.138 s",
  "As lift decelerates reaction is less than weight",
  "the components of T acting vertically should be cos and should form the denominator",
  "(Downward) air resistance force, (initially zero) increases as velocity/speed increases",
  "Balloon continues to move (upwards) at constant velocity",
]) check(`verbatim present: ${q.slice(0, 48)}…`, text.includes(q));

/* — 6 · screenshot the dart card (the spacious look, unfolded) — */
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("A dart thrown at a dartboard"));
  target?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(500);
await page.screenshot({ path: "/tmp/render/t01-card.png" });

/* — 7 · other topics untouched: t02 reader still opens on its first section — */
await page.goto(`${BASE}/notes/wph11-t02`, { waitUntil: "networkidle" });
await scrollAll();
const t2 = await flowText();
check("t02 untouched", t2.includes("Newton's third law — the force-pair rules") && t2.includes("Centre of gravity and the principle of moments"));

check("no page errors", errors.length === 0, errors.slice(0, 2).join(" | "));

console.log(`\n${fails === 0 ? "ALL PASS" : fails + " FAILURES"}`);
await browser.close();
process.exit(fails === 0 ? 0 : 1);
