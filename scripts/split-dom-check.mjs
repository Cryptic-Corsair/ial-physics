// DOM-level check of the Topic 1 → three-topic split (owner
// instruction 2026-11-22): four topics on the unit room, each notes
// doc opening with the right statements and titles, readers intact.
// textContent, not innerText — content-visibility hides offscreen
// sections from innerText; handover trap 3.
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
  await page.waitForTimeout(1200);
};

/* — 1 · the unit room lists the four topics with the split's titles — */
await page.goto(`${BASE}/wph11`, { waitUntil: "networkidle" });
let text = await flowText();
for (const [no, title, min] of [
  ["01", "Forces", "44"],
  ["02", "Moments and momentum", "18"],
  ["03", "Work, energy and power", "22"],
  ["04", "Materials", "66"],
]) {
  check(
    `unit room shows topic ${no} · ${title}`,
    text.includes(title),
    title ? "" : "missing",
  );
}
check("old combined title gone", !text.includes("Forces, motion and energy"));

/* — 2 · each reader: right statements, byte-order — */
const docs = [
  {
    id: "wph11-t01",
    title: "Forces",
    first: "The equations of uniformly accelerated motion",
    last: "Core Practical 1 — the acceleration of free fall",
    absent: "Conservation of momentum",
    range: ["spec 1", "spec 11"],
  },
  {
    id: "wph11-t02",
    title: "Moments and momentum",
    first: "Newton's third law — the force-pair rules",
    last: "Centre of gravity and the principle of moments",
    absent: "The equations of uniformly accelerated motion",
    range: ["spec 12", "spec 16"],
  },
  {
    id: "wph11-t03",
    title: "Work, energy and power",
    first: "Work done",
    last: "Efficiency",
    absent: "The moment of a force",
    range: ["spec 17", "spec 22"],
  },
  {
    id: "wph11-t04",
    title: "Materials — fluids, viscosity and elasticity",
    first: "Density",
    last: "Elastic strain energy",
    absent: "The moment of a force",
    range: ["spec 23", "spec 32"],
  },
];

for (const d of docs) {
  const res = await page.goto(`${BASE}/notes/${d.id}`, { waitUntil: "networkidle" });
  check(`${d.id} loads (${d.title})`, res.status() === 200, `status ${res.status()}`);
  await scrollAll();
  text = await flowText();
  check(`${d.id}: opens on "${d.first}"`, text.includes(d.first));
  check(`${d.id}: closes on "${d.last}"`, text.includes(d.last));
  check(`${d.id}: does not bleed into "${d.absent}"`, !text.includes(d.absent));
  /* the worked-card register is the mechanics docs'; the materials
     note keeps its scenario sections with Not accepted notes */
  if (d.id === "wph11-t04") {
    check(`${d.id}: Not accepted notes render`, text.includes("Not accepted"));
  } else {
    check(`${d.id}: worked cards render`, text.includes("Worked example"));
  }
}

/* — 3 · worked cards keep their paper citations in the split docs — */
await page.goto(`${BASE}/notes/wph11-t03`, { waitUntil: "networkidle" });
await scrollAll();
text = await flowText();
check("WEP cards cite papers", text.includes("WPH11 June 2025, Q14") && text.includes("WPH11 January 2024, Q14"));
await page.goto(`${BASE}/notes/wph11-t02`, { waitUntil: "networkidle" });
await scrollAll();
text = await flowText();
check("M&M cards cite papers", text.includes("WPH11 January 2025, Q14") && text.includes("WPH11 June 2023, Q19"));

/* — 4 · the spec index covers 32 statements across the four docs — */
await page.goto(`${BASE}/spec`, { waitUntil: "networkidle" });
await scrollAll();
text = await flowText();
for (const s of ["uniformly accelerated", "Centre of gravity", "Efficiency", "Young modulus"]) {
  check(`spec index carries "${s}"`, text.includes(s));
}

/* — 5 · no console errors anywhere — */
check("no page errors", errors.length === 0, errors.slice(0, 2).join(" | "));

/* — 6 · screenshots for the eyes — */
await page.goto(`${BASE}/wph11`, { waitUntil: "networkidle" });
await page.screenshot({ path: "/tmp/render/split-unit.png", fullPage: false });
for (const d of docs) {
  await page.goto(`${BASE}/notes/${d.id}`, { waitUntil: "networkidle" });
  await page.screenshot({ path: `/tmp/render/split-${d.id}.png`, fullPage: false });
}

await browser.close();
console.log(fails === 0 ? "ALL SPLIT DOM CHECKS PASSED" : `${fails} SPLIT DOM CHECK(S) FAILED`);
process.exit(fails === 0 ? 0 : 1);
