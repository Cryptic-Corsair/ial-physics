# WPH11 Topic 1 — research & analysis, second pass (2026-11-24)

Research only. No notes were rebuilt. This document supersedes `t1-teach-audit.md` as the working evidence base for the Topic 1 rebuild, and corrects one hole in it: the previous pass had per-question verdict files for only 14 of the 25 sessions. All 25 now have one.

## 0. What this pass adds over the first pass

1. **The corpus is complete.** Three new per-question inventories were extracted straight from the QP/MS txt files, in the same format as the existing `t1-mech-a..d.md` files:
   - `t1-mech-2019.md` — Jan, Jun, Oct 2019 (536 lines)
   - `t1-mech-2025.md` — Jan, Jun, Oct, Oct-01A 2025 (447 lines)
   - `t1-mech-2026.md` — Jan, Jan-01A, Jun, Jun-01A 2026 (605 lines)
2. **The external resources were actually read**, not just surveyed:
   - SaveMyExams' complete IAL "Motion" revision notes (56-page compiled PDF, saved to `external/savemyexams-motion.pdf` / `.txt`) — sections 1.1 Equations of Motion → 1.8 Free-body Force Diagrams, read section by section.
   - Pearson's official Student Book 1 checkpoint answers (`external/pearson-sb1-answers.pdf`) — confirms the book's teaching sequence 1A.1–1A.8 and its checkpoint-question style.
   - PMT's IAL Unit 1 page structure — their question-pack taxonomy (Set 1/2/3 Edexcel packs + AQA/OCR imports).
3. **New exam formats the first pass did not know about**, all verified verbatim against the MS txt files:
   - **Levels-based interpretation of a graph** (2026-Jan Q17(b), 6 marks, asterisk): 4 IC points + 2 structure marks, on "explain what the graph shows about the velocity and acceleration".
   - **Dual-conclusion acceptance** (2025-Oct-01A Q17(a)(iii)): full range AND range-to-maximum-height routes both credited, opposite verdicts allowed.
   - **Conditional fallback marks** (2026-Jun Q15(a)): "[If no other mark scored, allow 1 mark for maximum acceleration is the gradient of the steepest part of the curve]".
   - **Penalty-marked free-body diagram** (2019-Oct Q15(b)(i)): "(−1 for each extra force over 3) (−1 if any arrow does not touch the dot) (−1 if any arrow is not close to vertical)".
   - **The six-orientation CP1 table** (2019-Jan Q12(c)): six accepted graph orientations with the gradient→a conversion for each.
   - The **01A papers are separate papers** (regional variants): 19 questions, separate answer book, their own MS — with their own MS typesetting slips (e.g. "TOTAL FOR PAPER = 120 MARKS" printed on an 80-mark paper).

---

## 1. The shape of Topic 1 on the paper

25 sessions read: Jan/Jun/Oct 2019, Jan/Oct 2020, Jan/Jun/Oct 2021, Jan/Jun/Oct 2022, Jan/Jun/Oct 2023, Jan/Jun/Oct 2024, Jan/Jun/Oct/Oct-01A 2025, Jan/Jan-01A/Jun/Jun-01A 2026. June 2020 does not exist.

Every paper: Section A = 10 MCQs (1 mark each), Section B = ~70 marks of structured questions, 80 marks total, 1 h 30 min.

**Topic 1 carries 25–45 of the 80 marks** depending on the session. Measured totals where extraction gave exact sums: 2019-Jan 45, 2019-Jun 33, 2019-Oct 27, 2025-Jan 35, 2025-Jun 29, 2025-Oct 27, 2025-Oct-01A 29, 2026-Jan 29, 2026-Jan-01A 29, 2026-Jun 25, 2026-Jun-01A 28. The 2020–2024 inventories agree with that range.

Per-statement load (how often, in what form):

| Statement | Where it appears | Typical load |
| --- | --- | --- |
| 1 suvat | 1–2 equation-choice MCQs per session; "Use of …" first step of nearly every projectile show-that; occasional pure structured item (2025-Jun Q20a 4 marks) | 2–12 marks |
| 2 graphs | 1–2 graph MCQs per session (read / choose the other graph); structured graph work in most sessions: describe (3–6), draw the derived graph (2–8), levels-based (6, 2026-Jan) | 2–10 marks |
| 3 slopes & areas | fused with statement 2 in the same questions; 1–2 dedicated MCQs (gradient table, area = Δv, P+Q−R) | 1–6 marks |
| 4 scalars/vectors | an MCQ in almost every session (absent from 2026-Jun main among the 25); 3 rotating formats | 1 mark |
| 5 resolving | 1–2 expression-choice MCQs; the component step inside every projectile | 1–5 marks |
| 6 resultants | 1–2 MCQs (tip-to-tail choice, Pythagoras expression); scale-drawing structured item roughly every 2nd–3rd session (2–5 marks, 4 in 2026-Jun needs a protractor) | 1–5 marks |
| 7 projectiles | the biggest single block: one 8–12 mark chain in nearly every session + 1 MCQ | 8–13 marks |
| 8 free-body diagrams | a "complete the free-body diagram" part inside a bigger question in most sessions (2–4 marks); centre-of-gravity definition 1 mark, often embedded in a moments question (3 times in 2026) | 2–5 marks |
| 9 ΣF = ma | 1–2 one-step MCQs; a 4–10 mark terminal-velocity / lift / bungee explanation family | 3–10 marks |
| 10 g, W = mg | rarely primary: 0–1 MCQ (definition or unit); everywhere as the opening step of chains (2019: never primary in any session) | 0–3 marks |
| 11 Core Practical 1 | 1 measurement MCQ most sessions; structured practical 0–7 marks (7 in 2019-Jan, 6 in 2024-Oct, 5 in 2025-Oct; absent in 2019-Jun, 2025-Jun, all four 2026 papers) | 1–7 marks |

