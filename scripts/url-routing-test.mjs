// url-routing-test.mjs <url>
// THE URL↔ROOM TEST — every room owns an accurate address:
//  · a clean root-form path lands in its room and the URL stays put
//  · a legacy ?v= deep link upgrades to its path form (replaceState)
//  · an unknown path 404s at the server — the catch-all never
//    serves the shell for a non-room address
//  · the browser's real back/forward walks rooms (popstate re-derives)
//  · in-app room changes push paths; the URL never drifts from the room
import { createRequire } from 'module';
const require = createRequire('/home/z/my-project/scripts/');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/home/z/.npm-global/lib/node_modules/playwright')); }

const url = process.argv[2] || 'http://localhost:3001';
let fails = 0;
const check = (name, ok, detail = '') => {
  if (!ok) fails++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? ` — ${detail}` : ''}`);
};
const stateOf = (page) =>
  page.evaluate(() => ({
    view: document.querySelector('[data-view]')?.getAttribute('data-view') ?? null,
    path: window.location.pathname,
    search: window.location.search,
  }));
const waitFor = async (page, fn, ms = 8000) => {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    try { if (await fn()) return true; } catch { /* page busy */ }
    await page.waitForTimeout(150);
  }
  return false;
};
/* full page load at `path`, then wait for the room + address to agree */
const visit = async (page, path) => {
  await page.goto(url + path, { waitUntil: 'networkidle' });
  return waitFor(page, async () => {
    const s = await stateOf(page);
    return s.view !== null && s.path === (path === '/' ? '/' : path.replace(/\/+$/, ''));
  });
};

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();

/* — 1 · clean paths land in their room, address stays put — */
const cleanPaths = [
  ['/', 'home'],
  ['/spec', 'spec'],
  ['/pack', 'pack'],
  ['/sticker', 'sticker'],
  ['/legal', 'legal'],
  ['/wph11', 'unit-WPH11'],
  ['/notes/wph11-t02', 'notes-wph11-t02'],
  ['/notes/wph11-t03', 'notes-wph11-t03'],
  ['/notes/wph11-t04', 'notes-wph11-t04'],
];
for (const [path, view] of cleanPaths) {
  const ok = await visit(page, path);
  const s = await stateOf(page);
  check(
    `deep path ${path} → ${view}`,
    ok && s.view === view && s.search === '',
    `view=${s.view} path=${s.path} search=${s.search || '∅'}`,
  );
}
/* the notes reader at one clause — the doc view is the same room, so
   the view id is the doc; the clause rides in the URL only */
{
  const ok = await visit(page, '/notes/wph11-t04/24');
  const s = await stateOf(page);
  check(
    'deep path /notes/wph11-t04/24 → notes at clause 24',
    ok && s.view === 'notes-wph11-t04' && s.path === '/notes/wph11-t04/24',
    `view=${s.view} path=${s.path}`,
  );
}

/* — 2 · legacy ?v= links upgrade to their path form — */
{
  await page.goto(url + '/?v=notes&doc=wph11-t04&spec=24', { waitUntil: 'networkidle' });
  const ok = await waitFor(page, async () => {
    const s = await stateOf(page);
    return s.view === 'notes-wph11-t04' && s.path === '/notes/wph11-t04/24' && s.search === '';
  });
  const s = await stateOf(page);
  check(
    'legacy ?v=notes&doc=…&spec=… upgrades to the path form',
    ok, `view=${s.view} path=${s.path} search=${s.search || '∅'}`,
  );
}
{
  await page.goto(url + '/?v=WPH11', { waitUntil: 'networkidle' });
  const ok = await waitFor(page, async () => {
    const s = await stateOf(page);
    return s.view === 'unit-WPH11' && s.path === '/wph11' && s.search === '';
  });
  const s = await stateOf(page);
  check('legacy ?v=WPH11 upgrades to /wph11', ok, `view=${s.view} path=${s.path}`);
}
{
  await page.goto(url + '/?v=notes', { waitUntil: 'networkidle' });
  const ok = await waitFor(page, async () => {
    const s = await stateOf(page);
    return s.view === 'notes-wph11-t01' && s.path === '/notes/wph11-t01' && s.search === '';
  });
  const s = await stateOf(page);
  check('bare legacy ?v=notes lands on the first doc', ok, `view=${s.view} path=${s.path}`);
}

/* — 3 · an unknown path is a real 404 (the catch-all never serves
   the shell for a non-room address) — */
{
  for (const junk of ['/nonsense', '/_vercel/insights/script.js', '/wch11', '/spec/extra']) {
    const res = await fetch(url + junk);
    check(
      `unknown path ${junk} → 404`,
      res.status === 404,
      `status=${res.status} type=${res.headers.get('content-type') ?? '∅'}`,
    );
  }
}

/* — 4 · the browser's real back/forward walks rooms — */
{
  await visit(page, '/notes/wph11-t04');
  await visit(page, '/spec');
  await page.goBack({ waitUntil: 'networkidle' });
  const backOk = await waitFor(page, async () => {
    const s = await stateOf(page);
    return s.view === 'notes-wph11-t04' && s.path === '/notes/wph11-t04';
  });
  const s1 = await stateOf(page);
  check('real back from /spec → notes room + address', backOk, `view=${s1.view} path=${s1.path}`);
  await page.goForward({ waitUntil: 'networkidle' });
  const fwdOk = await waitFor(page, async () => {
    const s = await stateOf(page);
    return s.view === 'spec' && s.path === '/spec';
  });
  const s2 = await stateOf(page);
  check('real forward → spec room + address', fwdOk, `view=${s2.view} path=${s2.path}`);
}

/* — 5 · in-app navigation writes the room's address (no drift) — */
{
  await visit(page, '/spec');
  /* the navbar's home tool — stable aria-label, in-app setView */
  const homeBtn = page.locator('[aria-label="Home"]').first();
  const present = (await homeBtn.count()) > 0;
  if (present) {
    await homeBtn.click();
    const ok = await waitFor(page, async () => {
      const s = await stateOf(page);
      return s.view === 'home' && s.path === '/' && s.search === '';
    });
    const s = await stateOf(page);
    check(
      'in-app nav (spec → home) writes / into the address bar',
      ok, `view=${s.view} path=${s.path} search=${s.search || '∅'}`,
    );
  } else {
    console.log('SKIP  in-app nav — Home tool not found');
  }
}

await browser.close();
console.log(fails === 0 ? 'ALL URL-ROUTING CHECKS PASSED' : `${fails} URL-ROUTING CHECK(S) FAILED`);
process.exit(fails === 0 ? 0 : 1);
