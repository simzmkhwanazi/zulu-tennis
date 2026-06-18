# Zulu Tennis (by Veyane) — Delivery Tracker

Living progress log. Built in **10 parts**; after each part we stop, review, then continue.
Legend: ✅ done · 🔄 in progress · ⬜ pending.

> Full spec lives in [PLAN.md](PLAN.md).

---

## Part 1 — Scaffold & Design System 🔄 (in review)
- ✅ `Tennis Playbook/` folder + `PLAN.md` + `DELIVERY-PLAN.md`
- ✅ `assets/styles.css` — layout, light/dark, print CSS, callouts, 🔬 evidence badges, 🃏 Decision Card + ⚖️ formula components, stacked-rule wordmark
- ✅ `assets/nav.js` — sidebar (grouped by 5 layers), theme toggle, mobile menu, scroll-spy, reveal-on-scroll
- ✅ `assets/courts.js` — reusable inline-SVG court engine (court-units API: shot paths, movement, zones, recovery dots, players)
- ✅ `index.html` — wordmark hero, mission, philosophy, 5-layer architecture, Decision Engine overview + 10-input formula, master TOC, full component/evidence legend, sample court diagram & Decision Card
- **Brand:** ZULU TENNIS, *by Veyane* — "Stacked + rule line" wordmark.
- **Review gate:** confirm look/feel, navigation, dark mode, and the court diagram render before mass content.

## Part 2 — Foundations ✅ (in review)
- ✅ `29-data-model.html` — unified schema, inline SVG ER diagram, 13 entities, JSON example, cross-links
- ✅ `00-player-identity.html` — self-assessment worksheet (printable), 7 archetypes, one-page profile, verified ▶️ videos

## Part 3 — Decision core ✅ (in review)
- ✅ `01-decision-making.html` — Decision Engine: core question, 10-input formula, ball-quality tree, Decision Card schema, full **Home Base Pattern** card (worked 0-30 reasoning), Pattern Autopilot table, 3 verified ▶️ videos, court diagram
- ✅ `02-court-geometry.html` — crosscourt math (net/length KPIs), margin, target zones, 75/25, recovery positions + bisector, 3 court diagrams, drill, 3 verified ▶️ videos

## Part 4 — Serve & Return ✅ (in review)
- ✅ `03-serve-strategy.html` — wide/body/T targets diagram, Serve+1 (Decision Card + map), 1st/2nd patterns, serve-by-score tree, drill, 3 verified ▶️ videos
- ✅ `04-return-strategy.html` — return's job, 1st vs 2nd table, decision tree, vs big server/pusher/lefty cards, drill, 3 verified ▶️ videos

## Part 5 — Rally systems ✅ (in review)
- ✅ `05-baseline-patterns.html` — Patterns A–F, 6 court diagrams, success %, use-when/risk, drill, 3 ▶️
- ✅ `06-attacking-system.html` — attackable-ball cues, "Should I attack?" checklist, footwork, approach selection, closing diagram, drill, 3 ▶️
- ✅ `07-defensive-system.html` — 4 defensive tools, wide recovery diagram, decision tree, drill, 3 ▶️
- ✅ `25-pattern-library.html` — Pattern Autopilot table, 10-pattern library table, 2 spotlight Decision Cards, 3 ▶️

## Part 6 — Opponent & situation ✅ (in review)
- ✅ `08-net-play-system.html` — positioning/bisector diagram, first volley, net shots table, decision tree, drill, 3 ▶️
- ✅ `09-player-type-strategies.html` — 9 opponent cards (strengths/weaknesses/plan/avoid), 3 ▶️
- ✅ `10-score-based-strategy.html` — Match State Engine: serving + returning tables (all score states), tie-break, aggression-dial tree, drill, 2 ▶️

