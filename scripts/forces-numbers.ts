/* Re-verify every numeric claim carried by the rebuilt Forces note
   (notes-ph01f-a/b) against fresh arithmetic. Register rule: numbers
   are computed before they are written. */
const out: string[] = [];
let fail = 0;
function ck(name: string, got: number, want: number, tol: number) {
  const ok = Math.abs(got - want) <= tol;
  if (!ok) fail++;
  out.push(`${ok ? "pass" : "FAIL"}  ${name}  got ${got.toFixed(4)} want ${want}`);
}
const rad = (d: number) => (d * Math.PI) / 180;
const g = 9.81;

/* — spec 1 — dart (Jan-24 Q12) — */
const uV = 15.6 * Math.sin(rad(5.0));
ck("dart uV = 1.36", uV, 1.36, 0.005);
ck("dart t = 1.36/9.81 = 0.139", uV / g, 0.139, 0.0005);
const D = 15.6 * Math.cos(rad(5.0)) * 0.139;
ck("dart D = 2.2 m", D, 2.2, 0.05);

/* two cars (Jun-24 Q13) */
ck("cars t = sqrt(9/7) = 1.13", Math.sqrt(9.0 / 7.0), 1.13, 0.005);
ck("cars A time = 100/93 = 1.075", 100 / 93, 1.075, 0.0005);
const tB = (-93 + Math.sqrt(93 * 93 + 4 * 7 * 109)) / 14;
ck("cars B time = 1.084", tB, 1.084, 0.0005);

/* Mars (Jun-23 Q11) */
ck("Mars ratio sqrt(0.38) = 0.62", Math.sqrt(0.38), 0.62, 0.005);

/* — spec 3 — diver tangent (Oct-24 Q19) — */
ck("diver a = -0.50/65 = -0.008", -0.5 / 65, -0.008, 0.0006);

/* diver conversion (Jun-23 Q12): 0 → -14 over 1.5 s ≈ g */
ck("diver conversion |g| from graph", 14 / 1.5, 9.33, 0.6);

/* — spec 4 — Δv (Oct-20 Q4) — */
ck("dv = 20 - 50 = -30", 20 - 50, -30, 0);

/* — spec 5 — skier (Jan-25 Q12) — */
const aS = g * Math.sin(rad(14));
ck("skier a = 2.37", aS, 2.37, 0.005);
ck("skier v² = 121.6", 7.1 * 7.1 + 2 * aS * 15, 121.6, 0.2);
ck("skier v = 11", Math.sqrt(7.1 * 7.1 + 2 * aS * 15), 11.0, 0.05);
ck("skier drop = 15 sin14 = 3.6", 15 * Math.sin(rad(14)), 3.6, 0.05);

/* — spec 6 — submarine (Jan-25 Q18) — */
const hx = 70 - 43 * Math.cos(rad(25));
const hy = 43 * Math.sin(rad(25));
const R = Math.hypot(hx, hy);
ck("submarine H = 31.0", hx, 31.0, 0.05);
ck("submarine V = 18.2", hy, 18.2, 0.05);
ck("submarine R = 36", R, 36, 0.1);
ck("submarine angle = 30 (printed ± 2)", (Math.atan2(hy, hx) * 180) / Math.PI, 30, 0.5);

/* perpendicular (Oct-24 Q11) */
ck("perpendicular R = 2594 ≈ 2600", Math.hypot(2300, 1200), 2594, 1);

/* cable (Jun-24 Q19) */
ck("cable 2*1200*cos72 = 742 ≈ 740", 2 * 1200 * Math.cos(rad(72)), 741.6, 0.5);

/* — spec 7 — kicked ball (Jan-21 Q13) — */
const uVk = Math.sqrt(2 * g * 5.0);
ck("kick uV = 9.90", uVk, 9.9, 0.005);
ck("kick u = 17", uVk / Math.sin(rad(35)), 17.3, 0.05);

