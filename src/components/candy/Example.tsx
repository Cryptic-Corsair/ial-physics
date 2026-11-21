'use client';

import { useRef } from 'react';
import { BlobDivider, Reveal, SectionHead } from './bits';
import { boopConfetti, motionAllowed, useLive } from './lib';

/* ═══════════════════════════════════════════════════════════════════════
   try one on me — a real WPH11 question, solved the candy way. The
   numbers are the machine's own (the motion section runs this same
   launch live): m = 5.0 × 10⁶ kg lifting off on 7.3 × 10⁷ N of thrust
   gives exactly a = 4.8 m s⁻² — verified in scripts/lumen-numbers.py.
   The question card stays pinned while the four steps pop in order;
   the answer arrives as a pill, with confetti if motion is allowed.

   The stagger used to be a framer variant tree; it now rides the same
   deterministic reveal engine as the rest of the door — per-step
   delays, one engine, no race with hydration.
   ═══════════════════════════════════════════════════════════════════════ */

const INK70 = 'rgba(61, 43, 31, 0.7)';
const INK40 = 'rgba(61, 43, 31, 0.42)';

/* the little rig on the question card — the rocket on its pad, its
   thrust arrow glowing while the weight arrow holds it down, and the
   velocity–time line drawing itself up as it climbs */
function MiniLaunch() {
  return (
    <svg viewBox="0 0 320 150" aria-hidden="true">
      {/* launch pad */}
      <path d="M20 128 H110" stroke={INK70} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M34 128 V138 M62 128 V138 M90 128 V138" stroke={INK40} strokeWidth="1.7" />
      {/* the rocket, climbing slowly on the loop */}
      <g className="cd-loop cd-rise" style={{ transformBox: 'fill-box' }}>
        <path d="M60 118 L60 96 L68 84 L76 96 L76 118 Z" fill="rgba(91, 180, 232, 0.16)" stroke="#5BB4E8" strokeWidth="2.4" />
        <circle cx="68" cy="102" r="3.6" fill="none" stroke="#5BB4E8" strokeWidth="1.8" />
      </g>
      {/* exhaust drips falling away below the pad line */}
      <circle className="cd-loop cd-drip" cx="64" cy="124" r="2.4" fill="#F06595" />
      <circle className="cd-loop cd-drip d2" cx="72" cy="124" r="2.4" fill="#5BB4E8" />
      {/* thrust — the long arrow up, labelled */}
      <path d="M92 116 V78" stroke="#5BB4E8" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M92 78 L87.6 87 M92 78 L96.4 87" stroke="#5BB4E8" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <text x="98" y="92" fontSize="10" fontFamily="var(--font-plex), monospace" fill={INK70}>
        thrust
      </text>
      {/* weight — the shorter arrow down */}
      <path d="M44 98 V122" stroke="#F06595" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M44 122 L39.6 113 M44 122 L48.4 113" stroke="#F06595" strokeWidth="2.8" strokeLinecap="round" fill="none" />
      <text x="22" y="136" fontSize="10" fontFamily="var(--font-plex), monospace" fill={INK70}>
        weight
      </text>
      {/* the v–t graph, miniature — the line drawing on */}
      <path d="M180 30 H310" stroke={INK40} strokeWidth="1.5" strokeDasharray="2 5" />
      <path d="M180 24 V136" stroke={INK40} strokeWidth="1.5" strokeDasharray="2 5" />
      <path
        className="cd-loop cd-drawcurve"
        d="M182 132 C 214 130, 248 96, 276 62 C 288 48, 298 40, 308 38"
        fill="none"
        stroke="#9775FA"
        strokeWidth="3.2"
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
        <span className="cd-mono">
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
        <span className="cd-mono">
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
        <span className="cd-mono">
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
  const ansRef = useRef<HTMLDivElement | null>(null);
  const fired = useRef(false);

  /* the answer pill bursts once, when it first arrives */
  const onAnswerIn = () => {
    if (fired.current || !motionAllowed()) return;
    fired.current = true;
    if (ansRef.current) boopConfetti(ansRef.current);
  };

  return (
    <section id="taste" ref={liveRef} className="cd-sec cd-band-taste">
      <BlobDivider kind="melt" at="top" color="var(--cd-cream)" />
      <div className="cd-wrap">
        <SectionHead
          dot="var(--cd-pink)"
          eyebrow="try one on me"
          title="Watch a question fly."
          lead="A WPH11 classic — the same launch the machine above is running live. Four steps, no skipped lines, the way every worked example in the notes is written."
        />
        <div className="cd-taste-grid">
          <Reveal className="cd-qcardcell">
            <div className="cd-qcard">
              <span className="cd-qchip">WPH11 · the equations of motion</span>
              <p className="cd-qtext">
                A rocket of mass 5.0 × 10<sup>6</sup> kg lifts off with engine thrust
                7.3 × 10<sup>7</sup> N. Calculate the initial acceleration.
              </p>
              <span className="cd-qeq">
                ΣF = ma
              </span>
              <div className="cd-tsvg">
                <MiniLaunch />
              </div>
              <p className="cd-qfoot">the rig on the left, the curve on the right — one loop, every 8 seconds</p>
            </div>
          </Reveal>

          <div className="cd-steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className="cd-stepcell" delay={0.14 * i}>
                <div className="cd-step">
                  <span className="cd-stepn">{s.n}</span>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
            <Reveal
              className="cd-stepcell cd-anscell"
              delay={0.14 * STEPS.length}
              onIn={onAnswerIn}
            >
              <div className="cd-step cd-answrap" ref={ansRef}>
                <span className="cd-stepn">∴</span>
                <p>
                  <b>Three significant figures,</b> as the paper expects — four marks, gently
                  earned.
                  <span className="cd-answer">
                    a = 4.8 m s<sup>−2</sup>
                  </span>
                </p>
                <svg className="cd-ans-spark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2 L14 9.5 L22 12 L14 14.5 L12 22 L10 14.5 L2 12 L10 9.5 Z" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
