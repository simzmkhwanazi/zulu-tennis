# Zulu Tennis — Developer Handoff / Work Report

Technical notes for a developer picking this up. Companion to `PLAN.md` (spec) and
`DELIVERY-PLAN.md` (progress). **Live:** https://simzmkhwanazi.github.io/zulu-tennis/ · **Repo:**
github.com/simzmkhwanazi/zulu-tennis (`main`, deployed via GitHub Pages, `/root`).

## 1. Stack & principles
- **Zero dependencies, zero build.** Plain HTML5 + one CSS file + two JS files. No npm, no bundler, no framework. Edit a file → commit → Pages serves it.
- **Mobile-first** (target: iPhone Safari, used courtside). All visuals are **inline SVG** (no raster except the generated OG card + external YouTube thumbnails).
- **Progressive enhancement:** content is in the HTML; JS only enhances (nav, theming, collapse, animation, deck). `<html class="no-js">` is cleared by an inline head script; a `.no-js` CSS fallback keeps reveal-content visible if JS fails.

## 2. Architecture / page types
Three templates share `assets/styles.css` + `assets/nav.js` + `assets/courts.js`:

1. **Deck** — `index.html` ("Umdlalo we Tennis"). `.deckbar` + `.dotrail` + `.deck` (scroll-snap) of 8 `.deckcard`s, each wrapping a `.courtside`. Has its own inline `<script>` for deck behavior. **No `.topbar`/`.layout`/sidebar.**
2. **Deep page** — `00–30 *.html` + `library.html`. `.topbar` + `.layout`(`#sidebar` + `.content`). Each opens with a `.courtside` card; the rest auto-collapses into `details.more`.
3. **Standalone** — `set-break.html`, `24-ai-review-framework.html` (page-specific inline `<style>`/`<script>`; not collapsed).

## 3. JS modules

### `assets/nav.js` (runs on every page; IIFE)
Single `start()` calls, all null-safe (no-op if their target is absent):
- `buildSidebar()` — renders `#sidebar` from the in-file **`SITE_NAV`** array (the **single source of truth** for navigation; grouped by the 5 layers). Update nav here, not per-page.
- `initTheme()` — `#themeToggle`; persists `localStorage['zulutennis-theme']`; `data-theme` on `<html>`.
- `initMenu()` — mobile off-canvas (`body.nav-open`).
- `initBenchBack()` — injects a `← Umdlalo` pill after `.brand` on every page **except the deck** (guarded by `document.querySelector('.deck')`).
- `initCollapse()` — wraps everything between the `.courtside` card and `.next-action` into `<details class="more">`. **Guards:** bails if `.deck`, if no `.content`, if an `input[type=search]` exists (Problem Solver, Drill Library), or `.no-collapse`.
- `initScrollSpy()` — builds `#pageToc` from `.content h2[id]` + IntersectionObserver active state.
- `initReveal()` — IntersectionObserver fade-in for `.reveal`; respects reduced-motion.
- `initVideos()` — upgrades `a.video-item`: parses the YT id, injects lazy `img.youtube.com/.../mqdefault.jpg` thumbnail + ▶ badge, and sets the channel name from the **`CHANNELS` id→name map** (sourced via YT oEmbed). *(Wave 2 will extend this to inject a tap-to-play `iframe`.)*

### `assets/courts.js` (runs on every page; IIFE) — the diagram engine
Auto-renders on load (`initAll` = `auto()` + `vizAuto()`):
- **`[data-court]`** → `svg(cfg)`. Coordinate system: **court units** x 0–100 (left→right singles), y 0–100 (far→near, net at 50). Config keys: `players[] {x,y,label,side:'you'|'opp'}`, `zones[] {x,y,w,h,kind:'target'|'danger'|'neutral',label}`, `dots[] {x,y,kind:'recovery'|'contact'|'plain',label}`, `paths[] {from:[x,y],to:[x,y],kind:'shot'|'serve'|'move',label,curve}`, `labels[]`, `w`. **Animation:** if `cfg._animate` (set true unless `prefersReduced()`), each shot/serve path gets a travelling ball via SMIL `<animateMotion>` + opacity fade (staggered by index). One reusable court template parameterised per diagram.
- **`[data-viz]`** → `vizFlow` or `vizBars` (`type:"flow"|"bars"`). `flow`: pills + arrows (+ optional `loop:true` ↺), CSS `vfpulse` staggers per `--i`. `bars`: `rows[{label,value,target?,color?}]` (animated `scaleX` grow + optional yellow target tick) or `stacked[{label,value,color}]`.
- Public: `window.ZuluCourt = { svg, render }`.