Three fixtures a student must be drilled on, because they earn a mark in almost every session: the scalar/vector discrimination (statement 4), one graph-reading MCQ (statements 2/3), one CP1 measurement MCQ (statement 11). One more near-fixture: the projectile chain (statement 7) — the single largest marks block on the paper.

---

## 2. Statement by statement

Each section below: the statement as printed, the complete question inventory with sessions, what the mark scheme pays for (verbatim where it matters), what the examiner reports flag, what the current notes (`notes-ph01f-a.ts` / `-b.ts`, the 2026-11-22 rebuild) already carry, and what the rebuild must add. "Current notes" findings are from a full read of both files against the owner's teaching standard.

### Statement 1 — the four suvat equations

*be able to use the equations for uniformly accelerated motion in one dimension: s = (u+v)t/2, v = u + at, s = ut + ½at², v² = u² + 2as*

**Asked how.** The MCQ family is *equation choice*: every distractor is a different wrong equation, so the tested skill is matching the equation to the missing variable. 2021-Jan Q1 (car braking over 20 m), 2023-Jan Q5 (s = ½(u+v)t), 2023-Jun Q7 ((5²−3²)/(2×15)), 2022-Jan Q5 and 2026-Jan-01A Q6 (Moon drop, 2s/t²), 2025-Oct-01A Q8 (a = −9.8 at the top of a throw), 2025-Oct-01A Q10 (√(90g)), 2026-Jan Q2 (s ∝ t²), 2026-Jun-01A Q10 (braking distance at 2v is 4×), 2024-Jan Q5 (which quantities change when air resistance is ignored). Structured: 2025-Jun Q20(a) (pure suvat, skydiver 11 m in 1.5 s); the show-that first step of every projectile chain; 2019-Jan Q16 (Mars probe, show a ≈ 11 m s⁻²); 2019-Jan Q18 (luge, 18 marks); 2026-Jan Q17(a) (box on a 22° incline, v = 4.3 m s⁻¹, energy route also credited); 2026-Jan-01A Q11 (trolley, show v ≈ 3 m s⁻¹, total time 1.7 s).

**The MS pays for.** One point per equation choice, always phrased *"Use of v² = u² + 2as (1)"* etc. Show-that: one more significant figure than the printed value; reverse working scores 2 of 3 on a three-mark show-that. On 2026-Jan Q18(a)(ii) the sign discipline is printed inside the marking point: *"Use of v = u + at with a = 1.63 m s⁻² with u and a having the same sign convention (1)"*.

**The ERs flag.** Truncated values lose the final mark (the quote already in the notes). Wrong equation pairing and sign slips on deceleration are the recurring errors.

**One question type the notes never teach.** 2024-Jan Q14(a)(i): "Explain why the equations of motion must not be used" on a curved slide (gradient varies → acceleration varies → suvat needs constant a). The notes teach *how to choose* an equation but never *the conditions under which suvat applies at all*. The companion reasoning skill, s ∝ t² for free fall from rest (2019-Oct Q9, 2026-Jan Q2), is also only implicit.

**Current notes.** eq band + 4 method bullets + a good "choosing the equation" table + MS-wording note + 3 show-that bullets + 3 worked cards (dart, two cars, Mars). The worked cards write out the full path now. Missing: the constant-a condition and its anti-question; s ∝ t² as a stated fact; a sign-convention teaching block (rebound/up-throw), which the audit already flagged and which 2026-Jan Q18's MS quote makes load-bearing.

**Rebuild blueprint.**
1. *What suvat assumes* — constant acceleration; when it fails (curved slide — crop the slide figure from WPH11-2024-Jan-QP.pdf Q14); the 2024-Jan Q14(a)(i) answer as a taught pattern.
2. *Choosing the equation* — keep the table; add two drills in the MCQ format with the distractor equations printed and the "which quantity is missing" reasoning written out.
3. *Signs* — one direction positive; deceleration negative; a rebound journey as the example; the 2026-Jan Q18 sign quote as the MS wording.
4. *s ∝ t² from rest* — one bullet + the strobe-position reasoning (2019-Oct Q9 quote: "in 2 units of time it will have fallen 4 units of distance").
5. Keep the three cards; expand the skier card's compressed energy-route line.

### Statement 2 — draw and interpret d–t, v–t, a–t graphs

*be able to draw and interpret displacement-time, velocity-time and acceleration-time graphs*

**Asked how — the complete inventory, 25 sessions.**

*Read the graph* MCQs: 2022-Jan Q1 (walk: final displacement + velocity from d–t), 2023-Oct Q4 (s–t shape of a ball falling through air from rest), 2024-Jun Q2 (which description matches a v–t curve), 2024-Oct Q3 (average velocity from a d–t), 2025-Jan Q8 (trapezium v–t, distance in time 2t), 2025-Jun Q6 (s–t parabola), 2026-Jan Q6 (constant deceleration → v–t shape), 2026-Jun-01A Q4 (resultant force on a walker from a v–t: 0 N), 2026-Jun-01A Q11 (constant speed but changing velocity).

*Choose/produce the other graph* MCQs: 2022-Jan Q3 (v–t given → choose s–t), 2022-Oct Q4 (a–t given → choose v–t), 2023-Jan Q7 (vertical throw → choose the a–t: constant line below the axis), 2025-Oct Q9 (a–t given → choose s–t), 2026-Jun Q6 (a–t with a_max from t₁ to t₂ → velocity at t₂), 2019-Jun Q8 (rocket a–t).

*Describe the motion* structured: 2019-Jan Q11 (3 marks, v–t with positive and negative regions + gradient calculations), 2025-Oct Q18(a) (distance–time sketch, 2 marks), **2026-Jan Q17(b) (6 marks, levels-based — see below)**.

