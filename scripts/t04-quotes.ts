/* Verify every verbatim mark-scheme / examiner-report quote carried
   by the rebuilt Topic 4 note (notes-ph04-a/b/c). Two tracked
   corpora: the paper text extracts (research/wph11/txt) for printed
   mark schemes, and the digests (research/wph11/digest-*.md) for
   examiner-report lines. Whitespace, quote glyphs and the PDFs'
   mathematical-alphanumeric glyphs are normalised first. */
import { readFileSync, readdirSync } from "node:fs";

const DIRS = ["research/wph11/txt", "research/wph11"];
const files: string[] = [];
for (const d of DIRS) {
  for (const f of readdirSync(d)) {
    if (f.endsWith(".txt") || /^digest-[A-D]\.md$/.test(f)) files.push(`${d}/${f}`);
  }
}

/* fold the mathematical-alphanumeric glyphs the PDF extractions
   emit (𝑉, 𝜌, 𝟏 …) back onto their ASCII/Greek letters */
function foldMath(s: string): string {
  return s.replace(/[\u{1D400}-\u{1D7FF}]/gu, (ch) => {
    const d = ch.codePointAt(0)!;
    if (d >= 0x1d7ce) return String((d - 0x1d7ce) % 10); // digit styles
    if (d >= 0x1d6a8 && d <= 0x1d6e1) return String.fromCharCode(0x391 + (d - 0x1d6a8)); // bold Greek caps
    if (d >= 0x1d6e2 && d <= 0x1d71b) return String.fromCharCode(0x391 + (d - 0x1d6e2)); // italic Greek caps
    if (d >= 0x1d71c && d <= 0x1d755) return String.fromCharCode(0x3b1 + (d - 0x1d71c)); // italic Greek small
    const idx = d - 0x1d400;
    if (idx < 26) return String.fromCharCode(65 + idx);
    if (idx < 52) return String.fromCharCode(97 + idx - 26);
    const i2 = idx - 52;
    if (i2 < 26) return String.fromCharCode(65 + i2);
    const i3 = i2 - 26;
    if (i3 < 26) return String.fromCharCode(97 + i3);
    const i4 = i3 - 26;
    if (i4 < 26) return String.fromCharCode(65 + i4);
    const i5 = i4 - 26;
    if (i5 < 26) return String.fromCharCode(97 + i5);
    return ch;
  });
}

const norm = (s: string) =>
  foldMath(s)
    .replace(/[\u2018\u2019\u02bc]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/\u2212/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/\s+/g, " ")
    .toLowerCase();

const corpus = files.map((f) => ({ f, t: norm(readFileSync(f, "utf8")) }));
const all = corpus.map((c) => c.t).join(" \u0000 ");

