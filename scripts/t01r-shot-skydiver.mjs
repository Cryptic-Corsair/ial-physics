// screenshot the skydiver terminal-velocity build — element capture,
// which scrolls the element into view and shoots its own box
import { chromium } from "playwright";
const browser = await chromium.launch({
  executablePath: "/home/z/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell",
});
const page = await browser.newPage();
await page.goto("http://localhost:3000/notes/wph11-t01r", { waitUntil: "networkidle" });
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
const el = await page.evaluateHandle(() => {
  const head = Array.from(document.querySelectorAll("main.notes-flow h4, main.notes-flow h3"))
    .find((e) => (e.textContent || "").trim().startsWith("A skydiver falling towards the ground"));
  return head ? head.parentElement : null;
});
const box = await el.asElement()?.boundingBox();
if (el.asElement() && box) {
  await page.evaluate((y) => window.scrollTo(0, y - 8), box.y + (await page.evaluate(() => window.scrollY)));
  await page.waitForTimeout(900);
  await page.screenshot({ path: "screenshots/t01r-skydiver.png", clip: { x: 0, y: box.y, width: 1280, height: 620 }, fullPage: true });
  console.log("element shot saved");
} else {
  console.log("element not found");
}
await browser.close();
