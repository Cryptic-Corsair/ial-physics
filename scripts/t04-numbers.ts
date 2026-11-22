/* Re-verify every numeric claim carried by the rebuilt Topic 4 note
   (notes-ph04-a/b/c) against fresh arithmetic. Register rule: numbers
   are computed before they are written. */
const out: string[] = [];
let fail = 0;
function ck(name: string, got: number, want: number, tol: number) {
  const ok = Math.abs(got - want) <= tol;
  if (!ok) fail++;
  out.push(`${ok ? "pass" : "FAIL"}  ${name}  got ${got.toFixed(6)} want ${want}`);
}
const g = 9.81;
const V = (r: number) => (4 / 3) * Math.PI * r ** 3;

/* — spec 23 — Newton's cradle sphere (Jun-25 Q18a) — */
ck("cradle V = 1.44e-6", V(7.0e-3), 1.44e-6, 0.005e-6);
ck("cradle m = 0.011 kg", 7.8e3 * V(7.0e-3), 0.011, 0.0005);
ck("cradle m = 1.1e-2 (MS)", 7.8e3 * V(7.0e-3), 1.1e-2, 0.0005);

/* — spec 24 — Jan-20 Q19 balance chain — */
ck("jan19 m_disp = 0.150 kg", 0.465 - 0.315, 0.15, 1e-9);
ck("jan20 V_sphere = 1.5e-4", 0.15 / 1000, 1.5e-4, 1e-9);
ck("jan20 m_sphere = 0.30 kg", 2000 * (0.15 / 1000), 0.3, 1e-9);

/* — submarine (Jun-21 Q13) — */
const U1 = 1.03e3 * 5.83e3 * g;
ck("submarine U = 5.89e7", U1, 5.89e7, 0.01e7);
ck("submarine U rounds 5.9e7", U1, 5.9e7, 0.05e7);
ck("submarine m = 6.0e6", U1 / g, 6.0e6, 0.01e6);
const U2 = 1.01e3 * 5.83e3 * g;
ck("submarine U' = 5.78e7", U2, 5.78e7, 0.01e7);
ck("submarine diff = 1.14e6 N", U1 - U2, 1.14e6, 0.01e6);
ck("submarine pump = 1.17e5 kg", (U1 - U2) / g, 1.17e5, 0.01e5);

/* — hollow cylinder (Jan-22 Q15) — */
const Vcyl = Math.PI * 0.0105 ** 2 * 0.04;
ck("cylinder V = 1.39e-5", Vcyl, 1.39e-5, 0.005e-5);
ck("cylinder m (MS route) = 8.8e-3", 1000 * 0.63 * 1.39e-5, 8.8e-3, 0.05e-3);
ck("cylinder m (unrounded) = 8.73e-3", 1000 * 0.63 * Vcyl, 8.73e-3, 0.01e-3);
const Vbrass = 8.73e-3 / 8.7e3;
ck("cylinder V_brass = 1.00e-6", Vbrass, 1.0e-6, 0.005e-6);
ck("cylinder m_gold = 0.019 kg", 19.3e3 * Vbrass, 0.019, 0.0005);
ck("cylinder V_disp needed = 1.9e-5", (19.3e3 * Vbrass) / 1000, 1.9e-5, 0.05e-5);
ck("cylinder gold sinks: 1.94e-5 > 1.39e-5", (19.3e3 * Vbrass) / 1000 > Vcyl ? 1 : 0, 1, 0);

/* — iceberg (Jun-24 Q12) — */
ck("iceberg V_disp = 2.345e4", 3500 * 6.7, 2.345e4, 1);
ck("iceberg W = 2.4e8 N", 1.03e3 * 2.345e4 * g, 2.4e8, 0.05e8);

/* — hydrometer (Oct-24 Q16) — */
const mh = 0.324 / g;
ck("hydrometer m = 0.0330 kg", mh, 0.033, 0.0005);
const Vw = mh / 997;
const Vs = mh / 1025;
ck("hydrometer V_water = 3.31e-5", Vw, 3.31e-5, 0.005e-5);
ck("hydrometer V_sea = 3.22e-5", Vs, 3.22e-5, 0.005e-5);
const A = Math.PI * (1.23e-2 / 2) ** 2;
ck("hydrometer L_water = 0.279 m", Vw / A, 0.279, 0.0005);
ck("hydrometer L_sea = 0.271 m", Vs / A, 0.271, 0.0005);
ck("hydrometer dL = 0.0076 m", Vw / A - Vs / A, 0.0076, 0.0002);
ck("hydrometer dL rounds to 8 mm", (Vw / A - Vs / A) * 1000, 7.6, 0.3);

