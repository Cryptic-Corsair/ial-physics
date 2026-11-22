# WPH11 Topic 1 mechanics gap analysis — agent c (2023-Jan → 2023-Oct)

Agent c, sessions: **2023 January, 2023 June, 2023 October** (WPH11/01, Mechanics and Materials, 80 marks each).

Method: for each session the mark scheme was read first (all answers + guidance), then the question paper (stems, diagrams-as-text, data). Every Section A MCQ (Q1–10) and every Section B question was classified as MECHANICS (analysed fully), MATERIALS (skipped — listed only), or MIXED (mechanics part analysed, flagged "mechanics part of a mixed question"). Blocks labelled "Mark scheme wording", "Examiner's report" and "Not accepted" in the notes were treated as taught knowledge. Uncertain calls were checked by grepping the real notes files (`notes-ph01-a/b/c.ts`), not just the baseline outline.

Verdict scale: COVERED (notes teach the fact/skill, with location) / PARTIAL (some ingredients taught, named part missing) / GAP (nothing in the notes teaches it).

A large fraction of these three papers is already absorbed in the notes as verbatim worked cards (the cards cite these very questions: Jan-23 Q8, Q11, Q15, Q16; Jun-23 Q11, Q19(b)(ii); Oct-23 Q10, Q11, Q12(b)(ii), Q14(b), Q15). The remaining difference between "notes-only student" and "full marks" concentrates in the graph-conversion skill and a handful of MCQ distractor-facts.

---

## 2023 January

### Q1 — MCQ (1) — scalar quantity
- Stem: which of displacement / moment of a force / power / weight is a scalar. Answer **C (power)**.
- Knowledge: scalar vs vector examples, incl. that the moment of a force is a vector (has direction of turning) and weight is a force.
- Distractor facts: displacement is a vector; moment has magnitude **and** direction so is a vector; weight is a force so a vector.
- **VERDICT: COVERED** — Spec 4 def cards (scalar list includes power; vector list includes displacement, force, weight, momentum) and the "pairs most often confused" bullet ("the **moment of a force** is a vector…, **work done** is not"). All three distractor reasons are stated in the notes.

### Q2 — MCQ (1) — gravitational field strength
- Stem: which describes gravitational field strength. Answer **A (weight per unit mass)**.
- Distractor facts: not acceleration per unit mass; not gpe per unit mass; not acceleration per unit weight.
- **VERDICT: COVERED** — Spec 10 def card ("The ==weight per unit mass==, g = F ÷ m") and the Spec 10 "Not accepted" note rejects "acceleration per unit mass" and "energy per unit mass" verbatim. Distractor D ("acceleration per unit weight") is eliminated by knowing the correct definition.

### Q3 — MCQ (1) — energy equation for object on a spring — *mechanics part of a mixed question*
- Stem: spring compressed a further Δx by force F; force removed; at Δx = 0 the object has speed v. Which equation describes the energy transfer? Answer **B: FΔx = ½mv² + ½mgΔx** (spring energy → KE + GPE; gpe **added**).
- Mechanics knowledge: energy bookkeeping across elastic → kinetic + gravitational stores.
- Distractor facts: gpe added not subtracted on the RHS; the elastic-energy LHS form (materials-side subtlety, rejected as "the total elastic energy is not FΔx").
- **VERDICT: COVERED (mechanics part)** — Spec 32 "Energy transfers" bullets: "When a spring launches an object, the elastic strain energy stored in the spring becomes the kinetic energy of the object… the elastic strain energy = the kinetic energy gained + the gravitational potential energy gained (**ΔEel = ΔEk + ΔEgrav**)" — the + structure is exactly the MS discriminator. The LHS (area under F–x) belongs to the Materials agent's territory (Spec 32 area bullet).

### Q4 — MCQ (1) — Core Practical 1 condition
- Stem: ball bearing timed falling a measured distance in air, to determine g. Which condition is needed? Answer **D: air resistance and upthrust should both be negligible**.
- Distractor facts: laminar flow is irrelevant (Stokes-condition language); the ball must **not** reach terminal velocity; the ball must not be moving before the timer starts (else u ≠ 0 and unmeasured).
- **VERDICT: COVERED** — Spec 11 error table row "Air resistance and upthrust present · g too small (a < g)" (checked in notes-ph01-b.ts line 321), row "Ball already moving when the timer starts · g too large (u > 0 assumed 0)" kills C; "terminal velocity ⇒ a = 0" (Spec 9 chain) kills B; laminar flow is taught only as a Stokes' law condition (Spec 25), which kills A.

### Q5 — MCQ (1) — suvat distance expression
- Stem: car passes P at 35 m s⁻¹, accelerates uniformly, passes Q at 50 m s⁻¹ after 5.0 s; which expression gives s? Answer **C: 0.5 × (35 + 50) × 5**.
- Knowledge: pick s = ½(u+v)t when u, v, t known; do not use g for a road car; the time 5 s is not the acceleration.
- Distractor facts: A uses (50²−35²)/(2×5) — treats t as a ("the acceleration is not 5 m s⁻²"); B and D insert g = 9.81 for a car ("the acceleration is not 9.81 m s⁻²").
- **VERDICT: COVERED** — Spec 1 "Choosing the equation" table row "u, v, t (no acceleration) · s · s = ½(u + v)t"; the g-is-for-free-fall point is taught by the dart card (vertical a = 9.81, horizontal a = 0) and the Mars card ("only the number put in for g changes" — for falling objects).

### Q6 — MCQ (1) — resultant-force vector diagram — *mechanics part of a mixed question*
- Stem: soap bubble with wind force P (horizontal), upthrust U (up), weight W (down); which vector diagram shows the resultant F? Answer **B**.
- Knowledge: add three forces nose-to-tail; resultant runs tail-of-first → tip-of-last; since W − U is the net vertical force, F = P + (W − U).
- Distractor facts: option A's arrow is "the force required for balance" (the equilibrant); C and D add/subtract the magnitudes in the wrong sense.
- **VERDICT: COVERED** — Spec 6 steps panel: "The resultant runs from the *tail of the first* vector to the *tip of the last*, and its arrow points that way round" — this rule alone distinguishes the resultant (B) from the balance-force arrow (A). (The notes never use the word "equilibrant", but the direction convention it tests is taught.)

