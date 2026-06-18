/* =====================================================================
   ZULU TENNIS (by Veyane) — reusable inline-SVG court engine.
   Powers every tactical diagram. No dependencies.

   Coordinate system ("court units"):
     x: 0 = left singles sideline … 100 = right singles sideline
     y: 0 = FAR baseline (opponent end) … 100 = NEAR baseline (your end)
        net is at y = 50
   So "you" defend the bottom (near) half; "opponent" the top (far) half.

   Usage:
     <figure class="diagram">
       <div data-court='{ ...config... }'></div>
       <figcaption>...</figcaption>
     </figure>
   or in JS:  ZuluCourt.render(el, config)  /  ZuluCourt.svg(config)

   Config keys (all optional):
     w           viewport width  (default 360)
     alleys      draw doubles alleys faintly (default true)
     players     [{x,y,label,side:'you'|'opp'}]
     zones       [{x,y,w,h,label,kind:'target'|'danger'|'neutral'}]
     dots        [{x,y,label,kind:'recovery'|'contact'|'plain'}]
     paths       [{from:[x,y],to:[x,y],kind:'shot'|'move'|'serve',label,curve}]
     labels      [{x,y,text,size}]
   ===================================================================== */
(function (global) {
  "use strict";

  function svg(cfg) {
    cfg = cfg || {};
    var W = cfg.w || 360;
    var ratio = 1.5;                 // height/width of the SVG box
    var H = Math.round(W * ratio);

    // Court drawing rectangle (singles) inside the viewport
    var LX = W * 0.16, RX = W * 0.84;        // left/right singles lines
    var TY = H * 0.07, BY = H * 0.93;        // far/near baselines
    var NETY = (TY + BY) / 2;                 // net
    var alleyW = (RX - LX) * (4.5 / 27);      // one doubles alley ≈ 4.5ft of 27ft

    // service line: 21ft of 39ft from net toward each baseline
    var halfH = (BY - NETY);
    var svcOff = halfH * (21 / 39);
    var SVC_T = NETY - svcOff, SVC_B = NETY + svcOff;
    var CX = (LX + RX) / 2;

    function px(x, y) { return [LX + (x / 100) * (RX - LX), TY + (y / 100) * (BY - TY)]; }

    var s = '';
    s += '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" xmlns="http://www.w3.org/2000/svg">';
    s += '<style>' +
      '.ct-surface{fill:#e9e9e2;}' +                       /* minimalist neutral court (both themes) */
      '.ct-line{stroke:#2b2b2b;stroke-width:1.6;fill:none;}' +
      '.ct-line-faint{stroke:#2b2b2b;stroke-width:1;opacity:.38;fill:none;}' +
      '.ct-net{stroke:#111;stroke-width:2.6;}' +
      '.ct-zone-target{fill:#ffd400;opacity:.55;}' +       /* yellow target */
      '.ct-zone-danger{fill:#d64545;opacity:.30;}' +
      '.ct-zone-neutral{fill:#9a9a92;opacity:.40;}' +
      '.ct-zlabel{fill:#1a1a1a;font:700 9px var(--sans,sans-serif);}' +
      '.ct-shot{stroke:#141414;stroke-width:2.6;fill:none;}' +
      '.ct-serve{stroke:#b58900;stroke-width:2.6;fill:none;}' +
      '.ct-move{stroke:#6b6b6b;stroke-width:2.2;fill:none;stroke-dasharray:5 4;}' +
      '.ct-you{fill:#141414;}.ct-opp{fill:#c0392b;}' +
      '.ct-pmark{stroke:#fff;stroke-width:1.5;}' +
      '.ct-plabel{fill:#fff;font:800 9px var(--sans,sans-serif);text-anchor:middle;}' +
      '.ct-recovery{fill:none;stroke:#141414;stroke-width:1.6;stroke-dasharray:2 2;}' +
      '.ct-contact{fill:#ffd400;stroke:#111;stroke-width:1;}' +
      '.ct-dot{fill:#141414;}' +
      '.ct-dlabel{fill:#1a1a1a;font:700 8px var(--sans,sans-serif);text-anchor:middle;}' +
      '.ct-text{fill:#1a1a1a;font:700 10px var(--sans,sans-serif);}' +
      '</style>';

    // arrow markers
    s += '<defs>' +
      marker('arrow-shot', '#141414') +
      marker('arrow-serve', '#b58900') +
      marker('arrow-move', '#6b6b6b') +
      '</defs>';

    // playing surface
    s += '<rect x="' + (LX - alleyW - 6) + '" y="' + (TY - 6) + '" width="' + (RX - LX + 2 * alleyW + 12) +
         '" height="' + (BY - TY + 12) + '" rx="6" class="ct-surface"/>';

    // doubles alleys (faint) + outer doubles lines
    if (cfg.alleys !== false) {
      s += line(LX - alleyW, TY, LX - alleyW, BY, 'ct-line-faint');
      s += line(RX + alleyW, TY, RX + alleyW, BY, 'ct-line-faint');
      s += line(LX - alleyW, TY, RX + alleyW, TY, 'ct-line-faint');
      s += line(LX - alleyW, BY, RX + alleyW, BY, 'ct-line-faint');
    }

    // zones (drawn under lines)
    (cfg.zones || []).forEach(function (z) {
      var a = px(z.x, z.y), w = (z.w / 100) * (RX - LX), h = (z.h / 100) * (BY - TY);
      var k = z.kind === 'danger' ? 'ct-zone-danger' : z.kind === 'neutral' ? 'ct-zone-neutral' : 'ct-zone-target';
      s += '<rect x="' + a[0] + '" y="' + a[1] + '" width="' + w + '" height="' + h + '" rx="3" class="' + k + '"/>';
      if (z.label) s += '<text x="' + (a[0] + w / 2) + '" y="' + (a[1] + h / 2 + 3) + '" text-anchor="middle" class="ct-zlabel">' + esc(z.label) + '</text>';
    });

    // singles court lines
    s += line(LX, TY, RX, TY, 'ct-line');               // far baseline
    s += line(LX, BY, RX, BY, 'ct-line');               // near baseline
    s += line(LX, TY, LX, BY, 'ct-line');               // left singles
    s += line(RX, TY, RX, BY, 'ct-line');               // right singles
    s += line(LX, SVC_T, RX, SVC_T, 'ct-line');         // far service line
    s += line(LX, SVC_B, RX, SVC_B, 'ct-line');         // near service line
    s += line(CX, SVC_T, CX, SVC_B, 'ct-line');         // center service line
    s += line(CX - 5, TY, CX + 5, TY, 'ct-line');       // far center mark
    s += line(CX - 5, BY, CX + 5, BY, 'ct-line');       // near center mark
    s += line(LX - alleyW - 6, NETY, RX + alleyW + 6, NETY, 'ct-net'); // net

    // paths
    (cfg.paths || []).forEach(function (p) {
      var a = px(p.from[0], p.from[1]), b = px(p.to[0], p.to[1]);
      var cls = p.kind === 'move' ? 'ct-move' : p.kind === 'serve' ? 'ct-serve' : 'ct-shot';
      var mk = p.kind === 'move' ? 'arrow-move' : p.kind === 'serve' ? 'arrow-serve' : 'arrow-shot';
      var d;
      if (p.curve) {
        var mx = (a[0] + b[0]) / 2 + (p.curve || 0), my = (a[1] + b[1]) / 2;
        d = 'M' + a[0] + ',' + a[1] + ' Q' + mx + ',' + my + ' ' + b[0] + ',' + b[1];
      } else {
        d = 'M' + a[0] + ',' + a[1] + ' L' + b[0] + ',' + b[1];
      }
      s += '<path d="' + d + '" class="' + cls + '" marker-end="url(#' + mk + ')"/>';
      if (p.label) {
        var lx = (a[0] + b[0]) / 2 + (p.curve ? p.curve * 0.6 : 6), ly = (a[1] + b[1]) / 2 - 4;
        s += '<text x="' + lx + '" y="' + ly + '" class="ct-text">' + esc(p.label) + '</text>';
      }
    });

    // recovery / contact / plain dots
    (cfg.dots || []).forEach(function (dt) {
      var a = px(dt.x, dt.y);
      if (dt.kind === 'recovery') s += '<circle cx="' + a[0] + '" cy="' + a[1] + '" r="7" class="ct-recovery"/>';
      else if (dt.kind === 'contact') s += '<circle cx="' + a[0] + '" cy="' + a[1] + '" r="4" class="ct-contact"/>';
      else s += '<circle cx="' + a[0] + '" cy="' + a[1] + '" r="3.5" class="ct-dot"/>';
      if (dt.label) s += '<text x="' + a[0] + '" y="' + (a[1] - 9) + '" class="ct-dlabel">' + esc(dt.label) + '</text>';
    });

    // players
    (cfg.players || []).forEach(function (pl) {
      var a = px(pl.x, pl.y);
      var cls = pl.side === 'opp' ? 'ct-opp' : 'ct-you';
      s += '<circle cx="' + a[0] + '" cy="' + a[1] + '" r="9" class="' + cls + ' ct-pmark"/>';
      s += '<text x="' + a[0] + '" y="' + (a[1] + 3) + '" class="ct-plabel">' + esc(pl.label || (pl.side === 'opp' ? 'O' : 'You')) + '</text>';
    });

    // free labels
    (cfg.labels || []).forEach(function (l) {
      var a = px(l.x, l.y);
      s += '<text x="' + a[0] + '" y="' + a[1] + '" class="ct-text" style="font-size:' + (l.size || 10) + 'px">' + esc(l.text) + '</text>';
    });

    s += '</svg>';
    return s;

    function line(x1, y1, x2, y2, c) { return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" class="' + c + '"/>'; }
  }

  function marker(id, color) {
    return '<marker id="' + id + '" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">' +
           '<path d="M0,0 L10,5 L0,10 z" fill="' + color + '"/></marker>';
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; }); }

  function render(el, cfg) { if (typeof el === "string") el = document.querySelector(el); if (el) el.innerHTML = svg(cfg); }

  // Auto-render any <div data-court='{json}'> on load
  function auto() {
    var nodes = document.querySelectorAll("[data-court]");
    Array.prototype.forEach.call(nodes, function (n) {
      try { n.innerHTML = svg(JSON.parse(n.getAttribute("data-court"))); }
      catch (e) { n.innerHTML = '<small>court diagram error</small>'; }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", auto); else auto();

  global.ZuluCourt = { svg: svg, render: render };
})(window);
