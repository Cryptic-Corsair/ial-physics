import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 5 · Part C (statements 31–32)
   Built 2026-11-23 from the 2020–2024 WPH11/01 papers, mark
   schemes and examiner reports, in the owner's register: every
   line is an independent bullet, a bullet may carry at most two
   linked lines, and the Core Practical sections teach the rig,
   the measurements and the graph habits the examiner reports
   demand. Worked questions are set out the way the papers print
   them, mark-scheme wordings stay quoted verbatim (scripts/t05-
   quotes.ts), and every number is re-computed by
   scripts/t05-numbers.ts.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH05_C: SpecSection[] = [
  {
    spec: "31",
    statement: "CORE PRACTICAL 3: Determine the Young modulus of a material",
    title: "Core Practical 3 — the Young modulus of a wire",
    blocks: [
      {
        k: "figure",
        kind: "ph-young-rig",
        caption: "The loaded-wire rig — a long thin wire clamped at the bench, a pulley and masses, a marker on the wire and a metre rule for the extension.",
      },
      { k: "h", text: "The principle" },
      {
        k: "bullets",
        items: [
          "Load a long thin wire, measure the extension for each force, and calculate $E = \\dfrac{Fx}{A \\Delta x}$.",
          "The long wire and the thin wire are chosen deliberately.",
          "A long wire stretches further for the same force — the extension is proportional to the original length.",
          "A thin wire stretches further too — the extension is inversely proportional to the cross-sectional area.",
          "A larger extension gives a smaller percentage uncertainty in the measurement that matters most.",
          "A long thin wire also needs only a ==small load==, which keeps the deformation elastic.",
        ],
      },
      { k: "h", text: "The measurements" },
      {
        k: "bullets",
        items: [
          "The original length x — from the clamp to the marker, with a metre rule.",
          "The diameter d — with a micrometer, at several positions and several orientations along the wire.",
          "The mean diameter then gives the cross-sectional area, $A = \\pi d^2 \\div 4$.",
          "The extension Δx — the distance the marker moves.",
          "The force F — the weight of the masses, $F = mg$.",
          "Then plot force against extension, and $E = \\text{gradient} \\times x \\div A$.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Measure the original length (from clamp to marker)* · *Measure distance moved by marker from original position to determine extension. Or Measure new length and subtract original length* · *Calculate weight of masses using W = mg Or Use a newtonmeter* · *Use diameter to calculate cross-sectional area* · *Calculate stress using force/area and calculate strain using extension/original length (allow symbol equations if terms defined) Or plot a graph of stress against strain Or plot a graph of force against extension* · *Calculate Young Modulus using stress/strain … Or Correctly relate gradient of (straight section of) graph to Young Modulus.* (WPH11 June 2024, Q16(a)).",
      },
      { k: "h", text: "The diameter readings" },
      {
        k: "bullets",
        items: [
          "Reading the diameter once is not enough.",
          "Measure at several positions along the wire — that checks the wire is uniform.",
          "Measure at several orientations — that checks the cross-section is circular.",
          "Average the readings into a mean diameter before calculating A.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Measure (diameter) at several positions along the wire* · *Measure (diameter) at several orientations* (WPH11 January 2024, Q17(a)).",
      },
      { k: "h", text: "Why a vernier scale" },
      {
        k: "bullets",
        items: [
          "Each added mass stretches the wire a few millimetres only.",
          "A vernier scale resolves 0.1 mm — a metre rule resolves 1 mm.",
          "The finer resolution gives a smaller percentage uncertainty in Δx.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The vernier scale has a better resolution Or The vernier scale has a resolution of 0.1 mm* · *There is a smaller (percentage) uncertainty (when using the vernier scale).* (WPH11 January 2024, Q17(b)(ii)).",
      },
      { k: "h", text: "Safety" },
      {
        k: "bullets",
        items: [
          "Wear safety goggles.",
          "The wire could snap under load.",
          "Keep feet away from beneath the masses.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*(Safety) goggles should be worn* · *(Because) the wire could break.* (WPH11 January 2024, Q17(b)(i)).",
      },
      { k: "h", text: "Reading the graph" },
      {
        k: "bullets",
        items: [
          "The force-extension graph may not start at the origin — the first reading can sit above zero force.",
          "In that case use a ==change== in force with the matching change in extension.",
          "ΔF over the straight section, Δx over the straight section — the gradient is unchanged.",
          "Finish by comparing the calculated Young modulus with the printed value for the material.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A large proportion of students did not notice that the graph does not start at the origin.* · *Many did not compare the value they obtained with the 106 GPa given in the table, and therefore did not score the final mark.* (WPH11 January 2024, Q17(c)).",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The copper wire on the graph",
        question:
          "A student carried out an experiment to determine the Young modulus of copper.\nShe added a mass m to the free end of a sample of copper in the form of a long thin wire and the corresponding extension Δx was measured. This was repeated for increasing masses.\n**(a)** State the meaning of the term Young modulus. (1)\n**(b)** The student repeated the measurement of the diameter of the wire at different positions and orientations of the wire. She obtained the following results.\nDiameter / mm — 0.230, 0.235, 0.230, 0.240\n**(b)(i)** Determine the cross-sectional area of the sample of wire used. (3)\n**(b)(ii)** The student plotted a graph of m against Δx. She measured the gradient and obtained a value of $195\\ \\text{kg m}^{-1}$.\nDetermine the Young modulus of the copper.\nlength of sample of copper used $= 3.50\\ \\text{m}$ (3)\n*WPH11 January 2020, Q18*",
        steps: [
          "(a) The ratio of stress to strain for a material.",
          "(b)(i) The mean of the four readings.\n$d = \\dfrac{0.230 + 0.235 + 0.230 + 0.240}{4} = 0.234\\ \\text{mm}$",
          "$A = \\pi \\left(\\dfrac{d}{2}\\right)^2 = \\pi \\times (1.17 \\times 10^{-4})^2 = 4.30 \\times 10^{-8}\\ \\text{m}^2$",
          "(b)(ii) The gradient of the mass-extension graph is $m \\div \\Delta x$.",
          "The force on the wire is the weight of the hanging mass, $F = mg$.\nSo $E = \\text{gradient} \\times g \\times \\dfrac{x}{A}$",
          "$E = 195 \\times 9.81 \\times \\dfrac{3.50}{4.30 \\times 10^{-8}} = 1.6 \\times 10^{11}\\ \\text{Pa}$",
        ],
        answer: "(b)(i) $4.30 \\times 10^{-8}\\ \\text{m}^2$ · (b)(ii) $1.6 \\times 10^{11}$ Pa",
        ms: {
          label: "Mark scheme",
          text: "*Ratio of stress to strain (for a material). Or stress per unit strain.* · *Mean diameter = 0.234 mm (rounds to)* · *Use of A = π r2* · *A = 4.3 x 10-8 m2 or 0.043 mm2* · *Use of W = m g* · *Use of gradient = m / Δx in Young Modulus formula i.e. E = gradient × g × x /A* · *E = 1.6 × 1011 Pa* (WPH11 January 2020, Q18).",
        },
      },
      {
        k: "worked",
        title: "Describe the Young modulus experiment",
        question:
          "A student carried out an experiment to determine the Young modulus of copper.\n**(a)** The student clamped one end of a copper wire to the bench. The wire passed over a pulley and masses were added to the other end of the wire.\nA metre rule was fixed to the bench and a marker fixed to the wire, as shown.\nThe student measured the diameter of the copper wire.\nDescribe the other measurements that need to be made using this apparatus and how they will be used to determine the Young modulus of copper.\nYou should define the meanings of any symbols you use. (6)\n**(b)** Another student attaches a weight of 5.0 N to a copper wire of diameter 0.56 mm.\nCalculate the extension of the wire.\nlength of wire $= 2.5\\ \\text{m}$\nYoung modulus of copper $= 1.1 \\times 10^{11}\\ \\text{Pa}$ (4)\n*WPH11 June 2024, Q16*",
        steps: [
          "(a) Measure the original length x — from the clamp to the marker.",
          "Measure the distance the marker moves — that distance is the extension Δx.",
          "Calculate the weight of each set of masses, $W = mg$ — or read the force from a newtonmeter.",
          "Use the diameter to calculate the cross-sectional area A.",
          "Calculate the stress, force ÷ area, and the strain, extension ÷ original length.",
          "Calculate the Young modulus, stress ÷ strain — or take the gradient of the force-extension graph and multiply by $x \\div A$.",
          "(b) $A = \\pi \\left(\\dfrac{0.56 \\times 10^{-3}}{2}\\right)^2 = 2.46 \\times 10^{-7}\\ \\text{m}^2$",
          "$\\sigma = \\dfrac{5.0}{2.46 \\times 10^{-7}} = 2.03 \\times 10^7\\ \\text{Pa}$",
          "$\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{2.03 \\times 10^7}{1.1 \\times 10^{11}} = 1.85 \\times 10^{-4}$",
          "$\\Delta x = \\varepsilon x = 1.85 \\times 10^{-4} \\times 2.5 = 4.6 \\times 10^{-4}\\ \\text{m}$",
        ],
        answer: "(b) $\\Delta x = 4.6 \\times 10^{-4}\\ \\text{m}$",
        ms: {
          label: "Mark scheme (indicative content)",
          text: "*Measure the original length (from clamp to marker)* · *Measure distance moved by marker from original position to determine extension* · *Calculate weight of masses using W = mg Or Use a newtonmeter* · *Use diameter to calculate cross-sectional area* · *Calculate stress using force/area and calculate strain using extension/original length* · *Calculate Young Modulus using stress/strain … Or Correctly relate gradient of (straight section of) graph to Young Modulus.* · *Calculates cross-sectional area* · *Δx = 4.6 × 10−4 m* (WPH11 June 2024, Q16).",
        },
      },
    ],
  },
  {
    spec: "32",
    statement:
      "be able to calculate the elastic strain energy Eel in a deformed material sample, using the equation ΔEel = ½ FΔx, and from the area under the force-extension graph",
    title: "Elastic strain energy",
    blocks: [
      {
        k: "eq",
        eq: "$\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x$        $\\Delta E_{\\text{el}} = \\tfrac{1}{2} k \\Delta x^2$",
        note: "The first equation is printed on the data sheet. The second follows from it — substitute Hooke's law, $F = k \\Delta x$. Both give the energy stored while the deformation stays elastic.",
      },
      {
        k: "bullets",
        items: [
          "Elastic strain energy = the energy stored in a stretched or compressed sample while the deformation is elastic.",
          "The ½ appears because the force grows from zero to F while the extension grows.",
          "The average force during a straight-line stretch is $\\tfrac{1}{2} F$.",
          "So the energy = the average force × the extension, $\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x$.",
          "Stretching the same spring to twice the extension stores ==four== times the energy — the energy carries a $\\Delta x^2$.",
          "The estimation of area is expected for linear ==and== non-linear force-extension graphs.",
        ],
      },
      { k: "h", text: "The area under the graph" },
      {
        k: "bullets",
        items: [
          "The elastic strain energy = the area under the force-extension graph.",
          "For a straight-line graph the area is a triangle — $\\tfrac{1}{2} F \\Delta x$.",
          "For a curved graph, count the squares or split the area into triangles and trapezia.",
          "The unit of the strain energy is **J**.",
        ],
      },
      {
        k: "bullets",
        items: [
          "When loading and unloading curves differ, the areas differ too.",
          "The area ==between== the two curves = the energy that heated the sample.",
          "A hysteresis loop is not a straight-line case — never drop $\\tfrac{1}{2} F \\Delta x$ onto it.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Some candidates incorrectly treated each line as a single straight line, and then tried to use E = ½FΔx. A lot of students did not convert the unit of extension from centimetres to metres.* (WPH11 January 2024, Q11(b)).",
      },
      { k: "h", text: "From stress-strain graphs" },
      {
        k: "bullets",
        items: [
          "The area under a stress-strain graph = the work done per unit volume of the sample.",
          "Multiply that area by the volume of the sample and the work done on it follows.",
          "The same idea answers an estimate of the work needed to break a sample.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The electromagnet cable",
        question:
          "The electromagnet is suspended from a support by a steel cable, as shown.\n**(b)(i)** When the object is suspended, the strain in the cable is $3.0 \\times 10^{-4}$.\nCalculate the Young modulus of the steel in the cable.\ncross-sectional area of cable $= 5.1 \\times 10^{-4}\\ \\text{m}^2$\nstiffness of cable $= 2.8 \\times 10^7\\ \\text{N m}^{-1}$ (4)\n**(b)(ii)** The force-extension graph for the steel cable is shown below. The line rises from the origin to a force equal to the total weight of the electromagnet and steel object.\nWhen the electromagnet is switched off, the steel object falls.\nA student states that \"the change in elastic strain energy stored in the cable will be transferred to the gravitational potential energy of the electromagnet\".\nDiscuss the student's statement. You should add to the force-extension graph as part of your discussion. (5)\n*WPH11 October 2023, Q16(b)*",
        steps: [
          "(b)(i) The extension at that strain.\n$\\Delta x = \\varepsilon x = 3.0 \\times 10^{-4} \\times 3.8 = 1.14 \\times 10^{-3}\\ \\text{m}$",
          "$F = k \\Delta x = 2.8 \\times 10^7 \\times 1.14 \\times 10^{-3} = 3.19 \\times 10^4\\ \\text{N}$",
          "$\\sigma = \\dfrac{F}{A} = \\dfrac{3.19 \\times 10^4}{5.1 \\times 10^{-4}} = 6.26 \\times 10^7\\ \\text{Pa}$",
          "$E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{6.26 \\times 10^7}{3.0 \\times 10^{-4}} = 2.1 \\times 10^{11}\\ \\text{Pa}$",
          "(b)(ii) The elastic strain energy = the area under the force-extension graph.",
          "After the object falls, the cable still carries the weight of the electromagnet alone.",
          "So the change in stored energy = the area between the total-weight line and the electromagnet-weight line.",
          "The gain in gravitational potential energy = the weight of the electromagnet × the change in extension — the rectangle under the lower line.",
          "The small triangle above that rectangle makes the change in stored energy ==greater== than the gain in potential energy.",
          "So the student's statement is not quite right — the leftover raises the temperature of the cable.",
        ],
        answer: "(b)(i) $2.1 \\times 10^{11}$ Pa · (b)(ii) the stored energy change is greater than the potential energy gain — the difference heats the cable",
        ms: {
          label: "Mark scheme",
          text: "*Use of ε = Δx/x* · *Use of F = kΔx and σ = F/A* · *Use of E = σ/ε* · *E = 2.1 × 1011 Pa* · *Area under graph = elastic strain energy (can be indicated on graph)* · *Weight of electromagnet is still exerted on cable after object falls* · *So change in elastic strain energy = area under graph between total weight (of electromagnet and steel object) and weight of electromagnet* · *And change in gravitational potential energy of electromagnet is weight of electromagnet × change in extension* · *So the change in elastic strain energy stored > change in gravitational potential energy of the electromagnet* (WPH11 October 2023, Q16(b)).",
        },
      },
      {
        k: "worked",
        title: "The rubber band",
        question:
          "A student applied a force F to a rubber band. The student measured the corresponding extension, Δx, as F was increased and then decreased.\nThe graph shows how Δx varied as F was increased and then decreased.\n**(a)** State how the graph shows that the rubber band deformed elastically. (1)\n**(b)** The work done on the rubber band as F increased is greater than the work done by the rubber band as F was decreased.\nThere is a difference in these values because heating occurred.\nDetermine the energy that caused heating as F was increased and then decreased to zero. (3)\n*WPH11 January 2024, Q11*",
        steps: [
          "(a) When the force was removed the decreasing-force line returned to the origin — the extension fell back to zero.",
          "(b) The work done in loading = the area under the loading curve.",
          "The work done by the band in unloading = the area under the unloading curve.",
          "So the heating energy = the area ==between== the two curves.",
          "Count the squares — 1 cm² of the graph $= 0.5\\ \\text{N} \\times 0.005\\ \\text{m} = 0.0025\\ \\text{J}$.",
          "The area between the curves $\\approx 19\\ \\text{cm}^2$.",
          "Energy $= 19 \\times 0.0025 = 0.048\\ \\text{J}$",
        ],
        answer: "$0.048$ J (the printed range is 0.0425 J to 0.053 J)",
        ms: {
          label: "Mark scheme",
          text: "*When the force was removed the rubber band returned to its original length. Or When the force was removed the extension was 0. Or The decreasing force line returns to the origin.* · *Indication that Eel = area under force-extension graph.* · *Uses area between graph lines to determine energy.* · *Energy = 0.048 J (allow a range from 0.0425 J to 0.053 J)* (WPH11 January 2024, Q11).",
        },
      },
    ],
  },
];
