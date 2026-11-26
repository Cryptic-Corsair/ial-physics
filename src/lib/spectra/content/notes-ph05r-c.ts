import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 5 rebuilt · Part C (statements 31–32)
   Register: the Topic 4 pattern with the owner's dictated rules
   (research/wph11/scenario-register-guardrails.md); one spoken
   sentence per bullet, plain verbs (never grows/shrinks), the
   owner's connectives only, no session tags in the teaching body,
   and the 2026-11-26 ruling: no em dashes and no colons in the
   teaching prose. Worked cards cite their WPH11 session; mark
   scheme wordings and examiner-report lines are quoted verbatim in
   the labelled notes and the cards' ms fields. Statements
   byte-identical to notes-ph05-c. Built from the full 2019-2026
   corpus (research/wph11/analysis/t5-elastic.md). Diagrams render
   through notes-figures-physics: the Young modulus rig, the rubber
   band hysteresis loop and the energy strip between two forces.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH05R_C: SpecSection[] = [
  {
    spec: "31",
    statement: "CORE PRACTICAL 3: Determine the Young modulus of a material",
    title: "Core Practical 3, the Young modulus of a wire",
    blocks: [
      {
        k: "figure",
        kind: "ph-young-rig",
        caption: "The loaded-wire rig. A long thin wire clamped at the bench, a pulley and masses, a marker on the wire and a metre rule for the extension.",
      },
      { k: "h", text: "The principle" },
      {
        k: "bullets",
        items: [
          "Load a long thin wire, measure the extension for each force, and calculate $E = \\dfrac{Fx}{A \\Delta x}$.",
          "The long wire and the thin wire are chosen deliberately.",
          "A long wire stretches further for the same force, because the extension is proportional to the original length.",
          "A thin wire stretches further too, because the extension is inversely proportional to the cross-sectional area.",
          "A larger extension gives a smaller percentage uncertainty in the measurement that matters most.",
          "A long thin wire also needs only a ==small load==, which keeps the deformation elastic.",
          "Therefore, a long thin wire makes the extension measurable and keeps the loading small and elastic.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*For long(er) wire, the extension will be large(r)* · *extension is proportional to the original length* · *For a thin(ner) wire, the extension will be large(r)* · *extension is inversely proportional to cross-sectional area* · *The percentage uncertainty in the extension/length will be lower* · *A small(er) load can be used with a long/thin wire* (WPH11 June 2019, Q16(c)). These are the six printed points behind the 6-mark version of this question.",
      },
      { k: "h", text: "The measurements" },
      {
        k: "bullets",
        items: [
          "The original length x, from the clamp to the marker, with a metre rule.",
          "The diameter d, measured with a micrometer at several positions and several orientations along the wire.",
          "The mean diameter then gives the cross-sectional area, $A = \\pi d^2 \\div 4$.",
          "The extension Δx is the distance the marker moves.",
          "The force F is the weight of the masses, $F = mg$.",
          "Then plot force against extension, and $E = \\text{gradient} \\times x \\div A$.",
          "Therefore, say what each measurement ==is==, the length from the clamp to the marker and the distance the marker moves, never just 'measure the extension'.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Measure the original length (from clamp to marker)* · *Measure distance moved by marker from original position to determine extension. Or Measure new length and subtract original length* · *Calculate weight of masses using W = mg Or Use a newtonmeter* · *Use diameter to calculate cross-sectional area* · *Calculate stress using force/area and calculate strain using extension/original length (allow symbol equations if terms defined) Or plot a graph of stress against strain Or plot a graph of force against extension* · *Calculate Young Modulus using stress/strain … Or Correctly relate gradient of (straight section of) graph to Young Modulus.* (WPH11 June 2024, Q16(a)).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*descriptions of how to measure the quantities needed had a tendency to be vague. For example, it was reasonably common for candidates to 'measure the extension' without making it clear what they were actually measuring.* (WPH11 June 2024, Q16(a)).",
      },
      { k: "h", text: "The diameter readings" },
      {
        k: "bullets",
        items: [
          "Reading the diameter once is not enough.",
          "Measure at several positions along the wire, which checks the wire is uniform.",
          "Measure at several orientations, which checks the cross-section is circular.",
          "Average the readings into a mean diameter before calculating A.",
          "Therefore, a single reading is not enough for the diameter of this wire.",
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
          "A vernier scale resolves 0.1 mm, while a metre rule resolves 1 mm.",
          "The finer resolution gives a smaller percentage uncertainty in Δx.",
          "Therefore, the instrument is chosen to make the ==smallest== measurement the most certain one.",
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
          "Therefore, the stored energy in a stretched wire is the real risk in this practical.",
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
          "The force-extension graph may not start at the origin, because the first reading can sit above zero force.",
          "In that case use a ==change== in force with the matching change in extension.",
          "Use ΔF over the straight section with the matching Δx over the straight section, and the gradient is unchanged.",
          "Finish by comparing the calculated Young modulus with the printed value for the material.",
          "Therefore, a shifted origin does not change the gradient.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A large proportion of students did not notice that the graph does not start at the origin.* · *Many did not compare the value they obtained with the 106 GPa given in the table, and therefore did not score the final mark.* (WPH11 January 2024, Q17(c)).",
      },
      { k: "h", text: "Which quantities are measured directly" },
      {
        k: "bullets",
        items: [
          "A question may ask which quantities are measured ==directly== in this experiment.",
          "The diameter is measured directly, with a micrometer.",
          "The original length is measured directly, with a metre rule.",
          "The mass of the wire is never needed, and a radius cannot be measured directly on a round wire anyway.",
          "Therefore, the direct measurements are the diameter and the original length, and everything else is calculated.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*the mass is not needed* · *radius cannot be directly measured* (WPH11 January 2023, Q9). These are the printed reasons why ==diameter and original length== are the two direct measurements.",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The copper wire on the graph",
        question:
          "A student carried out an experiment to determine the Young modulus of copper.\nShe added a mass m to the free end of a sample of copper in the form of a long thin wire and the corresponding extension Δx was measured. This was repeated for increasing masses.\n**(a)** State the meaning of the term Young modulus. (1)\n**(b)** The student repeated the measurement of the diameter of the wire at different positions and orientations of the wire. She obtained the following readings.\nThe diameter readings were 0.230, 0.235, 0.230 and 0.240 mm.\n**(b)(i)** Determine the cross-sectional area of the sample of wire used. (3)\n**(b)(ii)** The student plotted a graph of m against Δx. She measured the gradient and obtained a value of $195\\ \\text{kg m}^{-1}$.\nDetermine the Young modulus of the copper.\nlength of sample of copper used $= 3.50\\ \\text{m}$ (3)\n*WPH11 January 2020, Q18*",
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
          "(a) Measure the original length x, from the clamp to the marker.",
          "Measure the distance the marker moves, and that distance is the extension Δx.",
          "Calculate the weight of each set of masses, $W = mg$, or read the force from a newtonmeter.",
          "Use the diameter to calculate the cross-sectional area A.",
          "Calculate the stress, force ÷ area, and the strain, extension ÷ original length.",
          "Calculate the Young modulus, stress ÷ strain, or take the gradient of the force-extension graph and multiply by $x \\div A$.",
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
      {
        k: "worked",
        title: "The copper wire with a marker",
        question:
          "A student carried out an experiment to determine the Young modulus of copper. She used the apparatus below to observe the position of a marker as a copper wire extended under increasing applied loads.\n**(a)** Describe how the diameter of the wire should have been determined. (3)\n**(b)** The student calculated the extension of the copper wire for each applied load. She then plotted a graph of load against extension.\nDetermine a value for the Young modulus of copper.\noriginal length of copper wire $= 2.4\\ \\text{m}$\ndiameter of copper wire $= 2.3 \\times 10^{-4}\\ \\text{m}$ (4)\n**(c)** Explain why the sample of wire used in this experiment should be long and thin. (6)\n*WPH11 June 2019, Q16*",
        steps: [
          "(a) Use a micrometer screw gauge.",
          "Measure the diameter at different positions along the wire and at different orientations.",
          "Take a mean of the readings before using it.",
          "(b) The gradient of the linear section of the load-extension graph.\nThe straight part reaches 6.8 N at an extension of $3 \\times 10^{-3}$ m.",
          "gradient $= \\dfrac{6.5}{2.9 \\times 10^{-3}} = 2.2 \\times 10^3\\ \\text{N m}^{-1}$",
          "$A = \\pi \\left(\\dfrac{d}{2}\\right)^2 = \\pi \\times (1.15 \\times 10^{-4})^2 = 4.15 \\times 10^{-8}\\ \\text{m}^2$",
          "$E = \\text{gradient} \\times \\dfrac{x}{A} = 2.2 \\times 10^3 \\times \\dfrac{2.4}{4.15 \\times 10^{-8}} = 1.27 \\times 10^{11}\\ \\text{Pa}$",
          "(c) For a longer wire the extension is larger, because the extension is proportional to the original length.",
          "For a thinner wire the extension is larger too, because the extension is inversely proportional to the cross-sectional area.",
          "A larger extension carries a smaller percentage uncertainty.",
          "A long thin wire also needs only a small load, and a small load keeps the wire inside its elastic region.",
          "So the long thin sample is the design that makes the extension both measurable and elastic.",
        ],
        answer: "(b) $1.27 \\times 10^{11}$ Pa (printed range 1.2–1.3 × 10¹¹ Pa)",
        ms: {
          label: "Mark scheme",
          text: "*Use of A = π(d/2)²* · *Calculate gradient of linear section (up to 3 × 10⁻³ m, 6.8 N) of graph Or use of a corresponding pair of points for F and Δx from the linear region* · *Use of σ = F/A and ε = Δx/l Or use of E = Fl/(AΔx) Or use of E = gradient × l/A* · *E = (1.2 – 1.3) × 10¹¹ Pa (MP4 conditional on scoring MP1 & MP2 & MP3)* · *at different orientations and/or positions along the wire*, and for (c) the six indicative points are printed in the note above (WPH11 June 2019, Q16).",
        },
      },
      {
        k: "worked",
        title: "The toffee bar and the biscuit bar",
        question:
          "A food technician investigated the material properties of a biscuit bar and a toffee bar.\nHe took some measurements for each bar and plotted the stress-strain graph shown.\n**(a)** Compare and contrast the stress-strain graph for each bar. (4)\n**(b)** State what is meant by elastic deformation. (1)\n**(c)** The food technician determined the Young modulus of the toffee bar. He used the equipment shown.\n**(c)(i)** Explain how the equipment shown should be used to determine the extension of the toffee bar for a range of masses.\nYou should include the use of a suitable piece of measuring equipment. (3)\n**(c)(ii)** The food technician plotted a force-extension graph for the toffee bar, as shown.\nDetermine the Young modulus of the toffee bar.\ncross-sectional area of toffee bar $= 1.27 \\times 10^{-4}\\ \\text{m}^2$\ninitial length of toffee bar $= 15.5\\ \\text{cm}$ (4)\n*WPH11 June 2026 01A, Q15*",
        steps: [
          "(a) The initial gradient is the same for both graphs at low strain.",
          "As the strain increases, the gradient of both graphs decreases.",
          "The gradient of the toffee graph decreases more than that of the biscuit graph.",
          "Both bars have a similar breaking stress.",
          "But the biscuit breaks at a lower strain than the toffee bar.",
          "And the toffee's stress decreases with strain after a certain point, while the biscuit's stress keeps increasing, so the area under the toffee graph at breaking is greater.",
          "(b) The material returns to its original shape and size when the stress is removed.",
          "(c)(i) Use a metre rule alongside the hanging bar.",
          "Measure the initial length, then measure the extended length with each mass added.",
          "Subtract the original length from the extended length, and that difference is the extension.",
          "(c)(ii) Read a matching pair of force and extension from the straight part of the graph.",
          "$\\sigma = \\dfrac{4.0}{1.27 \\times 10^{-4}} = 31\\,500\\ \\text{Pa}$ at $\\varepsilon = \\dfrac{0.10}{0.155} = 0.645$",
          "$E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{31\\,500}{0.645} = 48\\,800\\ \\text{Pa} \\approx 4.9 \\times 10^4\\ \\text{Pa}$",
        ],
        answer: "(c)(ii) $4.9 \\times 10^4$ Pa (printed range 4.7–5.1 × 10⁴ Pa)",
        ms: {
          label: "Mark scheme",
          text: "*Initial gradient is the same for both graphs* · *As the strain increases the gradient of the toffee graph decreases more than that of the biscuit graph* · *Both have the same/similar breaking stress* · *Biscuit breaks at a lower strain than toffee bar* · *Material returns to original shape/size/length when stress/force/tension removed* · *Use a metre rule* · *measure initial length and extended length (with mass added)* · *subtract the original length from the extended length* · *Corresponding pair of values of force and extension from* the graph · *Young modulus = 4.9 × 104 Pa* (allow answers in the range 4.7 × 104 Pa to 5.1 × 104 ) (WPH11 June 2026 01A, Q15).",
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
        note: "The first equation is printed on the data sheet. The second follows from it by substituting Hooke's law, $F = k \\Delta x$. Both give the energy stored while the deformation stays elastic.",
      },
      {
        k: "bullets",
        items: [
          "Elastic strain energy = the energy stored in a stretched or compressed sample while the deformation is elastic.",
          "The ½ appears because the force increases from zero to F while the extension increases.",
          "The average force during a straight-line stretch is $\\tfrac{1}{2} F$.",
          "So the energy = the average force × the extension, $\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x$.",
          "Stretching the same spring to twice the extension stores ==four== times the energy, because the energy is proportional to $\\Delta x^2$.",
          "The estimation of area is expected for linear ==and== non-linear force-extension graphs.",
          "Therefore, every strain-energy answer is either the triangle $\\tfrac{1}{2}F\\Delta x$ or the counted area of the graph.",
        ],
      },
      { k: "h", text: "The area under the graph" },
      {
        k: "bullets",
        items: [
          "The elastic strain energy = the area under the force-extension graph.",
          "For a straight-line graph the area is a triangle, $\\tfrac{1}{2} F \\Delta x$.",
          "For a curved graph, count the squares or split the area into triangles and trapezia.",
          "The unit of the strain energy is **J**.",
          "Therefore, use the area for curved graphs, because $\\tfrac{1}{2}F\\Delta x$ only works for a straight line.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Some candidates who answered in terms of the area under the graph... incorrectly stated that the area under the graph is equal to the elastic strain energy rather than being proportional to the elastic strain energy.* (WPH11 October 2024, Q18(c)(ii)). The printed route says ==proportional==, so word it that way when the graph is only qualitative.",
      },
      {
        k: "figure",
        kind: "ph-hysteresis-loop",
        caption: "A rubber band loaded and unloaded. The loading curve sits above the unloading curve, and the area between the two curves is the energy that heats the band.",
      },
      {
        k: "bullets",
        items: [
          "When loading and unloading curves differ, the areas differ too.",
          "The area ==between== the two curves = the energy that heated the sample.",
          "A hysteresis loop is not a straight-line case, so $\\tfrac{1}{2} F \\Delta x$ never works on it.",
          "Therefore, the heating energy is the ==loop==, not the area under either curve alone.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Some candidates incorrectly treated each line as a single straight line, and then tried to use E = ½FΔx. A lot of students did not convert the unit of extension from centimetres to metres.* (WPH11 January 2024, Q11(b)).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "A rubber band is stretched and unloaded, and areas P, Q and R are marked on the graph. The work done stretching to maximum extension is ==Q + R==, and the printed rejections are *A is incorrect because P is spurious and R is not included.* · *C is incorrect because Q is not included.* · *D is incorrect because R is not included.* (WPH11 October 2022, Q6).",
      },
      { k: "h", text: "The change in energy between two forces" },
      {
        k: "figure",
        kind: "ph-energy-strip",
        caption: "A straight force-extension line. The change in stored energy between two forces is the trapezium strip between them, with area half the sum of the two forces times the extra extension.",
      },
      {
        k: "bullets",
        items: [
          "A spring already carries a force F₁ when a second force is added on top.",
          "The energy stored = the area under the force-extension graph up to each force.",
          "The change in stored energy = the strip ==between== the two force lines, which is a trapezium.",
          "Its area is $\\tfrac{1}{2}(F_1 + F_2)\\Delta x$, with Δx the extra extension the second force causes.",
          "Substituting $\\Delta E_{\\text{el}} = \\tfrac{1}{2}F\\Delta x$ twice and subtracting gives the same strip.",
          "Therefore, when a force is ==added== to an already-loaded spring, the energy change is the strip between the two forces, never $\\tfrac{1}{2}$ of just the extra force.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "A spring carries 50 N and then 300 N more is added. The printed answer takes the mean force $\\tfrac{1}{2}(50 + 350)$ N with the extension 6 mm, and the rejections are *A is not correct because this would be the change in elastic energy if the initial force applied was 0 N* · *B is not correct because the final force on the spring is (300 + 50) N so this does not take account that the initial force on the spring was 50 N* · *D is not correct because this would be the total elastic energy of the spring* (WPH11 January 2026, Q9).",
      },
      { k: "h", text: "Energy per unit volume" },
      {
        k: "bullets",
        items: [
          "The area under a stress-strain graph = the work done per unit volume of the sample.",
          "Multiply that area by the volume of the sample and the work done on it follows.",
          "Stress × strain $= \\dfrac{F}{A} \\times \\dfrac{\\Delta x}{x} = \\dfrac{F\\Delta x}{Ax}$, and $A \\times x$ is the volume.",
          "The same idea answers an estimate of the work needed to break a sample.",
          "Therefore, a stress-strain graph gives the energy ==per unit volume==, so multiply by the volume to get joules.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Energy stored = area under graph × volume (of rope) Or Area under graph = energy stored per unit volume of rope* · *Area under graph ∝ (F/A) × (Δx/x) Or Stress × strain = (F/A) × (Δx/x)* (WPH11 January 2025, Q17(b)(ii)).",
      },
      { k: "h", text: "Why the energy is proportional to F²" },
      {
        k: "bullets",
        items: [
          "For a spring obeying Hooke's law, $\\Delta x = F \\div k$.",
          "Substitute into $\\Delta E_{\\text{el}} = \\tfrac{1}{2}F\\Delta x$.\n$\\Delta E_{\\text{el}} = \\tfrac{1}{2}F \\times \\dfrac{F}{k} = \\dfrac{F^2}{2k}$",
          "k is constant, so the stored energy is proportional to $F^2$.",
          "Double the force and the stored energy is four times as big.",
          "Therefore, the stored energy scales with the ==square== of the force.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Elastic strain energy is equal to the area under graph Or k is constant (because the gradient is constant)*. Then the area $\\tfrac{1}{2}F\\Delta x$ with $\\Delta x = F \\div k$ gives the energy as $F^2 \\div 2k$ (WPH11 October 2025, Q15(b)).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Strain energy is equal to area under force extension graph* (WPH11 June 2023, Q4). This is the printed answer for the work done extending a spring by 0.30 m, $\\tfrac{1}{2} \\times 0.30 \\times 2.5$ J.",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Elastic strain energy = 0.5 × force × extension. So extension = [2E/F].* (WPH11 January 2024, Q3). This is the printed reason why the square-rooted and inverted options are wrong.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The only correct answer is D (0.5 × 5 N × 4 m)*, and the printed rejection of the wrong options is that *energy stored is the area under the graph* (WPH11 June 2026 01A, Q6).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Apply ΔEel = ½FΔx* (WPH11 October 2021, Q3). One spring extends x under a mass m and stores E, and the second extends $\\tfrac{x}{3}$ under $2m$, so its energy is $\\tfrac{2}{3}E$.",
      },
      { k: "h", text: "Springs in series and in parallel store different energies" },
      {
        k: "bullets",
        items: [
          "Two identical springs in a line each carry the full force F, and each extends x.",
          "The total extension is 2x, so the stored energy is $\\tfrac{1}{2}F(2x) = 2 \\times \\tfrac{1}{2}Fx$, twice one spring's E.",
          "Two identical springs side by side share the force, so each carries $\\tfrac{F}{2}$ and extends $\\tfrac{x}{2}$.",
          "The stored energy is $2 \\times \\tfrac{1}{2}(\\tfrac{F}{2})(\\tfrac{x}{2}) = \\tfrac{1}{2} \\times \\tfrac{1}{2}Fx$, half one spring's E.",
          "Therefore, in series the energies add to ==more== than one spring, and in parallel they add to ==less==.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The printed answer for a series pair and a parallel pair under the same force F is 2E and ½E (WPH11 June 2022, Q7).",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The electromagnet cable",
        question:
          "The electromagnet is suspended from a support by a steel cable, as shown.\n**(b)(i)** When the object is suspended, the strain in the cable is $3.0 \\times 10^{-4}$.\nCalculate the Young modulus of the steel in the cable.\ncross-sectional area of cable $= 5.1 \\times 10^{-4}\\ \\text{m}^2$\nstiffness of cable $= 2.8 \\times 10^7\\ \\text{N m}^{-1}$ (4)\n**(b)(ii)** The force-extension graph for the steel cable is shown below. The line rises from the origin to a force equal to the total weight of the electromagnet and steel object.\nWhen the electromagnet is switched off, the steel object falls.\nA student states that \"the change in elastic strain energy stored in the cable will be transferred to the gravitational potential energy of the electromagnet\".\nDiscuss the student's statement. You should add to the force-extension graph as part of your discussion. (5)\n*WPH11 October 2023, Q16*",
        steps: [
          "(b)(i) The extension at that strain.\n$\\Delta x = \\varepsilon x = 3.0 \\times 10^{-4} \\times 3.8 = 1.14 \\times 10^{-3}\\ \\text{m}$",
          "$F = k \\Delta x = 2.8 \\times 10^7 \\times 1.14 \\times 10^{-3} = 3.19 \\times 10^4\\ \\text{N}$",
          "$\\sigma = \\dfrac{F}{A} = \\dfrac{3.19 \\times 10^4}{5.1 \\times 10^{-4}} = 6.26 \\times 10^7\\ \\text{Pa}$",
          "$E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{6.26 \\times 10^7}{3.0 \\times 10^{-4}} = 2.1 \\times 10^{11}\\ \\text{Pa}$",
          "(b)(ii) The elastic strain energy = the area under the force-extension graph.",
          "After the object falls, the cable still carries the weight of the electromagnet alone.",
          "So the change in stored energy = the area between the total-weight line and the electromagnet-weight line.",
          "The gain in gravitational potential energy = the weight of the electromagnet × the change in extension, the rectangle under the lower line.",
          "The small triangle above that rectangle makes the change in stored energy ==greater== than the gain in potential energy.",
          "So the student's statement is not quite right, and the leftover energy raises the temperature of the cable.",
        ],
        answer: "(b)(i) $2.1 \\times 10^{11}$ Pa · (b)(ii) the stored energy change is greater than the potential energy gain, and the difference heats the cable",
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
          "(a) When the force was removed the decreasing-force line returned to the origin, so the extension fell back to zero.",
          "(b) The work done in loading = the area under the loading curve.",
          "The work done by the band in unloading = the area under the unloading curve.",
          "So the heating energy = the area ==between== the two curves.",
          "Count the squares, 1 cm² of the graph $= 0.5\\ \\text{N} \\times 0.005\\ \\text{m} = 0.0025\\ \\text{J}$.",
          "The area between the curves $\\approx 19\\ \\text{cm}^2$.",
          "Energy $= 19 \\times 0.0025 = 0.048\\ \\text{J}$",
        ],
        answer: "$0.048$ J (the printed range is 0.0425 J to 0.053 J)",
        ms: {
          label: "Mark scheme",
          text: "*When the force was removed the rubber band returned to its original length. Or When the force was removed the extension was 0. Or The decreasing force line returns to the origin.* · *Indication that Eel = area under force-extension graph.* · *Uses area between graph lines to determine energy.* · *Energy = 0.048 J (allow a range from 0.0425 J to 0.053 J)* (WPH11 January 2024, Q11).",
        },
      },
      {
        k: "worked",
        title: "The brick under compression",
        question:
          "A builder uses bricks to build a wall.\nAs the wall gets taller, the force on a brick at the bottom of the wall increases.\nA force-compression graph for this brick is shown.\n**(a)** Determine the increase in elastic strain energy in the brick as the force increases from 85 N to 140 N. (3)\n**(b)** The brick undergoes elastic deformation.\nState what is meant by elastic deformation. (1)\n*WPH11 June 2025, Q15*",
        steps: [
          "(a) The energy stored = the area under the force-compression graph.",
          "At 140 N the compression is 97.5 nm, and at 85 N it is 60 nm.\n$E_{\\text{el}}(140) = \\tfrac{1}{2} \\times 140 \\times 97.5 \\times 10^{-9} = 6.83 \\times 10^{-6}\\ \\text{J}$",
          "$E_{\\text{el}}(85) = \\tfrac{1}{2} \\times 85 \\times 60 \\times 10^{-9} = 2.55 \\times 10^{-6}\\ \\text{J}$",
          "The increase is the difference of the two areas.\n$\\Delta E_{\\text{el}} = 6.83 \\times 10^{-6} - 2.55 \\times 10^{-6} = 4.3 \\times 10^{-6}\\ \\text{J}$",
          "Substituting a change in force and a change in compression straight into $\\tfrac{1}{2}F\\Delta x$ would give the wrong strip.\nUse the equation once at each force, then subtract.",
          "(b) The brick returns to its original size and shape when the force is removed.",
        ],
        answer: "(a) $4.3 \\times 10^{-6}$ J · (b) returns to its original size and shape when the force is removed",
        ms: {
          label: "Mark scheme",
          text: "*Use of Eel = ½FΔx with corresponding values of F and compression or Determines area under graph between 85 N and 140 N* · *Increase in elastic strain energy = 4.3 × 10⁻⁶ J* · *returns to its original size / shape / length when the force / stress is removed* (WPH11 June 2025, Q15).",
        },
      },
      {
        k: "worked",
        title: "The bungee jumper",
        question:
          "A student bungee-jumps from a bridge on an elastic rope.\n**(b)** The river is reached if the rope stretches to a total length of 35 m.\nDeduce whether the student reaches the river.\nmass of student $= 65\\ \\text{kg}$\noriginal rope length $= 17\\ \\text{m}$\nrope stiffness constant $= 250\\ \\text{N m}^{-1}$ (4)\n*WPH11 October 2024, Q17*",
        steps: [
          "The student falls the full 35 m, so the gravitational energy released is measured over that drop.\n$\\Delta E_{\\text{grav}} = mg\\Delta h = 65 \\times 9.81 \\times 35 = 22\\,300\\ \\text{J}$",
          "The rope stretches by $35 - 17 = 18\\ \\text{m}$.",
          "The tension at that stretch.\n$F = k\\Delta x = 250 \\times 18 = 4500\\ \\text{N}$",
          "The energy stored in the rope at that stretch.\n$\\Delta E_{\\text{el}} = \\tfrac{1}{2}F\\Delta x = 0.5 \\times 4500 \\times 18 = 40\\,500\\ \\text{J}$",
          "$40\\,500\\ \\text{J} > 22\\,300\\ \\text{J}$, so the rope cannot stretch that far on the energy available.",
          "So the student stops short of the river.",
        ],
        answer: "40 500 J > 22 300 J, so the river is not reached",
        ms: {
          label: "Mark scheme",
          text: "*Use of ΔEgrav = mgΔh* · *Use of ΔEel = ½FΔx Or F = kΔx* · *(At 35 m below bridge) ΔEgrav = 22 kJ and ΔEel = 41 kJ* · *Comparison of calculated values for ΔEgrav and ΔEel and consistent conclusion* (WPH11 October 2024, Q17(b)). And the examiner-report warning is *A very common response was from candidates who used F = kΔx with the force being the weight of the student. This approach would effectively lead to candidates finding the equilibrium position. However, this approach did score marking point 2.*",
        },
      },
      {
        k: "worked",
        title: "The climber's rope",
        question:
          "(a) The 'fall factor' is used by climbers to estimate the severity of a climbing fall and is given by\n'fall factor' = height fallen before the rope begins to stretch ÷ total unstretched length of rope\n**(a)(i)** A climber slips and falls with a 'fall factor' of 0.8 before coming to rest.\nThe energy from the fall is absorbed by the climbing rope.\nThe maximum strain in the rope is 9.0%.\nShow that the maximum force acting on the climber due to the rope is about 14 kN.\nAssume the extension of the rope is proportional to its tension.\ntotal unstretched length of rope $= 15.0\\ \\text{m}$\nmass of climber $= 71\\ \\text{kg}$ (5)\n**(a)(ii)** A new climber suggests using a longer length of rope between the loop and the climber, as this would absorb more energy after a fall.\nComment on this suggestion. (2)\n**(b)** Climbing rope manufacturers recommend that ropes are replaced after a period of use.\nThe force-extension graphs, up to the breaking point, for a one metre length of rope when new and after use are shown.\nComment on the manufacturers' recommendation. Your answer should include calculations. (6)\n*WPH11 June 2019, Q17*",
        steps: [
          "(a)(i) The height fallen before the rope begins to stretch.\n'fall factor' $0.8 = \\dfrac{h}{15.0}$, so $h = 12\\ \\text{m}$",
          "The extension at the maximum strain.\n$\\Delta x = 0.090 \\times 15.0 = 1.35\\ \\text{m}$",
          "The gravitational energy released covers the fall and the stretch.\n$\\Delta E_{\\text{grav}} = mg\\Delta h = 71 \\times 9.81 \\times (12 + 1.35) = 9298\\ \\text{J}$",
          "The rope stores that energy as elastic strain energy.\n$\\Delta E_{\\text{grav}} = E_{\\text{el}} = \\tfrac{1}{2}F\\Delta x$",
          "$9298 = \\tfrac{1}{2} \\times F \\times 1.35$, so $F_{\\text{max}} = 13\\,775\\ \\text{N} \\approx 14\\ \\text{kN}$",
          "(a)(ii) A longer rope means a longer unstretched fall, so the climber would reach a higher velocity just before the rope stretches.",
          "The deceleration as the rope stretches would then be greater, and so would the force.",
          "So the suggestion is wrong, because a longer rope absorbs the energy over a bigger drop and hits the climber harder.",
          "(b) The stored energy is the area under each force-extension graph.",
          "The new rope stores about 800 J, and the old rope about 700 J.",
          "So the old rope absorbs less energy per metre.",
          "The stiffness of each rope comes from $F = k\\Delta x$, the gradient or a tangent of its graph.",
          "The old rope is not as stiff as the new rope, because it extends more for the same force.",
          "And the old rope breaks at a smaller applied force.",
          "So the recommendation is sound, because the worn rope absorbs less energy and fails at a smaller force.",
        ],
        answer: "(a)(i) 13 775 N ≈ 14 kN · (b) the old rope stores 700 J against 800 J, is less stiff, and breaks at a smaller force",
        ms: {
          label: "Mark scheme",
          text: "*Use of fall factor = height fallen before the rope begins to stretch* · *total unstretched length of rope* · *Use of ε = Δx/x with x = 15.0 m* · *Use of ΔEgrav = mgΔh* · *Use of ΔEgrav = Eel with their Δx* · *Fmax = 14 000 (N)* · *the climber would reach a higher velocity (just before the rope stretches)* · *the climber's deceleration/force (as the rope stretches) would be greater* · *Use of area under the graph to determine the stored energy* · *Energy = 800 J (new)* · *Energy = 700 J (old)* · *The old rope would absorb/store less energy* · *Use of F = kΔx to determine k (accept gradient of a tangent)* · *The old rope is not as stiff as the new rope Or The old rope extends more* · *The old rope would break at a smaller applied force/stress* (WPH11 June 2019, Q17).",
        },
      },
      {
        k: "worked",
        title: "The toaster springs",
        question:
          "A toaster is a device used to heat a slice of bread.\nA platform in the toaster is supported by four springs. A slice of bread is placed in the toaster and a person pushes the platform downwards, stretching the springs. A hook then holds the platform in place, as shown.\n**(a)** Explain how the elastic strain energy stored by the springs compares with the work done by the person to push the platform downwards. (3)\n**(b)** The platform is supported by one spring at each corner. The 4 springs are identical.\nA person places a slice of bread of weight 0.52 N in the toaster. The weight of the bread causes the platform to move 2.1 cm downwards.\n**(b)(i)** Show that the stiffness of each spring is about 6 N m⁻¹. (3)\n**(b)(ii)** The hook exerts a downwards force of 1.2 N on the platform.\nThe toaster heats the slice of bread and then releases the hook. The springs return to their unstretched length and the bread is launched upwards.\nThe mass of the platform is negligible.\nDetermine the speed of the bread at the instant the springs return to their unstretched length. (6)\n*WPH11 January 2026, Q19*",
        steps: [
          "(a) There is some energy stored in the springs even before the person pushes, because the bread's weight has already stretched them.",
          "The total work done stretching the springs is the work done by the person plus the work done by gravity on the bread.",
          "So the total elastic strain energy stored is greater than the work done by the person alone.",
          "(b)(i) The bread's weight is shared by the four springs.\n$F = \\dfrac{0.52}{4} = 0.13\\ \\text{N}$ on each spring",
          "$\\Delta F = k\\Delta x$, so $k = \\dfrac{0.13}{0.021} = 6.2\\ \\text{N m}^{-1}$",
          "(b)(ii) With the hook holding the platform down, each spring carries the bread's weight plus its share of the hook's force.\n$F = \\dfrac{1.2 + 0.52}{4} = 0.43\\ \\text{N}$ per spring",
          "The extension of each spring.\n$\\Delta x = \\dfrac{0.43}{6.2} = 0.0695\\ \\text{m}$",
          "The energy stored in all four springs.\n$\\Delta E_{\\text{el}} = 4 \\times \\tfrac{1}{2} \\times 0.43 \\times 0.0695 = 0.0598\\ \\text{J}$",
          "The gravitational energy the bread gains as the platform rises.\n$\\Delta E_{\\text{grav}} = 0.52 \\times 0.0695 = 0.0361\\ \\text{J}$",
          "Conservation of energy gives the kinetic energy of the bread.\n$\\Delta E_k = 0.0598 - 0.0361 = 0.0237\\ \\text{J}$",
          "$m = \\dfrac{0.52}{9.81} = 0.053\\ \\text{kg}$, so $v = \\sqrt{\\dfrac{2 \\times 0.0237}{0.053}} = 0.95\\ \\text{m s}^{-1}$",
        ],
        answer: "(b)(i) 6.2 N m⁻¹ · (b)(ii) 0.95 m s⁻¹",
        ms: {
          label: "Mark scheme",
          text: "*There is some energy stored in the spring when the bread is in the toaster Or Some work is done by gravity* · *Total work done (to stretch the spring) is work done by gravity plus work done by force of the person* · *So the (total elastic strain) energy stored is greater than the work done (by the person)* · *Determines the force on each spring* · *k = 6.2 (N m−1 ) (to at least 2 significant figures)* · the speed printed as 0.95 m s⁻¹, with the show-that value giving 0.96 m s⁻¹ (WPH11 January 2026, Q19).",
        },
      },
    ],
  },
];
