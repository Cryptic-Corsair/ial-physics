'use client';

import { useCanvasScene, monoFont } from './lib';
import { Meniscus, Reveal, SectionHead } from './bits';

/* ═══════════════════════════════════════════════════════════════════════
   the lumen machines — four canvas scenes, all running on the gated
   runner in lib.ts (IntersectionObserver + 30 fps accumulator + 1.5
   DPR cap + one static frame for reduced motion).

   · HeroField      — the drift: drifting motes, bubbles rising, sparks
                      turning over (abstract ambience, aria-hidden)
   · SceneTerminal  — the velocity–time curve of a falling ball drawn
                      from computed points: steep where only weight
                      acts, flattening as drag grows, flat at terminal
                      velocity (statements 2 & 25)
   · SceneProjectile — the two independent columns: a computed parabola
                      with equal-time ticks, constant spacing across,
                      growing spacing down (statement 6)
   · SceneStokes    — the falling-ball rig as a force race: weight
                      against upthrust + drag, the ball settling to
                      equal spacing when W = U + D (statements 25 & 26)
   ═══════════════════════════════════════════════════════════════════════ */

const GLOW = 'rgba(242,238,250,';

function line(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function rrect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

/** a mono chip, right- or left-anchored — the instrument readout voice */
function chip(
  ctx: CanvasRenderingContext2D,
  anchorX: number,
  y: number,
  text: string,
  color: string,
  align: 'left' | 'right' = 'right',
) {
  chipRich(ctx, anchorX, y, [text], color, align);
}

/** rich mono text: plain strings, {sub} and {sup} segments — so canvas
 *  labels carry real subscripts instead of hoping the font has ₂ */
type Seg = string | { sub: string } | { sup: string };

function richWidth(ctx: CanvasRenderingContext2D, parts: Seg[]): number {
  let w = 0;
  for (const p of parts) {
    const small = typeof p !== 'string';
    ctx.font = monoFont(600, small ? 8 : 11);
    const text = typeof p === 'string' ? p : 'sub' in p ? p.sub : p.sup;
    w += ctx.measureText(text).width;
  }
  return w;
}

function drawRich(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  parts: Seg[],
  color: string,
): number {
  let cx = x;
  for (const p of parts) {
    if (typeof p === 'string') {
      ctx.font = monoFont(600, 11);
      ctx.fillStyle = color;
      ctx.fillText(p, cx, y);
      cx += ctx.measureText(p).width;
    } else if ('sub' in p) {
      ctx.font = monoFont(600, 8);
      ctx.fillStyle = color;
      ctx.fillText(p.sub, cx, y + 3.2);
      cx += ctx.measureText(p.sub).width;
    } else {
      ctx.font = monoFont(600, 8);
      ctx.fillStyle = color;
      ctx.fillText(p.sup, cx, y - 3.6);
      cx += ctx.measureText(p.sup).width;
    }
  }
  return cx - x;
}

function chipRich(
  ctx: CanvasRenderingContext2D,
  anchorX: number,
  y: number,
  parts: Seg[],
  color: string,
  align: 'left' | 'right' = 'right',
) {
  const pad = 9;
  const w = richWidth(ctx, parts) + pad * 2;
  const x = align === 'right' ? anchorX - w : anchorX;
  rrect(ctx, x, y, w, 22, 11);
  ctx.fillStyle = 'rgba(30,22,51,0.85)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(242,238,250,0.16)';
  ctx.lineWidth = 1.2;
  ctx.stroke();
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  drawRich(ctx, x + pad, y + 15, parts, color);
}

/* ————————————————————— the drift (hero) ————————————————————— */

export function HeroField() {
  const ref = useCanvasScene(() => {
    const COLORS = ['#6fe8a3', '#74d7ff', '#ffc46b', '#ff8fd6', '#b8a3ff'];
    const parts = Array.from({ length: 26 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.017,
      vy: (Math.random() - 0.5) * 0.013,
      r: 1.6 + Math.random() * 1.9,
      c: COLORS[i % COLORS.length],
      tw: Math.random() * Math.PI * 2,
    }));
    const bubs = Array.from({ length: 9 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 2 + Math.random() * 3.4,
      s: 0.02 + Math.random() * 0.02,
    }));
    const sparks = Array.from({ length: 5 }, (_, i) => ({
      x: 0.08 + Math.random() * 0.84,
      y: 0.08 + Math.random() * 0.78,
      s: 5 + Math.random() * 7,
      ph: Math.random() * Math.PI * 2,
      c: COLORS[(i + 1) % COLORS.length],
    }));
    let last = 0;

    return ({ ctx, w, h, t }) => {
      const dt = Math.min(last ? t - last : 0.033, 0.1);
      last = t;
      ctx.clearRect(0, 0, w, h);

      /* bonds — faint lines wherever two motes pass close */
      ctx.lineWidth = 1;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const dx = (parts[i].x - parts[j].x) * w;
          const dy = (parts[i].y - parts[j].y) * h;
          const d = Math.hypot(dx, dy);
          const R = 110;
          if (d < R) {
            ctx.globalAlpha = (1 - d / R) * 0.22;
            ctx.strokeStyle = '#c9f5dd';
            ctx.beginPath();
            ctx.moveTo(parts[i].x * w, parts[i].y * h);
            ctx.lineTo(parts[j].x * w, parts[j].y * h);
            ctx.stroke();
          }
        }
      }

      /* the motes */
      for (const p of parts) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < -0.02) p.x = 1.02;
        else if (p.x > 1.02) p.x = -0.02;
        if (p.y < -0.02) p.y = 1.02;
        else if (p.y > 1.02) p.y = -0.02;
        ctx.globalAlpha = Math.max(0.15, 0.5 + 0.3 * Math.sin(t * 1.4 + p.tw));
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      /* bubbles drifting up through the dark */
      ctx.strokeStyle = 'rgba(111,232,163,0.5)';
      for (const b of bubs) {
        b.y -= b.s * dt;
        if (b.y < -0.03) {
          b.y = 1.03;
          b.x = Math.random();
        }
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.arc(b.x * w, b.y * h, b.r, 0, Math.PI * 2);
        ctx.stroke();
      }

      /* turning sparks */
      for (const s of sparks) {
        ctx.save();
        ctx.translate(s.x * w, s.y * h);
        ctx.rotate(t * 0.3 + s.ph);
        ctx.globalAlpha = 0.22 + 0.5 * (0.5 + 0.5 * Math.sin(t * 0.9 + s.ph));
        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.moveTo(0, -s.s);
        ctx.quadraticCurveTo(s.s * 0.18, -s.s * 0.18, s.s, 0);
        ctx.quadraticCurveTo(s.s * 0.18, s.s * 0.18, 0, s.s);
        ctx.quadraticCurveTo(-s.s * 0.18, s.s * 0.18, -s.s, 0);
        ctx.quadraticCurveTo(-s.s * 0.18, -s.s * 0.18, 0, -s.s);
        ctx.fill();
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    };
  });

  return <canvas ref={ref} className="lum-hero-canvas" aria-hidden="true" />;
}

