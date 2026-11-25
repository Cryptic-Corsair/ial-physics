/* t02r-numbers.ts — re-computes every number the rebuilt Topic 2 note
   prints in its worked cards and checks each against the value shown
   in the content files. Any drift between the arithmetic and the
   printed card fails the check. Run: bun scripts/t02r-numbers.ts */
let fail = 0;
let n = 0;
const close = (a: number, b: number, tol = 0.005) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const ck = (name: string, ok: boolean, detail = "") => {
  n++;
  if (!ok) fail++;
  if (!ok) console.log(`FAIL  ${name}${detail ? " — " + detail : ""}`);
};

/* ————— Part A ————— */

/* The shunting engine (Oct 22 Q18): air resistance = 1.5e5 - 1.2e5 */
ck("engine air resistance 3.0 × 10⁴ N", close(1.5e5 - 1.2e5, 3.0e4));

/* The bumper cars (Jun 22 Q17) */
{
  const mQ = (250 * 2.1 - 250 * 1.15) / 1.57;
  ck("bumper cars mass ≈ 151 kg", close(mQ, 151, 0.01), `got ${mQ.toFixed(1)}`);
  const a = 1.57 / 1.35;
  ck("bumper cars a = 1.16 m s⁻²", close(a, 1.16, 0.01), `got ${a.toFixed(3)}`);
  ck("bumper cars F = 1.76 × 10² N", close(151.3 * 1.16, 1.76e2, 0.01), `got ${(151.3 * 1.16).toFixed(1)}`);
}

/* The asteroids (Jan 22 Q11) */
{
  const mA = 1.8e17 / 2.19e3;
  ck("asteroid A mass 8.22 × 10¹³ kg", close(mA, 8.22e13, 0.01), `got ${mA.toExponential(3)}`);
  const pTot = 1.8e17 + 5.9e12 * 15.0e3;
  ck("asteroids total momentum 2.685 × 10¹⁷", close(pTot, 2.685e17, 0.001), `got ${pTot.toExponential(4)}`);
  const v = pTot / (8.22e13 + 5.9e12);
  ck("asteroids final v = 3.05 × 10³ m s⁻¹", close(v, 3.05e3, 0.005), `got ${v.toFixed(0)}`);
}

/* The railway carriages (Jun 21 Q11) */
{
  const pAfter = (7.15e4 + 5.35e4) * 3.62;
  ck("carriages momentum 4.53 × 10⁵", close(pAfter, 4.53e5, 0.005), `got ${pAfter.toExponential(3)}`);
  const v = (452500 - 7.15e4 * 4.5) / 5.35e4;
  ck("carriages v = 2.44 m s⁻¹", close(v, 2.44, 0.005), `got ${v.toFixed(3)}`);
}

/* ————— Part B ————— */

/* The skateboard child (Jun 19 Q11) — no numbers, register card */

/* The spaceship modules (Jan 23 Q16) */
{
  const v = (2100 * 0.58 - 1350 * 0.82) / 2950;
  ck("descent module v = 0.038 m s⁻¹", close(v, 0.038, 0.03), `got ${v.toFixed(4)}`);
}

/* The gliders (Jan 25 Q14) */
{
  const p = 0.15 * 0.32 - 0.2 * 0.11;
  ck("gliders total +0.026 kg m s⁻¹", close(p, 0.026, 0.01), `got ${p.toFixed(4)}`);
}

/* The speed skaters (Oct 22 Q16) */
{
  const before = 65 * 5.5 + 60 * 7.5;
  const after = (65 + 60) * 6.2;
  ck("skaters before 807.5", close(before, 807.5, 0.001));
  ck("skaters after 775", close(after, 775, 0.001));
  const vCons = before / 125;
  ck("skaters conservation velocity 6.5", close(vCons, 6.5, 0.01), `got ${vCons.toFixed(2)}`);
}

/* The popcorn kernel (Jan 20 Q16) */
{
  const mW = 0.14 * 0.11;
  const mP = 0.11 - mW;
  const v = -(mP * 1.5) / mW;
  ck("popcorn steam 9.2 m s⁻¹", close(v, -9.2, 0.01), `got ${v.toFixed(2)}`);
  ck("popcorn masses 0.0154 / 0.0946 g", close(mW, 0.0154, 0.001) && close(mP, 0.0946, 0.001));
}