/* wall (Oct-22 Q15) */
const vH = 9.7 * Math.cos(rad(49));
const vV0 = 9.7 * Math.sin(rad(49));
const tw = 5.0 / vH;
const sw = vV0 * tw - 0.5 * g * tw * tw;
ck("wall vH = 6.36", vH, 6.36, 0.005);
ck("wall t = 0.786", tw, 0.786, 0.0005);
ck("wall height = 2.72", sw, 2.72, 0.005);

/* cliff (Jan-23 Q11) */
const tc = Math.sqrt((2 * 12) / g);
ck("cliff t = 1.56", tc, 1.56, 0.005);
ck("cliff range = 5.9", 3.8 * tc, 5.9, 0.05);

/* golfer (Jun-22 Q18) */
const uVg = 52 * Math.sin(rad(41));
ck("golfer uV = 34.1", uVg, 34.1, 0.05);
const disc = uVg * uVg - 4 * 4.905 * 11;
const tg = (uVg + Math.sqrt(disc)) / 9.81;
ck("golfer t = 6.62", tg, 6.62, 0.01);
ck("golfer range = 260", 52 * Math.cos(rad(41)) * tg, 260, 0.6);

/* athlete (Oct-24 Q15) */
const m = 680 / g;
const vHa = Math.sqrt((2 * 409) / m);
const vVa = Math.sqrt(2 * g * 1.4);
ck("athlete m = 69.3", m, 69.3, 0.05);
ck("athlete vH = 3.44", vHa, 3.44, 0.005);
ck("athlete vV = 5.24", vVa, 5.24, 0.005);
ck("athlete v = 6.3", Math.hypot(vHa, vVa), 6.3, 0.05);
ck("athlete angle = 33 from vertical", (Math.atan2(vHa, vVa) * 180) / Math.PI, 33, 0.3);

/* mountain (Jan-25 Q19) — the card's own rounded route */
ck("mountain uH = 464", 500 * Math.cos(rad(22)), 464, 0.5);
ck("mountain t = 15000/464 = 32", 15000 / (500 * Math.cos(rad(22))), 32.3, 0.4);
const sm = 187 * 32 - 4.905 * 32 * 32;
ck("mountain rise = 961", sm, 961, 1);
ck("mountain total = 2961 ≈ 2.96e3", sm + 2000, 2961, 1);

/* — spec 8 — engine (Oct-22 Q18) — */
ck("engine air resistance = 3.0e4", 1.5e5 - 1.2e5, 3.0e4, 1);
/* drag MCQ (Jan-25 Q9) */
ck("drag ΣF = 20", 5.0 * 4.0, 20, 0);
ck("drag = 90 - 49 - 20 = 21", 90 - 49 - 20, 21, 0);

/* — spec 9 — trampolinist (Jan-23 Q15) — */
ck("tramp W = 569", 58 * g, 569, 0.5);
ck("tramp P = 1.39e3", 58 * 14.2 + 58 * g, 1392.6, 1);

/* rocket (Oct-23 Q11) */
ck("rocket W = 4.9e7", 5.0e6 * g, 4.905e7, 1e4);
ck("rocket a = 4.8", (7.3e7 - 5.0e6 * g) / 5.0e6, 4.79, 0.01);

/* car+passengers (Jan-25 Q11) */
ck("car system m = 2000", 460 / 0.23, 2000, 0.5);
ck("car people = 150", 460 / 0.23 - 1850, 150, 0.5);

/* pulley MCQ (Oct-25 Q7) */
ck("pulley a = 1.09", ((0.5 - 0.4) * g) / 0.9, 1.09, 0.005);
/* moving pulley (Jun-21 Q17) */
ck("moving pulley F = 2500", 5000 / 2, 2500, 0);

/* — spec 10 — boat (Jun-25 Q11) — */
ck("boat m = 15500", 4800 / 0.31, 15484, 5);
ck("boat W = 1.5e5", (4800 / 0.31) * g, 1.519e5, 200);

/* — spec 11 — strobe (Jan-20 Q16 + printed range) — */
ck("strobe gradient = 5.0", 0.3 / 0.06, 5.0, 0.01);
ck("strobe g = 10.0", 2 * (0.3 / 0.06), 10.0, 0.01);
ck("photo scale 6.2/1.8 = 3.4", 6.2 / 1.8, 3.4, 0.05);

