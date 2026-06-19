# Zulu Tennis (By Veyane) — Elite Singles Performance System — Build Plan

> **Brand:** the product is named **ZULU TENNIS**, byline *by Veyane*.
> **Wordmark treatment — "Stacked + rule line":** `ZULU TENNIS` set large (uppercase, letter-spaced),
> a thin horizontal rule beneath, then `by Veyane` centered under the rule, then the tagline
> "The Elite Singles Performance System". **No icon inside the wordmark.** Top bar shows the compact
> form `ZULU TENNIS  |  by Veyane`. `<title>` tags read `Zulu Tennis — <Page Name>`. Apply consistently
> across hero, top bar, `<title>`s, and README.

## Mission

Build the most complete tennis singles **performance system** ever assembled for a competitive
adult player. **This is not a book — it is a complete Tennis Operating System.** The objective is
**not to hit better shots — it is to win more matches**, and to build a better *athlete* on and
off the court.

The finished product functions simultaneously as: Tactical Playbook · Training Manual · Match
Strategy Guide · Tournament Preparation System · Opponent Scouting System · Video Analysis System ·
Statistics Dashboard · Mental Performance Framework · **Athlete Development System (physical /
gym / recovery)** · Continuous Improvement System · Long-Term Development Roadmap. It guides a
player from intermediate through advanced competitive tournament play and should feel like the
operating manual used by a pro player + coach — not a traditional instructional tennis book.

**Guiding question every page must answer:** *"What is the next highest-value action this player
should take to increase their probability of winning tennis matches?"* — Do not build a tennis
encyclopedia; build a performance operating system.

## Success criteria (per concept)

Every concept answers: **What should I do? · Why? · When? · How do I execute it? · How do I
measure it? · How do I improve it? · How do I review it? · How do I adapt it?** Every section
connects directly to match performance, win %, competitive outcomes, and long-term development.

## Core philosophy

Evaluate every recommendation through: **(1) Match Win % · (2) Expected Value · (3) Risk vs Reward ·
(4) Repeatability Under Pressure · (5) Long-Term Improvement Potential.** Emphasize decision making,
pattern recognition, court positioning, tactical awareness, match intelligence, statistical
feedback, competitive adaptability. **Technique is discussed only when it directly impacts tactical
outcomes.**

## Performance Architecture (5 layers — every page tagged to the layer(s) it supports)

1. **Technical Execution** — serve, return, FH, BH, slice, volley, overhead, approach, passing, lob.
2. **Tactical Systems** — serve / return / baseline / attack / defensive / net patterns.
3. **Match Intelligence** — opponent profiling, pattern recognition, score & momentum awareness, tendency tracking, environment.
4. **Performance Management** — mental game, **physical/athletic development (gym, conditioning, speed, mobility)**, recovery, nutrition, energy & pressure management, tournament scheduling.
5. **Continuous Improvement** — match reviews, video analysis, data collection, prioritization, development planning.

## Decision Engine Architecture (CORE LOGIC LAYER — the spine of the whole OS)

The OS does not just teach concepts — it operates like an **in-match decision engine**. The unit of
truth is not "hit this shot" but: *given the score, situation, opponent, ball quality and my balance,
what is the highest-value decision that increases my probability of winning the point?* Every concept,
pattern, drill, and strategy in the system connects back to this engine.

**Tactical Decision Formula** — every decision is evaluated against 10 inputs: (1) Score Situation ·
(2) Point Importance · (3) Court Position · (4) Incoming Ball Quality · (5) Player Balance ·
(6) Opponent Position · (7) Opponent Weaknesses · (8) Risk Level · (9) Expected Reward ·
(10) Recovery Position After Shot. **Priority principles:** Expected Value > highlight shots ·
Repeatability > perfect execution · Pressure reliability > practice-level performance.

**Universal Decision Card template** — every tactical *pattern* across the OS (in 01, 05, 25, and the
scenario/problem pages) is authored as a reusable **Decision Card** component (`.decision-card` CSS)
with these fields: **Pattern Name · Match Situation (score/rally/court position/opponent behaviour) ·
Problem It Solves · Decision Rule (simple automatic if→then) · Why It Works (geometry/probability/risk/
recovery/pressure) · Wrong Decision Example · Correct Decision Example · Decision Tree (SVG/text) ·
Practice Drill (setup/reps/constraints/cues/metrics) · Match Application · Success Metrics ·
Opponent Adaptations · Skill-Level Adaptation.** (Tactical *concepts* still use the 8-part template;
*patterns* use the Decision Card. Many pages carry both.)