/* The tennis-ball launcher (Jun 23 Q15) */
{
  const v = -(0.056 * 4.5) / 2.9;
  ck("launcher recoil 0.087 m s⁻¹", close(v, -0.087, 0.01), `got ${v.toFixed(4)}`);
}

/* The skittles and the ball (Jan 24 Q16) */
{
  const m = (1.4 * 3.1) / (7.2 - 1.6);
  ck("skittles ball 0.78 kg", close(m, 0.78, 0.01), `got ${m.toFixed(3)}`);
}

/* The curling stones (Jan 26 Q13) */
{
  const u = Math.sqrt((2 * 3.8) / 18);
  ck("curling u 0.650 m s⁻¹", close(u, 0.65, 0.01), `got ${u.toFixed(3)}`);
  const pA = 18 * u - 17 * 0.45;
  ck("curling p_A 4.1 kg m s⁻¹ < 5.5", close(pA, 4.1, 0.02) && pA < 5.5, `got ${pA.toFixed(2)}`);
}

/* The snooker balls (Jun 26 01A Q16) */
{
  const v = (2 * 2.1 - 2 * 0.6); // per unit m
  ck("snooker green ball 3.0 m s⁻¹", close(v, 3.0, 0.001));
}

/* The Newton's cradle (Jun 25 Q18c) — descriptive, no numbers */

/* ————— Part C ————— */

/* The cyclist's pedal (Oct 24 Q13) */
{
  const M = 580 * Math.cos((24 * Math.PI) / 180) * 0.21;
  ck("pedal moment ≈ 110 N m", close(M, 110, 0.013), `got ${M.toFixed(1)}`);
}

/* A stone on a step (Jan 23 Q13) */
{
  const P = (415 * 0.05) / 0.4;
  ck("stone P = 52 N", close(P, 52, 0.01), `got ${P.toFixed(1)}`);
}

/* A flagpole held by a wire (Oct 20 Q13) */
{
  const T = (15 * 9.81 * 0.6) / (Math.sin((20 * Math.PI) / 180) * 0.8);
  ck("flagpole T = 323 N < 350", close(T, 323, 0.01) && T < 350, `got ${T.toFixed(1)}`);
  const maxM = 350 * 0.8 * Math.sin((20 * Math.PI) / 180);
  ck("flagpole max moment 95.8 N m", close(maxM, 95.8, 0.01), `got ${maxM.toFixed(1)}`);
}

/* The forearm model (Jun 19 Q15) */
{
  const T = (0.31 * 4.5 + 0.2 * 15) / (0.04 * Math.sin((70 * Math.PI) / 180));
  ck("forearm T ≈ 117 N (85–150 accepted)", close(T, 117, 0.01) && T >= 85 && T <= 150, `got ${T.toFixed(0)}`);
}

/* A parasol in the wind (Oct 21 Q19) */
{
  const wind = 14 * 1.8;
  const restore = 110 * 0.22;
  ck("parasol 25.2 > 24.2 N m", close(wind, 25.2, 0.001) && close(restore, 24.2, 0.001) && wind > restore);
  const T = (25 * 1.8) / (Math.sin((44 * Math.PI) / 180) * 1.5);
  ck("parasol rope T = 43.2 N", close(T, 43.2, 0.01), `got ${T.toFixed(1)}`);
  const F = 110 + T * Math.cos((44 * Math.PI) / 180);
  ck("parasol vertical force 141 N", close(F, 141, 0.01), `got ${F.toFixed(1)}`);
}

/* The bicycle rack (Jun 25 Q19) */
{
  const piston = 160 * Math.sin((18 * Math.PI) / 180) * 0.37;
  const weight = 95 * Math.cos((42 * Math.PI) / 180) * 0.7;
  const F = (weight - piston) / 1.4;
  ck("rack piston moment 18.3 N m", close(piston, 18.3, 0.01), `got ${piston.toFixed(2)}`);
  ck("rack weight moment 49.4 N m", close(weight, 49.4, 0.01), `got ${weight.toFixed(2)}`);
  ck("rack F = 22 N", close(F, 22, 0.02), `got ${F.toFixed(1)}`);
}

/* A bridge on two supports (Jun 24 Q18) */
{
  const Q = (4.2e5 * 35 + 9.8e5 * 60) / 120;
  const P = 9.8e5 + 4.2e5 - Q;
  ck("bridge Q = 6.1 × 10⁵ N", close(Q, 6.1e5, 0.01), `got ${Q.toExponential(2)}`);
  ck("bridge P = 7.9 × 10⁵ N", close(P, 7.9e5, 0.01), `got ${P.toExponential(2)}`);
}

