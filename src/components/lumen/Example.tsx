'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_LUM, Meniscus, Reveal, SectionHead } from './bits';
import { useLive } from './lib';

/* ═══════════════════════════════════════════════════════════════════════
   a taste — a real WPH11 question, solved the bench way.

   The numbers are the machine's own (the motion section runs this same
   launch live): m = 5.0 × 10⁶ kg lifting off on 7.3 × 10⁷ N of thrust
   gives exactly a = 4.8 m s⁻² — verified in scripts/lumen-numbers.py.
   The question card stays pinned while the four steps light up in
   order, and the answer arrives as a pill.
   ═══════════════════════════════════════════════════════════════════════ */

const INK70 = 'rgba(242,238,250,0.7)';
const INK40 = 'rgba(242,238,250,0.4)';

/* the little rig on the question card — the rocket on its pad, its
   thrust arrow glowing while the weight arrow holds it down, and the
   velocity–time line drawing itself up as it climbs */
function MiniLaunch() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      {/* launch pad */}
      <path d="M20 128 H110" stroke={INK70} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M34 128 V138 M62 128 V138 M90 128 V138" stroke={INK40} strokeWidth="1.6" />
      {/* the rocket, climbing slowly on the loop */}
      <g className="lum-loop lum-rise" style={{ transformBox: 'fill-box' }}>
        <path d="M60 118 L60 96 L68 84 L76 96 L76 118 Z" fill="rgba(116,215,255,0.14)" stroke="#74d7ff" strokeWidth="2.2" />
        <circle cx="68" cy="102" r="3.4" fill="none" stroke="#74d7ff" strokeWidth="1.6" />
      </g>
      {/* exhaust drips falling away below the pad line */}
      <circle className="lum-loop lum-drip" cx="64" cy="124" r="2.2" fill="#ff8fd6" />
      <circle className="lum-loop lum-drip d2" cx="72" cy="124" r="2.2" fill="#74d7ff" />
      {/* thrust — the long arrow up, labelled */}
      <path d="M92 116 V78" stroke="#74d7ff" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M92 78 L87.6 87 M92 78 L96.4 87" stroke="#74d7ff" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <text x="98" y="92" fontSize="10" fontFamily="var(--font-plex), monospace" fill="#74d7ff">
        thrust
      </text>
      {/* weight — the shorter arrow down */}
      <path d="M44 98 V122" stroke="#ff8fd6" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M44 122 L39.6 113 M44 122 L48.4 113" stroke="#ff8fd6" strokeWidth="2.6" strokeLinecap="round" fill="none" />
      <text x="22" y="136" fontSize="10" fontFamily="var(--font-plex), monospace" fill="#ff8fd6">
        weight
      </text>
      {/* the v–t graph, miniature — the line drawing on */}
      <path d="M180 30 H310" stroke={INK40} strokeWidth="1.4" strokeDasharray="2 5" />
      <path d="M180 24 V136" stroke={INK40} strokeWidth="1.4" strokeDasharray="2 5" />
      <path
        className="lum-loop lum-drawcurve"
        d="M182 132 C 214 130, 248 96, 276 62 C 288 48, 298 40, 308 38"
        fill="none"
        stroke="#6fe8a3"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <text x="252" y="146" fontSize="9.5" fontFamily="var(--font-plex), monospace" fill={INK40}>
        v = u + at
      </text>
      <text x="312" y="146" fontSize="9.5" fontFamily="var(--font-plex), monospace" fill={INK40} textAnchor="end">
        time →
      </text>
    </svg>
  );
}

const STEPS: Array<{ n: string; body: React.ReactNode }> = [
  {
    n: '1',
    body: (
      <>
        <b>Weight first.</b>{' '}
        <span className="lum-mono">
          W = mg = 5.0 × 10<sup>6</sup> × 9.81 = 4.91 × 10<sup>7</sup> N
        </span>{' '}
        — the thrust is <em>not</em> the resultant force; the weight is still there.
      </>
    ),
  },
  {
    n: '2',
    body: (
      <>
        <b>Take the difference.</b>{' '}
        <span className="lum-mono">
          ΣF = thrust − weight = 7.3 × 10<sup>7</sup> − 4.91 × 10<sup>7</sup> = 2.39 ×
          10<sup>7</sup> N
        </span>{' '}
        — the resultant acts upwards.
      </>
    ),
  },
  {
    n: '3',
    body: (
      <>
        <b>Apply the second law.</b>{' '}
        <span className="lum-mono">
          a = ΣF/m = 2.39 × 10<sup>7</sup> ÷ 5.0 × 10<sup>6</sup>
        </span>{' '}
        — one line, straight into the calculator.
      </>
    ),
  },
  {
    n: '4',
    body: (
      <>
        <b>Round honestly.</b> The data carries two significant figures, so the answer does
        too — and the unit rides on the end.
      </>
    ),
  },
];

export function TasteBand() {
  const liveRef = useLive<HTMLElement>();
  const reduced = Boolean(useReducedMotion());

  return (
    <section id="taste" ref={liveRef} className="lum-sec lum-band-taste">
      <Meniscus />
      <div className="lum-wrap">
        <SectionHead
          dot="#ff8fd6"
          eyebrow="a taste of the notes"
          title="Watch a question react."
          lead="A WPH11 classic — the same launch the machine below the shelf is running live. Four steps, no skipped lines, the way every worked example in the notes is written."
        />
        <div className="lum-taste-grid">
          <Reveal className="lum-qcard">
            <span className="lum-qchip">WPH11 · the equations of motion</span>
            <p className="lum-qtext">
              A rocket of mass 5.0 × 10<sup>6</sup> kg lifts off with engine thrust
              7.3 × 10<sup>7</sup> N. Calculate the initial acceleration.
            </p>
            <span className="lum-qeq">
              ΣF = ma
            </span>
            <div className="lum-tsvg">
              <MiniLaunch />
            </div>
            <p className="lum-qfoot">the rig on the left, the curve on the right — one loop, every 8 seconds</p>
          </Reveal>

          <motion.div
            className="lum-steps"
            initial={reduced ? false : 'hidden'}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: reduced ? 0 : 0.16 } },
            }}
          >
            {STEPS.map((s) => (
              <motion.div
                key={s.n}
                className="lum-step"
                variants={{
                  hidden: reduced ? {} : { opacity: 0, y: 22 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_LUM } },
                }}
              >
                <span className="lum-stepn">{s.n}</span>
                <p>{s.body}</p>
              </motion.div>
            ))}
            <motion.div
              className="lum-step lum-answrap"
              variants={{
                hidden: reduced ? {} : { opacity: 0, y: 22 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE_LUM, delay: 0.25 },
                },
              }}
            >
              <span className="lum-stepn">∴</span>
              <p>
                <b>Two significant figures with the unit attached,</b> as the paper expects —
                three marks, gently earned.
                <br />
                <motion.span
                  className="lum-answer"
                  initial={reduced ? false : { scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 260, damping: 15, delay: 0.5 }}
                  style={{ display: 'inline-flex', marginTop: 10 }}
                >
                  a = 4.8 m s<sup>−2</sup>
                </motion.span>
              </p>
              <svg
                className="lum-ans-spark"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2 L14 9.5 L22 12 L14 14.5 L12 22 L10 14.5 L2 12 L10 9.5 Z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