### Q7 — MCQ (1) — s–t → a–t conversion for a vertical throw — **THE gap of this paper**
- Stem (QP): "A person threw a ball vertically up in the air and caught the ball a few seconds later. The graph of vertical displacement against time for the ball is shown… Which graph shows the acceleration of the ball against time?" Answer **B** (constant line **below** the time axis, a = −9.81 m s⁻² throughout the flight).
- Knowledge needed: two-step conversion (gradient of s–t → v; gradient of v–t → a); the fact that a freely moving ball has **constant downward acceleration −g for the whole flight — including at the highest point, where v = 0 but a ≠ 0**; that a constant negative acceleration is drawn as a horizontal line *below* the time axis.
- MS verbatim:
  > 7 The correct answer is B 1
  > A is not the correct answer because the acceleration is not positive
  > C is not the correct answer because the acceleration does not increase
  > D is not the correct answer because the acceleration does not decrease
- Notes check: Spec 2 teaches gradient meanings ("the ==gradient== of a displacement–time graph is velocity, the gradient of a velocity–time graph is acceleration"), the "One journey, three graphs" figure (but only for uniform acceleration **from rest**, i.e. the all-positive case), and the table row "a–t: any value above zero" — the notes never show an a–t value *below* the axis, never walk the s–t → v–t → a–t conversion for any journey, and never state that a thrown ball still has a = −g at the top of its flight. Greps for "vertically up / thrown vertically / below the axis / bounc / rebound" in notes-ph01-*.ts return nothing relevant (the only "below the axis" hits are the v–t diver card, Spec 3).
- **VERDICT: PARTIAL** — gradient/area meanings and one-journey consistency are taught (Spec 2); the conversion technique itself and the negative (below-axis) a–t case for a vertical throw are not taught anywhere. Goes to GAPS SUMMARY item 1.

### Q8 — MCQ (1) — motor lifting time from power
- Stem: motor lifts 50 000 kg through 25 m, output power 700 kW; which expression gives t? Answer **B: (50 000 × 9.81 × 25) ÷ 700 000**.
- **VERDICT: COVERED** — Spec 21 worked card "A motor lifting a load" is this exact question (cited "*WPH11 January 2023, Q8*") and lists the rejected options' slips ("omit ==g== … mishandle the ==kilo-== prefix").

### Q9 — MCQ (1) — Young modulus experiment measurements — MATERIALS — skipped.

### Q10 — MCQ (1) — Newton's third law pair properties
- Stem: two forces make a N3 pair; which statement is true? Answer **B: same type of force and act on different bodies**.
- Distractor facts: pairs don't act on the same body; pairs have **equal** magnitudes.
- **VERDICT: COVERED** — Spec 12 four-properties table ("Equal magnitude / Opposite directions / Same type of force / Act on different bodies — both acting on the same object disqualifies the pair").

### Q11 — structured (3) — horizontal projectile from cliff
- Stem: stone projected horizontally at 3.8 m s⁻¹ from 12 m; find horizontal distance. Answer 5.9 m.
- **VERDICT: COVERED** — Spec 7 worked card "A stone thrown from a cliff" is this exact question (cited "*WPH11 January 2023, Q11*"), including the examiner-report error note.

### Q12 — structured (6) — falling-ball viscosity — MATERIALS — skipped (CP2 viscometer + Stokes' law).

### Q13 — structured (8) — stone on a step (equilibrium, CoG, FBD, moments)
- (a)(i) "State what is meant by equilibrium" (2): MS "Zero resultant/net force (in any direction) (1) / Zero (turning) moment (about any point) (1)". **COVERED** — Spec 16 def card: "A body is in equilibrium when there is ==no resultant force on it== ==and no resultant moment about any point==. Two marks, two sentences" — word-for-word match.
- (a)(ii) "State what is meant by the centre of gravity" (1): MS "The point through/at which the weight of the object may be taken to act (1)". **COVERED** — Spec 8 def card uses exactly "may be taken to act" with the mark-scheme wording note.
- (b)(i) complete the free-body diagram (2): MS wants a downward "weight" arrow at the CoG and an upward arrow between CoG and P labelled "force from step". **COVERED** — Spec 8 FBD def card (only forces on the chosen object, arrows labelled, drawn on the body) plus the stone card's geometry (weight at midpoint 0.05 m beyond the edge).
- (b)(ii) calculate P (3): MS "Use of moment of a force = F x (1) / Applies principle of moments (1) / P = 52 N (1)". **COVERED** — Spec 15 worked card "A stone on a step" is this exact calculation (0.05 m vs 0.40 m, P = 52 N).

### Q14 — structured (7) — stress-strain / Young modulus — MATERIALS — skipped.

### Q15 — structured (14) — gymnast on a trampoline
- (a) maximum upward force (4): W = mg; P − W = ma; P = 1.4 × 10³ N. **COVERED** — Spec 9 worked card "A trampolinist's push" is this exact question (cited "*WPH11 January 2023, Q15*"), including the subtract-vs-add error note.
- (b)(i) tension from vertical component (2): T = 68 N ÷ sin 14° ≈ 300 N (spring at 14° to the horizontal → vertical component = T sin θ). **COVERED** — Spec 5 "How the angle decides the function" (θ from horizontal → vertical = F sin θ) + show-that extra-sf rule (Spec 1 note).
- (b)(ii) stiffness of spring (2) — **materials sub-part** (k = F/Δx, Spec 27) — skipped.
- (c)* 6-mark QoWC — how the forces affect vertical acceleration while in contact: MS indicative content = weight down; normal contact force up, varying with compression; resultant = difference; NCF < W → a downwards, NCF > W → a upwards; NCF zero at losing contact. **COVERED** — Spec 9 gives every ingredient: ΣF = ma def ("the acceleration ==in the direction of the resultant force=="), the bungee card (identical chain: contact force grows/falls with deformation, resultant zero at the equilibrium point, acceleration reverses sign), and the terminal-velocity chain. The trampoline is the bungee card's method in a new context.