**Engine components (built primarily on `01-decision-making.html`, threaded through other pages):**
- **Ball-Quality Decision Engine** — the universal entry tree: *Is the ball attackable?* → No → neutralize / recover / extend rally · Yes → *Can I attack with balance?* → No → keep constructing · Yes → attack → finish → recover.
- **Home Base Pattern** (flagship worked Decision Card) — the imaginary center line between the two players defines **outside groundstroke** (ball crosses the line → do NOT change direction, return crosscourt with height/margin, recover, wait for a better ball) vs **inside groundstroke** (ball does not cross the line → direction change available → attack open court / inside-in / inside-out when balanced). Includes wrong vs correct example, decision tree, the worked "0-30 backhand crosscourt rally" reasoning, drill, metrics (directional-change errors, rally-extension rate, UE reduction, point win %).
- **Match State Engine** — tactics keyed to score state (0-0, 15-0, 30-0, 40-0, 0-15, 0-30, 0-40, 15-15, 30-30, Deuce, Break Point, Tie-Break); for each: recommended aggression level, risk tolerance, preferred patterns, serve strategy, return strategy, mental focus, avoidable mistakes. **Lives in/links tightly with `10-score-based-strategy.html`.**
- **Pattern Autopilot Library** — default high-percentage patterns per pressure situation (neutral rally, 0-30 serve game, short ball, wide defensive position, big-server return, break-point down, tie-break) to reduce decision fatigue. **Surfaces in `25-pattern-library.html` and the Set-Break planner.**
- **Match Scenario Database** — searchable/filterable scenarios ("opponent attacks my backhand crosscourt", "opponent pulling me wide", "ahead but can't close", "behind and rushing", "keep missing DTL changes", "lose to pushers", "lose break points"); each = Situation · Recommended Decision · Reason · Risk Level · Drill · Metrics. **Implemented across `17-match-problem-solver.html` (diagnostic) + `01` (reasoning) and indexed in the data model.**
- **Professional-Level Tactical Reasoning** blocks — Situation → Wrong decision + why → Better decision + why → Result, shown on key patterns.

**Closing requirement:** decisions should feel *automatic*. After losing a point the player can open the
OS and answer: "Why did I lose that point? What was the correct decision? What pattern should I train?
What do I do next time?" Every page ends with the **next highest-value action**.

## Technical requirements

- **Dependency-free static website** for **GitHub Pages** — no frameworks, no build process, no dependencies; works directly when deployed.
- **Location:** `/Users/mac/Documents/Claude Code Projects/Tennis Playbook/`.
- UX: semantic HTML · responsive · light/dark mode · print-friendly · mobile-friendly nav · sticky sidebar nav · scroll-spy active section · smooth scrolling · **subtle** lightweight animations · `prefers-reduced-motion` support. **Diagrams stay static.**
- Visuals: **original only** (no copyrighted diagrams). Inline **SVG** court maps, shot-path diagrams, decision trees, tactical maps, positioning diagrams, KPI dashboards, scouting sheets, worksheets. **One reusable SVG court template powers all tactical diagrams** (`assets/courts.js`).
- Video: for every major concept — search the web, find a **real, currently-live YouTube video, verify it exists**, include **Title · Channel · direct watch URL**. Never invent IDs or fabricate links.

## File structure