/* — lifting bags (Oct-25 Q17a) — */
const Vbag = V(0.25);
const Vbox = 0.25 * 0.5 * 1.1;
const Vtot = 2 * Vbag + Vbox;
ck("bags V = 0.065", Vbag, 0.065, 0.0005);
ck("bags V_box = 0.138", Vbox, 0.138, 0.0006);
ck("bags V_total = 0.269 (MS route)", 2 * 0.0654 + 0.138, 0.269, 0.0006);
ck("bags V_total (unrounded) = 0.268", Vtot, 0.268, 0.0006);
ck("bags W_disp = 2690 N", 1020 * Vtot * g, 2690, 5);
ck("bags lift: 2690 > 2500", 1020 * Vtot * g > 2500 ? 1 : 0, 1, 0);

/* — weather balloon (Oct-23 Q17) — */
const Uair = 1.23 * 1.63 * g;
ck("balloon U = 19.67 N", Uair, 19.67, 0.05);
const mb = Uair / (g + 4.8);
ck("balloon m = 1.35 kg", mb, 1.35, 0.005);
ck("balloon W = 13.2 N", mb * g, 13.2, 0.05);
ck("balloon V25 = 27 m3", (mb * g) / (0.05 * g), 27, 0.5);
ck("balloon V25 < 50", (mb * g) / (0.05 * g) < 50 ? 1 : 0, 1, 0);

/* — fraction rule — */
ck("ice fraction 0.89 (printed 917)", 917 / 1025, 0.89, 0.005);
ck("ice fraction (89%)", (917 / 1025) * 100, 89, 0.5);
ck("ice fraction (table 920) = 0.90", 920 / 1025, 0.9, 0.005);

/* — spec 25 — water droplet (Oct-21 Q17) — */
const Vd = 3.35e-8;
const Wd = 1000 * Vd * g;
ck("droplet W = 3.3e-4", Wd, 3.3e-4, 0.02e-4);
const Ud = 940 * Vd * g;
ck("droplet U = 3.1e-4", Ud, 3.1e-4, 0.02e-4);
const Dd = Wd - Ud;
ck("droplet D = 2.0e-5", Dd, 2.0e-5, 0.05e-5);
ck("droplet r = 2.0e-3", (3 * Vd / (4 * Math.PI)) ** (1 / 3), 2.0e-3, 0.005e-3);
ck("droplet v = 4.8e-3", Dd / (6 * Math.PI * 0.11 * 2.0e-3), 4.8e-3, 0.05e-3);

/* — helium balloon (Oct-22 Q14) — */
const Ub = 1.2 * 5.0e-2 * g;
ck("balloon U = 0.589 N", Ub, 0.589, 0.0005);
ck("balloon W = 0.090 N", 9.2e-3 * g, 0.09, 0.0005);
ck("balloon net = 0.5 N", Ub - 9.2e-3 * g, 0.5, 0.005);

/* — glass spheres (Jun-21 Q18b) — */
const Vg = 2.24e-5; // the MS route rounds V first
ck("glass W = 0.554 N", 2.52e3 * Vg * g, 0.554, 0.0005);
ck("glass U = 0.314 N", 1.43e3 * Vg * g, 0.314, 0.0005);
ck("glass D = 0.24 N", 2.52e3 * Vg * g - 1.43e3 * Vg * g, 0.24, 0.001);
ck("glass D ≈ 0.2", 2.52e3 * Vg * g - 1.43e3 * Vg * g, 0.2, 0.05);

/* — d² graph (Jun-21 Q18c) — */
ck("d2 eta = 99 Pa s", ((2.52 - 1.43) * 1e3 * g) / (18 * 6), 99, 0.5);

/* — Jan-20 Q12 Stokes test — */
const Wbb = 9.1e-4 * g;
ck("jan12 W = 8.9e-3", Wbb, 8.9e-3, 0.03e-3);
const Dbb = Wbb - 1.1e-3;
ck("jan12 D = 7.8e-3", Dbb, 7.8e-3, 0.03e-3);
const Fbb = 6 * Math.PI * 8.9e-4 * 3.0e-3 * 0.5;
ck("jan12 F = 2.5e-5", Fbb, 2.5e-5, 0.05e-5);
ck("jan12 ratio ≈ 300", Dbb / Fbb, 300, 15);

