// DOM-level check of the Topic 2 rebuilt note (wph11-t02): the five
// statements verbatim in order, the situation headings with their
// "Therefore," closers, no session tags outside the worked cards and
// the labelled notes, 35 folded cards that unfold to their citations,
// five "Worked examples" group headings, KaTeX rendered clean.
// (textContent, not innerText — content-visibility hides offscreen
// sections from innerText.)
import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const checks = [];
const add = (name, ok, detail = "") => {
  checks.push({ name, ok, detail });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
};

const browser = await chromium.launch({
  executablePath: "/home/z/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell",
});
const page = await browser.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));

const res = await page.goto(`${BASE}/notes/wph11-t02`, { waitUntil: "networkidle" });
add("t02 reader loads at /notes/wph11-t02", res.status() === 200, `status ${res.status()}`);

const MAIN = "main.notes-flow";
const scopeText = () => page.evaluate((sel) => document.querySelector(sel)?.textContent || "", MAIN);

// scroll the whole flow so content-visibility renders every section
// (Node-driven: wait for each step so the final text capture is complete)
{
  const height = await page.evaluate(() => document.scrollingElement.scrollHeight);
  for (let y = 0; y < height; y += 1400) {
    await page.evaluate((yy) => { document.scrollingElement.scrollTop = yy; }, y);
    await page.waitForTimeout(70);
  }
  await page.evaluate(() => { document.scrollingElement.scrollTop = 0; });
}
await page.waitForTimeout(1200);
const text = await scopeText();

// 1. the five statements, verbatim, in order
const stmtPos = (s) => text.indexOf(s);
const s12 = stmtPos("know and understand Newton's third law of motion and know the properties of pairs of forces in an interaction between two bodies");
const s13 = stmtPos("understand that momentum is defined as");
const s14 = stmtPos("know the principle of conservation of linear momentum, understand how to relate this to Newton's laws of motion and understand how to apply this to problems in one dimension");
const s15 = stmtPos("be able to use the equation for the moment of a force");
const s16 = stmtPos("be able to use the concept of centre of gravity of an extended body and apply the principle of moments to an extended body in equilibrium");
add("statement 12 present", s12 >= 0);
add("statement 13 present", s13 >= 0);
add("statement 14 present", s14 >= 0);
add("statement 15 present", s15 >= 0);
add("statement 16 present", s16 >= 0);
add("statements in spec order 12→16", s12 >= 0 && s13 > s12 && s14 > s13 && s15 > s14 && s16 > s15);

// 2. section titles
for (const t of [
  "Newton's third law — the force-pair rules",
  "Momentum",
  "Conservation of momentum",
  "The moment of a force",
  "Centre of gravity and the principle of moments",
]) add(`section title: ${t.slice(0, 44)}`, text.includes(t));

// 3. the situation headings and their "Therefore," closers
for (const line of [
  "The weight of a cable car",
  "Therefore, the partner of any weight is the gravitational pull of the object on the Earth — never a contact force on the same object.",
  "A person sitting on a chair",
  "Therefore, equal and opposite alone is never the test — a third law pair must act on two different bodies and be of the same type.",
  "A climber lowered on a rope",
  "A box sliding down a ramp",
  "A star and a planet",
  "Therefore, the forces in a third law pair are always equal in magnitude, even when the two bodies have very different masses.",
  "A rocket ejecting hot gases",
  "Therefore, the rocket gains velocity because the ejected gases push back on it",
  "An athlete jumping off the ground",
  "Two magnetic gliders on an air track",
  "Therefore, internal forces can never change a system's total momentum",
  "A car on a circular path",
  "Therefore, constant speed on a bend means changing momentum and constant kinetic energy.",
  "Two objects falling side by side",
  "Therefore, in the same fall the heavier object gains more momentum — not more velocity.",
  "Combining momenta",
  "Therefore, combine momenta like forces",
  "A child throwing a ball from a skateboard",
  "Therefore, the recoil is slower than the throw because the same momentum sits on the larger mass.",
  "A ball launcher on wheels",
  "Two gliders that stick together",
  "A spaceship separating into modules",
  "A popcorn kernel popping",
  "Therefore, an explosion splits zero into two equal and opposite momenta",
  "Two objects moving in opposite directions",
  "Therefore, opposite directions subtract — the combined speed is the difference of the momenta over the total mass.",
  "Two objects moving in the same direction",
  "Deducing whether momentum is conserved",
  "Therefore, in a deduce question the marks are the two totals, the written comparison, and the conclusion, in that order.",
  "How Newton's laws conserve momentum",
  "Therefore, a collision never changes the total momentum",
  "The Newton's cradle",
  "Therefore, the cradle shows both laws at once",
  "A person standing on a pedal",
  "Therefore, the pedal turns hardest at the bottom of the stroke and not at all at the top",
  "Pushing an inclined rail",
  "Therefore, the perpendicular push is always the cheaper one",
  "A flagpole held by a wire",
  "Therefore, take moments about the hinge — the unknown force there drops out of the equation.",
  "A parasol in the wind",
  "Therefore, once the wind's moment beats the weight's, the toppling never stops",
  "A stone on a step",
  "Therefore, take moments about the edge — the weight's small arm against the force's large arm",
  "A beam on two supports",
  "Therefore, moments split the load between the supports, and the force balance checks the total.",
  "A lorry crossing a bridge",
  "Therefore, the load moves as the lorry crosses — the support it moves away from carries more and more of the bridge.",
  "A crane with a counterweight",
  "Therefore, a counterweight buys a longer reach",
  "A loft ladder on a hinged board",
  "Therefore, the board stays put because the block, not the hinge, carries the spare moment.",
  "A coat hook on a screw",
  "Therefore, the deduce question is a moment comparison",
  "A book overhanging a shelf",
  "Therefore, a book overhangs exactly half its length before the centre of gravity leaves the shelf",
  "A dragster on two axles",
  "Therefore, the centre of gravity's position splits the weight between the axles",
]) add(`spot: ${line.slice(0, 46)}…`, text.includes(line));

