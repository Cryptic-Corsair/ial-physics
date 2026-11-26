"use client";

import type { ReactNode } from "react";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · physics figures, the mechanics and materials diagrams
   for the physics notes, in the candy-styled SVG language. Theme-
   aware inks ride the mood tokens; motion classes follow the §16
   toolkit: curves draw on once, nothing loops.
   ═══════════════════════════════════════════════════════════════ */

const INK = "var(--color-ink)";
const SOFT = "var(--color-ink-soft)";
const FAINT = "color-mix(in oklab, var(--color-ink) 30%, transparent)";

function Frame({
  w,
  h,
  xLabel,
  yLabel,
  label,
  children,
}: {
  w: number;
  h: number;
  xLabel?: string;
  yLabel?: string;
  label?: string;
  children: ReactNode;
}) {
  const pad = { l: 52, r: 16, t: 18, b: 38 };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label={label}>
      <title>{label}</title>
      <line x1={pad.l} y1={h - pad.b} x2={w - pad.r} y2={h - pad.b} stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <line x1={pad.l} y1={pad.t} x2={pad.l} y2={h - pad.b} stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      {xLabel && (
        <text x={(w + pad.l) / 2} y={h - 8} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">
          {xLabel}
        </text>
      )}
      {yLabel && (
        <text x={13} y={(h - pad.b + pad.t) / 2} textAnchor="middle" fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)" transform={`rotate(-90 13 ${(h - pad.b + pad.t) / 2})`}>
          {yLabel}
        </text>
      )}
      {children}
    </svg>
  );
}

function Arrow({ id = "" }: { id?: string }) {
  return (
    <defs>
      <marker id={id || "pharrow"} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={INK} />
      </marker>
    </defs>
  );
}

/* ————— 2 · the three motion graphs of one journey ————— */

export function FigPhMotionGraphs({ accent = "#339AF0" }: { accent?: string }) {
  const g = { w: 230, h: 190 };
  return (
    <svg viewBox="0 0 740 240" className="fig-live w-full" role="img" aria-label="Displacement-time, velocity-time and acceleration-time graphs for uniform acceleration from rest">
      <Arrow id="phmg-a" />
      {[0, 1, 2].map((i) => {
        const ox = 16 + i * 246;
        return (
          <g key={i}>
            <line x1={ox + 34} y1={196} x2={ox + 214} y2={196} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
            <line x1={ox + 34} y1={186} x2={ox + 34} y2={36} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
            <text x={ox + 124} y={222} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">time</text>
            <text x={ox + 8} y={116} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)" transform={`rotate(-90 ${ox + 8} 116)`}>
              {i === 0 ? "displacement" : i === 1 ? "velocity" : "acceleration"}
            </text>
          </g>
        );
      })}
      <path d="M 50 196 Q 130 196 214 44" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <text x={124} y={30} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">curve steepens, speeding up</text>
      <line x1={296} y1={196} x2={476} y2={62} stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <text x={386} y={46} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">constant gradient = a</text>
      <line x1={542} y1={130} x2={722} y2={130} stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <text x={632} y={116} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">constant a, flat line</text>
      {[1, 2].map((i) =>
        [60, 130].map((t) => (
          <line key={`${i}-${t}`} x1={16 + i * 246 + t} y1={190} x2={16 + i * 246 + t} y2={60} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 6" />
        )),
      )}
    </svg>
  );
}

/* ————— 7 · the projectile and its two components ————— */

export function FigPhProjectile({ accent = "#339AF0" }: { accent?: string }) {
  const path = "M 40 320 Q 240 20 480 320";
  return (
    <svg viewBox="0 0 560 380" className="fig-live w-full" role="img" aria-label="Projectile launched at 40 degrees: horizontal velocity constant, vertical velocity changing by g each second">
      <Arrow id="php-a" />
      <line x1={30} y1={340} x2={520} y2={340} stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <line x1={40} y1={348} x2={40} y2={20} stroke={FAINT} strokeWidth="1.8" strokeDasharray="4 7" />
      <path d={path} fill="none" stroke={accent} strokeWidth="3.6" strokeLinecap="round" className="fig-draw" pathLength={1} />
      {[
        { x: 85, y: 240, vx: 60, vy: -60 },
        { x: 165, y: 130, vx: 60, vy: -18 },
        { x: 262, y: 95, vx: 60, vy: 0 },
        { x: 360, y: 130, vx: 60, vy: 24 },
        { x: 442, y: 240, vx: 60, vy: 62 },
      ].map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="6" fill={INK} />
          <line x1={p.x} y1={p.y} x2={p.x + p.vx} y2={p.y} stroke={SOFT} strokeWidth="2.6" markerEnd="url(#php-a)" />
          <line x1={p.x} y1={p.y} x2={p.x} y2={p.y + p.vy} stroke={accent} strokeWidth="2.6" markerEnd="url(#php-a)" />
        </g>
      ))}
      <text x={320} y={58} textAnchor="middle" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">horizontal velocity never changes</text>
      <text x={110} y={70} fontSize="12" fontWeight="700" fill={accent} fontFamily="var(--font-body)">vertical velocity, −g every second</text>
      <text x={497} y={360} textAnchor="end" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">launch at 40°, u sin θ up, u cos θ along</text>
    </svg>
  );
}

/* ————— 5/6 · resolving and combining ————— */

export function FigPhVectors({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 760 300" className="fig-live w-full" role="img" aria-label="Resolving a force into components, and adding two forces nose-to-tail to find a resultant">
      <Arrow id="phv-a" />
      <line x1={70} y1={220} x2={290} y2={220} stroke={INK} strokeWidth="2.4" markerEnd="url(#phv-a)" />
      <line x1={70} y1={220} x2={70} y2={70} stroke={INK} strokeWidth="2.4" markerEnd="url(#phv-a)" />
      <line x1={70} y1={220} x2={244} y2={96} stroke={accent} strokeWidth="3.6" strokeLinecap="round" markerEnd="url(#phv-a)" />
      <line x1={244} y1={96} x2={244} y2={220} stroke={accent} strokeWidth="2.2" strokeDasharray="6 6" className="fig-flow" />
      <line x1={70} y1={220} x2={244} y2={220} stroke={accent} strokeWidth="2.2" strokeDasharray="6 6" />
      <text x={258} y={212} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">F cos 35°</text>
      <text x={82} y={150} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">F sin 35°</text>
      <text x={150} y={140} fontSize="13" fontWeight="800" fill={INK} fontFamily="var(--font-body)">F</text>
      <path d="M 106 220 A 36 36 0 0 0 100 194" fill="none" stroke={SOFT} strokeWidth="2" />
      <text x={114} y={202} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">35°</text>
      <text x={180} y={262} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">resolve, one vector, two components</text>
      <line x1={450} y1={210} x2={580} y2={210} stroke={INK} strokeWidth="3" markerEnd="url(#phv-a)" />
      <text x={492} y={200} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">X</text>
      <line x1={580} y1={210} x2={650} y2={100} stroke={INK} strokeWidth="3" markerEnd="url(#phv-a)" />
      <text x={618} y={170} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">Y</text>
      <line x1={450} y1={210} x2={650} y2={100} stroke={accent} strokeWidth="3.4" markerEnd="url(#phv-a)" className="fig-appear" />
      <text x={522} y={128} fontSize="12.5" fontWeight="800" fill={accent} fontFamily="var(--font-body)">resultant</text>
      <text x={560} y={262} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">combine, tip-to-tail, then close</text>
    </svg>
  );
}