/* — glycerol (Jun-22 Q19) — */
const Val = V(3.5e-3);
ck("glycerol V = 1.80e-7", Val, 1.8e-7, 0.005e-7);
ck("glycerol m = 4.85e-4", 2.7e3 * Val, 4.85e-4, 0.005e-4);
const Wal = 2.7e3 * Val * g;
ck("glycerol W = 4.76e-3", Wal, 4.76e-3, 0.005e-3);
const Ual = 1.26e3 * Val * g;
ck("glycerol U = 2.22e-3", Ual, 2.22e-3, 0.005e-3);
const Dal = Wal - Ual;
ck("glycerol D = 2.54e-3", Dal, 2.54e-3, 0.005e-3);
const Fal = 6 * Math.PI * 0.95 * 3.5e-3 * 4.05e-2;
ck("glycerol F = 2.54e-3", Fal, 2.54e-3, 0.005e-3);
ck("glycerol D = F (Stokes obeys)", Math.abs(Dal - Fal) < 0.002e-3 ? 1 : 0, 1, 0);

/* — rising bubble (Jun-23 Q16) — */
const Vbub = 5.3e-11;
ck("bubble U = 5.2e-7", 998 * Vbub * g, 5.2e-7, 0.02e-7);
ck("bubble r = 2.33e-4", (3 * Vbub / (4 * Math.PI)) ** (1 / 3), 2.33e-4, 0.005e-4);
ck("bubble F = 1.5e-7", 6 * Math.PI * 9.5e-4 * 2.33e-4 * 3.5e-2, 1.5e-7, 0.05e-7);

/* — polystyrene bead (Jan-21 Q18) — */
const Vbead = V(2.0e-3);
ck("bead V = 3.35e-8", Vbead, 3.35e-8, 0.005e-8);
const Ubead = 930 * Vbead * g;
ck("bead U = 3.06e-4", Ubead, 3.06e-4, 0.005e-4);
const Dbead = Ubead - 1.05e-5;
ck("bead D = 2.96e-4 (MS route)", 3.06e-4 - 1.05e-5, 2.96e-4, 0.006e-4);
ck("bead D exact = 2.95e-4", Dbead, 2.95e-4, 0.005e-4);
ck("bead v = 0.16", Dbead / (6 * Math.PI * 4.9e-2 * 2.0e-3), 0.16, 0.005);
ck("bead vR = 0.13", (10 * 4.9e-2) / (930 * 4.0e-3), 0.13, 0.005);
ck("bead v > vR", Dbead / (6 * Math.PI * 4.9e-2 * 2.0e-3) > 0.131 ? 1 : 0, 1, 0);

/* — foram (Oct-22 Q17) — */
const Wf = 1.15e-8 * g;
ck("foram W = 1.13e-7", Wf, 1.13e-7, 0.005e-7);
const Df = Wf - 4.37e-8;
ck("foram D = 6.9e-8", Df, 6.9e-8, 0.05e-8);
ck("foram v (MS route, 7e-8) = 5.7e-3", 7e-8 / (6 * Math.PI * 1.41e-3 * 4.6e-4), 5.7e-3, 0.05e-3);
ck("foram v (unrounded raw) = 5.65e-3", Df / (6 * Math.PI * 1.41e-3 * 4.6e-4), 5.65e-3, 0.01e-3);

/* — spec 26 — vegetable oil (Jun-25 Q16) — */
ck("oil v = 0.154", 0.2 / 1.3, 0.154, 0.0005);
ck("oil eta = 0.031", 5.6e-5 / (6 * Math.PI * 6.2e-4 * (0.2 / 1.3)), 0.031, 0.0005);

/* — washing-up liquid (Oct-19 Q15) — */
const Vlu = V(4.8e-3);
ck("liquid V = 4.63e-7", Vlu, 4.63e-7, 0.005e-7);
ck("liquid U = 5.00e-3", 1.1e3 * Vlu * g, 5.0e-3, 0.01e-3);
ck("liquid D = 3.0e-2", 3.5e-2 - 5.0e-3, 3.0e-2, 0.01e-2);
ck("liquid eta = 2.07", (3.5e-2 - 5.0e-3) / (6 * Math.PI * 4.8e-3 * 0.16), 2.07, 0.01);
ck("liquid eta rounds to 2.1", (3.5e-2 - 5.0e-3) / (6 * Math.PI * 4.8e-3 * 0.16), 2.1, 0.03);

for (const l of out) console.log(l);
console.log(`\n${fail === 0 ? "ALL PASS" : fail + " FAILURES"} — every number in notes-ph04-a/b/c re-computed`);
if (fail > 0) process.exit(1);
