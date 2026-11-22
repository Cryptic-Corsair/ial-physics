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