```
Tennis Playbook/
├── PLAN.md                        # this build plan, saved into the project folder (written first)
├── DELIVERY-PLAN.md               # living 10-part tracker — checkboxes + status + notes, updated each part
├── index.html                     # cover · Mission/Philosophy · 5-layer Architecture · master TOC · how-to-use
├── 00-player-identity.html        # Player Identity System (assessment + archetypes)
├── 01-decision-making.html
├── 02-court-geometry.html
├── 03-serve-strategy.html
├── 04-return-strategy.html
├── 05-baseline-patterns.html
├── 06-attacking-system.html
├── 07-defensive-system.html
├── 08-net-play-system.html
├── 09-player-type-strategies.html
├── 10-score-based-strategy.html
├── 11-mental-performance.html
├── 12-match-analysis.html
├── 13-video-analysis.html
├── 14-practice-blueprint.html
├── 15-advanced-concepts.html
├── 16-complete-match-playbook.html
├── 17-match-problem-solver.html   # troubleshooting / decision-support system
├── 18-athlete-development.html    # OFF-COURT: gym/strength, speed/agility, conditioning, mobility,
│                                  #   injury prevention, recovery, sleep, nutrition, off-court mental training
├── 20-match-intelligence-db.html  # opponent scouting framework + printable sheets
├── 21-analytics.html              # KPI dashboard + benchmarks by level
├── 22-tournament-os.html          # countdown checklists + dashboards
├── 23-development-roadmap.html    # 12-month plan, quarterly/monthly/weekly/daily, matrices
├── 24-ai-review-framework.html    # copy-paste AI prompt templates
├── 25-pattern-library.html        # Elite Match Patterns Library
├── 26-improvement-engine.html     # Priority = Impact × Frequency × Ease prioritization system
├── 27-skill-roadmap.html          # skill-level roadmap (Intermediate→Elite Amateur)
├── 28-80-20-winning-tennis.html   # highest-return skills + anti-distraction section
├── 29-data-model.html             # unified player database schema (web-app-ready); single source of truth
├── 30-drill-library.html          # stroke / pattern / PHYSICAL drills
├── set-break.html                 # Set-Break Quick-Planner (standalone, high-contrast, <20s)
├── assets/
│   ├── styles.css                 # layout, callouts, dashboards, light/dark, print rules
│   ├── nav.js                     # shared sidebar TOC / scroll-spy / panel toggle (tiny, no libs)
│   └── courts.js                  # reusable inline-SVG court template + diagram helpers
└── README.md                      # what it is + how to enable GitHub Pages (Settings → Pages → main /root)
```

- Shared header/sidebar nav (grouped by the 5 layers) on every page via `styles.css` + `nav.js`.
- **Printables live in-page** (scouting sheets, scorecards, training/athlete logs, roadmap & improvement worksheets, AI-prompt sheets) with `@media print` CSS so Print / Save-as-PDF yields clean sheets. No separate template files.

## Reusable component library (CSS classes)
⚠️ Common Mistakes · 🎯 Tactical Purpose · 🎾 Drill · ✅ Success Metrics · 🌳 Decision Tree ·
📋 Checklist/Worksheet · ▶️ Watch (verified YouTube) · 📊 Dashboard/KPI · 🧠 AI Prompt ·
🗂️ Scouting Sheet · 🏋️ Physical/Gym block · 🩺 Recovery/Nutrition block · 🔬 Evidence-Level badge ·
🃏 **Decision Card** (`.decision-card` — the universal pattern component) · ⚖️ Tactical Decision Formula block.

## Evidence-Level system (global convention)
Tactical/training recommendations carry a small inline **Evidence-Level badge** so the reader knows
how strongly a claim is backed:
- **Level A** — strong professional + sports-science support.
- **Level B** — widely accepted coaching principle.
- **Level C** — useful heuristic.
- **Level D** — personal preference.

Implemented as a CSS badge (`.ev .ev-a/.ev-b/.ev-c/.ev-d`); a legend appears on `index.html` and in the callout legend. Applied consistently across all pages.

## Content map

**Core tactical concepts use the 8-part template:** Explanation → Tactical Purpose → Common
Mistakes → Practice Drills → Match Application → Decision Tree → Success Metrics → **Watch Resources
(verified YouTube)**.

### Foundational
- **index.html** — cover, Mission, Core Philosophy, 5-layer Architecture, how-to-use, master TOC, callout legend.
- **00 Player Identity System** — assess playing style, strength/weakness profile, preferred patterns, serve & return effectiveness, fitness & mental profile. Archetypes: Aggressive Baseliner, Counter Puncher, All-Court, Serve-Dominant, Grinder, Net Attacker, Hybrid — each with tailored recommendations. Printable assessment sheet.

### Core tactical modules (8-part template + Watch)
- **01 Decision-Making = THE DECISION ENGINE** (centerpiece) — Tactical Decision Formula (10 inputs + priority principles), universal Ball-Quality Decision Engine tree, the **Decision Card** schema + **Home Base Pattern** flagship card (inside/outside groundstroke logic with the worked 0-30 backhand-rally reasoning), Pattern Autopilot defaults, and pro-level tactical-reasoning blocks; SVG flowcharts throughout · **02 Court Geometry** (SVG court maps, recovery positions) · **03 Serve Strategy** (wide/body/T, 2nd-serve, serve+1 maps) · **04 Return Strategy** (1st/2nd, aggressive vs neutralizing, vs big servers/pushers/lefties) · **05 Baseline Patterns** (A–F, SVG, success %) · **06 Attacking System** ("Should I attack?" checklist) · **07 Defensive System** · **08 Net Play System** · **09 Player-Type Strategies** (pusher/counterpuncher/power baseliner/S&V/all-court/moonball/lefty/big server/junkball) · **10 Score-Based Strategy = the Match State Engine** (per score state: aggression, risk tolerance, preferred patterns, serve/return strategy, mental focus, avoidable mistakes) · **11 Mental Performance** (Reset/Breathe/Analyze/Commit + situations) · **12 Match Analysis** · **13 Video Analysis** (grading rubrics) · **14 Practice Blueprint** (1hr/2hr/weekly/monthly/tournament-prep) · **15 Advanced Concepts** (EV, risk/reward, probability models, analytics, heatmaps, momentum/energy, environment: wind/sun/altitude/clay/hard/grass) · **16 Complete Match Playbook** (pre/warm-up/first-2-games/mid-match/pressure/closing/post-match checklists).