*Draw the derived graph on printed axes*: 2019-Jun Q13 (swimmer, s–t → v–t, 8 marks), 2023-Jun Q12(b) (diver, d–t → v–t, 2 marks), 2025-Jun Q20(b) (skydiver sketch v–t, 2 marks), 2026-Jan-01A Q16 (a–t → show v ≈ 3 m s⁻¹ + draw v–t + total distance 13 m, 8 marks), 2026-Jun-01A Q14(b) (bouncing ball: show v ≈ 6 m s⁻¹, sketch the v–t, 8 marks).

*Big structured graph readers*: 2019-Oct Q17 (car v–t: gradient statements, a₂ = 0.98 m s⁻², 0→60 mph in 13.4 s, max-speed explanation — 10 of 12 marks), 2026-Jun Q15 (elevator v–t: max acceleration via tangent; highest floor from area ÷ 3.5 m — 5 marks), 2025-Oct-01A Q14 (vacuum vs oil v–t comparison, 6 marks).

**What the MS pays for.**
- Per-segment marks with signs: the diver's v–t is *"straight line from 0 to (1.5, − magnitude from (a)(ii))"*.
- The tangent must be drawn: 2026-Jun Q15(a) *"draw a tangent at the steepest point of the curve (1)"*, with the two fallback marks quoted above.
- Graph-reading tolerance is sometimes zero: 2025-Jun Q12(b) *"Two pairs of corresponding values of velocity and time read from graph (1) — No tolerance if readings taken at 4 s and 16 s"*.
- Levels-based structure (2026-Jan Q17(b)): IC points — *"Gradient of the graph represents velocity"*; *"From 10 s to 20 s the gradient decreases so velocity decreases"*; *"At 20 s velocity = 0"*; *"After 20 s the velocity / motion of the box is in the opposite / backwards direction because gradient is negative"* — max 4 IC marks + 2 linkage marks; *"coherent and logical structure with linkages and fully sustained lines of reasoning demonstrated throughout"* scores the 6.
- Area decomposition is spelled out: 2026-Jun Q6 — *"the area of the triangle should be (½(t₁ × a_max)) and the area of the rectangle should be (t₂ − t₁) × a_max"*.

**The ERs flag.** The two already in the notes: *"the answers did not often refer to the graph"* (explain-the-shape items) and the Oct 2023 sign misconception (*"increasingly negative gradient showed a decreasing speed, rather than showing an increasing downwards speed"*). Plus 2024-Oct Q19's *"many candidates just read a value of velocity at 70s and divided one by the other"*.

**Current notes.** Four gradient/area bullets + ER note + **one** figure (ph-motion-graphs) + a feature table + a 4-step conversion panel + the diver worked card + three scenario bullet-groups (bounce / up-throw / liquid) + drawing rules + not-accepted note. Diagnosis against the owner's standard: the conversion panel has no numbers in it; the three scenario groups are the right content in the wrong form (four one-line bullets each, no graph next to the words); the section has one figure for the most visual topic on the paper; nothing teaches the *describe* family (2019-Jan Q11 / 2026-Jan Q17(b) formats); no below-axis journey anywhere.

**Rebuild blueprint — the owner's spec-2 model, fully specified.**

1. **Displacement–time graphs** (its own section). Teaching: gradient = velocity; horizontal = rest; steepening = speeding up; flattening = slowing; below the start line = the other direction; the area is meaningless. Figure A: a generated d–t journey with four phases annotated (generated — no paper figure shows a labelled teaching version). Figure B: crop the walker graph from WPH11-2022-Jan-QP.pdf Q1 (or the box graph from WPH11-2026-Jan-QP.pdf Q17(b)). Worked: 2022-Jan Q1 with full steps (final displacement, then velocity from the gradient). Teach the describe-sentences that earn the marks: *"the gradient decreases so the velocity decreases"* — the IC3 wording verbatim.
2. **Velocity–time graphs** (its own section). Teaching: gradient = acceleration; area = displacement; below the axis counts negative; the intercept is the initial velocity (kills the 2020-Oct Q9 trap); horizontal = constant velocity. Figure C: crop the 2019-Jan Q11 v–t (positive and negative regions) from WPH11-2019-Jan-QP.pdf. Worked: 2019-Jan Q11 as a full describe answer with the MS quote; second worked: 2025-Jan Q8 trapezium distance.
3. **Acceleration–time graphs** (its own section). Teaching: flat line = constant acceleration; area = change in velocity; the gradient is rate of change of acceleration — printed in the notes' table as "not examined" and used only as a distractor; the vertical-throw case (a = −g the whole flight, v = 0 at the top, a ≠ 0). Figure D: crop the 2023-Jan Q7 a–t card or 2025-Jan Q5 deceleration–time from the QP PDFs. Worked: 2026-Jun Q6 — velocity at t₂ from the triangle + rectangle decomposition, quoting the MS decomposition verbatim.
4. **Converting between the graphs** (its own section). Keep the 4-step panel but add a numeric worked conversion: a four-phase d–t journey → v–t with every gradient computed (the SaveMyExams runner example is the model; build our own journey with figure E). Figure E: one journey with a below-axis phase drawn as three aligned graphs (extend ph-motion-graphs). Phase boundaries must agree; s–t → a–t needs both steps. Practice after the method: diver card, 2026-Jan-01A Q16, 2026-Jun-01A Q14(b).
5. **Describing motion from a graph** (its own section — the QWC family). The sentence patterns that earn marks (name gradient / area / intercept / shape); the 2026-Jan Q17(b) levels-based worked card as a full model answer with the IC mapping; the conditional fallback marks and the "no tolerance" reading rules as Note blocks.

### Statement 3 — slopes and areas, including non-uniform acceleration

