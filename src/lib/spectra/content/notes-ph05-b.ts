import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 5 · Part B (statements 29–30)
   Built 2026-11-23 from the 2020–2024 WPH11/01 papers, mark
   schemes and examiner reports, in the owner's register: every
   line is an independent bullet, a bullet may carry at most two
   linked lines, the definition sentences the examiners asked for
   are quoted verbatim, and every worked question is set out the
   way the paper prints it (scripts/t05-quotes.ts; every number
   re-computed by scripts/t05-numbers.ts).
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH05_B: SpecSection[] = [
  {
    spec: "29",
    statement:
      "a be able to draw and interpret force-extension and force-compression graphs b understand the terms limit of proportionality, elastic limit, yield point, elastic deformation and plastic deformation and be able to apply them to these graphs",
    title: "Force-extension graphs and the limit points",
    blocks: [
      {
        k: "figure",
        kind: "ph-force-extension",
        caption: "The loading curve of a wire — the straight section, the limit of proportionality, the elastic limit, the yield point, and the plastic region that ends in breaking.",
      },
      { k: "h", text: "The loading curve" },
      {
        k: "bullets",
        items: [
          "While Hooke's law is obeyed the loading curve is a straight line through the origin.",
          "The gradient of that straight section = the stiffness k.",
          "Past the straight section the curve bends towards the extension axis.",
          "A force-extension graph is read against the ==extension== axis, so the natural length must be subtracted first.",
        ],
      },
      { k: "h", text: "Limit of proportionality" },
      {
        k: "bullets",
        items: [
          "The limit of proportionality is the maximum force for which the force is still proportional to the extension.",
          "Beyond it Hooke's law is no longer obeyed.",
          "On the graph it is where the line stops being straight.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Maximum value of weight/force for which weight/force is proportional to extension* · Or *Point beyond which Hooke's Law no longer applies* · Or *Point beyond which graph line ceases to be straight* (WPH11 October 2021, Q14(a)).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*There was no sense of this being a limit not a single point where the extension is proportional to the force.* · *Many have confused this limit with elastic limit, and a number included definitions of both thus demonstrating that they did not understand the distinction.* (WPH11 October 2021, Q14(a)).",
      },
      { k: "h", text: "Elastic limit" },
      {
        k: "bullets",
        items: [
          "The elastic limit is the maximum force or stress the sample can take and still return to its original length when the load is removed.",
          "Beyond the elastic limit the sample is permanently deformed.",
          "The extension that remains after unloading is the ==permanent set==.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*It's the force / stress beyond which the cable does not return to its original length when the force / stress is removed* (WPH11 June 2022, Q12(a)).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Merely stating that the cable no longer behaves elastically does not tell the examiner that the candidate understands what 'elastic' means, and many candidates neglected to mention that for elastic behaviour, the return to original length occurs after the load is removed.* (WPH11 June 2022, Q12(a)).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The multiple choice options separate the four terms in one item — *A: stress above which the material will not obey Hooke's law* is the ==limit of proportionality==, *B: stress above which the material will be deformed when the stress is removed* is the ==elastic limit==, *C: stress at which the material undergoes a sudden increase in extension* is the ==yield point==, *D: stress at which the material breaks* is the ==breaking stress== (WPH11 October 2023, Q3).",
      },
      { k: "h", text: "Yield point" },
      {
        k: "bullets",
        items: [
          "At the yield point the material suddenly stretches a large amount more.",
          "The strain at and beyond the yield point is plastic.",
          "The definition needs ==two elements== — a large or sudden increase in strain, and that strain being plastic.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Stress (or strain) value at/beyond which a material/object undergoes a sudden or large plastic deformation* (WPH11 June 2023, Q20(a)).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*It seemed that very few candidates had learned this definition which needed to include two elements to score the mark, the idea of a large increase in strain and that the strain must be plastic.* (WPH11 June 2023, Q20(a)).",
      },
      { k: "h", text: "Elastic deformation and plastic deformation" },
      {
        k: "bullets",
        items: [
          "Elastic deformation — the sample returns to its original shape and size when the force is removed.",
          "Plastic deformation — the sample is permanently deformed, and the extension stays when the force is removed.",
          "Below the elastic limit the deformation is elastic.\nBeyond it the deformation is plastic.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Material returns to original shape/size when stress/force/tension removed* (WPH11 January 2023, Q14(a)).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "On the wire at its elastic limit — *the only correct answer is A (the wire is elastically deformed)*; the printed reasons are *only elastic deformation occurs below the elastic limit*, and *plastic deformation beyond the elastic limit increases the extension* (WPH11 October 2024, Q7).",
      },
      { k: "h", text: "Loading and unloading" },
      {
        k: "bullets",
        items: [
          "An object loaded past its elastic limit follows a different path when it is unloaded.",
          "The unloading line is ==parallel== to the straight part of the loading line — the spring constant has changed, and it is smaller.",
          "The unloading line meets the extension axis beyond zero — that leftover extension is the permanent set.",
          "A spring overloaded and unloaded does not return to its original length.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The spring constant/stiffness (not Young modulus) is smaller or has changed* — and the printed rejection — *do not allow greater stiffness* (WPH11 October 2020, Q16(a)(iii)).",
      },
      {
        k: "bullets",
        items: [
          "A rubber band that deformed elastically follows the same curve back to the origin.",
          "Its loading and unloading curves still differ — the loop between them is the energy that heats the rubber.",
          "Say ==when== the sample returns to its original length — when the force is removed.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*When the force was removed the rubber band returned to its original length.* · Or *When the force was removed the extension was 0.* · Or *The decreasing force line returns to the origin.* (WPH11 January 2024, Q11(a)).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Most students realised that the rubber band returned to its original length, but it was very common for students to fail to state that this occurs when the force is removed.* (WPH11 January 2024, Q11(a)).",
      },
      {
        k: "bullets",
        items: [
          "A graph plotted against the ==total length== instead of the extension keeps the same shape — it just starts from an extension greater than zero.",
          "Forgetting to subtract the natural length produces exactly that graph.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Same shape graph but starting from an extension > 0* (WPH11 October 2020, Q16(b)).",
      },
      { k: "h", text: "Force-compression graphs" },
      {
        k: "bullets",
        items: [
          "A compressive force shortens the sample — the graph plots force against the compression.",
          "While the deformation stays elastic the compression graph is a straight line through the origin, and its gradient is k.",
          "Everything said about extension graphs applies to compression graphs with ==shortening== in place of stretching.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The spring loaded past its elastic limit",
        question:
          "A student used the equipment shown to investigate the behaviour of a spring.\nThe student recorded the position of the spring on the metre rule for increasing loads.\nHe plotted the graph shown for the loading and unloading of the spring.\n**(a)** The student continued to increase the load until the spring exceeded the elastic limit at point L.\n**(a)(i)** State the significance of point K. (1)\n**(a)(ii)** Explain the significance of point L. (2)\n**(a)(iii)** The graph for the unloading of the spring is also shown on the axes.\nSuggest why the unloading graph has a different gradient to the loading graph. (1)\n**(b)** A second student repeated the investigation but forgot to subtract the original length of the spring from his measurements.\nSketch, on the axes below, the shape of the graph he would obtain for the loading of the spring. (1)\n**(c)** A third student repeated the investigation using two new springs connected in series as shown.\nThe springs were identical to the spring used in the original investigation.\nExplain why the spring constant for this arrangement of the springs would be half that for one spring. (4)\n*WPH11 October 2020, Q16*",
        steps: [
          "(a)(i) Point K is the limit of proportionality.\nBeyond it the force is no longer proportional to the extension — Hooke's law is no longer obeyed.",
          "(a)(ii) Beyond L the spring behaves plastically.\nIt no longer returns to its original length when the deforming force is removed.",
          "(a)(iii) The spring constant is smaller after the overload — the stiffness has changed.",
          "(b) The same-shaped straight line, but starting from an extension greater than zero.",
          "(c) The same force acts through both springs, and both springs have the same extension.",
          "The total extension of the combination is therefore doubled.",
          "From $F = k \\Delta x$, the force needed for the same total extension is halved.",
          "k is proportional to $1 \\div \\Delta x$, so k is halved.",
        ],
        answer: "(c) same force, doubled total extension — combined k = k ÷ 2",
        ms: {
          label: "Mark scheme",
          text: "*Point K is the limit of proportionality* · *beyond K, the force is no longer proportional to the extension Or Hooke's Law no longer obeyed* · *Beyond point L the spring will behave plastically* · *Beyond L, the spring will no longer return to its original length (once the deforming force is removed)/spring will be permanently deformed* · *The spring constant/stiffness (not Young modulus) is smaller or has changed* · *Same shape graph but starting from an extension > 0* · *Same force acts through both springs* · *Both springs have the same extension* · *In this combination the (total) extension will be doubled* · *Reference to F = k∆x e.g. k is proportional to 1/∆x so k is halved* (WPH11 October 2020, Q16).",
        },
      },
      {
        k: "worked",
        title: "The steel cable at its elastic limit",
        question:
          "When an increasing force is applied to a steel cable it will eventually reach its elastic limit.\n**(a)** State what is meant by the elastic limit. (1)\n**(b)** The elastic limit of a steel cable was reached when a force of $13.4 \\times 10^6\\ \\text{N}$ was applied. The extension of the cable was 0.126 m.\nlength of cable $= 6.00\\ \\text{m}$\ncross-sectional area of cable $= 9.60 \\times 10^{-3}\\ \\text{m}^2$\n**(b)(i)** Calculate the strain of the cable at its elastic limit. (2)\n**(b)(ii)** Calculate the stress in the cable at its elastic limit. (2)\n*WPH11 June 2022, Q12*",
        steps: [
          "(a) The stress beyond which the cable does not return to its original length when the stress is removed.",
          "(b)(i) $\\varepsilon = \\dfrac{\\Delta x}{x} = \\dfrac{0.126}{6.00} = 0.021$",
          "A ratio of two lengths — no unit.",
          "(b)(ii) $\\sigma = \\dfrac{F}{A} = \\dfrac{13.4 \\times 10^6}{9.60 \\times 10^{-3}} = 1.4 \\times 10^9\\ \\text{Pa}$",
        ],
        answer: "(b)(i) 0.021 · (b)(ii) $1.4 \\times 10^9$ Pa",
        ms: {
          label: "Mark scheme",
          text: "*It's the force / stress beyond which the cable does not return to its original length when the force / stress is removed* · *Use of ε = Δx/x* · *ε = 0.021* · *Use of σ = F/A* · *σ = 1.4 × 109 Pa* (WPH11 June 2022, Q12).",
        },
      },
    ],
  },
  {
    spec: "30",
    statement:
      "be able to draw and interpret tensile or compressive stress-strain graphs, and understand the term breaking stress",
    title: "Stress-strain graphs and breaking stress",
    blocks: [
      {
        k: "figure",
        kind: "ph-stress-strain",
        caption: "A tensile stress-strain graph — the straight elastic section, the elastic limit E, the yield point Y, and the plastic region that ends at the breaking stress.",
      },
      {
        k: "bullets",
        items: [
          "A stress-strain graph plots tensile stress against tensile strain as the load increases.",
          "Stress and strain divide out the size of the sample.",
          "So every sample of the same material follows the ==same curve==, whatever its length or area.",
        ],
      },
      { k: "h", text: "Reading the curve" },
      {
        k: "bullets",
        items: [
          "The straight section through the origin — its gradient is the Young modulus $E$.",
          "The elastic limit — the last point the sample can return from.",
          "The yield point — where the strain suddenly increases by a large amount more.",
          "The breaking stress — the stress at which the sample snaps, at the end of the curve.",
          "The breaking strain — the strain at the breaking point.",
          "A graph that ends at a higher stress — a larger breaking stress, a ==stronger== material.",
          "A graph that ends at a higher strain — a larger breaking strain, a material that stretches further before it snaps.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Breaking stress is the stress at the end of each line. Yield stress is at the top of the initial straight section of each line.* (WPH11 January 2024, Q9).",
      },
      { k: "h", text: "Compressive stress-strain graphs" },
      {
        k: "bullets",
        items: [
          "A compressive stress squeezes the sample, and the strain is the fractional shortening.",
          "The compressive stress-strain graph is read exactly like the tensile one.",
          "Its straight-section gradient is still the Young modulus $E$.",
          "Engineers use compressive graphs for parts designed to be squeezed — a metal rod under a press, for instance.",
        ],
      },
      { k: "h", text: "Comparing two materials on one graph" },
      {
        k: "bullets",
        items: [
          "The steeper straight section has the larger Young modulus.",
          "The line ending at the higher stress has the larger breaking stress.",
          "The line ending at the larger strain has the larger breaking strain.",
          "The line reaching the top of its straight section at a higher stress has the larger yield stress.",
          "Two samples of the same shape stretched to their limits — the one that strains more at its limit stores more elastic strain energy.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The metal rod under compression",
        question:
          "An engineer is designing a metal part for a machine. The part is in the form of a cylindrical rod. The part is designed to behave elastically when compressive forces are applied, as shown.\n**(a)** State what is meant by elastic deformation. (1)\n**(b)** A compressive stress-strain graph for one metal is shown.\n**(b)(i)** Show that the Young modulus for this metal is about $2 \\times 10^{11}\\ \\text{Pa}$. (2)\n**(b)(ii)** The metal part must not compress more than 0.60 mm when a force of $9.5 \\times 10^5\\ \\text{N}$ is applied.\nDeduce whether this metal is suitable for the part.\nlength of part $= 0.84\\ \\text{m}$\ncross-sectional area of part $= 4.8 \\times 10^{-3}\\ \\text{m}^2$ (4)\n*WPH11 January 2023, Q14*",
        steps: [
          "(a) The material returns to its original shape and size when the stress is removed.",
          "(b)(i) The gradient of the straight section, using more than half the drawn line.\ngradient $= \\dfrac{4.2 \\times 10^8}{2.0 \\times 10^{-3}} = 2.1 \\times 10^{11}\\ \\text{Pa}$",
          "(b)(ii) The compressive stress under the force.\n$\\sigma = \\dfrac{F}{A} = \\dfrac{9.5 \\times 10^5}{4.8 \\times 10^{-3}} = 1.98 \\times 10^8\\ \\text{Pa}$",
          "The strain that stress produces.\n$\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{1.98 \\times 10^8}{2.1 \\times 10^{11}} = 9.42 \\times 10^{-4}$",
          "$\\Delta x = \\varepsilon x = 9.42 \\times 10^{-4} \\times 0.84 = 7.9 \\times 10^{-4}\\ \\text{m} = 0.79\\ \\text{mm}$",
          "$0.79\\ \\text{mm} > 0.60\\ \\text{mm}$, so the rod compresses too much — the metal is not suitable.",
        ],
        answer: "(b)(ii) 0.79 mm > 0.60 mm — not suitable",
        ms: {
          label: "Mark scheme",
          text: "*Material returns to original shape/size when stress/force/tension removed* · *Determines gradient using > half drawn line* · *E = 2.1 × 1011 (Pa)* · *Use of σ = F / A* · *Use of E = σ / ε Or Use of graph And Use of ε = Δx / x* · *Δx = 0.79 mm* · *Valid comparison in consistent units and conclusion* (WPH11 January 2023, Q14).",
        },
      },
      {
        k: "worked",
        title: "The spider silk and the steel",
        question:
          "Some spiders form silk in long, thin threads to catch flying insects.\nThe Darwin's bark spider can produce very long threads. A scientist investigated the properties of these threads.\nThe scientist applied forces to stretch threads of spider silk.\n**(a)** The stress in one thread was 4.3 MPa. The radius of the thread was $1.9 \\times 10^{-6}\\ \\text{m}$.\nCalculate the force applied to the thread. (3)\n**(b)** The scientist investigated a thread of length 25.0 m.\nDetermine the length of this thread when stretched to its limit of proportionality.\nYoung modulus of spider silk $= 8.70\\ \\text{GPa}$\nstress at limit of proportionality $= 300\\ \\text{MPa}$ (4)\n**(c)(i)** The sketch graph shows the stress-strain relationship for the spider silk up to its limit of proportionality.\nAdd a line to the sketch graph to show the stress-strain relationship for the steel up to its limit of proportionality.\nYoung modulus of steel $= 200\\ \\text{GPa}$, stress at limit of proportionality of steel $= 350\\ \\text{MPa}$ (2)\n**(c)(ii)** A sample of the steel has the same shape, length and cross-sectional area as a sample of the spider silk.\nEach sample is stretched to its limit of proportionality.\nExplain which sample has the greater elastic strain energy. (3)\n*WPH11 October 2024, Q18*",
        steps: [
          "(a) $A = \\pi r^2 = \\pi \\times (1.9 \\times 10^{-6})^2 = 1.13 \\times 10^{-11}\\ \\text{m}^2$",
          "$F = \\sigma A = 4.3 \\times 10^6 \\times 1.13 \\times 10^{-11} = 4.9 \\times 10^{-5}\\ \\text{N}$",
          "(b) The strain at the limit of proportionality.\n$\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{300 \\times 10^6}{8.70 \\times 10^9} = 3.45 \\times 10^{-2}$",
          "$\\Delta x = \\varepsilon x = 3.45 \\times 10^{-2} \\times 25.0 = 0.86\\ \\text{m}$",
          "The stretched length = the original length + the extension.\n$L = 25.0 + 0.86 = 25.9\\ \\text{m}$",
          "(c)(i) The steel line is steeper and starts from the origin — 200 GPa against 8.70 GPa.",
          "It extends to a slightly greater stress — 350 MPa against 300 MPa.",
          "(c)(ii) The samples share the same dimensions, so the greater force sits with the greater stress at the limit.\nThe force applied to the steel is slightly greater than the force applied to the spider silk.",
          "But the spider silk strains about twenty times more than the steel by its limit.",
          "So the spider silk stores the greater elastic strain energy — the strain wins over the force.",
        ],
        answer: "(a) $4.9 \\times 10^{-5}$ N · (b) 25.9 m · (c)(ii) the spider silk — its far larger strain outweighs the steel's slightly larger force",
        ms: {
          label: "Mark scheme",
          text: "*Use of A = π r2* · *Use of σ = F/A* · *4.9 × 10−5 N* · *Use of E = σ/ε* · *Use of ε = Δx/x* · *Length at limit of proportionality = 25.9 m* · *Straight line steeper than spider silk line, starting from the origin* · *Line extending to a slightly greater stress than the spider silk line* · *The force applied to the steel is (slightly) greater than that applied to the spider silk* · *The extension / strain of the spider silk is much greater than the extension / strain of the steel* · *(So) elastic strain energy of the spider silk is greater* — with the alternative route *Elastic strain energy is proportional to area under graph* · *The area under the spider silk graph is greater* (WPH11 October 2024, Q18).",
        },
      },
    ],
  },
];
