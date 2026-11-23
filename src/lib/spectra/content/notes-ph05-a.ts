import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 5 · Part A (statements 27–28)
   Built 2026-11-23 from the 2020–2024 WPH11/01 papers, mark
   schemes and examiner reports, in the owner's register: every
   line is an independent bullet, a bullet may carry at most two
   linked lines, scenario statements stand as subheadings, the
   equation comes first, the working symbols (=, ×, ÷, >, <) sit
   inside the sentences, and every quantity is named with its
   owner. The worked questions are set out the way the papers
   print them and their text is unchanged; the mark scheme and
   examiner-report wordings stay quoted verbatim (scripts/t05-
   quotes.ts; every number re-computed by scripts/t05-numbers.ts).
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH05_A: SpecSection[] = [
  {
    spec: "27",
    statement:
      "be able to use the Hooke's law equation, ΔF = kΔx, where k is the stiffness of the object",
    title: "Hooke's law and stiffness",
    blocks: [
      {
        k: "def",
        term: "Stiffness",
        text: "The stiffness k of an object = the force per unit extension it produces, $k = \\Delta F \\div \\Delta x$. The unit of k is **N m⁻¹**. The stiffness belongs to the ==object== — a longer wire of the same material has a smaller stiffness, and a thinner wire has a smaller stiffness too.",
      },
      {
        k: "eq",
        eq: "$\\Delta F = k \\Delta x$",
        note: "Hooke's law — the force needed to stretch an object is proportional to the extension it produces, up to the limit of proportionality. The specification writes ΔF and Δx — the change in the force, and the change in the length the force causes.",
      },
      {
        k: "bullets",
        items: [
          "For a spring stretched from its natural length, ΔF is just the stretching force F and Δx is just the extension.",
          "A stiffer object has a larger k — it needs more force for the same extension.",
          "A softer object has a smaller k — the same force gives it a bigger extension.",
          "$\\Delta F = k \\Delta x$ works for stretching and for compressing.",
          "A tensile force stretches the object.\nA compressive force squashes it.",
        ],
      },
      { k: "h", text: "Stiffness is a property of the object, not of the material" },
      {
        k: "bullets",
        items: [
          "Make the same wire longer and its stiffness falls.",
          "Make the same wire thinner and its stiffness falls again.",
          "The breaking stress, the density and the Young modulus are ==material properties==.",
          "Changing the length or the cross-section of the wire never changes them.",
          "So a longer wire of the same material — only the ==stiffness== changes.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because breaking stress is material property independent of dimensions* · *B is incorrect because density is material property independent of dimensions* · *D is incorrect because Young modulus is material property independent of dimensions* (WPH11 January 2021, Q5) — the printed reasons why ==stiffness== is the only property of the wire that a longer wire changes.",
      },
      { k: "h", text: "The gradient of a force-extension graph" },
      {
        k: "bullets",
        items: [
          "The gradient of a force-extension graph = the stiffness k.",
          "While Hooke's law is obeyed the graph is a straight line through the origin.\nIts gradient is the stiffness.",
          "Stiffness = the change in force ÷ the change in length, $\\Delta F \\div \\Delta x$.",
          "A graph of the ==total length== of a spring against force still has gradient k — the line just starts from the natural length instead of the origin.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because the spring constant is ΔF / Δx* (WPH11 June 2022, Q10) — the printed rejection for every stiffness answer read off an area, an inverse gradient or a single reading.",
      },
      { k: "h", text: "Springs in series" },
      {
        k: "bullets",
        items: [
          "The same force passes through every spring in the chain.",
          "Each spring stretches by its own extension.",
          "The total extension = the sum of the individual extensions.",
          "Two identical springs in series — the total extension is doubled, so the combined spring constant is ==half== that of one spring.",
          "For n identical springs in series the combined stiffness is $k \\div n$.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Same force acts through both springs* · *Both springs have the same extension* · *In this combination the (total) extension will be doubled* · *Reference to F = k∆x e.g. k is proportional to 1/∆x so k is halved* (WPH11 October 2020, Q16(c)).",
      },
      { k: "h", text: "Springs in parallel" },
      {
        k: "bullets",
        items: [
          "Springs in parallel share the load.",
          "Three identical springs carrying 2F — each spring carries $\\tfrac{2F}{3}$.",
          "Each spring then extends by $\\tfrac{2F}{3k}$ — two thirds of what one spring alone would stretch under F.",
          "The combined stiffness of n identical springs in parallel = $n \\times k$.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Twice the force for two thirds of the extension gives four thirds of the energy* — and the report adds that this item *was the only question that caused candidates significant difficulty* (WPH11 October 2022, Q8), so the parallel-spring bookkeeping is worth drilling.",
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The elastic cord on the air track",
        question:
          "An elastic cord was fixed between the end of an air track and a glider.\nThe glider was pulled to the right, giving the elastic cord an extension Δx as shown.\nThe glider was released, and it moved to the left. A light gate was used to measure the maximum velocity of the glider. This was repeated for different values of Δx.\nA student obtained the following results.\n**(a)** The principle of conservation of energy predicts that the graph should be a straight line through the origin. For the range of values of Δx used, the elastic cord obeyed Hooke's law.\n**(a)(i)** Explain this prediction. (4)\n**(a)(ii)** Determine the stiffness k of the elastic cord.\nmass of glider = 300 g (3)\n**(b)** When the glider was moved to the right by more than 0.5 m, the graph began to curve.\nExplain why the shape of the graph changed. (2)\n*WPH11 January 2020, Q17*",
        steps: [
          "(a)(i) The elastic strain energy stored in the cord.\n$E_{\\text{el}} = \\tfrac{1}{2} k \\Delta x^2$",
          "That elastic PE is transferred into kinetic energy of the glider.\n$\\tfrac{1}{2} m v^2 = \\tfrac{1}{2} k \\Delta x^2$",
          "m and k are constant, so $v \\propto \\Delta x$ — the graph is a straight line through the origin.",
          "(a)(ii) The gradient of the velocity-extension graph, from a large triangle.\ngradient $= \\dfrac{4.8 - 2.2}{0.30} = 8.67\\ \\text{s}^{-1}$",
          "From $\\tfrac{1}{2} m v^2 = \\tfrac{1}{2} k \\Delta x^2$, the gradient $= \\sqrt{k/m}$, so $k = m \\times \\text{gradient}^2$.",
          "$k = 0.30 \\times 8.67^2 = 22.6\\ \\text{N m}^{-1}$",
          "(b) Beyond 0.5 m the cord is stretched past its limit of proportionality.\nThe extension is no longer proportional to the force, so Hooke's law fails and the energy equation behind the straight line stops holding.",
        ],
        answer: "(a)(ii) k = 22.6 N m⁻¹ (the printed range is 22–26 N m⁻¹) · (b) the limit of proportionality is exceeded",
        ms: {
          label: "Mark scheme",
          text: "*Eel = ½ k Δx2* · *Use of Eel = ½ FΔx and use of F = k Δx.* · *Elastic PE is transferred into kinetic energy Or Eel = Ek* · *½ m v2 = ½ k Δx2* · *States that m and k are constant so v ∝ Δx.* · *k in range 22 – 26 N m-1* · *Limit of proportionality exceeded.* · *Extension no longer proportional to force.* (WPH11 January 2020, Q17).",
        },
      },
      {
        k: "worked",
        title: "The nylon rope in the pulley system",
        question:
          "A pulley system is used to lift a 5.00 kN load through a height of 1.50 m. The system consists of one fixed pulley and the other pulley can move. The pulleys are connected by a nylon rope, as shown.\nThe nylon rope will stretch when it is used in this way. The weight of the pulleys and the rope can be ignored, and you may assume that there is no friction in the pulleys.\nThe properties of the nylon rope are:\nYoung modulus of nylon $= 2.70\\ \\text{GPa}$\noverall length of rope before adding the load $= 6.00\\ \\text{m}$\narea of cross-section $= 3.00 \\times 10^{-4}\\ \\text{m}^2$\n**(a)** The greater the length of a rope, the smaller the stiffness of the rope.\nExplain why. (2)\n**(b)(i)** Show that the stiffness k of the nylon rope is about $1.4 \\times 10^5\\ \\text{N m}^{-1}$. (3)\n**(b)(ii)** The pulley system lifts the 5.00 kN weight at a steady rate.\nDetermine the extension of the rope while the lift is taking place. (3)\n**(b)(iii)** Calculate the work done in stretching the rope. (2)\n*WPH11 June 2021, Q17*",
        steps: [
          "(a) The greater the length of the rope, the greater the extension for a given force.",
          "Stiffness $k = F \\div \\Delta x$, so a bigger extension for the same force means a smaller stiffness.",
          "(b)(i) $E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{F/A}{\\Delta x / x}$.",
          "Rearranged, $\\dfrac{F}{\\Delta x} = \\dfrac{EA}{x}$ — and $\\dfrac{F}{\\Delta x}$ is the stiffness k.",
          "$k = \\dfrac{EA}{x} = \\dfrac{2.70 \\times 10^9 \\times 3.00 \\times 10^{-4}}{6.00} = 1.35 \\times 10^5\\ \\text{N m}^{-1} \\approx 1.4 \\times 10^5\\ \\text{N m}^{-1}$",
          "(b)(ii) The moving pulley carries the load on two rope segments, so the tension in the rope is halved.\n$F = \\dfrac{5000}{2} = 2500\\ \\text{N}$",
          "$\\Delta x = \\dfrac{F}{k} = \\dfrac{2500}{1.35 \\times 10^5} = 1.85 \\times 10^{-2}\\ \\text{m}$",
          "(b)(iii) The force grows from zero to 2500 N while the rope stretches, so the work is the area under the force-extension line.\n$\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x = \\tfrac{1}{2} \\times 2500 \\times 1.85 \\times 10^{-2} = 23.1\\ \\text{J}$",
        ],
        answer: "(b)(ii) $1.85 \\times 10^{-2}$ m · (b)(iii) 23.1 J",
        ms: {
          label: "Mark scheme",
          text: "*The greater the length of the rope, the greater the extension for a given force* · *Stiffness k = F / Δx so stiffness decreases (if extension increases).* · *k = 1.35 × 105 (N m–1)* · *Correct use of factor of 2 to calculate F or Δx* · *1.85 × 10−2 (m) (allow ecf from (i))* · *Use of ΔEel = ½ FΔx* · *ΔEel = 23.1 J (allow ecf from (ii))* (WPH11 June 2021, Q17).",
        },
      },
    ],
  },
  {
    spec: "28",
    statement:
      "understand how to use the relationships · (tensile or compressive) stress = force/cross-sectional area · (tensile or compressive) strain = change in length/original length · Young modulus = stress/strain.",
    title: "Stress, strain and the Young modulus",
    blocks: [
      {
        k: "eq",
        eq: "$\\sigma = \\dfrac{F}{A}$        $\\varepsilon = \\dfrac{\\Delta x}{x}$        $E = \\dfrac{\\sigma}{\\varepsilon}$",
        note: "Stress = the force ÷ the cross-sectional area. Strain = the change in length ÷ the original length. The Young modulus = stress ÷ strain — rearranged, $E = \\dfrac{Fx}{A \\Delta x}$. All three hold for tensile loading and for compressive loading.",
      },
      {
        k: "bullets",
        items: [
          "A tensile stress stretches the sample.\nA compressive stress squeezes it.",
          "The cross-sectional area A is calculated from the diameter, $A = \\pi d^2 \\div 4$.",
          "The unit of stress is **Pa**, which is **N m⁻²**.",
          "Strain is a ratio of two lengths, so it has ==no unit==.",
          "Strain may be left as a decimal or given as a percentage — never as a fraction.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*A ratio of two quantities with the same unit does not have a unit and may also be expressed as a percentage. Candidates should be reminded that marks are not awarded for final answers expressed as fractions.* (WPH11 June 2022, Q12(b)(i)).",
      },
      { k: "h", text: "The Young modulus" },
      {
        k: "bullets",
        items: [
          "The Young modulus = the ratio of stress to strain for a material.",
          "It is a property of the ==material==, not of the sample.",
          "A longer wire, a thinner wire, a different sample of the same metal — the Young modulus stays the same.",
          "A large Young modulus means the material needs a large stress for a small strain.",
          "The unit of the Young modulus is **Pa** — the papers print it as GPa for fibres and rope.",
          "The Young modulus of nylon is $2.70\\ \\text{GPa}$, of copper $1.1 \\times 10^{11}\\ \\text{Pa}$, of steel about $2 \\times 10^{11}\\ \\text{Pa}$.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because Young modulus is not the breaking stress of a material* · *B is incorrect because Young modulus is not the density of a material.* · *D is incorrect because Young modulus is not the elastic limit of a material* (WPH11 October 2022, Q5) — the Young modulus is ==the ratio of tensile stress to tensile strain==, and none of those.",
      },
      { k: "h", text: "The stress-strain graph while the sample is elastic" },
      {
        k: "bullets",
        items: [
          "Stress against strain is a straight line through the origin while Hooke's law holds.",
          "The gradient of that straight section = the Young modulus E.",
          "A steeper line means a larger E — the material is stiffer.",
          "The area under a stress-strain graph = the work done ==per unit volume== of the sample.",
          "Multiply that area by the volume of the sample and you get the work done on it.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because area represents work done per unit volume* · *D is incorrect because the breaking point is outside the linear region* — the Young modulus comes from ==the gradient of the tangent to the line at the origin== (WPH11 June 2022, Q4).",
      },
      { k: "h", text: "Stiffness and the Young modulus" },
      {
        k: "bullets",
        items: [
          "The stiffness of a wire and the Young modulus of its material are linked by $k = \\dfrac{EA}{x}$.",
          "The papers print this relation when they want it used — rearrange it freely, $E = \\dfrac{kx}{A}$.",
          "A longer wire of the same material and area — proportionally smaller k, the same E.",
          "A thinner wire — smaller A, so a smaller k, and still the same E.",
        ],
      },
      { k: "h", text: "Worked examples" },
      {
        k: "worked",
        title: "The stainless steel wire",
        question:
          "A student carried out an experiment to determine the Young modulus of a sample of stainless steel in the form of a wire. The student added weights to the wire and measured the corresponding extensions.\nThe wire had an unstretched length of 2.6 m. The diameter of the wire was $5.6 \\times 10^{-4}\\ \\text{m}$.\nThe student plotted a graph of weight against extension. The graph showed that the limit of proportionality was not exceeded.\n**(a)** State what is meant by the limit of proportionality. (1)\n**(b)(i)** Determine the gradient of the graph. (2)\n**(b)(ii)** Determine the Young modulus of stainless steel using your value for the gradient. (3)\n**(c)** The breaking stress for this stainless steel is known to be $480\\ \\text{MPa}$.\nDeduce whether it is safe for the student to increase the weight to 100.0 N. (3)\n*WPH11 October 2021, Q14*",
        steps: [
          "(a) The maximum force for which the force is proportional to the extension.",
          "Beyond it Hooke's law no longer applies.",
          "(b)(i) Use a large triangle on the straight line.\ngradient $= \\dfrac{37}{2.0 \\times 10^{-3}} = 18\\,500\\ \\text{N m}^{-1}$",
          "(b)(ii) $E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{F/A}{\\Delta x / x} = \\text{gradient} \\times \\dfrac{x}{A}$",
          "$A = \\pi r^2 = \\pi \\times (2.8 \\times 10^{-4})^2 = 2.46 \\times 10^{-7}\\ \\text{m}^2$",
          "$E = 1.85 \\times 10^4 \\times \\dfrac{2.6}{2.46 \\times 10^{-7}} = 1.95 \\times 10^{11}\\ \\text{Pa} \\approx 2 \\times 10^{11}\\ \\text{Pa}$",
          "(c) The stress 100.0 N would produce.\n$\\sigma = \\dfrac{100.0}{2.46 \\times 10^{-7}} = 4.1 \\times 10^8\\ \\text{Pa} = 410\\ \\text{MPa}$",
          "$410\\ \\text{MPa} < 480\\ \\text{MPa}$, so the wire holds 100.0 N — it is safe.",
        ],
        answer: "(b)(i) 18 500 N m⁻¹ · (b)(ii) $1.95 \\times 10^{11}$ Pa ≈ $2 \\times 10^{11}$ Pa · (c) 410 MPa < 480 MPa — safe",
        ms: {
          label: "Mark scheme",
          text: "*Maximum value of weight/force for which weight/force is proportional to extension Or Point beyond which Hooke's Law no longer applies* · *Use of large triangle to determine gradient* · *Gradient = 18 500 (N m−1) (sf range 18 - 19, no ue)* · *Use of A = π r2* · *Young modulus = 2 × 1011 Pa* · *Use of σ = F/A* · *Determines maximum safe load Or Determines maximum stress Or Determines minimum cross section* · *Valid conclusion by comparison with student's calculation* (WPH11 October 2021, Q14).",
        },
      },
      {
        k: "worked",
        title: "The constantan wire",
        question:
          "A student carried out an experiment to determine the Young modulus of constantan.\nThe student had a constantan wire with cross-sectional area A of $3.97 \\times 10^{-7}\\ \\text{m}^2$.\nThe unstretched length x of the wire was 4.00 m.\n**(a)** The student had enough slotted masses to apply a weight of up to 150 N to the wire.\nThe breaking stress for constantan is about $420\\ \\text{MPa}$.\nDeduce whether the wire could support a weight of 150 N. (3)\n**(b)** The student added slotted masses to the wire and determined the corresponding extensions. The student plotted a graph of force against extension, as shown.\n**(b)(i)** Show that the stiffness of the wire is about $1.3 \\times 10^4\\ \\text{N m}^{-1}$. (2)\n**(b)(ii)** The relationship between the stiffness k of the wire and the Young modulus E is given by\n$k = \\dfrac{EA}{x}$\nwhere x is the unstretched length of the wire and A is the cross-sectional area of the wire.\nDetermine a value for the Young modulus of constantan using the student's data. (2)\n*WPH11 October 2022, Q12*",
        steps: [
          "(a) The stress 150 N would produce in the wire.\n$\\sigma = \\dfrac{150}{3.97 \\times 10^{-7}} = 3.8 \\times 10^8\\ \\text{Pa}$",
          "$3.8 \\times 10^8\\ \\text{Pa} < 4.2 \\times 10^8\\ \\text{Pa}$, so the wire supports 150 N without breaking.",
          "(b)(i) The gradient of the straight section, from a large triangle.\ngradient $= \\dfrac{60}{4.6} = 13.0\\ \\text{N mm}^{-1}$",
          "$k = 13.0\\ \\text{N mm}^{-1} = 1.30 \\times 10^4\\ \\text{N m}^{-1}$",
          "(b)(ii) $E = \\dfrac{kx}{A} = \\dfrac{1.30 \\times 10^4 \\times 4.00}{3.97 \\times 10^{-7}} = 1.3 \\times 10^{11}\\ \\text{Pa}$",
        ],
        answer: "(a) 150 N gives 3.8 × 10⁸ Pa < 420 MPa — the wire holds · (b)(ii) $1.3 \\times 10^{11}$ Pa",
        ms: {
          label: "Mark scheme",
          text: "*Use of σ = F / A* · *σ = 3.8 × 108 Pa [accept N m−2]* · *Valid comparison in consistent units and conclusion* · *Determine gradient of straight line section [straight line ends at 5 mm]* · *k = 1.30 × 104 (N m−1)* · *Use of k = EA/ x* · *E = 1.3 × 1011 Pa [or N m−2]* (WPH11 October 2022, Q12).",
        },
      },
    ],
  },
];
