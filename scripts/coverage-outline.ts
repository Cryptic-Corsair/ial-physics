/* Compact coverage outline of the WPH11 notes: per spec section, print
   spec number, title, and every block in order with its key content,
   truncated. Used as the "what our notes teach" baseline for the gap
   analysis (Task B). Run: bun scripts/coverage-outline.ts */
import { SECTIONS_PH01_A } from "../src/lib/spectra/content/notes-ph01-a";
import { SECTIONS_PH01_B } from "../src/lib/spectra/content/notes-ph01-b";
import { SECTIONS_PH01_C } from "../src/lib/spectra/content/notes-ph01-c";
import { SECTIONS_PH02_A } from "../src/lib/spectra/content/notes-ph02-a";
import { SECTIONS_PH02_B } from "../src/lib/spectra/content/notes-ph02-b";

type AnyBlock = Record<string, unknown>;

function blockText(b: AnyBlock): string {
  const k = b.k as string;
  const parts: string[] = [];
  for (const key of ["title", "label", "eq", "caption", "text", "answer"]) {
    const v = b[key];
    if (typeof v === "string") parts.push(v);
  }
  if (Array.isArray(b.items)) parts.push((b.items as string[]).join(" | "));
  if (Array.isArray(b.steps) && typeof b.steps[0] === "string") {
    parts.push("STEPS: " + (b.steps as string[]).join(" | "));
  }
  if (Array.isArray(b.items) && b.items.length && typeof b.items[0] === "object") {
    parts.push(
      "ITEMS: " +
        (b.items as Array<Record<string, unknown>>)
          .map((s) => String(s.title ?? "") + ": " + String(s.text ?? ""))
          .join(" | ")
    );
  }
  if (Array.isArray(b.head)) parts.push("HEAD: " + (b.head as string[]).join("/"));
  if (Array.isArray(b.rows)) {
    parts.push(
      "ROWS: " +
        (b.rows as string[][])
          .map((r) => r.join(" · "))
          .join(" || ")
    );
  }
  if (b.question) parts.push("Q: " + String(b.question));
  if (Array.isArray(b.fig)) parts.push("[figure]");
  const joined = parts.join(" ¦ ");
  return joined.replace(/\s+/g, " ").trim();
}

function trunc(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n) + " …";
}

function walk(name: string, sections: AnyBlock[]): void {
  console.log("\n########## " + name + " ##########");
  for (const sec of sections) {
    console.log("\n== SPEC " + sec.spec + " — " + sec.title);
    console.log("   STATEMENT: " + trunc(String(sec.statement ?? ""), 220));
    const blocks = (sec.blocks ?? []) as AnyBlock[];
    for (const b of blocks) {
      const k = b.k as string;
      if (k === "h") {
        console.log("  [h] " + trunc(String(b.text ?? ""), 110));
      } else if (k === "worked") {
        console.log("  [worked] " + trunc(String(b.title ?? ""), 90));
        console.log("      Q: " + trunc(String(b.question ?? ""), 300));
        const steps = (b.steps ?? []) as string[];
        for (let i = 0; i < steps.length; i++) {
          console.log("      step" + (i + 1) + ": " + trunc(String(steps[i] ?? ""), 160));
        }
        console.log("      A: " + trunc(String(b.answer ?? ""), 140));
      } else if (k === "steps") {
        const items = (b.items ?? []) as Array<Record<string, unknown>>;
        console.log("  [steps] " + trunc(String(b.caption ?? ""), 60));
        for (const s of items) {
          console.log("      - " + trunc(String(s.title ?? "") + " — " + String(s.text ?? ""), 160));
        }
      } else if (k === "table") {
        console.log("  [table] " + trunc(String(b.caption ?? ""), 80));
        console.log("      " + trunc(blockText(b), 400));
      } else {
        console.log("  [" + k + "] " + trunc(blockText(b), 340));
      }
    }
  }
}

walk("T1/A notes-ph01-a.ts (specs 1-7)", SECTIONS_PH01_A as unknown as AnyBlock[]);
walk("T1/B notes-ph01-b.ts (specs 8-14)", SECTIONS_PH01_B as unknown as AnyBlock[]);
walk("T1/C notes-ph01-c.ts (specs 15-22)", SECTIONS_PH01_C as unknown as AnyBlock[]);
walk("T2/A notes-ph02-a.ts (specs 23-27)", SECTIONS_PH02_A as unknown as AnyBlock[]);
walk("T2/B notes-ph02-b.ts (specs 28-32)", SECTIONS_PH02_B as unknown as AnyBlock[]);
