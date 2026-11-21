'use client';

import { UNITS } from '@/lib/spectra/units';
import { Reveal, SectionHead } from './bits';
import { useLive } from './lib';

/* ═══════════════════════════════════════════════════════════════════════
   the sticker shelf — the registry's units as tilted sticker cards,
   straightening themselves when you reach for them.

   Every fact on a card is the registry's own: code, topic range, paper
   duration and marks, candy colour, the first three real topic titles.
   Each carries its unit's motif — a small machine that means the unit —
   and opens straight into the unit's room in the workspace.
   ═══════════════════════════════════════════════════════════════════════ */

const INK = '#3D2B1F';
const INK70 = 'rgba(61, 43, 31, 0.7)';
const INK40 = 'rgba(61, 43, 31, 0.42)';
const MO="var(--font-plex), monospace";

function stageTag(code: string, stage: string) {
  return stage;
}

/* ————— the motifs ————— */

function MotifAtom({ candy }: { candy: string }) {
  return (
    <svg viewBox="0 0 220 74" aria-hidden="true">
      <circle cx="110" cy="37" r="34" fill="none" stroke={INK40} strokeWidth="1.8" />
      <circle cx="110" cy="37" r="20" fill="none" stroke={INK40} strokeWidth="1.8" />
      <circle cx="110" cy="37" r="10" fill={candy} opacity="0.25" />
      <circle cx="110" cy="37" r="4.8" fill={candy} stroke={INK} strokeWidth="1.6" />
      <g className="cd-loop cd-orbit" style={{ transformOrigin: '110px 37px' }}>
        <circle cx="144" cy="37" r="3.8" fill="#5BB4E8" stroke={INK} strokeWidth="1.4" />
      </g>
      <g className="cd-loop cd-orbit-rev" style={{ transformOrigin: '110px 37px' }}>
        <circle cx="130" cy="37" r="3" fill="#FFC64B" stroke={INK} strokeWidth="1.4" />
      </g>
    </svg>
  );
}

function MotifHess({ candy }: { candy: string }) {
  return (
    <svg viewBox="0 0 220 74" aria-hidden="true">
      <path d="M38 60 H182" className="cd-loop cd-flowdash" stroke={candy} strokeWidth="2.8" fill="none" />
      <path d="M38 60 L110 12" className="cd-loop cd-flowdash" stroke="#5BB4E8" strokeWidth="2.4" fill="none" />
      <path d="M110 12 L182 60" className="cd-loop cd-flowdash" stroke="#F06595" strokeWidth="2.4" fill="none" />
      <circle cx="38" cy="60" r="4.4" fill={INK70} />
      <circle cx="182" cy="60" r="4.4" fill={INK70} />
      <circle cx="110" cy="12" r="4.4" fill={INK70} />
      <text x="110" y="72" textAnchor="middle" fontSize="9" fontFamily={MO} fill={INK40}>
        ΔHr
      </text>
      <text x="52" y="34" fontSize="9" fontFamily={MO} fill={INK40}>
        ΔH1
      </text>
      <text x="152" y="34" fontSize="9" fontFamily={MO} fill={INK40}>
        ΔH2
      </text>
    </svg>
  );
}

function MotifBurette({ candy }: { candy: string }) {
  return (
    <svg viewBox="0 0 220 74" aria-hidden="true">
      <rect x="104" y="6" width="12" height="34" rx="2" fill="rgba(91, 180, 232, 0.2)" stroke={INK70} strokeWidth="2" />
      <line x1="105" y1="14" x2="115" y2="14" stroke="#5BB4E8" strokeWidth="2.6" />
      <path d="M116 12 h5 M116 22 h4 M116 32 h4" stroke={INK40} strokeWidth="1.7" />
      <path d="M107 40 L108.6 50 M113 40 L111.4 50 M108.6 50 H111.4" stroke={INK70} strokeWidth="2" fill="none" />
      <circle className="cd-loop cd-drip" style={{ transformBox: 'fill-box' }} cx="110" cy="53" r="2.8" fill="#5BB4E8" />
      <circle className="cd-loop cd-drip d2" style={{ transformBox: 'fill-box' }} cx="110" cy="53" r="2.1" fill="#5BB4E8" />
      <path d="M88 62 V71 Q88 77 94 77 H126 Q132 77 132 71 V62" fill="none" stroke={INK70} strokeWidth="2" />
      <line x1="90" y1="68" x2="130" y2="68" stroke={candy} strokeWidth="2.2" opacity="0.7" />
      <ellipse cx="110" cy="68" rx="11" ry="2.4" fill="none" stroke="#5BB4E8" strokeWidth="1.3" opacity="0.6" />
      <text x="126" y="14" fontSize="9" fontFamily={MO} fill={INK40}>
        25.00
      </text>
    </svg>
  );
}

function MotifBalance({ candy }: { candy: string }) {
  return (
    <svg viewBox="0 0 220 74" aria-hidden="true">
      <path d="M92 22 C 103 13, 117 13, 128 22" fill="none" stroke={INK70} strokeWidth="2.6" />
      <path d="M128 22 l-7.5 -1.2 4.2 6.4 z" fill={INK70} />
      <path d="M128 34 C 117 43, 103 43, 92 34" fill="none" stroke={INK70} strokeWidth="2.6" />
      <path d="M92 34 l7.5 1.2 -4.2 -6.4 z" fill={INK70} />
      <g className="cd-loop cd-balance" style={{ transformOrigin: '56px 56px' }}>
        <line x1="56" y1="56" x2="104" y2="56" stroke={candy} strokeWidth="4.4" strokeLinecap="round" />
        <path d="M104 56 l-8 -4.4 v8.8 z" fill={candy} />
      </g>
      <g className="cd-loop cd-balance" style={{ transformOrigin: '164px 56px', animationDelay: '-2.3s' }}>
        <line x1="164" y1="56" x2="116" y2="56" stroke="#5BB4E8" strokeWidth="4.4" strokeLinecap="round" />
        <path d="M116 56 l8 -4.4 v8.8 z" fill="#5BB4E8" />
      </g>
      <text x="40" y="60" fontSize="9" fontFamily={MO} fill={INK40}>
        f
      </text>
      <text x="170" y="60" fontSize="9" fontFamily={MO} fill={INK40}>
        b
      </text>
    </svg>
  );
}

