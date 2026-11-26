"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { figureArt, StepLines } from "@/components/club/note-section";
import { Fmt } from "@/components/club/format";
import type { NotesBlock, NotesDoc, SpecSection } from "@/lib/spectra/notes-types";
import type { Unit } from "@/lib/spectra/types";
import "./print-paper.css";

/* ═══════════════════════════════════════════════════════════════
   IAL PHYSICS · the PDF paper — the note, set for a file.

   The print room (src/app/print/[docId]) renders this and
   scripts/gen-note-pdfs.mjs lifts it into public/pdf/<docId>.pdf.
   The same content as the reader — the same docs, the same
   diagrams (figureArt), the same markup (Fmt), the same worked
   steps (StepLines, KaTeX and all) — restyled onto one fixed
   sheet: Fredoka for every label and heading, Arial for the
   reading.

   v4, the dash-ledger redesign. The sheet speaks one grammar:

   — every TITLE opens with a short horizontal dash in the
     accent (the section heads, the block heads, the card labels,
     the worked example, the answer) and no other marker exists
     anywhere on the page;
   — every piece of content sits one indent step under its own
     title (a scenario's title at the section measure, its
     reading pushed in under it), so the eye always knows what
     belongs to what;
   — the body text carries no icons at all: bullet lists are
     plain stacked sentences, set off by the indent alone;
   — worked examples wear no chrome: no strips, no borders, no
     fills — a dash and the label, the name, the question under
     a thin accent rule, numbered reasoning, and the answer on a
     quiet tint. Cards fragment across pages cleanly because
     there is no box to break.

   Nothing here reads a theme or a preference: the sheet is laid
   out at the exact 182 mm measure of an A4 page, every colour is
   a literal, and the fonts are the site's own Fredoka plus plain
   Arial. The generator waits for [data-ready="fonts"] — the flag
   below — before printing, so the file never catches a font
   mid-swap.
   ═══════════════════════════════════════════════════════════════ */

/* the accent map — one pair per topic, the whole document dresses
   in it. Keyed by the notes' topic id; scripts/gen-note-pdfs.mjs
   carries the same map for its running header and footer (a .mjs
   script cannot import this file), so a new colour here is a new
   colour there too. */
const ACCENTS: Record<string, { candy: string; deep: string }> = {
  t01: { candy: "#339AF0", deep: "#1971C2" }, // unit brand blue
  t01r: { candy: "#339AF0", deep: "#1971C2" },
  t02: { candy: "#12B886", deep: "#0B7A5B" }, // mint
  t03: { candy: "#FF922B", deep: "#D9480F" }, // tangerine
  t04: { candy: "#9775FA", deep: "#6741D9" }, // grape
  t05: { candy: "#FF6B6B", deep: "#E03131" }, // coral
};

const accentFor = (topicId: string) =>
  ACCENTS[topicId] ?? { candy: "#339AF0", deep: "#1971C2" };

