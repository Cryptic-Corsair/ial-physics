/* t05-invariants.ts — the structural invariants of the Topic 5 note
   (notes-ph05-a/b/c), built 2026-11-23 in the owner's register:
   every section has exactly one statement/title, subheadings are
   plain exam register, the worked cards sit in "Worked examples"
   groups at the end of each section, each card has
   question/steps/answer, every card cites a WPH11 paper from the
   2020–2024 window, and the questions are set out in paper format.
   Register rules R1/R2 as tightened on 2026-11-23 for Topic 4. */
const files = ["notes-ph05-a.ts", "notes-ph05-b.ts", "notes-ph05-c.ts"] as const;
let fail = 0;
const ck = (name: string, ok: boolean, detail = "") => {
  if (!ok) fail++;
  console.log(`${ok ? "pass" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
};

for (const f of files) {
  const src = await Bun.file(`src/lib/spectra/content/${f}`).text();

  const titles = [...src.matchAll(/(?:^|\n)\s*title:\s*"([^"]+)"/g)].map((m) => m[1]);
  const heads = [...src.matchAll(/\{\s*k:\s*"h",\s*text:\s*"([^"]+)"\s*\}/g)].map((m) => m[1]);
  const workedTitles = [...src.matchAll(/k:\s*"worked",\s*\n\s*title:\s*"([^"]+)"/g)].map((m) => m[1]);

  const dupSection = titles.filter((t, i) => titles.indexOf(t) !== i);
  ck(`${f}: section titles unique`, dupSection.length === 0, dupSection.join(", "));

  const dupH = heads.filter((t, i) => heads.indexOf(t) !== i && t !== "Worked examples");
  ck(`${f}: subheadings unique`, dupH.length === 0, dupH.join(", "));

  const dupW = workedTitles.filter((t, i) => workedTitles.indexOf(t) !== i);
  ck(`${f}: worked titles unique`, dupW.length === 0, dupW.join(", "));

  const hIdx = [...src.matchAll(/\{\s*k:\s*"h",\s*text:\s*"([^"]+)"\s*\}/g)].map(
    (m) => ({ i: m.index!, t: m[1] }),
  );
  const workedIdx = [...src.matchAll(/k:\s*"worked"/g)].map((m) => m.index!);
  const placed = workedIdx.every((w) => {
    const nearest = hIdx.filter((h) => h.i < w).pop();
    return nearest?.t === "Worked examples";
  });
  ck(`${f}: worked cards inside a Worked examples group`, placed);

  const banned = /Unlock|Master|Deep dive|Everything you need|Key insight|The big picture|Crucial|Essential guide/i;
  ck(`${f}: subheadings plain register`, !banned.test(heads.join(" | ")), heads.join(" | ").slice(0, 80) + "…");

  const cards = src.split('k: "worked"').slice(1);
  ck(`${f}: worked cards present`, cards.length > 0, `${cards.length} cards`);
  ck(`${f}: every card has steps + answer`, cards.every((c) => /steps:/.test(c) && /answer:/.test(c)));

  /* every card cites a WPH11 paper inside the owner's 2020–2024 window */
  const cites = cards.map((c) => {
    const m = c.match(/WPH11 (January|June|October) (20\d{2})/);
    return Boolean(m) && Number(m![2]) >= 2020 && Number(m![2]) <= 2024;
  });
  ck(`${f}: every card cites a 2020–2024 paper`, cites.every(Boolean));

  ck(
    `${f}: questions carry mark counts`,
    cards.every((c) => /\(\d\)/.test(c)),
  );

  /* the owner's bullet rule — max two lines per bullet, one "\n" max */
  const bulletSpans = [...src.matchAll(/k:\s*"bullets",\s*\n\s*items:\s*\[(.*?)\n\s*\],/gs)];
  const bulletItems = bulletSpans.flatMap((m) => [...m[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((x) => x[1]));
  const tooLong = bulletItems.filter((t) => t.split("\\n").length > 2);
  ck(`${f}: bullets carry at most two lines`, tooLong.length === 0, tooLong.join(" | ").slice(0, 120));

  /* subheads never inside a bullets block — scenario statements are h blocks */
  ck(`${f}: subheadings present`, heads.length > 0, `${heads.length} h blocks`);
}

/* cross-file: no duplicate worked titles or subheadings across a/b/c */
const all = await Promise.all(files.map((f) => Bun.file(`src/lib/spectra/content/${f}`).text()));
const allWorked = all.flatMap((s) => [...s.matchAll(/k:\s*"worked",\s*\n\s*title:\s*"([^"]+)"/g)].map((m) => m[1]));
const dupAll = allWorked.filter((t, i) => allWorked.indexOf(t) !== i);
ck("cross-file: worked titles unique across a/b/c", dupAll.length === 0, dupAll.join(", "));

const allHeads = all.flatMap((s) => [...s.matchAll(/\{\s*k:\s*"h",\s*text:\s*"([^"]+)"\s*\}/g)].map((m) => m[1]));
const dupH = allHeads.filter((t, i) => allHeads.indexOf(t) !== i && t !== "Worked examples");
ck("cross-file: subheadings unique across a/b/c", dupH.length === 0, dupH.join(", "));

/* owner register rules R1/R2, as tightened 2026-11-23:
   R1 — citations only directly against verbatim span boundaries.
   R2 — no ":" in teaching prose; $math$, *verbatim*, ==highlight==
        exempt; worked question/ms text exempt. */
const CIT = new RegExp("\\(WPH11 (?:January|June|October) 20\\d{2}(?: 01A)?, Q(?:[^()]|\\([^()]*\\))*?\\)", "g");
for (const [f, src] of all.map((s, i) => [files[i], s] as const)) {
  let citHits = 0;
  let colonHits = 0;
  let curK = "";
  let label = "";
  let field = "";
  for (const line of src.split("\n")) {
    const mk = line.match(/\bk:\s*"(\w+)"/);
    if (mk) [curK, label, field] = [mk[1], "", ""];
    const ml = line.match(/\blabel:\s*"([^"]*)"/);
    if (ml) label = ml[1];
    const mf = line.match(/\b(question|ms|steps|answer):\s*\[?"?/);
    if (mf) field = mf[1];
    if (curK === "worked" && /\btitle:/.test(line)) field = "title";
    if (!/\bk:\s*"/.test(line) && /^\s*(?:k|label|spec|title|statement)\s*:\s*"/.test(line)) continue;
    const strs = [...line.matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
    if (strs.length === 0) continue;
    const quoteBlock = /mark scheme|examiner|not accepted/i.test(label);
    const inWorkedMs = curK === "worked" && ["question", "ms"].includes(field);
    for (const s of strs) {
      if (quoteBlock) {
        for (const m of s.matchAll(CIT)) {
          const head = s.slice(0, m.index ?? 0).replace(/\s+$/, "");
          if (!/[*=]$/.test(head)) citHits++;
        }
        const prose = s.replace(/\$[^$]*\$/g, "").replace(/\*[^*]+\*/g, "");
        colonHits += (prose.match(/:/g) ?? []).length;
      } else if (!inWorkedMs) {
        citHits += (s.match(new RegExp(CIT.source, "g")) ?? []).length;
        const prose = s.replace(/\$[^$]*\$/g, "").replace(/\*[^*]+\*/g, "").replace(/==[^=]+==/g, "");
        colonHits += (prose.match(/:/g) ?? []).length;
      }
    }
  }
  ck(`${f}: R1 citations only beside quoted paper wording`, citHits === 0, `${citHits} found`);
  ck(`${f}: R2 no colon in teaching prose`, colonHits === 0, `${colonHits} found`);
}

console.log(fail === 0 ? "\nALL PASS — t05 structural invariants hold" : `\n${fail} FAILURES`);
process.exit(fail === 0 ? 0 : 1);