/* ————— 8 · the free-body diagram on a slope ————— */

export function FigPhFreebody({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 560 330" className="w-full" role="img" aria-label="Free-body diagram of a block on a slope: weight from the centre of gravity, normal contact force perpendicular to the slope, friction along it">
      <Arrow id="phf-a" />
      <path d="M 40 290 L 460 130 L 460 290 Z" fill="color-mix(in oklab, var(--color-ink) 8%, transparent)" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
      <g transform="rotate(-20 250 210)">
        <rect x={200} y={175} width={100} height={70} rx={12} fill="color-mix(in oklab, var(--color-paper) 60%, transparent)" stroke={INK} strokeWidth="2.8" />
      </g>
      <circle cx={250} cy={210} r="5" fill={INK} />
      <line x1={250} y1={210} x2={250} y2={70} stroke={accent} strokeWidth="3.2" markerEnd="url(#phf-a)" />
      <text x={260} y={86} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">weight, W = mg, from the centre of gravity</text>
      <line x1={250} y1={210} x2={352} y2={172} stroke={INK} strokeWidth="3" markerEnd="url(#phf-a)" />
      <text x={330} y={160} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">normal contact force, ⊥ surface</text>
      <line x1={250} y1={210} x2={168} y2={240} stroke={INK} strokeWidth="3" markerEnd="url(#phf-a)" />
      <text x={70} y={266} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">friction, along surface</text>
      <path d="M 120 290 A 80 80 0 0 0 116 262" fill="none" stroke={SOFT} strokeWidth="2" />
      <text x={126} y={278} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">θ</text>
      <text x={410} y={318} textAnchor="end" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">component of W along slope = mg sin θ</text>
    </svg>
  );
}

/* ————— 9 · the terminal-velocity v–t curve ————— */

export function FigPhTerminal({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <Frame w={560} h={300} xLabel="time" yLabel="velocity">
      <Arrow />
      <path d="M 52 242 Q 140 60 320 52 L 520 52" fill="none" stroke={accent} strokeWidth="3.6" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <line x1={340} y1={242} x2={340} y2={52} stroke={FAINT} strokeWidth="1.8" strokeDasharray="5 7" />
      <text x={344} y={230} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">terminal velocity, gradient falls to 0, ΣF = 0</text>
      <line x1={52} y1={120} x2={92} y2={84} stroke={INK} strokeWidth="2.2" markerEnd="url(#pharrow)" />
      <text x={96} y={80} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">initial gradient ≈ g (drag ≈ 0)</text>
      <text x={180} y={160} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">gradient decays as drag increases,</text>
      <text x={180} y={178} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">velocity still increasing</text>
    </Frame>
  );
}

/* ————— 15/16 · moments on a beam ————— */

export function FigPhMoments({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 640 320" className="w-full" role="img" aria-label="A uniform beam pivoted at one end: the weight acts at the centre of gravity, a load pulls down along the beam, and moments are taken about the pivot">
      <Arrow id="phm-a" />
      <path d="M 110 240 L 130 210 L 138 218 L 118 248 Z M 96 242 L 116 212 L 124 220 L 104 250 Z" fill={INK} />
      <rect x={110} y={200} width={420} height={26} rx={6} fill="color-mix(in oklab, var(--color-paper) 55%, transparent)" stroke={INK} strokeWidth="2.8" />
      <circle cx={320} cy={213} r="5" fill={INK} />
      <line x1={320} y1={213} x2={320} y2={72} stroke={accent} strokeWidth="3.2" markerEnd="url(#phm-a)" />
      <text x={332} y={92} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">weight of beam, W = mg</text>
      <text x={332} y={110} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">at the centre of gravity, the midpoint</text>
      <line x1={500} y1={226} x2={500} y2={150} stroke={INK} strokeWidth="3" markerEnd="url(#phm-a)" />
      <text x={452} y={140} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">load, L</text>
      <line x1={320} y1={276} x2={320} y2={268} stroke={FAINT} strokeWidth="2" />
      <line x1={118} y1={272} x2={318} y2={272} stroke={FAINT} strokeWidth="1.8" strokeDasharray="4 6" />
      <line x1={322} y1={272} x2={498} y2={272} stroke={FAINT} strokeWidth="1.8" strokeDasharray="4 6" />
      <text x={200} y={294} textAnchor="middle" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">x/2</text>
      <text x={410} y={294} textAnchor="middle" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">d</text>
      <text x={120} y={294} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">pivot</text>
      <text x={520} y={306} textAnchor="end" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">equilibrium, W·(x/2) = L·d</text>
    </svg>
  );
}

/* ————— 29/32 · the force-extension graph ————— */

export function FigPhForceExtension({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <Frame w={560} h={310} xLabel="extension Δx" yLabel="force F" label="The loading curve of a wire, force against extension, with the straight section, the limit of proportionality, the elastic limit, the yield point and the plastic region that ends in breaking">
      <path d="M 52 242 L 280 128 Q 320 112 350 100 C 380 90 420 92 445 110 C 460 122 468 135 470 150" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <path d="M 52 242 L 280 128 L 52 242 Z" fill="color-mix(in oklab, var(--color-ink) 10%, transparent)" />
      <line x1={310} y1={112} x2={310} y2={242} stroke={FAINT} strokeWidth="1.8" strokeDasharray="5 7" />
      <circle cx={250} cy={143} r="5" fill={INK} />
      <text x={196} y={120} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">limit of proportionality</text>
      <circle cx={310} cy={112} r="5" fill={INK} />
      <text x={230} y={96} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">elastic limit</text>
      <circle cx={352} cy={100} r="5" fill={INK} />
      <text x={368} y={82} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">yield point</text>
      <text x={168} y={204} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">ΔEel = ½FΔx</text>
      <text x={168} y={222} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">area under the line</text>
      <text x={430} y={62} textAnchor="end" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">plastic region, then breaking</text>
    </Frame>
  );
}

/* ————— 30 · the stress-strain curve ————— */

export function FigPhStressStrain({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <Frame w={580} h={310} xLabel="strain ε" yLabel="stress σ" label="A tensile stress-strain graph, with the straight elastic section, the elastic limit E, the yield point Y and the plastic region that ends at the breaking stress">
      <path d="M 52 242 L 240 125 C 260 112 280 120 300 118 C 320 116 345 96 370 88 C 395 80 425 140 440 200" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <line x1={52} y1={242} x2={250} y2={124} stroke={FAINT} strokeWidth="1.8" strokeDasharray="5 7" />
      <text x={130} y={158} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">gradient = Young modulus</text>
      <circle cx={240} cy={125} r="5" fill={INK} />
      <text x={140} y={112} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">E is the elastic limit</text>
      <circle cx={270} cy={117} r="5" fill={INK} />
      <text x={276} y={100} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">Y is the yield point</text>
      <circle cx={380} cy={87} r="5" fill={INK} />
      <text x={250} y={70} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">UTS is the maximum stress</text>
      <circle cx={440} cy={200} r="5" fill={INK} />
      <text x={424} y={236} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">breaking stress ✕</text>
    </Frame>
  );
}

/* ————— 26 · the falling-ball viscometer ————— */