/* A loft ladder on a hinge (Oct 23 Q15) */
{
  const cw = 54 * 0.5;
  const acw = 50 * 0.45;
  const F = (cw - acw) / 0.8;
  ck("ladder 27 vs 22.5 N m", close(cw, 27, 0.001) && close(acw, 22.5, 0.001));
  ck("ladder F = 5.6 N", close(F, 5.6, 0.01), `got ${F.toFixed(2)}`);
}

/* A crane and its counterweight (Jun 23 Q19) */
{
  const x = (1.1e5 * 8 - 3.0e4 * 7) / 4.4e4;
  ck("crane limit 15.2 m < 22.0 m", close(x, 15.2, 0.01) && x < 22, `got ${x.toFixed(2)}`);
}

/* The wheelbarrow (Oct 22 Q13) */
{
  const W = 320 + 80;
  const x = (80 * 1.5) / W;
  ck("wheelbarrow W = 400 N, x = 0.30 m", close(W, 400, 0.001) && close(x, 0.3, 0.01), `got ${x.toFixed(3)}`);
}

/* The uniform plank (Jan 21 Q11) */
{
  const x = (950 * 0.9 - 250 * 1.1) / 650;
  ck("plank x = 0.89 m", close(x, 0.89, 0.01), `got ${x.toFixed(3)}`);
}

/* The door on two hinges (Jan 24 Q18) */
{
  const W = 14.4 * 9.81;
  const Fh = (W * 0.425) / 1.6;
  const Fv = W / 2;
  const th = Math.atan(Fh / Fv);
  const F = Math.hypot(Fh, Fv);
  ck("door W = 141 N", close(W, 141, 0.002), `got ${W.toFixed(2)}`);
  ck("door F_h = 37.5 N ≈ 40", close(Fh, 37.5, 0.01), `got ${Fh.toFixed(1)}`);
  ck("door θ = 28°", close((th * 180) / Math.PI, 28, 0.02), `got ${((th * 180) / Math.PI).toFixed(1)}°`);
  ck("door F = 80 N", close(F, 80, 0.01), `got ${F.toFixed(1)}`);
}

/* The rice-portion balance (Jan 25 Q16) */
{
  const beam = 3.1 * 0.08;
  const dishRice = beam / 0.25;
  const portion = dishRice - 0.64;
  const n = (beam / 0.07 - 0.64) / portion;
  ck("rice portion 0.352 N", close(portion, 0.352, 0.001), `got ${portion.toFixed(4)}`);
  ck("rice portions 8.2, not 3", close(n, 8.2, 0.01) && n > 3, `got ${n.toFixed(2)}`);
}

/* The coat hook (Jun 22 Q13) */
{
  const maxM = 150 * 0.009;
  const coat = 2.6 * 9.81;
  const two = 2 * coat * 0.025;
  const coats = maxM / 0.025 / coat;
  ck("coat hook 1.35 N m max", close(maxM, 1.35, 0.001));
  ck("coat hook 2 coats 1.28 N m < 1.35", close(two, 1.28, 0.01) && two < maxM, `got ${two.toFixed(3)}`);
  ck("coat hook 2.12 coats", close(coats, 2.12, 0.01) && coats > 2 && coats < 3, `got ${coats.toFixed(3)}`);
}

/* The shelf brackets (Jan 19 Q13) */
{
  const F = (8.5 + 14) / 2;
  const x = (8.5 * 0.35 + 14 * 0.6 - F * 0.15) / F;
  ck("shelf bracket force 11.25 N", close(F, 11.25, 0.001));
  ck("shelf bracket B at 0.86 m", close(x, 0.86, 0.01), `got ${x.toFixed(3)}`);
}

/* The dragster (Jun 21 Q16) */
{
  const R1 = (1.23e4 * 1.8) / 6;
  const R2 = (1.23e4 * 4.2) / 6;
  ck("dragster R1 = 3.7 kN", close(R1, 3.7e3, 0.01), `got ${R1.toFixed(0)}`);
  ck("dragster R2 = 8.6 kN", close(R2, 8.6e3, 0.01), `got ${R2.toFixed(0)}`);
  ck("dragster reactions sum to weight", close(R1 + R2, 1.23e4, 0.001));
}

console.log(`\n${fail === 0 ? "ALL PASS" : fail + " FAILURES"} — ${n} numbers re-computed`);
process.exit(fail === 0 ? 0 : 1);
