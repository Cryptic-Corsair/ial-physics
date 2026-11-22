import type { ReactNode } from "react";
import katex from "katex";

/* ═══════════════════════════════════════════════════════════════
   IAL PHYSICS · <Fmt/> — inline markup → typography
   **bold** · *em* · ==highlight== · ~subscript~ · ^superscript^
   $...$ — inline LaTeX math, typeset by KaTeX ($v^2 = u^2 + 2as$,
   $\frac{1.36}{9.81} = 0.139\ \text{s}$). The math token is read
   first and its interior is never markup-scanned, so ^ and ~ inside
   a formula are safe. Named <TeX/> — <Math/> would shadow the
   global Math object inside every client file that imports it.

   Plus plural() — the count-word helper the hero stat lines share
   ("1 diagram", not "1 diagrams").
   ═══════════════════════════════════════════════════════════════ */

/* "2 diagrams" / "1 diagram" — the plural supplies its own 's' */
export const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

const TOKEN = /(\*\*(.+?)\*\*|\*(.+?)\*|==(.+?)==|~(.+?)~|\^(.+?)\^|\$([^$]+)\$)/;

/* one KaTeX span — shared by the inline token and the block lines
   the worked plate renders; throwOnError stays false so a typo in a
   formula prints its source instead of breaking the page */
export function TeX({ tex, block = false }: { tex: string; block?: boolean }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: block,
    output: "html",
  });
  return <span className="math-chip" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Fmt({ text }: { text: string }) {
  return <>{parse(text)}</>;
}

function parse(text: string, keyPrefix = "f"): ReactNode[] {
  const out: ReactNode[] = [];
  let rest = text;
  let i = 0;
  let guard = 0;

  while (rest.length > 0 && guard++ < 900) {
    const m = TOKEN.exec(rest);
    if (!m) {
      out.push(rest);
      break;
    }
    if (m.index > 0) out.push(rest.slice(0, m.index));
    const key = `${keyPrefix}-${i++}`;
    const inner = m[2] ?? m[3] ?? m[4] ?? m[5] ?? m[6] ?? m[7] ?? "";

    if (m[7] !== undefined) {
      out.push(<TeX key={key} tex={inner} />);
    } else if (m[2] !== undefined) {
      out.push(
        <strong key={key} className="font-extrabold text-ink">
          {parse(inner, key)}
        </strong>
      );
    } else if (m[3] !== undefined) {
      out.push(
        <em key={key} className="font-bold italic">
          {parse(inner, key)}
        </em>
      );
    } else if (m[4] !== undefined) {
      out.push(<mark key={key}>{parse(inner, key)}</mark>);
    } else if (m[5] !== undefined) {
      out.push(
        <sub key={key} className="text-[0.72em]">
          {inner}
        </sub>
      );
    } else {
      out.push(
        <sup key={key} className="text-[0.72em]">
          {inner}
        </sup>
      );
    }
    rest = rest.slice(m.index + m[0].length);
  }
  return out;
}

/** Plain-text twin for aria-labels and search strings */
export function fmtPlain(text: string): string {
  return text
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/==([^=]+)==/g, "$1")
    .replace(/~([^~]+)~/g, "$1")
    .replace(/\^([^^]+)\^/g, "$1");
}
