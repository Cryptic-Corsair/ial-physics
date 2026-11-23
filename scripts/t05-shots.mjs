// Visual capture of the topic 5 page for the owner's review.
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 2000 });
await page.goto(`${BASE}/notes/wph11-t05`, { waitUntil: "networkidle" });
await page.evaluate(() => {
  const el = document.scrollingElement;
  let y = 0;
  const step = () => {
    y += 1200;
    el.scrollTop = y;
    if (y < el.scrollHeight) setTimeout(step, 50);
  };
  step();
});
await page.waitForTimeout(2000);

const scrollToText = async (needle) => {
  await page.evaluate((t) => {
    const els = [...document.querySelectorAll("main h3, main h2, main span, main div")];
    const hit = els.find((el) => el.textContent?.trim().startsWith(t));
    hit?.scrollIntoView({ block: "start" });
  }, needle);
  await page.waitForTimeout(800);
};

/* landing */
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);
await page.screenshot({ path: "/tmp/render/t05-landing.png" });

/* the limit-points teaching block */
await scrollToText("Limit of proportionality");
await page.screenshot({ path: "/tmp/render/t05-limits.png" });

/* a two-line-bullet block (loading and unloading) */
await scrollToText("Loading and unloading");
await page.screenshot({ path: "/tmp/render/t05-unloading.png" });

/* open every card, capture the spring card */
await page.evaluate(() => {
  document
    .querySelectorAll('.worked-head[aria-expanded="false"]')
    .forEach((el) => el.click());
});
await page.waitForTimeout(1500);
await page.evaluate(() => {
  const heads = [...document.querySelectorAll(".worked-head")];
  const target = heads.find((el) => el.textContent?.includes("The spring loaded past its elastic limit"));
  target?.scrollIntoView({ block: "start" });
});
await page.waitForTimeout(800);
await page.screenshot({ path: "/tmp/render/t05-card-open.png", fullPage: false });

await browser.close();
console.log("screenshots saved");
