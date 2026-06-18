# Zulu Tennis — *by Veyane*

**Elite Singles Performance System.** Not a book — a complete tennis *operating system* for the
competitive singles player, built around one goal: **win more matches.**

It's a dependency-free static website (plain HTML/CSS/JS — no frameworks, no build step) designed
mobile-first, with light/dark mode, printable worksheets, original inline-SVG court diagrams, and
verified-live YouTube references on every page.

---

## What's inside

A 30-page system organised in five layers: **Technical Execution · Tactical Systems · Match
Intelligence · Performance Management · Continuous Improvement.**

- **Start here:** the System overview (`index.html`), **Player Identity** (00), **Data Model** (29)
- **The Decision Engine** (01) — core logic layer: the Tactical Decision Formula, ball-quality tree,
  Decision Cards and the Home Base Pattern
- **Tactics:** Court Geometry, Serve, Return, Baseline Patterns, Attacking, Defensive, Net Play, Pattern Library
- **Match intelligence:** Player-Type Strategies, Score-Based / Match State Engine, Match Problem Solver, Scouting DB
- **Performance:** Mental Performance, Athlete Development (gym/speed/recovery/nutrition), Tournament OS
- **Measure & improve:** Match Analysis, Video Analysis, Analytics, Improvement Engine, Development Roadmap, Skill Roadmap, 80/20
- **Execution:** Practice Blueprint, Complete Match Playbook, AI Review Framework, Drill Library
- **Match day:** the **Set-Break Quick-Planner** (`set-break.html`) — a 20-second cheat sheet

`PLAN.md` holds the full build spec; `DELIVERY-PLAN.md` tracks build progress.

## View it locally

Just open `index.html` in any browser — no server needed.

## Publish on GitHub Pages

1. Create a repo and push these files to the **`main`** branch (keep the structure; `index.html` at the root).
   ```bash
   git init
   git add .
   git commit -m "Zulu Tennis — initial publish"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   then choose **`main`** / **`/ (root)`** and **Save**.
3. Wait ~1 minute; your site goes live at `https://<you>.github.io/<repo>/`.

No Jekyll config is needed — it's plain static files. (Optional: add an empty `.nojekyll` file to
skip Jekyll processing entirely.)

## Notes

- All content is original; no copyrighted coaching material, diagrams or proprietary systems are reproduced.
- Each recommendation carries an **evidence-level badge** (A = strong pro/science support → D = personal preference).
- YouTube links point to real, third-party videos verified live at build time; if any later goes offline,
  search the listed title to find an equivalent.
- General fitness content in *Athlete Development* is educational, not medical advice.

---

*Zulu Tennis · by Veyane.*