// 4. the dictated key content: the five pair properties, the
//    conservation definition with its condition, the moment equation
for (const line of [
  "equal in magnitude",
  "opposite in direction",
  "of the same type",
  "acts on the other body",
  "acts at the same time",
  "Total momentum before a collision = total momentum after it",
  "provided no external resultant force acts on the system",
  "moment = Fx",
]) add(`key wording: ${line.slice(0, 46)}`, text.includes(line));

// 5. no session tags outside the worked cards and the labelled notes
const strayTags = await page.evaluate((sel) => {
  const main = document.querySelector(sel);
  if (!main) return [];
  const out = [];
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    const t = n.textContent || "";
    if (!t.includes("(WPH11")) continue;
    const el = n.parentElement;
    if (el?.closest(".worked-head, .worked-toggle, [class*='worked']")) continue;
    // labelled notes carry their citations by design: the note block
    // contains one of the three labels within a short ancestor chain
    let anc = el;
    let inNote = false;
    for (let i = 0; i < 4 && anc; i++) {
      const txt = anc.textContent || "";
      if (
        (txt.includes("Mark scheme wording") || txt.includes("Examiner's report") || txt.includes("Not accepted")) &&
        txt.length < 1400
      ) {
        inNote = true;
        break;
      }
      anc = anc.parentElement;
    }
    if (!inNote) out.push(t.trim().slice(0, 90));
  }
  return out;
}, MAIN);
add("no session tags outside cards and labelled notes", strayTags.length === 0, strayTags.join(" | ").slice(0, 200));

// 6. worked cards: 35, each cites its session once unfolded
const heads = await page.evaluate((sel) => document.querySelectorAll(sel + " .worked-head").length, MAIN);
await page.evaluate((sel) => {
  document.querySelectorAll(sel + " .worked-head").forEach((h) => h.dispatchEvent(new MouseEvent("click", { bubbles: true })));
}, MAIN);
await page.waitForTimeout(600);
const cardTexts = await page.evaluate((sel) => {
  const main = document.querySelector(sel);
  return Array.from(main.querySelectorAll(".worked-head")).map((h) => {
    let card = h.parentElement;
    let up = 0;
    while (card && up < 3 && !(card.textContent || "").includes("Answer")) { card = card.parentElement; up++; }
    return card?.textContent || "";
  });
}, MAIN);
const uncited = cardTexts.filter((t) => !t.includes("WPH11")).length;
add(`worked cards cite sessions (${cardTexts.length} cards)`, cardTexts.length === 35 && uncited === 0, `${cardTexts.length} cards (of ${heads} heads), ${uncited} uncited`);

// 7. five "Worked examples" group headings
const groups = await page.evaluate((sel) => {
  const main = document.querySelector(sel);
  return Array.from(main.querySelectorAll("h3, h4, h2")).filter((h) => (h.textContent || "").trim() === "Worked examples").length;
}, MAIN);
add("five Worked examples groups", groups === 5, `${groups} groups`);

// 8. the first card folds to its title and unfolds to its question
const firstTitle = "Identifying the pair";
const firstQ = "Which of the following forms a Newton's third law pair of forces with the weight of the cable car?";
const foldedHasTitle = await page.evaluate((sel) => {
  const h = document.querySelector(sel)?.querySelector(".worked-head");
  return (h?.textContent || "").includes("Worked example") && (h?.textContent || "").includes("Identifying the pair");
}, MAIN);
const detailHasQ = await page.evaluate((sel) => (document.querySelector(sel)?.textContent || "").includes("Which of the following forms a Newton's third law pair of forces with the weight of the cable car?"), MAIN);
add("first card folds to its title and unfolds to its question", foldedHasTitle && detailHasQ, `folded ${foldedHasTitle}, question ${detailHasQ}`);

// 9. KaTeX rendered, no raw $ and no errors
const katexCount = await page.evaluate((sel) => document.querySelectorAll(sel + " .katex").length, MAIN);
const katexErrors = await page.evaluate((sel) => document.querySelectorAll(sel + " .katex-error").length, MAIN);
add("KaTeX renders clean", katexCount >= 200 && katexErrors === 0, `${katexCount} nodes, ${katexErrors} errors`);
const rawDollar = await page.evaluate((sel) => (document.querySelector(sel)?.textContent || "").split("$").length - 1, MAIN);
add("no raw $ in the flow", rawDollar === 0, `${rawDollar} stray`);
add("no page errors", errors.length === 0, errors.join(" | ").slice(0, 160));

const fails = checks.filter((c) => !c.ok).length;
console.log(`\n${checks.length - fails}/${checks.length} checks pass`);
await browser.close();
process.exit(fails ? 1 : 0);
