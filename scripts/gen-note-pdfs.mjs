// gen-note-pdfs — lift every note's print room into public/pdf/<docId>.pdf
//
// The PDF handout pipeline: the print room (src/app/print/[docId])
// renders each note on the 182 mm paper, and this script photographs
// it into a real A4 PDF with the running furniture (the header line
// with the note's breadcrumb and the YOUR NOTES tab, the footer with
// the breadcrumb and the page of pages). The notes reader's Download
// PDF button hands these files out behind the password gate.
//
// Run it against a server that's already up:
//   bun run dev            # or bun run build && bun run start
//   bun scripts/gen-note-pdfs.mjs
//   bun scripts/gen-note-pdfs.mjs wph11-t05 wph11-t02   # just these docs
//
// The doc list is read straight out of notes-meta.ts (the card index
// the app itself routes on), so a new note is picked up by being
// added to the library — no second list to keep in step. Re-run after
// any content change; the files are committed artifacts, so a stale
// PDF is a real stale PDF.

import { readFileSync, existsSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";

const BASE_URL = process.env.PDF_BASE_URL ?? "http://localhost:3000";
const OUT_DIR = new URL("../public/pdf/", import.meta.url).pathname;
const SHELL =
  "/home/z/.cache/ms-playwright/chromium_headless_shell-1200/chrome-headless-shell-linux64/chrome-headless-shell";

/* ————— the doc list, straight from the card index ————— */
const metaSrc = readFileSync(
  new URL("../src/lib/spectra/notes-meta.ts", import.meta.url),
  "utf8",
);
const CARDS = [...metaSrc.matchAll(/\{\s*id:\s*"(wph[a-z0-9-]+)",\s*unitCode:\s*"(\w+)",\s*topicId:\s*"(t\d+r?)",/g)].map(
  (m) => {
    const [, id, unitCode, topicId] = m;
    const topicNo = Number(topicId.replace(/r$/, "").slice(1));
    const topicLabel = topicId.endsWith("r")
      ? `Topic ${topicNo} · revised`
      : `Topic ${topicNo}`;
    return { id, unitCode, topicId, topicLabel };
  },
);
if (CARDS.length === 0) {
  console.error("[pdf] no cards found in notes-meta.ts — regex drifted?");
  process.exit(1);
}

/* the docs asked for, or every card */
const only = process.argv.slice(2);
const docs = only.length > 0 ? CARDS.filter((c) => only.includes(c.id)) : CARDS;
if (docs.length === 0) {
  console.error(`[pdf] unknown doc ids: ${only.join(", ")}`);
  process.exit(1);
}

/* ————— the accent map —————
   One accent pair per topic, the same map the paper component
   (src/components/print/note-paper.tsx) dresses the sheet in — a
   .mjs script cannot import a .tsx file, so the two are kept in
   step by hand, and the running furniture must wear the same
   colours the reading does. */
const ACCENTS = {
  t01: { deep: "#1971C2" },
  t01r: { deep: "#1971C2" },
  t02: { deep: "#0B7A5B" },
  t03: { deep: "#D9480F" },
  t04: { deep: "#6741D9" },
  t05: { deep: "#E03131" },
};

/* Fredoka rides the header as base64 — the header and footer
   templates render in an isolated context with no webfonts, but a
   data-URI face travels inside the template itself, so the running
   line keeps the sheet's own display face instead of falling back
   to bare Arial. */
const fredokaB64 = readFileSync(
  new URL("../public/fonts/fredoka-var.woff2", import.meta.url),
).toString("base64");

const FURNITURE_FONT_FACE = `@font-face {
  font-family: 'Fredoka Paper';
  src: url(data:font/woff2;base64,${fredokaB64}) format('woff2');
  font-weight: 300 700;
}`;

const FAMILY = `'Fredoka Paper', Arial, 'Liberation Sans', Helvetica, sans-serif`;

/* the breadcrumb — but never a twice-told name: when the note's
   title repeats the topic label ("Topic 1 · revised — Topic 1
   revised"), the title steps aside */
const crumbFor = (card, title) => {
  const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const dup =
    norm(title) === norm(card.topicLabel) ||
    norm(title).includes(norm(card.topicLabel)) ||
    norm(card.topicLabel).includes(norm(title));
  return dup
    ? `${card.unitCode} · ${card.topicLabel}`
    : `${card.unitCode} · ${card.topicLabel} — ${title}`;
};

/* ————— the running header every page carries —————
   The breadcrumb on the left, the genre's own YOUR NOTES tab on
   the right, one hairline under both. Small, gray, out of the
   reading's way — the sheet's furniture, not its decor. */
const headerFor = (card, title) => {
  const crumb = crumbFor(card, title);
  return `<style>${FURNITURE_FONT_FACE}</style>
<div style="
  font-family: ${FAMILY};
  font-size: 8px;
  width: 100%;
  padding: 6px 14mm 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e4e7eb;
">
  <span style="
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #8a8f96;
  ">
    <span style="width: 7px; height: 7px; border-radius: 2px; background: ${ACCENTS[card.topicId]?.deep ?? "#1971C2"}; flex: none;"></span>
    <span style="color: #4d5359;">IAL PHYSICS</span>
    <span style="opacity: 0.6;">·</span>
    <span style="overflow: hidden; text-overflow: ellipsis;">${crumb}</span>
  </span>
  <span style="
    flex: none;
    margin-left: 14px;
    font-weight: 600;
    font-size: 7.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #98a0a8;
    border: 1px solid #d8dde3;
    border-radius: 5px;
    padding: 3px 8px;
  ">Your notes</span>
</div>`;
};

/* ————— the running footer every page carries —————
   The breadcrumb again at a smaller voice, and the page of pages —
   the genre's own sign-off. */
const footerFor = (card, title) => {
  const crumb = crumbFor(card, title);
  return `<style>${FURNITURE_FONT_FACE}</style>
<div style="
  font-family: ${FAMILY};
  font-size: 8px;
  width: 100%;
  padding: 0 14mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
">
  <span style="display: flex; align-items: center; gap: 6px; color: #98a0a8; white-space: nowrap; overflow: hidden;">
    <span style="width: 6px; height: 6px; border-radius: 2px; background: ${ACCENTS[card.topicId]?.deep ?? "#1971C2"}; flex: none;"></span>
    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; letter-spacing: 0.05em;">IAL PHYSICS · ${crumb}</span>
  </span>
  <span style="flex: none; margin-left: 14px; font-weight: 600; letter-spacing: 0.05em; color: #6f757c; white-space: nowrap;">
    page <span class="pageNumber"></span> of <span class="totalPages"></span>
  </span>
</div>`;
};

mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch(
  existsSync(SHELL) ? { executablePath: SHELL } : {},
);
const page = await browser.newPage();
await page.emulateMedia({ colorScheme: "light" });

let failed = 0;
for (const card of docs) {
  const url = `${BASE_URL}/print/${card.id}`;
  process.stdout.write(`[pdf] ${card.id} · `);
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });

    /* the paper's handshake — fonts settled, KaTeX set, the tree laid out */
    await page.waitForSelector(".print-paper[data-ready='fonts']", {
      timeout: 120000,
    });
    await page.waitForTimeout(500); /* let the last paint land */

    const title = await page
      .locator(".print-paper h1")
      .first()
      .textContent()
      .then((t) => (t ?? "").trim().replace(/\.$/, ""));
    const label = title || card.id;

    const pdfPath = `${OUT_DIR}${card.id}.pdf`;
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      /* the margins must stay in step with the paper's own @page
         rule — 16 mm of headroom for the running header, 17 mm of
         foot for the breadcrumb and the page numbers */
      margin: { top: "16mm", bottom: "17mm", left: "14mm", right: "14mm" },
      displayHeaderFooter: true,
      headerTemplate: headerFor(card, label),
      footerTemplate: footerFor(card, label),
    });

    const kb = Math.round(
      readFileSync(pdfPath).byteLength / 1024,
    );
    console.log(`${kb} KB · ${label}`);
  } catch (err) {
    failed += 1;
    console.error(`FAILED (${err instanceof Error ? err.message : err})`);
  }
}

await browser.close();
if (failed > 0) {
  console.error(`[pdf] ${failed} doc(s) failed`);
  process.exit(1);
}
console.log(`[pdf] ${docs.length} file(s) written to public/pdf/`);