### Decision-support & athlete development
- **17 Match Problem Solver = the Match Scenario Database** — searchable/filterable troubleshooting + decision-support: losing to pusher/big server/lefty, tight matches, long rallies, tiebreaks, outpowered, outdefended, mental breakdown, too passive, overhitting, plus point-level scenarios ("opponent attacks my backhand crosscourt", "pulling me wide", "ahead but can't close", "behind and rushing", "keep missing DTL changes", "lose break points"). For each: Symptoms/Situation · Likely Causes · Diagnostic Questions · Recommended Decision + Reason · Risk Level · Tactical Adjustments · Practice Priorities/Drill · Metrics to Track · Recovery Plan. Built on the Decision Card structure; scenarios indexed via the data model.
- **18 Athlete Development System (OFF-COURT)** — the "better athlete" engine:
  - **Physical / Gym:** strength & power (programming, key lifts, sets/reps), speed & acceleration, agility & change-of-direction, on-court footwork patterns, endurance/energy-system conditioning, mobility & flexibility.
  - **Injury prevention / prehab:** shoulder/elbow/wrist, hips/knees/ankles, warm-up & cool-down protocols.
  - **Recovery & lifestyle:** sleep, active recovery, load management, hydration, nutrition (match-day & training fueling).
  - **Off-court mental training:** visualization, focus/attention training, confidence building, routines, journaling.
  - **Periodization:** weekly athlete schedule (on-court + gym + recovery), in-season vs off-season blocks; ties to **23 Development Roadmap**. Printable athlete/training logs; physical-test benchmarks (sprint, agility, jump, endurance).

### Intelligence, analytics, development, improvement
- **20 Match Intelligence Database** — scouting framework (tendencies, serve/return tendencies, rally patterns, weaknesses, pressure/tiebreak/break-point behaviour, favourite serve locations & return positions); printable reusable scouting sheets.
- **21 Tennis Analytics System** — KPI dashboard (1st/2nd serve %, pts won on 1st/2nd, return pts won, BP conversion, BP save %, winner:error, UE, FE, rally length, net %, approach %, tiebreak %, deciding-set %) + benchmark ranges by level.
- **22 Tournament Operating System** — 30/14/7-day, 48-hour, match-day, between-matches, recovery, post-tournament checklists + dashboards.
- **23 Annual Development Roadmap** — 12-month plan, quarterly review, monthly assessment, weekly planning, daily log, skill-prioritization matrix, weakness-elimination + strength-amplification systems. **Annual Review worksheet** evaluating: win %, surface performance, opponent-type performance, physical development, technical development, mental development, goal completion, biggest improvements, biggest weaknesses, next-year priorities (printable).
- **24 AI Review Framework** — copy-paste prompts: match review, tactical analysis, opponent scouting, training planning, tournament review, video analysis, weakness prioritization. Printable.
- **25 Elite Match Patterns Library + Pattern Autopilot** — every pattern authored as a **Decision Card**: Serve+1, Return+1, FH Dominance, BH Neutralization, Approach, Defensive Recovery, Counterattack, Pressure Point, Tie-Break, Closing-Out. Card fields plus: Risk Level · Expected Reward · Best Surface · Best Opponent Type · Professional Examples. Includes the **Pattern Autopilot Library** (default high-% pattern per pressure situation: neutral rally, 0-30 serve game, short ball, wide defensive, big-server return, break-point down, tie-break) to cut decision fatigue.
- **26 Improvement Engine** — after every match rate Impact / Frequency / Ease; **Priority Score = Impact × Frequency × Ease**; auto-rank weaknesses; recommend what to train next, what to ignore, what most raises win probability. Worksheets + dashboard.
- **27 Skill-Level Roadmap** — Intermediate / Advanced / Tournament / Elite Amateur. Each: Primary & Secondary Focus · Common Mistakes · Recommended Metrics · Training Priorities · Match Priorities · Progression Benchmarks.
- **28 80/20 Winning Tennis** — highest-return skills ranked by expected match impact (1st serve %, return depth, crosscourt consistency, fitness, recovery positioning, shot tolerance, decision making). Each: why it matters · how to improve · measurement framework · expected match impact. Explicit **anti-distraction** section (low-value skills players overemphasize).

