// DOM walkthrough of the Topic 5 note (owner build 2026-11-23):
// the t05 reader opens on the six elasticity statements, every
// line is an independent bullet (a bullet may carry one "\n" —
// two linked lines), the worked cards sit at the end of each
// section folded to one row, a click opens the question as the
// papers print it, the KaTeX typesets clean, and t01–t04 stay
// untouched.
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
const res = await page.goto(`${BASE}/notes/wph11-t05`, { waitUntil: "networkidle" });
check("t05 loads", res.status() === 200, `status ${res.status()}`);
await scrollAll();

/* — 0 · the worked cards fold: one row each, question hidden — */
const folded = await page.evaluate(() => ({
  heads: document.querySelectorAll(".worked-head").length,
  closed: document.querySelectorAll('.worked-head[aria-expanded="false"]').length,
}));
check("worked cards render as drop-downs", folded.heads === 12, `${folded.heads} cards`);
check("all cards start folded", folded.closed === folded.heads, `${folded.closed}/${folded.heads} closed`);
let text = await flowText();
check("question hidden while folded", !text.includes("A pulley system is used to lift a 5.00 kN load"));
check("steps hidden while folded", !text.includes("k = mass × gradient"));

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

/* — 2 · the six sections all render — */
for (const t of [
  "Hooke's law and stiffness",
  "Stress, strain and the Young modulus",
  "Force-extension graphs and the limit points",
  "Stress-strain graphs and breaking stress",
  "Core Practical 3 — the Young modulus of a wire",
  "Elastic strain energy",
]) check(`section renders: ${t}`, text.includes(t));

/* — 3 · the teaching subsections are all present — */
for (const t of [
  "Stiffness is a property of the object, not of the material",
  "The gradient of a force-extension graph",
  "Springs in series",
  "Springs in parallel",
  "The Young modulus",
  "The stress-strain graph while the sample is elastic",
  "Stiffness and the Young modulus",
  "The loading curve",
  "Limit of proportionality",
  "Elastic limit",
  "Yield point",
  "Elastic deformation and plastic deformation",
  "Loading and unloading",
  "Force-compression graphs",
  "Reading the curve",
  "Compressive stress-strain graphs",
  "Comparing two materials on one graph",
  "The principle",
  "The measurements",
  "The diameter readings",
  "Why a vernier scale",
  "Safety",
  "Reading the graph",
  "The area under the graph",
  "From stress-strain graphs",
]) check(`subsection: ${t}`, text.includes(t));

/* — 4 · the worked cards sit at the end of each section — */
const weHeads = await page.evaluate(
  () =>
    [...document.querySelectorAll("main h2, main h3, main div, main span")].filter(
      (el) => el.textContent?.trim() === "Worked examples",
    ).length,
);
check("Worked examples group headings", weHeads >= 6, `${weHeads} groups`);

/* — 5 · spec statements verbatim — */
check(
  "spec 27 statement verbatim",
  text.includes("be able to use the Hooke's law equation, ΔF = kΔx, where k is the stiffness of the object"),
);
check(
  "spec 28 statement verbatim",
  text.includes("(tensile or compressive) stress = force/cross-sectional area"),
);
check(
  "spec 30 statement verbatim",
  text.includes("be able to draw and interpret tensile or compressive stress-strain graphs, and understand the term breaking stress"),
);
check("spec 31 statement verbatim", text.includes("CORE PRACTICAL 3: Determine the Young modulus of a material"));
check(
  "spec 32 statement verbatim",
  text.includes("be able to calculate the elastic strain energy Eel in a deformed material sample"),
);

/* — 6 · KaTeX typeset, no raw math source — */
const counts = await page.evaluate(() => ({
  katex: document.querySelectorAll(".katex").length,
  katexErrors: document.querySelectorAll(".katex-error").length,
  rawDollars: (document.querySelector("main")?.textContent.match(/\$/g) || []).length,
}));
check("KaTeX renders", counts.katex > 100, `${counts.katex} nodes`);
check("no KaTeX errors", counts.katexErrors === 0, `${counts.katexErrors}`);
check("no raw $ in main", counts.rawDollars === 0, `${counts.rawDollars}`);

/* — 7 · every card's question breaks into lines, citation last — */
const layout = await page.evaluate(() => {
  const cards = [...document.querySelectorAll(".worked-head")];
  const perCard = cards.map((head) => {
    const body = head.parentElement;
    const q = body?.querySelector("p");
    const brs = q ? q.querySelectorAll("br").length : -1;
    return { title: head.textContent || "", brs };
  });
  const rope = perCard.find((c) => c.title.includes("The nylon rope in the pulley system"));
  const literalNl = [...document.querySelectorAll("main p")].some((p) =>
    (p.textContent || "").includes("\\n"),
  );
  return { n: perCard.length, perCard, rope, literalNl };
});
check("every card exposes its question paragraph", layout.perCard.every((c) => c.brs >= 0), `${layout.n} cards`);
check(
  "every question breaks into lines (scenario / parts / citation)",
  layout.perCard.every((c) => c.brs >= 2),
  `min ${Math.min(...layout.perCard.map((c) => c.brs))} breaks, total ${layout.perCard.reduce((n, c) => n + c.brs, 0)}`,
);
check("rope card: scenario, (a), (b)(i), (b)(ii), (b)(iii) and citation all present", text.includes("The pulley system lifts the 5.00 kN weight at a steady rate") && text.includes("Calculate the work done in stretching the rope") && text.includes("WPH11 June 2021, Q17"));
check("no literal \\n leaks into prose", !layout.literalNl);