export function FigPhFallingBall({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 520 380" className="fig-live w-full" role="img" aria-label="The falling-ball viscometer: a wide tube of liquid with timing marks, a ball falling between them at terminal velocity">
      <Arrow id="phb-a" />
      <rect x={130} y={30} width={190} height={320} rx={14} fill="color-mix(in oklab, var(--color-ink) 7%, transparent)" stroke={INK} strokeWidth="3" />
      <rect x={136} y={36} width={178} height={308} rx={10} fill="color-mix(in oklab, var(--color-ink) 3%, transparent)" />
      <line x1={136} y1={120} x2={314} y2={120} stroke={accent} strokeWidth="3" />
      <line x1={136} y1={270} x2={314} y2={270} stroke={accent} strokeWidth="3" />
      <text x={330} y={124} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">mark A, start timing</text>
      <text x={330} y={140} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">(already at terminal velocity)</text>
      <text x={330} y={274} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">mark B, stop</text>
      <circle cx={225} cy={84} r="9" fill={INK} className="fig-drift" />
      <circle cx={225} cy={195} r="9" fill={INK} />
      <line x1={225} y1={195} x2={225} y2={146} stroke={SOFT} strokeWidth="2" strokeDasharray="4 6" className="fig-flow" />
      <text x={150} y={340} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">wide tube, laminar flow</text>
      <line x1={90} y1={120} x2={90} y2={270} stroke={INK} strokeWidth="2" markerEnd="url(#phb-a)" />
      <text x={78} y={200} textAnchor="middle" fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)" transform="rotate(-90 78 200)">measure d</text>
      <text x={225} y={370} textAnchor="middle" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">v = d ÷ t, then F = 6πηrv, then η = F/(6πrv)</text>
    </svg>
  );
}

/* ————— t01 · the curved slide where suvat fails ————— */

export function FigPhCurvedSlide({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 560 300" className="w-full" role="img" aria-label="A curved slide whose gradient changes along its length, so the acceleration is not constant">
      <Arrow id="phcs-a" />
      <path
        d="M 60 40 Q 140 60 210 140 T 470 246"
        fill="none"
        stroke={INK}
        strokeWidth="7"
        strokeLinecap="round"
        opacity={0.35}
      />
      <path
        d="M 60 40 Q 140 60 210 140 T 470 246"
        fill="none"
        stroke={INK}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx={110} cy={57} r="11" fill={accent} opacity={0.9} />
      <circle cx={210} cy={140} r="11" fill={accent} opacity={0.9} />
      <circle cx={410} cy={230} r="11" fill={accent} opacity={0.9} />
      <line x1={110} y1={57} x2={168} y2={71} stroke={accent} strokeWidth="3" markerEnd="url(#phcs-a)" />
      <line x1={210} y1={140} x2={276} y2={152} stroke={accent} strokeWidth="3" markerEnd="url(#phcs-a)" />
      <line x1={410} y1={230} x2={478} y2={238} stroke={accent} strokeWidth="3" markerEnd="url(#phcs-a)" />
      <text x={88} y={26} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">steep here, big acceleration</text>
      <text x={252} y={122} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">shallower, smaller acceleration</text>
      <text x={318} y={278} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">almost flat, acceleration nearly zero</text>
      <text x={36} y={205} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">the gradient never stays constant</text>
      <text x={36} y={223} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">so no single a works in s = ut + ½at²</text>
    </svg>
  );
}

/* ————— t01 · displacement-time journey, four phases ————— */

export function FigPhDtGraph({ accent = "#339AF0" }: { accent?: string }) {
  const X = (t: number) => 66 + 44 * t;
  const Y = (s: number) => 268 - 12 * s;
  return (
    <Frame w={740} h={330} xLabel="time / s" yLabel="displacement / m" label="A displacement-time journey in four phases: fast, slower, stopped, then back below the start line">
      <Arrow id="phdt-a" />
      {[2, 4, 6, 8, 10].map((t) => (
        <g key={t}>
          <line x1={X(t)} y1={268} x2={X(t)} y2={274} stroke={INK} strokeWidth="2" />
          <text x={X(t)} y={290} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">{t}</text>
        </g>
      ))}
      {[10, 15].map((s) => (
        <g key={s}>
          <line x1={60} y1={Y(s)} x2={66} y2={Y(s)} stroke={INK} strokeWidth="2" />
          <text x={54} y={Y(s) + 4} textAnchor="end" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">{s}</text>
        </g>
      ))}
      <line x1={66} y1={268} x2={606} y2={268} stroke={FAINT} strokeWidth="1.6" strokeDasharray="5 7" />
      <path
        d={`M ${X(0)} ${Y(0)} L ${X(2)} ${Y(8)} L ${X(5)} ${Y(14)} L ${X(7)} ${Y(14)} L ${X(9.5)} ${Y(-2)}`}
        fill="none"
        stroke={accent}
        strokeWidth="3.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="fig-draw"
        pathLength={1}
      />
      <circle cx={X(0)} cy={Y(0)} r="5" fill={INK} />
      <circle cx={X(2)} cy={Y(8)} r="5" fill={INK} />
      <circle cx={X(5)} cy={Y(14)} r="5" fill={INK} />
      <circle cx={X(7)} cy={Y(14)} r="5" fill={INK} />
      <circle cx={X(9.5)} cy={Y(-2)} r="5" fill={INK} />
      <text x={118} y={150} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">steep, fast</text>
      <text x={118} y={168} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">gradient = velocity</text>
      <text x={256} y={214} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">shallower, slower</text>
      <text x={430} y={88} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">flat, stopped</text>
      <text x={432} y={106} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">gradient = 0</text>
      <text x={420} y={316} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">below the start line, heading back the other way</text>
    </Frame>
  );
}

/* ————— t01 · velocity-time journey with both regions (2019-Jan Q11) ————— */

export function FigPhVtGraph({ accent = "#339AF0" }: { accent?: string }) {
  const X = (t: number) => 76 + 22 * t;
  const Y = (v: number) => 170 - 6.6 * v;
  return (
    <Frame w={640} h={430} xLabel="time / s" yLabel="velocity / m s⁻¹" label="A velocity-time journey with both regions: rising, falling through zero, and flat at negative velocity">
      <Arrow id="phvt-a" />
      {[5, 10, 15, 20].map((t) => (
        <g key={t}>
          <line x1={X(t)} y1={Y(0)} x2={X(t)} y2={Y(0) + 5} stroke={INK} strokeWidth="2" />
          <text x={X(t)} y={Y(0) + 20} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">{t}</text>
        </g>
      ))}
      {[20, 10, -10, -20, -30].map((v) => (
        <g key={v}>
          <line x1={70} y1={Y(v)} x2={76} y2={Y(v)} stroke={INK} strokeWidth="2" />
          <text x={64} y={Y(v) + 4} textAnchor="end" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">{v}</text>
        </g>
      ))}
      <path
        d={`M ${X(0)} ${Y(0)} L ${X(9)} ${Y(14)} L ${X(17.5)} ${Y(-30)} L ${X(20)} ${Y(-30)}`}
        fill="none"
        stroke={accent}
        strokeWidth="3.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        className="fig-draw"
        pathLength={1}
      />
      <circle cx={X(9)} cy={Y(14)} r="5" fill={INK} />
      <circle cx={X(12)} cy={Y(0)} r="5" fill={INK} />
      <circle cx={X(17.5)} cy={Y(-30)} r="5" fill={INK} />
      <text x={112} y={74} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">gradient = +1.6 m s⁻²</text>
      <text x={318} y={116} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">gradient = −5 m s⁻², steeper</text>
      <text x={404} y={152} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">crosses zero at 12 s</text>
      <text x={236} y={322} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">area below the axis, motion the other way</text>
      <text x={110} y={252} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">area above the axis, displacement forwards</text>
    </Frame>
  );
}