### Data backbone
- **29 Data Model** — defines a **unified player database schema** that all dashboards, worksheets, scouting sheets, analytics, and the improvement engine reference, so data connects consistently. Entities: Player Profile · Match History · Opponent Profiles · Practice Sessions · Fitness Tests · Physical Metrics · Tournament Results · Video Reviews · Improvement Priorities · Development Roadmap Progress · **Decision Cards / Patterns · Match Scenarios · Point Logs** (so the decision engine, scenario database, and "why did I lose that point?" review are all schema-backed). Show each entity's fields, relationships (an ER-style diagram via SVG), and example records. **Designed as if a future version could become a web app** (clean, normalized field names; JSON-shaped examples). Other pages note which schema entity their worksheet maps to.

### Drills & set break
- **30 Drill Library** — extensive stroke / pattern / **physical** drills. Each drill: Setup · Objective · Repetitions · Constraints · Coaching Cue · Progression · Success Metric. Cover serve, return, FH, BH, slice, volley, overhead, approach, passing, lob, serve+1, return+1, crosscourt patterns, attack patterns, defensive recovery, pressure scenarios, **plus off-court physical drills (speed, agility, footwork ladders, strength circuits)**.
- **set-break.html** — dedicated high-contrast page to adjust strategy in <20s: What's Working · What's Not · Opponent-Type Counter Guide · Serve Target Reminders · Return Target Reminders · Aggression Dial · Next-Set Plan (3 actions). Printable + mobile-friendly.

## Build approach
- **First step:** create the `Tennis Playbook/` folder, save this plan as `Tennis Playbook/PLAN.md`, and create `Tennis Playbook/DELIVERY-PLAN.md` (the living 10-part tracker). Update `DELIVERY-PLAN.md` at the end of every part.
- Build shared `styles.css`, `nav.js`, `courts.js` first; establish the page template (header, sidebar nav grouped by 5 layers, layer tag, footer) and reuse across all pages.
- Use **WebSearch** to source a real, currently-live YouTube video per major concept; record exact `watch?v=` URL + title + channel; verify before including.
- Author the SVG court template once; parameterize per diagram (shot paths, targets, recovery dots, server/returner color-coding).
- Implement print CSS so every in-page template/worksheet outputs a clean sheet.

## Delivery plan — 10 parts (build a little → you review → carry on)

Each part is a self-contained, reviewable chunk. I stop after every part for your review before
continuing. Part 1 establishes the shared design system that all later pages inherit, so it's the
most important review gate — once the look/feel/nav are approved, content pages go fast.

This 10-part list is mirrored in a **living `DELIVERY-PLAN.md`** in the project folder (created in
Part 1). After each part I update it — check off completed pages, note status, decisions, and any
follow-ups — so it always reflects current progress.

- **Part 1 — Scaffold & Design System.** Create `Tennis Playbook/` + `PLAN.md` + `DELIVERY-PLAN.md`; build `assets/styles.css` (layout, light/dark, print CSS, callout components, 🔬 evidence badges, **🃏 `.decision-card` + ⚖️ decision-formula components**), `assets/nav.js` (sticky sidebar grouped by 5 layers, scroll-spy, smooth scroll, panel toggle, reduced-motion), `assets/courts.js` (reusable inline-SVG court template + diagram helpers), the shared page template, and **`index.html`** (cover, Mission, Philosophy, 5-layer Architecture, **Decision Engine overview**, master TOC, callout + evidence legend). *Review the visual system & navigation here.* (`styles.css` already built; `nav.js`, `courts.js`, `index.html`, `DELIVERY-PLAN.md` remain.)
- **Part 2 — Foundations:** `29-data-model.html` (schema backbone first so everything maps to it), `00-player-identity.html`.
- **Part 3 — Decision core:** `01-decision-making.html` (**the Decision Engine** — formula, ball-quality tree, Decision Card schema, Home Base Pattern), `02-court-geometry.html`.
- **Part 4 — Serve & Return:** `03-serve-strategy.html`, `04-return-strategy.html`.
- **Part 5 — Rally systems:** `05-baseline-patterns.html`, `06-attacking-system.html`, `07-defensive-system.html`, `25-pattern-library.html`.
- **Part 6 — Opponent & situation:** `08-net-play-system.html`, `09-player-type-strategies.html`, `10-score-based-strategy.html`.
- **Part 7 — Mind & body:** `11-mental-performance.html`, `17-match-problem-solver.html`, `18-athlete-development.html`.
- **Part 8 — Measurement & advanced:** `12-match-analysis.html`, `13-video-analysis.html`, `20-match-intelligence-db.html`, `21-analytics.html`, `15-advanced-concepts.html`.
- **Part 9 — Improvement & development:** `22-tournament-os.html`, `23-development-roadmap.html` (+ Annual Review), `26-improvement-engine.html`, `27-skill-roadmap.html`, `28-80-20-winning-tennis.html`.
- **Part 10 — Execution assets & finish:** `14-practice-blueprint.html`, `16-complete-match-playbook.html`, `24-ai-review-framework.html`, `30-drill-library.html`, `set-break.html`, `README.md`, then a **final cross-link + QA pass** (verification checklist below).

