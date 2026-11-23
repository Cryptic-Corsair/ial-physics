// DOM walkthrough of the polished Topic 4 note (owner instruction
// 2026-11-23): the t04 reader opens on the rebuilt fluids sections,
// the scenario sections are back as teaching matter, the worked
// cards sit at the end of each section, folded to one row, and a
// click opens the question — set out the way the papers print it
// (scenario line, each part on its own line with its mark count,
// the citation on the last line) — then the steps and the answer.
// KaTeX typesets the math, no raw $…$ source leaks into text.
// t01–t03 stay untouched.
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:3000";
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

/* — 0 · the worked cards fold: one row each, question hidden — */
const folded = await page.evaluate(() => ({
  heads: document.querySelectorAll(".worked-head").length,
  closed: document.querySelectorAll('.worked-head[aria-expanded="false"]').length,
}));
check("worked cards render as drop-downs", folded.heads >= 27, `${folded.heads} cards`);
check("all cards start folded", folded.closed === folded.heads, `${folded.closed}/${folded.heads} closed`);
let text = await flowText();
check("question hidden while folded", !text.includes("cartesian diver' toy floats"));
check("steps hidden while folded", !text.includes("Use of V = m/ρ for water"));

/* — 1 · unfold every card, then read the whole flow — */
await page.evaluate(() =>
  document
    .querySelectorAll('.worked-head[aria-expanded="false"]')
    .forEach((el) => el.click()),
);
await page.waitForTimeout(1200);
const unfolded = await page.evaluate(
  () => document.querySelectorAll('.worked-head[aria-expanded="true"]').length,
);
check("every card unfolds on click", unfolded === folded.heads, `${unfolded} open`);
await scrollAll();
text = await flowText();

/* — 2 · the rebuilt sections all render, in order — */
for (const t of [
  "Density",
  "Upthrust and flotation",
  "Viscosity, Stokes' law and terminal velocity",
  "Core Practical 2 — falling-ball viscometer",
]) check(`section renders: ${t}`, text.includes(t));

/* — 3 · the scenario sections are back as teaching matter — */
for (const t of [
  "Volumes of solids",
  "Conversions and flow rate",
  "Hollow objects",
  "Pressure and depth",
  "Floating",
  "The balance experiment",
  "A hydrometer",
  "A submarine moving into less dense water",
  "A submarine lifted from the water",
  "A Cartesian diver",
  "A Galilean thermometer",
  "Ballast tanks",
  "When Stokes' law applies",
  "Sinking at terminal velocity",
  "Reaching terminal velocity",
  "Rising objects",
  "Spheres of different sizes",
  "Testing Stokes' law",
  "A balloon rising",
  "A sphere sinking into colder, deeper water",
  "The principle",
  "The measurements",
  "The method",
  "Design choices",
  "The free-body diagram of the falling ball",
  "Errors and validity",
]) check(`scenario section: ${t}`, text.includes(t));

/* — 4 · the worked cards sit at the end of each section — */
const weHeads = await page.evaluate(
  () =>
    [...document.querySelectorAll("main h2, main h3, main div, main span")].filter(
      (el) => el.textContent?.trim() === "Worked examples",
    ).length,
);
check("Worked examples group headings", weHeads >= 4, `${weHeads} groups`);

/* — 5 · spec statements verbatim — */
check("spec 23 statement verbatim", text.includes("be able to use the equation density ρ = m/V"));
check(
  "spec 25 statement verbatim",
  text.includes("applies only to small spherical objects moving at low speeds with laminar flow"),
);
check("spec 26 statement verbatim", text.includes("CORE PRACTICAL 2: Use a falling-ball method"));

/* — 6 · the elasticity sections stay gone — */
check(
  "elasticity sections gone",
  !text.includes("Hooke's law and stiffness") &&
    !text.includes("Stress, strain and the Young modulus") &&
    !text.includes("Core Practical 3") &&
    !text.includes("Elastic strain energy"),
);

/* — 7 · KaTeX typeset, no raw math source — */
const counts = await page.evaluate(() => ({
  katex: document.querySelectorAll(".katex").length,
  katexErrors: document.querySelectorAll(".katex-error").length,
  rawDollars: (document.querySelector("main")?.textContent.match(/\$/g) || []).length,
}));
check("KaTeX renders", counts.katex > 100, `${counts.katex} nodes`);
check("no KaTeX errors", counts.katexErrors === 0, `${counts.katexErrors}`);
check("no raw $ in main", counts.rawDollars === 0, `${counts.rawDollars}`);

/* — 8 · the worked questions are laid out as the papers print them —
   every card's question paragraph carries line breaks: the scenario
   on its own line, each part on its own line, the citation last — */