/* ————— t01 · acceleration-time graphs: the throw and the rocket ————— */

export function FigPhAtGraph({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 860 300" className="fig-live w-full" role="img" aria-label="Two acceleration-time graphs: a thrown ball with constant negative acceleration for the whole flight, and a burning rocket that steps from positive to negative acceleration">
      <Arrow id="phat-a" />
      {[0, 1].map((i) => {
        const ox = 24 + i * 430;
        return (
          <g key={i}>
            <line x1={ox + 44} y1={210} x2={ox + 250} y2={210} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
            <line x1={ox + 44} y1={200} x2={ox + 44} y2={54} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
            <text x={ox + 147} y={242} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">time</text>
            <text x={ox + 18} y={130} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)" transform={`rotate(-90 ${ox + 18} 130)`}>acceleration</text>
            <line x1={ox + 44} y1={132} x2={ox + 250} y2={132} stroke={FAINT} strokeWidth="1.6" strokeDasharray="5 7" />
          </g>
        );
      })}
      <line x1={68} y1={186} x2={274} y2={186} stroke={accent} strokeWidth="3.6" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <text x={68} y={76} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">one flat line below the axis,</text>
      <text x={68} y={94} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">g, downwards, the whole flight,</text>
      <text x={68} y={112} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">even at the top, where v = 0</text>
      <line x1={498} y1={100} x2={648} y2={100} stroke={accent} strokeWidth="3.6" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <line x1={648} y1={186} x2={738} y2={186} stroke={accent} strokeWidth="3.6" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <text x={498} y={76} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">thrust burns, a positive, constant</text>
      <text x={498} y={168} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">fuel out, a = −g</text>
      <text x={498} y={94} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">the step is where the forces change</text>
    </svg>
  );
}

/* ————— t01 · the numbered d–t → v–t conversion ————— */

export function FigPhGraphConversion({ accent = "#339AF0" }: { accent?: string }) {
  const X = (t: number, ox: number, k = 44) => ox + 44 + k * t;
  const Ys = (s: number) => 250 - 11 * s;
  const Yv = (v: number) => 246 - 15 * v;
  return (
    <svg viewBox="0 0 900 320" className="w-full" role="img" aria-label="A displacement-time journey converted into a velocity-time graph by computing the gradient of each phase">
      <Arrow id="phgc-a" />
      {[0, 1].map((i) => (
        <g key={i}>
          <line x1={X(0, 24 + i * 440)} y1={246} x2={X(8, 24 + i * 440)} y2={246} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
          <line x1={X(0, 24 + i * 440)} y1={238} x2={X(0, 24 + i * 440)} y2={56} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
          <text x={X(4, 24 + i * 440)} y={298} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">time / s</text>
          <text x={X(0, 24 + i * 440) - 22} y={150} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)" transform={`rotate(-90 ${X(0, 24 + i * 440) - 22} 150)`}>
            {i === 0 ? "displacement / m" : "velocity / m s⁻¹"}
          </text>
          {[2, 4, 6, 8].map((t) => (
            <text key={t} x={X(t, 24 + i * 440)} y={266} textAnchor="middle" fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">{t}</text>
          ))}
        </g>
      ))}
      <path
        d={`M ${X(0, 24)} ${Ys(0)} L ${X(2, 24)} ${Ys(6)} L ${X(4, 24)} ${Ys(18)} L ${X(6, 24)} ${Ys(18)} L ${X(8, 24)} ${Ys(10)}`}
        fill="none"
        stroke={accent}
        strokeWidth="3.4"
        strokeLinejoin="round"
        className="fig-draw"
        pathLength={1}
      />
      <text x={88} y={188} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">gradient = 6 ÷ 2 = 3</text>
      <text x={252} y={104} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">gradient = 12 ÷ 2 = 6</text>
      <text x={368} y={172} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">gradient = 0</text>
      <text x={430} y={222} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">gradient = −8 ÷ 2 = −4</text>
      <path
        d={`M ${X(0, 464)} ${Yv(3)} L ${X(2, 464)} ${Yv(3)} L ${X(2, 464)} ${Yv(6)} L ${X(4, 464)} ${Yv(6)} L ${X(4, 464)} ${Yv(0)} L ${X(6, 464)} ${Yv(0)} L ${X(6, 464)} ${Yv(-4)} L ${X(8, 464)} ${Yv(-4)}`}
        fill="none"
        stroke={accent}
        strokeWidth="3.4"
        strokeLinejoin="round"
        className="fig-draw"
        pathLength={1}
      />
      <text x={508} y={196} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">+3</text>
      <text x={600} y={150} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">+6</text>
      <text x={700} y={238} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">0</text>
      <text x={764} y={300} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">−4</text>
      <text x={442} y={44} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">each gradient lands on the next graph</text>
    </svg>
  );
}

/* ————— t01 · areas under curves by strips ————— */

export function FigPhAreaStrips({ accent = "#339AF0" }: { accent?: string }) {
  const curve = "M 70 250 Q 200 240 320 180 T 540 62";
  return (
    <Frame w={620} h={310} xLabel="time" yLabel="velocity" label="A velocity curve whose area is split into trapezium strips for counting">
      <path d={curve} fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      {[70, 170, 270, 370, 470].map((x, i) => (
        <g key={x}>
          <line x1={x} y1={250} x2={x} y2={252 - 190 + i * 44} stroke={FAINT} strokeWidth="1.8" />
        </g>
      ))}
      <line x1={540} y1={250} x2={540} y2={62} stroke={FAINT} strokeWidth="1.8" />
      {[68, 168, 268, 368, 468].map((x, i) => (
        <rect
          key={i}
          x={x + 2}
          y={250 - [26, 62, 102, 144, 178][i]}
          width={98}
          height={[26, 62, 102, 144, 178][i]}
          fill={accent}
          opacity={i % 2 ? 0.1 : 0.2}
        />
      ))}
      <text x={120} y={224} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">split the area into strips</text>
      <text x={120} y={242} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">each strip ≈ a trapezium</text>
      <text x={356} y={128} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">add the strips, then count</text>
      <text x={356} y={146} fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">the leftover squares</text>
      <text x={340} y={236} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">total area = displacement</text>
    </Frame>
  );
}

/* ————— t01 · resolving by drawing on a grid ————— */