### Q16 — structured (10) — spaceship modules
- (a) velocity of descent module after separation (4): initial momentum zero; p = mv with signs; v = 0.04 m s⁻¹ towards O. **COVERED** — Spec 14 worked card "A spaceship's modules separate" is this exact question, including the report note that "initial momentum being zero seemed to be a new concept to many candidates".
- (b)(i) rocket motor, Newton's laws (3): MS "The rocket motor exerts a force on the gases, so the gases exert a force on the rocket motor (1) / The forces are equal and opposite according to Newton's third law (dependent on MP1) (1) / So there is a resultant/net/unbalanced force on the descent module, which accelerates according to Newton's second law (accept Newton's first law)(independent mark) (1)". **COVERED** — Spec 12 worked card "A rocket accelerating" is this exact question, with the "name both laws" warning.
- (b)(ii) average force on the hot gas (3): a = 0.58/5.0 = 0.116 m s⁻²; ΣF = ma = 342 N (the force on the gas is equal in magnitude to the force on the module, by N3). **COVERED** — Spec 1 (v = u + at), Spec 9 (ΣF = ma), Spec 12 def (pair forces "equal in magnitude… acts on the other body").

### Q17 — structured (10) — High Striker
- (a) why KE of hammer head > ΔGPE on the way down (3): MS "The hammer head is not in free fall / Or Person is exerting a force on the hammer (1) / Work is done on the hammer head by the person (1) / So additional energy is transferred to kinetic energy (MP3 dependent on MP1 or MP2)". **COVERED** — Spec 7 def (free fall = only weight) identifies the missing force; Spec 17 def (work = energy transferred) + the cyclist card's multi-contribution accounting (total work = work against gravity + work against air resistance) give the "extra source of energy" structure.
- (b) deduce whether the cylinder hits the bell (5): ΔW = FΔs = 69.6 J; efficiency 4% → 2.78 J useful; cylinder needs mgΔh = 3.97 J for 2.7 m; 1.9 m < 2.7 m → no. **COVERED** — Spec 17 (ΔW = FΔs), Spec 22 (efficiency = useful/total), Spec 19 (ΔEgrav = mgΔh), deduce-verdict rule ("finish with the explicit comparison and a sentence", Spec 16 steps step 5; dart/golfer cards).
- (c) why the height gained doesn't double when v doubles (2): MS "(Ek = ½mv2 so) kinetic energy is proportional to square of velocity / kinetic energy multiplies by four (if v doubles) (1) / So cylinder could move through four times the distance (1)". **COVERED verbatim** — Spec 18 bullets: "Double the landing speed and the kinetic energy ==quadruples==, so the struck object could rise four times as far — *the height gained does not double*."