### `index.html` inline deck script
Builds the dot rail from `.deckcard[data-name]`; IntersectionObserver(`root:deck, threshold:.6`) sets active/`passed`/`aria-current`; dots & `#backTop` `scrollIntoView`. **State:** `sessionStorage['zt-deck-card']` (position memory on Deepen tap → restore on load, instant scroll), `localStorage['zt-benchmax']` (sunlight contrast `.benchmax`), `localStorage['zt-seen-deck']` (one-time swipe hint).

## 4. CSS (`assets/styles.css`)
- **Design tokens** in `:root` (+ dark overrides via `prefers-color-scheme` and `[data-theme]`). Brand: `--hl:#ffd400`, near-black surfaces, `--serif` Bodoni/Didot stack (renders natively on iOS).
- Component blocks: callouts, evidence badges (`.ev-a…d`), `.decision-card`, `.courtside`/`.cs-*`, `.viz-flow`/`.viz-bars`, `details.more`, **deck** (`.deckbar/.deck/.deckcard/.dotrail/.benchmax`), tables/KPI/print.
- **Print** (`@media print`): hides chrome, force-expands `details.more` and `.reveal` so worksheets/breakdowns print fully.
- **Reduced-motion**: blanket guards on reveal, deck scroll behavior, viz pulse, ball animation.
- Mobile: `@media (max-width:900px)` switches `.layout` to block (sidebar is off-canvas `position:fixed`) — this fixed a flex min-width overflow; `100dvh` everywhere to dodge the iOS URL-bar jump.

## 5. Content conventions
- **Courtside card** authored per page (`.courtside`): rule ≤8 words, one diagram, ✓/✗, 1 cue, 1 drill. Everything else collapses.
- **Decision Card** (`.decision-card`) = the universal *pattern* schema; **8-part template** = the *concept* schema (see PLAN.md).
- **Evidence badges** A–D on recommendations. **Units** metric + imperial. **YouTube**: real, oEmbed-verified; never fabricated IDs.

## 6. Build/QA tooling used (not shipped)
- Headless Chrome for screenshots/verification and to render `assets/og.html` → `og-image.png` (`--headless=new --screenshot --window-size=1200,630`). Note: Chrome's min window is ~500px, so true-390px checks were done via an `<iframe width=390>` harness (+ `--allow-file-access-from-files`).
- YT channel names fetched via `https://www.youtube.com/oembed?...` with a browser User-Agent (default curl UA is rate-limited/empty).

## 7. Known limitations / gotchas
- **Reveal/animation hide-on-fail:** content inside `.reveal`/SMIL relies on JS/SMIL; `.no-js` + print guards cover the main cases, but a JS error mid-page could leave a `.reveal` block hidden. Low risk (no external JS).
- **Video/thumbnails need network** (court has none) — Wave 2 adds an offline-aware facade + service-worker precache (planned, not yet built).
- **Deck position memory** uses `sessionStorage` (survives in-tab nav; not across full app close). Intended.
- Diagrams are **inline SVG strings** built in JS — readable but not componentised; fine at this scale.
- `og-image.png` is a committed binary (regenerate from `assets/og.html` if the wordmark/crest changes).

## 8. Remaining work (R3 Waves 2–3)
- **Wave 2** — `initVideos()`: on tap, swap thumbnail → `youtube.com/embed/ID?autoplay=1` iframe (16:9, lazy, never eager); `navigator.onLine===false` → "No signal — saved for later" chip; defer thumbnails until near view.
- **Wave 3** — **Scenario Engine** on the 8 topic pages: a `.scenarios` grid of "if the ball is ___ → do ___" mini-cards (animated `data-court` + ≤6-word decision), chip-filtered, cap ~6 visible, animate only in-view; embed each topic's verified video. Reframe each topic page to lead with this; old prose stays collapsed.
- Full UX punch-list (P0/P1/P2 — incl. service worker for offline) is in `PLAN.md` → "BENCH DECK REDESIGN → UX hardening".

## 9. Work completed to date (summary)
- **Original system:** 32 pages across 5 layers, shared design system, SVG court engine, evidence badges, printable worksheets, ~50 verified YouTube refs. (10 delivery parts.)
- **R1 branding:** yellow/black identity, serif wordmark, crest/favicon, social card + OG/Twitter meta, real channel names, metric+imperial, dual-unit.
- **R2 courtside:** glanceable card + auto-collapse on all 27 content pages; a diagram on every card; `data-viz` engine; site-wide diagram animation.
- **R3 front door (Wave 1):** the "Umdlalo we Tennis" 8-card deck as `index.html`, dot rail, position memory, bench-contrast, back-pill; old landing → `library.html`.

*Maintained by Veyane with Claude. Update this file when modules change.*
