// geometry probe: prove the new sections are laid out and visible
// (headless screenshots come out blank in this shell — textContent,
// KaTeX counts and geometry are the honest render evidence)
import { chromium } from "playwright";
const browser = await chromium.launch({
  executablePath: "/home/z/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell",
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("http://localhost:3000/notes/wph11-t01r", { waitUntil: "networkidle" });
await page.evaluate(() => {
  const el = document.scrollingElement;
  let y = 0;
  const step = () => { y += 1400; el.scrollTop = y; if (y < el.scrollHeight) setTimeout(step, 60); };
  step();
});
await page.waitForTimeout(1500);
const probe = await page.evaluate(() => {
  const targets = [
    "Finding a resultant", "Projectiles", "Free-body force diagrams and centre of gravity",
    "Newton's laws and terminal velocity", "Weight and gravitational field strength",
    "Core Practical 1 — the acceleration of free fall",
    "A skydiver falling towards the ground", "Two forces on a sailing boat",
  ];
  const out = [];
  for (const t of targets) {
    const el = Array.from(document.querySelectorAll("main.notes-flow h2, main.notes-flow h3, main.notes-flow h4"))
      .find((e) => (e.textContent || "").trim().startsWith(t));
    if (!el) { out.push(`${t}: NOT FOUND`); continue; }
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    out.push(`${t}: ${Math.round(r.width)}x${Math.round(r.height)}px, display ${cs.display}, visible ${cs.visibility}, opacity ${cs.opacity}`);
  }
  const flow = document.querySelector("main.notes-flow");
  out.push(`flow scrollHeight ${Math.round(flow.scrollHeight)}px`);
  return out.join("\n");
});
console.log(probe);
await browser.close();