/* ————————————————————— the machines section ————————————————————— */

export function SceneTerminal() {
  const ref = useCanvasScene(() => {
    /* the linear-drag solution — computed, not sketched: the shape the
       mark schemes ask for (steep at g, flattening, horizontal) */
    const vT = 1.0;
    const tau = 0.62;
    const TMAX = 2.8;
    const VMAX = 1.35;

    return ({ ctx, w, h, t }) => {
      ctx.clearRect(0, 0, w, h);

      const padL = 46;
      const padR = 20;
      const padT = 34;
      const plotH = h * 0.62;
      const baseY = padT + plotH;
      const plotW = w - padL - padR;
      const X = (tt: number) => padL + (tt / TMAX) * plotW;
      const Y = (vv: number) => baseY - (vv / VMAX) * plotH;

      /* draw window: the loop relaunches the ball every 8 s */
      const cyc = t % 8;
      const shown = Math.min(cyc * (TMAX / 2.4), TMAX);

      /* axes */
      ctx.strokeStyle = `${GLOW}0.16)`;
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 6]);
      line(ctx, padL - 10, baseY, w - padR, baseY);
      line(ctx, padL, padT - 8, padL, baseY);
      ctx.setLineDash([]);

      /* the terminal-velocity line */
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = 'rgba(255,196,107,0.75)';
      ctx.lineWidth = 1.6;
      line(ctx, padL - 10, Y(vT), w - padR, Y(vT));
      ctx.setLineDash([]);

      /* the computed curve */
      ctx.beginPath();
      let first = true;
      let vNow = 0;
      for (let tt = 0; tt <= shown; tt += 0.02) {
        const vv = vT * (1 - Math.exp(-tt / tau));
        vNow = vv;
        const px = X(tt);
        const py = Y(vv);
        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = '#6fe8a3';
      ctx.lineWidth = 3;
      ctx.lineJoin = 'round';
      ctx.stroke();

      /* the ball riding the curve */
      const bx = X(shown);
      const by = Y(vNow);
      ctx.beginPath();
      ctx.arc(bx, by, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#6fe8a3';
      ctx.fill();

      ctx.font = monoFont(600, 11);
      ctx.textAlign = 'center';
      ctx.fillStyle = `${GLOW}0.5)`;
      ctx.fillText('time →', padL + plotW / 2, baseY + 18);
      ctx.textAlign = 'left';
      ctx.fillText('v', padL - 24, padT + 2);
      ctx.fillStyle = 'rgba(255,196,107,0.85)';
      ctx.fillText('vₜ — terminal', padL + 8, Y(vT) - 8);
      ctx.fillStyle = `${GLOW}0.45)`;
      ctx.fillText('gradient = a', X(0.9), Y(0.62) - 12);

      chip(ctx, w - 14, 14, vNow > 0.985 * vT ? 'a = 0 — terminal' : `v = ${vNow.toFixed(2)} vₜ`, vNow > 0.985 * vT ? '#ffc46b' : '#6fe8a3');
    };
  });

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animation: a computed velocity-time curve for a falling ball, steep where only the weight acts, flattening as drag grows, horizontal at terminal velocity"
    />
  );
}