function MotifBenzene({ candy }: { candy: string }) {
  const dots = Array.from({ length: 6 }, (_, i) => {
    const a = (i * Math.PI) / 3;
    return { x: 110 + 14 * Math.cos(a), y: 37 + 14 * Math.sin(a) };
  });
  return (
    <svg viewBox="0 0 220 74" aria-hidden="true">
      <path
        d="M110 11 L132.5 24 L132.5 50 L110 63 L87.5 50 L87.5 24 Z"
        fill="none"
        stroke={INK70}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="110" cy="37" r="14" fill="none" stroke={candy} strokeWidth="1.8" opacity="0.6" />
      <g className="cd-loop cd-benzring" style={{ transformOrigin: '110px 37px' }}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r="2.4" fill={candy} />
        ))}
      </g>
    </svg>
  );
}

function MotifReflux({ candy }: { candy: string }) {
  return (
    <svg viewBox="0 0 220 74" aria-hidden="true">
      <path d="M82 20 V36" stroke={INK70} strokeWidth="2.2" />
      <path d="M90 20 V36" stroke={INK70} strokeWidth="2.2" />
      <circle cx="86" cy="52" r="16" fill="none" stroke={INK70} strokeWidth="2.2" />
      <line x1="74" y1="56" x2="98" y2="56" stroke={candy} strokeWidth="2.6" opacity="0.7" />
      <circle className="cd-loop cd-rise" style={{ transformBox: 'fill-box' }} cx="80" cy="58" r="2.6" fill={candy} />
      <circle className="cd-loop cd-rise r2" style={{ transformBox: 'fill-box' }} cx="86" cy="60" r="2.2" fill={candy} />
      <circle className="cd-loop cd-rise r3" style={{ transformBox: 'fill-box' }} cx="92" cy="57" r="2" fill={candy} />
      <path d="M90 24 L158 10" className="cd-loop cd-flowdash" stroke="#5BB4E8" strokeWidth="2.4" fill="none" />
      <path d="M118 20 l4 -8 M126 18.4 l4 -8" stroke={INK40} strokeWidth="1.7" />
      <circle className="cd-loop cd-drip" style={{ transformBox: 'fill-box' }} cx="162" cy="14" r="2.4" fill="#5BB4E8" />
      <path d="M156 24 V35 Q156 39 160 39 H164 Q168 39 168 35 V24" fill="none" stroke={INK70} strokeWidth="1.8" />
    </svg>
  );
}

const MOTIFS = [MotifAtom, MotifHess, MotifBurette, MotifBalance, MotifBenzene, MotifReflux];
const TILTS = ['-1.4deg', '0.9deg', '-0.7deg', '1.2deg', '-0.9deg', '0.7deg'];

/* ————— the shelf ————— */

export function UnitsBand() {
  const liveRef = useLive<HTMLElement>();
  return (
    <section id="units" ref={liveRef} className="cd-sec">
      <div className="cd-wrap">
        <SectionHead
          dot="var(--cd-coral)"
          eyebrow="the sticker shelf"
          title={<>Six units, six flavours.</>}
          lead="The Pearson Edexcel IAL Physics units — WPH11 today, WPH12–WPH16 joining one at a time — as stickers on the fridge door. Every one wears its registry colour, carries its paper facts and its first three topics, and opens straight into its room in the workspace."
        />
        <div className="cd-tiles">
          {UNITS.slice(0, 6).map((u, i) => {
            const Motif = MOTIFS[i];
            const minutes = u.topics.reduce((n, t) => n + t.minutes, 0);
            const preview = u.topics.slice(0, 3);
            const extra = u.topics.length - preview.length;
            return (
              <Reveal key={u.code} className="cd-tilecell" delay={(i % 3) * 0.08}>
                <a
                  className="cd-tile"
                  href={`/club?v=${u.code.toLowerCase()}`}
                  style={{ ['--candy' as string]: u.candy.main, ['--tilt' as string]: TILTS[i] }}
                >
                  <div className="cd-tile-roof">
                    <span className="cd-tidx">{String(u.index).padStart(2, '0')}</span>
                    <span className="cd-code">{u.code}</span>
                    <span className="cd-stage-tag">{stageTag(u.code, u.stage)}</span>
                  </div>
                  <div className="cd-tile-body">
                    <h3>{u.shortTitle}</h3>
                    <span className="range">{u.topicRange}</span>
                    <div className="cd-motif" aria-hidden="true">
                      <Motif candy={u.candy.main} />
                    </div>
                    <ul className="cd-topics">
                      {preview.map((t) => (
                        <li key={t.id} className="cd-topi">
                          {t.title}
                        </li>
                      ))}
                      {extra > 0 && (
                        <li className="cd-topi" aria-label={`${extra} more topics`}>
                          + {extra} more
                        </li>
                      )}
                    </ul>
                    <div className="cd-tile-foot">
                      <span>
                        {u.paper.duration} · {u.paper.marks} marks
                      </span>
                      <span>
                        {u.topics.length} topics · {minutes} min
                      </span>
                      <span className="go" aria-hidden="true">
                        open →
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
