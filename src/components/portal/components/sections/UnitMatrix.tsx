'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GLOBAL_METRICS, IAL_UNITS, type IalUnit } from '../../data/ialData';
import { EASE_EXPO } from '../../lib/motion';
import { StillProvider, useRoomLive } from '../../lib/still';
import { UnitMotif, type UnitMotifId } from '../motion/UnitMotifs';

interface UnitMatrixProps {
  reducedMotion: boolean;
  onSelectUnit: (unitCode: IalUnit['code']) => void;
}

/* The syllabus coverage, second pass — specimen-sheet cards on the
   deepening ground. Each unit keeps its honest facts (code, topic
   count, minutes, share of the reading time) and its own miniature
   loop from the same shelf the living laboratory draws from, now
   wearing plate chrome: a mono ordinal pinned to the motif stage,
   a hairline ring that warms under a fine pointer, an index arrow
   that slides in, and a deep-shadow veil that fades up beneath the
   lifting card. Motion follows one rule book: the header and grid
   breathe in together the first time the room scrolls on stage
   (shrinking gaps, one entrance per container), and hover is gated
   to fine pointers so touch never gets sticky states. Tapping a
   card still opens the command palette filtered to the unit's code. */

const MOTIF_BY_CODE: Record<IalUnit['code'], UnitMotifId> = {
  WPH11: 'drop',
};

/* Entrance choreography — one beat per element, gaps shrink as the
   wave travels (0 → 60 → 120 → 230ms), the lead travels
   furthest and support rises less, decoration fades in place. */
const HEADER_BEATS = [
  { y: 14, duration: 0.55, delay: 0 }, // kicker — decoration, fades only
  { y: 14, duration: 0.55, delay: 0.06 }, // heading — the lead
  { y: 9, duration: 0.5, delay: 0.12 }, // meta line
];
const CARD_DELAYS = [0, 0.07, 0.12]; // shrinking gaps inside the grid

