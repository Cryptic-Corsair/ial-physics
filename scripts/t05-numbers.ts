/* Re-verify every numeric claim carried by the Topic 5 note
   (notes-ph05-a/b/c) against fresh arithmetic. Register rule:
   numbers are computed before they are written. */
const out: string[] = [];
let fail = 0;
function ck(name: string, got: number, want: number, tol: number) {
  const ok = Math.abs(got - want) <= tol;
  if (!ok) fail++;
  out.push(`${ok ? "pass" : "FAIL"}  ${name}  got ${got.toFixed(6)} want ${want}`);
}
const g = 9.81;

/* — spec 27 — elastic cord on the air track (Jan-20 Q17) — */
const grad = (4.8 - 2.2) / 0.30;
ck("cord gradient = 8.67 s^-1", grad, 8.67, 0.005);
ck("cord k (MS route, rounded gradient) = 22.6", 0.3 * 8.67 ** 2, 22.6, 0.06);
ck("cord k (unrounded gradient) ≈ 22.5", 0.3 * grad ** 2, 22.5, 0.06);
ck("cord k in printed range 22–26", 0.3 * grad ** 2 >= 22 && 0.3 * grad ** 2 <= 26 ? 1 : 0, 1, 0);

/* — spec 27 — nylon rope (Jun-21 Q17) — */
const kRope = (2.7e9 * 3.0e-4) / 6.0;
ck("rope k = 1.35e5 N m^-1", kRope, 1.35e5, 0.005e5);
ck("rope k ≈ 1.4e5 (show-that)", kRope, 1.4e5, 5100);
const dxRope = 2500 / kRope;
ck("rope Δx = 1.85e-2 m", dxRope, 1.85e-2, 0.005e-2);
ck("rope ΔEel = 23.1 J", 0.5 * 2500 * dxRope, 23.1, 0.05);

/* — springs in parallel (Oct-22 Q8) — */
const E1 = 0.5; // ½FΔx with F = 1, Δx = 1/k = 1 → E = ½ in these units
const F = 2, k = 1, n = 3;
const each = 0.5 * (F / n) * (F / n / k);
ck("parallel 3 springs @ 2F = (4/3)E", n * each, (4 / 3) * E1, 1e-9);

/* — series (Oct-20 Q16c) — */
const Fx = 1, k1 = 1;
const totalExtSeries = 2 * (Fx / k1);
ck("series k_combined = k/2", Fx / totalExtSeries, 0.5, 1e-9);

/* — spec 28 — stainless steel (Oct-21 Q14) — */
const gradSteel = 37 / (2.0e-3);
ck("steel gradient = 18500 N m^-1", gradSteel, 18500, 1);
const Asteel = Math.PI * (2.8e-4) ** 2;
ck("steel A = 2.46e-7 m²", Asteel, 2.46e-7, 0.005e-7);
const Esteel = (gradSteel * 2.6) / Asteel;
ck("steel E = 1.95e11 Pa", Esteel, 1.95e11, 0.01e11);
ck("steel E ≈ 2e11 Pa", Esteel, 2e11, 0.05e11);
const sigma100 = 100 / Asteel;
ck("steel σ(100 N) = 4.06e8 Pa", sigma100, 4.06e8, 0.01e8);
ck("steel 410 MPa < 480 MPa safe", sigma100 < 480e6 ? 1 : 0, 1, 0);

/* — constantan (Oct-22 Q12) — */
const sigmaConst = 150 / 3.97e-7;
ck("constantan σ = 3.78e8 Pa", sigmaConst, 3.78e8, 0.01e8);
ck("constantan 3.8e8 < 4.2e8 holds", sigmaConst < 4.2e8 ? 1 : 0, 1, 0);
const kConst = 13.0e3;
ck("constantan k = 1.30e4 N m^-1", kConst, 1.3e4, 0.005e4);
const EConst = (kConst * 4.0) / 3.97e-7;
ck("constantan E = 1.31e11 Pa", EConst, 1.31e11, 0.005e11);
ck("constantan E rounds 1.3e11", EConst, 1.3e11, 0.01e11);

/* — spec 29 — steel cable (Jun-22 Q12) — */
ck("cable strain = 0.021", 0.126 / 6.0, 0.021, 0.0005);
ck("cable stress = 1.4e9 Pa", (13.4e6) / (9.6e-3), 1.4e9, 0.01e9);

/* — spec 30 — metal rod (Jan-23 Q14) — */
const Erod = (4.2e8) / (2.0e-3);
ck("rod E = 2.1e11 Pa", Erod, 2.1e11, 0.01e11);
const sigmaRod = (9.5e5) / (4.8e-3);
ck("rod σ = 1.98e8 Pa", sigmaRod, 1.98e8, 0.005e8);
const epsRod = sigmaRod / Erod;
ck("rod ε = 9.42e-4", epsRod, 9.42e-4, 0.005e-4);
const dxRod = epsRod * 0.84;
ck("rod Δx = 0.79 mm", dxRod * 1000, 0.79, 0.005);
ck("rod 0.79 > 0.60 not suitable", dxRod * 1000 > 0.6 ? 1 : 0, 1, 0);

