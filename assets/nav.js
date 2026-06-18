/* =====================================================================
   ZULU TENNIS (by Veyane) — shared navigation, theme, scroll-spy, reveal.
   No dependencies. Include on every page: <script src="assets/nav.js" defer></script>
   The sidebar is generated from SITE_NAV so every page stays in sync.
   ===================================================================== */
(function () {
  "use strict";

  // Single source of truth for the whole site, grouped by the 5 layers.
  var SITE_NAV = [
    { group: "Start Here", layer: "", items: [
      { n: "",   file: "index.html",                 t: "Home / The System" },
      { n: "00", file: "00-player-identity.html",    t: "Player Identity" },
      { n: "29", file: "29-data-model.html",          t: "Data Model" },
    ]},
    { group: "Tactical Systems", layer: "L1–L2", items: [
      { n: "01", file: "01-decision-making.html",     t: "Decision Engine" },
      { n: "02", file: "02-court-geometry.html",       t: "Court Geometry" },
      { n: "03", file: "03-serve-strategy.html",       t: "Serve Strategy" },
      { n: "04", file: "04-return-strategy.html",      t: "Return Strategy" },
      { n: "05", file: "05-baseline-patterns.html",    t: "Baseline Patterns" },
      { n: "06", file: "06-attacking-system.html",     t: "Attacking System" },
      { n: "07", file: "07-defensive-system.html",     t: "Defensive System" },
      { n: "08", file: "08-net-play-system.html",      t: "Net Play System" },
      { n: "25", file: "25-pattern-library.html",      t: "Pattern Library" },
    ]},
    { group: "Match Intelligence", layer: "L3", items: [
      { n: "09", file: "09-player-type-strategies.html", t: "Player-Type Strategies" },
      { n: "10", file: "10-score-based-strategy.html",   t: "Score-Based / State Engine" },
      { n: "17", file: "17-match-problem-solver.html",   t: "Match Problem Solver" },
      { n: "20", file: "20-match-intelligence-db.html",  t: "Match Intelligence DB" },
    ]},
    { group: "Performance Management", layer: "L4", items: [
      { n: "11", file: "11-mental-performance.html",   t: "Mental Performance" },
      { n: "18", file: "18-athlete-development.html",   t: "Athlete Development" },
      { n: "22", file: "22-tournament-os.html",         t: "Tournament OS" },
    ]},
    { group: "Measurement & Improvement", layer: "L5", items: [
      { n: "12", file: "12-match-analysis.html",        t: "Match Analysis" },
      { n: "13", file: "13-video-analysis.html",        t: "Video Analysis" },
      { n: "21", file: "21-analytics.html",             t: "Analytics System" },
      { n: "26", file: "26-improvement-engine.html",    t: "Improvement Engine" },
      { n: "23", file: "23-development-roadmap.html",   t: "Development Roadmap" },
      { n: "27", file: "27-skill-roadmap.html",         t: "Skill-Level Roadmap" },
      { n: "28", file: "28-80-20-winning-tennis.html",  t: "80/20 Winning Tennis" },
    ]},
    { group: "Knowledge & Execution", layer: "", items: [
      { n: "14", file: "14-practice-blueprint.html",       t: "Practice Blueprint" },
      { n: "15", file: "15-advanced-concepts.html",        t: "Advanced Concepts" },
      { n: "16", file: "16-complete-match-playbook.html",  t: "Complete Match Playbook" },
      { n: "24", file: "24-ai-review-framework.html",      t: "AI Review Framework" },
      { n: "30", file: "30-drill-library.html",            t: "Drill Library" },
      { n: "",   file: "set-break.html",                    t: "Set-Break Quick-Planner" },
    ]},
  ];

  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (here === "") here = "index.html";

  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }

  /* ---- Build sidebar ---- */
  function buildSidebar() {
    var aside = document.getElementById("sidebar");
    if (!aside) return;
    var html = "";
    SITE_NAV.forEach(function (g) {
      html += '<div class="navgroup"><div class="lbl">' + esc(g.group) +
              (g.layer ? ' <span class="ly">' + esc(g.layer) + '</span>' : '') + '</div>';
      g.items.forEach(function (it) {
        var active = it.file.toLowerCase() === here ? " active" : "";
        html += '<a class="navlink' + active + '" href="' + it.file + '">' +
                (it.n ? '<span class="n">' + it.n + '</span>' : '') + esc(it.t) + '</a>';
      });
      html += '</div>';
    });
    aside.innerHTML = html;
  }

  /* ---- Theme toggle (persisted) ---- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem("zulutennis-theme"); } catch (e) {}
    if (saved === "light" || saved === "dark") document.documentElement.setAttribute("data-theme", saved);
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    paint();
    btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      if (!cur) cur = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("zulutennis-theme", next); } catch (e) {}
      paint();
    });
    function paint() {
      var cur = document.documentElement.getAttribute("data-theme");
      var dark = cur ? cur === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      btn.textContent = dark ? "☀︎ Light" : "☾ Dark";
    }
  }

  /* ---- Mobile menu ---- */
  function initMenu() {
    var t = document.getElementById("menuToggle");
    var scrim = document.querySelector(".scrim");
    if (t) t.addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
    if (scrim) scrim.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
    document.addEventListener("click", function (e) {
      if (e.target && e.target.closest && e.target.closest(".sidebar a")) document.body.classList.remove("nav-open");
    });
  }

  /* ---- Build in-page mini-TOC + scroll-spy on <h2 id> within main ---- */
  function initScrollSpy() {
    var heads = Array.prototype.slice.call(document.querySelectorAll(".content h2[id]"));
    var toc = document.getElementById("pageToc");
    if (toc && heads.length) {
      toc.innerHTML = heads.map(function (h) {
        return '<a href="#' + h.id + '">' + esc(h.textContent) + '</a>';
      }).join("");
    }
    var spyLinks = toc ? Array.prototype.slice.call(toc.querySelectorAll("a")) : [];
    if (!spyLinks.length || !("IntersectionObserver" in window)) return;
    var byId = {};
    spyLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var a = byId[en.target.id];
        if (a && en.isIntersecting) {
          spyLinks.forEach(function (x) { x.classList.remove("active"); });
          a.classList.add("active");
        }
      });
    }, { rootMargin: "-72px 0px -70% 0px", threshold: 0 });
    heads.forEach(function (h) { obs.observe(h); });
  }

  /* ---- Reveal-on-scroll (respects reduced motion) ---- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); o.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .05 });
    els.forEach(function (el) { obs.observe(el); });
  }

  function start() { buildSidebar(); initTheme(); initMenu(); initScrollSpy(); initReveal(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
