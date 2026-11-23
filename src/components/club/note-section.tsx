"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { AnimatePresence, m } from "framer-motion";
import {
  Check,
  ChevronDown,
  Lightbulb,
  ListChecks,
  StickyNote,
} from "./icons";
import type { NotesBlock, SpecSection } from "@/lib/spectra/notes-types";
import { Fmt, TeX } from "./format";
import { fade, Kicker, liftWash, Reveal, ScrollFade, readableInk, shade, sunkWash, tint } from "./bits";
import { inkMix } from "./bands";
import {
  FigPhMotionGraphs,
  FigPhProjectile,
  FigPhVectors,
  FigPhFreebody,
  FigPhTerminal,
  FigPhMoments,
  FigPhForceExtension,
  FigPhStressStrain,
  FigPhFallingBall,
  FigPhYoungRig,
} from "./notes-figures-physics";

/* ═══════════════════════════════════════════════════════════════
   IAL PHYSICS · the note section renderer — the one true way a
   spec section looks, wherever it appears.

   The note reader and the revision pack both render <SpecSectionView/>:
   same spec banner, same statement card, same blocks. A section is
   written once and integrates anywhere without changing anything —
   the caller only chooses the accent (its place in the band walk)
   and whether the verbatim statement card shows.

   Width is a two-tier system, identical in both layouts:
   · every component — statement, note, definition, equation, wow,
     worked plate, steps panel, figure, table — spans the full
     column, flush with the spec banner and the subhead rules;
   · running prose keeps a reading measure (68ch of its own size),
     and long text INSIDE a plate settles at 62ch so a wide card
     never drags its lines wide with it.

   Extracted verbatim from notes-reader.tsx when the pack arrived;
   nothing about how a section reads has changed.
   ═══════════════════════════════════════════════════════════════ */

/* ————— the rooms gradient recipes —————
   Two moves, shared by every component, so the light reads as the
   document's own rather than sticker decor:

   · the ambient wash — the section's colour breathing into one
     corner of a plate at 6–8% and gone by mid-card. Every plate
     wears it; that is what makes it ambience and not an effect.
   · the accent fall — small filled things (the spec pill, the step
     chips, the toggle's chevron well) sink from the accent toward
     its shade, so the lift reads as light from above.

   All mixes run through the lab-aware tokens, so each of the four
   labs grades its own light from the same recipe. */

const ambientWash = (accent: string, pct = 8) =>
  `radial-gradient(120% 92% at 100% 0%, color-mix(in oklab, ${accent} ${pct}%, transparent), transparent 55%)`;

const accentFall = (accent: string) =>
  `linear-gradient(160deg, ${accent}, ${shade(accent)})`;

/* ————— one specification section — a room with its own colour ————— */