export function FigPhResolveDraw({ accent = "#339AF0" }: { accent?: string }) {
  const gx = 300;
  const gy = 260;
  const u = 20;
  return (
    <svg viewBox="0 0 560 330" className="w-full" role="img" aria-label="A 10 kilometre walk resolved on a grid into 6 kilometres east and 8 kilometres north by drawing">
      <Arrow id="phrd-a" />
      {Array.from({ length: 11 }, (_, i) => (
        <line key={`v${i}`} x1={60 + i * u} y1={40} x2={60 + i * u} y2={gy + 20} stroke={FAINT} strokeWidth="1.2" />
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <line key={`h${i}`} x1={60} y1={40 + i * u} x2={60 + 10 * u} y2={40 + i * u} stroke={FAINT} strokeWidth="1.2" />
      ))}
      <line x1={60} y1={gy} x2={60 + 6 * u} y2={gy} stroke={INK} strokeWidth="2.6" markerEnd="url(#phrd-a)" />
      <line x1={60} y1={gy} x2={60} y2={gy - 8 * u} stroke={INK} strokeWidth="2.6" markerEnd="url(#phrd-a)" />
      <line x1={60} y1={gy} x2={60 + 6 * u} y2={gy - 8 * u} stroke={accent} strokeWidth="3.6" strokeLinecap="round" markerEnd="url(#phrd-a)" className="fig-draw" pathLength={1} />
      <text x={60 + 3 * u} y={gy + 22} textAnchor="middle" fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">6 km east</text>
      <text x={34} y={gy - 4 * u} textAnchor="middle" fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)" transform={`rotate(-90 34 ${gy - 4 * u})`}>8 km north</text>
      <text x={188} y={gy - 170} fontSize="12.5" fontWeight="800" fill={accent} fontFamily="var(--font-body)">10 km</text>
      <path d={`M 100 ${gy} A 40 40 0 0 0 90 ${gy - 22}`} fill="none" stroke={SOFT} strokeWidth="2" />
      <text x={106} y={gy - 26} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">53°</text>
      <text x={330} y={110} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">scale, 1 cm = 1 km</text>
      <text x={330} y={132} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">draw east 6 cm, north 8 cm,</text>
      <text x={330} y={150} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">then close the triangle</text>
      <text x={330} y={176} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">measure, 10 cm → 10 km</text>
      <text x={330} y={202} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">protractor, 53° from east</text>
      <text x={330} y={252} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">check, √(6² + 8²) = 10 ✓</text>
    </svg>
  );
}

/* ————— t01 · the completed scaled vector triangle (2025-Oct Q12) ————— */

export function FigPhVectorTriangle({ accent = "#339AF0" }: { accent?: string }) {
  const ox = 200;
  const oy = 292;
  const k = 0.28; // px per newton
  const windTip = { x: ox, y: oy - 350 * k }; // wind: 350 N to the north
  const waterTip = {
    x: windTip.x + 410 * k * Math.sin((120 * Math.PI) / 180),
    y: windTip.y - 410 * k * Math.cos((120 * Math.PI) / 180),
  };
  return (
    <svg viewBox="0 0 560 340" className="w-full" role="img" aria-label="The scaled vector triangle for the sailing boat: 350 newtons north, 410 newtons at 120 degrees from north, resultant 380 newtons at 68 degrees from north">
      <Arrow id="phrvt-a" />
      <line x1={ox} y1={oy} x2={ox} y2={34} stroke={FAINT} strokeWidth="1.8" strokeDasharray="5 7" />
      <text x={ox + 10} y={46} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">N</text>
      <line x1={ox} y1={oy} x2={windTip.x} y2={windTip.y} stroke={INK} strokeWidth="3.2" markerEnd="url(#phrvt-a)" />
      <line x1={windTip.x} y1={windTip.y} x2={waterTip.x} y2={waterTip.y} stroke={INK} strokeWidth="3.2" markerEnd="url(#phrvt-a)" />
      <line x1={ox} y1={oy} x2={waterTip.x} y2={waterTip.y} stroke={accent} strokeWidth="4" strokeLinecap="round" markerEnd="url(#phrvt-a)" className="fig-draw" pathLength={1} />
      <text x={ox - 12} y={oy - 350 * k / 2} textAnchor="end" fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">wind, 350 N</text>
      <text x={waterTip.x + 14} y={waterTip.y + 26} fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">water, 410 N</text>
      <text x={352} y={218} fontSize="12.5" fontWeight="800" fill={accent} fontFamily="var(--font-body)">resultant, 380 N at 68°</text>
      <path d={`M ${ox} ${oy - 26} A 26 26 0 0 1 ${ox + 24.1} ${oy - 9.7}`} fill="none" stroke={SOFT} strokeWidth="2" />
      <text x={ox + 30} y={oy - 32} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">68°</text>
      <text x={362} y={120} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">tip-to-tail at the true angle</text>
      <text x={362} y={138} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">of 120°, then close, tail of</text>
      <text x={362} y={156} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">first → tip of last. Label the</text>
      <text x={362} y={174} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">arrows with forces, never cm.</text>
    </svg>
  );
}

/* ————— t01 · the projectile journey, launch to apex to landing ————— */

export function FigPhProjectileJourney({ accent = "#339AF0" }: { accent?: string }) {
  const path = "M 60 300 Q 280 30 500 300";
  return (
    <svg viewBox="0 0 560 360" className="fig-live w-full" role="img" aria-label="A projectile's journey annotated at launch, the top and landing, showing the constant horizontal velocity and the shared time">
      <Arrow id="phpj-a" />
      <line x1={40} y1={320} x2={520} y2={320} stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <path d={path} fill="none" stroke={accent} strokeWidth="3.6" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <circle cx={60} cy={300} r="7" fill={INK} />
      <circle cx={280} cy={165} r="7" fill={INK} />
      <circle cx={500} cy={300} r="7" fill={INK} />
      <line x1={60} y1={300} x2={150} y2={300} stroke={SOFT} strokeWidth="2.6" markerEnd="url(#phpj-a)" />
      <line x1={60} y1={300} x2={60} y2={210} stroke={accent} strokeWidth="2.6" markerEnd="url(#phpj-a)" />
      <text x={66} y={196} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">launch, u cos θ along, u sin θ up</text>
      <line x1={280} y1={165} x2={370} y2={165} stroke={SOFT} strokeWidth="2.6" markerEnd="url(#phpj-a)" />
      <text x={280} y={140} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">at the top v = 0, but a is still g</text>
      <line x1={500} y1={300} x2={410} y2={300} stroke={SOFT} strokeWidth="2.6" markerEnd="url(#phpj-a)" />
      <line x1={500} y1={300} x2={500} y2={210} stroke={accent} strokeWidth="2.6" markerEnd="url(#phpj-a)" />
      <text x={312} y={196} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">landing, u cos θ along, u sin θ down</text>
      <text x={150} y={110} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">same height → vertical v returns with the same size, reversed</text>
      <text x={72} y={344} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">one clock runs both columns, t is shared</text>
    </svg>
  );
}

/* ————— t01 · the three ways a projectile is launched ————— */

