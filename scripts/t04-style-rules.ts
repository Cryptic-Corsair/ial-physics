/* t04-style-rules.ts — structured-walk gate for the two body-text
   rules (2026-11-23). Mirrors scripts/t04-invariants.ts but walks the
   parsed sections instead of the raw source:
   R1 — no spec/paper citation in teaching prose; inside a quote-bearing
        note a citation must sit directly against a verbatim span
        boundary (* or =). worked.question and worked.ms.text are the
        papers' own and exempt.
   R2 — no ":" in teaching prose; $math$ and verbatim *printed wordings*
        are exempt. Our commentary inside a quote block keeps the ban. */
import { SECTIONS_PH04_A } from "../src/lib/spectra/content/notes-ph04-a";
import { SECTIONS_PH04_B } from "../src/lib/spectra/content/notes-ph04-b";
import { SECTIONS_PH04_C } from "../src/lib/spectra/content/notes-ph04-c";

const CITE =
  /\(WPH11 (?:January|June|October) 20\d{2}(?: 01A)?, Q(?:[^()]|\([^()]*\))*?\)/g;

const viol: string[] = [];

function proseColons(s: string): number {
  return s.replace(/\$[^$]*\$/g, "").replace(/\*[^*]+\*/g, "").match(/:/g)?.length ?? 0;
}

function checkProse(tag: string, spec: string, field: string, s: string) {
  const loc = `${tag}/spec ${spec}/${field}`;
  if (new RegExp(CITE.source).test(s)) viol.push(`R1 citation in teaching prose — ${loc}: ${s.slice(0, 90)}`);
  if (proseColons(s.replace(/==[^=]+==/g, "")) > 0) viol.push(`R2 colon in teaching prose — ${loc}: ${s.slice(0, 90)}`);
}

function checkQuoteNote(tag: string, spec: string, s: string) {
  const loc = `${tag}/spec ${spec}/note`;
  for (const m of s.matchAll(CITE)) {
    const head = s.slice(0, m.index ?? 0).replace(/\s+$/, "");
    if (!/[*=]$/.test(head)) viol.push(`R1 citation not beside a verbatim span — ${loc}: …${s.slice(Math.max(0, (m.index ?? 0) - 30), (m.index ?? 0) + 40)}…`);
  }
  if (proseColons(s) > 0) viol.push(`R2 colon in note commentary — ${loc}: ${s.slice(0, 90)}`);
}

for (const [tag, secs] of [
  ["A", SECTIONS_PH04_A],
  ["B", SECTIONS_PH04_B],
  ["C", SECTIONS_PH04_C],
] as const) {
  for (const sec of secs) {
    for (const b of sec.blocks) {
      switch (b.k) {
        case "p": case "h": checkProse(tag, sec.spec, b.k, b.text); break;
        case "bullets": b.items.forEach((it, i) => checkProse(tag, sec.spec, `bullet[${i}]`, it)); break;
        case "note": checkProse(tag, sec.spec, "note.label", b.label); checkQuoteNote(tag, sec.spec, b.text); break;
        case "def": checkProse(tag, sec.spec, "def.term", b.term); checkProse(tag, sec.spec, "def.text", b.text); break;
        case "eq": if (b.note) checkProse(tag, sec.spec, "eq.note", b.note); break;
        case "table":
          if (b.caption) checkProse(tag, sec.spec, "table.caption", b.caption);
          b.head.forEach((h, i) => checkProse(tag, sec.spec, `head[${i}]`, h));
          b.rows.forEach((r, i) => r.forEach((c, j) => checkProse(tag, sec.spec, `cell[${i}][${j}]`, c)));
          break;
        case "worked":
          checkProse(tag, sec.spec, "worked.title", b.title);
          b.steps.forEach((s, i) => checkProse(tag, sec.spec, `step[${i}]`, s));
          checkProse(tag, sec.spec, "worked.answer", b.answer);
          if (b.ms) checkProse(tag, sec.spec, "worked.ms.label", b.ms.label);
          // b.question and b.ms.text: the papers' own, exempt
          break;
        case "steps":
          if (b.caption) checkProse(tag, sec.spec, "steps.caption", b.caption);
          b.items.forEach((it, i) => { checkProse(tag, sec.spec, `steps[${i}].title`, it.title); checkProse(tag, sec.spec, `steps[${i}].text`, it.text); });
          break;
        case "figure": if (b.caption) checkProse(tag, sec.spec, "figure.caption", b.caption); break;
        case "wow": checkProse(tag, sec.spec, "wow", b.text); break;
      }
    }
  }
}

if (viol.length === 0) {
  console.log("STYLE RULES CLEAN — citations only beside verbatim spans, no prose colons");
} else {
  console.log(`${viol.length} violations:\n${viol.join("\n")}`);
  process.exit(1);
}