export function SceneProjectile() {
  const ref = useCanvasScene(() => {
    /* the two-column model, computed: x = vₓt, y = vᵧt − ½gt² —
       equal-time ticks show constant spacing across, growing spacing down */
    const T = 2.0;
    const g = 9.81;
    const vx = 2.4;
    const vy = 4.0;
    const vmax = vy * T * 0.5;

    return ({ ctx, w, h, t }) => {
      ctx.clearRect(0, 0, w, h);

      const padL = 24;
      const padR = 24;
      const groundY = h - 34;
      const apexY = 30;
      const x0 = padL + 30;
      const spanX = w - padL - padR - 60;

      /* the loop: the flight replays every 8 s, dots persist then fade */
      const cyc = t % 8;
      const shown = Math.min(cyc * (T / 2.2), T);

      /* the computed trajectory */
      const px = (tt: number) => x0 + (vx * tt) * (spanX / (vx * T));
      const py = (tt: number) => groundY - (vy * tt - 0.5 * g * tt * tt) * ((groundY - apexY) / vmax);

      ctx.beginPath();
      let first = true;
      for (let tt = 0; tt <= shown; tt += 0.03) {
        const ax = px(tt);
        const ay = py(tt);
        if (first) {
          ctx.moveTo(ax, ay);
          first = false;
        } else ctx.lineTo(ax, ay);
      }
      ctx.strokeStyle = '#6fe8a3';
      ctx.lineWidth = 3;
      ctx.lineJoin = 'round';
      ctx.stroke();

      /* ground line */
      ctx.strokeStyle = `${GLOW}0.2)`;
      ctx.lineWidth = 1.6;
      ctx.setLineDash([2, 6]);
      line(ctx, padL - 8, groundY, w - padR + 8, groundY);
      ctx.setLineDash([]);

      /* the equal-time ticks — the two columns */
      const steps = 8;
      for (let i = 1; i <= steps; i++) {
        const tt = (i / steps) * shown;
        const ax = px(tt);
        const ay = py(tt);
        ctx.beginPath();
        ctx.arc(ax, ay, 3.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(116,215,255,0.85)';
        ctx.fill();
        /* the horizontal-column dot, same colour, riding the launch height */
        ctx.beginPath();
        ctx.arc(ax, groundY, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(116,215,255,0.4)';
        ctx.fill();
        /* the vertical-column dot, riding the launch line */
        ctx.beginPath();
        ctx.arc(x0, py(tt), 2.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,143,214,0.55)';
        ctx.fill();
      }

      /* the flying ball at the trajectory's head */
      ctx.beginPath();
      ctx.arc(px(shown), py(shown), 5.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fff6ea';
      ctx.fill();

      ctx.font = monoFont(600, 11);
      ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(116,215,255,0.85)';
      ctx.fillText('aₓ = 0 — equal spacing across', padL + 6, apexY + 6);
      ctx.fillStyle = 'rgba(255,143,214,0.8)';
      ctx.fillText('aᵧ = g — spacing grows down', padL + 6, apexY + 22);

      chip(ctx, w - 14, 14, 'time is the bridge', '#ffc46b');
    };
  });

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animation: a computed projectile arc with equal-time dots, horizontal spacing constant and vertical spacing growing, the two independent columns joined by time"
    />
  );
}

export function SceneStokes() {
  const ref = useCanvasScene(() => {
    /* the force race in a tube: the ball accelerates while drag grows,
       then settles to equal spacing once W = U + D — terminal velocity */
    const vT = 1.0;
    const tau = 0.5;

    return ({ ctx, w, h, t }) => {
      ctx.clearRect(0, 0, w, h);

      const tubeL = w * 0.16;
      const tubeR = w * 0.5;
      const topY = 24;
      const botY = h - 30;

      /* the tube and the liquid */
      ctx.strokeStyle = `${GLOW}0.22)`;
      ctx.lineWidth = 2;
      rrect(ctx, tubeL, topY, tubeR - tubeL, botY - topY, 8);
      ctx.stroke();
      ctx.fillStyle = 'rgba(116,215,255,0.07)';
      ctx.fill();

      /* the release cycle: 9 s — fall, settle, hold, restart */
      const cyc = t % 9;
      /* distance fallen in normalised units: grows fast, then linear */
      const dist = vT * (cyc - tau * (1 - Math.exp(-cyc / tau)));
      const travel = botY - topY - 60;
      const norm = Math.min(dist / 2.2, 1);
      const by = topY + 26 + norm * travel;
      const frac = 1 - Math.exp(-cyc / tau); /* v / vT */

      /* spacing ticks behind the ball — equal spacing shows the constant v */
      ctx.strokeStyle = `${GLOW}0.14)`;
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 7; i++) {
        const d = vT * (cyc - tau * (1 - Math.exp(-cyc / tau))) - i * 0.16;
        const n = d / 2.2;
        if (n <= 0 || n >= 1) continue;
        const ty = topY + 26 + n * travel;
        line(ctx, tubeL + 8, ty, tubeL + 16, ty);
      }

      /* the ball */
      ctx.beginPath();
      ctx.arc((tubeL + tubeR) / 2, by, 7.5, 0, Math.PI * 2);
      ctx.fillStyle = '#6fe8a3';
      ctx.fill();
      ctx.strokeStyle = `${GLOW}0.4)`;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      /* the force race, right of the tube: W down, U + D up */
      const fx = tubeR + 44;
      const arrow = (x: number, y1: number, y2: number, c: string) => {
        ctx.strokeStyle = c;
        ctx.lineWidth = 2.8;
        ctx.lineCap = 'round';
        line(ctx, x, y1, x, y2);
        const s = Math.sign(y2 - y1);
        ctx.beginPath();
        ctx.moveTo(x - 5.5, y2 - s * 7);
        ctx.lineTo(x, y2);
        ctx.lineTo(x + 5.5, y2 - s * 7);
        ctx.stroke();
      };
      const L = 46;
      arrow(fx, by - 14, by - 14 - L, '#ff8fd6'); /* weight, down */
      arrow(fx, by + 14, by + 14 + L * 0.42, '#74d7ff'); /* upthrust, up */
      arrow(fx + 26, by + 14, by + 14 + L * 0.42 * frac, '#6fe8a3'); /* drag, up, growing */

      ctx.font = monoFont(600, 11);
      ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(255,143,214,0.9)';
      ctx.fillText('W', fx + 9, by - 20);
      ctx.fillStyle = 'rgba(116,215,255,0.9)';
      ctx.fillText('U', fx + 9, by + 30);
      ctx.fillStyle = 'rgba(111,232,163,0.9)';
      ctx.fillText('D', fx + 35, by + 30);

      chip(ctx, w - 14, 14, frac > 0.985 ? 'W = U + D — terminal' : 'drag growing…', frac > 0.985 ? '#ffc46b' : '#6fe8a3');
    };
  });

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animation: a ball falling through liquid in a tube, its spacing settling to equal as drag grows, with the weight arrow balanced by the upthrust and growing drag arrows at terminal velocity"
    />
  );
}