*know the physical quantities derived from the slopes and areas of displacement-time, velocity-time and acceleration-time graphs, including cases of non-uniform acceleration and understand how to use the quantities*

**Asked how.** Mostly fused with statement 2 (same questions). Pure items: 2021-Oct Q1 (which y-axis quantity has which gradient — table), 2022-Jun Q8 (areas P, Q, R: displacement = P + Q − R), 2025-Jan Q5 (shaded area under a deceleration–time graph = change in velocity), 2024-Jan Q10 (area under an a–t = Δv → distance Xt/2), 2019-Oct Q4 (area under which graph is *not* work done). Tangent work: 2023-Jun Q12(a)(ii), 2024-Oct Q19, 2026-Jun Q15(a). Average work: 2024-Oct Q3, 2024-Jan Q16(a).

**What the MS/ER pay for and flag.** The area decompositions quoted under statement 2. The ER line on tangents is in the notes. The chord/tangent distinction (2024-Oct Q3: *"B is not correct because this would give the instantaneous speed…"*) is now taught in the notes' tangent-or-chord block — the first pass scored this PARTIAL, and the current file closes it.

**Current notes.** bullets + slopes/areas table + tangent-or-chord bullets + tangent worked card (2024-Oct Q19) + areas worked card (2024-Oct Q19 second part). Missing: a *method for areas under curves* beyond one bullet ("count areas square by square, or in trapezium strips") — SaveMyExams teaches it with a figure (split into rectangles/triangles, count the rest); the non-uniform-acceleration teaching is one table row, with the real treatment living in statement 9's terminal-velocity section without a pointer.

**Rebuild blueprint.** Fold sections 1–3 of statement 2's blueprint around this content, but keep: the tangent worked card; a new *areas under curves* mini-section with a figure (splitting a curve into strips) and the 2026-Jun Q15(b) elevator area as the structured worked (floor 10, from 14.3 m ÷ 3.5 m); an average-vs-instantaneous drill in the 2024-Oct Q3 format with the distractor reasons quoted.

### Statement 4 — scalars and vectors

*understand scalar and vector quantities and know examples of each type of quantity and recognise vector notation*

**Asked how.** Three rotating MCQ formats (the first pass's list holds, verified against the new sessions): (a) which is a vector/scalar (2019-Jan Q1, 2025-Oct-01A Q1, 2026-Jun-01A Q1); (b) which table row is correct (2022-Jan Q2, 2023-Oct Q1, 2024-Jan Q2, 2024-Oct Q2, 2025-Jan Q3); (c) the unit route (2019-Jun Q1, 2020-Oct Q1, 2025-Oct-01A Q3, 2026-Jan Q1). New finds: 2026-Jun-01A Q2 (which is a correct unit for acceleration: N kg⁻¹), 2025-Jun Q5 and 2025-Oct Q6 (vector-sentence equilibrium MCQs), **2026-Jun-01A Q11 (constant speed but changing velocity)**, 2025-Jun Q12(a) (distance vs displacement, part of a 5-mark structured). Absent only from 2026-Jun main.

**What the MS pays for.** Nothing subtle — but every distractor reason is a classification of a specific quantity ("efficiency is not a vector quantity", "viscosity is not a vector", "mass is a scaler [sic]"). The option pools rotate through momentum/weight/force vs kinetic energy/work done/power/density/efficiency/temperature/time.

**Current notes.** def cards + pairs table + unit-test bullets + SI base-units table + derivation bullets + vector-notation block + change-in-a-vector block. The first pass's SI-base-units gap and the Δv gap are closed in this file. Still missing: **efficiency never appears in any scalar list** (2023-Jun Q1 distractor); **"constant speed with changing direction = changing velocity" is untaught** (2026-Jun-01A Q11); the classification table stops short of the full option pool (pressure, temperature, electric charge appear in SaveMyExams' table and in our option pools; viscosity, strain, Young modulus appear in materials-flavoured distractors).

**Rebuild blueprint.** One classification table covering every quantity that has ever appeared in an option pool (add efficiency, pressure, electric charge, viscosity, strain, Young modulus); one bullet on speed vs velocity when direction changes (the roundabout/curve case); keep everything else; two MCQ drills in the exact exam formats with distractor reasons as taught facts.

### Statement 5 — resolving into components

*be able to resolve a vector into two components at right angles to each other by drawing and by calculation*

**Asked how.** Expression-choice MCQs from a printed diagram: 2021-Oct Q4 (13.2 and 5.5 at 22.6°), 2024-Jan Q6 (bird, W/(2cos80°)), 2025-Jan Q10 (traffic lights, W/(2sinθ)), 2023-Oct Q9 (which vector equation relates T₁, T₂, W), 2024-Oct Q9 (two boats, F_A cos31° + F_B cos27°), 2019-Oct Q5 (escalator √(0.5²−0.3²)), 2025-Jun Q8 (F = W sinθ on a ramp), 2026-Jun-01A Q12 (2T sin25° = mg over a peg, 21 N). Structured: 2019-Oct Q11 (work done as rope angle varies, 3 marks); the component step inside every projectile; **2019-Jun Q14(a)(ii) — sketch the required launch speed against angle (a graph of the resolving itself, asymptotic at small θ)**.

**What the MS/ER pay for and flag.** *"the components of T acting vertically should be cos and should form the denominator"* (in the notes). The ER's component slip in projectile launches (in the notes). The 2019-Jun Q14 sketch shows the examiners will test the *shape* of the resolving function, not just one value.

**Current notes.** eq band + ph-vectors figure + 3 angle-rule bullets + 3 worked cards (traffic lights, bird, skier). The sine-vs-cosine decision is well taught now. Missing: **the "by drawing" half of the statement** — no scale-drawing resolution method anywhere; SaveMyExams teaches a 6-step drawing method (scale choice, reference line, measure the angle, draw, measure, convert) with a hiker worked example; the spec wording demands both routes.