const QUOTES: Array<[string, string]> = [
  /* — spec 24 — the definition (Oct-23 Q17a) — */
  ["upthrust def A (Oct-23 Q17a)", "An upwards force caused by the displacement of fluid (by an object)"],
  ["upthrust def B (Oct-23 Q17a)", "(a force equal and opposite to) the weight of fluid displaced (by an object )"],

  /* — Jan-20 Q19 balance chain — */
  ["jan19 water upthrust", "Water exerts upward force on sphere."],
  ["jan19 third law", "Sphere exerts a downwards/opposite force on water by Newton's Third Law."],
  ["jan19 balance", "Extra downward force on water (increases reading on balance)."],
  ["jan19 displaced mass", "Mass of displaced water = 150 g"],
  ["jan19 volume route", "Use of V = m/ρ for water with ρ = 1 000 kg m-3 (150 ml)"],
  ["jan19 sphere mass route", "Use of m = ρ V for sphere WITH ρ = 2 000 kg m-3"],
  ["jan19 oil upthrust", "Upthrust less in oil or weight of displaced oil less or downward force of sphere"],
  ["jan19 oil reading", "(Therefore increase in) balance reading less (than for water)."],

  /* — submarine (Jun-21 Q13) — */
  ["submarine equilibrium", "Weight of submarine is equal to the upthrust."],
  ["submarine less dense", "The upthrust (of the water on the submarine) is less than the weight of the"],
  ["submarine resultant", "A resultant force acts (downwards) on the submarine"],
  ["submarine sinks", "So the submarine will (begin to) sink (dependent on MP1)"],
  ["submarine pump answer", "Mass of water = 1 × 105 kg (pumped out)"],
  ["submarine U printed", "U = 5.9 × 107 N"],

  /* — crane chain (Jan-25 Q18b IC) — */
  ["crane IC1", "the resultant force on the submarine is zero"],
  ["crane IC2", "So tension = weight – upthrust"],
  ["crane IC3", "As the submarine leaves the water, the volume / mass / weight of water displaced decreases"],
  ["crane IC4", "So the upthrust on the submarine decreases"],
  ["crane IC5", "and the tension in the cable increases"],
  ["crane IC6", "When the submarine is out of the water the tension in the cable is equal (in magnitude) to the weight of the submarine"],

  /* — thermometer (Jun-22 Q15 IC) — */
  ["thermo IC upthrust", "Upthrust on a bulb is equal to weight of liquid displaced."],
  ["thermo IC floats", "When upthrust equals/exceeds weight of bulb / disc, bulb floats"],
  ["thermo IC weight constant", "Weight of a bulb / disc is constant"],
  ["thermo IC temp", "As temperature increases the weight of displaced liquid decreases"],
  ["thermo IC until", "Until weight of a bulb / disc exceeds the upthrust"],
  ["thermo IC sink", "There is a resultant force and bulb will sink"],

  /* — Cartesian diver (Jan-24 Q13) — */
  ["diver upthrust", "(As the volume of the air bubble decreases) the upthrust (of the bubble) decreases"],
  ["diver weight", "(So) weight is greater than upthrust."],
  ["diver resultant", "(So) there is a resultant force downwards."],
  ["diver fallback", "the density of the diver becomes greater than the density of water"],

  /* — hydrometer (Oct-24 Q16) — */
  ["hydrometer arrows", "Upwards arrow labelled upthrust or U"],
  ["hydrometer equal arrows", "Arrows of equal length"],
  ["hydrometer MS1", "The upthrust is equal to the weight of water displaced"],
  ["hydrometer MS2", "The upthrust equals the weight of the hydrometer"],
  ["hydrometer MS2b", "The upthrust is the same (in both types of water)"],
  ["hydrometer MS3", "The weight of displaced water equals the weight of the hydrometer"],
  ["hydrometer smaller volume", "(So) a smaller volume of seawater needs to be displaced (because seawater has a greater density)"],
  ["hydrometer 8 mm", "Change in vertical position = 8 mm"],

  /* — hollow cylinder (Jan-22 Q15) — */
  ["cylinder upthrust", "There is an upthrust which is equal to the weight of water displaced"],
  ["cylinder average density", "The (overall) density (of the cylinder) is less than the density of the water."],
  ["cylinder gold comparison", "Correct conclusion from comparison of displaced volume of water required to float gold (1.9 × 10−5 m3) with volume of cylinder (1.4 × 10−5 m3)"],

  /* — iceberg ER (Jun-24 Q12, digest-D) — */
  ["iceberg misconception", "There was a clear misconception demonstrated by many candidates that the iceberg would float if weight is less than upthrust, rather than floating when weight is equal to upthrust."],

  /* — weather balloon (Oct-23 Q17) — */
  ["balloon W", "W = 13.2 (N)"],
  ["balloon density 25km", "Density at 25 km = 0.05 kg m−3 (range 0.040 – 0.050 kg m-3)"],
  ["balloon volume", "Volume required at 25 km = 27 m3 (range 26 m3 to 34 m3)"],
  ["balloon conclusion", "Valid conclusion from comparison of their calculated volume with 50 m3"],

  /* — laminar flow (Oct-21 Q17a) — */
  ["laminar layers", "The layers of fluid flow past each other without mixing"],
  ["laminar fixed point", "Velocity at a fixed point (relative to the drop) remains constant"],
  ["constant speed condition", "Resultant force is zero"],
  ["constant speed condition b", "Sum of the vertical forces is zero"],
  ["balance accepted", "(Accept W − U = D or W = U + D with terms defined)"],

  /* — terminal velocity def (Jun-21 Q18a) — */
  ["terminal def", "The constant maximum velocity reached by an object falling (through a fluid)"],
  ["terminal resultant", "When the resultant force equals zero"],
  ["terminal balance", "Or when the drag plus the upthrust equals the weight"],

  /* — W = U + D wording (Jun-24 Q14a ER, digest-D) — */
  ["balance wording warning", "A statement such as 'weight = drag and upthrust' could be interpreted as meaning that weight = drag, and weight = upthrust"],
  ["balance wording sufficient", "A more mathematically accurate description of 'weight = drag + upthrust' was sufficient"],

  /* — droplet (Oct-21 Q17) — */
  ["droplet upthrust MS", "Use of upthrust = weight of fluid displaced"],
  ["droplet U", "Upthrust = 3.1 × 10−4 (N)"],
  ["droplet viscous F", "Uses upthrust and weight to determine the viscous force F"],
  ["droplet stokes use", "Use of F = 6πηrv"],
  ["droplet v", "v = 4.8 × 10−3 m s−1"],

  /* — conditions (Oct-23 Q18a) — */
  ["stokes condition 1", "Small spherical object Or Spherical object moving at low speed"],
  ["stokes condition 2", "Laminar flow [allow non-turbulent flow]"],

  /* — helium balloon (Oct-22 Q14 IC) — */
  ["balloon IC initial", "Initially there is a resultant upward force"],
  ["balloon IC accelerates", "Balloon accelerates (upwards)"],
  ["balloon IC drag", "(Downward) air resistance force, (initially zero) increases as velocity/speed increases"],
  ["balloon IC decreases", "Resultant (upward) force decreases so acceleration decreases"],
  ["balloon IC balance", "(Eventually) upthrust = weight + drag"],
  ["balloon IC terminal", "Balloon continues to move (upwards) at constant velocity"],

  /* — larger sphere (Jan-25 Q20b-ii) — */
  ["larger drag", "(For the larger sphere at the same speed) drag is greater (because drag is proportional to radius)"],
  ["larger cubed", "But upthrust and weight increase by a greater factor than drag"],
  ["larger cubed b", "Weight and upthrust are both proportional to diameter / radius cubed"],
  ["larger conclusion", "(So) the new sphere had a greater (terminal) velocity, and therefore time taken (for the new sphere) was less"],

  /* — glass spheres (Jun-21 Q18) — */
  ["glass V", "Use of V = 4π r3 / 3"],
  ["glass upthrust", "Use of upthrust U = weight of fluid displaced W"],
  ["glass rho", "Use of ρ=m / V and WS = mg"],
  ["glass D route", "Use of D = W – U"],
  ["glass D value", "D = 0.24 (N)"],
  ["d2 line", "All data points are close to the straight line through origin"],
  ["d2 consistent", "This consistent with Stokes' Law."],
  ["d2 laminar", "Stokes' Law implies laminar flow (for the spheres)"],
  ["d2 eta", "η = 99 Pa s (allow ecf from (c)(ii))"],

  /* — Stokes test (Jan-20 Q12) — */
  ["jan12 condition", "Laminar/non-turbulent flow Or Slow moving sphere"],
  ["jan12 W", "Use of W = mg"],
  ["jan12 balance", "W=U+D"],
  ["jan12 stokes", "Use of F = 6πrηv"],
  ["jan12 compare route", "Use of W = U + D to obtain quantity to compare, e.g. D = (-) 7.8 x 10-3 (N)"],
  ["jan12 conclusion", "Comparison leading to valid conclusion from candidate's calculation"],

  /* — glycerol (Jun-22 Q19) — */
  ["glycerol stokes", "Use of F = 6π η r v"],
  ["glycerol upthrust", "Use of U = weight of fluid displaced"],
  ["glycerol compare", "Comparison of F with W − U and conclusion consistent with student's values"],
  ["glycerol W", "W = 4.76 × 10−3 N"],
  ["viscosity temp CP2", "The viscosity decreases (with temperature)"],

  /* — rising bubble (Jun-23 Q16) — */
  ["bubble upthrust MS", "Use of upthrust = weight of displaced fluid"],
  ["bubble U", "U = 5.2 × 10−7 (N)"],
  ["bubble stokes", "Use of F = 6πηrv"],
  ["bubble F", "F = 1.5 × 10−7 N"],
  ["bubble conclusion", "Valid conclusion by comparison of relevant student values"],

  /* — bead (Jan-21 Q18) — */
  ["bead U", "Upthrust = 3.06 × 10−4 (N)"],
  ["bead D route", "States D = U – W"],
  ["bead stokes", "Use of F = 6πηrv"],
  ["bead v", "v = 0.16 (m s−1)"],
  ["bead vR", "Calculate vR = 0.13 (m s−1)"],
  ["bead conclusion", "Comparison of v with vR and correct conclusion"],
  ["bead laminar reason", "The flow must be laminar"],

  /* — foram (Oct-22 Q17) — */
  ["foram W", "Use of W = m g"],
  ["foram N1", "Use of Newton first law"],
  ["foram D", "6.9 × 10−8 (N)"],
  ["foram stokes", "Use of F = 6 π η r v [allow diameter for radius]"],
  ["foram v", "Terminal velocity = 5.7 × 10−3 m s−1 (ecf from (a)(i))"],
  ["foram viscosity", "Viscosity increases (with lower temperature) so drag force increases (for given velocity)"],
  ["foram density", "Density increases (with increasing depth) so upthrust increases"],
  ["foram weight", "Weight remains constant [do not accept \"mass\"]"],
  ["foram terminal", "Terminal velocity reduces (with increasing depth)"],

  /* — oil warms up (Jun-23 Q9) — */
  ["warmer oil A", "A is incorrect because viscosity decreases"],
  ["warmer oil D", "D is incorrect because weight of the ball bearing is constant"],

  /* — falling MCQ (Jun-22 Q2) — */
  ["falling B", "A is incorrect because the upthrust is constant"],
  ["falling C", "C is incorrect because the upthrust is constant and the viscous drag is increasing"],
  ["falling D", "D is incorrect because the viscous drag is increasing"],

  /* — conditions MCQ (Jun-24 Q3) — */
  ["conditions row", "A is incorrect because the object must be small and spherical, and there should be laminar flow"],
  ["conditions row B", "B is incorrect because the object must be small and there should be laminar flow"],
  ["conditions row D", "D is incorrect because the object must be spherical"],

  /* — vacuum vs oil (Oct-25 01A Q14 IC) — */
  ["vacuum gradient", "Gradient of graph is equal to acceleration"],
  ["vacuum drag 0", "In vacuum, drag = 0 (and upthrust = 0)"],
  ["vacuum constant", "so in vacuum acceleration/gradient is constant"],
  ["oil drag grows", "In oil, as speed increases, drag force increases"],
  ["oil balance", "Until in oil resultant force becomes zero"],
  ["oil balance b", "Or until weight = drag (+ upthrust)"],
  ["oil levels", "so in oil acceleration/gradient decreases to zero"],

  /* — where to start timing (Jan-21 Q7) — */
  ["timing W", "B is incorrect because the ball bearing has not reached terminal velocity at W"],
  ["timing D", "D is incorrect because the ball bearing has not reached terminal velocity at W"],

  /* — vegetable oil (Jun-25 Q16) — */
  ["oil measurement", "Mass of the ball-bearing"],
  ["oil allow weight", "Allow weight of ball-bearing"],
  ["oil allow oil mass", "Allow volume of (a known mass of) oil"],
  ["oil allow density", "Allow density of oil"],
  ["oil ignore temp", "Ignore temperature of oil"],

  /* — washing-up liquid (Oct-19 Q15) — */
  ["liquid bands", "Place two or more rubber bands or markers (on the cylinder)"],
  ["liquid top band", "The top band should be far enough below the surface for terminal velocity to have been reached"],
  ["liquid measure", "Measure time for the sphere to fall a given distance (using the stopwatch) and measure distance fallen (using the metre rule)"],
  ["liquid arrows U", "Upthrust/U up"],
  ["liquid arrows D", "Drag/friction/D up"],
  ["liquid arrows W", "Weight/W/mg down"],
  ["liquid eta", "η = 2.1 (Pa s)"],

  /* — viscometer equation terms (Oct-20 Q15b) — */
  ["terms weight", "Weight of (solid) sphere"],
  ["terms upthrust", "Weight of oil displaced (by the sphere ) Or upthrust"],
  ["terms drag", "Viscous drag or viscous force"],

  /* — errors (Oct-20 Q15b-iv) — */
  ["error temp", "The temperature (of the oil) was greater than 24 °C/had increased - do not accept temperature of the room."],
  ["error rejections", "Do not accept sphere too close to the edge of cylinder or the flow around the sphere is turbulent or densities used were incorrect"],
];

let fail = 0;
for (const [name, q] of QUOTES) {
  const nq = norm(q);
  const hit = all.includes(nq);
  if (!hit) fail++;
  console.log(`${hit ? "pass" : "FAIL"}  ${name}`);
}

console.log(`\n${fail === 0 ? "ALL PASS" : fail + " FAILURES"} — ${QUOTES.length} quotes verified verbatim`);
if (fail > 0) process.exit(1);