YouTube reference videos are sourced/verified during the part that builds each page.

## Verification
1. Open `index.html` and several section pages — sidebar nav + scroll-spy work across pages, light/dark toggles, callouts/dashboards/SVG diagrams render, Set-Break planner is scannable, responsive on mobile, animations suppressed under `prefers-reduced-motion`, print preview clean for worksheets/scouting sheets/logs.
2. Spot-check YouTube links across sections resolve to live videos.
3. No external deps block rendering (CSS/JS/SVG local/inline; only YouTube links/thumbnails external by design).
4. README GitHub Pages steps accurate (push → Settings → Pages → deploy from `main`, root).

## Notes
- All content original; no proprietary system/wording/diagrams reproduced.
- "Comprehensive but tight" prose — dashboards, tables, diagrams, and checklists do the heavy lifting.
- Every page ends pointing to the next highest-value action (ties into Improvement Engine / 80-20).

---

# COURTSIDE REDESIGN — glanceable / bench-ready (CURRENT WORK)

## Context
The full system is built and live, but it's **word-heavy** — too slow to read on the bench
mid-practice and daunting to "finish." Goal: make every page **readable in ~30 seconds** while
keeping the depth for home study. Decisions (confirmed with user): **(1) add a Courtside Card to the
top of every page + collapse the deep prose behind a toggle; (2) add a diagram to every key concept
("see it" over "read it").** The diagram engine (`assets/courts.js`) and component system already exist.

## The model (per content page)
`[pagehead]` → **`[Courtside Card]`** (the 30-second read) → `[<details class="more">` wrapping ALL the
existing deep sections, collapsed by default]` → `[next-action]` → `[pager]` → `[footer]`.

### Courtside Card — `.courtside` (new component)
High-contrast card, authored per page. **Brevity standard: readable in ~10 seconds at the break chair,
under pressure.** Telegraphic, not sentences. Big type, mostly visual:
- **The core rule** — ONE line, ≤ ~8 words, large (e.g. "Reset outside ball. Attack inside ball.").
- **One diagram** (the ball-decision picture; reuse `courts.js`).
- **Do / Don't** — `✓ …` / `✗ …`, a few words each.
- **1–3 cue words** (what you say to yourself: "Cross… cross… now").
- **Drill:** one short line.
No paragraphs, no "why" — that lives in the collapsed breakdown. The card alone tells you what to do.

### Collapse the depth — `details.more`
Everything currently on the page (the h2 sections, tables, callouts, full Decision Cards, Watch
videos) moves **inside one `<details class="more">`** with a summary like
"📖 Open the full breakdown — drills, why, examples". Default **closed**, so the page is just the card.

## Implementation
- **`assets/styles.css`** — add `.courtside` (header strip, big rule, do/don't `.dd`, cue list, mini drill row),
  `details.more` + `summary` styling, and a **print override** so `details` content always prints
  (`@media print{ details>*{display:block!important} summary{display:none} }`).
- **`assets/nav.js`** — add `initCollapse()`: on any page that has a `.courtside` card, gather the
  siblings between the card and `.next-action` and wrap them in `<details class="more">` (closed);
  hide/remove `#pageToc` on those pages (the card replaces it). One change → applies site-wide; robust
  vs editing 32 bodies by hand. Respect `prefers-reduced-motion` (no animated open).
- **Each `NN-*.html`** — author the `.courtside` card right after `.pagehead`. Distil the page's core
  rule, pick/þadd a diagram, write Do/Don't + cues + one-line drill. Pull the rule/diagram from content
  already on the page where possible.