**Rebuild blueprint.** Add a *Resolving by drawing* subsection: the steps, one worked example (hiker-style, or 2019-Jun Q9's walk by drawing), a figure; then the calculation subsection (keep as is); keep the three cards; add the launch-speed-vs-angle sketch as a thinking drill (it makes cos 0° → infinite speed visible).

### Statement 6 — resultants

*be able to find the resultant of two coplanar vectors at any angle to each other by drawing, and at right angles to each other by calculation*

**Asked how.** By drawing: 2019-Jun Q9 (bearing walk), 2021-Jun Q10, 2022-Oct Q7, 2026-Jan-01A Q2 (which diagram shows the resultant), 2025-Oct-01A Q5, and the structured scale drawings: 2024-Oct Q11 (2 marks, 2300 ⊥ 1200), 2025-Oct Q12 (380 N at 68°, 4 marks), **2026-Jun Q20(a) (ladder force by scaled vector triangle, ≈124 N — the June 2026 equipment list adds a protractor for exactly this)**, 2019-Jan Q15(a) (resultant momentum by scale drawing, 0.22–0.24 kg m s⁻¹). By calculation at right angles: 2026-Jan Q5 (√(20²+35²)), 2026-Jun-01A Q7 (8 N ⊥ 15 N → 17 N), 2026-Jun Q8 (helicopter √((C−A)²+(D−B)²)). The bisector trick: 2024-Jun Q19(b)(i). Equilibrium versions: 2025-Oct Q12, 2025-Jun Q7.

**What the MS/ER pay for and flag.** The three ER warnings are in the notes (FBD instead of vector diagram; lengths as labels; wrong resultant direction). One MS rule the notes only half-teach: 2019-Jan Q15(a) — *"(Do not award MP4 if this value has been obtained by calculation or from an incorrect diagram)"*. On a drawing question the construction is the marks; a calculation alone does not collect them. The notes' submarine card says this in one line; the 2019 quote should be printed as the rule.

**Current notes.** method bullets + 3-step scaled-diagram panel + submarine worked + perpendicular worked + equal-forces/bisector bullets. Solid. Missing: a figure of a completed scaled vector triangle (crop 2025-Oct Q12's diagram from the QP or generate one); the no-calculation-substitute quote.

**Rebuild blueprint.** Keep the structure; add the triangle figure; add the 2019-Jan Q15(a) quote as a Note; add one more drawing worked (2026-Jun Q20(a), noting the protractor); keep the bisector block.

### Statement 7 — projectiles

*understand how to make use of the independence of vertical and horizontal motion of a projectile moving freely under gravity*

**Asked how.** The 17-session chain family from the first pass, now complete with the 2019/2025/2026 sessions: 2019-Jan Q16 (Mars probe 11 marks), 2019-Jun Q14 (firework), 2019-Oct Q13 (golf drive 11 marks, with an air-resistance trajectory sketch as a QWC part), 2021-Jun Q14 (skier), 2021-Oct Q16 (exploding rock), 2022-Jan Q18 (stunt motorcyclist), 2022-Jun Q18 (golfer), 2023-Jan Q11 (cliff stone), 2023-Jun Q14 (bat), 2023-Oct Q13 (ball machine), 2024-Jan Q12 (darts), 2024-Jun Q17 (tyre stone), 2025-Jun Q13 (hoop basketball — lands 2.8 m ≠ 3.0 m), 2025-Jun Q20 (skydiver chain), 2025-Oct Q19 (shot put, u = 11 m s⁻¹ at 37°), **2025-Oct-01A Q17 (flare, u = 57.4 m s⁻¹, dual-conclusion MS)**, **2026-Jan Q18 (lunar projectile, 12 marks, g = 1.63 m s⁻²)**, 2026-Jan-01A Q18 (motorcyclist over the river, 9 marks, four alternative comparisons credited), 2026-Jun Q18 (cliff stone + terminal velocity, 11 marks), 2026-Jun-01A Q18 (hosepipe jet). MCQs: 2019-Jun Q4 (s = 1.2 × 0.9), 2021-Jun Q7 (vacuum chamber), 2025-Jun Q3, 2025-Oct-01A Q6 (horizontal velocity constant).

**What the MS pays for.** The two-column skeleton (resolve → vertical suvat → horizontal constant v → combine). New verbatim rules worth teaching: the dual-conclusion acceptance (*"291 m > 200 m so yes"* and *"146 m < 200 m so cannot be seen"* both credited, 2025-Oct-01A Q17); the four-alternative-comparisons bank (2026-Jan-01A Q18(b): 2.1 < 3.0, 102 > 100, 3.21 > 3.15, 34.7 < 35 — all four routes score); the sign-convention quote under statement 1; the *"Assume the acceleration due to gravity is constant"* wording that licences suvat on other worlds.

**The ERs flag.** Full speed used instead of the component; the time-doubling trap (quoted); missing units on heights (quoted); a = g used in the horizontal plane (quoted).

**Current notes.** def + two-columns table + eq + ph-projectile figure + top-of-flight bullets + 5 worked cards (wall, cliff, golfer, athlete impact, mountain). The cards are full-path now and cover horizontal launch, angled launch above ground, energy+fuse recombination, and the launch-height add-back. Missing: the launch→apex→landing annotated two-columns diagram (one figure carries everything at the moment); the three launch types (vertical / horizontal / angle) as explicit sub-methods — SaveMyExams structures exactly this way with one worked example each; the independence *why* and the air-resistance caveat (2024-Jan Q5; 2019-Oct Q13's trajectory sketch); the dual-conclusion / comparison-bank habit.

**Rebuild blueprint.**
1. *Why two columns* — independence stated and justified; air resistance breaks it; the vacuum-chamber MCQ as the drill.
2. *The two columns* — keep the table; add the annotated journey figure (generated).
3. *Three launch types* — vertical (up-throw, a = −g throughout), horizontal (u_V = 0), angled (resolve first) — each with a mini-figure and one worked card; the cliff card and wall card slot in here.
4. *Deduce questions* — the comparison habits: numbers, comparison symbol, verdict sentence; the dual-conclusion quote and the four-route bank as Notes.
5. Keep the 5 cards, expanded where compressed.

### Statement 8 — free-body force diagrams

*be able to draw and interpret free-body force diagrams to represent forces on a particle or on an extended but rigid body using the concept of centre of gravity of an extended body*

**Asked how.** Complete-the-FBD parts: 2019-Jan Q18(a) (luge), 2019-Oct Q15(b)(i) (terminal-velocity FBD, penalty-marked), 2021-Jan Q18(a) (rising bead), 2021-Oct Q13(a) (sledge), 2022-Jun Q11(a) (disc on magnetic base), 2025-Oct-01A Q19(a) (sphere in water), **2026-Jan Q11 (accelerating car: F = 7500 N, W = 15000 N, 2 marks)**. FBD MCQs: 2019-Oct Q6 (weight arrow at the cube's centre), 2023-Jan Q6 (soap bubble). Centre-of-gravity definitions: 2024-Jun Q7 (MCQ), 2026-Jun Q16(a), 2026-Jun-01A Q17(a)(ii), and add-the-equilibrium-force 2026-Jan-01A Q13(a) — the last three all embedded in moments questions. Equilibrium MCQs: 2021-Oct Q5, 2024-Jan Q18 (door hinges), 2025-Oct Q6, 2025-Jun Q5, 2025-Jan Q9 (drag from an accelerating body).

**What the MS pays for.** The 2019-Oct penalty scheme, verbatim: *"(−1 for each extra force over 3) (−1 if any arrow does not touch the dot) (−1 if any arrow is not close to vertical) (Accept single line up with two labelled arrow heads. Ignore the length of the arrows.)"* — note the last clause: this item ignores lengths, while the 2023-Oct Q18 ball-bearing item marks them. So the rule to teach is: lengths proportional **unless the question's scheme says otherwise**, arrows touching the body, no extra forces. The CG definition wording: *"The point at / through which the weight of the object / beam appears to act (1)"* — the notes' "may be taken to act" matches.

**The ERs flag.** Weight labelled "G" (quoted); length-proportionality "very rarely seen" (quoted).

**Current notes.** 2 def cards + ph-freebody figure (one body: block on slope) + 3 worked cards (engine/truck, ball-bearing terminal velocity, accelerating-body drag MCQ). Missing: a how-to-draw method (SaveMyExams' three rules are the model: point at the centre of mass, body free from contact, forces as labelled proportional arrows); a gallery figure of several bodies; the particle-vs-extended-body distinction; the penalty-marking Note; the scale-reading fact is taught in statement 9's lift card (fine where it is, but cross-reference it).

**Rebuild blueprint.**
1. *How to draw one* — the steps, with the engine/truck card as practice.
2. *Gallery figure* — block on slope, rising bead, hanging sign, accelerating car (generate; the car matches 2026-Jan Q11).
3. *Centre of gravity* — definition + "appears to act" wording + the three 2026 definition items as drills.
4. *The marking scheme for diagrams* — the 2019-Oct penalty quote as a Note; lengths proportional by default.
5. Keep the 3 cards.

### Statement 9 — ΣF = ma, first law, terminal velocity

*be able to use the equation ΣF = ma … including Newton's first law of motion where a = 0 … Use of the term 'terminal velocity' is expected*

**Asked how.** One-step MCQs: 2025-Jan Q11, 2025-Jun Q11 (fuses statement 10), 2024-Jun Q10 (ship drag), 2025-Oct Q11 (lorry 2 marks), 2026-Jun Q10 (athlete 60 × (30 + 9.81)), 2026-Jan Q10 (string breaks, 2g/3), 2019-Jun Q10 (lift 800 − 70g = 70a), 2019-Jun Q2 (orbiting rocket). First-law MCQs: 2021-Jun Q3 (friction is the driving force — taught now), 2024-Oct Q5, 2025-Jun Q8, 2025-Oct Q5 (balloon U > W). Terminal-velocity structured: 2025-Jan Q20(a) (submarine, 4-mark starred scaffold), 2025-Jun Q20(d) (parachute opens, 5 marks), 2026-Jun Q18(b) (stone in water, *"upthrust plus drag is equal in size to weight"*), 2024-Jun Q14 (sand grain), 2019-Jun Q18 (raindrops, 13 marks). Lift family: 2022-Jan Q14* (scales). Pulley: 2025-Oct Q7 (Atwood MCQ — total mass in the denominator). Bungee: 2024-Oct Q17.

**What the MS pays for.** The terminal chain with **dependent marking**: 2025-Jan Q20(a) — *"(Initially) weight is greater than upthrust (+ drag) … drag increases (and upthrust remains constant) (dependent on MP2) … (until) the resultant force becomes 0 (and the sphere moves at constant / terminal velocity)"*. The parachute-opening variant adds a stage the notes' chain shows only as a note: *"(When the parachute opens,) air resistance is greater than weight … (As speed decreases) air resistance decreases … (Until upthrust +) air resistance = weight"*, with the guards *"Ignore speed decreases / Ignore speed is constant"*.

**The ERs flag.** Thrust treated as the resultant (quoted); subtracting instead of adding the weight (quoted); energy descriptions used where force chains were asked (bungee, quoted).

**Current notes.** defs + eq band + whole-system bullets (friction-driving-force and moving-pulley facts are now taught) + 6 worked cards + terminal-velocity 6-step chain + balloon MS quote + ph-terminal figure. The strongest section. Missing: the rising-vs-falling chain table (both directions with the stages aligned) and the dependent-marking warning ("say drag grows *before* the resultant falls — MP3 depends on MP2"); the *"Ignore speed decreases"* guard as a Note.

**Rebuild blueprint.** Keep everything; add (1) the two-direction chain table (rising balloon vs falling ball, same six stages, forces swapped); (2) a Note with the dependent-marking quote; (3) the parachute-opening worked card (2025-Jun Q20(d)) as the direction-change case; (4) the Atwood limiting-case reasoning kept, plus one bullet on *why the total mass is accelerated*.

### Statement 10 — g = F/m and W = mg

*be able to use the equations for gravitational field strength g = F/m and weight W = mg*

**Asked how.** Definition MCQs: 2020-Jan Q2, 2023-Jan Q2 (weight per unit mass; rejected distractors force per unit length, acceleration per unit mass, energy per unit mass). Calculation MCQs: 2021-Jun Q2 (W→m→ρ chain), 2025-Jun Q11 (boat weight, in the notes). Unit MCQ: 2026-Jun-01A Q2 (N kg⁻¹ is a correct unit for acceleration). In 2019 it never carried primary marks; elsewhere it is the opening step of most chains (rocket, lift, trampolinist, terminal velocity, lunar projectile).

**What the MS/ER pay for and flag.** Use 9.81 (9.8 accepted); W = mg is a marking point of its own; stopping at the mass loses the final mark.

**Current notes.** def + eq band + 4 bullets + boat worked card + not-accepted note. The thinnest section against a statement that opens most long questions.

**Rebuild blueprint.** Expand into a real section: the definition with the three rejected distractors spelled out; the unit equivalence (N kg⁻¹ = m s⁻², the 2026-Jun-01A Q2 drill); a *local g* mini-table (Earth 9.81, Moon 1.63 — from 2026-Jan Q18's own stem, Mars 0.38 — from the notes' Mars card) with the *"assume a is constant"* licensing wording; the W-mg-chain habits kept; one more worked mini-chain (the 2021-Jun Q2 W→m→ρ route).

### Statement 11 — Core Practical 1

*CORE PRACTICAL 1: Determine the acceleration of a freely-falling object*

**Asked how.** Method MCQs: 2020-Oct Q7 (fewest measurements), 2026-Jun-01A Q3 (only two quantities needed: distance + time), 2023-Jan Q4 (condition needed), 2022-Jun Q5 (why g = 11.2), 2025-Jan Q7 (height on y — what on x?), 2025-Oct-01A Q4, 2026-Jun Q4 (which measurements would *not* be sufficient), 2024-Jun Q8 (which mistake gives g > 9.81), 2019-Oct Q9 (strobe positions, s ∝ t²). Structured practicals: 2019-Jan Q12 (light gate + rod, 7 marks, with the six-orientation table), 2024-Oct Q14 (strobe + metre rule, 6 marks), 2025-Oct Q13 (two methods compared, 5 marks — answer a = 9.62 m s⁻²), 2020-Jan Q16 (popcorn strobe with printed scale). Absent: 2019-Jun, 2025-Jun, all four 2026 papers.

**What the MS pays for.** The **six-orientation table** (2019-Jan Q12(c)), verbatim:

| Graph plotted | a comes from |
| --- | --- |
| s against v² | 1/(2 × gradient) |
| v² against s | gradient / 2 |
| 2s against v² | 1/gradient |
| v² against 2s | gradient |
| v²/2 against s | gradient |
| s against v²/2 | 1/gradient |

Plus: apparatus → measurement → graph → g-with-unit marking skeleton; error-direction judgements with reasons; *"Explaining how a graph of the results should be used to determine a value is a skill which candidates need to practise"*; no credit for 9.81 with no working (both in the notes).

**Current notes.** bullets + strobe steps (with the scale-factor conversion — the old gap is closed) + stopwatch worked + light-gate worked + error table + ER notes + not-accepted. Missing: **any figure of the three apparatus setups** (strobe photograph, light gates, stopwatch-and-rule) — crop 2024-Oct Q14 (strobe), 2019-Jan Q12 (light gates), 2020-Jan Q16 (popcorn) from the QP PDFs; the six-orientation table; the "which measurements suffice" reasoning as a taught method (the answer to 2026-Jun-01A Q3: g = 2s/t² needs exactly s and t — two quantities, one equation).

**Rebuild blueprint.**
1. *The three setups* — one subsection each with an apparatus figure (cropped), the measured quantities, and the graph each method produces.
2. *Graphs that give g* — the six-orientation table as a teaching table, with the gradient-conversion column explained ("where did the 2 go?").
3. *Error directions* — keep the table; add the 2022-Jun Q5 g = 11.2 drill.
4. *What counts as enough* — the measurements-sufficiency reasoning.
5. Keep the two worked cards.

---

## 3. What the good resources teach, and the pattern to copy

**The official Pearson Student Book 1.** Sequence: 1A.1 velocity and acceleration → 1A.2 motion graphs → 1A.3 adding forces → 1A.4 moments → 1A.5 Newton's laws → 1A.6 kinematics equations → 1A.7 resolving vectors → 1A.8 projectiles. Graphs come *before* equations. The checkpoint answers (`external/pearson-sb1-answers.txt`) show the checkpoint style: short multi-part questions after every section, with answers that model the reasoning ("The bike is at constant speed for the first 10 s (2 m s⁻¹)").

**SaveMyExams (Motion, sections 1.1–1.8).** Every skill gets the same five-element treatment, which is precisely the owner's model:
1. meaning bullets (each graph feature, one line);
2. a diagram of the shape;
3. a numbered method (6-step scale-drawing resolution; tangent procedure; FBD drawing rules as Rule 1/2/3);
4. fully-stepped worked examples — every gradient written out ("Gradient = Δy/Δx = 45/6 = 7.5 m s⁻¹"), Stage A/B/C/D handled one at a time in the conversion example;
5. an Examiner Tip box.
Their motion-graphs section runs d–t (6 meanings + figure) → v–t (6 meanings + figure) → a–t (3 meanings + figure) → "how the graphs relate" figure → Drawing Graphs checklist (9 rules: axis labels with units, even spacing, multiples of 2/5/10 never 3, more than half the axis, half-a-square accuracy, sharp pencil, best-fit) → two stepped worked examples (a d–t read; a d–t → v–t conversion with four gradient calculations) → tips. Their slope & area section adds: marked points on the line, units of slope, area by rectangle/triangle, curve area by splitting + counting, non-uniform acceleration (skydiver), tangent method with a fully-stepped worked example, and the "show don't tell" tip ("By the time you finish with the paper, it should be clearly annotated with your method").
Their projectiles section: key terms (time of flight, maximum height, range) → the two considerations → **three scenarios (vertical / horizontal / at an angle), one worked example each** → the "find the common value — time — first" tip.
Their FBD section: arrow rules → 3 numbered drawing rules → particle vs extended rigid body → closed-triangle equilibrium → worked example over two scenarios → labelling-convention tip.

**PMT.** Notes are thin; the value is the question-pack taxonomy: Edexcel Set 2 packs named exactly by skill — "1.3.1 Equations & Graphs of Motion", "1.3.2 Forces", "1.3.3 Energy, Work & Power", "Experiment Questions Unit 1" — plus AQA/OCR imports for Motion Graphs, Projectiles, suvat, F=ma, Resolving, Scalars & Vectors, Terminal Velocity. This is a ready-made drilling structure that matches our per-statement rebuild.

**The common pattern.** Teach the skill with pictures and a concrete journey; give the method as numbered steps; drill with worked examples where every line of working is written; only then the exam-language cards. Our current note mostly inverts this or skips the middle.

---

## 4. Figure sourcing table

| Figure needed | For | Source |
| --- | --- | --- |
| d–t journey with annotated phases | S2 §1 | generate |
| Walker d–t graph | S2 §1 | crop WPH11-2022-Jan-QP.pdf Q1 (or 2026-Jan Q17(b)) |
| v–t with positive and negative regions | S2 §2 | crop WPH11-2019-Jan-QP.pdf Q11 |
| a–t card / deceleration–time | S2 §3 | crop WPH11-2023-Jan-QP.pdf Q7 / WPH11-2025-Jan-QP.pdf Q5 |
| Three aligned graphs, one journey incl. below-axis phase | S2 §4 | generate (extend ph-motion-graphs) |
| Trapezium v–t | S2 worked | crop WPH11-2025-Jan-QP.pdf Q8 |
| Elevator v–t | S2/S3 worked | crop WPH11-2026-Jun-QP.pdf Q15 |
| Curve split into strips (area method) | S3 | generate |
| Resolving-by-drawing setup | S5 | generate (hiker-style) |
| Completed scaled vector triangle | S6 | crop WPH11-2025-Oct-QP.pdf Q12 |
| Launch → apex → landing, two columns annotated | S7 | generate |
| Three launch-type mini-figures | S7 | generate (or crop 2025-Oct-01A Q17 flare) |
| FBD gallery (4 bodies) | S8 | generate |
| Strobe / light-gates / stopwatch apparatus | S11 ×3 | crop WPH11-2024-Oct-QP.pdf Q14, WPH11-2019-Jan-QP.pdf Q12, WPH11-2020-Jan-QP.pdf Q16 |
| Curved slide (when suvat fails) | S1 | crop WPH11-2024-Jan-QP.pdf Q14 |

Crops come from the exam board's own art in `research/wph11/papers/`, already in house style. Generated figures are reserved for the teaching pictures no single paper image shows.

## 5. Worked-example rules for the rebuild

From the papers, the ERs and the owner's instruction, every worked card must:
1. Name the method and say why it is the method ("the vertical column carries this part", "no time is needed anywhere").
2. Show every substitution, one line each, KaTeX, with units on every value.
3. Keep the guard sig figs on show-thats and say so.
4. End deduce questions with number + comparison + verdict sentence.
5. Quote the MS line the answer earns, verbatim, beside the step it pays for.
6. Never skip a step the reader would have to invent — the first pass's complaint ("they skip some steps in some places") is the failure mode to design against. The 2026 cards mostly comply; the known compressions to fix: skier card's energy-route line, Mars card's ratio jump, impact-speed card's mass step.

## 6. Writing rules (unchanged from the owner's instruction)

Every line of teaching a bullet, max two lines, in the owner's voice; scenario descriptions become subsections with figures; no AI tells, no slogan-colon scaffolds, no report-reference framing; MS/ER quotes verbatim inside `*…*` with the citation beside them; `==highlight==` for the discriminating words.

## 7. Priority order for the rebuild (by marks at stake and current weakness)

1. **Statement 2 (+3)** — the largest weak visual topic; the owner's exemplar; new formats (levels-based) untaught.
2. **Statement 7** — the biggest marks block; needs the three-launch-types structure and the annotated figure; cards otherwise strong.
3. **Statement 11** — a practical with zero figures and an untaught six-orientation table.
4. **Statement 8** — no drawing method, no gallery, penalty-marking scheme untaught.
5. **Statement 5** — the "by drawing" half of the statement is absent.
6. **Statement 1** — conditions-of-use and signs.
7. **Statements 9, 6, 4, 10** — targeted additions (chain table; triangle figure + quote; classification table + speed/velocity; expand the thin section).