/* light gates (Oct-25 Q13) */
ck("gates a = 9.6", (2.96 * 2.96 - 1.39 * 1.39) / (2 * 0.355), 9.62, 0.02);

/* — 2026-11-24 rebuild additions — */

/* spec 1 — car suvat MCQ (Jun-23 Q7) */
ck("car MCQ a = (25-9)/30 = 0.53", (25 - 9) / 30, 0.533, 0.005);
/* moon drop MCQ (Jan-26 01A Q6) */
ck("moon g = 2*0.32/0.63² = 1.61", (2 * 0.32) / (0.63 * 0.63), 1.61, 0.01);

/* spec 2 — walker (Jan-22 Q1) */
ck("walker v = 3/6 = 0.5", (2 - -1) / 6, 0.5, 0);
/* describe (Jan-19 Q11) */
ck("describe a1 = 14/9 = 1.56", 14 / 9, 1.56, 0.01);
ck("describe a2 = -44/8.5 = -5.18 (printed -4.9 to -5.2)", -44 / 8.5, -5.18, 0.03);
/* conversion figure gradients */
ck("conversion g1 = 6/2 = 3", 6 / 2, 3, 0);
ck("conversion g2 = 12/2 = 6", 12 / 2, 6, 0);
ck("conversion g4 = -8/2 = -4", -8 / 2, -4, 0);

/* spec 3 — elevator (Jun-26 Q15) */
const elA = 0.5 * 1.4 * 2.6;
const elB = 2.6 * 3.4;
const elC = 0.5 * 2.8 * 2.6;
ck("elevator tri1 = 1.82", elA, 1.82, 0.01);
ck("elevator rect = 8.84", elB, 8.84, 0.01);
ck("elevator tri2 = 3.64", elC, 3.64, 0.01);
ck("elevator total = 14.3", elA + elB + elC, 14.3, 0.05);
ck("elevator max a = 2.6/1.4 = 1.86", 2.6 / 1.4, 1.86, 0.05);
ck("elevator floors = 14.3/3.5 = 4.09", (elA + elB + elC) / 3.5, 4.09, 0.05);

/* spec 5 — painting (Jun-26 01A Q12) */
const pegW = 1.8 * 9.81;
ck("painting W = 17.7", pegW, 17.66, 0.05);
ck("painting T = 21", pegW / (2 * Math.sin(rad(25))), 20.9, 0.2);
/* skier energy route re-check */
const skDrop = 15 * Math.sin(rad(14));
ck("skier energy v² = 121.7", 7.1 * 7.1 + 2 * g * skDrop, 121.6, 0.3);

/* spec 6 — boat triangle (Oct-25 Q12) */
const btR = Math.sqrt(350 * 350 + 410 * 410 + 2 * 350 * 410 * Math.cos(rad(120)));
ck("boat R = 384 (printed 380, range 370-390)", btR, 383.5, 1);
const btAng = (Math.atan2(410 * Math.sin(rad(120)), 350 + 410 * Math.cos(rad(120))) * 180) / Math.PI;
ck("boat angle = 67.8 ≈ 68", btAng, 67.8, 0.3);
/* ladder (Jun-26 Q20a) */
ck("ladder Fg = 120/cos15 = 124.2", 120 / Math.cos(rad(15)), 124.2, 0.5);

/* spec 8 — car FBD proportions (Jan-26 Q11) */
ck("car N = W = 2 × F", 15000 / 7500, 2, 0);

/* spec 10 — density chain (Jun-21 Q2) */
const alM = 35.0 / 9.81;
ck("aluminium m = 3.57", alM, 3.57, 0.01);
ck("aluminium ρ = 2.70e3", 35.0 / (9.81 * 1.32e-3), 2703, 5);

console.log(out.join("\n"));
console.log(`\n${out.length - fail}/${out.length} numeric checks pass`);
if (fail > 0) process.exit(1);