## Part 7 — Mind & body ✅ (in review)
- ✅ `11-mental-performance.html` — Reset/Breathe/Analyze/Commit routine, 6 situation protocols, loop tree, drill, 3 ▶️
- ✅ `17-match-problem-solver.html` — **searchable** scenario database (13 problem cards, live filter), how-to-use, 3 ▶️
- ✅ `18-athlete-development.html` — strength template, speed/agility/footwork, endurance, mobility, prehab, recovery, nutrition, off-court mental, weekly periodization table, benchmarks, printable athlete log, 3 ▶️

## Part 8 — Measurement & advanced ✅ (in review)
- ✅ `12-match-analysis.html` — tally method, printable scorecard, "reading the numbers" table, 3 ▶️
- ✅ `13-video-analysis.html` — what to track, A–D grading rubric, review log, 2 ▶️
- ✅ `20-match-intelligence-db.html` — printable scouting sheet (all fields), distil-to-3 plan, 2 ▶️
- ✅ `21-analytics.html` — KPI dashboard cards, KPI table, benchmarks by 7 levels, 2 ▶️
- ✅ `15-advanced-concepts.html` — EV, risk/reward matrix, pattern probability, analytics/heatmaps, momentum/energy, environment table (wind/sun/altitude/clay/hard/grass), 3 ▶️

## Part 9 — Improvement & development ✅ (in review)
- ✅ `22-tournament-os.html` — 30/14/7-day, 48h, match-day, between-matches, recovery, post-tournament checklists, 3 ▶️
- ✅ `23-development-roadmap.html` — 12-month blocks, quarterly/monthly/weekly/daily, skill-prioritization matrix, printable Annual Review, 2 ▶️
- ✅ `26-improvement-engine.html` — Priority = Impact×Frequency×Ease, worksheet + worked example + recommendation tree, 2 ▶️
- ✅ `27-skill-roadmap.html` — Intermediate/Advanced/Tournament/Elite cards (focus/mistakes/metrics/progress), 2 ▶️
- ✅ `28-80-20-winning-tennis.html` — 6 highest-return skills + anti-distraction section, 2 ▶️

## Part 10 — Execution assets & finish ✅
- ✅ `14-practice-blueprint.html` — 1hr/2hr/weekly/monthly/tournament plans, 3 ▶️
- ✅ `16-complete-match-playbook.html` — 7 sequenced checklists (pre/warm-up/first-2/mid/pressure/closing/post), 2 ▶️
- ✅ `24-ai-review-framework.html` — 7 copy-paste AI prompts with one-tap Copy buttons
- ✅ `30-drill-library.html` — searchable library, ~20 drills across stroke/pattern/physical, 3 ▶️
- ✅ `set-break.html` — high-contrast 6-box 20-second planner, print button, mobile-first
- ✅ `README.md` — overview + GitHub Pages publish steps
- ✅ **QA pass:** 32 HTML pages; all internal links resolve; every page wires styles/nav/sidebar/no-js guard; 74 video links (50 unique, all from real searches); no stale branding; all titles + pagers present

---

## ✅ BUILD COMPLETE — all 10 parts delivered.
Open `index.html` and publish via the README's GitHub Pages steps.

---

### Decisions / notes
- Multi-page static site, in-page printables with print CSS, static SVG visuals, verified-live YouTube refs only.
- **Identity: minimalist yellow + black.** Signature yellow `#ffd400` on near-black/white; no blue/green in the brand.
- **Wordmark: editorial serif** ("Zulu Tennis" in Bodoni/Didot — renders natively on iPhone), stacked over a thin yellow rule, italic "by Veyane" beneath. Hero is minimalist black with the wordmark as the focal point (mission paragraph removed). Top bar shows serif `Zulu Tennis | by Veyane`.
- **Mobile-first:** user is ~90% on iPhone. Off-canvas nav, ≥44px touch targets, single-column grids on phones, horizontal-scroll in-page TOC, no-JS reveal fallback, `theme-color` + text-size-adjust.
- Court diagrams retheme: neutral light court + yellow targets + ink shot paths (no green).
- YouTube reference videos are sourced & verified during the part that builds each page.
