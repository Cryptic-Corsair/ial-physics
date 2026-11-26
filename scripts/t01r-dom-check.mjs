// DOM-level check of the Topic 1 revised note (wph11-t01r) after the
// owner's dictated-register pass: one sentence per bullet, the owner's
// vacuum build-up in place, no session tags in the teaching body, and
// the worked cards still carrying their citations.
// (textContent, not innerText — content-visibility hides offscreen
// sections from innerText; handover trap 3.)
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

const res = await page.goto(`${BASE}/notes/wph11-t01r`, { waitUntil: "networkidle" });
add("t01r reader loads at /notes/wph11-t01r", res.status() === 200, `status ${res.status()}`);

const MAIN = "main.notes-flow";
const scopeText = () => page.evaluate((sel) => document.querySelector(sel)?.textContent || "", MAIN);

// scroll the whole flow so content-visibility renders every section
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
const text = await scopeText();

// 1. the owner's vacuum section: title + the build-up, line by line
add("vacuum section title", text.includes("Two objects thrown in a vacuum in different directions"));
for (const line of [
  "In a vacuum, two objects are thrown in different directions with the same initial speed from the same height.",
  "Weight is the only force that acts on an object in a vacuum.",
  "So both objects have the same acceleration,",
  "There are no other forces acting on either object.",
  "Both objects start with the same speed, so they start with the same kinetic energy.",
  "They fall from the same height, so gravity adds the same kinetic energy to each.",
  "Both objects reach the floor with the same kinetic energy.",
  "The only difference is that the two objects have different velocities.",
  "Velocity is a vector quantity, so it has magnitude",
  "Speed and kinetic energy are scalar quantities, so they have no direction.",
  "So two objects thrown in different",
  "Acceleration is a vector too, but both accelerations have the same magnitude and the same downward direction.",
  "Therefore, two objects thrown from the same height with the same initial speed in a vacuum have the same acceleration and the same kinetic energy, but different velocities.",
]) add(`build-up: ${line.slice(0, 48)}…`, text.includes(line));

// 2. the old packed line is gone
add("old packed bullet gone", !text.includes("whatever direction it travels in"));

// 3. no session tags in the teaching body: any "(WPH11" outside worked cards fails
const strayTags = await page.evaluate((sel) => {
  const main = document.querySelector(sel);
  if (!main) return [];
  const out = [];
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) {
    const t = n.textContent || "";
    if (t.includes("(WPH11")) {
      const card = n.parentElement?.closest(".worked-toggle, [class*='worked']");
      if (!card) out.push(t.trim().slice(0, 90));
    }
  }
  return out;
}, MAIN);
add("no session tags outside worked cards", strayTags.length === 0, strayTags.join(" | ").slice(0, 160));

// 4. every worked card still cites its session — unfold the folded
//    drop-downs first: the question only enters the DOM on click
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
add(`worked cards cite sessions (${cardTexts.length} cards)`, cardTexts.length === 52 && uncited === 0, `${cardTexts.length} cards (of ${heads} heads), ${uncited} uncited`);