export function FigPhLaunchTypes({ accent = "#339AF0" }: { accent?: string }) {
  const Panel = ({ ox, title, lines }: { ox: number; title: string; lines: string[] }) => (
    <g>
      <line x1={ox + 30} y1={252} x2={ox + 210} y2={252} stroke={INK} strokeWidth="2.4" strokeLinecap="round" />
      <text x={ox + 120} y={284} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">{title}</text>
      {lines.map((l, i) => (
        <text key={i} x={ox + 120} y={302 + i * 16} textAnchor="middle" fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">{l}</text>
      ))}
    </g>
  );
  return (
    <svg viewBox="0 0 760 340" className="w-full" role="img" aria-label="Three launch types: thrown straight up, launched horizontally off a cliff, and launched at an angle">
      <Arrow id="phlt-a" />
      <line x1={110} y1={252} x2={110} y2={70} stroke={accent} strokeWidth="3.4" strokeLinecap="round" markerEnd="url(#phlt-a)" />
      <circle cx={110} cy={160} r="6" fill={INK} />
      <text x={122} y={156} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">no horizontal motion at all</text>
      <Panel ox={0} title="Thrown straight up" lines={"one column: vertical only|a = −g the whole flight".split("|")} />
      <path d="M 400 90 Q 452 90 504 252" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <line x1={352} y1={90} x2={400} y2={90} stroke={INK} strokeWidth="2.6" />
      <line x1={352} y1={252} x2={400} y2={252} stroke={INK} strokeWidth="2.6" />
      <text x={330} y={74} textAnchor="end" fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">cliff</text>
      <line x1={400} y1={90} x2={456} y2={90} stroke={SOFT} strokeWidth="2.4" markerEnd="url(#phlt-a)" />
      <circle cx={400} cy={90} r="6" fill={INK} />
      <Panel ox={260} title="Launched horizontally" lines={"vertical column starts at u = 0|horizontal column does the range work".split("|")} />
      <path d="M 645 252 Q 700 60 745 90" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <circle cx={645} cy={252} r="6" fill={INK} />
      <line x1={645} y1={252} x2={715} y2={252} stroke={SOFT} strokeWidth="2.4" markerEnd="url(#phlt-a)" />
      <line x1={645} y1={252} x2={645} y2={172} stroke={INK} strokeWidth="2.4" markerEnd="url(#phlt-a)" />
      <text x={758} y={246} textAnchor="end" fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">u cos θ</text>
      <text x={634} y={176} textAnchor="end" fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">u sin θ</text>
      <Panel ox={520} title="Launched at an angle" lines={"resolve u first, then both columns|same t joins them".split("|")} />
    </svg>
  );
}

/* ————— t01 · the free-body gallery ————— */

export function FigPhFbdGallery({ accent = "#339AF0" }: { accent?: string }) {
  const dot = (cx: number, cy: number) => <circle cx={cx} cy={cy} r="5" fill={INK} />;
  const a = (x1: number, y1: number, x2: number, y2: number) => (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="2.6" markerEnd="url(#phfg-a)" />
  );
  const panels = [
    { cx: 110, cap: "accelerating car", sub: "N and W equal, F half of them" },
    { cx: 330, cap: "hung painting", sub: "two tensions share the weight" },
    { cx: 550, cap: "sphere at terminal velocity", sub: "U + D = W, lengths show it" },
    { cx: 770, cap: "ball released in liquid", sub: "U > W + D, it accelerates up" },
  ];
  return (
    <svg viewBox="0 0 880 320" className="w-full" role="img" aria-label="Free-body diagrams of four bodies: an accelerating car, a painting hung from two wires, a sphere falling through liquid at terminal velocity, and a rising ball in liquid">
      <Arrow id="phfg-a" />
      {/* car: N up = W down (15000 N each), F forward 7500 N */}
      {dot(110, 120)}
      {a(110, 120, 110, 58)}
      {a(110, 120, 110, 182)}
      {a(110, 120, 192, 120)}
      <text x={120} y={62} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">N = 15 000 N</text>
      <text x={120} y={192} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">W = 15 000 N</text>
      <text x={200} y={124} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">F = 7500 N</text>
      {/* painting: T, T, W */}
      {dot(330, 120)}
      {a(330, 120, 278, 74)}
      {a(330, 120, 382, 74)}
      {a(330, 120, 330, 182)}
      <text x={258} y={66} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">T</text>
      <text x={390} y={66} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">T</text>
      <text x={340} y={192} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">W</text>
      {/* sphere terminal: U up, D down (small), W down */}
      {dot(550, 120)}
      {a(550, 120, 550, 62)}
      {a(550, 120, 550, 178)}
      {a(550, 120, 550, 148)}
      <text x={560} y={66} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">upthrust, U</text>
      <text x={560} y={148} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">drag, D</text>
      <text x={560} y={190} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">W</text>
      {/* rising ball: U biggest, D down, W down */}
      {dot(770, 120)}
      {a(770, 120, 770, 48)}
      {a(770, 120, 770, 178)}
      {a(770, 120, 770, 150)}
      <text x={780} y={58} fontSize="11.5" fontWeight="800" fill={accent} fontFamily="var(--font-body)">U, the big one</text>
      <text x={780} y={150} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">D</text>
      <text x={780} y={190} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">W</text>
      <line x1={660} y1={40} x2={660} y2={200} stroke={FAINT} strokeWidth="1.6" />
      {panels.map((p) => (
        <g key={p.cap}>
          <text x={p.cx} y={272} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">{p.cap}</text>
          <text x={p.cx} y={292} textAnchor="middle" fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">{p.sub}</text>
        </g>
      ))}
    </svg>
  );
}

/* ————— t01 · Core Practical 1: the three setups ————— */

export function FigPhCp1Setups({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 900 340" className="w-full" role="img" aria-label="Three free-fall apparatus setups: strobe photography beside a metre rule, light gates connected to a data logger, and a stopwatch timing a drop over a known height">
      <Arrow id="phcp-a" />
      {[0, 1, 2].map((i) => {
        const ox = 30 + i * 296;
        return (
          <g key={i}>
            <line x1={ox + 20} y1={296} x2={ox + 250} y2={296} stroke={INK} strokeWidth="2.2" strokeLinecap="round" />
            <text x={ox + 135} y={322} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">
              {i === 0 ? "strobe photograph" : i === 1 ? "light gates" : "stopwatch and rule"}
            </text>
          </g>
        );
      })}
      {/* strobe */}
      <rect x={92} y={44} width={10} height={252} fill="none" stroke={INK} strokeWidth="2.4" />
      {[0, 1, 2, 3, 4].map((i) => (
        <circle key={i} cx={134} cy={58 + i * i * 12 + i * 14} r="7" fill={accent} opacity={0.85} />
      ))}
      {[70, 100, 148].map((y, i) => (
        <line key={y} x1={84} y1={y} x2={100} y2={y} stroke={INK} strokeWidth="2" />
      ))}
      <text x={152} y={80} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">metre rule</text>
      <text x={152} y={104} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">flashes at a fixed</text>
      <text x={152} y={120} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">interval → s for each t</text>
      <text x={152} y={144} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">gap increases, s ∝ t²</text>
      {/* light gates */}
      <rect x={388} y={44} width={64} height={252} rx={12} fill="color-mix(in oklab, var(--color-ink) 6%, transparent)" stroke={INK} strokeWidth="2.4" />
      <rect x={370} y={80} width={100} height={12} rx={4} fill={accent} opacity={0.8} stroke={INK} strokeWidth="2" />
      <rect x={370} y={230} width={100} height={12} rx={4} fill={accent} opacity={0.8} stroke={INK} strokeWidth="2" />
      <circle cx={420} cy={110} r="9" fill={INK} className="fig-drift" />
      <circle cx={420} cy={190} r="9" fill={INK} />
      <text x={478} y={90} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">gate 1</text>
      <text x={478} y={240} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">gate 2</text>
      <text x={482} y={130} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">logger times</text>
      <text x={482} y={146} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">each pass,</text>
      <text x={482} y={162} fontSize="11" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">v = length ÷ t</text>
      <line x1={388} y1={60} x2={370} y2={60} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 5" />
      <line x1={452} y1={60} x2={470} y2={60} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 5" />
      {/* stopwatch */}
      <rect x={680} y={44} width={10} height={252} fill="none" stroke={INK} strokeWidth="2.4" />
      <circle cx={712} cy={70} r="9" fill={accent} opacity={0.85} />
      <circle cx={712} cy={280} r="9" fill={INK} />
      <line x1={712} y1={70} x2={712} y2={280} stroke={FAINT} strokeWidth="1.8" strokeDasharray="5 6" />
      <circle cx={800} cy={80} r="26" fill="none" stroke={INK} strokeWidth="2.4" />
      <line x1={800} y1={80} x2={800} y2={62} stroke={INK} strokeWidth="2.2" />
      <text x={734} y={130} fontSize="10.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">release at height s,</text>
      <text x={734} y={146} fontSize="10.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">time the fall → g = 2s ÷ t²</text>
      <text x={734} y={170} fontSize="10.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">reaction time is the error</text>
    </svg>
  );
}