export function SpecSectionView({
  section,
  accent,
  hideStatement = false,
  bannerAction,
}: {
  section: SpecSection;
  accent: string;
  /** revision packs can fold the official wording away */
  hideStatement?: boolean;
  /** optional extra control at the end of the banner rule — the
      reader parks its pack tick there; other callers pass nothing,
      so a section renders identically everywhere by default */
  bannerAction?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-7">
      {/* spec banner — the official wording, stated above the section.
          v3: the pill keeps its tilt and hard shadow, the rule beside
          it is a divided line, and a quiet clause rule parts the
          banner from the body. v3.1: the pill's fill falls from the
          accent toward its shade — light from above — and the tick
          dissolves rightward instead of stopping dead. */}
      <div>
        <div className="flex items-center gap-3">
          <span
            className="inline-flex shrink-0 -rotate-1 items-center gap-1.5 rounded-full px-3.5 py-1.5 font-display text-[calc(12px*var(--ts-other))] font-bold tracking-[0.08em] uppercase"
            style={{
              background: accentFall(accent),
              color: readableInk(accent),
              boxShadow: `0 3px 0 ${shade(accent)}`,
            }}
          >
            Spec {section.spec}
          </span>
          <span
            aria-hidden
            className="h-[calc(3px*var(--ui-scale))] w-7 shrink-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${accent}, ${tint(accent, 45)})`,
            }}
          />
          <span
            aria-hidden
            className="h-px min-w-6 flex-1"
            style={{ background: "var(--rooms-hairline)" }}
          />
          {bannerAction}
        </div>
        <h2 className="mt-3.5 font-display text-[calc(24px*var(--ts-sub))] font-semibold tracking-tight text-ink">
          {section.title}
        </h2>
        {!hideStatement && (
          <div
            className="mt-4 rounded-[calc(12px*var(--ui-scale))] border bg-paper px-5 py-4"
            style={{
              borderColor: "var(--rooms-hairline)",
              borderLeft: `3px solid ${accent}`,
              background: `${ambientWash(accent)}, var(--color-paper)`,
            }}
          >
            <Kicker color={inkMix(accent, 62)}>From the specification</Kicker>
            <p className="mt-2 max-w-[62ch] text-[calc(14.5px*var(--ts-body))] leading-[1.8] text-ink-soft italic">
              <Fmt text={section.statement} />
            </p>
          </div>
        )}
      </div>

      {/* the clause rule — one quiet hairline between the banner and
          the body; the document's way of drawing breath */}
      <div
        aria-hidden
        className="h-px w-full"
        style={{ background: "var(--rooms-hairline-soft)" }}
      />

      {/* the body — every block flush on the column's left edge.
          Hierarchy lives in the type and the rules now, not in
          indents: subheads carry a leading accent tick and a trailing
          hairline, and nothing else steps in. */}
      <div className="flex flex-col gap-6">
        {section.blocks.map((b, i) => (
          <Reveal key={i} delay={Math.min(i * 0.03, 0.12)} y={18}>
            <BlockView block={b} accent={accent} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ————— block dispatcher ————— */

function BlockView({
  block: b,
  accent,
}: {
  block: NotesBlock;
  accent: string;
}) {
  switch (b.k) {
    case "p":
      return (
        <p className="max-w-[68ch] text-[calc(14.5px*var(--ts-body))] leading-[1.9] text-ink-soft">
          <Fmt text={b.text} />
        </p>
      );
    case "h":
      /* v3: the ruled subhead — an accent tick leads (dissolving
         rightward now, the way a pen stroke lifts), the hairline
         trails to the column's edge; the document's section rule */
      return (
        <div className="flex items-center gap-3 pt-2">
          <span
            aria-hidden
            className="h-[calc(3px*var(--ui-scale))] w-6 shrink-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${accent}, ${tint(accent, 72)})`,
            }}
          />
          <h3 className="min-w-0 font-display text-[calc(18px*var(--ts-sub))] font-semibold tracking-tight text-ink">
            <Fmt text={b.text} />
          </h3>
          <span
            aria-hidden
            className="h-px min-w-4 flex-1"
            style={{ background: "var(--rooms-hairline-soft)" }}
          />
        </div>
      );
    case "bullets":
      /* the list sits at the same measure as the paragraph — the
         cap is ch-relative, so the ul carries the paragraph's size
         to make its ch match exactly */
      return (
        <ul className="flex max-w-[68ch] flex-col gap-2.5 text-[calc(14.5px*var(--ts-body))]">
          {b.items.map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[calc(14.5px*var(--ts-body))] leading-[1.85] text-ink-soft"
            >
              <span
                className="mt-[calc(11px*var(--ui-scale))] h-2 w-2 shrink-0 rounded-full"
                style={{ background: tint(accent, 55) }}
              />
              <span>
                {/* a bullet may carry one "\n" — two linked lines inside
                    one bullet, the owner's max-two-lines rule (2026-11-23);
                    single-line items render exactly as before */}
                {t.split("\n").map((ln, j) => (
                  <span key={j} className={j > 0 ? "mt-1.5 block" : "block"}>
                    <Fmt text={ln} />
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <div
          className="rounded-[calc(12px*var(--ui-scale))] border px-4 py-3.5"
          style={{
            borderColor: "var(--rooms-hairline-soft)",
            background: `${ambientWash(accent, 7)}, color-mix(in oklab, var(--color-paper) 92%, ${accent} 8%)`,
          }}
        >
          <div className="flex items-start gap-3">
            <StickyNote
              className="mt-0.5 h-4.5 w-4.5 shrink-0"
              style={{ color: inkMix(accent, 70) }}
            />
            <p className="text-[calc(13.5px*var(--ts-body))] leading-[1.8] text-ink-soft">
              <span
                className="mr-1.5 font-display text-[calc(10.5px*var(--ts-other))] font-extrabold tracking-[0.2em] uppercase"
                style={{ color: inkMix(accent, 70) }}
              >
                {b.label}:
              </span>
              <Fmt text={b.text} />
            </p>
          </div>
        </div>
      );
    case "def":
      /* v3: the ruled definition — a hairline card with the accent
         kept as a left edge, no sticker chrome; the term carries it.
         v3.1: full column like every plate, the text settling at the
         inner measure, the corner wearing the ambient wash. */
      return (
        <div
          className="rounded-[calc(12px*var(--ui-scale))] border bg-paper px-5 py-4"
          style={{
            borderColor: "var(--rooms-hairline)",
            borderLeft: `3px solid ${tint(accent, 60)}`,
            background: `${ambientWash(accent, 6)}, var(--color-paper)`,
          }}
        >
          <h4 className="font-display text-[calc(16.5px*var(--ts-body))] font-semibold tracking-tight text-ink">
            <Fmt text={b.term} />
          </h4>
          <p className="mt-1.5 max-w-[62ch] text-[calc(14.5px*var(--ts-body))] leading-[1.8] text-ink-soft">
            <Fmt text={b.text} />
          </p>
        </div>
      );
    case "eq":
      /* v3: the ruled equation band — a whisper of the accent over
         paper, closed top and bottom by hairlines; the species keep
         their paper chips and hard mini-shadows (the candy moment).
         v3.1: full column, the ambient wash breathing in the corner. */
      return (
        <div
          className="rounded-[calc(12px*var(--ui-scale))] px-5 py-4"
          style={{
            background: `${ambientWash(accent, 7)}, color-mix(in oklab, var(--color-paper) 93%, ${accent} 7%)`,
            borderTop: "1px solid var(--rooms-hairline)",
            borderBottom: "1px solid var(--rooms-hairline)",
          }}
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
            {b.eq.split(/\s{2,}/).map((part, i) => (
              <span
                key={i}
                className="rounded-[calc(10px*var(--ui-scale))] bg-paper px-3.5 py-2 font-display text-[calc(16px*var(--ts-body))] font-semibold tracking-tight text-ink"
                style={{ boxShadow: "0 2px 0 var(--edge)" }}
              >
                <EqPart text={part.trim()} />
              </span>
            ))}
          </div>
          {b.note && (
            <p className="mt-3 text-[calc(13px*var(--ts-body))] leading-[1.7] italic text-ink-soft">
              <Fmt text={b.note} />
            </p>
          )}
        </div>
      );
    case "table":
      return (
        <CandyTable
          head={b.head}
          rows={b.rows}
          caption={b.caption}
          accent={accent}
        />
      );
    case "worked":
      return (
        <Worked
          title={b.title}
          question={b.question}
          steps={b.steps}
          answer={b.answer}
          ms={b.ms}
          accent={accent}
        />
      );
    case "steps":
      return <StepsPanel caption={b.caption} items={b.items} accent={accent} />;
    case "figure":
      return <Figure kind={b.kind} caption={b.caption} accent={accent} />;
    case "wow":
      /* v3: the ruled pull-quote — hairlines above and below, the
         key idea set larger in italic ink; the grape lightbulb and
         kicker keep their voice, the card chrome is gone. v3.1: the
         rules run the full column (level with the subhead rules)
         while the quote itself keeps the inner measure. */
      return (
        <div
          className="py-5"
          style={{
            borderTop: "1px solid var(--rooms-hairline)",
            borderBottom: "1px solid var(--rooms-hairline)",
          }}
        >
          <div className="flex items-start gap-3">
            <Lightbulb
              className="mt-1 h-5 w-5 shrink-0"
              style={{ color: inkMix("#9775FA", 72) }}
            />
            <div className="min-w-0">
              <Kicker color={inkMix("#9775FA", 62)}>Key idea</Kicker>
              <p className="mt-1.5 max-w-[62ch] text-[calc(15px*var(--ts-body))] leading-[1.8] text-ink italic">
                <Fmt text={b.text} />
              </p>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

/* ————— candy table ————— */

function CandyTable({
  head,
  rows,
  caption,
  accent,
}: {
  head: string[];
  rows: string[][];
  caption?: string;
  accent: string;
}) {
  return (
    <div className="max-w-full">
      {caption && (
        <div className="mb-2.5 flex items-start gap-2.5">
          <span
            aria-hidden
            className="mt-[calc(12px*var(--ui-scale))] h-[calc(4px*var(--ui-scale))] w-[calc(22px*var(--ui-scale))] shrink-0 rounded-full"
            style={{ background: accent }}
          />
          <div className="min-w-0 font-display text-[calc(18px*var(--ts-sub))] leading-snug font-semibold text-ink">
            <Fmt text={caption} />
          </div>
        </div>
      )}
      <div
        className="overflow-hidden rounded-[calc(12px*var(--ui-scale))] rounded-tl-none bg-paper puff"
        style={{
          border: "1px solid var(--rooms-hairline-soft)",
          background: `${ambientWash(accent, 6)}, var(--color-paper)`,
        }}
      >
        <ScrollFade>
          <table className="w-full min-w-[calc(480px*var(--ui-scale))] border-collapse text-left">
            <thead>
              <tr
                style={{
                  background: `linear-gradient(90deg, ${sunkWash(accent, 15)}, transparent 92%)`,
                }}
              >
                {head.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 font-display text-[calc(11px*var(--ts-other))] font-semibold tracking-[0.12em] whitespace-nowrap text-ink-soft uppercase sm:px-5"
                  >
                    <Fmt text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={i}
                  className="border-t border-ink/[0.08]"
                  style={{
                    background:
                      i % 2 === 1
                        ? `var(--zebra-fill, color-mix(in oklab, ${accent} 4%, var(--tint-base)))`
                        : undefined,
                  }}
                >
                  {r.map((c, j) => (
                    <td
                      key={j}
                      className={`px-4 py-3.5 align-top text-[calc(13.5px*var(--ts-body))] leading-[1.65] sm:px-5 ${j === 0 ? "font-semibold text-ink" : "text-ink-soft"}`}
                    >
                      <Fmt text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollFade>
      </div>
    </div>
  );
}

/* ————— equation chips —————
   An eq band's parts may carry $…$ LaTeX — the Forces rebuild's
   equations are typeset, the older topics' stay plain. A part that
   is one math span typesets whole; anything else keeps <Fmt/> so
   the legacy ==highlight==/~sub~ markup still works. */

function EqPart({ text }: { text: string }) {
  const m = /^\$([^$]+)\$$/.exec(text);
  if (m) return <TeX tex={m[1]} />;
  return <Fmt text={text} />;
}

/* ————— step lines —————
   A worked step may carry "\n" breaks: the marking point's sentence
   first, then the working on ruled lines of its own. A line that is
   a single $…$ span typesets as a maths line, indented like the
   workings on paper; prose lines keep the inline markup. Exported —
   the gallery and editorial readers re-cut the same steps. */

export function StepLines({ text }: { text: string }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((ln, i) => {
        const t = ln.trim();
        if (!t) return null;
        const m = /^\$([^$]+)\$$/.exec(t);
        if (m) {
          return (
            <span
              key={i}
              className="my-2 block pl-1 text-ink"
              style={{ lineHeight: 1.9 }}
            >
              <TeX tex={m[1]} />
            </span>
          );
        }
        return (
          <span key={i} className={i > 0 ? "mt-1.5 block" : "block"}>
            <Fmt text={t} />
          </span>
        );
      })}
    </>
  );
}

/* ————— the verbatim worked note —————
   The examiner-report / mark-scheme line a card was built from,
   set apart from the working. Shared furniture: the three readers
   (note, gallery, editorial) each dress it in their own room. */

export function WorkedMsNote({
  ms,
  accent,
}: {
  ms: { label: string; text: string };
  accent?: string;
}) {
  const labelStyle = accent
    ? { color: inkMix(accent, 70) }
    : { color: "var(--iface-accent)" };
  return (
    <div
      className="mt-4 rounded-[calc(12px*var(--ui-scale))] border px-4 py-3"
      style={{
        borderColor: "var(--rooms-hairline-soft)",
        background: accent
          ? `color-mix(in oklab, var(--color-paper) 94%, ${accent} 6%)`
          : "color-mix(in oklab, var(--color-ink) 3%, transparent)",
      }}
    >
      <p className="text-[calc(13.5px*var(--ts-body))] leading-[1.8] text-ink-soft">
        <span
          className="mr-1.5 font-display text-[calc(10.5px*var(--ts-other))] font-extrabold tracking-[0.2em] uppercase"
          style={labelStyle}
        >
          {ms.label}:
        </span>
        <Fmt text={ms.text} />
      </p>
    </div>
  );
}

/* ————— the paper window —————
   Browsers fire beforeprint before the snapshot and afterprint when
   the sheet is done; a tiny hook lets folded things open for the
   printer and fold back after. This is how worked examples print
   whole: question, staircase and answer — while the screen keeps
   guarding its space. Shared with the editorial and gallery
   readers, whose worked cards fold the same way. */

export function usePrinting() {
  const [printing, setPrinting] = useState(false);
  useEffect(() => {
    const before = () => setPrinting(true);
    const after = () => setPrinting(false);
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);
  return printing;
}

/* ————— worked example — the folio plate —————
   The worked example reads as the document's gallery plate: a
   hairline card under one soft accent edge, the section's colour
   breathing as an ambient wash in the corner. The whole plate is a
   drop-down: folded it shows only the role label, the step count
   and the card's title; a click unfolds the question, the method
   ruled out line by line — mono numerals in the margin, hairlines
   carrying the order — and the answer sealed in a quiet wash of
   its own. Print unfolds the whole plate. Every reader's worked
   card folds this way (the editorial and gallery dresses share the
   pattern), so a long topic scrolls as one clean list. */

function Worked({
  title,
  question,
  steps,
  answer,
  ms,
  accent,
}: {
  title: string;
  question: string;
  steps: string[];
  answer: string;
  ms?: { label: string; text: string };
  accent: string;
}) {
  const [open, setOpen] = useState(false);
  const printing = usePrinting();
  const shown = open || printing;

  /* the card carries its own WORKED EXAMPLE label, so the title
     hands that role over: "Worked example · rate = 1/time" leaves
     only its matter as the heading; a bare "Worked example 2"
     leaves nothing and the question speaks alone; titles that never
     wore the label keep every word of theirs */
  const heading = title.replace(
    /^worked example(?:\s+\d+)?\s*(?:·|—)?\s*/i,
    "",
  );

  return (
    <div
      className="rounded-[calc(18px*var(--ui-scale))] bg-paper puff"
      style={{
        border: "1px solid var(--rooms-hairline)",
        borderTop: `2px solid ${tint(accent, 65)}`,
        background: `${ambientWash(accent)}, var(--color-paper)`,
      }}
    >
      {/* the folded head — the plate's whole upper half is the
          click target: role label, rule, step count, chevron and
          the card's title. One dropdown row per card; the body
          stays folded until clicked (see .worked-toggle in
          globals for the hover wash). */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((o) => !o);
          }
        }}
        className="worked-head worked-toggle w-full cursor-pointer list-none p-5 pb-4 text-left select-none sm:p-6 sm:pb-4 print:cursor-default"
        style={
          {
            "--wt-rest": open ? fade(accent, 6) : "transparent",
            "--wt-hover": fade(accent, 12),
          } as CSSProperties
        }
      >
        <div className="flex items-center gap-3">
          <Kicker color={inkMix(accent, 70)}>Worked example</Kicker>
          <span
            aria-hidden
            className="h-px min-w-4 flex-1"
            style={{ background: "var(--rooms-hairline-soft)" }}
          />
          <span
            className="shrink-0 text-[calc(10.5px*var(--ts-other))] font-semibold tracking-[0.18em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--color-ink-faint)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {steps.length} {steps.length === 1 ? "step" : "steps"}
          </span>
          <m.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid h-[calc(24px*var(--ui-scale))] w-[calc(24px*var(--ui-scale))] shrink-0 place-items-center rounded-full"
            style={{
              background: `linear-gradient(160deg, ${tint(accent, 88)}, ${tint(accent, 62)})`,
              color: inkMix(accent, 90),
            }}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </m.span>
        </div>

        {heading && (
          <h4 className="mt-3 font-display text-[calc(19px*var(--ts-sub))] leading-snug font-semibold tracking-tight text-ink">
            <Fmt text={heading} />
          </h4>
        )}
      </div>

      <AnimatePresence initial={false}>
        {shown && (
          <m.div
            initial={printing ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={
              printing
                ? { duration: 0 }
                : { type: "spring", stiffness: 280, damping: 30 }
            }
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6">
              <p className="max-w-[62ch] text-[calc(15px*var(--ts-body))] leading-[1.75] font-medium text-ink">
                <Fmt text={question} />
              </p>

              {/* the method — ruled out line by line, the divided
                  lines carrying the order the staircase used to */}
              <ol className="mt-5">
                {steps.map((s, i) => (
                  <m.li
                    key={i}
                    initial={printing ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      printing
                        ? { duration: 0 }
                        : {
                            duration: 0.45,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.04 + i * 0.05,
                          }
                    }
                    className="flex items-baseline gap-4 border-t py-3.5"
                    style={{ borderColor: "var(--rooms-hairline-soft)" }}
                  >
                    <span
                      aria-hidden
                      className="w-[calc(26px*var(--ui-scale))] shrink-0 text-[calc(11.5px*var(--ts-other))] font-semibold tracking-[0.08em]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: inkMix(accent, 76),
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 text-[calc(14.5px*var(--ts-body))] leading-[1.85] text-ink-soft">
                      <StepLines text={s} />
                    </span>
                  </m.li>
                ))}
              </ol>

              {/* the verbatim note — the examiner's report or mark
                  scheme line this card was built from, set apart
                  from the working so neither crowds the other */}
              {ms && <WorkedMsNote ms={ms} accent={accent} />}

              {/* the answer — sealed in a quiet wash of the accent */}
              <m.div
                initial={printing ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  printing
                    ? { duration: 0 }
                    : {
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 0.08 + steps.length * 0.05,
                      }
                }
                className="mt-4 rounded-[calc(14px*var(--ui-scale))] px-5 py-4"
                style={{
                  background: `linear-gradient(135deg, ${fade(accent, 10)}, transparent 65%), ${liftWash(accent, 8)}`,
                  border: "1px solid var(--rooms-hairline-soft)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Check
                    className="h-4 w-4 shrink-0"
                    strokeWidth={2.5}
                    style={{ color: inkMix(accent, 85) }}
                  />
                  <span
                    className="font-display text-[calc(10.5px*var(--ts-other))] font-extrabold tracking-[0.2em] uppercase"
                    style={{ color: inkMix(accent, 70) }}
                  >
                    Answer
                  </span>
                </div>
                <p className="mt-2 font-display text-[calc(16px*var(--ts-body))] leading-[1.65] font-semibold tracking-tight text-ink">
                  <Fmt text={answer} />
                </p>
              </m.div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ————— steps — the candy stage strip —————
   One tinted panel, same recipe as the equation block: the caption
   as a header beside a little icon square, and every step as a
   paper mini-card in a loose grid. The accent number chips echo
   the contents grid and the worked-example staircase, so the order
   reads at a glance — no rail, no icons, just tidy cards. */

function StepsPanel({
  caption,
  items,
  accent,
}: {
  caption?: string;
  items: { title: string; text: string; icon?: string }[];
  accent: string;
}) {
  const n = items.length;
  /* short trios sit side by side; longer tellings wrap into two
     columns, and an odd one out gets the full-width finale */
  const roomy = n >= 4 || items.some((it) => it.text.length > 170);
  const grid = [
    "grid grid-cols-1 gap-2.5 sm:gap-3",
    roomy
      ? "sm:grid-cols-2"
      : n === 3
        ? "sm:grid-cols-3"
        : n === 2
          ? "sm:grid-cols-2"
          : "",
    roomy && n % 2 === 1 ? "sm:[&>li:last-child]:col-span-2" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className="rounded-[calc(18px*var(--ui-scale))] p-4 sm:p-5"
      style={{
        background: `${ambientWash(accent, 7)}, ${liftWash(accent, 7)}`,
        border: "1px solid var(--rooms-hairline-soft)",
      }}
    >
      {caption && (
        <div className="mb-3.5 flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-ink/[0.08] bg-paper">
            <ListChecks
              className="h-4.5 w-4.5"
              style={{ color: inkMix(accent, 62) }}
              strokeWidth={2.2}
            />
          </span>
          <h4 className="font-display text-[calc(16px*var(--ts-body))] font-semibold tracking-tight text-ink">
            <Fmt text={caption} />
          </h4>
        </div>
      )}
      <ol className={grid}>
        {items.map((it, i) => {
          /* titles like “1 · Vapourisation” hand their number to the chip */
          const bare = it.title.replace(/^\s*\d+\s*[·•]\s*/, "");
          return (
            <li
              key={i}
              className="rounded-[calc(16px*var(--ui-scale))] border border-ink/[0.07] bg-paper px-4 py-3.5"
            >
              <div className="flex items-center gap-2">
                <span
                  className="grid h-[calc(22px*var(--ui-scale))] w-[calc(22px*var(--ui-scale))] shrink-0 place-items-center rounded-full font-display text-[calc(11px*var(--ts-other))] font-bold"
                  style={{ background: accentFall(accent), color: readableInk(accent) }}
                >
                  {i + 1}
                </span>
                <span className="font-display text-[calc(14.5px*var(--ts-body))] font-semibold text-ink">
                  <Fmt text={bare} />
                </span>
              </div>
              <p className="mt-1.5 text-[calc(13.5px*var(--ts-body))] leading-[1.7] text-ink-soft">
                <Fmt text={it.text} />
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* ————— figures ————— */

/* wide plots scroll sideways on phones instead of shrinking to mush */
/* the wide-figure ledger went with the chemistry library — no
   physics figure needs a horizontal scroller; the contract stays
   so future figures can opt back in */
const WIDE_FIGS = new Set<string>([]);

/* the museum of diagrams, handed out so the sample room can frame
   the very same art inside its own editorial exhibit cards */
export function figureArt(kind: string, accent: string): ReactNode {
  let node: ReactNode = null;
  switch (kind) {
    case "ph-motion-graphs":
      node = <FigPhMotionGraphs accent={accent} />;
      break;
    case "ph-projectile":
      node = <FigPhProjectile accent={accent} />;
      break;
    case "ph-vectors":
      node = <FigPhVectors accent={accent} />;
      break;
    case "ph-freebody":
      node = <FigPhFreebody accent={accent} />;
      break;
    case "ph-terminal":
      node = <FigPhTerminal accent={accent} />;
      break;
    case "ph-moments":
      node = <FigPhMoments accent={accent} />;
      break;
    case "ph-force-extension":
      node = <FigPhForceExtension accent={accent} />;
      break;
    case "ph-stress-strain":
      node = <FigPhStressStrain accent={accent} />;
      break;
    case "ph-falling-ball":
      node = <FigPhFallingBall accent={accent} />;
      break;
    case "ph-young-rig":
      node = <FigPhYoungRig accent={accent} />;
      break;
  }
  return node;
}

export function isWideFigure(kind: string): boolean {
  return WIDE_FIGS.has(kind);
}

function Figure({
  kind,
  caption,
  accent,
}: {
  kind: string;
  caption?: string;
  accent: string;
}) {
  const node = figureArt(kind, accent);
  if (!node) return null;
  const wide = isWideFigure(kind);
  return (
    <div
      className="rounded-[calc(20px*var(--ui-scale))] bg-paper p-4 puff sm:p-6"
      style={{
        border: "1px solid var(--rooms-hairline-soft)",
        background: `${ambientWash(accent, 6)}, var(--color-paper)`,
      }}
    >
      {wide ? (
        <ScrollFade>
          <div className="min-w-[calc(620px*var(--ui-scale))]">{node}</div>
        </ScrollFade>
      ) : (
        <div className="flex justify-center">
          <div className="flex w-full justify-center">{node}</div>
        </div>
      )}
      {caption && (
        <div className="mx-auto mt-4 max-w-[58ch]">
          {/* the caption's own divided line — a small centred rule */}
          <span
            aria-hidden
            className="mx-auto block h-px w-10"
            style={{ background: "var(--rooms-hairline)" }}
          />
          <p className="mt-2.5 text-center text-[calc(12.5px*var(--ts-other))] leading-[1.65] text-ink-faint">
            <Fmt text={caption} />
          </p>
        </div>
      )}
    </div>
  );
}