// 5. the register holds on the other scenarios: situation-named
//    headings, the owner-voice build-ups, "Therefore," closers
for (const line of [
  "A student slides down a curved slide",
  "Therefore, on a curved slide the speed at the bottom comes from energy, not from the equations of motion.",
  "A ball falling through the air",
  "In reality, the ball drags the air with it as it falls.",
  "Therefore, the actual time is greater than calculated, and the actual velocity is less than calculated.",
  "A car braking to a stop",
  "A car is travelling at speed",
  "Therefore, the car at double the speed needs four times the distance to stop.",
  "A ball that rebounds",
  "Therefore, only the velocity flips sign at a rebound, and the acceleration keeps pointing down.",
  "A ball falling through a liquid",
  "Three forces act on it: the weight downwards, the drag upwards, and the upthrust upwards.",
  "Therefore, the sketch from rest is a curve through the origin that flattens into a horizontal line.",
  "A ball is dropped, hits the floor, and bounces back up.",
  "A car at constant speed on a bending road",
  "The speedometer reading never changes, so the speed is constant.",
  "Therefore, a car at constant speed on a bending road has a changing velocity and an acceleration.",
  "A runner completes one lap",
  "Therefore, one full lap gives a distance equal to the lap and a displacement of zero.",
  "A car slowing down while travelling north",
  "A ball launched at different angles",
  "A ball is launched at angle",
  "Therefore, the smaller the launch angle, the bigger the launch speed needed to reach the same height.",
  "A weight hanging on a wire",
  "A weight hangs from the middle of a wire, and the wire sags on both sides.",
  "Therefore, a flatter wire must pull with a larger tension to carry the same weight.",
  "A weight slides down a slope at angle",
  "The surface pushes straight back, so the two of them balance.",
  "Therefore, the steeper the slope, the bigger",
  // statements 6–11: the situations described first, with closers
  "Finding a resultant",
  "Two forces on a sailing boat",
  "Therefore, two forces at any angle add tip-to-tail on a scaled drawing, and the resultant closes the triangle.",
  "Two perpendicular forces",
  "Therefore, perpendicular forces add by Pythagoras, and the angle comes from their tangent.",
  "Projectiles",
  "A ball kicked at an angle",
  "The vertical motion and the horizontal motion are",
  "The one quantity the two columns share is the",
  "Therefore, the two motions of a projectile are worked out separately, and only time joins them.",
  "A stone thrown horizontally from a cliff",
  "The only difference is the landing distance, because the fall time is the same.",
  "Therefore, at the top of a flight the vertical velocity is zero and the acceleration is still",
  "A car accelerating along a road",
  "Therefore, the accelerating car draws as three arrows from one dot, with the two vertical arrows equal.",
  "A ball-bearing falling at terminal velocity",
  "Therefore, the completed diagram shows three balanced forces acting through the centre.",
  "Newton's laws and terminal velocity",
  "A car travelling at constant velocity",
  "Therefore, rest or constant velocity means",
  "A rocket lifting off",
  "The thrust is",
  "Therefore, the thrust is never the resultant, and the acceleration increases as the fuel burns.",
  "A skydiver falling towards the ground",
  "The resultant force is the weight minus the drag:",
  "Since",
  "as the resultant force decreases, the acceleration decreases.",
  "The skydiver reaches his",
  "Therefore, a falling skydiver accelerates less and less as the drag increases, and falls at constant velocity from then on.",
  "A skydiver after the parachute opens",
  "Therefore, the opened parachute makes the resultant point upwards, and the skydiver slows to a new terminal velocity.",
  "Weight and gravitational field strength",
  "Core Practical 1 — the acceleration of free fall",
  "The strobe photograph",
  "The light gates",
  "The stopwatch and rule",
  "Graphs that give g",
  // the old slop register is gone
]) add(`spot: ${line.slice(0, 44)}…`, text.includes(line));
for (const gone of [
  "The table tennis ball is the exam's version of this.",
  "A car along a bending road is the exam's version of this.",
  "The same fact works from the other end.",
  "The curve flattens.",
  "A closed lap brings the object back to its start.",
  "When air resistance matters",
  "At that time, we use GPE = KE",
  "It accelerates nothing while the contact lasts.",
  "The braking force and the mass fix the deceleration.",
  "the velocity now stays constant",
  "(WPH11 June 2021, Q7).",
]) add(`gone: ${gone.slice(0, 44)}…`, !text.includes(gone));

// 6. the intro now describes the new register and the full statement range
add("intro describes the owner register", text.includes("one short sentence per bullet") && text.includes("the way a student reads it"));
add("intro covers statements 1–11", text.includes("eleven mechanics statements"));

// 7. KaTeX rendered, no raw $ and no errors
const katexCount = await page.evaluate((sel) => document.querySelectorAll(sel + " .katex").length, MAIN);
const katexErrors = await page.evaluate((sel) => document.querySelectorAll(sel + " .katex-error").length, MAIN);
add("KaTeX renders clean", katexCount > 50 && katexErrors === 0, `${katexCount} nodes, ${katexErrors} errors`);
const rawDollar = await page.evaluate((sel) => (document.querySelector(sel)?.textContent || "").split("$").length - 1, MAIN);
add("no raw $ in the flow", rawDollar === 0, `${rawDollar} stray`);
add("no page errors", errors.length === 0, errors.join(" | ").slice(0, 160));

// 8. screenshot the vacuum section
const h3 = await page.evaluate(() => {
  const els = Array.from(document.querySelectorAll("main.notes-flow h4, main.notes-flow h3, main.notes-flow div"));
  const el = els.find((e) => (e.textContent || "").trim().startsWith("Two objects thrown in a vacuum"));
  if (!el) return null;
  el.scrollIntoView({ block: "start" });
  return true;
});
await page.waitForTimeout(600);
const shot = "t01r-vacuum.png";
await page.screenshot({ path: `screenshots/${shot}`, fullPage: false });
add("vacuum section screenshot", !!h3 && !!shot, shot);

const fails = checks.filter((c) => !c.ok).length;
console.log(`\n${checks.length - fails}/${checks.length} checks pass`);
await browser.close();
process.exit(fails ? 1 : 0);