export function MotionBand() {
  return (
    <section id="motion" className="lum-sec lum-band-motion">
      <Meniscus />
      <div className="lum-wrap">
        <SectionHead
          dot="#74d7ff"
          eyebrow="physics in motion"
          title={
            <>
              The syllabus, <em>running live.</em>
            </>
          }
          lead="Three of the course's own ideas, kept as moving machines — no controls, no sliders, just the physics looping the way it loops in the notes. Every figure in the library moves like this; these are the door's demonstrations."
        />
        <div className="lum-stages">
          <Reveal className="lum-stage">
            <h3>
              the curve gives up <span className="lum-spec-chip">motion graphs</span>
            </h3>
            <SceneTerminal />
            <p className="lum-stage-cap">
              The computed velocity–time curve of a falling ball: steep where only the weight
              acts, flattening as the drag grows, horizontal once drag and weight balance —
              terminal velocity, exactly as the mark scheme draws it.
            </p>
          </Reveal>
          <Reveal className="lum-stage" delay={0.08}>
            <h3>
              the parabola lands <span className="lum-spec-chip">projectiles</span>
            </h3>
            <SceneProjectile />
            <p className="lum-stage-cap">
              The two independent columns, computed live: constant spacing across (a = 0),
              growing spacing down (a = g), and time the one bridge between them.
            </p>
          </Reveal>
          <Reveal className="lum-stage wide" delay={0.05}>
            <h3>
              the force race settles <span className="lum-spec-chip">Stokes' law</span>
            </h3>
            <SceneStokes />
            <p className="lum-stage-cap">
              The falling ball in its tube: the weight holds, the upthrust holds, the drag
              grows with speed — and when W = U + D the spacing goes equal. Terminal velocity,
              watched live.
            </p>
          </Reveal>
        </div>
        <Reveal className="lum-motion-note" delay={0.1}>
          <span className="pulse lum-loop" aria-hidden="true" />
          every machine idles only while you can see it — the rest of the time, the bench
          sleeps
        </Reveal>
      </div>
    </section>
  );
}
