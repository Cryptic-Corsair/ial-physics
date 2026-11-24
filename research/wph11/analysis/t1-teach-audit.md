# WPH11 Topic 1 (Forces) — research and analysis for the teaching rebuild

Method first. This document is the evidence base for rebuilding the Forces note as teaching, not as an information dump. Sources read in full or swept systematically:

- **Specification** — statements 1–11 (spec.txt), read directly.
- **Question papers** — all 25 sessions from January 2019 to June 2026 (including the 01A variants). Every question extracted by script from the QP text files (`scripts/t01-research-secb.py`, sweep outputs in /tmp/qp-allq.txt), stems read question by question; nothing below is invented.
- **Mark schemes and examiner reports** — the four digests (A: Oct 2022 + Jan 2023, B: Oct 2023 + Jan 2024, C: Oct 2024 + Jan 2025 + Oct 2025, D: June sessions + Oct 2021) and the four per-session coverage passes (`t1-mech-a..d.md`) with their verbatim MS quotes and ER quotes.
- **The official Pearson IAL Physics Student Book** (sample chapters, Topic 1 Mechanics) — fetched and read for its teaching sequence and graph treatment.
- **PMT and SaveMyExams** — structure surveyed via their Unit 1 pages.

---

## 1. What the exam actually asks, statement by statement

Frequency note: 25 sessions. Section A is always 10 MCQs (Q1–10); Section B is structured questions (Q11–19/20). A statement examined as a 1-mark MCQ in nearly every session is a "always-on" item — students must be drilled on the exact discrimination, not the general idea.

### Statement 1 — the four suvat equations

**How it is asked.**
- MCQs asking *which expression* gives the acceleration/deceleration/distance: 2021-Jan Q1 (car braking over 20 m: v²/(2s)); 2023-Jan Q5 (35→50 m s⁻¹ in 5.0 s: s = ½(u+v)t); 2023-Jun Q7 (3→5 m s⁻¹ over 15 m: (5²−3²)/(2×15)); 2022-Jan Q5 and 2026-Jan-01A Q6 (Moon: s = ½at² rearranged, 0.32/(0.63²)); 2026-Jan Q2 (s ∝ t²).
- MCQs where suvat is one step of a bigger idea: 2022-Jun Q6 (a = F/m with falling mass); 2024-Jan Q5 (which quantities change when air resistance is ignored); 2025-Oct-01A Q8 (acceleration at the top of a vertical throw = −9.8, not zero).
- Structured: the projectile chains (statement 7) are suvat in disguise — show-that first steps are always "Use of v² = u² + 2as" or "Use of s = ut + ½at²" on one column. 2025-Jun Q20(a) is a pure suvat item inside a skydiver context (11 m in 1.5 s from rest).

**What the MS demands.** One marking point per equation choice, always phrased "Use of …". The distractor options are almost always *algebraically plausible* — e.g. 2023-Jun Q7's options are (5−3)/15, √((5²−3²)/2×15)... each distractor is a different wrong equation. Teaching must therefore be built around **which equation fits which missing variable**, not around memorising four formulas.

**What the ERs flag.** The recurring error is using the wrong pairing (mixing the s and v² equations) and sign slips on deceleration — the sign convention must be taught explicitly (the lift-scales and wall-rebound cards already model it; the rebuild must make the convention a first-class teaching point, not a card footnote).

### Statement 2 — draw and interpret d–t, v–t, a–t graphs