/* — spider silk (Oct-24 Q18) — */
const Asilk = Math.PI * (1.9e-6) ** 2;
ck("silk A = 1.13e-11 m²", Asilk, 1.13e-11, 0.005e-11);
const Fsilk = 4.3e6 * Asilk;
ck("silk F = 4.9e-5 N (2 sf)", Fsilk, 4.9e-5, 0.05e-5);
const epsSilk = (300e6) / (8.7e9);
ck("silk ε = 3.45e-2", epsSilk, 3.45e-2, 0.005e-2);
const dxSilk = epsSilk * 25.0;
ck("silk Δx = 0.86 m", dxSilk, 0.86, 0.005);
ck("silk L = 25.9 m", 25.0 + dxSilk, 25.9, 0.05);
const epsSteelLoP = (350e6) / (200e9);
ck("steel ε at LoP = 1.75e-3", epsSteelLoP, 1.75e-3, 0.005e-3);
ck("silk strains ≈ 20× steel", epsSilk / epsSteelLoP, 19.7, 0.5);
ck("steel force slightly greater (350 vs 300 MPa)", 350 / 300, 1.167, 0.01);

/* — spec 31 — copper wire (Jan-20 Q18) — */
const dMean = (0.230 + 0.235 + 0.230 + 0.240) / 4;
ck("copper mean d = 0.234 mm (rounds to)", dMean, 0.234, 0.0005);
const Acopper = Math.PI * (0.234e-3 / 2) ** 2;
ck("copper A (MS route, rounded mean) = 4.30e-8 m²", Acopper, 4.30e-8, 0.005e-8);
ck("copper A (unrounded mean) ≈ 4.29e-8", Math.PI * (dMean * 1e-3 / 2) ** 2, 4.29e-8, 0.01e-8);
const Ecopper = (195 * 9.81 * 3.5) / Acopper;
ck("copper E = 1.56e11 Pa", Ecopper, 1.56e11, 0.01e11);
ck("copper E rounds 1.6e11", Ecopper, 1.6e11, 0.05e11);

/* — copper (Jun-24 Q16b) — */
const Acopper2 = Math.PI * (0.56e-3 / 2) ** 2;
ck("copper2 A = 2.46e-7 m²", Acopper2, 2.46e-7, 0.005e-7);
const sigmaCopper2 = 5.0 / Acopper2;
ck("copper2 σ = 2.03e7 Pa", sigmaCopper2, 2.03e7, 0.01e7);
const epsCopper2 = sigmaCopper2 / 1.1e11;
ck("copper2 ε = 1.85e-4", epsCopper2, 1.85e-4, 0.005e-4);
const dxCopper2 = epsCopper2 * 2.5;
ck("copper2 Δx = 4.6e-4 m (2 sf)", dxCopper2, 4.6e-4, 0.05e-4);

/* — spec 32 — electromagnet cable (Oct-23 Q16b) — */
const dxCable = 3.0e-4 * 3.8;
ck("cable Δx = 1.14e-3 m", dxCable, 1.14e-3, 0.005e-3);
const Fcable = 2.8e7 * dxCable;
ck("cable F = 3.19e4 N", Fcable, 3.19e4, 0.01e4);
const sigmaCable = Fcable / (5.1e-4);
ck("cable σ = 6.26e7 Pa", sigmaCable, 6.26e7, 0.01e7);
const Ecable = sigmaCable / 3.0e-4;
ck("cable E = 2.09e11 Pa", Ecable, 2.09e11, 0.01e11);
ck("cable E rounds 2.1e11 (2 sf)", Ecable, 2.1e11, 0.02e11);

/* — rubber band (Jan-24 Q11b) — */
const sq = 0.5 * 0.005;
ck("1 cm² of the graph = 0.0025 J", sq, 0.0025, 1e-9);
ck("heating energy = 19 × 0.0025 = 0.0475 ≈ 0.048 J", 19 * sq, 0.048, 0.0006);
ck("0.048 inside printed range 0.0425–0.053", 19 * sq >= 0.0425 && 19 * sq <= 0.053 ? 1 : 0, 1, 0);

/* — prose claims — */
ck("silk ε ratio “about twenty times”", epsSilk / epsSteelLoP, 20, 1.5);
ck("nylon 2.70 GPa = 2.7e9 Pa", 2.7, 2.7, 1e-9);

for (const l of out) console.log(l);
console.log(`\n${fail === 0 ? "ALL PASS" : fail + " FAILURES"} — every number in notes-ph05-a/b/c re-computed`);
if (fail > 0) process.exit(1);