export function UnitMatrix({ reducedMotion, onSelectUnit }: UnitMatrixProps) {
  // the unit motif runs only while the units room is the one on stage
  const { ref, live } = useRoomLive<HTMLElement>();
  // the room's first entrance: one wave, triggered once from the
  // viewport observer below
  const [revealed, setRevealed] = useState(reducedMotion);

  return (
    <section id="units" ref={ref} className="relative py-20 sm:py-28" data-live={live}>
      <StillProvider live={live}>
      <motion.div
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        viewport={{ amount: 0.15 }}
        onViewportEnter={() => setRevealed(true)}
      >
        {/* Editorial header — kicker, document heading, meta line.
            One entrance layer: the beats stagger inside a static
            container, gaps shrink, the lead travels furthest. The
            fourth beat belongs to the capsule below. */}
        <div className="text-center">
          {HEADER_BEATS.slice(0, 3).map((beat, i) => (
            <motion.div
              key={i}
              className={
                i === 0
                  ? 'portal-ed-kicker'
                  : i === 1
                    ? 'mx-auto mt-6 max-w-2xl text-balance'
                    : 'portal-ed-meta mx-auto mt-4 max-w-[60ch] leading-[1.9]'
              }
              initial={false}
              animate={revealed ? 'shown' : 'held'}
              variants={{
                held: { opacity: 0, y: beat.y },
                shown: {
                  opacity: 1,
                  y: 0,
                  transition: reducedMotion
                    ? { duration: 0 }
                    : { duration: beat.duration, ease: EASE_EXPO, delay: beat.delay },
                },
              }}
            >
              {i === 0 ? (
                'Syllabus coverage'
              ) : i === 1 ? (
                <h2
                  className="font-display font-semibold leading-[1.12]"
                  style={{ fontSize: 'calc(clamp(1.75rem, 3.4vw, 2.6rem) * var(--tch))' }}
                >
                  Unit 1, taught in{' '}
                  <span className="portal-ed-heading-accent">
                    specification order.
                  </span>
                </h2>
              ) : (
                'Tap a unit to browse its spec points in the index — each card shows how much of the course it takes. WPH12–WPH16 join one unit at a time, research-first.'
              )}
            </motion.div>
          ))}
        </div>

        {/* The motion graphics cards */}
        <div className="mx-auto mt-10 max-w-5xl">
          <motion.div
            id="units-document"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial={
              revealed && !reducedMotion ? { opacity: 0, y: 10 } : false
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: EASE_EXPO }}
          >
            {IAL_UNITS.map((unit, i) => {
                const ordinal = String(IAL_UNITS.indexOf(unit) + 1).padStart(2, '0');
                const sharePct = Math.round(
                  (unit.minutes / GLOBAL_METRICS.totalMinutes) * 100,
                );
                // Small tablets and tablet portrait carry two cards per
                // row; the odd third spans the full width so the row
                // reads as a deliberate editorial close, not a stranded
                // card. Desktop returns to three across.
                const last = i === IAL_UNITS.length - 1;
                return (
                  <motion.button
                    key={unit.code}
                    type="button"
                    onClick={() => onSelectUnit(unit.code)}
                    aria-label={`Open ${unit.code} — ${unit.title} in the palette`}
                    initial={false}
                    animate={revealed ? 'shown' : 'held'}
                    custom={CARD_DELAYS[i] ?? 0}
                    variants={{
                      held: { opacity: 0, y: 12 },
                      shown: (delay: number) => ({
                        opacity: 1,
                        y: 0,
                        transition: reducedMotion
                          ? { duration: 0 }
                          : { duration: 0.45, ease: EASE_EXPO, delay },
                      }),
                    }}
                    whileHover={
                      reducedMotion
                        ? undefined
                        : {
                            y: -4,
                            transition: { type: 'spring', duration: 0.45, bounce: 0.18 },
                          }
                    }
                    whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                    className={`portal-unit-card flex flex-col rounded-3xl p-4 text-left ${last ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                    style={{
                      backgroundColor: 'var(--surface)',
                      boxShadow: 'var(--card-shadow)',
                    }}
                    data-testid={`unit-card-${unit.code}`}
                  >
                    {/* the unit's own loop, on the stage ground, under
                        its plate ordinal — while the wide card spans
                        both columns it keeps its motif at card scale */}
                    <div
                      className={`portal-unit-stage overflow-hidden rounded-2xl ${last ? 'sm:mx-auto sm:w-full sm:max-w-[440px] lg:mx-0 lg:max-w-none' : ''}`}
                      style={{ backgroundColor: 'var(--bg)' }}
                    >
                      <span className="portal-unit-ordinal" aria-hidden="true">
                        {ordinal}
                      </span>
                      <UnitMotif
                        motif={MOTIF_BY_CODE[unit.code]}
                        reducedMotion={reducedMotion}
                      />
                    </div>

                    <span className="mt-4 block px-1">
                      <span className="portal-ed-meta-row">
                        <span>{unit.code}</span>
                        <span aria-hidden="true">·</span>
                        <span>{unit.topicsCount} topics</span>
                        <span aria-hidden="true">·</span>
                        <span>{unit.minutes} min</span>
                        <span className="portal-unit-arrow" aria-hidden="true">
                          <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
                        </span>
                      </span>

                      <span className="portal-ed-title" style={{ fontSize: '17px' }}>
                        {unit.title}
                      </span>

                      {/* The coverage rail — the unit's factual share
                          of the course's 756 reading minutes, one
                          quiet label instead of two */}
                      <span className="portal-ed-share">
                        <span className="portal-ed-share-bar">
                          <motion.span
                            className="portal-ed-share-fill"
                            initial={reducedMotion ? false : { width: 0 }}
                            animate={{ width: `${Math.max(sharePct, 6)}%` }}
                            transition={{ duration: 0.7, ease: EASE_EXPO, delay: reducedMotion ? 0 : 0.18 }}
                          />
                        </span>
                        <span className="portal-ed-share-label tabular-nums">
                          {sharePct}% · {unit.minutes} min
                        </span>
                      </span>
                    </span>
                  </motion.button>
                );
              })}
          </motion.div>
        </div>
      </motion.div>
      </StillProvider>
    </section>
  );
}
