# Zulu Tennis — *by Veyane*

**Elite Singles Performance System.** Not a book — a complete tennis *operating system* for the
competitive singles player, built around one goal: **win more matches.**

Dependency-free static site (plain HTML/CSS/JS — **no frameworks, no build step**), designed
**mobile-first** for use on the bench between games. Yellow + black, editorial serif wordmark,
Zulu-shield + crossed-rackets crest. Light/dark, print-friendly, original animated inline-SVG
diagrams, and verified-live YouTube references.

**Live:** https://simzmkhwanazi.github.io/zulu-tennis/

---

## Two front doors

- **`index.html` — “Umdlalo we Tennis” (the deck).** The home screen: **8 full-screen, swipeable
  cards** (Read the ball · Serve +1 · Return · Rally · Attack · Defend · Opponent · Score + Head),
  each a 10-second read — rule + animated diagram + ✓Do/✗Don't + cue + drill, with a **“Scenarios &
  video →”** link into the matching deep page. Right-edge **dot rail** (progress + jump), a sunlight
  **contrast toggle (◐)**, and **position memory** so leaving and returning lands you on the same card.
- **`library.html` — the full system.** The complete 30-page reference, reached via the **Library**
  pill (and a layer-grouped sidebar on every deep page).

## The system (in the Library)

30 pages across five layers — **Technical · Tactical · Match Intelligence · Performance · Continuous
Improvement.** Every page opens with a **Courtside card** (the glanceable summary); the deep prose
collapses behind one toggle.

- **Decision Engine** (01) — Tactical Decision Formula, ball-quality tree, Decision Cards, Home Base Pattern
- **Tactics** — Court Geometry, Serve, Return, Baseline Patterns, Attacking, Defensive, Net Play, Pattern Library
- **Match intelligence** — Player-Type Strategies, Score / Match-State Engine, Match Problem Solver, Scouting DB
- **Performance** — Mental, Athlete Development (gym/speed/recovery/nutrition), Tournament OS
- **Measure & improve** — Match & Video Analysis, Analytics, Improvement Engine, Roadmap, Skill Roadmap, 80/20
- **Execution** — Practice Blueprint, Complete Match Playbook, AI Review, Drill Library
- **Match day** — the **Set-Break Quick-Planner** (`set-break.html`)

## Project files

```
index.html            # Umdlalo we Tennis — the 8-card deck (home)
library.html          # full-system overview + sidebar
00–30 *.html          # the 30 deep pages (00 Player Identity … 30 Drill Library)
set-break.html        # 20-second changeover planner
assets/
  styles.css          # all styling (tokens, courtside, deck, viz, print, light/dark)
  nav.js              # sidebar, theme, scroll-spy, collapse, video thumbs, back-pill (shared)
  courts.js           # inline-SVG court engine + data-viz mini-charts (auto-render)
  logo.svg            # crest · favicon.svg · og.html → og-image.png (social card)
PLAN.md               # full build spec (source of truth)
DELIVERY-PLAN.md      # progress tracker
DEV-NOTES.md          # technical handoff for developers
```

## Run / publish

- **Local:** open `index.html` — no server needed (an optional `python3 -m http.server` avoids any
  `file://` quirks).
- **GitHub Pages:** push to `main`, then **Settings → Pages → Deploy from a branch → `main` / `/root`**.
  Plain static files (a `.nojekyll` file is included); live at `https://<you>.github.io/<repo>/` in ~1 min.

## Conventions & notes

- All content original; no copyrighted coaching material/diagrams reproduced.
- **Evidence badges** (A → D) flag how strongly each recommendation is backed.
- **Units** shown in metric + imperial.
- YouTube links are real third-party videos verified live at build (channel names via oEmbed); if one
  goes offline, search the listed title.
- Animations respect `prefers-reduced-motion`; diagrams print via a `details`-expanding print stylesheet.
- *Athlete Development* fitness content is educational, not medical advice.

*Zulu Tennis · by Veyane.*