export function NotePaper({
  doc,
  unit,
  topicLabel,
  minutes,
}: {
  doc: NotesDoc;
  unit: Unit;
  topicLabel: string;
  minutes?: number;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const accent = accentFor(doc.topicId);

  /* the generator's handshake — fonts settled, everything laid out */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const fonts = (document as Document & { fonts?: FontFaceSet }).fonts;
    if (fonts?.ready) {
      fonts.ready.then(() => el.setAttribute("data-ready", "fonts"));
    } else {
      el.setAttribute("data-ready", "fonts");
    }
  }, []);

  /* the cover's honest counts, the same way the reader counts them */
  const countOf = (k: NotesBlock["k"]) => {
    let n = 0;
    const walk = (blocks: NotesBlock[]) =>
      blocks.forEach((b) => b.k === k && n++);
    walk(doc.intro);
    doc.sections.forEach((s) => walk(s.blocks));
    if (doc.outro) walk(doc.outro);
    return n;
  };
  const worked = countOf("worked");
  const figs = countOf("figure");

  /* the genre's own section numbering — the topic's number, then
     the section's place in the note: 5.1, 5.2, 5.3 … */
  const topicNo = Number(doc.topicId.replace(/r$/, "").slice(1));
  const secNo = (i: number) => `${topicNo}.${i + 1}`;

  return (
    <div
      className="print-paper"
      ref={rootRef}
      style={
        {
          "--acc": accent.candy,
          "--acc-deep": accent.deep,
        } as React.CSSProperties
      }
    >
      {/* ————— the cover —————
          A <section>, not a <header>: the app's own print sheet hides
          every <header> on paper, and the cover must print. */}
      <section className="pp-cover">
        <div className="pp-cover-top">
          <div className="pp-wordmark">
            <AtomMark size={26} color={accent.deep} />
            <b>IAL PHYSICS</b>
          </div>
          <span className="pp-cred">
            Edexcel International A Level · Physics
          </span>
          <span className="pp-unit-pill">{unit.code}</span>
        </div>

        <p className="pp-kicker">
          Revision notes · {topicLabel} · {unit.title}
        </p>
        <h1>
          {doc.title}
          <Dot candy={accent.candy} />
        </h1>
        <div className="pp-cover-rule" />

        <div className="pp-cover-meta">
          <span className="pp-chip">
            <b>{doc.sections.length}</b>&nbsp;spec sections
          </span>
          {worked > 0 && (
            <span className="pp-chip">
              <b>{worked}</b>&nbsp;worked examples
            </span>
          )}
          {figs > 0 && (
            <span className="pp-chip">
              <b>{figs}</b>&nbsp;diagrams
            </span>
          )}
          {minutes !== undefined && minutes > 0 && (
            <span className="pp-chip">
              <b>{minutes}</b>&nbsp;min read
            </span>
          )}
        </div>

        {/* the contents index — the genre's own numbered list */}
        <div className="pp-toc">
          <div className="pp-toc-head">
            <span className="pp-toc-title">In this note</span>
            <span className="pp-toc-count">
              {doc.sections.length} sections
            </span>
          </div>
          <div className="pp-toc-rows">
            {doc.sections.map((s, i) => (
              <div key={s.spec} className="pp-toc-row">
                <span className="pp-toc-num">{secNo(i)}</span>
                <span className="t">{s.title}</span>
              </div>
            ))}
          </div>
        </div>

        {doc.intro.filter((b): b is Extract<NotesBlock, { k: "p" }> => b.k === "p").length > 0 && (
          <div className="pp-intro">
            <span className="pp-label">About this note</span>
            <div className="pp-intro-cols">
              {doc.intro
                .filter((b): b is Extract<NotesBlock, { k: "p" }> => b.k === "p")
                .map((b, i) => (
                  <p key={i}>
                    <Fmt text={b.text} />
                  </p>
                ))}
            </div>
          </div>
        )}

        {/* the colophon — then the ruled box as the cover's last word */}
        <p className="pp-source">Built from {doc.source}.</p>

        {/* the ruled box — the printed page's whole point */}
        <div className="pp-scribble">
          <span className="pp-label">Your notes</span>
          <div className="pp-scribble-lines" />
        </div>
      </section>

      {/* ————— the sections, flowing ————— */}
      {doc.sections.map((section, i) => (
        <PaperSection
          key={section.spec}
          section={section}
          secNo={secNo(i)}
          unit={unit}
          topicLabel={topicLabel}
        />
      ))}

      {doc.outro && doc.outro.length > 0 && (
        <section className="pp-section pp-outro">
          <div className="pp-section-body">
            <div className="pp-blocks">
              <PaperBlocks blocks={doc.outro} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

/* one spec section — the title at the margin, everything it owns
   pushed in one indent step under it */

function PaperSection({
  section,
  secNo,
  unit,
  topicLabel,
}: {
  section: SpecSection;
  secNo: string;
  unit: Unit;
  topicLabel: string;
}) {
  return (
    <section className="pp-section">
      <div className="pp-sec-head">
        <span className="pp-eyebrow">
          Spec {section.spec} · {unit.code} · {topicLabel}
        </span>
        <h2>
          <i className="pp-dash" aria-hidden />
          <span className="pp-sec-no">{secNo}</span>
          {section.title}
          <Dot candy="var(--acc)" />
        </h2>
      </div>

      <div className="pp-section-body">
        <div className="pp-statement">
          <span className="pp-label">Specification</span>
          <p>
            <Fmt text={section.statement} />
          </p>
        </div>

        <div className="pp-blocks">
          <PaperBlocks blocks={section.blocks} />
        </div>
      </div>
    </section>
  );
}

/* the blocks — the ledger's whole logic lives here: a block head
   opens a scope, and the reading that follows it (paragraphs,
   bullet lists, equations) is pushed one indent step in under
   that head. A self-contained card (a worked example, a table, a
   figure, a plate) closes the scope: what comes after a card
   belongs to the section again, not to a head above it. */

function PaperBlocks({ blocks }: { blocks: NotesBlock[] }) {
  const out: ReactNode[] = [];
  let figNo = 0;
  let underH = false;
  for (const b of blocks) {
    switch (b.k) {
      case "p":
        out.push(
          <p
            key={out.length}
            className={underH ? "pp-p pp-under-h" : "pp-p"}
          >
            <Fmt text={b.text} />
          </p>,
        );
        break;
      case "h":
        underH = true;
        out.push(
          <div key={out.length} className="pp-h">
            <h4>
              <Fmt text={b.text} />
            </h4>
          </div>,
        );
        break;
      case "bullets":
        out.push(
          <ul
            key={out.length}
            className={underH ? "pp-bullets pp-under-h" : "pp-bullets"}
          >
            {b.items.map((t, i) => (
              <li key={i}>
                <span>
                  <Fmt text={t} />
                </span>
              </li>
            ))}
          </ul>,
        );
        break;
      case "note":
        underH = false;
        out.push(
          <aside key={out.length} className="pp-note">
            <span className="pp-label">{b.label}</span>
            <p>
              <Fmt text={b.text} />
            </p>
          </aside>,
        );
        break;
      case "def":
        underH = false;
        out.push(
          <div key={out.length} className="pp-def">
            <span className="pp-label">Key term</span>
            <h4>
              <Fmt text={b.term} />
            </h4>
            <p>
              <Fmt text={b.text} />
            </p>
          </div>,
        );
        break;
      case "eq":
        out.push(
          <div key={out.length} className="pp-eq">
            <div className="pp-eq-line">
              {b.eq.split(/\s{2,}/).map((part, i) => (
                <span key={i}>
                  {i > 0 && (
                    <span
                      aria-hidden
                      style={{ color: "var(--acc-deep)", padding: "0 12px" }}
                    >
                      ·
                    </span>
                  )}
                  <Fmt text={part.trim()} />
                </span>
              ))}
            </div>
            {b.note && (
              <p className="pp-eq-note">
                <Fmt text={b.note} />
              </p>
            )}
          </div>,
        );
        break;
      case "table":
        underH = false;
        out.push(
          <div key={out.length} className="pp-table-wrap">
            {b.caption && (
              <div className="pp-table-cap">
                <i aria-hidden />
                <h4>
                  <Fmt text={b.caption} />
                </h4>
              </div>
            )}
            <table className="pp-table">
              <thead>
                <tr>
                  {b.head.map((h, i) => (
                    <th key={i}>
                      <Fmt text={h} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j}>
                        <Fmt text={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
        break;
      case "worked":
        underH = false;
        out.push(<PaperWorked key={out.length} b={b} />);
        break;
      case "steps":
        underH = false;
        out.push(
          <div key={out.length} className="pp-steps">
            {b.caption && (
              <div className="pp-steps-head">
                <h4>
                  <Fmt text={b.caption} />
                </h4>
              </div>
            )}
            <div className="pp-steps-body">
              {b.items.map((it, i) => {
                const bare = it.title.replace(/^\s*\d+\s*[·•]\s*/, "").trim();
                return (
                  <div key={i} className="pp-steps-item">
                    {bare && (
                      <b>
                        <Fmt text={bare} />
                      </b>
                    )}
                    <p>
                      <Fmt text={it.text} />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>,
        );
        break;
      case "figure":
        underH = false;
        ++figNo;
        out.push(
          <figure key={out.length} className="pp-fig">
            <div className="pp-fig-head">
              <span className="pp-label">
                Fig. {String(figNo).padStart(2, "0")}
              </span>
            </div>
            <div className="pp-fig-body">
              {figureArt(b.kind, "var(--acc)")}
            </div>
            {b.caption && (
              <figcaption>
                <Fmt text={b.caption} />
              </figcaption>
            )}
          </figure>,
        );
        break;
      case "wow":
        underH = false;
        out.push(
          <aside key={out.length} className="pp-wow">
            <span className="pp-label">Key idea</span>
            <p>
              <Fmt text={b.text} />
            </p>
          </aside>,
        );
        break;
    }
  }
  return <>{out}</>;
}

/* ————— the worked example, as the paper sets it —————
   No chrome. The dash and the label name the card, the question
   rides a thin accent rule, the reasoning is numbered in the
   accent, and the answer closes on a quiet tint. Everything the
   title owns sits one indent step in. */

function PaperWorked({
  b,
}: {
  b: Extract<NotesBlock, { k: "worked" }>;
}) {
  const bare = b.title.replace(/^Worked example\s*·\s*/i, "");
  return (
    <div className="pp-worked">
      <div className="pp-worked-head">
        <span className="pp-label">Worked example</span>
        <span className="pp-worked-count">
          {b.steps.length} {b.steps.length === 1 ? "step" : "steps"}
        </span>
      </div>
      <h4 className="pp-worked-title">{bare}</h4>
      <div className="pp-worked-body">
        <div className="pp-worked-q">
          <p>
            <Fmt text={b.question} />
          </p>
        </div>
        <ol className="pp-worked-steps">
          {b.steps.map((s, i) => (
            <li key={i}>
              <span className="n">{i + 1}</span>
              <span className="s">
                <StepLines text={s} />
              </span>
            </li>
          ))}
        </ol>
        {b.ms && (
          <div className="pp-worked-ms">
            <span className="pp-label">{b.ms.label}</span>
            <p>
              <Fmt text={b.ms.text} />
            </p>
          </div>
        )}
        <div className="pp-worked-answer">
          <span className="pp-label">Answer</span>
          <p>
            <Fmt text={b.answer} />
          </p>
        </div>
      </div>
    </div>
  );
}

/* ————— the house mark, recoloured for the sheet —————
   The site's atom (public/logo.svg) in the document's own deep
   tone — same geometry, so the file and the site share one mark. */

function AtomMark({ size = 26, color }: { size?: number; color: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden
      style={{ flex: "none" }}
    >
      <ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="11"
        transform="rotate(-60 32 32)"
        fill="none"
        stroke={color}
        strokeWidth="4.5"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="11"
        transform="rotate(60 32 32)"
        fill="none"
        stroke={color}
        strokeWidth="4.5"
      />
      <circle cx="32" cy="32" r="7.4" fill={color} />
      <circle cx="57.4" cy="24.6" r="3.4" fill={color} />
      <circle cx="6.6" cy="39.4" r="2.6" fill={color} />
    </svg>
  );
}

/* the title's full stop — the site's own typographic habit (the
   hero heading's candy period), kept on the paper */
function Dot({ candy }: { candy?: string }) {
  return (
    <span aria-hidden style={{ color: candy ?? "var(--acc)" }}>
      .
    </span>
  );
}
