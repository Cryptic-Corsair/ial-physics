/* Number verification for the gap-closure additions (Task B). */
const checks: Array<[string, number, number]> = [];
function eq(name: string, got: number, want: number, tol = 0.51) {
  checks.push([name, got, Math.abs(got - want) <= tol ? 1 : 0]);
}
// Conversion card (Jun-23 Q12): free-fall gradient over 1.5 s vs g
eq("0 to -14 over 1.5 s gradient", 14 / 1.5, 9.33, 0.6);
// Kicked ball (Jan-21 Q13): uV = sqrt(2g*5), u = uV/sin35
eq("uV = sqrt(2*9.81*5)", Math.sqrt(2 * 9.81 * 5.0), 9.90, 0.005);
eq("u = 9.90/sin35", 9.904 / Math.sin((35 * Math.PI) / 180), 17.3, 0.05);
// Equal-forces bullet (Jun-24 Q19): 2*1200*cos72
eq("2*1200*cos72", 2 * 1200 * Math.cos((72 * Math.PI) / 180), 741.6, 0.5);
// Counterweight (Jan-22 Q12)
const lift = 2250 * 9.81 * 40.0;
const cw = 1300 * 9.81 * 40.0;
eq("lift Egrav = 8.829e5", lift, 882900, 1);
eq("cw Egrav = 5.101e5", cw, 510120, 1);
eq("difference = 3.728e5", lift - cw, 372780, 1);
eq("P = diff/30 = 1.243e4", (lift - cw) / 30, 12426, 1);
eq("lift alone P = 29 kW", lift / 30, 29430, 1);
eq("force route: 950*9.81", 950 * 9.81, 9319.5, 0.5);
eq("force route: F*40", 950 * 9.81 * 40, 372780, 1);
// Popcorn scale (Jan-20 Q16): 6.2/1.8
eq("6.2/1.8 = 3.4", 6.2 / 1.8, 3.4, 0.05);
// Delta-v (Oct-20 Q4): +50 to +20
eq("50-20 = 30", 50 - 20, 30, 0);
// Roller coaster (Oct-20 Q3): sqrt(2g*45) direct vs speed subtraction
const direct = Math.sqrt(2 * 9.81 * 45);
const subtracted = Math.sqrt(2 * 9.81 * 75) - Math.sqrt(2 * 9.81 * 30);
eq("direct v from height diff", direct, 29.7, 0.1);
eq("speed-subtraction differs", subtracted, 14.1, 0.1);
console.log("direct-route v =", direct.toFixed(1), "· speed-subtraction v =", subtracted.toFixed(1), "(they differ — bullet is sound)");
// Pulley (Jun-21 Q17): 5000/2
eq("5000/2", 5000 / 2, 2500, 0);
let pass = 0;
for (const [name, , ok] of checks) {
  if (ok) pass++;
  else console.log("FAIL:", name);
}
console.log(`${pass}/${checks.length} numeric checks pass`);