const layout = await page.evaluate(() => {
  const cards = [...document.querySelectorAll(".worked-head")];
  const perCard = cards.map((head) => {
    const body = head.parentElement;
    const q = body?.querySelector("p");
    const brs = q ? q.querySelectorAll("br").length : -1;
    return { title: head.textContent || "", brs };
  });
  const foram = perCard.find((c) => c.title.includes("The foram sinking deeper"));
  const mcq = perCard.find((c) => c.title.includes("The conditions for Stokes' law"));
  const literalNl = [...document.querySelectorAll("main p")].some((p) =>
    (p.textContent || "").includes("\\n"),
  );
  return { n: perCard.length, perCard, foram, mcq, literalNl };
});
check("every card exposes its question paragraph", layout.perCard.every((c) => c.brs >= 0), `${layout.n} cards`);
check(
  "every question breaks into lines (scenario / parts / citation)",
  layout.perCard.every((c) => c.brs >= 2),
  `min ${Math.min(...layout.perCard.map((c) => c.brs))} breaks, total ${layout.perCard.reduce((n, c) => n + c.brs, 0)}`,
);
check("foram card: the paper's six lines (data on its own line, as WPH11 prints it)", layout.foram && layout.foram.brs === 5, `${layout.foram?.brs} breaks`);
check("foram card: scenario, (i), (ii), (b) and citation all present", text.includes("(i) Show that the viscous drag on it is about") && text.includes("(b) As the forams sink deeper into the sea") && text.includes("WPH11 October 2022, Q17"));
check("MCQ card: rows one to a line", layout.mcq && layout.mcq.brs >= 5, `${layout.mcq?.brs} breaks`);
check("no literal \\n leaks into prose", !layout.literalNl);

/* — 9 · worked cards with the spacious layout, now unfolded — */
const worked = await page.evaluate(() => ({
  mathLines: [...document.querySelectorAll("main span")].filter(
    (el) => el.className?.baseVal === undefined && String(el.className).includes("my-2"),
  ).length,
  msNotes: [...document.querySelectorAll("main span")].filter(
    (el) => el.children.length === 0 && /Examiner's report|Mark scheme/i.test(el.textContent || ""),
  ).length,
}));
check("ruled math lines render", worked.mathLines >= 40, `${worked.mathLines}`);
check("ms notes render inside cards", worked.msNotes >= 20, `${worked.msNotes}`);
check("cards cite papers", text.includes("WPH11 January 2020, Q19") && text.includes("WPH11 October 2021, Q17"));

/* — 10 · mark-scheme and examiner verbatims present — */
for (const q of [
  "An upwards force caused by the displacement of fluid (by an object)",
  "There was a clear misconception demonstrated by many candidates that the iceberg would float if weight is less than upthrust",
  "A more mathematically accurate description of 'weight = drag + upthrust' was sufficient",
  "(So) a smaller volume of seawater needs to be displaced (because seawater has a greater density)",
  "Upthrust on a bulb is equal to weight of liquid displaced.",
  "Weight remains constant [do not accept \"mass\"]",
  "Many referred to weight, but did not specify whether this was the weight of the hydrometer",
  "least well described by candidates",
  "the narrative is: the bulb floats, the temperature rises, the bulb sinks",
]) check(`verbatim present: ${q.slice(0, 44)}…`, text.includes(q));

/* — 11 · the balance card toggles fold → open (step 1 unfolded
   every card, so fold this one back first) — */
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The sphere lowered into water"));
  target?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(400);
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The sphere lowered into water"));
  if (target?.getAttribute("aria-expanded") === "true") target.click();
});
await page.waitForTimeout(900);
const before = await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The sphere lowered into water"));
  return target?.getAttribute("aria-expanded");
});
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The sphere lowered into water"));
  target?.click();
});
await page.waitForTimeout(900);
const after = await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The sphere lowered into water"));
  return target?.getAttribute("aria-expanded");
});
check("balance card toggles folded → open", before === "false" && after === "true", `${before} → ${after}`);
await page.screenshot({ path: "/tmp/render/t04-card.png" });

/* — 12 · other topics untouched: t01 and t02 readers still open — */
await page.goto(`${BASE}/notes/wph11-t01`, { waitUntil: "networkidle" });
await scrollAll();
const t1 = await flowText();
check("t01 untouched", t1.includes("The equations of uniformly accelerated motion") && t1.includes("Core Practical 1"));
const t1folded = await page.evaluate(() => ({
  heads: document.querySelectorAll(".worked-head").length,
  closed: document.querySelectorAll('.worked-head[aria-expanded="false"]').length,
}));
check("t01 cards fold the same way", t1folded.heads > 0 && t1folded.closed === t1folded.heads, `${t1folded.heads} cards, ${t1folded.closed} closed`);

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
