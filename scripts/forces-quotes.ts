/* Verify every verbatim mark-scheme / examiner-report quote carried
   by the rebuilt Forces note. Two tracked corpora: the paper text
   extracts (research/wph11/txt) for printed mark schemes, and the
   digests (research/wph11/digest-*.md) for the examiners' report
   lines. Whitespace and quote glyphs are normalised first. */
import { readFileSync, readdirSync } from "node:fs";

const DIRS = ["research/wph11/txt", "research/wph11"];
const files: string[] = [];
for (const d of DIRS) {
  for (const f of readdirSync(d)) {
    if (f.endsWith(".txt") || /^digest-[A-D]\.md$/.test(f)) files.push(`${d}/${f}`);
  }
}
const norm = (s: string) =>
  s
    .replace(/[\u2018\u2019\u02bc]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2212/g, "-")
    .replace(/\uF02D/g, "-")
    .replace(/\s+/g, " ")
    .toLowerCase();

const corpus = files.map((f) => ({ f, t: norm(readFileSync(f, "utf8")) }));
const all = corpus.map((c) => c.t).join(" \u0000 ");

const QUOTES: Array<[string, string]> = [
  ["MS front page (rounding)", "Final answers must be correctly rounded, not truncated"],
  ["dart (Jan-24 Q12)", "it was reasonably common for students to incorrectly round their calculated answer to 0.138 s instead of 0.139 s"],
  ["graphs (report)", "the answers did not often refer to the graph"],
  ["bounce (Oct-20 Q10)", "lines straight, indicating no change in velocity"],
  ["diver tangent (Oct-24 Q19)", "just read a value of velocity at 70s and divided one by the other"],
  ["diver areas (Oct-24 Q19)", "many candidates did not mention the areas on the graph"],
  ["diver conversion (Jun-23 Q12)", "(initial) gradient = 0 or tangent horizontal (at t = 0)"],
  ["diver conversion marks", "second straight line from end of first line to (2.1, 0.0)"],
  ["vector change (Oct-20 Q4)", "80 m s-1 N"],
  ["traffic lights (Jan-25 Q10)", "T cos θ is the horizontal component of tension T"],
  ["bird (Jan-24 Q6)", "the components of T acting vertically should be cos and should form the denominator"],
  ["skier (Jan-25 Q12)", "failed to take account of the initial velocity of the person"],
  ["submarine (Jan-25 Q18)", "drew a free-body force diagram rather than a scaled vector diagram"],
  ["submarine labels", "labelled their vectors with the length of the arrow"],
  ["submarine direction", "draw the resultant force vector pointing in the wrong direction"],
  ["perpendicular (Oct-24 Q11)", "less than half gained both marks"],
  ["perpendicular Pythagoras", "using Pythagoras to calculate the magnitude"],
  ["wall (Oct-22 Q15)", "neglecting units for their values of height"],
  ["cliff (Jan-23 Q11)", "Teaching students to set calculations out in two columns would help them"],
  ["golfer (Jun-22 Q18)", "find the time to maximum height and double it"],
  ["engine (Oct-22 Q18)", "an additional backwards force from air resistance was required"],
  ["engine arrows", "lengths proportional to the magnitudes of the forces"],
  ["engine 2 mm", "2 mm"],
  ["engine reject", "do not accept 'viscous drag'"],
  ["ball-bearing (Oct-23 Q18)", "labelled weight as G"],
  ["ball-bearing lengths", "the length of the arrow represents the size of the force"],
  ["trampolinist (Jan-23 Q15)", "subtracted the weight from the resultant force"],
  ["rocket (Oct-23 Q11)", "treat the thrust from the rocket's engines as the resultant force"],
  ["rocket explain", "rather than explaining why the acceleration would increase"],
  ["car+passengers (Jan-25 Q11)", "added the mass of the car to the total mass rather than subtracting"],
  ["lift (Jan-22 Q14)", "the force of the lift/scales on the student is the reading on the scales"],
  ["lift reaction", "As lift decelerates reaction is less than weight"],
  ["lift structure band", "coherent and logical structure with linkages"],
  ["balloon chain", "initially there is a resultant upward force"],
  ["balloon drag", "(Downward) air resistance force, (initially zero) increases as velocity/speed increases"],
  ["balloon balance", "upthrust = weight + drag"],
  ["balloon terminal", "Balloon continues to move (upwards) at constant velocity"],
  ["bungee (Oct-24 Q17)", "described the energy changes of the student"],
  ["bungee error", "maximum acceleration at the equilibrium point"],
  ["CP1 graph skill", "Explaining how a graph of the results should be used to determine a value"],
  ["CP1 doubling", "Some candidates did not then double this value"],
  ["CP1 no working", "showed no evidence of any working to support their answer"],
  ["pulley driven wheels (Jun-21 Q3)", "the frictional force from the road is the driving force"],
  ["equal forces (Jun-24 Q19b)", "R = 2 × 1200 N × cos 72°"],
  ["strobe scale (Jan-20 Q16)", "1.8"],

  /* — 2026-11-24 rebuild: new verbatim quotes, all session-verified — */
  ["suvat condition (Jan-24 Q14)", "The equations of motion require a constant acceleration"],
  ["suvat reject (Jan-24 Q14)", "Do not accept use of equations of motion"],
  ["lunar sign convention (Jan-26 Q18)", "having the same sign convention"],
  ["strobe s∝t² (Oct-19 Q9)", "in 2 units of time it will have fallen 4 units of distance"],
  ["suvat MCQ distractor (Jun-23 Q7)", "15 is not the time taken"],
  ["suvat MCQ distractor 2 (Jun-23 Q7)", "the displacement has not been doubled"],
  ["walker displacement (Jan-22 Q1)", "final displacement is measured from 0, not"],
  ["walker velocity (Jan-22 Q1)", "velocity is 3 m \u00f7 6 s, not 6 m \u00f7 3 s"],
  ["describe negative a (Jan-19 Q11)", "At 9 s the acceleration becomes negative"],
  ["describe backwards (Jan-19 Q11)", "From 12 s to 17.5 seconds the object is accelerating while moving in the opposite direction"],
  ["describe accepted values (Jan-19 Q11)", "1.6 m s\u22122 Or see (\u2212)4.9 to (\u2212)5.2"],
  ["levels IC1 (Jan-26 Q17b)", "Gradient of the graph represents velocity"],
  ["levels IC3 (Jan-26 Q17b)", "From 10 s to 20 s the gradient decreases"],
  ["levels IC5 (Jan-26 Q17b)", "At 20 s velocity = 0"],
  ["levels IC6 (Jan-26 Q17b)", "After 20 s the velocity / motion of the box is in the"],
  ["no-tolerance reading (Jun-25 Q12b)", "No tolerance if readings taken at 4 s and 16 s"],
  ["elevator tangent (Jun-26 Q15a)", "draw a tangent at the steepest point of the curve"],
  ["elevator gradient (Jun-26 Q15a)", "(maximum) acceleration is the gradient of the tangent"],
  ["elevator fallback (Jun-26 Q15a)", "allow 1 mark for maximum acceleration is"],
  ["elevator distance (Jun-26 Q15b)", "Allow a distance in the range 13.5 m to 14.5 m"],
  ["elevator floors (Jun-26 Q15b)", "Uses 3.5 m to determine number of floors moved by elevator"],
  ["elevator answer (Jun-26 Q15b)", "Highest floor reached = 10"],
  ["elevator integer (Jun-26 Q15b)", "answer must be an integer"],
  ["at decomposition (Jun-26 Q6)", "the area of the triangle should be"],
  ["parachute open (Jun-25 Q20d)", "air resistance is greater than weight"],
  ["parachute guard (Jun-25 Q20d)", "Ignore speed decreases"],
  ["parachute drag falls (Jun-25 Q20d)", "(As speed decreases) air resistance decreases"],
  ["parachute balance (Jun-25 Q20d)", "(Until upthrust +) air resistance = weight"],
  ["submarine dependent (Jan-25 Q20a)", "drag increases (and upthrust remains constant)"],
  ["dependent guard (Jan-25 Q20a)", "dependent on MP2"],
  ["skydiver sketch curve (Jun-25 Q20b)", "Curved line starting at zero with negative gradient decreasing in"],
  ["skydiver sketch flat (Jun-25 Q20b)", "Horizontal line after 12 seconds"],
  ["skydiver sketch guard (Jun-25 Q20b)", "Line should not be along the x-axis"],
  ["efficiency scalar (Jun-23 Q1)", "efficiency is not a vector quantity"],
  ["g def reject (Jan-20 Q2)", "force per unit length has no meaning"],
  ["g def reject 2 (Jan-23 Q2)", "it should be weight, not acceleration"],
  ["speed vs velocity (Jun-26 01A Q11)", "Direction is changing"],
  ["CP1 sufficiency (Jun-26 01A Q3)", "it would not be possible to determine acceleration due to gravity without further quantities"],
  ["car FBD arrows (Jan-26 Q11)", "Straight arrows representing forward force"],
  ["car FBD lengths (Jan-26 Q11)", "Length of weight arrow and length of normal contact"],
  ["car FBD count (Jan-26 Q11)", "Do not allow more than three arrows"],
  ["ladder triangle (Jun-26 Q20a)", "vector triangle of correct shape drawn with at least two sides labelled"],
  ["ladder tolerance (Jun-26 Q20a)", "allow answers in the range 120 N to 128N"],
  ["boat angle (Oct-25 Q12)", "Angle of resultant force from north = 68"],
  ["boat magnitude (Oct-25 Q12)", "Magnitude of resultant force = 380 N"],
  ["no-calc rule (Jan-19 Q15a)", "obtained by calculation or from an incorrect diagram"],
  ["air resistance time (Jan-24 Q5)", "air resistance would increase the time taken to fall"],
  ["vacuum acceleration (Jun-21 Q7)", "the acceleration is g which has constant magnitude and direction"],
  ["flare route yes (Oct-25 01A Q17)", "greater than"],
  ["flare route no (Oct-25 01A Q17)", "cannot be seen"],
  ["four routes (Jan-26 01A Q18b)", "3.21 (s) > 3.15 (s) so yes"],
  ["energy route trap (Oct-25 01A Q10)", "by conserving energy"],
  ["vacuum chamber drop (Jun-21 Q7)", "vacuum chamber"],
];

let fail = 0;
for (const [name, q] of QUOTES) {
  const nq = norm(q);
  const hit = all.includes(nq);
  if (!hit) fail++;
  console.log(`${hit ? "pass" : "FAIL"}  ${name}`);
}
console.log(`\n${QUOTES.length - fail}/${QUOTES.length} quotes verified verbatim`);
if (fail > 0) {
  for (const c of corpus) console.log("  corpus file:", c.f);
  process.exit(1);
}