/* ————— 31 · the Young modulus rig ————— */

export function FigPhYoungRig({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 640 360" className="w-full" role="img" aria-label="The Young modulus rig: a long test wire and a reference wire hang from a ceiling clamp, joined by a vernier scale; masses load the test wire; a micrometer measures the diameter">
      <Arrow id="phy-a" />
      <rect x={60} y={26} width={380} height={16} rx={6} fill={INK} />
      <line x1={160} y1={42} x2={160} y2={250} stroke={FAINT} strokeWidth="2.4" strokeDasharray="6 7" />
      <line x1={300} y1={42} x2={300} y2={150} stroke={INK} strokeWidth="2.6" />
      <text x={312} y={70} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">reference wire</text>
      <text x={110} y={70} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">test wire</text>
      <rect x={230} y={150} width={40} height={26} rx={6} fill={accent} opacity={0.85} stroke={INK} strokeWidth="2.4" />
      <text x={250} y={196} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">vernier scale</text>
      <line x1={300} y1={150} x2={300} y2={196} stroke={INK} strokeWidth="1.6" />
      <rect x={270} y={236} width={60} height={34} rx={8} fill="color-mix(in oklab, var(--color-ink) 12%, transparent)" stroke={INK} strokeWidth="2.6" />
      <circle cx={284} cy={246} r="9" fill={INK} />
      <circle cx={306} cy={252} r="9" fill={INK} />
      <line x1={160} y1={42} x2={230} y2={150} stroke={INK} strokeWidth="2.6" />
      <line x1={300} y1={164} x2={160} y2={278} stroke={FAINT} strokeWidth="2" />
      <text x={120} y={300} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">mass hanger, F = mg, added in steps</text>
      <text x={160} y={220} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">original length x, clamp to marker</text>
      <g transform="translate(470 120)">
        <text x={0} y={-6} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">micrometer measures</text>
        <text x={0} y={12} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">the diameter at several</text>
        <text x={0} y={30} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">positions and orientations</text>
        <line x1={-14} y1={44} x2={44} y2={44} stroke={INK} strokeWidth="2.4" />
        <line x1={-14} y1={54} x2={44} y2={54} stroke={INK} strokeWidth="2.4" />
        <line x1={-6} y1={44} x2={-6} y2={54} stroke={INK} strokeWidth="2.4" />
        <line x1={36} y1={44} x2={36} y2={54} stroke={INK} strokeWidth="2.4" />
      </g>
      <text x={320} y={344} textAnchor="middle" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">plot force against extension, E = gradient × (x ÷ A)</text>
    </svg>
  );
}

/* ————— t05 · springs in series and in parallel ————— */

function coil(x: number, y1: number, y2: number, n = 6, w = 16): string {
  const lead = 6;
  const span = y2 - y1 - 2 * lead;
  const u = span / (n * 2);
  let d = `M ${x} ${y1} l 0 ${lead}`;
  for (let i = 0; i < n; i++) {
    d += ` l ${w} ${u} l ${-2 * w} ${2 * u} l ${w} ${u}`;
  }
  d += ` l 0 ${lead}`;
  return d;
}

export function FigPhSpringsCombo({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 940 360" className="w-full" role="img" aria-label="Two identical springs in series, where the same force passes through both and the extensions add, and two identical springs in parallel, where the two springs share the load">
      <Arrow id="phsc-a" />
      {/* series panel */}
      <text x={150} y={24} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">springs in series</text>
      <rect x={30} y={32} width={220} height={10} rx={4} fill={INK} />
      <path d={coil(140, 42, 138, 6)} fill="none" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <rect x={112} y={138} width={56} height={13} rx={5} fill="color-mix(in oklab, var(--color-ink) 14%, transparent)" stroke={INK} strokeWidth="2" />
      <path d={coil(140, 151, 247, 6)} fill="none" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <rect x={112} y={247} width={56} height={13} rx={5} fill="color-mix(in oklab, var(--color-ink) 14%, transparent)" stroke={INK} strokeWidth="2" />
      <line x1={140} y1={260} x2={140} y2={310} stroke={accent} strokeWidth="3" markerEnd="url(#phsc-a)" />
      <text x={155} y={296} fontSize="12.5" fontWeight="800" fill={accent} fontFamily="var(--font-body)">force F</text>
      {[
        ["the same force F passes", 78, SOFT],
        ["through both springs", 96, SOFT],
        ["each spring extends by x", 122, INK],
        ["the total extension is 2x", 148, INK],
        ["combined stiffness, k ÷ 2", 174, INK],
      ].map(([t, y, fill]) => (
        <text key={t as string} x={270} y={y as number} fontSize="11.5" fontWeight="700" fill={fill as string} fontFamily="var(--font-body)">{t}</text>
      ))}
      {/* parallel panel */}
      <text x={640} y={24} textAnchor="middle" fontSize="12.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">springs in parallel</text>
      <rect x={530} y={32} width={220} height={10} rx={4} fill={INK} />
      <path d={coil(600, 42, 158, 5, 14)} fill="none" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <path d={coil(680, 42, 158, 5, 14)} fill="none" stroke={INK} strokeWidth="2.4" strokeLinejoin="round" />
      <rect x={586} y={158} width={108} height={13} rx={5} fill="color-mix(in oklab, var(--color-ink) 14%, transparent)" stroke={INK} strokeWidth="2" />
      <line x1={640} y1={171} x2={640} y2={221} stroke={accent} strokeWidth="3" markerEnd="url(#phsc-a)" />
      <text x={662} y={207} fontSize="12.5" fontWeight="800" fill={accent} fontFamily="var(--font-body)">force F</text>
      {[
        ["the two springs share", 78, SOFT],
        ["the load between them", 96, SOFT],
        ["each spring carries F ÷ 2", 122, INK],
        ["and extends by x ÷ 2", 140, INK],
        ["combined stiffness, 2k", 174, INK],
      ].map(([t, y, fill]) => (
        <text key={t as string} x={770} y={y as number} fontSize="11.5" fontWeight="700" fill={fill as string} fontFamily="var(--font-body)">{t}</text>
      ))}
      <text x={470} y={348} textAnchor="middle" fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">in series the extensions add, in parallel the load is shared</text>
    </svg>
  );
}