### Q18 — structured (12) — object sank from boat (mixed, mechanics parts)
- (a)(i) show drag ≈ 200 N at terminal velocity (5): U = ρVg (upthrust = weight of displaced fluid), W = mg, D = W − U. **Mechanics part of a mixed question: COVERED** — the terminal-velocity force balance W = U + D is taught (Spec 9 chain step 5, Spec 25 "Sinking at terminal velocity" and "Deducing whether Stokes' law applies: D = W − U"); the upthrust equation itself is Spec 24 (Materials agent's territory, and taught there anyway).
- (a)(ii) D = kv², find terminal velocity (2): v = √(D/k) = 9.1 m s⁻¹. **COVERED** — given formula + algebra.
- (a)(iii) two reasons Stokes' law could not be used (2) — MATERIALS sub-part — skipped.
- (b) why the lift bag and object reached a maximum velocity (3): MS "Drag force increases as velocity increases (1) / Until drag force plus weight equals upthrust (1) / (Resultant force is then zero) so the object stops accelerating (1)". **Mechanics part of a mixed question: COVERED** — Spec 25 "Rising objects" bullet is the exact equation ("A rising object at terminal velocity has zero resultant force: the upthrust on it = the weight of the object + the drag on it (**U = W + D**)") plus Spec 9's six-step chain (drag grows → resultant falls → balance → constant velocity). The notes' balloon mark-scheme wording note ("The same six steps answer the rising or falling version — the forces swap roles, the stages do not") covers the direction flip.

### Owner checks — 2023 January
- **Graph-conversion skills demanded:** exactly one item, Q7 (s–t → a–t for a vertical throw). It demands the two-gradient-step conversion, a below-the-axis constant a–t line, and the fact that a = −g at the highest point. The notes teach gradient/area meanings and the positive-case "one journey, three graphs" figure but **not** the conversion technique or the negative case → the paper's one conversion demand is not covered. No s–t → v–t construction, no a–t → v–t / v–t → s–t reverse directions, and no bouncing/rebound graph anywhere in this paper.
- **Core Practical 1 variants:** Q4 only (MCQ condition for an accurate g). Covered by the Spec 11 error table (air resistance + upthrust row; timer-start row). No strobe/light-gate/stopwatch calculation item in this paper.
- **"State what is meant by…" items:** equilibrium (Q13a(i)) and centre of gravity (Q13a(ii)) — both answered word-for-word by the Spec 16 and Spec 8 def cards.

---

## 2023 June

### Q1 — MCQ (1) — vector quantity
- Stem: which of efficiency / kinetic energy / power / weight is a vector. Answer **D (weight)**.
- Distractor facts (MS): "A is incorrect because efficiency is not a vector quantity"; energy and power are not vector quantities.
- Notes check: the Spec 4 scalar def card lists "distance, speed, mass, energy, work done, power, density, time, temperature" — **efficiency is never named as a scalar anywhere in the notes** (grep confirms). Energy and power scalars are taught.
- **VERDICT: PARTIAL (minor)** — the answer D is reachable from taught facts (weight is in the vector list), but the distractor-fact "efficiency is a scalar" is never stated. Goes to GAPS SUMMARY item 3.

### Q2 — MCQ (1) — work done at an angle
- Stem: wind force 225 N on a windsurfer moving 450 m at 40° to the wind; W = ? Answer **B: 225 × 450 × cos 40°**.
- Distractor facts: force not along the motion → use the component; sin/tan don't give the parallel component.
- **VERDICT: COVERED** — Spec 17 worked card "A box pulled by a rope" (30 N at 40° over 5 m → F cos 40° × d, cited "*WPH11 October 2023, Q10*") is the same item with different numbers; Spec 17 eq band ΔW = FΔs cos θ.

### Q3 — MCQ (1) — wire extension vs length/diameter — MATERIALS — skipped.

### Q4 — MCQ (1) — work done to extend a spring (area under F–x graph) — MATERIALS — skipped.

### Q5 — MCQ (1) — Newton's third law pair, "not true" statement
- Stem: which statement is **not** true of a N3 pair? Answer **A ("The forces act on the same object" is the false one)**.
- Distractor facts (MS): "B is incorrect because N3 pairs must have the same magnitude"; "C is incorrect because **N3 pairs must act at the same time**"; "D is incorrect because N3 pairs must be of the same type".
- Notes check: the Spec 12 four-properties table teaches equal magnitude, opposite direction, same type, different bodies — **simultaneity ("act at the same time") appears nowhere** (grep for "same time|simultaneous" returns nothing in the Topic 1 notes).
- **VERDICT: PARTIAL** — the four taught properties identify A as the false statement, but the distractor-fact "a third-law pair acts at the same time" is never taught. Goes to GAPS SUMMARY item 2.

### Q6 — MCQ (1) — Core Practical 1 graph variant
- Stem: g from timing falls over a range of s; which plot gives a gradient equivalent to g? Answer **B: 2s on y against t² on x**.
- Distractor facts: s vs 2t² gives gradient g/4; s vs 2t and 2s vs t have velocity-unit gradients (not g).
- **VERDICT: COVERED** — Spec 11 teaches "s = ½gt² (u = 0) … gradient of s against t² = g ÷ 2" and "compare with y = mx: a straight line through the origin whose gradient is ½g… Double the gradient — Gradient × 2 = g". Applying the taught y = mx comparison to 2s vs t² (gradient = g) is the same skill; the wrong-unit rejections come from the taught s–t gradient = velocity.

### Q7 — MCQ (1) — acceleration from v² = u² + 2as
- Stem: car 3 m s⁻¹ → 5 m s⁻¹ over 15 m; which expression gives a? Answer **D: (5² − 3²)/(2 × 15)**.
- Distractor facts: 15 is a distance not a time; the factor 2 belongs with s.
- **VERDICT: COVERED** — Spec 1 eq band + table row "u, v, s (no time) · a or v² · v² = u² + 2as"; rearrangement is algebra.

### Q8 — MCQ (1) — speed at the bottom of a frictionless slope
- Stem: object from rest, 20 m down a slope at 23°; final speed? Answer **C: 2 × 9.81 × 20 × sin 23°** (i.e. v² = 2g·(20 sin 23°)).
- MS reason: "Because KE gained is GPE lost and the height lost is 20 m × sin 23°".
- Distractor facts: cos 23° gives the wrong height component.
- **VERDICT: COVERED** — Spec 19 eq band "Δh = L sin θ (distance L along a slope at θ to the horizontal)" and the skier card (vertical drop = L sin θ, ½mv² = mgΔh, mass cancels).

### Q9 — MCQ (1) — viscosity/temperature/terminal velocity — MATERIALS — skipped.
### Q10 — MCQ (1) — springs in series stiffness — MATERIALS — skipped.

### Q11 — structured (3) — Mars/Earth fall ratio
- **VERDICT: COVERED** — Spec 1 worked card "On Mars" is this exact question (ratio technique, vM/vE = √0.38 = 0.62).

### Q12 — structured (5) — diver's s–t graph → v–t graph — **THE conversion question of these three papers**
- Stem (QP): man dives from a 12 m platform; "The graph shows the vertical displacement of the man from the water surface, after leaving the platform" (curve from +12 m, flattening into the water surface at ≈1.5 s, continuing to a maximum depth and returning, gradient zero again at ≈2.1 s). Then:
  - (a)(i) "State how the graph shows that the man's initial vertical velocity is zero. (1)"
  - (a)(ii) "Determine the vertical velocity of the man as he enters the water. (2)"
  - (b) "Before entering the water, the man has a constant vertical acceleration. After entering the water, the man has a constant vertical deceleration. **Draw the velocity-time graph** for the man on the axes below. (2)" (axes pre-printed ±20 m s⁻¹).
- MS verbatim:
  > 12(a)(i) (Initial) gradient = 0  Or  Tangent horizontal (at t = 0) (1) 1
  > 12(a)(ii) EITHER  Draws tangent at (1.5, 0.0) (1)  (−)14 ± 1 m s−1 by graphical method (1)  OR  suvat method using quantities read from the graph and/or a = ±g. (1)  Correct answer from suvat calculation (1) 2
  > 12(b) Straight line from 0 to (1.5, − [magnitude from (a)(ii)]) (1)  Second straight line from end of first line to (2.1, 0.0) (1) 2  [Ignore lines beyond 2.1 s]
- Knowledge/skill needed:
  1. gradient at t = 0 is zero → u = 0 (taught: "gradient of a displacement–time graph is velocity", Spec 2);
  2. tangent at the water-entry kink (1.5 s, 0 m) → v = **−14 m s⁻¹** — a signed answer, negative because displacement is decreasing (tangent method taught on a v–t in Spec 3's diver card, including the sign sentence "the answer carries the sign");
  3. constant acceleration → **straight** v–t segments (taught: "v–t: straight line · constant acceleration");
  4. v = 0 again at 2.1 s because the s–t gradient is zero at the maximum-depth turning point (partially taught: "s–t: curve flattening · velocity decreasing towards zero");
  5. **plot the whole journey in the negative-velocity region** — the descending dive has v below the time axis, drawn as two straight segments 0 → −14 → 0.
- Notes check: ingredients 1–4 are each taught somewhere (Spec 2 bullets and table, Spec 3 tangent card, diver-card sign rule). Ingredient 5 — the act of **constructing** a v–t graph from an s–t graph, including plotting the negative-velocity region below the axis for one journey — is taught nowhere: the only figure (Spec 2) is the all-positive "uniform acceleration from rest" triple; no worked example builds one graph from another; grep for conversion/drawing language ("draw the velocity-time", "plot", "below the … axis", "negative region") finds only the terminal-velocity sketch warning and the v–t area sign rule.
- **VERDICT: PARTIAL** — the gradient/area meanings, the tangent method and the straight-line-shape rule are taught; the conversion technique itself (s–t → v–t construction with a signed, below-the-axis velocity region) is not taught. Goes to GAPS SUMMARY item 1.

### Q13 — structured (4) — high-speed train energy accounting
- (a) show useful work ≈ 2 GJ (2): Ek = ½mv² = 0.5 × 7.2×10⁵ × 76² = 2.08 × 10⁹ J. **COVERED** — Spec 18 + show-that rule (Spec 1 note); the "work done to accelerate = KE gained" equivalence is the truck card's theorem used forwards (Spec 17: "the kinetic energy lost = the work done by the resistive force — the equivalence the reports say most candidates missed").
- (b) work done against air resistance (2): input energy = Pt = 16 MW × 180 s = 2.9 GJ; air-resistance work = 2.9 − 2.1 = 0.8 GJ. **COVERED** — Spec 21 (P = W/t) plus the cyclist card's accounting structure ("Total work = work against gravity + work against air resistance") and the train card ("the constant-speed climb splits the engine's output between the height gain and the resistive losses").

### Q14 — structured (4) — projectile range at launch height
- Stem: ball leaves bat at 37 m s⁻¹, 53° to horizontal; horizontal distance to return to launch height. Answer 130 m.
- MS: resolves components (1); s = ut + ½at² vertical with a = −g (1); horizontal with a = 0 (1); 130 m (1). Example uses t = 2 × 29.5 ÷ 9.81 = 6.02 s.
- Knowledge: resolving; full quadratic or "double the time to maximum height" (valid because it lands at launch height).
- **VERDICT: COVERED** — Spec 5 (components), Spec 7 eq band and worked cards; the golfer card explicitly teaches the doubling rule **with its validity condition**: "Doubling the time to maximum height works ==only when the projectile lands at its launch height==" — which is exactly this case.

### Q15 — structured (6) — ball-launching machine momentum
- (a) explain, in terms of momentum, why the machine moves (3): MS "Total momentum is conserved (because no external forces act)… (1) / Total/system/initial momentum is zero (1) / (Final momentum of machine is not zero because) final ball momentum is not zero  Or  Machine and ball have (equal but) opposite momenta (1)". **COVERED** — Spec 14 def (both halves: the sum and the no-external-force condition) + the spaceship card (initial total momentum zero; one part leaves with +p, the other must carry −p).
- (b) velocity of machine (3): p = mv; conservation; v = −0.087 m s⁻¹. **COVERED** — Spec 14 gliders card and eq band ("one direction positive, the other negative"); direction/verdict mark taught ("state the direction *and* the verdict… not just the number").

### Q16 — structured (7) — air bubble and Stokes' law — MATERIALS — skipped.

### Q17 — structured (8) — moored buoy (mixed, mechanics parts)
- (a)(i) show F ≈ 500 N (2): chain at 33° **to the vertical**; horizontal component F sin 33° balances the 260 N water force → F = 477 N. **Mechanics part of a mixed question: COVERED** — Spec 5 "How the angle decides the function" (θ from the vertical → components swap) is taught with the bird-on-a-wire card; equilibrium of horizontal forces is the Spec 16/Spec 9 first-law condition.
- (a)(ii) weight of buoy (3): vertical balance F cos 33° + W = upthrust (= 2.9 kN, given as the weight of displaced water); W = 2900 − 400 = 2500 N. **Mechanics part of a mixed question: COVERED** — component swap (bird card) + per-direction equilibrium (Spec 9 def, engine/truck card); the upthrust value is given in the stem.
- (b) how F and θ change when the horizontal force increases (3): MS "Horizontal component of F increases (to maintain equilibrium) and Vertical component of F remains the same (because vertical forces do not change, upthrust and weight are constant) (1) / F² = Fh² + Fv² so F increases [dependent on MP1] (1) / tan θ = Fh/Fv so θ increases [dependent on MP1] (1)". **Mechanics part of a mixed question: COVERED** — per-direction equilibrium reasoning (Spec 9/16), recombination by Pythagoras and tan⁻¹ direction (Spec 6 submarine card step 4: "R = √(31.0² + 18.2²) ≈ 36 N at tan⁻¹(18.2 ÷ 31.0)"), and the component-comparison reasoning pattern of the athlete card ("a larger launch speed leaves vV unchanged and grows vH…").

### Q18 — structured (6, *) — balloon rocket: all three Newton laws
- Stem: peg removed, air leaves the balloon, "The velocity of the balloon increases from zero to a maximum. Explain how Newton's three laws of motion apply…"
- MS indicative content: IC1 balloon exerts a backwards force on the air; IC2 by N3 the air exerts an opposite forwards force on the balloon; IC3 forward force > resistive forces; IC4 by N2 the resultant force causes acceleration; IC5 as speed increases the forces change until resistive force equals forward force; IC6 by N1 resultant force = 0 so a = 0 (at maximum speed).
- Knowledge: N3 action–reaction with expelled air; N2 resultant → acceleration; drag grows with speed; N1 balance at maximum speed.
- **VERDICT: COVERED** — Spec 12 rocket card (motor/exhaust-gases N3 pair — same physics), Spec 9 terminal-velocity chain steps 1–6 (including "6 · Terminal — … by Newton's first law, named") and the boat card (thrust + drag → terminal velocity). The chain "resultant > resistive → accelerate → forces change → balance → a = 0 at maximum speed" is the taught chain with thrust instead of weight.

### Q19 — structured (13) — crane
- (a) average power input at 47% efficiency (4): ΔW = FΔx = 6.6 × 10⁵ J; output power = 9.4 kW; **input = output ÷ efficiency** = 2.0 × 10⁴ W. **COVERED** — Spec 22 "Input from output: input = output ÷ efficiency… multiplying by the efficiency instead is the rejected option" (escalator card), plus Spec 17/21.
- (b)(i) explain how the counterweight moves when the load moves away (4): moments balance about the tower; beam weight's moment fixed (CoG unchanged); load's moment grows; counterweight distance must increase. **COVERED** — Spec 16 principle-of-moments def + bridge card step 4 (lorry moves → other side compensates, "the sum of moments remains zero for equilibrium") + "A uniform body's weight acts at its ==midpoint==".
- (b)(ii) deduce whether the load can reach the beam's end without toppling (5): limiting case x = (8.8×10⁵ − 3.0×10⁴×7.0) ÷ 4.4×10⁴ = 15.2 m < 22.0 m → topples. **COVERED** — Spec 16 worked card "A crane and its counterweight" is this exact question (cited "*WPH11 June 2023, Q19*"), same numbers, same verdict order.

### Q20 — structured (14) — actor on a harness (mixed)
- (a) yield point definition (1) — MATERIALS sub-part — skipped.
- (b)(i) why the forces cause upward acceleration (2): MS "The force/tension from/in the cable (on the actor) is greater than the weight of the actor (1) / (So) there is a resultant/net/unbalanced force (upwards) (1)". **Mechanics part of a mixed question: COVERED** — Spec 9 def (resultant → acceleration in its direction) + the athlete-jumping card (890 N > 680 N → resultant up → accelerates; same two-mark shape).
- (b)(ii) show tension ≈ 920 N (3): W = mg (1); ΣF = ma (1); T = 917 N (1), i.e. T − mg = ma. **Mechanics part of a mixed question: COVERED** — the trampolinist card (Spec 9) is the identical P − W = ma structure with W = mg as marking point 1.
- (b)(iii) stress vs 15% of yield stress (4) — MATERIALS sub-part — skipped.
- (c) work done to break the new cable (4) — MATERIALS sub-part — skipped.

### Owner checks — 2023 June
- **Graph-conversion skills demanded:** Q12 is a full s–t → v–t construction: (i) read zero initial gradient → u = 0; (ii) tangent at the water-entry point → signed v = −14 m s⁻¹; (iii) translate the two "constant acceleration / constant deceleration" statements into two straight v–t segments; (iv) use the s–t turning point (gradient zero) to pin v = 0 at 2.1 s; (v) draw the descending phase **below the time axis** (negative velocity). Items (i)–(iv) are each taught as isolated facts; the construction itself and the negative-velocity region are not. No a–t construction, no reverse-direction conversion, no bouncing/rebound graphs in this paper (the diver returns to the surface but only the v–t is demanded, ending at v = 0).
- **Core Practical 1 variants:** Q6 (MCQ) — which plotted graph yields gradient g (answer: 2s vs t²). Covered by the Spec 11 s-vs-t²/gradient-½g/double-the-gradient teaching plus the y = mx comparison. No uncertainty item in this paper.
- **"State what is meant by…" items:** none in mechanics this session (the only definition item is the materials "yield point", Q20(a)). Q12/Q15 are explain/calculate items.

---

## 2023 October

### Q1 — MCQ (1) — scalar/vector table row
- Stem: which row is correct? Answer **A (energy scalar, momentum vector)**.
- Distractor facts: displacement is a vector; mass is a scalar; velocity is a vector.
- **VERDICT: COVERED** — Spec 4 def cards and the scalar/vector pairs table (momentum listed as a vector; energy scalar; "momentum · kinetic energy" pair).

### Q2 — MCQ (1) — SI unit of momentum
- Stem: which is an SI unit for momentum? Answer **A (kg m s⁻¹)**.
- Distractor facts: J m⁻¹ is an SI unit of force; m s⁻² is acceleration; momentum units are kg m s⁻¹ or N s.
- **VERDICT: COVERED** — Spec 13 ("measured in ==kg m s⁻¹== (equivalently N s)"; not-accepted note: "kg m s⁻² (that is a newton)"); J m⁻¹ = N follows from the taught 1 J = 1 N m (Spec 17); m s⁻² acceleration is Spec 1's standard unit.

### Q3 — MCQ (1) — elastic limit — MATERIALS — skipped.

### Q4 — MCQ (1) — s–t shape of a ball falling through air from rest
- Stem: which displacement–time graph shows a ball falling from rest? Answer **C** (steepening curve through the origin).
- MS: A "would be stationary"; B "constant velocity"; D "decreasing velocity".
- **VERDICT: COVERED** — Spec 2 table row "s–t: curve steepening · velocity increasing (accelerating) — a falling ball" and rows for straight line (constant v) / flattening. This is pure shape-recognition, which the notes do teach.

### Q5 — MCQ (1) — GPE increase as work done against gravity
- Stem: helicopter rises with increasing speed; what describes the increase in GPE? Answer **C: the work done by the helicopter against the force of gravity**.
- Distractor facts: work done **by** gravity is negative on the way up (A); "total work done" includes the KE increase (B); the work done to increase speed is the KE increase (D).
- **VERDICT: COVERED** — Spec 17 eq band "work done against gravity = mgΔh" and the truck card step 3: "the increase in gravitational potential energy of a lifting machine is the work it does ==against== gravity". The KE/GPE split of total work is the cyclist card's accounting.

### Q6 — MCQ (1) — KE doubled → new velocity
- Answer **A: √2 v**. MS reason (all distractors): "Ek ∝ v² or v ∝ √Ek; if 2Ek then vnew = √2 v".
- **VERDICT: COVERED verbatim** — Spec 18 bullets: "Double the kinetic energy and the new speed is √2 × the old one — the square root undoes the square."

### Q7 — MCQ (1) — power-station efficiency
- Stem: output 2.1 GW, 3.4 GW to surroundings; efficiency = ? Answer **A: 2.1/(3.4 + 2.1)**.
- Distractor fact (MS, all): "useful output = 2.1 GW and total input = 3.4 + 2.1 GW".
- **VERDICT: COVERED** — Spec 22 table row "Total input = useful output + waste · putting the waste in the numerator" + "Dissipated power" bullet + the hydroelectric card's power-station accounting.

### Q8 — MCQ (1) — wire extension scaling — MATERIALS — skipped.

### Q9 — MCQ (1) — vector equilibrium sentence
- Stem: box suspended by two ropes; which vector expression relates W, T1, T2? Answer **D: W + T1 + T2 = 0** (arrow notation).
- Distractor fact (MS, all): "the addition of vector forces on an object in equilibrium = 0".
- **VERDICT: COVERED verbatim** — Spec 4 vector-notation paragraph ("An equilibrium condition written as one vector sentence — **W** + **T**₁ + **T**₂ = **0** — is a statement about arrows") and the "Mark scheme wording" note rejecting the bare-number additions. This MCQ is the taught item.

### Q10 — MCQ (1) — work done by an inclined rope
- Answer **B: 115 J** (= 30 × cos 40° × 5). **VERDICT: COVERED** — Spec 17 worked card "A box pulled by a rope" is this exact question (cited "*WPH11 October 2023, Q10*"), distractor-by-distractor.

### Q11 — structured (4) — rocket launch
- (a) initial acceleration (3): W = mg = 4.9 × 10⁷ N; ΣF = 7.3 × 10⁷ − 4.9 × 10⁷; a = 4.8 m s⁻². **COVERED** — Spec 9 worked card "A rocket lifting off" (thrust is not the resultant).
- (b) one reason the acceleration increases (1): mass/weight falls as fuel is used (or thrust↑ / resultant↑). **COVERED** — same card, step 3.

### Q12 — structured (6) — gliders and conservation of momentum
- (a) state the principle (2): MS "Total momentum before (a collision) = total momentum after (a collision) Or total momentum remains constant (1) / When no external force acts Or When no resultant force acts on the system Or In a closed / isolated system (1)". **COVERED** — Spec 14 def card matches both marking points ("Both halves earn a mark each — the *sum* and the *condition*").
- (b)(i) deduce whether the results (equal masses stick, final v = ½ initial v) show the law obeyed (2): momentum = mass × velocity; combined mass is double, velocity half → momentum unchanged → law obeyed. **COVERED** — Spec 13 def + Spec 14 (gliders card; "the ==comparison== between the two totals is the marking point").
- (b)(ii) why the magnetic attraction did not affect the demonstration (2): equal-size opposite-direction forces (N3 pair) internal to the system; resultant on the system zero / not external forces. **COVERED** — Spec 12 worked card "Two magnetic gliders" is this exact question (cited "*WPH11 October 2023*"), including the "must say *on the system*" warning.

### Q13 — structured (7) — tennis ball machine (horizontal projectile)
- (a)(i) show t ≈ 0.7 s (2): s = ½gt², t = 0.72 s. **COVERED** — cliff-stone card method (vertical column first, uV = 0) + show-that rule.
- (a)(ii) initial speed given landing at 17.89 m (2): u = 17.89/0.72 = 24.8 ≈ 25 m s⁻¹. **COVERED** — horizontal column a = 0, s = vH·t (Spec 7 eq band).
- (b) effect of increased initial speed on the landing angle (3): MS "(If the initial velocity is increased) the horizontal (component of) velocity is larger (1) / The vertical (component of) velocity as the ball hits the ground is not affected (1) / (When θ is the angle to the horizontal), tan(θ) = vV/vH so θ decreases … Or Labelled vector diagram (1)". **COVERED** — Spec 7 independence def (separate clocks) + the athlete card step 4, which is this exact reasoning ("a larger launch speed leaves v~V~ unchanged and grows v~H~, so the landing gets ==shallower=="), plus tan θ component ratio (Spec 6 submarine card).

### Q14 — structured (7) — exercise machine cable
- (a) scaled vector diagram for the tension (4): two equal tensions T at 60° to each other held by F = 121 N; MS "Straight arrow at least 6cm long representing F, with label (1) / Vector triangle drawn with at least two sides in the triangle labelled, and F on the longest side (1) / All three arrows in correct relative directions (dependent on MP2) (1) / T = 70 N (allow range of 65 to 75 N) (1)". **COVERED** — Spec 6 steps panel (scale with longest arrow ≥6 cm; tip-to-tail; label every arrow; close the triangle; measure) + the symmetric-pair algebra of the traffic-lights card (2T cos 30° = 121 N). 
- (b) deduce whether the displayed 35 W is consistent (3): ΔW = 150 × 0.25 = 37.5 J per pull; 90 pulls in 120 s → P = 28 W ≠ 35 W → not consistent. **COVERED** — Spec 21 worked card "An exercise machine's display" is this exact question (cited "*WPH11 October 2023*"), including the backwards-working alternatives the MS allows.

### Q15 — structured (8) — loft ladder
- (a) centre of gravity definition (1): MS "Point through which weight may be taken to act (1)". **COVERED** — Spec 8 def card (same "may be taken to act" wording).
- (b)(i) explain why the board and ladder stay put (5): MS "Determines distance from hinge to centre of gravity of ladder (0.50 m) (1) / Use of moment = Fx (1) / Moment (of weight of ladder about hinge) = 27 (N m) and moment (of weight of board about hinge) = 22.5 (N m) … (1) / Combined moment … is clockwise. Or clockwise moment is greater than anticlockwise moment (1) / The block causes a force / moment so the resultant moment … is zero (1)". **COVERED** — Spec 16 worked card "A loft ladder on a hinge" is this exact question with these numbers, including the report note that appreciating the block's moment "was rare".
- (b)(ii) force 0.80 m from the hinge to rotate the board (2): F = 4.5/0.80 = 5.6 N. **COVERED** — same card, step 6.

### Q16 — structured (11) — electromagnet and steel object (mixed)
- (a) two reasons weight and the electromagnet's force are not a N3 pair (2): MS "They act on the same object (1) / They are not the same type of force (1)". **Mechanics part of a mixed question: COVERED** — Spec 12 four-properties table + cable-car card step 4 ("Weight and normal contact force fail twice at once: they act on the ==same body== and they are of ==different types==") — identical two-failure structure.
- (b)(i) Young modulus from strain/stiffness (4) and (b)(ii) strain-energy/GPE graph discussion (5) — MATERIALS sub-parts — skipped (the only mechanics fact inside (b)(ii), "change in GPE of the electromagnet is weight × change in extension", is Spec 19's ΔEgrav = mgΔh).

### Q17 — structured (14) — weather balloon (mixed, mechanics parts)
- (a) upthrust definition (1) — MATERIALS sub-part (the Spec 24 card matches the MS wording exactly) — skipped.
- (b)(i) show weight ≈ 13 N (3): U = ρVg = 19.7 N; ΣF = U − W = ma → m = U/(a + g) = 1.35 kg; W = 13.2 N. **Mechanics part of a mixed question: COVERED** — ΣF = ma with upthrust vs weight for an accelerating body is the Spec 8 card "The diagram when the object accelerates" (90 − 49 − drag = ma, solve for the unknown force) with the unknown on the weight side; the rising-object resultant U − W is the balloon chain (Spec 25/Spec 9).
- (b)(ii) deduce whether the balloon can support the equipment at 25 km without bursting (4): read ρ ≈ 0.05 kg m⁻³ off the density–height graph; V = W/(ρg) ≈ 27 m³ < 50 m³ → yes. **Mechanics part of a mixed question: COVERED** — the stop-rising equilibrium U = W is taught (Spec 24 "Floating: U = W" + balloon card), W = mg (Spec 10), and the deduce-comparison verdict is the standing rule; the graph read-off is a plain intermediate-value read (notes teach reading values off printed graphs; sig-fig guidance for graph reads appears in the standing rules).
- (c)* 6-mark QoWC — velocity from release to maximum height, drag ignored (6): MS IC1 upthrust > weight; IC2 resultant upward; IC3 velocity increases; IC4 after maximum volume, upthrust decreases as height increases (air density falls); IC5 until upthrust < weight → resultant downwards; IC6 velocity decreases to zero. **Mechanics part of a mixed question: COVERED** — Spec 25 "A balloon rising through the atmosphere" reproduces this exact chain and even quotes the mark-scheme wording ("*upthrust greater than weight*; *the resultant force is upward*; *velocity increases / the balloon accelerates (upwards)*; *after the balloon reaches maximum volume, upthrust decreases as height increases (density of surrounding air decreases)*; *until upthrust is less than weight so there is a resultant force downwards*;…") plus the examiner-report warning that "while the upthrust still exceeds the weight, the balloon ==still speeds up==, just more and more slowly".

### Q18 — structured (13) — ball-bearing falling through a liquid (mixed)
- (a) conditions for Stokes' law (2) — MATERIALS sub-part — skipped.
- (b)(i) explain the shape of the displacement–time graph (3, max): MS "Initially the velocity is zero so gradient is zero (1) / As velocity increases the gradient changes (1) / As velocity increases, drag increases (1) / Until terminal / constant velocity when the gradient becomes constant. (1) [Max 3]". **Mechanics part of a mixed question: COVERED** — the taught chain maps point-for-point: gradient = velocity (Spec 2/3), fall from rest = curve through the origin with increasing gradient (Spec 2 ball-falling bullets), drag grows with speed and the resultant falls (Spec 9 chain steps 3–4), constant gradient = constant velocity (Spec 2 table row "s–t: straight line · constant velocity"). The "explain through the graph" discipline (name the gradient, then the forces) is the Spec 2 opening bullet with its examiner-report note.
- (b)(ii) viscosity calculation (4) and (b)(iii) temperature/viscosity explanation (4) — MATERIALS sub-parts — skipped.

### Owner checks — 2023 October
- **Graph-conversion skills demanded:** recognition only — Q4 (s–t shape of a falling ball, taught row) and Q18(b)(i) (explain the s–t shape via gradient + force chain, taught chain). **No construction-type conversion** (no s–t → v–t or s–t → a–t building, no reverse directions, no bouncing/rebound graphs) in this paper. So the conversion gap is exercised by January (MCQ) and June (structured) only.
- **Core Practical 1 variants:** none in this paper — October's practical questions are Core Practical 2 territory (falling-ball viscometer, Q18). Owner note: CP1 appears in these three sessions only as the January Q4 condition MCQ and the June Q6 graph-choice MCQ; no strobe/light-gate/stopwatch calculation or uncertainty item in any of the three.
- **"State what is meant by…" items:** centre of gravity (Q15a — matches Spec 8 card), conservation of linear momentum (Q12a — matches Spec 14 card), upthrust (Q17a — materials; matches Spec 24 card).

---

## Materials — skipped

Analysed for mechanics where mixed; listed here in one line each:

- 2023-Jan Q9 (MCQ): quantities to measure for Young modulus (diameter + original length).
- 2023-Jan Q12 (structured, 6): falling-ball viscometer — drag from balance/calliper measurements; viscosity via Stokes' law.
- 2023-Jan Q14 (structured, 7): elastic deformation definition; Young modulus from stress–strain graph; deduce compression of a rod.
- 2023-Jun Q3 (MCQ): wire length/diameter for greatest extension.
- 2023-Jun Q4 (MCQ): work done to extend a spring = area under F–x graph.
- 2023-Jun Q9 (MCQ): viscosity/drag/terminal velocity vs temperature.
- 2023-Jun Q10 (MCQ): stiffness of springs in series.
- 2023-Jun Q16 (structured, 7): Stokes' law condition; upthrust of a bubble; deduce whether Stokes' law applies.
- 2023-Oct Q3 (MCQ): elastic limit description.
- 2023-Oct Q8 (MCQ): wire length/diameter for 2Δx extension.
- Materials sub-parts of mixed questions (not analysed): 2023-Jan Q15(b)(ii) stiffness; 2023-Jun Q20(a) yield point, Q20(b)(iii) stress check, Q20(c) work to break cable; 2023-Oct Q16(b)(i)–(ii) Young modulus and strain-energy graph discussion; 2023-Oct Q18(a) Stokes' conditions, (b)(ii) viscosity, (b)(iii) temperature effect.

---

## GAPS SUMMARY

1. **The motion-graph conversion technique is never taught — the notes stop at gradient/area meanings.** Occurrences: **2023-Jan Q7** (MCQ: vertical throw, "Which graph shows the acceleration of the ball against time?", answer B = constant line below the axis) and **2023-Jun Q12** (5-mark structured: diver's s–t graph → "Draw the velocity-time graph for the man on the axes below"). Missing knowledge, precisely: (a) building a v–t graph from an s–t graph (tangent/gradient at key times → plot the v–t points, join with straight segments because constant acceleration = straight line); (b) building an a–t graph from a v–t (or directly from an s–t) by a second gradient step; (c) drawing the below-the-axis (negative-velocity / negative-acceleration) region for one journey — the notes' only three-graph figure is the all-positive "uniform acceleration from rest" case and its table says "a–t: any value above zero"; (d) the fact that a vertically thrown ball has constant acceleration −g throughout the flight, including at the highest point where v = 0 but a ≠ 0. MS proof: Jun-23 12(b) "Straight line from 0 to (1.5, − [magnitude from (a)(ii)]) (1) / Second straight line from end of first line to (2.1, 0.0) (1)" with 12(a)(ii) "(−)14 ± 1 m s−1 by graphical method"; Jan-23 Q7 "The correct answer is B … A is not the correct answer because the acceleration is not positive / C … the acceleration does not increase / D … the acceleration does not decrease". (No bouncing/rebound s–t/v–t question appears in these three sessions; the same gap would cover one if set.)
2. **Newton's-third-law simultaneity is never stated.** Occurrence: **2023-Jun Q5** (MCQ, "Which of the following statements is not true?" about a N3 pair; answer A). Missing knowledge: a third-law pair acts at the same time — the notes' four-property table (equal magnitude / opposite directions / same type / different bodies) omits it. MS proof: "C is incorrect because N3 pairs must act at the same time".
3. **Efficiency is never named as a scalar.** Occurrence: **2023-Jun Q1** (MCQ, "Which of the following is a vector quantity?"; answer D weight). Missing knowledge: the notes' scalar def card lists distance, speed, mass, energy, work done, power, density, time, temperature — never efficiency — so the distractor-fact "efficiency is a scalar" is untaught (the answer is still reachable because weight is taught as a vector). MS proof: "A is incorrect because efficiency is not a vector quantity".