- **Diagrams for every key concept** — add `data-court` diagrams where missing, e.g.: `03` serve patterns
  per side, `04` return positions, `09` a mini court per opponent type (where they hurt you / where to attack),
  `11` a Reset→Breathe→Analyze→Commit loop, plus reuse existing diagrams inside cards. Data pages
  (`12/13/20/21/29`) keep their tables; their cards carry the one visual that matters.
- `set-break.html` is already a courtside-style card → leave as the model; no collapse needed.
  `24-ai-review` (prompts) and short utility pages: card optional, no heavy collapse.

## Delivery (waves — bench-critical first)
- **Wave A — design system:** `.courtside` + `details.more` CSS, `nav.js` collapse logic, build & verify on one page (`01`).
- **Wave B — core tactical/decision pages** (what you actually read courtside): `01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 25, 17`, + confirm `set-break`.
- **Wave C — mind/body & execution:** `11, 18, 14, 16, 22`.
- **Wave D — measurement/improvement/dev + foundations:** `12, 13, 15, 20, 21, 23, 26, 27, 28, 00, 29`.
- Update `DELIVERY-PLAN.md`; commit per wave; push.

## Verification
1. Render core pages at **390px** (iPhone) and desktop: card appears first and is self-sufficient; the
   breakdown is collapsed; one tap expands; diagrams render; no horizontal overflow.
2. **Print** a page → the collapsed breakdown prints fully (worksheets intact).
3. Spot-check the Courtside Card alone answers: what's the rule, what does the ball-decision look like,
   what do I drill — without expanding.
4. Re-run link/asset QA; commit & push; confirm live on GitHub Pages.

---

# BENCH DECK REDESIGN — the front door (CURRENT WORK)