**How it is asked.** This is the most examined graph family on the paper, and the formats repeat every year:
- *Read the graph*: 2022-Jan Q1 (walk: final displacement + velocity from a d–t graph); 2024-Jun Q2 (what does the v–t shape describe); 2024-Oct Q3 (average velocity from a d–t graph — answer "displacement at 4 h ÷ 4 h", distractors are instantaneous gradients at 2 h and 4 h); 2025-Jan Q8 (trapezium v–t, distance in time 2t).
- *Draw/choose the other graph*: 2022-Jan Q3 (v–t given, choose the s–t); 2022-Oct Q4 (a–t given, choose the v–t); 2025-Oct Q9 (a–t given, choose the s–t); 2026-Jan Q6 (constant deceleration → v–t shape); 2023-Jan Q7 (vertical throw: choose the a–t — constant line below the axis); 2026-Jun Q6 (a–t with a_max from t₁ to t₂ → velocity at t₂).
- *Describe the motion from the graph*: 2019-Jan Q11 (3 marks: v–t with positive and negative regions, "Describe how the acceleration … varies" then velocity changes).
- *Draw the derived graph on printed axes*: 2023-Jun Q12(b) (diver's d–t given, draw the v–t — MS wants "Straight line from 0 to (1.5, −14) then straight back to 0 at 2.1", 2 marks); 2024-Jan Q16(a) (average acceleration of a struck skittle from a v–t); 2026-Jun Q15 (elevator v–t given, questions on it).

**What the MS demands.** For "draw the v–t" items: one mark per straight segment, with the *sign* of the value (the diver's v is −14 m s⁻¹, below the axis) and the shape change exactly at the phase boundary. For "explain the shape" items the ER quote in the notes is already the warning: *"the answers did not often refer to the graph, and therefore could not explain the shape"* — every explanation must name gradient/intercept/area/shape.

**What the ERs flag.** The Oct 2023 ER on the data-logger d–t curve: *"A common misconception was that the increasingly negative gradient showed a decreasing speed, rather than showing an increasing downwards speed"* — the sign-vs-speed confusion is exactly what the rebuild's below-axis sections must kill.

### Statement 3 — slopes and areas, including non-uniform acceleration

**How it is asked.** Usually fused with statement 2 (the same question tests both). Pure statement-3 items: 2021-Oct Q1 (which y-axis quantity has which gradient — table); 2022-Jun Q8 (areas P, Q, R on a v–t with a negative region: displacement = P + Q − R); 2025-Jan Q5 (deceleration–time graph: shaded area = change in velocity); 2024-Jan Q10 (area under a–t = Δv, then which expression); 2019-Oct Q4 (area under which graph is *not* work done — a cross-topic discrimination item). Tangent reading: 2023-Jun Q12(a)(ii) (−14 m s⁻¹ "by graphical method"); the strobe practical (statement 11) is tangent-reading in context.

**What the MS/ER demand.** Non-uniform acceleration is examined through the terminal-velocity curve (2019-Jan Q11's shape; 2023-Oct Q18 data-logger curve) and through the skydiver's a–t curve. The average-vs-instantaneous discrimination (2024-Oct Q3) is a standing trap: **the chord gradient is the average velocity; the tangent is the instantaneous velocity** — never stated in the current notes, confirmed as a PARTIAL gap by t1-mech-d.

### Statement 4 — scalars and vectors

**How it is asked.** The most predictable MCQ on the paper — present in essentially every session, phrased one of three ways: (a) "Which of the following is a vector/scalar quantity?" (2019-Jan Q1, 2022-Jun Q3, 2022-Oct Q2, 2023-Jan Q1, 2023-Jun Q1, 2025-Oct-01A Q1, 2026-Jan-01A Q1, 2026-Jun-01A Q1); (b) "Which row of the table is correct?" with three quantities at once (2022-Jan Q2, 2023-Oct Q1, 2024-Jan Q2, 2024-Oct Q2, 2025-Jan Q3); (c) the unit route — "which unit can only be used for a vector/scalar" (2019-Jun Q1, 2020-Oct Q1, 2025-Oct-01A Q3, 2026-Jan Q1). The option pools rotate through: momentum/weight/force (vectors) vs kinetic energy/work done/power/density/efficiency/temperature/time (scalars).

**What the MS demands.** Nothing subtle — but the *distractor facts* require the classification of every quantity on the data sheet plus a few beyond it (momentum, efficiency, viscosity, strain, Young modulus). t1-mech-c lists "efficiency is a scalar" and t1-mech-a lists "viscosity is not a vector" as taught-nowhere facts that distractors assume.

### Statement 5 — resolving into components

**How it is asked.**
- MCQ expression-picking from a diagram with the components printed: 2021-Oct Q4 (13.2 and 5.5 at 22.6° — which expression gives the magnitude); 2024-Oct Q9 (two boats at 31° and 27°: forwards component of the total force); 2024-Jan Q6 (bird on a string at 80°: T = W/(2 sin 80°)); 2025-Jan Q10 (traffic lights at θ: T = W/(2 sin θ)); 2023-Oct Q9 (which *vector equation* relates T₁, T₂, W).
- Structured: 2019-Oct Q11 (3 marks, explain how work done varies as the rope angle varies — component reasoning in words); 2024-Oct Q5 (why a box slides at constant speed — component of weight parallel = resistive forces).
- The sine-vs-cosine decision is the entire question: every distractor is the same expression with the wrong function or the wrong denominator.

**What the MS/ER demand.** The t1-mech verdicts already quote the standing MS warnings — *the components of T acting vertically should be cos and should form the denominator* — and the ER on the initial-velocity component slip in projectile launches. The rebuild must teach the reference-line rule ("the angle is always measured from something; adjacent side → cos, opposite side → sin") as a diagram-first method.

### Statement 6 — resultants

**How it is asked.**
- *By drawing, at any angle*: 2019-Jun Q9 (scale drawing of two bearing walks, choose the resultant); 2021-Jun Q10 (which is a correctly drawn scaled vector diagram); 2022-Oct Q7 and 2026-Jan-01A Q2 (which vector diagram shows the resultant of X and Y); **2024-Oct Q11 (2 marks, structured: "Determine the magnitude of the resultant force using a scaled vector drawing" for 1200 N ⊥ 2300 N)**; 2025-Oct-01A Q5 (same format).
- *By calculation, at right angles*: 2026-Jan Q5 (20 N ⊥ 35 N: which expression).
- *By calculation at any angle via the bisector trick*: 2024-Jun Q19(b)(i) (two cable segments at 144°: R = 2 × 1200 × cos 72° ≈ 740 N — show that).
- Equilibrium versions: 2025-Oct Q12 (350 N north + 410 N at 120°: resultant, structured); 2025-Jun Q7 (helicopter three-force resultant).

**What the MS/ER demand.** The ER warnings are already quoted in the notes (*"Many candidates drew a free-body force diagram rather than a scaled vector diagram"*; *"labelled their vectors with the length of the arrow"*) — but the *how to draw* is taught in four compressed bullets. The bisector result (two equal forces → resultant along the bisector, halve the angle) is a confirmed PARTIAL gap (t1-mech-d item 2).

### Statement 7 — projectile independence

**How it is asked.** The richest structured-question family in Unit 1 — at least one long projectile chain in almost every session: 2019-Jan Q16 (Schiaparelli Mars probe, 11 marks); 2019-Jun Q14 (firework); 2019-Oct Q13 (golf, 11 marks); 2021-Jun Q14 (skier off a ramp); 2021-Oct Q16 (exploding rock, 9 marks); 2022-Jan Q18 (stunt motorcyclist, starred); 2022-Jun Q18 (golfer, 8 marks); 2023-Jan Q11 (stone from a cliff); 2023-Jun Q14 (ball off a bat at 53°); 2023-Oct Q13 (tennis ball machine); 2024-Jan Q12 (darts); 2024-Jun Q17 (stone into a tyre); 2025-Jun Q13 (basketball); 2025-Oct Q19 (shot put); 2025-Oct-01A Q17 (flare); 2026-Jan Q18 (satellite → Moon projectile); 2026-Jun Q18 (ball from a cliff).
MCQs: the drop-off-a-table item (2019-Jun Q4); the vacuum-chamber two-object item (2021-Jun Q7 — "which quantity is the same for both"); the component-of-velocity item (2025-Oct-01A Q6); the ball-off-table mass item (2025-Jun Q3 — doubling mass and speed).

**What the MS demands.** Always the same skeleton: resolve the launch velocity into components (1) → suvat on the vertical column (1) → horizontal column at constant velocity (1) → combine (1). The MS quotes in the digests show the standard steps verbatim ("Vertical component, uV = u sin 35° (1)"). The two gap facts confirmed by t1-mech-a item 4: **vertical velocity is zero at maximum height** and (item 7) **speeds from separate falls cannot be subtracted**.

**What the ERs flag.** The recurring report line (quoted in a notes card already): candidates use the full speed instead of the component, or drop the minus sign. The rebuild needs a dedicated "the two columns" diagram (launch → apex → landing) — the current single ph-projectile figure carries the whole weight.

### Statement 8 — free-body diagrams

**How it is asked.** A "complete the free-body force diagram" part inside a bigger structured question is a fixture: 2021-Jan Q18(a) (polystyrene bead rising, 3 forces); 2021-Oct Q13(a) (sledge on a frictionless slope, 2 forces); 2022-Jun Q11(a) (disc on a magnetic base); 2025-Oct-01A Q19(a) (sphere suspended in water on a balance); 2023-Jan Q6 (soap bubble FBD as MCQ discrimination). Equilibrium-from-a-diagram MCQs: 2021-Oct Q5 (beam + pivot + force: which arrangement cannot be in equilibrium); 2024-Jan Q18 (door on two hinges, state the equilibrium conditions); 2025-Oct Q6 (plank on two supports, vector diagram choice); 2025-Jun Q5 (picture wire, T₁ = T₂ reasoning); 2025-Jun Q9 (accelerating body with upthrust 90 N, weight 49 N: which expression gives drag).

**What the MS/ER demand.** The quoted ER warnings: arrows must start on the body, lengths represent sizes, label with the force's name and owner, weight is not "G". The t1-mech-b gap: **a scale reading is the normal contact force** (never taught). The rebuild must teach the drawing rules as a step-by-step method with a gallery of bodies (block on slope, rising bead, hanging sign, lift person) — one figure cannot carry it.

### Statement 9 — ΣF = ma, first law, terminal velocity

**How it is asked.**
- One-step ΣF = ma MCQs: 2025-Jan Q11 (1850 kg + people at 0.230 m s⁻², find total mass); 2025-Jun Q11 (4800 N, 0.31 m s⁻², find the *weight* — fusing statements 9 and 10); 2024-Jun Q10 (ship: drag = engine force − ma); 2025-Oct Q11 (lorry, 2 marks); 2026-Jun Q10 (athlete at 30 m s⁻² — which expression).
- First-law reasoning MCQs: 2019-Jun Q2 (rocket in orbit — uniform velocity by N1); 2021-Jun Q3 (van at constant velocity — *the friction from the road is the driving force*, a confirmed GAP, t1-mech-a item 5); 2024-Oct Q5 (box on slope at constant speed); 2025-Jun Q8 (F = W cos θ on a ramp).
- Terminal velocity: 2025-Jan Q20(a) (submarine, explain why terminal velocity is reached, 4 marks — the starred scaffold); 2024-Jun Q14 (sand grain, 1 mark state why); 2022-Jan Q7 (trolley N3 discrimination); 2022-Oct Q11 (motorboat chain); 2020-Oct Q12 (trolley stopped by friction).
- The lift family: 2022-Jan Q14* (scales in a lift, starred 6 marks) — the current notes' card covers it, but the scale-reading-is-contact-force IC is still untaught.
- FBD+ΣF fused: 2021-Oct Q10 (rocket with thrust, drag D: which equation gives D); 2025-Jun Q9 (helicopter… no, that's the balloon).

**What the MS/ER demand.** Terminal-velocity explanations are marked as a force chain: weight constant → drag grows with speed → resultant falls → acceleration falls → terminal when drag (+upthrust) = weight. The ER for the starred items rewards structure — the standing band wording (*coherent and logical structure with linkages…*) is taught nowhere (t1-mech-b gap 3).

### Statement 10 — g = F/m and W = mg

**How it is asked.** Definition MCQs: 2020-Jan Q2 and 2023-Jan Q2 ("gravitational field strength" — weight per unit mass; the rejected distractors force per unit length, acceleration per unit mass, energy per unit mass). Calculation MCQs: 2021-Jun Q2 (density of aluminium from its weight — W→m→ρ chain); 2025-Jun Q11 (resultant force 4800 N and acceleration 0.31 m s⁻², "Calculate the weight of the boat" — fusing statements 9 and 10); 2026-Jun-01A Q2 (which is a correct unit for acceleration — N kg⁻¹). In structured work W = mg is the opening step of nearly every energy and force chain (the rocket, lift, trampolinist, terminal-velocity cards).

**What the MS/ER demand.** The g = 9.81 rule (9.8 accepted; 10 costs a mark once) and the N-not-kg unit discipline. The current spec-10 section is one def card + one eq band + three bullets + one worked card — the thinnest section in the note, against a statement that opens most long questions.

### Statement 11 — Core Practical 1

**How it is asked.** A whole practical-question family, more heavily examined than the current note's weight suggests:
- *Method choice and reading*: 2020-Oct Q7 (which two quantities need the fewest measurements); 2026-Jun-01A Q3 (the only two quantities required); 2023-Jan Q4 (the condition needed to determine g by timing a fall); 2022-Jun Q5 (why a student got g = 11.2 — error direction).
- *Graph methods*: 2023-Jun Q6 (which plot gives gradient g — s against t²); 2025-Jan Q7 (height on y, what on x, what gives gradient g); 2025-Oct-01A Q4 (same family); 2026-Jun Q4 (which measurements would *not* be sufficient).
- *Structured practicals*: 2019-Jan Q12 (light gate + rod, 7 marks); 2024-Oct Q14 (strobe + metre rule, 6 marks — determine g from flash images); 2025-Oct Q13 (two methods compared, 5 marks); 2020-Jan Q16(a) (popcorn strobe with a printed scale — the scale-factor conversion is a confirmed GAP, t1-mech-a item 6).
- *Error analysis*: 2024-Jun Q8 (which mistake gives g > 9.81); the reaction-time/percentage-uncertainty chain in the current table.

**What the MS/ER demand.** The ER line quoted in the notes (*"Explaining how a graph of the results should be used to determine a value is a skill which candidates need to practise"*) plus the standard marking: apparatus (1) → measurement (1) → graph/gradient method (1) → g value with unit (1), and error-direction judgements (too large/too small with the reason).

---

## 2. What our current note does — the honest audit

Block counts per statement (from the audit script): S1 {eq 1, bullets 2, table 1, note 1, worked 3} · S2 {bullets 5, note 2, figure 1, table 1, h 5, steps 1, worked 1} · S3 {bullets 2, table 1, worked 2} · S4 {def 2, table 2, h 4, bullets 4, note 1} · S5 {eq 1, figure 1, h 1, bullets 1, worked 3} · S6 {bullets 2, steps 1, worked 2} · S7 {def 1, table 1, eq 1, figure 1, h 1, bullets 1, worked 5} · S8 {def 2, figure 1, worked 3} · S9 {def 2, eq 1, h 2, bullets 1, worked 6, steps 1, note 1, figure 1} · S10 {def 1, eq 1, bullets 1, worked 1, note 1} · S11 {bullets 1, steps 1, worked 2, table 1, note 2}.

The pattern behind the counts — and this is the systemic diagnosis, not a per-statement complaint:

1. **Teaching is a slogan; the rest is testing.** S2 opens with four gradient/area one-liners and then goes straight to a worked card. S5 has *one* bullet of method between the eq band and the worked cards. S8 has two def cards and a figure, then three worked cards. S10 is a def card and an eq band. A student who doesn't already know the method gets nothing to learn from — the worked cards assume the teaching that was never written.
2. **The worked examples skip steps and skip thinking.** They compress to "(a)(ii) The energy route instead — all the gravitational potential energy becomes kinetic, so ΔEgrav = …" — the decision *why* the energy route, *why* that equation, *what* to write first is never shown. The user's word for this is exact: they make it more confusing, because the reader sees the answer without the path.
3. **Diagrams are rationed.** One figure per statement at best; the motion-graphs statement — a *visual* topic — has one figure. S11 (a practical) has no apparatus diagram at all. The papers are full of croppable, already-exam-board-styled figures (see §4); we use none of them.
4. **Scenario teaching is missing.** S2's bounce/highest-point/terminal-velocity bullets are the right *content* with the wrong *form* — four one-line bullets under headers, no graph drawn next to the words, no walk from shape to meaning.
5. **Confirmed knowledge gaps** (from the four t1-mech gap summaries — these are facts the papers test that the notes never state): Δv = v(final) − v(initial) as a vector; SI base units; v–t intercept = initial velocity; chord vs tangent (average vs instantaneous); graph-conversion technique; rebound shapes; friction from the road as the driving force; the bisector resultant (halve the angle); the scale-factor conversion on strobe photographs; the scale reading is the contact force; N3 pairs act at the same time (in the S4-adjacent list, fixed in T2 but the property belongs here too); the starred-question structure bands; the "resistive forces negligible" assumption statement; moving-pulley force sharing (T = load/2); vertical velocity zero at maximum height stated as a general fact.

---

## 3. How the good resources teach it — and what to take from each

**The official Pearson Student Book (Topic 1).** Its mechanics sequence is: 1A.1 velocity and acceleration → **1A.2 motion graphs** → 1A.3 adding forces → 1A.4 moments → 1A.5 Newton's laws → 1A.6 kinematics equations → 1A.7 resolving vectors → 1A.8 projectiles. Two lessons in that ordering: (a) graphs come *before* suvat — the graph is the concrete picture, the equations the abstraction; (b) vectors/forces precede the equations.
Inside 1A.2 the book does exactly what the owner specified: a **displacement–time graphs** subsection (a boat trip drawn as distance–time *and* displacement–time side by side, so the sign idea is visible), a **velocity–time graphs** subsection (the same journey re-plotted), **acceleration from v–t** (gradient calculation with real numbers), **distance travelled from v–t** (area, trapezium split into stages), then an **acceleration–time graphs** subsection (skydiver's a–t curve), with a CP1 practical-skills box (multiflash photography), an EXAM HINT box, and checkpoint questions after every two subsections. Each graph gets: the physical meaning of its gradient, the physical meaning of its area (where meaningful), a worked journey, and the sign conventions — taught through the journey, not as axioms.

**PMT (physicsandmathstutor.com).** Organises Unit 1 as topic pages — "Equations & Graphs of Motion", "Scalars & Vectors", "Forces & F=ma", "Terminal Velocity", "Core practical" etc. — each with summary notes + video tutorials + *past-paper questions grouped by topic*. The grouping by topic is the useful part: it shows which questions the examiners treat as the same skill, which matches the inventory in §1.

**SaveMyExams.** Its IAL page structure mirrors the spec (1.1 Motion → 1.2 Motion Graphs → …) with revision notes per sub-topic, diagrams for every graph shape and conversion, worked examples and examiner tips. Content is behind a heavy cookie wall, but the section architecture (one page per graph skill, diagrams first) is visible from the navigation and matches the book's approach.

**The common pattern across all three:** teach the *skill* first with pictures and a concrete journey; introduce the equation as a tool inside that skill; then drill with the real exam questions grouped by skill. Our note inverts this: facts first (as slogans), exam cards second, teaching nowhere.

---

## 4. The rebuild blueprint

### Statement 2 worked out in full (the exemplar the owner described)

Four teaching sections before any worked card:

1. **Displacement–time graphs.** Figure: the papers' own d–t graphs — the diver's curve (2023-Jun Q12) and the walker (2022-Jan Q1), croppable from `research/wph11/papers/WPH11-2023-Jun-QP.pdf` and `WPH11-2022-Jan-QP.pdf`. Teach: axes and units; gradient = velocity (with a numeric gradient calculation); horizontal = stationary; steepening = speeding up; flattening = slowing; below the start line = the other direction; the tangent = instantaneous velocity; the chord = average velocity (kills the 2024-Oct Q3 trap); "describe the journey" answers must quote the gradient and the shape (the Oct 2023 ER warning).
2. **Velocity–time graphs.** Figure: 2019-Jan Q11's v–t (positive and negative regions) and the gear-change v–t (2019-Oct Q17), croppable from the 2019 QPs. Teach: gradient = acceleration; area = displacement; area below the axis counts negative (2022-Jun Q8's P + Q − R); intercept = initial velocity (kills the 2020-Oct Q9 trap); horizontal = constant velocity; the sign-vs-speed misconception verbatim from the ER.
3. **Acceleration–time graphs.** Figure: 2022-Oct Q4's a–t card, 2025-Jan Q5's deceleration–time, 2026-Jun Q6's a_max block. Teach: gradient = rate of change of acceleration (the "not examined" fact the MCQs use as a distractor); area = change in velocity (2024-Jan Q10, 2025-Jan Q5); constant a → flat line; the vertical-throw case — a = −g the whole flight, v = 0 at the top but a ≠ 0 (2023-Jan Q7, 2025-Oct-01A Q8).
4. **Converting between the graphs.** Figure: one journey (drop → bounce → rest) drawn three times, aligned on the time axis — the current "One journey, three graphs" figure extended with the negative region and the bounce. Teach: d–t → v–t by gradients; v–t → a–t by gradients; v–t → d–t by areas; a–t → v–t by areas; s–t → a–t needs both steps; phase boundaries must agree; the diver worked card becomes the *practice* item after the method is taught, not the method itself.
5. **Then the scenario inventory** — bounce shapes (2020-Oct Q9/Q10), the data-logger curve (2023-Oct Q18), terminal-velocity sketch, the diver card, 2019-Jan Q11, 2023-Jun Q12 — each as a worked card with every step of the reasoning written out (which graph to read, which feature, what to say, what the MS pays for).

### The other statements, in brief (each gets its own section plan in the rebuild)

- **S1 suvat:** a "which equation fits which missing variable" decision table (the MCQs are equation-choice tests); sign conventions taught through the rebound; keep the three cards, expand the steps.
- **S3:** fuse with S2's sections (average vs instantaneous; areas with signs; non-uniform = curves, through the terminal-velocity and data-logger curves) but keep its own worked cards.
- **S4:** a proper taught section — classification of every quantity on the data sheet in one table; the unit route (N vs J vs W vs kg m s⁻¹); SI base units (the confirmed gap); examples of each MCQ format as mini-drills.
- **S5:** diagram-first resolving — the reference-line rule with four drawn examples (slope, string, launch velocity, boat ropes); sine-vs-cosine decision; "which expression" MCQ drills; keep the three cards with expanded steps.
- **S6:** scale-drawing method as numbered steps with a real drawn example (1200 ⊥ 2300 from 2024-Oct Q11 as the practice); the bisector trick taught with a figure; Pythagoras route; keep the ER warnings.
- **S7:** "the two columns" diagram (launch → apex → landing with both columns annotated); vertical-velocity-zero-at-top as a taught fact; the independence idea with the vacuum-chamber item; keep the five cards, expand every step, add the component-first habit.
- **S8:** a how-to-draw method (choose the body → one force per interaction → arrows start on the body → lengths → labels with owner) with a gallery figure (block on slope, rising bead, hanging sign); centre-of-gravity teaching with the "may be taken to act" MS wording; add the scale-reading fact; keep the three cards.
- **S9:** force-chain teaching for terminal velocity (the five-link chain as a diagram); the lift family with the scale-reading IC; first-law cases (including friction-as-driving-force — the confirmed gap); keep the six cards, expand.
- **S10:** proper section: definition with the rejected distractors; W = mg as the opener of chains (worked mini-chains); g = 9.81 rules; the Moon/planet variant.
- **S11:** apparatus figures for all three methods (strobe, light gates, stopwatch — croppable from 2024-Oct Q14, 2019-Jan Q12, 2020-Jan Q16); the graph-methods family (s vs t² etc.) as a taught table; error-direction analysis as a taught method; keep the two method cards and the error table, expand steps.

### Diagram sourcing

Every figure listed above is croppable from the QP PDFs in `research/wph11/papers/` (they are the exam board's own art, already in house style). Generated figures should be reserved for the one-journey-three-graphs alignment and the two-columns projectile diagram, where the papers have no single image showing the whole idea.

### Writing rules for the rebuild (from the owner's instruction)

Every line of teaching is a bullet, max two lines, in the owner's voice; scenario descriptions become subsections; worked cards write out the full path — the choice of method, the equation choice, the substitution, the unit, the MS wording it earns — no skipped steps; "Note —" for traps; verbatim MS/ER quotes only inside `*…*` spans with citations beside them (R1); no colons in teaching prose (R2); no AI tells (no slogan-colon pattern, no report scaffolds, no em-dash stacking).