/* ————— t05 · loading and unloading past the elastic limit ————— */

export function FigPhUnloadingSet({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <Frame w={560} h={330} xLabel="extension Δx" yLabel="force F" label="A spring loaded past its elastic limit and then unloaded. The unloading line has a smaller gradient because the spring constant has changed, and it stops on the extension axis at the permanent set">
      <path d="M 52 282 L 200 158 Q 250 142 300 132" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <circle cx={200} cy={158} r="5" fill={INK} />
      <text x={96} y={138} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">elastic limit</text>
      <path d="M 300 132 L 531 282" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeDasharray="7 6" />
      <text x={360} y={196} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">unloading line, smaller gradient</text>
      <text x={360} y={214} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">the spring constant has changed</text>
      <circle cx={531} cy={282} r="5" fill={INK} />
      <line x1={531} y1={282} x2={531} y2={300} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 6" />
      <text x={477} y={318} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">permanent set</text>
      <text x={90} y={60} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">the spring does not return</text>
      <text x={90} y={78} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">to its original length</text>
    </Frame>
  );
}

/* ————— t05 · the rubber band hysteresis loop ————— */

export function FigPhHysteresisLoop({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <Frame w={560} h={330} xLabel="extension Δx" yLabel="force F" label="A rubber band loaded and unloaded. The loading curve sits above the unloading curve and both return to zero extension. The area between the two curves is the energy that heats the band">
      <path d="M 52 282 Q 120 120 220 92 Q 330 62 470 58" fill="none" stroke={accent} strokeWidth="3.2" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <path d="M 470 58 Q 400 160 300 196 Q 180 240 52 282" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeDasharray="8 6" />
      <path d="M 52 282 Q 120 120 220 92 Q 330 62 470 58 Q 400 160 300 196 Q 180 240 52 282 Z" fill="color-mix(in oklab, var(--color-ink) 9%, transparent)" />
      <text x={150} y={70} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">loading curve</text>
      <text x={330} y={232} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">unloading curve</text>
      <text x={330} y={250} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">back to zero extension</text>
      <text x={100} y={180} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">the area between the curves</text>
      <text x={100} y={198} fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">is the energy that heats the band</text>
    </Frame>
  );
}

/* ————— t05 · the energy strip between two forces ————— */

export function FigPhEnergyStrip({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <Frame w={560} h={330} xLabel="extension Δx" yLabel="force F" label="A straight force-extension line through the origin. The change in stored energy between two forces is the trapezium strip between them, with area half the sum of the two forces times the extra extension">
      <path d="M 52 282 L 430 82" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <line x1={52} y1={200} x2={207} y2={200} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 6" />
      <line x1={52} y1={120} x2={358} y2={120} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 6" />
      <line x1={207} y1={200} x2={207} y2={282} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 6" />
      <line x1={358} y1={120} x2={358} y2={282} stroke={FAINT} strokeWidth="1.6" strokeDasharray="4 6" />
      <path d="M 207 200 L 358 120 L 358 282 L 207 282 Z" fill="color-mix(in oklab, var(--color-ink) 12%, transparent)" />
      <text x={30} y={204} textAnchor="end" fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">F₁</text>
      <text x={30} y={124} textAnchor="end" fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">F₂</text>
      <text x={207} y={300} textAnchor="middle" fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">x₁</text>
      <text x={358} y={300} textAnchor="middle" fontSize="11.5" fontWeight="800" fill={INK} fontFamily="var(--font-body)">x₂</text>
      <text x={250} y={250} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">the strip is the change in stored energy</text>
      <text x={250} y={268} fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">area = ½(F₁ + F₂)(x₂ − x₁)</text>
      <text x={64} y={56} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">the spring already carries F₁</text>
      <text x={64} y={74} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">F₂ is added on top of F₁</text>
    </Frame>
  );
}

/* ————— t05 · two materials on one stress-strain graph ————— */

export function FigPhTwoMaterials({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <Frame w={560} h={330} xLabel="strain ε" yLabel="stress σ" label="Two stress-strain lines from the origin. Line P has the steeper straight section and breaks at a higher stress. Line Q is shallower and breaks at a larger strain">
      <path d="M 52 282 L 280 62" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <path d="M 52 282 L 470 170" fill="none" stroke={INK} strokeWidth="2.6" strokeLinecap="round" opacity={0.75} />
      <path d="M 272 54 L 288 78 M 288 54 L 272 78" stroke={INK} strokeWidth="2.2" fill="none" />
      <path d="M 462 162 L 478 178 M 478 162 L 462 178" stroke={INK} strokeWidth="2.2" fill="none" />
      <text x={64} y={40} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">the Young modulus is the gradient</text>
      <text x={64} y={58} fontSize="11.5" fontWeight="700" fill={INK} fontFamily="var(--font-body)">of the straight section</text>
      <text x={150} y={150} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">P, the steeper line</text>
      <text x={150} y={168} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">larger Young modulus</text>
      <text x={170} y={86} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">P breaks at a higher stress</text>
      <text x={300} y={230} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">Q, the shallower line</text>
      <text x={300} y={248} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">smaller Young modulus</text>
      <text x={384} y={146} fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">Q breaks at a larger strain</text>
    </Frame>
  );
}

/* ————— t05 · concrete, compression against tension ————— */

export function FigPhConcreteSides({ accent = "#339AF0" }: { accent?: string }) {
  return (
    <svg viewBox="0 0 640 350" className="w-full" role="img" aria-label="A two-sided stress-strain graph for concrete. The compression side reaches about 40 MPa before fracture, the tension side only about 10 MPa">
      <line x1={320} y1={44} x2={320} y2={282} stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <line x1={40} y1={282} x2={600} y2={282} stroke={INK} strokeWidth="2.6" strokeLinecap="round" />
      <text x={320} y={40} textAnchor="middle" fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">stress σ</text>
      <text x={320} y={312} textAnchor="middle" fontSize="12" fontWeight="700" fill={INK} fontFamily="var(--font-body)">strain ε</text>
      <path d="M 320 282 Q 480 270 556 78" fill="none" stroke={accent} strokeWidth="3.4" strokeLinecap="round" className="fig-draw" pathLength={1} />
      <path d="M 320 282 Q 220 276 148 238" fill="none" stroke={INK} strokeWidth="2.8" strokeLinecap="round" opacity={0.8} />
      <path d="M 556 78 m -8 -6 l 16 12 m 0 -12 l -16 12" stroke={INK} strokeWidth="2.2" fill="none" />
      <path d="M 148 238 m -8 -6 l 16 12 m 0 -12 l -16 12" stroke={INK} strokeWidth="2.2" fill="none" />
      <text x={600} y={62} textAnchor="end" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">fracture at about 40 MPa</text>
      <text x={600} y={80} textAnchor="end" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">(compression)</text>
      <text x={152} y={210} textAnchor="end" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">fracture at about 10 MPa</text>
      <text x={152} y={228} textAnchor="end" fontSize="11.5" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">(tension)</text>
      <text x={460} y={250} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">compression</text>
      <text x={180} y={268} fontSize="12" fontWeight="700" fill={SOFT} fontFamily="var(--font-body)">tension</text>
      <text x={320} y={340} textAnchor="middle" fontSize="12" fontWeight="800" fill={INK} fontFamily="var(--font-body)">concrete is much stronger under compression</text>
    </svg>
  );
}