## Context
Even ~12 pages feels like too many. The user needs **one thing**, usable on the bench in seconds —
but also wants real depth expressed as **scenario plays ("how to play each ball / every court
decision")** and **embedded YouTube**, all *visual*, not prose. UI-designer review (read-only)
recommended a single swipeable deck as the front door, keeping the 30 pages as a hidden library.
Confirmed with user: **8-card deck · embedded video per topic · rich ball-by-ball scenarios · keep
30 pages as deep library.**

## The model
- **`bench.html` = the home / only destination.** Vertical **scroll-snap deck** of **8 full-screen
  cards**, right-edge **dot rail**, top pills: **Bench · Set Break · Library**. **No sidebar.**
- **8 cards** (existing `.courtside`: rule + animated diagram + ✓Do/✗Don't + cue + one-line drill):
  1 Read the ball · 2 Serve +1 · 3 Return · 4 Rally/construct · 5 Attack/finish · 6 Defend/reset ·
  7 Opponent counter · 8 Score + head. Each card foot: **"Deepen → scenarios & video".**
- **Deepen target = the topic page, reframed to lead with a Scenario Engine + embedded video**, old
  prose collapsed below (`details.more`). The other ~22 pages remain the untouched deep library,
  reachable via the one **Library** link.

## New/changed pieces (reuse everything that exists)
- **`bench.html`** (new): `.deck` container + 8 lifted `.courtside` cards + dot rail. Becomes home
  (retire/relabel `index.html` → "About the system", or redirect).
- **Deck CSS** (~30 lines in `styles.css`): `.deck{height:100dvh;overflow-y:auto;scroll-snap-type:y mandatory}`,
  `.deck>.courtside{min-height:100dvh;scroll-snap-align:start;display:flex;flex-direction:column;justify-content:center}`,
  dot-rail. Cards reuse `.courtside/.cs-*/data-court/data-viz` unchanged.
- **Dot-rail JS** (~25 lines): build 8 dots + `IntersectionObserver` active-dot (copy the pattern from
  `nav.js` `initScrollSpy`/`initReveal`). `nav.js` sidebar/collapse already no-op without `#sidebar`.
- **Inline video embeds (facade)** — upgrade `.video-item` in `nav.js initVideos()` so a **tap swaps the
  thumbnail for a responsive 16:9 `<iframe>` (`youtube.com/embed/ID`)** that plays in-page. Lazy
  (no eager iframes → no perf hit), reduced-motion safe, works on the scenario pages and existing Watch blocks.
- **Scenario Engine** (new `.scenarios` grid component, CSS + per-topic content): a responsive grid of
  **mini scenario cards**, each = a **ball situation label + an animated `data-court` diagram + a
  telegraphic decision** ("if the ball is ___ → do ___"). Authored per topic to cover the key + edge
  court decisions. Reuses `courts.js`. Goal: "every court decision" expressed as pictures, not paragraphs.

## Scenario coverage per card (pattern — diagrams, ≤6-word decisions)
- **Read the ball:** deep+fast · short+sitting up · wide/outside · inside · low slice · high heavy · body/jam · on the run.
- **Serve +1:** wide / body / T × deuce & ad → the +1 each.
- **Return:** 1st vs 2nd × wide / body / T.
- **Rally:** CC tolerance · DTL-change trigger · deep middle · change height/spin.
- **Attack:** short ball · approach DTL · swing volley · put-away/recover.
- **Defend:** pulled wide · lob the net-rusher · slice reset · neutral reset.
- **Opponent:** pusher · counter-puncher · power baseliner · S&V · lefty · big server · moonballer · junkballer → one plan each.
- **Score + head:** key score states (0-0/0-30/30-30/BP/tiebreak) + the Reset·Breathe·Analyze·Commit routine.

## Delivery waves (review after each)
1. **Bench Deck** — `bench.html` + deck CSS/dot-rail JS + make it the home + top pills. *(The big "feels like one thing" win; small effort.)*
2. **Inline video embeds** — facade upgrade in `nav.js` + CSS; verify a tap plays in-page.
3. **Scenario Engine** — `.scenarios` component + author scenario grids on the 8 topic pages + embed each topic's video. *(Largest wave; do per topic.)*

## Verification
1. `bench.html` at **390px**: swipe through 8 cards (scroll-snap), dot rail tracks + jumps, no sidebar, feels like one finishable thing; top pills switch Bench/Set-Break/Library.
2. "Deepen →" opens the topic's Scenario Engine; scenario mini-diagrams animate; decisions are ≤6-word.
3. Tap a video → it plays **inline** (iframe facade); reduced-motion + print still OK.
4. 30 deep pages still reachable via Library; all links resolve; commit & push per wave; live on Pages.

## UX hardening (from UX review — folded into the waves)
**P0 — bench-critical (Wave 1):**
- **Remember deck position:** on Deepen-tap, `sessionStorage['zt-deck-card']=i`; on `bench.html` load, instant `scrollIntoView({block:'start',behavior:'auto'})` to that card. Deepen links carry `#deepen`. → "Back" lands on the exact card.
- **Dot rail = real controls:** `<nav aria-label="Deck cards">` of 8 `<button aria-current aria-label="Card 3, Return">`; numbered always; active dot shows the name; **passed dots fill yellow = progress**; tap → jump. Reuse the `nav.js` IntersectionObserver pattern for active state.
- **Snap robustness:** `scroll-snap-stop:always` on `.deck>.courtside`; use `100dvh`; tall cards allow internal overflow (no hard center-clip at large text / landscape).
- **Persistent card header** `[3 / 8] · RETURN` (repurpose `.cs-eyebrow`); title top, **Deepen → at the bottom** (thumb reach).
- **"← Bench" pill** on every topic/scenario page (don't rely on browser Back).

**P1 — sun & no-signal (Wave 1–2):**
- **Bench-mode toggle** (pill on `bench.html`, `localStorage`, mirrors theme-toggle): max-contrast card (black bg / `#ffd400` rule / no shadow / rule clamp ~2.4–2.8rem) + demote Deepen to muted footer link.
- **Deck index** (card 0 or "Index" pill): 8-tile grid (number · name · mini-diagram) → jump; doubles as 5-second first-run orientation.
- **First-run hint:** card 2 peeks above the fold + one-time fading ⌄ chevron (both gated by `prefers-reduced-motion`); no modal.
- **Deck-complete state** after card 8: "Deck complete" strip → Set-Break + Back-to-top.
- **Service worker** (dependency-free) precaching `bench.html`, the 8 topic pages, `assets/*`, favicon → **deck works offline on court.**

**P2 — scenario/study polish (Wave 3):**
- Scenario grid: **cap ~6 visible + chip-filter** the overflow (opponent types, ball types); enforce ≤6-word decisions.
- **Animate only in-view** scenario diagrams (wire `courts.js` `_animate` to an IntersectionObserver).
- **Video facade hardening:** inject iframe (`?autoplay=1`) only on tap, never eager; `navigator.onLine===false` → "No signal — saved for later" chip (title+channel) instead of a dead iframe; defer thumbnails until near view; keep ▶ fallback badge.
- **A11y sweep:** card `tabindex="-1"` + heading per card; `aria-current` on dots; Tab order pills → dots → content; reduced-motion gates the new scroll-jumps + chevron.