/* — 8 · the owner's two-line bullets render inside one bullet —
   a bullet item split on \n yields block spans inside the li — */
const twoLine = await page.evaluate(() => {
  const lis = [...document.querySelectorAll("main li")];
  const multi = lis.filter((li) => li.querySelectorAll("span.block").length >= 2);
  return { multi: multi.length, sample: multi[0]?.textContent?.slice(0, 80) || "" };
});
check("two-line bullets render inside one bullet", twoLine.multi >= 3, `${twoLine.multi} found — "${twoLine.sample}…"`);

/* — 9 · worked cards cite the 2020–2024 papers, ms notes render — */
const worked = await page.evaluate(() => ({
  mathLines: [...document.querySelectorAll("main span")].filter(
    (el) => el.className?.baseVal === undefined && String(el.className).includes("my-2"),
  ).length,
  msNotes: [...document.querySelectorAll("main span")].filter(
    (el) => el.children.length === 0 && /Examiner's report|Mark scheme/i.test(el.textContent || ""),
  ).length,
}));
check("ruled math lines render", worked.mathLines >= 20, `${worked.mathLines}`);
check("ms notes render inside cards", worked.msNotes >= 12, `${worked.msNotes}`);
for (const cite of [
  "WPH11 January 2020, Q17",
  "WPH11 June 2021, Q17",
  "WPH11 October 2021, Q14",
  "WPH11 October 2022, Q12",
  "WPH11 October 2020, Q16",
  "WPH11 June 2022, Q12",
  "WPH11 January 2023, Q14",
  "WPH11 October 2024, Q18",
  "WPH11 January 2020, Q18",
  "WPH11 June 2024, Q16",
  "WPH11 October 2023, Q16",
  "WPH11 January 2024, Q11",
]) check(`citation: ${cite}`, text.includes(cite));

/* — 10 · mark-scheme and examiner verbatims present — */
for (const q of [
  "Maximum value of weight/force for which weight/force is proportional to extension",
  "It's the force / stress beyond which the cable does not return to its original length",
  "Stress (or strain) value at/beyond which a material/object undergoes a sudden or large plastic deformation",
  "Material returns to original shape/size when stress/force/tension removed",
  "Twice the force for two thirds of the extension gives four thirds of the energy",
  "A ratio of two quantities with the same unit does not have a unit",
  "Measure (diameter) at several positions along the wire",
  "The vernier scale has a better resolution",
  "(Safety) goggles should be worn",
  "When the force was removed the rubber band returned to its original length",
  "Some candidates incorrectly treated each line as a single straight line",
  "So the change in elastic strain energy stored > change in gravitational potential energy of the electromagnet",
]) check(`verbatim present: ${q.slice(0, 44)}…`, text.includes(q));

/* — 11 · a card toggles fold → open — */
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The elastic cord on the air track"));
  target?.scrollIntoView({ block: "center" });
});
await page.waitForTimeout(400);
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The elastic cord on the air track"));
  if (target?.getAttribute("aria-expanded") === "true") target.click();
});
await page.waitForTimeout(900);
const before = await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The elastic cord on the air track"));
  return target?.getAttribute("aria-expanded");
});
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The elastic cord on the air track"));
  target?.click();
});
await page.waitForTimeout(900);
const after = await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The elastic cord on the air track"));
  return target?.getAttribute("aria-expanded");
});
check("cord card toggles folded → open", before === "false" && after === "true", `${before} → ${after}`);
await page.screenshot({ path: "/tmp/render/t05-card.png" });

/* — 12 · the other topics stay untouched — */
await page.goto(`${BASE}/notes/wph11-t04`, { waitUntil: "networkidle" });
await scrollAll();
const t4 = await flowText();
check("t04 untouched", t4.includes("When the density of the fluid increases") && t4.includes("When the density of the fluid decreases"));
check("t04 owns no elasticity sections", !t4.includes("Hooke's law and stiffness") && !t4.includes("Core Practical 3"));

await page.goto(`${BASE}/notes/wph11-t01`, { waitUntil: "networkidle" });
await scrollAll();
const t1 = await flowText();
check("t01 untouched", t1.includes("The equations of uniformly accelerated motion") && t1.includes("Core Practical 1"));

await page.goto(`${BASE}/notes/wph11-t02`, { waitUntil: "networkidle" });
await scrollAll();
const t2 = await flowText();
check("t02 untouched", t2.includes("momentum") || t2.includes("Newton's third law"));

check("no page errors", errors.length === 0, errors.slice(0, 2).join(" | "));

console.log(`\n${fails === 0 ? "ALL PASS" : fails + " FAILURES"}`);
await browser.close();
process.exit(fails === 0 ? 0 : 1);
