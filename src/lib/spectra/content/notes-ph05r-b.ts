import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 5 rebuilt · Part B (statements 29–30)
   Register: the Topic 4 pattern with the owner's dictated rules
   (research/wph11/scenario-register-guardrails.md); one spoken
   sentence per bullet, plain verbs (never grows/shrinks), the
   owner's connectives only, no session tags in the teaching body,
   and the 2026-11-26 ruling: no em dashes and no colons in the
   teaching prose. Worked cards cite their WPH11 session; mark
   scheme wordings and examiner-report lines are quoted verbatim in
   the labelled notes and the cards' ms fields. Statements
   byte-identical to notes-ph05-b. Built from the full 2019-2026
   corpus (research/wph11/analysis/t5-elastic.md). Diagrams render
   through notes-figures-physics: the loading curve, the unloading
   line with the permanent set, the two-material comparison and the
   two-sided concrete graph.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH05R_B: SpecSection[] = [
  {
    spec: "29",
    statement:
      "a be able to draw and interpret force-extension and force-compression graphs b understand the terms limit of proportionality, elastic limit, yield point, elastic deformation and plastic deformation and be able to apply them to these graphs",
    title: "Force-extension graphs and the limit points",
    blocks: [
      {
        k: "figure",
        kind: "ph-force-extension",
        caption: "The loading curve of a wire. The straight section, the limit of proportionality, the elastic limit, the yield point, and the plastic region that ends in breaking.",
      },
      { k: "h", text: "The loading curve" },
      {
        k: "bullets",
        items: [
          "While Hooke's law is obeyed the loading curve is a straight line through the origin.",
          "The gradient of that straight section = the stiffness k.",
          "Past the straight section the curve bends towards the extension axis.",
          "A force-extension graph is read against the ==extension== axis, so the natural length must be subtracted first.",
          "Therefore, learn the name of each point on the loading curve and what happens to the wire there.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*C is the correct answer* · *A is not the correct answer as every column is wrong.* · *B is not the correct answer as the P and Q columns are the wrong way round.* · *D is not the correct answer as the Q and R columns are the wrong way round.* (WPH11 January 2020, Q9). These are the printed reasons for identifying three points on one loading curve.",
      },
      { k: "h", text: "Limit of proportionality" },
      {
        k: "bullets",
        items: [
          "The limit of proportionality is the maximum force for which the force is still proportional to the extension.",
          "Beyond it Hooke's law is no longer obeyed.",
          "On the graph it is where the line stops being straight.",
          "Therefore, the limit of proportionality is a ==limit== on the straight section, not a single special point on the curve.",
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
          "Therefore, the elastic limit is about what happens ==when the load is removed==.",
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
        text: "The multiple choice options separate the four terms in one item. *A, stress above which the material will not obey Hooke's law* is the ==limit of proportionality==, *B, stress above which the material will be deformed when the stress is removed* is the ==elastic limit==, *C, stress at which the material undergoes a sudden increase in extension* is the ==yield point==, *D, stress at which the material breaks* is the ==breaking stress== (WPH11 October 2023, Q3).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The spring does not return to its original length* is the printed answer for a spring stretched beyond its elastic limit. The printed rejections name the error in each distractor. *beyond the elastic limit force is not proportional to extension* · *plastic deformation starts occurring after the spring reaches the elastic limit* · *plastic deformation occurs beyond the elastic limit* (WPH11 January 2025, Q4).",
      },
      { k: "h", text: "Yield point" },
      {
        k: "bullets",
        items: [
          "At the yield point the material suddenly stretches a large amount more.",
          "The strain at and beyond the yield point is plastic.",
          "The definition needs ==two elements==, a large or sudden increase in strain, and that strain being plastic.",
          "Therefore, the word ==plastic== must be in every yield point definition.",
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
      {
        k: "note",
        label: "Mark scheme wording",
        text: "A copper rod is stretched and the stress-strain graph shows a point X where the strain suddenly increases. *A is incorrect because the fracture point is at the extreme end of the graph* · *B is incorrect because proportionality ends before point X is reached* · *C is incorrect because point X is not the highest point reached by the graph* (WPH11 June 2021, Q9). Point X is the ==yield point==.",
      },
      { k: "h", text: "Elastic deformation and plastic deformation" },
      {
        k: "bullets",
        items: [
          "In elastic deformation the sample returns to its original shape and size when the force is removed.",
          "In plastic deformation the sample is permanently deformed, and the extension stays when the force is removed.",
          "Below the elastic limit the deformation is elastic.\nBeyond it the deformation is plastic.",
          "Therefore, both definitions turn on what happens ==when the force is removed==.",
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
        text: "On the wire at its elastic limit, the only correct answer is A, the wire is elastically deformed. The printed reasons are *only elastic deformation occurs below the elastic limit* and *plastic deformation beyond the elastic limit increases the extension* (WPH11 October 2024, Q7).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "A wire loaded past the bend in its force-extension graph. *The wire will not return to its original length* *because it has gone beyond its elastic limit* is the printed answer, and *A is not correct because an elastically deformed wire would return to its original length when the force is removed.* (WPH11 June 2026, Q3).",
      },
      { k: "h", text: "Loading and unloading" },
      {
        k: "figure",
        kind: "ph-unloading-set",
        caption: "A spring loaded past its elastic limit and then unloaded. The unloading line has a smaller gradient because the spring constant has changed, and it stops on the extension axis at the permanent set.",
      },
      {
        k: "bullets",
        items: [
          "An object loaded past its elastic limit follows a different path when it is unloaded.",
          "The unloading line has a different gradient to the loading line, because the spring constant has changed.\nSo the spring constant is smaller after the overload.",
          "The unloading line stops on the extension axis beyond zero.\nThat leftover extension is the ==permanent set==.",
          "A spring overloaded and unloaded does not return to its original length.",
          "Therefore, the loading and unloading lines only match again when the sample never left its elastic region.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The spring constant/stiffness (not Young modulus) is smaller or has changed*, and the printed rejection is *do not allow greater stiffness* (WPH11 October 2020, Q16(a)(iii)).",
      },
      {
        k: "bullets",
        items: [
          "A rubber band that deformed elastically follows the same curve back to the origin.",
          "Its loading and unloading curves still differ, and the loop between them is the energy that heats the rubber.",
          "Say ==when== the sample returns to its original length, when the force is removed.",
          "Therefore, elastic does not mean the two curves match.\nIt means the sample ends where it started.",
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
          "A graph plotted against the ==total length== instead of the extension keeps the same shape.\nIt just starts from an extension greater than zero.",
          "Forgetting to subtract the natural length produces exactly that graph.",
          "Therefore, check what the x-axis carries before you read anything off a spring graph.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Same shape graph but starting from an extension > 0* (WPH11 October 2020, Q16(b)).",
      },
      { k: "h", text: "A graph of force against the total length" },
      {
        k: "bullets",
        items: [
          "A force-extension graph needs the extension, and the extension is the length minus the natural length.",
          "A graph of force against the ==total length== of the spring is a straight line that crosses the length axis at the natural length.",
          "Its equation is $F = k(L - L_0)$, written out as $F = kL - kL_0$.",
          "Comparing with $y = mx + c$ shows the gradient still carries the stiffness k.",
          "The area under it between two lengths p and q is the work done stretching the spring, $\\tfrac{1}{2}(q - p)R$ for a final force R.",
          "Therefore, a length-force graph has the same stiffness in its gradient and the same energy in its area, and the natural length just shifts the line sideways.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The only correct answer is C*, and the stiffness of a spring is ==the gradient== of its force-length graph. The printed rejections are *an area on this graph would represent an energy* and *it would give an answer of 1/k* (WPH11 January 2024, Q7).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*the equation describing the graph is F = k(L − L₀), which can be written as F = kL − kL₀* (WPH11 January 2024, Q7). Compare with $y = mx + c$ and the gradient is k.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "The same reading appears in June 2024. The stiffness of a spring stretched from length p to length q by a final force R is $R \\div (q - p)$ (Q5), and the work done stretching it is $\\tfrac{1}{2}(q - p)R$ (Q6) (WPH11 June 2024, Q5–Q6).",
      },
      { k: "h", text: "Force-compression graphs" },
      {
        k: "bullets",
        items: [
          "A compressive force shortens the sample, so the graph plots force against the compression.",
          "While the deformation stays elastic the compression graph is a straight line through the origin, and its gradient is k.",
          "Everything said about extension graphs applies to compression graphs with ==shortening== in place of stretching.",
          "Therefore, read a compression graph exactly like an extension graph, same gradient, same area, same energy.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The spring loaded past its elastic limit",
        question:
          "A student used the equipment shown to investigate the behaviour of a spring.\nThe student recorded the position of the spring on the metre rule for increasing loads.\nHe plotted the graph shown for the loading and unloading of the spring.\n**(a)** The student continued to increase the load until the spring exceeded the elastic limit at point L.\n**(a)(i)** State the significance of point K. (1)\n**(a)(ii)** Explain the significance of point L. (2)\n**(a)(iii)** The graph for the unloading of the spring is also shown on the axes.\nSuggest why the unloading graph has a different gradient to the loading graph. (1)\n**(b)** A second student repeated the investigation but forgot to subtract the original length of the spring from his measurements.\nSketch, on the axes below, the shape of the graph he would obtain for the loading of the spring. (1)\n**(c)** A third student repeated the investigation using two new springs connected in series as shown.\nThe springs were identical to the spring used in the original investigation.\nExplain why the spring constant for this arrangement of the springs would be half that for one spring. (4)\n*WPH11 October 2020, Q16*",
        steps: [
          "(a)(i) Point K is the limit of proportionality.\nBeyond it the force is no longer proportional to the extension, so Hooke's law is no longer obeyed.",
          "(a)(ii) Beyond L the spring behaves plastically.\nIt no longer returns to its original length when the deforming force is removed.",
          "(a)(iii) The spring constant is smaller after the overload, so the stiffness has changed.",
          "(b) The same-shaped straight line, but starting from an extension greater than zero.",
          "(c) The same force acts through both springs, and both springs have the same extension.",
          "The total extension of the combination is therefore doubled.",
          "From $F = k \\Delta x$, the force needed for the same total extension is halved.",
          "k is proportional to $1 \\div \\Delta x$, so k is halved.",
        ],
        answer: "(c) same force, doubled total extension, combined k = k ÷ 2",
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
          "A ratio of two lengths, so no unit.",
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
        caption: "A tensile stress-strain graph. The straight elastic section, the elastic limit E, the yield point Y, and the plastic region that ends at the breaking stress.",
      },
      {
        k: "bullets",
        items: [
          "A stress-strain graph plots tensile stress against tensile strain as the load increases.",
          "Stress and strain divide out the size of the sample.",
          "So every sample of the same material follows the ==same curve==, whatever its length or area.",
          "Therefore, a stress-strain graph shows the material itself, not the sample.",
        ],
      },
      { k: "h", text: "Reading the curve" },
      {
        k: "bullets",
        items: [
          "The gradient of the straight section through the origin is the Young modulus $E$.",
          "The elastic limit is the last point the sample can return from.",
          "At the yield point the strain suddenly increases by a large amount more.",
          "The breaking stress is the stress at which the sample snaps, at the end of the curve.",
          "The breaking strain is the strain at the breaking point.",
          "A graph that ends at a higher stress shows a larger breaking stress and a ==stronger== material.",
          "A graph that ends at a higher strain shows a larger breaking strain, a material that stretches further before it snaps.",
          "Therefore, compare two materials on one graph by reading their gradients, their yield points and their endpoints.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Breaking stress is the stress at the end of each line. Yield stress is at the top of the initial straight section of each line.* (WPH11 January 2024, Q9).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "Two wires are compared on one stress-strain graph. The printed reasons are *P has a smaller breaking stress than Q* · *smaller breaking strain than Q* · *graph P has an initial gradient greater than graph Q*, so the correct statement is the one about the ==yield stress== (WPH11 January 2024, Q9).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "A stress-strain graph is read up to fracture and the Young modulus is asked for. *The Young modulus is not the area under the graph* · *stress × strain is not equivalent to the Young modulus* · *the Young modulus should be stress* divided by strain (WPH11 January 2025, Q1). The answer is ==the gradient of the graph==.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "Two wires made of the same material are stretched until they break. *The second wire had a longer length* is the printed answer, because the breaking stress is the same for both (WPH11 June 2024, Q9).",
      },
      { k: "h", text: "Concrete in compression and in tension" },
      {
        k: "figure",
        kind: "ph-concrete-sides",
        caption: "A two-sided stress-strain graph for concrete. The compression side reaches about 40 MPa before fracture and the tension side only about 10 MPa.",
      },
      {
        k: "bullets",
        items: [
          "Concrete is a material often used for building.",
          "Its stress-strain graph is drawn with positive strain for compression and negative strain for tension.",
          "The compression side of the graph climbs to about 40 MPa before fracture.",
          "The tension side reaches only about 10 MPa.",
          "So concrete is far stronger under compression than under tension.",
          "Therefore, read both halves of a two-sided stress-strain graph, because the material can behave differently in each direction.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Compares ≈40 (MPa) (compression) with ≈10 (MPa) (tension)* · *Breaking/fracture/ultimate stress/force (much) greater under compression* · Or *Breaking/fracture/ultimate stress is 40 MPa under compression, and 10 MPa under tension.* (WPH11 October 2019, Q16(a)).",
      },
      { k: "h", text: "Compressive stress-strain graphs" },
      {
        k: "bullets",
        items: [
          "A compressive stress squeezes the sample, and the strain is the fractional shortening.",
          "The compressive stress-strain graph is read exactly like the tensile one.",
          "Its straight-section gradient is still the Young modulus $E$.",
          "Engineers use compressive graphs for parts designed to be squeezed, for instance a metal rod under a press.",
          "Therefore, the Young modulus out of a compressive graph is the same number the tensile test would give.",
        ],
      },
      { k: "h", text: "Comparing two materials on one graph" },
      {
        k: "figure",
        kind: "ph-two-materials",
        caption: "Two stress-strain lines from the origin. The steeper line has the larger Young modulus and breaks at a higher stress. The shallower line breaks at a larger strain.",
      },
      {
        k: "bullets",
        items: [
          "The steeper straight section has the larger Young modulus.",
          "The line ending at the higher stress has the larger breaking stress.",
          "The line ending at the larger strain has the larger breaking strain.",
          "The line reaching the top of its straight section at a higher stress has the larger yield stress.",
          "For two samples of the same shape stretched to their limits, the one that strains more at its limit stores more elastic strain energy.",
          "Therefore, name the property, point at the graph, and finish with the comparison.",
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
          "$0.79\\ \\text{mm} > 0.60\\ \\text{mm}$, so the rod compresses too much and the metal is not suitable.",
        ],
        answer: "(b)(ii) 0.79 mm > 0.60 mm, so not suitable",
        ms: {
          label: "Mark scheme",
          text: "*Material returns to original shape/size when stress/force/tension removed* · *Determines gradient using > half drawn line* · *E = 2.1 × 1011 (Pa)* · *Use of σ = F / A* · *Use of E = σ / ε Or Use of graph And Use of ε = Δx / x* · *Δx = 0.79 mm* · *Valid comparison in consistent units and conclusion* (WPH11 January 2023, Q14).",
        },
      },
      {
        k: "worked",
        title: "The titanium alloy",
        question:
          "A steadily increasing tensile force was applied to a sample of a titanium alloy.\nThe sample had an original length of 40.0 cm and diameter of 5.05 mm.\n**(a)** State a suitable measuring instrument to measure the diameter of the sample. (1)\n**(b)** The graph shows how stress varied with strain for the sample.\n**(b)(i)** Determine the Young modulus of the sample. (3)\n**(b)(ii)** The sample broke at point B.\nDetermine the force required to break the sample. (4)\n**(b)(iii)** The graph below shows a linear section of the stress-strain graph for the sample.\nShow that the area under this graph represents the work done per unit volume in stretching the sample. (3)\n**(b)(iv)** The area under any stress-strain graph represents the work done per unit volume.\nEstimate the amount of work required to break the titanium alloy sample. (4)\n*WPH11 January 2021, Q16*",
        steps: [
          "(a) A micrometer screw gauge, or a digital calliper, but not a vernier calliper.",
          "(b)(i) The gradient of the straight section, or the tangent at the origin, with a large triangle.\nThe straight section reaches 1200 MPa at a strain of 0.01.",
          "$E = \\dfrac{1200 \\times 10^6}{0.01} = 1.2 \\times 10^{11}\\ \\text{Pa}$",
          "(b)(ii) The breaking stress at point B is read from the graph.\n$\\sigma = 1280\\ \\text{MPa}$",
          "$A = \\pi r^2 = \\pi \\times (2.525 \\times 10^{-3})^2 = 2.00 \\times 10^{-5}\\ \\text{m}^2$",
          "$F = \\sigma A = 1280 \\times 10^6 \\times 2.00 \\times 10^{-5} = 2.6 \\times 10^4\\ \\text{N}$",
          "(b)(iii) The area of the linear section is a triangle.\n$\\text{area} = \\tfrac{1}{2} \\sigma \\varepsilon$",
          "Substitute $\\sigma = \\dfrac{F}{A}$ and $\\varepsilon = \\dfrac{\\Delta x}{x}$.\n$\\tfrac{1}{2} \\sigma \\varepsilon = \\dfrac{F\\Delta x}{2Ax}$",
          "Now substitute $Ax = V$, the volume of the sample, and $\\tfrac{1}{2}F\\Delta x = \\Delta W$.\n$\\dfrac{F\\Delta x}{2Ax} = \\dfrac{\\Delta W}{V}$, so the area is the work done per unit volume.",
          "(b)(iv) Count the squares under the whole curve.\nOne large square $= 200 \\times 10^6 \\times 0.01 = 2 \\times 10^6\\ \\text{J m}^{-3}$, and 31 large squares sit under the curve.",
          "The volume of the sample is $V = 0.40 \\times 2.00 \\times 10^{-5} = 8.0 \\times 10^{-6}\\ \\text{m}^3$",
          "$\\text{work} = 31 \\times 2 \\times 10^6 \\times 8.0 \\times 10^{-6} = 4.96 \\times 10^2\\ \\text{J} \\approx 500\\ \\text{J}$",
        ],
        answer: "(b)(i) $1.2 \\times 10^{11}$ Pa · (b)(ii) $2.6 \\times 10^4$ N · (b)(iv) about 500 J",
        ms: {
          label: "Mark scheme",
          text: "*Micrometer (screw gauge) Or digital (not Vernier) calliper(s)* · *Attempt to calculate gradient* · *Use of linear section, or tangent at origin, with use of large triangle* · *E = 1.2 ± 0.05 × 1011 Pa* · *Breaking stress read from graph* · *Use of A = πr2* · *Use of σ = F/A* · *F = 2.6 × 104 N* · *Use of area under graph = ½σε* · *Substitution of F = σA and Δx = εx* · *Substitution of Ax = V and ΔW = ½ FΔx* · *Calculation of area under graph by a valid method.* · *Area in range 60 to 64 (MJ m−3)* · *Calculation of volume of sample* · *Energy = 500±20 J* (WPH11 January 2021, Q16).",
        },
      },
      {
        k: "worked",
        title: "The stunt harness cable",
        question:
          "A film actor wears a harness attached to a cable. The cable hangs from a support, as shown.\n**(a)** The force on the cable must not cause the material of the cable to reach its yield point.\nState what is meant by the yield point of a material. (1)\n**(b)** The cable and harness are used to accelerate the actor vertically off the ground.\n**(b)(i)** Explain why the forces acting on the actor cause him to accelerate upwards. (2)\n**(b)(ii)** The actor has a mass of 77 kg and is lifted vertically from the ground with an acceleration of 2.1 m s⁻².\nShow that the tension in the cable is about 920 N. (3)\n**(b)(iii)** To make sure the actor is safe, the stress in the cable must be less than 15% of the yield point stress.\nThe cable has a yield point stress of $2.5 \\times 10^8$ Pa.\nThe diameter of the cable is $7.6 \\times 10^{-3}$ m.\nDeduce whether it is safe to lift the actor with an acceleration of 2.1 m s⁻². (4)\n**(c)** The original cable is replaced with a new cable made from a different material.\nThis material has a lower Young modulus than the material used to make the original cable.\nThe new cable is the same length as the original cable but has a greater diameter.\nThe breaking stress is the same for both cables.\nExplain how the work done to break the new cable is different from the work done to break the original cable. Assume that both materials obey Hooke's law up to the breaking point. (4)\n*WPH11 June 2023, Q20*",
        steps: [
          "(a) The stress value at or beyond which the material undergoes a sudden or large plastic deformation.",
          "(b)(i) The tension in the cable on the actor is greater than the actor's weight.",
          "So there is a resultant force upwards on the actor, and by Newton's second law he accelerates upwards.",
          "(b)(ii) The weight of the actor.\n$W = mg = 77 \\times 9.81 = 755\\ \\text{N}$",
          "$\\Sigma F = ma$, so $T - 755 = 77 \\times 2.1$",
          "$T = 755 + 161.7 = 917\\ \\text{N} \\approx 920\\ \\text{N}$",
          "(b)(iii) The cross-sectional area of the cable.\n$A = \\dfrac{\\pi d^2}{4} = \\dfrac{\\pi \\times (7.6 \\times 10^{-3})^2}{4} = 4.54 \\times 10^{-5}\\ \\text{m}^2$",
          "The stress at the tension found above.\n$\\sigma = \\dfrac{917}{4.54 \\times 10^{-5}} = 2.02 \\times 10^7\\ \\text{Pa}$",
          "The limit the question sets.\n$0.15 \\times 2.5 \\times 10^8 = 3.75 \\times 10^7\\ \\text{Pa}$",
          "$2.02 \\times 10^7\\ \\text{Pa} < 3.75 \\times 10^7\\ \\text{Pa}$, so it is safe to lift the actor.",
          "(c) The new cable has a greater cross-sectional area, but the breaking stress is the same, so a greater force is needed to break it.",
          "The new material has a smaller Young modulus, so for the same stress there is a greater strain.",
          "So at the breaking stress the new cable stretches a greater extension.",
          "Force and extension both increase, so the work done to break the new cable is greater than that for the original cable.",
        ],
        answer: "(b)(ii) 917 N · (b)(iii) $2.02 \\times 10^7$ Pa < $3.75 \\times 10^7$ Pa, so safe · (c) the work done to break the new cable is greater",
        ms: {
          label: "Mark scheme",
          text: "*Stress (or strain) value at/beyond which a material/object undergoes a sudden or large plastic deformation* · *weight of the actor* (the tension is greater than it) · *(So) there is a resultant/net/unbalanced force (upwards)* · *Use of W = m g* · *Use of ΣF = m a* · *Tension = 917 (N)* · *2.03 × 10⁷ Pa < 3.75 × 10⁷ Pa so it is safe.* · *New cable has a greater cross sectional area, (but same breaking stress) so a greater force is required* · *Because new cable has smaller Young modulus, there is a greater strain for the same stress* · *So (at breaking stress) there will be a greater extension* · *(And as) force and extension both increase, work done to break the new cable is greater than that for the original cable* (WPH11 June 2023, Q20).",
        },
      },
      {
        k: "worked",
        title: "The reinforced concrete",
        question:
          "Concrete is a material often used for building.\nA stress-strain graph for one type of concrete is shown. Positive values of strain represent compression and negative values of strain represent tension.\n**(a)** Explain how the stress-strain graph shows that concrete is more suitable for use under compression than under tension. (2)\n**(b)** Steel is a metal often used in building. The stress-strain graph for steel is shown.\nA steel rod has a diameter of 45 mm.\nCalculate the maximum force that could be applied to the steel rod before it fractures. (3)\n**(c)** To make concrete suitable for use under large forces steel rods are sometimes embedded in the concrete.\nAn external tensile force is applied to the steel rods. Concrete is poured into a mould around the rods. Once the concrete has set the external force is removed from the steel rods, placing the concrete in compression.\n**(c)(i)** Explain how this process increases the maximum tensile force that the concrete can withstand before fracture. (4)\n**(c)(ii)** Explain why the external tensile force in the rods must not take the steel beyond its elastic limit. (2)\n*WPH11 October 2019, Q16*",
        steps: [
          "(a) The graph climbs to about 40 MPa on the compression side and only about 10 MPa on the tension side.",
          "So the breaking stress is much greater under compression than under tension.",
          "(b) The breaking stress of the steel is read from the end of its graph.\n$\\sigma = 5.05 \\times 10^8\\ \\text{Pa}$",
          "$A = \\pi r^2 = \\pi \\times (2.25 \\times 10^{-2})^2 = 1.59 \\times 10^{-3}\\ \\text{m}^2$",
          "$F = \\sigma A = 5.05 \\times 10^8 \\times 1.59 \\times 10^{-3} = 8.0 \\times 10^5\\ \\text{N}$",
          "(c)(i) The concrete can withstand a high stress under compression.",
          "When a tensile force is applied to the set concrete, the concrete is still under compression, and the applied force first has to overcome the compression.",
          "The steel rods take some of the force, and the force causes deformation of the steel.",
          "Steel can withstand a larger tensile force, so the combination handles the tension the concrete alone cannot.",
          "(c)(ii) If the steel passed its elastic limit, the rod would not return to its original length when the force was removed.",
          "The rod would be permanently deformed, so the concrete would not be compressed as much, and the compression force would be less or gone.",
        ],
        answer: "(b) $8.0 \\times 10^5$ N · (c)(ii) a plastic rod loses the compression that protects the concrete",
        ms: {
          label: "Mark scheme",
          text: "*Compares ≈40 (MPa) (compression) with ≈10 (MPa) (tension)* · *Breaking/fracture/ultimate stress/force (much) greater under compression* · *Breaking stress = 5.00 to 5.10 (×108 Pa)* · *Use of σ = F/A* · *F = 8.0/8.1 × 105 N* · *Concrete can withstand high(er) stress/force under compression* · *The concrete remains under compression when tensile force applied. Or Applied/tensile force first has to overcome the compression* · *The steel/rods take (some of) the force/stress Or The force/stress causes deformation of the steel* · *Steel can withstand a large(r) tensile force/stress Or Steel is strong(er) under tension* · *(When force removed) the rod will not return to its original length/shape Or The rod will be permanently/plastically deformed* · *the concrete will not compress (as much) Or The compression force will be less/zero* (WPH11 October 2019, Q16).",
        },
      },
      {
        k: "worked",
        title: "The concrete samples as they dry",
        question:
          "A manufacturer of concrete carried out compression testing of cylindrical samples of concrete using the equipment shown.\nThe diagram shows stress-strain graphs, up to the fracture point, for concrete samples 2 days and 28 days after being made.\n**(a)** As the concrete dries its Young modulus increases.\nShow that the value for the Young modulus of the concrete after it has dried is at least 1.3 times greater. (4)\n**(b)** The energy absorbed before fracture by the 28-day old sample is less than the energy absorbed before fracture by the 2-day old sample.\nThe area under a stress-strain graph gives the energy absorbed per unit volume of the sample.\nThe energy absorbed before fracture by the 2-day old sample is $0.35\\ \\text{MJ m}^{-3}$.\nDetermine the percentage reduction in the energy absorbed before fracture between the 2-day old and the 28-day old samples.\nYou may assume that the volumes of the cylindrical samples are the same. (3)\n**(c)** State three ways in which the properties of the concrete have changed as it has dried. (3)\n*WPH11 January 2019, Q17*",
        steps: [
          "(a) The Young modulus is the gradient of the initial linear region of each graph.",
          "The 28-day gradient is $E_{28} = \\dfrac{140 \\times 10^6}{0.0032} = 4.38 \\times 10^{10}\\ \\text{Pa}$",
          "The 2-day gradient is $E_2 = \\dfrac{104 \\times 10^6}{0.0032} = 3.25 \\times 10^{10}\\ \\text{Pa}$",
          "$\\dfrac{E_{28}}{E_2} = \\dfrac{4.38 \\times 10^{10}}{3.25 \\times 10^{10}} = 1.35$, about 1.3 times greater.",
          "(b) The area under the 28-day graph, by counting squares or splitting it into shapes.\n$E_{28} = (\\tfrac{1}{2} \\times 80 \\times 10^6 \\times 0.0019) + (\\tfrac{1}{2} \\times (80 + 128) \\times 10^6 \\times (0.0038 - 0.0019)) + (64 \\times 10^6 \\times 0.0001 \\times 4)$",
          "$E_{28} = 76\\,000 + 197\\,600 + 25\\,600 = 299\\,200\\ \\text{J m}^{-3}$",
          "The percentage reduction.\n$\\dfrac{350\\,000 - 299\\,200}{350\\,000} \\times 100 = 14.5\\ \\%$",
          "(c) The breaking stress is greater.\nThe concrete is less flexible, it is stiffer.\nThere is a smaller plastic region, the elastic region is greater.",
        ],
        answer: "(a) 1.35 ≈ 1.3 · (b) 14.5 % (printed range 12–15 %) · (c) stronger, stiffer, smaller plastic region",
        ms: {
          label: "Mark scheme",
          text: "*Use of Young modulus = gradient (of either initial linear region of graph)* · *E28/ E2 = 1.30 to 1.40* · *Use of counting squares or approximation of the area to a series of shapes from the 28-day graph* · *Percentage reduction = 12.0 % to 15.0 %* · *The breaking stress/force is greater* · *The concrete is less flexible Or the concrete is stiffer* · *There is a smaller plastic region Or the elastic region is greater* (WPH11 January 2019, Q17).",
        },
      },
      {
        k: "worked",
        title: "The running blade",
        question:
          "The photograph shows an athlete using a running blade.\n**(a)** The value of the Young modulus for the material used to make the running blade is 19 GPa.\n**(a)(i)** State which property of the material relates to the Young modulus. (1)\n**(a)(ii)** A sample of the material has a length of 0.450 m.\nIn a laboratory test, a compressive stress of 150 MPa is applied to the sample.\nThe sample deforms elastically.\nDetermine the new length of the sample. (4)\n**(b)** The running blade is made from a single material.\nThe table shows the compressive breaking stress of three materials used to make different running blades.\nThe compressive breaking stress of glass fibre is 320 MPa, of carbon fibre 400 MPa and of hybrid fibre 340 MPa.\nThe cross-sectional area of the running blade is $8.5\\ \\text{cm}^2$. The maximum compressive force that can be applied to the running blade before it breaks is 330 kN.\nDeduce which material the running blade is made from. (3)\n*WPH11 October 2025, Q16*",
        steps: [
          "(a)(i) The stiffness of the material.",
          "(a)(ii) The strain the compressive stress produces.\n$\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{150 \\times 10^6}{19 \\times 10^9} = 7.89 \\times 10^{-3}$",
          "$\\Delta x = \\varepsilon x = 7.89 \\times 10^{-3} \\times 0.450 = 3.55 \\times 10^{-3}\\ \\text{m}$",
          "The deformation is compressive, so the sample shortens.\nnew length $= 0.450 - 0.00355 = 0.446\\ \\text{m}$",
          "(b) The compressive breaking stress of the blade.\n$\\sigma = \\dfrac{F}{A} = \\dfrac{330 \\times 10^3}{8.5 \\times 10^{-4}} = 3.88 \\times 10^8\\ \\text{Pa} = 388\\ \\text{MPa}$",
          "So $388\\ \\text{MPa}$ is closest to the carbon fibre value of 400 MPa.\nThe comparison is numerical, 388 ≈ 400.",
          "So the running blade is made from carbon fibre.",
        ],
        answer: "(a)(ii) 0.446 m · (b) 388 ≈ 400 MPa, so carbon fibre",
        ms: {
          label: "Mark scheme",
          text: "*Stiffness* · *New length = 0.446 m* · *Breaking stress of running blade = 390 Mpa* · *388 MPa ≈ 400 MPa, so the running blade is made from carbon fibre* (WPH11 October 2025, Q16).",
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
          "(c)(i) The steel line is steeper and starts from the origin, 200 GPa against 8.70 GPa.",
          "It extends to a slightly greater stress, 350 MPa against 300 MPa.",
          "(c)(ii) The samples share the same dimensions, so the greater force sits with the greater stress at the limit.\nThe force applied to the steel is slightly greater than the force applied to the spider silk.",
          "But the spider silk strains about twenty times more than the steel by its limit.",
          "So the spider silk stores the greater elastic strain energy.\nIts larger strain matters more than the steel's larger force.",
        ],
        answer: "(a) $4.9 \\times 10^{-5}$ N · (b) 25.9 m · (c)(ii) the spider silk, because its far larger strain outweighs the steel's slightly larger force",
        ms: {
          label: "Mark scheme",
          text: "*Use of A = π r2* · *Use of σ = F/A* · *4.9 × 10−5 N* · *Use of E = σ/ε* · *Use of ε = Δx/x* · *Length at limit of proportionality = 25.9 m* · *Straight line steeper than spider silk line, starting from the origin* · *Line extending to a slightly greater stress than the spider silk line* · *The force applied to the steel is (slightly) greater than that applied to the spider silk* · *The extension / strain of the spider silk is much greater than the extension / strain of the steel* · *(So) elastic strain energy of the spider silk is greater*, with the alternative route *Elastic strain energy is proportional to area under graph* · *The area under the spider silk graph is greater* (WPH11 October 2024, Q18).",
        },
      },
    ],
  },
];
