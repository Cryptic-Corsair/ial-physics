import type { SpecSection } from "../notes-types";

/* ═══════════════════════════════════════════════════════════════
   WPH11 · Topic 5 rebuilt · Part A (statements 27–28)
   Register: the Topic 4 pattern with the owner's dictated rules
   (research/wph11/scenario-register-guardrails.md); sections named
   after the situation, the situation then the law then what
   follows, one spoken sentence per bullet, plain verbs (never
   grows/shrinks, always increases, decreases, reduces), the
   owner's connectives only, no session tags in the teaching body,
   and the 2026-11-26 ruling: no em dashes and no colons in the
   teaching prose. Worked cards cite their WPH11 session; mark
   scheme wordings and examiner-report lines are quoted verbatim in
   the labelled notes and the cards' ms fields. Statements
   byte-identical to notes-ph05-a. Built from the full 2019-2026
   corpus (research/wph11/analysis/t5-elastic.md). Diagrams render
   through notes-figures-physics: the series/parallel spring pair
   and the stress-strain curve.
   ═══════════════════════════════════════════════════════════════ */

export const SECTIONS_PH05R_A: SpecSection[] = [
  {
    spec: "27",
    statement:
      "be able to use the Hooke's law equation, ΔF = kΔx, where k is the stiffness of the object",
    title: "Hooke's law and stiffness",
    blocks: [
      {
        k: "def",
        term: "Stiffness",
        text: "The stiffness k of an object = the force per unit extension it produces, $k = \\Delta F \\div \\Delta x$. The unit of k is **N m⁻¹**. The stiffness belongs to the ==object==. A longer wire of the same material has a smaller stiffness, and a thinner wire has a smaller stiffness too.",
      },
      {
        k: "eq",
        eq: "$\\Delta F = k \\Delta x$",
        note: "Hooke's law says the force needed to stretch an object is proportional to the extension it produces, up to the limit of proportionality. The specification writes ΔF and Δx. ΔF is the change in the force, and Δx is the change in the length the force causes.",
      },
      {
        k: "bullets",
        items: [
          "For a spring stretched from its natural length, ΔF is just the stretching force F and Δx is just the extension.",
          "A stiffer object has a larger k, so it needs more force for the same extension.",
          "A softer object has a smaller k, so the same force gives it a bigger extension.",
          "$\\Delta F = k \\Delta x$ works for stretching and for compressing.",
          "A tensile force stretches the object.\nA compressive force squashes it.",
        ],
      },
      { k: "h", text: "Stiffness is a property of the object, not of the material" },
      {
        k: "bullets",
        items: [
          "Make the same wire longer and its stiffness decreases.",
          "Make the same wire thinner and its stiffness decreases again.",
          "The breaking stress, the density and the Young modulus are ==material properties==.",
          "Changing the length or the cross-section of the wire never changes them.",
          "So in a longer wire of the same material, only the ==stiffness== changes.",
          "Therefore, the stiffness depends on the object's shape and size, and the material properties stay with the material.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because breaking stress is material property independent of dimensions* · *B is incorrect because density is material property independent of dimensions* · *D is incorrect because Young modulus is material property independent of dimensions* (WPH11 January 2021, Q5). These are the printed reasons why ==stiffness== is the only property of the wire that a longer wire changes.",
      },
      { k: "h", text: "The gradient of a force-extension graph" },
      {
        k: "bullets",
        items: [
          "The gradient of a force-extension graph = the stiffness k.",
          "While Hooke's law is obeyed the graph is a straight line through the origin.\nIts gradient is the stiffness.",
          "Stiffness = the change in force ÷ the change in length, $\\Delta F \\div \\Delta x$.",
          "A graph of the ==total length== of a spring against force still has gradient k.\nThe line just starts from the natural length instead of the origin.",
          "Therefore, the gradient is always a ==change== in force over a ==change== in length, never a single reading divided by another.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Stiffness = change in force ÷ change in length* (WPH11 June 2022, Q10). This is the printed answer for a spring read at two compressions, 50 N and 70 N.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because the spring constant is ΔF / Δx* (WPH11 June 2022, Q10). This is the printed rejection for every stiffness answer read off an area, an inverse gradient or a single reading.",
      },
      { k: "h", text: "A spring tested at two different forces" },
      {
        k: "bullets",
        items: [
          "A spring is compressed by a force of 50 N, and its length becomes 12.0 cm.",
          "The same spring is compressed by 70 N, and its length becomes 7.1 cm.",
          "Both lengths include the natural length of the spring, so neither reading is the extension.",
          "The stiffness comes from the change in force divided by the change in length.",
          "So $k = (70 - 50) \\div (12.0 - 7.1)$ in newtons per centimetre.",
          "One pair of readings gives force ÷ total length, and that is not the stiffness.",
          "Therefore, a spring's stiffness is a ==difference== in force over the matching ==difference== in length.",
        ],
      },
      { k: "h", text: "Springs in series" },
      {
        k: "figure",
        kind: "ph-springs-combo",
        caption: "Two identical springs in series and two identical springs in parallel. In series the same force passes through both springs and the extensions add. In parallel the two springs share the load.",
      },
      {
        k: "bullets",
        items: [
          "The same force passes through every spring in the chain.",
          "Each spring stretches by its own extension.",
          "The total extension = the sum of the individual extensions.",
          "For two identical springs in series the total extension is doubled.\nSo the combined spring constant is ==half== that of one spring.",
          "For n identical springs in series the combined stiffness is $k \\div n$.",
          "Therefore, a chain of springs stretches further than one spring alone, because every spring adds its own extension.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Same force acts through both springs* · *Both springs have the same extension* · *In this combination the (total) extension will be doubled* · *Reference to F = k∆x e.g. k is proportional to 1/∆x so k is halved* (WPH11 October 2020, Q16(c)).",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Each spring extends by 7.5 mm for the same force of 45 N* (WPH11 June 2023, Q10). Two identical springs in series carrying 45.0 N extend 15 mm in total, so each spring carries the full 45.0 N over half the extension.",
      },
      { k: "h", text: "Springs in parallel" },
      {
        k: "bullets",
        items: [
          "Springs in parallel share the load.",
          "Three identical springs carrying 2F share the load, and each spring carries $\\tfrac{2F}{3}$.",
          "Each spring then extends by $\\tfrac{2F}{3k}$, which is two thirds of what one spring alone would stretch under F.",
          "The combined stiffness of n identical springs in parallel = $n \\times k$.",
          "Therefore, a set of springs side by side stretches less than one spring alone, because each spring carries only its share of the load.",
        ],
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Twice the force for two thirds of the extension gives four thirds of the energy*. The report adds that this item *was the only question that caused candidates significant difficulty* (WPH11 October 2022, Q8), so the parallel springs are worth practising.",
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The only correct answer is A (2k)* · *B is not correct because springs in parallel are stiffer than by themselves* (WPH11 June 2026 01A, Q9). Two identical springs side by side have a combined stiffness of 2k.",
      },
      { k: "h", text: "A second spring with a different force and stiffness" },
      {
        k: "bullets",
        items: [
          "A force F stretches a spring of stiffness k, and the extension is Δx.",
          "A force 2F stretches a second spring of stiffness 3k.",
          "Write $\\Delta F = k\\Delta x$ for each spring, because that is all the question needs.",
          "The first spring gives $\\Delta x = F \\div k$.",
          "The second gives $2F = 3k \\times$ new extension, so the new extension is $2F \\div 3k$.",
          "So the new extension is $\\tfrac{2}{3}\\Delta x$.\nThe bigger force does not win, because the spring is three times stiffer.",
          "Therefore, compare two springs by writing $\\Delta F = k\\Delta x$ twice and dividing one result by the other.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The only correct answer is A* (with $\\tfrac{2}{3}\\Delta x$) · *B is not correct because doubling the force does not give half the extension and three times the stiffness does not give three times the extension* · *C is not correct because doubling the force does not give half the extension* (WPH11 January 2025, Q6).",
      },
      { k: "h", text: "A second spring of double the stiffness" },
      {
        k: "bullets",
        items: [
          "A force F compresses a spring by a distance x.",
          "A second spring has double the stiffness and is compressed by the same distance x.",
          "The force is given by $F = kx$, so the stiffness and the force move together when the compression is fixed.",
          "Double the stiffness at the same compression and you double the force.",
          "Therefore, the second spring takes 2F, because the compression is the same and the stiffness is doubled.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*This is because the force is given by F=kx. So if k is doubled but x remains the same, F will be doubled.* (WPH11 October 2019, Q10).",
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
          "m and k are constant, so $v \\propto \\Delta x$.\nThe graph is a straight line through the origin.",
          "(a)(ii) The gradient of the velocity-extension graph, from a large triangle.\ngradient $= \\dfrac{4.8 - 2.2}{0.30} = 8.67\\ \\text{s}^{-1}$",
          "From $\\tfrac{1}{2} m v^2 = \\tfrac{1}{2} k \\Delta x^2$, the gradient $= \\sqrt{k/m}$, so $k = m \\times \\text{gradient}^2$.",
          "$k = 0.30 \\times 8.67^2 = 22.6\\ \\text{N m}^{-1}$",
          "(b) Beyond 0.5 m the cord is stretched past its limit of proportionality.\nThe extension is no longer proportional to the force.\nSo Hooke's law fails, and the straight-line prediction stops holding.",
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
          "Rearranged, $\\dfrac{F}{\\Delta x} = \\dfrac{EA}{x}$.\n$\\dfrac{F}{\\Delta x}$ is the stiffness k.",
          "$k = \\dfrac{EA}{x} = \\dfrac{2.70 \\times 10^9 \\times 3.00 \\times 10^{-4}}{6.00} = 1.35 \\times 10^5\\ \\text{N m}^{-1} \\approx 1.4 \\times 10^5\\ \\text{N m}^{-1}$",
          "(b)(ii) The moving pulley carries the load on two rope segments, so the tension in the rope is halved.\n$F = \\dfrac{5000}{2} = 2500\\ \\text{N}$",
          "$\\Delta x = \\dfrac{F}{k} = \\dfrac{2500}{1.35 \\times 10^5} = 1.85 \\times 10^{-2}\\ \\text{m}$",
          "(b)(iii) The force increases from zero to 2500 N while the rope stretches, so the work is the area under the force-extension line.\n$\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x = \\tfrac{1}{2} \\times 2500 \\times 1.85 \\times 10^{-2} = 23.1\\ \\text{J}$",
        ],
        answer: "(b)(ii) $1.85 \\times 10^{-2}$ m · (b)(iii) 23.1 J",
        ms: {
          label: "Mark scheme",
          text: "*The greater the length of the rope, the greater the extension for a given force* · *Stiffness k = F / Δx so stiffness decreases (if extension increases).* · *k = 1.35 × 105 (N m–1)* · *Use of factor of 2 to calculate F or Δx* · *1.85 × 10−2 (m) (allow ecf from (i))* · *Use of ΔEel = ½ FΔx* · *ΔEel = 23.1 J (allow ecf from (ii))* (WPH11 June 2021, Q17).",
        },
      },
      {
        k: "worked",
        title: "The spring, the ball and the 200 g mass",
        question:
          "A student investigated a spring.\nThe student measured the unstretched length of the spring. The student suspended different objects from the spring, as shown. She measured the new length of the spring each time.\n**(a)** The unstretched length of the spring was 0.250 m.\nWhen the ball was suspended from the spring, the length of the spring was 0.295 m.\nWhen the 200 g mass was suspended from the spring, the length of the spring was 0.375 m.\nCalculate the weight of the ball. (4)\n**(b)** The sketch graph shows how the extension Δx of the spring varies with the total force F on the spring.\nExplain why the elastic strain energy stored by the spring is proportional to F². (3)\n*WPH11 October 2025, Q15*",
        steps: [
          "(a) The 200 g mass stretches the spring by $0.375 - 0.250 = 0.125\\ \\text{m}$.",
          "Its weight is $W = mg = 0.200 \\times 9.81 = 1.962\\ \\text{N}$.",
          "So the stiffness of the spring is $k = \\dfrac{1.962}{0.125} = 15.7\\ \\text{N m}^{-1}$.",
          "The ball stretches the spring by $0.295 - 0.250 = 0.045\\ \\text{m}$.",
          "So the weight of the ball is $F = k\\Delta x = 15.7 \\times 0.045 = 0.71\\ \\text{N}$",
          "(b) The elastic strain energy is the area under the force-extension graph, $\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x$.",
          "The graph is a straight line through the origin, so Hooke's law holds and $\\Delta x = F \\div k$.",
          "Substituting, $\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\times \\dfrac{F}{k} = \\dfrac{F^2}{2k}$.",
          "k is constant, so the energy is proportional to $F^2$.\nDouble the force and the stored energy is four times as big.",
        ],
        answer: "(a) 0.71 N · (b) $\\Delta E_{\\text{el}} = F^2 \\div 2k$, so $\\Delta E_{\\text{el}} \\propto F^2$",
        ms: {
          label: "Mark scheme",
          text: "*Elastic strain energy is equal to the area under graph Or k is constant (because the gradient is constant)*. The printed answer is W = 0.71 N with k = 15.70 N m⁻¹ (WPH11 October 2025, Q15).",
        },
      },
      {
        k: "worked",
        title: "The pinball launcher",
        question:
          "The photograph shows a toy pinball machine. The launcher is pulled back, compressing a spring. The spring obeys Hooke's law. When the launcher is released, the spring returns to its original length and a small ball is launched horizontally into the machine.\nWhen the launcher is pulled back, the spring is compressed by 5.0 cm. When the spring is released, the ball is launched at a speed of 8.0 cm s⁻¹.\n**(a)** Show that the kinetic energy of the ball just after launching is about $4 \\times 10^{-5}$ J.\nmass of ball = 12 g (2)\n**(b)** Determine the force on the ball when the spring is released. (2)\n**(c)** Determine the stiffness of the spring. (2)\n**(d)** The spring returns to its original length L.\nSketch a graph, on the axes below, to show how the velocity of the ball varies with the length of the spring. (4)\n*WPH11 January 2022, Q16*",
        steps: [
          "(a) $E_k = \\tfrac{1}{2} m v^2 = 0.5 \\times 12 \\times 10^{-3} \\times (8.0 \\times 10^{-2})^2 = 3.84 \\times 10^{-5}\\ \\text{J} \\approx 4 \\times 10^{-5}\\ \\text{J}$",
          "(b) The strain energy stored in the spring becomes the kinetic energy of the ball.\n$\\Delta E_{\\text{el}} = \\tfrac{1}{2} F \\Delta x$, so $3.84 \\times 10^{-5} = 0.5 \\times F \\times 0.05$",
          "$F = 1.54 \\times 10^{-3}\\ \\text{N} \\approx 1.5 \\times 10^{-3}\\ \\text{N}$",
          "(c) $F = k \\Delta x$, so $k = \\dfrac{1.54 \\times 10^{-3}}{0.05} = 0.031\\ \\text{N m}^{-1}$",
          "(d) The curve starts at $v = 0$ at the compressed length, $L - 5$ cm.",
          "It rises with a gradient that decreases, because the force on the ball decreases as the spring extends.",
          "It levels off to a horizontal line at the natural length $L$, where the force falls to zero.",
          "The final velocity is labelled 8.0 cm s⁻¹.",
        ],
        answer: "(b) $1.5 \\times 10^{-3}$ N · (c) $0.031\\ \\text{N m}^{-1}$ · (d) rise from $L - 5$ cm with decreasing gradient, flat from $L$",
        ms: {
          label: "Mark scheme",
          text: "*Use of Ek = ½ m v2* · *Ek = 3.8 × 10−5 (J)* · *Use of ΔEel = ½ F Δx* · *F = 1.5 × 10−3 N (allow ecf from (a))* · *Use of F = k Δx* · *k = 0.03 N m−1 (allow ecf from (b))* · *Line has initially decreasing positive gradient* · *Line starts at v = 0 and a non-zero value of length* · *Line levels off to horizontal at length = L* · *Final velocity marked as 8.0 cm s−1 Or Original compressed length marked as \"L − 5\" in cm* (WPH11 January 2022, Q16).",
        },
      },
      {
        k: "worked",
        title: "The force meter on two strings",
        question:
          "A mass m is held in equilibrium by strings attached to two clamp stands. The force meter records the force F in the upper string. The force in the horizontal string is P.\nThe angle made by the upper string to the horizontal is θ, as shown.\n**(a)** The force meter allows force to be measured by means of Hooke's law.\nThe extension of the spring inside the force meter allows the stretching force to be read from a scale.\nWhen the force applied to stretch the spring is 15 N the extension of the spring is 8.0 cm.\nShow that the stiffness of the spring is about 2 N cm⁻¹. (2)\n**(b)** When m is equal to 0.55 kg, the value of P is 8.5 N.\nCalculate the value of θ, and the extension of the spring in the force meter. (6)\n*WPH11 January 2021, Q17*",
        steps: [
          "(a) $\\Delta F = k \\Delta x$, so $k = \\dfrac{15\\ \\text{N}}{8.0\\ \\text{cm}} = 1.875\\ \\text{N cm}^{-1} \\approx 2\\ \\text{N cm}^{-1}$",
          "(b) The weight of the mass is $w = mg = 0.55 \\times 9.81 = 5.4\\ \\text{N}$, downwards.",
          "The horizontal string pulls with $P = 8.5\\ \\text{N}$, horizontally.",
          "The three forces on m are in equilibrium, so the upper string's pull F balances the other two.",
          "$F = \\sqrt{w^2 + P^2} = \\sqrt{5.4^2 + 8.5^2} = 10.1\\ \\text{N}$",
          "$\\theta = \\tan^{-1}\\left(\\dfrac{w}{P}\\right) = \\tan^{-1}\\left(\\dfrac{5.4}{8.5}\\right) = 32.4^{\\circ} \\approx 32^{\\circ}$",
          "The extension follows from Hooke's law with the force in the spring.\n$\\Delta x = \\dfrac{F}{k} = \\dfrac{10.1}{1.875} = 5.4\\ \\text{cm}$ (the printed 'show that' value 2 N cm⁻¹ gives 5.0 cm)",
        ],
        answer: "(b) θ ≈ 32°, Δx = 5.4 cm (5.0 cm with the printed k)",
        ms: {
          label: "Mark scheme",
          text: "*Use of ∆F = k∆x* · *k = 1.9 (N cm−1)* · *Use of w = mg* · *Use of force triangle and Pythagoras to find F Or F resolved into components* · *Use of trigonometry to find θ.* · *Use of ∆x = ∆F/k* · *Δx = 5.4 cm (ecf from (a), \"show that\" value gives 5.0 cm)* · *θ = 32° (ecf from (a))* (WPH11 January 2021, Q17).",
        },
      },
      {
        k: "worked",
        title: "The trampoline springs",
        question:
          "A gymnast bounces on a trampoline.\n**(b)** The trampoline is made of a sheet of material attached to a frame by springs.\nThe vertical components of the tension in the springs provide the upward force on the gymnast.\nThe vertical component of the tension in one spring is 68 N when the spring makes an angle to the horizontal of 14°, as shown.\n**(b)(i)** Show that the tension in the spring is about 300 N. (2)\n**(b)(ii)** The extension of the spring was $4.6 \\times 10^{-2}$ m.\nCalculate the stiffness of the spring. (2)\n*WPH11 January 2023, Q15*",
        steps: [
          "(b)(i) The vertical component of the tension is $T \\sin 14^{\\circ}$.\n$68 = T \\sin 14^{\\circ}$",
          "$T = \\dfrac{68}{\\sin 14^{\\circ}} = 281\\ \\text{N} \\approx 280\\ \\text{N}$",
          "(b)(ii) $\\Delta F = k \\Delta x$, so $k = \\dfrac{281}{4.6 \\times 10^{-2}} = 6.1 \\times 10^3\\ \\text{N m}^{-1}$",
        ],
        answer: "(b)(i) 281 N ≈ 280 N · (b)(ii) $6.1 \\times 10^3\\ \\text{N m}^{-1}$",
        ms: {
          label: "Mark scheme",
          text: "*T = 68 N ÷ sin 14° Or 68 N ÷ cos 76°* · *T = 280 (N)* · *Use of F = k Δx* · *k = 6.1 × 103 N m−1 (allow ecf from (b)(i))* (WPH11 January 2023, Q15).",
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
        note: "Stress = the force ÷ the cross-sectional area. Strain = the change in length ÷ the original length. The Young modulus = stress ÷ strain, rearranged as $E = \\dfrac{Fx}{A \\Delta x}$. All three hold for tensile loading and for compressive loading.",
      },
      {
        k: "bullets",
        items: [
          "A tensile stress stretches the sample.\nA compressive stress squeezes it.",
          "The cross-sectional area A is calculated from the diameter, $A = \\pi d^2 \\div 4$.",
          "The unit of stress is **Pa**, which is **N m⁻²**.",
          "Strain is a ratio of two lengths, so it has ==no unit==.",
          "Strain may be left as a decimal or given as a percentage, never as a fraction.",
          "A compressive force shortens the sample.\nThe new length is $x - \\dfrac{Fx}{AE}$, and the strain is still $\\Delta x \\div x$.",
          "Therefore, stress and strain take the sample's size out of the comparison, and the Young modulus is left with the material alone.",
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
          "The Young modulus stays the same in a longer wire, a thinner wire or any other sample of the same metal.",
          "A large Young modulus means the material needs a large stress for a small strain.",
          "The unit of the Young modulus is **Pa**, printed as GPa for fibres and rope.",
          "The Young modulus of nylon is $2.70\\ \\text{GPa}$, of copper $1.1 \\times 10^{11}\\ \\text{Pa}$, of steel about $2 \\times 10^{11}\\ \\text{Pa}$.",
          "Therefore, nothing done to the ==shape== of a sample ever changes its Young modulus, and that is what makes it a material property.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because Young modulus is not the breaking stress of a material* · *B is incorrect because Young modulus is not the density of a material.* · *D is incorrect because Young modulus is not the elastic limit of a material* (WPH11 October 2022, Q5). The Young modulus is ==the ratio of tensile stress to tensile strain==, and none of those.",
      },
      { k: "h", text: "The stress-strain graph while the sample is elastic" },
      {
        k: "figure",
        kind: "ph-stress-strain",
        caption: "A stress-strain graph for a sample. The gradient of the straight section is the Young modulus, and the area under the graph is the work done per unit volume.",
      },
      {
        k: "bullets",
        items: [
          "Stress against strain is a straight line through the origin while Hooke's law holds.",
          "The gradient of that straight section = the Young modulus E.",
          "A steeper line means a larger E, so the material is stiffer.",
          "The area under a stress-strain graph = the work done ==per unit volume== of the sample.",
          "Multiply that area by the volume of the sample and you get the work done on it.",
          "Therefore, the gradient gives the material's stiffness and the area gives the energy.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*A is incorrect because area represents work done per unit volume* · *D is incorrect because the breaking point is outside the linear region*. The Young modulus comes from ==the gradient of the tangent to the line at the origin== (WPH11 June 2022, Q4).",
      },
      { k: "h", text: "Stiffness and the Young modulus" },
      {
        k: "bullets",
        items: [
          "The stiffness of a wire and the Young modulus of its material are linked by $k = \\dfrac{EA}{x}$.",
          "The relation rearranges freely, $E = \\dfrac{kx}{A}$.",
          "A longer wire of the same material and area has a proportionally smaller k and the same E.",
          "A thinner wire has a smaller A, so a smaller k, and still the same E.",
          "Therefore, the Young modulus takes the sample's dimensions out of the stiffness.",
        ],
      },
      { k: "h", text: "Two wires of the same material under the same force" },
      {
        k: "bullets",
        items: [
          "The extension of a wire follows from the Young modulus, $\\Delta x = \\dfrac{Fx}{AE}$.",
          "For the same force and the same material, $\\Delta x \\propto \\dfrac{x}{A}$.",
          "A longer wire extends more, because the extension is proportional to the original length.",
          "A thinner wire extends more too, because the extension is inversely proportional to the cross-sectional area.",
          "Diameter and area are not the same thing, because halving the diameter quarters the area.",
          "Therefore, write $\\Delta x = \\dfrac{Fx}{AE}$ for each wire and compare them.",
        ],
      },
      { k: "h", text: "A wire with twice the diameter" },
      {
        k: "bullets",
        items: [
          "A wire breaks when a tensile force T is applied.",
          "A second wire of the same material has twice the diameter.",
          "Twice the diameter gives four times the cross-sectional area, because $A = \\pi d^2 \\div 4$.",
          "The breaking stress belongs to the material, so it is the same for both wires.",
          "Four times the area carries four times the force at the same stress.",
          "Therefore, the second wire breaks at 4T, the same breaking stress over four times the area.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*B is incorrect because doubling the diameter gives four times the cross section, requiring four times the tension for the same stress.* (WPH11 January 2022, Q8).",
      },
      { k: "h", text: "A second wire with half the extension" },
      {
        k: "bullets",
        items: [
          "A tensile force gives a wire of length x and cross-sectional area A an extension Δx.",
          "The same force gives a second wire of the same material an extension of $\\tfrac{\\Delta x}{2}$.",
          "The extension follows $\\dfrac{x}{A}$, so half the extension needs $\\dfrac{x}{A}$ to halve.",
          "Keeping the length and doubling the area does it, because $\\dfrac{x}{2A}$ is half of $\\dfrac{x}{A}$.",
          "Doubling both the length and the area leaves the ratio the same, so the extension would not change.",
          "Therefore, the second wire has the ==same length== and ==twice the cross-sectional area==.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*The only correct answer is B (Length = x; Cross-sectional area = 2A)* (WPH11 January 2026, Q8).",
      },
      { k: "h", text: "A second wire of half the length and half the diameter" },
      {
        k: "bullets",
        items: [
          "A tensile force extends a wire of length x and diameter d by Δx.",
          "The same force extends a second wire of the same material by 2Δx.",
          "The area carries a $d^2$, so the extension follows $\\dfrac{x}{d^2}$.",
          "Halving the length halves the extension, and halving the diameter multiplies the extension by four.",
          "$\\dfrac{0.5x}{(0.5d)^2} = \\dfrac{0.5x}{0.25d^2} = 2 \\times \\dfrac{x}{d^2}$.\nThe two changes give $2\\Delta x$ together.",
          "Therefore, the second wire is half as long and half as thick.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*stress ∝ strain or F/A ∝ Δx/x or Δx ∝ x/d²; if 2Δx then 0.5x/(0.5d)² = 2(x/d²)* (WPH11 October 2023, Q8).",
      },
      {
        k: "note",
        label: "Examiner's report",
        text: "*Substituting d(new) = 0.5d gives a corresponding new length of 0.5x.* (WPH11 October 2023, Q8).",
      },
      { k: "h", text: "The same force on wires of different size" },
      {
        k: "bullets",
        items: [
          "Two wires of the same material carry the same force.",
          "A thinner wire carries that force over a smaller area, so the stress is greater.",
          "A greater stress gives a greater strain, because the material's Young modulus is fixed.",
          "A longer wire turns the same strain into a greater extension, because strain is per unit length.",
          "So the greatest extension comes from the longest wire with the smallest diameter.",
          "Therefore, length and diameter affect the extension in opposite ways, and the long thin wire extends most.",
        ],
      },
      {
        k: "note",
        label: "Mark scheme wording",
        text: "*Lesser diameter gives greater stress and thus greater strain, greater length gives greater extension* (WPH11 June 2023, Q3).",
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
          "$410\\ \\text{MPa} < 480\\ \\text{MPa}$, so the wire holds 100.0 N and it is safe.",
        ],
        answer: "(b)(i) 18 500 N m⁻¹ · (b)(ii) $1.95 \\times 10^{11}$ Pa ≈ $2 \\times 10^{11}$ Pa · (c) 410 MPa < 480 MPa, so it is safe",
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
        answer: "(a) 150 N gives 3.8 × 10⁸ Pa < 420 MPa, so the wire holds · (b)(ii) $1.3 \\times 10^{11}$ Pa",
        ms: {
          label: "Mark scheme",
          text: "*Use of σ = F / A* · *σ = 3.8 × 108 Pa [accept N m−2]* · *Valid comparison in consistent units and conclusion* · *Determine gradient of straight line section [straight line ends at 5 mm]* · *k = 1.30 × 104 (N m−1)* · *Use of k = EA/ x* · *E = 1.3 × 1011 Pa [or N m−2]* (WPH11 October 2022, Q12).",
        },
      },
      {
        k: "worked",
        title: "The tugboat rope",
        question:
          "A tugboat is a small boat that can be used to pull large ships. A tugboat is attached to a ship using a thick rope.\nA sample of the rope is tested to make sure that the rope will not break when a ship is pulled.\n**(a)** The original length of the sample was 36.8 m.\nCalculate the strain in the sample when the length of the sample increased to 38.1 m. (2)\n**(b)** The stress-strain graph for the sample is shown.\n**(b)(i)** The diameter of the sample is 220 mm.\nDetermine the force applied to the sample when the strain was 0.025 (4)\n**(b)(ii)** Explain how the area under the stress-strain graph and the volume of the sample can be used to determine the energy stored. (3)\n*WPH11 January 2025, Q17*",
        steps: [
          "(a) The strain is the change in length ÷ the original length.\n$\\varepsilon = \\dfrac{38.1 - 36.8}{36.8} = 0.035$",
          "(b)(i) The stress at a strain of 0.025 is read from the graph.\n$\\sigma = 110\\ \\text{MPa}$",
          "$A = \\pi \\left(\\dfrac{220 \\times 10^{-3}}{2}\\right)^2 = 0.0380\\ \\text{m}^2$",
          "$F = \\sigma A = 110 \\times 10^6 \\times 0.0380 = 4.2 \\times 10^6\\ \\text{N}$",
          "(b)(ii) The area under the stress-strain graph is the energy stored per unit volume of the rope.",
          "Multiply the area by the volume of the sample and the energy stored follows.",
          "Stress × strain $= \\dfrac{F}{A} \\times \\dfrac{\\Delta x}{x} = \\dfrac{F\\Delta x}{Ax}$.\n$A \\times x$ is the volume of the sample.",
        ],
        answer: "(a) 0.035 · (b)(i) $4.2 \\times 10^6$ N · (b)(ii) energy = area under graph × volume",
        ms: {
          label: "Mark scheme",
          text: "*Use of ε = Δx/x* · *ε = 0.035 (given to at least 2 significant figures)* · *Stress = 110 (MPa) (allow answers in the range 108 to 112 (MPa))* · *Calculates cross-sectional area of rope* · *Use of σ = F/A* · *F = 4.2 × 10⁶ N (allow answers in the range 4.1 × 10⁶ N to 4.3 × 10⁶ N)* · *Energy stored = area under graph × volume (of rope) Or Area under graph = energy stored per unit volume of rope* · *Area under graph ∝ (F/A) × (Δx/x) Or Stress × strain = (F/A) × (Δx/x)* (WPH11 January 2025, Q17).",
        },
      },
      {
        k: "worked",
        title: "The violin string",
        question:
          "A violin is a musical instrument that has four strings, as shown.\n**(a)** A force-extension graph for a sample of one of the strings is shown below.\nThe table shows the stiffness for samples of three of the strings on the violin.\nEach sample was the same original length as the sample used to obtain the graph.\nThe stiffness of string X is 1700 N m⁻¹, of string Y 2700 N m⁻¹ and of string Z 6100 N m⁻¹.\nDeduce which string was used to obtain the force-extension graph. (4)\n**(b)** The fourth string on the violin has an original length of 0.750 m.\nWhen the tension applied to the string is 36 N, the new length of the string is 0.752 m.\nThe radius of the string is $0.85 \\times 10^{-3}$ m.\nDetermine the Young modulus of the material used to make the string. (5)\n*WPH11 June 2025, Q17*",
        steps: [
          "(a) Read a matching pair of force and extension from the graph.\n$F = 80\\ \\text{N}$ at $\\Delta x = 29\\ \\text{mm} = 0.029\\ \\text{m}$",
          "$k = \\dfrac{\\Delta F}{\\Delta x} = \\dfrac{80}{0.029} = 2760\\ \\text{N m}^{-1}$",
          "So $2760\\ \\text{N m}^{-1}$ is closest to 2700 N m⁻¹.\nThe comparison is numerical, 2760 ≈ 2700.",
          "So the graph belongs to string Y.",
          "(b) $A = \\pi r^2 = \\pi \\times (0.85 \\times 10^{-3})^2 = 2.27 \\times 10^{-6}\\ \\text{m}^2$",
          "$\\sigma = \\dfrac{F}{A} = \\dfrac{36}{2.27 \\times 10^{-6}} = 1.59 \\times 10^7\\ \\text{Pa}$",
          "$\\varepsilon = \\dfrac{\\Delta x}{x} = \\dfrac{0.752 - 0.750}{0.750} = 2.67 \\times 10^{-3}$",
          "$E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{1.59 \\times 10^7}{2.67 \\times 10^{-3}} = 6.0 \\times 10^9\\ \\text{Pa} = 6.0\\ \\text{GPa}$",
        ],
        answer: "(a) string Y, 2760 ≈ 2700 N m⁻¹ · (b) $6.0 \\times 10^9$ Pa = 6.0 GPa",
        ms: {
          label: "Mark scheme",
          text: "*Corresponding force and extension read from graph (Allow a tolerance of ±½ a small square)* · *Use of ΔF = kΔx* · *k = 2760 N m⁻¹ (Allow a value of k between 2650 and 2850)* · *Comparison with 2700 (N m−1) and consistent conclusion* · *Calculates cross-sectional area* · *σ = 36 ÷ 2.27 × 10⁻⁶ = 15.9 × 10⁶ Pa* · *ε = 0.002 ÷ 0.750 = 0.00267* · *E = 6.0 GPa* (WPH11 June 2025, Q17).",
        },
      },
      {
        k: "worked",
        title: "The fishing line",
        question:
          "A student uses a fishing line to catch fish.\n**(a)** The fishing line will break if the tension is too great.\nThe student could use a fishing line made from the same material but with a larger diameter.\nExplain how using a fishing line with a larger diameter affects the tension at which the fishing line will break. (3)\n**(b)** The student uses a fishing line with an original length of 36 m and a radius of 0.34 mm.\nCalculate the extension of the fishing line when the tension is 17 N.\nYoung modulus of material used for line $= 2.8\\ \\text{GPa}$ (4)\n**(c)** The graph shows the relationship between the applied force and the extension of the fishing line for small tensions.\nExplain what is represented by the area between the graph and the x-axis. (3)\n*WPH11 June 2026, Q19*",
        steps: [
          "(a) A larger diameter gives a larger cross-sectional area.",
          "The fishing lines are made from the same material, so they have the same breaking stress.",
          "A larger area carries a larger force at the same stress, so the line breaks at a larger tension.",
          "(b) $A = \\pi r^2 = \\pi \\times (0.34 \\times 10^{-3})^2 = 3.63 \\times 10^{-7}\\ \\text{m}^2$",
          "$\\sigma = \\dfrac{F}{A} = \\dfrac{17}{3.63 \\times 10^{-7}} = 4.68 \\times 10^7\\ \\text{Pa}$",
          "$\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{4.68 \\times 10^7}{2.8 \\times 10^9} = 1.67 \\times 10^{-2}$",
          "$\\Delta x = \\varepsilon x = 1.67 \\times 10^{-2} \\times 36 = 0.60\\ \\text{m}$",
          "(c) The area under a force-extension graph is the elastic strain energy stored in the fishing line.",
          "That energy is the work done to stretch the fishing line.",
          "The area works because it is the mean force multiplied by the extension.",
        ],
        answer: "(b) 0.60 m · (c) the elastic strain energy stored, the work done to stretch the line",
        ms: {
          label: "Mark scheme",
          text: "*There is a larger (cross-sectional) area* · *(each fishing line) has the same breaking stress* · *(So the line will break at) a larger tension / force* · *Calculates cross-sectional area* · *Extension = 0.60 m* · *Represents the elastic strain energy stored in the fishing line* · *which is work done to stretch the fishing line* · *(because) the area is the mean force multiplied by the extension* (WPH11 June 2026, Q19).",
        },
      },
      {
        k: "worked",
        title: "The steel and aluminium strands",
        question:
          "A type of conducting cable used in overhead power lines is ACSR. This cable has a steel core surrounded by strands of aluminium cable of the same diameter.\nStress-strain graphs for samples of steel and aluminium typically used in each strand of the cable are shown.\n**(b)(i)** Show that the Young modulus of steel is about $2 \\times 10^{11}$ Pa. (2)\n**(b)(ii)** The pylons are positioned every 270 m.\nShow that the stress in a strand of steel is about 70 MPa.\ncross-sectional area of one strand $= 2.3 \\times 10^{-6}\\ \\text{m}^2$\ntension per m for steel $= 0.62\\ \\text{N m}^{-1}$ (2)\n**(b)(iii)** ACSR cables consist of a steel core surrounded by strands of aluminium cable.\nThe extension produced, due to the tension, for each strand of aluminium is 0.95 m.\nComment on why ACSR cables consist of both a steel core and strands of aluminium cable. You should include a calculation as part of your answer. (3)\n*WPH11 October 2020, Q19*",
        steps: [
          "(b)(i) The gradient of the steel line's straight section, from the origin to about 200 MPa.\n$E_{\\text{steel}} = \\dfrac{200 \\times 10^6}{0.0013} = 1.5 \\times 10^{11}\\ \\text{Pa}$",
          "The printed acceptance runs from $1.5 \\times 10^{11}$ Pa to $1.8 \\times 10^{11}$ Pa, the same order as $2 \\times 10^{11}$ Pa.",
          "(b)(ii) The tension in one 270 m strand.\n$F = 0.62 \\times 270 = 167.4\\ \\text{N}$",
          "$\\sigma = \\dfrac{F}{A} = \\dfrac{167.4}{2.3 \\times 10^{-6}} = 7.3 \\times 10^7\\ \\text{Pa} = 73\\ \\text{MPa}$",
          "(b)(iii) The strain of the steel at 70 MPa is read from the graph.\n$\\varepsilon = 0.0005$, so $\\Delta e = 0.0005 \\times 270 = 0.14\\ \\text{m}$",
          "The aluminium strand extends 0.95 m under the same conditions.",
          "The extension and the strain of aluminium are much larger than those of steel, so the steel is there to reduce the total extension and the sag of the cable.",
          "The aluminium strands carry the current, and the steel core keeps the cable stiff.",
        ],
        answer: "(b)(i) $1.5 \\times 10^{11}$ Pa (printed range 1.5–1.8 × 10¹¹) · (b)(ii) 73 MPa · (b)(iii) steel Δe = 0.14 m vs aluminium 0.95 m, so the steel core reduces the sag",
        ms: {
          label: "Mark scheme",
          text: "*gradient Or tangent from origin* · *Esteel = 1.5 × 1011 (Pa) to 1.8 × 1011 (Pa)* · *stress = 73 MPa* · *(for steel ∆e = 0.14 m)* · *Comparison of the two extensions/strains* · *e.g. the extension/strain of aluminium is larger than that of steel, so steel is used to reduce the (total) extension/sag* (WPH11 October 2020, Q19).",
        },
      },
    ],
  },
];
