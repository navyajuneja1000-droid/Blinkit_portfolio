/* navya · Program Manager portfolio (Blinkit-styled). Vanilla JS, hash routing. */
(function () {
  "use strict";
  var D = window.NJ;
  var P = D.person;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var RM = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- storage (always wrapped) ---------- */
  function load(k, def) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function sload(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }
  function ssave(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  var cart = load("nj-bk-cart", []).filter(function (id) { return byId(id); });
  var form = load("nj-bk-form", { name: "", team: "", slot: "intro", note: "" });

  function byId(id) { for (var i = 0; i < D.products.length; i++) if (D.products[i].id === id) return D.products[i]; return null; }
  function dom(id) { for (var i = 0; i < D.domains.length; i++) if (D.domains[i].id === id) return D.domains[i]; return null; }
  function skill(id) { for (var i = 0; i < D.skills.length; i++) if (D.skills[i].id === id) return D.skills[i]; return null; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* ---------- icons (original, stroke style) ---------- */
  var IC = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    cart: '<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20.5" r="1.3"/><circle cx="17" cy="20.5" r="1.3"/>',
    home: '<path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="2"/><rect x="13" y="4" width="7" height="7" rx="2"/><rect x="4" y="13" width="7" height="7" rx="2"/><rect x="13" y="13" width="7" height="7" rx="2"/>',
    plan: '<path d="M4 6h9M4 12h13M4 18h7"/><circle cx="17" cy="6" r="2"/><circle cx="20" cy="12" r="1.6"/><circle cx="14" cy="18" r="2"/>',
    bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    back: '<path d="m15 6-6 6 6 6"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    phone: '<path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    doc: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    team: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.4"/><path d="M3 19c.8-3 3-4.6 6-4.6s5.2 1.6 6 4.6M15 15c2.6-.3 4.7 1 5.5 3.5"/>',
    bolt: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    /* domain icons */
    card: '<rect x="3" y="6" width="18" height="12" rx="2.5"/><path d="M3 10h18M7 15h4"/>',
    cap: '<path d="m2 9 10-5 10 5-10 5z"/><path d="M6 11v5c2 2 10 2 12 0v-5M22 9v5"/>',
    bottle: '<path d="M10 3h4v3l2 3v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9l2-3z"/><path d="M8 13h8"/>',
    sachet: '<path d="M6 3h12l-1 3 1 3-1 3 1 3-1 3 1 3H6l1-3-1-3 1-3-1-3 1-3z"/><circle cx="12" cy="12" r="2.5"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    rupee: '<path d="M7 5h10M7 9h10M10 5c4 0 4 8 0 8H7l7 7"/>'
  };
  function ic(n, cls) { return '<svg class="ic ' + (cls || "") + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (IC[n] || "") + "</svg>"; }

  /* Original mark: yellow rounded tile, an "n" drawn as a route, a green delivered-tick */
  function mark(size) {
    size = size || 40;
    return '<svg class="mark" width="' + size + '" height="' + size + '" viewBox="0 0 48 48" aria-hidden="true">' +
      '<rect width="48" height="48" rx="13" fill="#F8CB46"/>' +
      '<path d="M14 35V19a7 7 0 0 1 14 0v16" fill="none" stroke="#1F1F1F" stroke-width="5.5" stroke-linecap="round"/>' +
      '<circle cx="34.5" cy="14.5" r="7.5" fill="#0C831F" stroke="#F8CB46" stroke-width="2"/>' +
      '<path d="m31.2 14.6 2.3 2.3 4.3-4.6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  function logo() {
    return '<a class="logo" href="#/" aria-label="navya, home">' + mark(38) + '<span class="logo-w">navya<em>.pm</em></span></a>';
  }

  function prov(k) {
    var p = D.prov[k]; if (!p) return "";
    return '<span class="pv pv-' + k + '" title="' + esc(p.tip) + '">' + p.label + "</span>";
  }

  /* ---------- shared bits ---------- */
  function poster(p, big) {
    if (p.cardImg && !big) {
      return '<div class="poster poster-img" style="background:' + p.poster.bg + '"><img src="' + p.cardImg + '" alt="" loading="lazy"></div>';
    }
    var d = dom(p.domain);
    return '<div class="poster' + (big ? " poster-big" : "") + '" style="--pbg:' + p.poster.bg + ";--pfg:" + p.poster.fg + ";--pac:" + p.poster.accent + '">' +
      '<span class="po-ic">' + ic(d.icon) + "</span>" +
      '<b class="po-big">' + esc(p.poster.big) + "</b>" +
      '<span class="po-small">' + esc(p.poster.small) + "</span>" +
      (p.phonepe ? '<span class="po-tag">As on CV</span>' : "") +
      "</div>";
  }

  function inCart(id) { return cart.indexOf(id) > -1; }
  function addBtn(p, big) {
    var on = inCart(p.id);
    return '<button class="add' + (on ? " on" : "") + (big ? " add-big" : "") + '" type="button" data-add="' + p.id + '" aria-pressed="' + on + '" aria-label="' + (on ? "Remove " : "Add ") + esc(p.short) + (on ? " from" : " to") + ' shortlist">' +
      (on ? ic("check") + "<span>ADDED</span>" : (big ? "Add to shortlist" : "ADD")) + "</button>";
  }

  function card(p) {
    var d = dom(p.domain);
    return '<article class="pc">' +
      '<a class="pc-link" href="#/case/' + p.id + '">' +
        '<div class="pc-img">' + poster(p) + "</div>" +
        '<span class="eta">' + ic("clock") + esc(p.eta) + "</span>" +
        '<h3 class="pc-t">' + esc(p.short) + "</h3>" +
        '<p class="pc-q">' + esc(d.short) + " · " + esc(skill(p.skills[0]).name) + "</p>" +
      "</a>" +
      '<div class="pc-ft"><div class="pc-price"><b>' + esc(p.price.v) + "</b>" +
        (p.price.strike ? "<s>" + esc(p.price.strike) + "</s>" : "") +
        "<small>" + esc(p.price.u) + "</small>" + prov(p.price.prov) + "</div>" + addBtn(p) + "</div>" +
      "</article>";
  }

  function rail(title, items, more, id) {
    return '<section class="sec"><div class="sec-h"><h2 id="' + (id || "") + '">' + title + "</h2>" + (more ? '<a class="see" href="' + more + '">see all</a>' : "") + "</div>" +
      '<div class="rail-wrap"><button class="rnav rprev" type="button" aria-label="Scroll left">' + ic("back") + '</button><div class="rail" tabindex="0" aria-label="' + esc(title.replace(/<[^>]+>/g, "")) + '">' + items.join("") + '</div><button class="rnav rnext" type="button" aria-label="Scroll right">' + ic("chev") + "</button></div></section>";
  }

  function sorted() { return D.products.slice().sort(function (a, b) { return a.sort - b.sort; }); }

  /* ---------- HEADER / NAV / FOOTER ---------- */
  var hints = ["phased rollout", "dark stores", "launch gating", "stakeholder alignment", "per-party clocks", "weekly P&L", "go-live", "unit economics"];
  function renderShell() {
    $("#hdr").innerHTML =
      '<div class="hdr-in">' + logo() +
      '<button class="eta-block" type="button" id="locBtn" aria-haspopup="dialog">' +
        '<b>Delivery in 90 days</b><span>Gurgaon · open to Bengaluru ' + ic("down") + "</span></button>" +
      '<div class="srch" role="search"><label class="sr" for="q">Search cases, domains and skills</label>' + ic("search") +
        '<input id="q" type="search" autocomplete="off" placeholder="Search &quot;phased rollout&quot;" aria-controls="drop" aria-expanded="false">' +
        '<div class="drop" id="drop" role="listbox" hidden></div></div>' +
      '<nav class="hdr-links" aria-label="Quick links"><a href="#/about">About</a><a href="' + P.resume + '" target="_blank" rel="noopener">Résumé</a></nav>' +
      '<a class="cartbtn" href="#/cart" id="cartBtn">' + ic("cart") + '<span class="cb-t"></span></a>' +
      '<a class="hdr-me" href="#/about" aria-label="About Navya">' + ic("user") + "</a>" +
      "</div>";
    $("#bnav").innerHTML = [
      ["", "home", "Home"], ["aisles", "grid", "Aisles"], ["planner", "plan", "Planner"], ["deliveries", "bag", "Deliveries"], ["about", "user", "About"]
    ].map(function (n) { return '<a href="#/' + n[0] + '" data-nav="' + n[0] + '">' + ic(n[1]) + "<span>" + n[2] + "</span></a>"; }).join("");
    $("#ftr").innerHTML =
      '<div class="ftr-in">' +
      '<div class="ftr-col ftr-brand">' + logo() + '<p>Navya Juneja · Program Manager. Problems with many parties, unclear owners and a date, run to completion.</p>' +
        '<p class="ftr-c"><a href="mailto:' + P.email + '">' + P.email + '</a><br><a href="' + P.phoneHref + '">' + P.phone + '</a><br><a href="' + P.linkedin + '" target="_blank" rel="noopener">' + P.linkedinShort + '</a><br><a href="' + P.portfolio + '" target="_blank" rel="noopener">Main portfolio</a></p></div>' +
      '<div class="ftr-col"><h3>Aisles</h3><ul>' + D.domains.map(function (d) { return '<li><a href="#/aisles/' + d.id + '">' + esc(d.name) + "</a></li>"; }).join("") + "</ul></div>" +
      '<div class="ftr-col"><h3>Pages</h3><ul><li><a href="#/playbook">How I run a program</a></li><li><a href="#/planner">Dark store go-live planner</a></li><li><a href="#/first-90">First 90 days at Blinkit</a></li><li><a href="#/deliveries">Deliveries (experience)</a></li><li><a href="#/cart">Shortlist & hire</a></li><li><a href="' + P.resume + '" target="_blank" rel="noopener">Résumé (PDF)</a></li></ul></div>' +
      '<div class="ftr-col"><h3>Labels</h3><ul class="ftr-pv">' + Object.keys(D.prov).map(function (k) { return "<li>" + prov(k) + " " + esc(D.prov[k].tip) + "</li>"; }).join("") + "</ul></div>" +
      "</div>" +
      '<p class="disc">Independent job-application portfolio by Navya Juneja. Not affiliated with or endorsed by Blinkit, Eternal, PhonePe, Cogent Infotech, Perfora, WOW! Momo or any company named. The logo mark is an original drawing; colours and interface patterns are a tribute, no brand artwork is used. PhonePe figures are as stated on my CV; no internal data is shown. Blinkit facts come from its public pages and are labelled Sourced.</p>';
    updCart();
    bindSearch();
    $("#locBtn").addEventListener("click", locSheet);
    rotateHint();
  }

  var hintI = 0, hintT;
  function rotateHint() {
    clearInterval(hintT);
    if (RM) return;
    hintT = setInterval(function () {
      var q = $("#q"); if (!q || document.activeElement === q || q.value) return;
      hintI = (hintI + 1) % hints.length;
      q.setAttribute("placeholder", 'Search "' + hints[hintI] + '"');
    }, 2600);
  }

  function updCart() {
    var n = cart.length;
    var t = $(".cb-t"); if (t) t.innerHTML = n ? "<b>" + n + " case" + (n > 1 ? "s" : "") + "</b><small>Shortlist</small>" : "My Cart";
    var cb = $("#cartBtn"); if (cb) { cb.classList.toggle("has", n > 0); cb.setAttribute("aria-label", n ? n + " cases in shortlist, open cart" : "Open cart"); }
    var bar = $("#cartbar");
    var r = parse().r;
    if (n && r !== "cart" && r !== "placed") {
      bar.innerHTML = '<a href="#/cart" class="cartbar-in"><span class="cb-ic">' + ic("cart") + '</span><span class="cb-txt"><b>' + n + " case" + (n > 1 ? "s" : "") + "</b><small>Interview: ₹0</small></span><span class=\"cb-go\">View cart " + ic("chev") + "</span></a>";
      bar.classList.add("on");
    } else { bar.innerHTML = ""; bar.classList.remove("on"); }
    document.body.classList.toggle("has-cartbar", !!(n && r !== "cart" && r !== "placed"));
  }

  function toggleCart(id) {
    var p = byId(id); if (!p) return;
    var i = cart.indexOf(id);
    if (i > -1) { cart.splice(i, 1); toast(esc(p.short) + " removed from shortlist"); }
    else { cart.push(id); toast(ic("check") + " " + esc(p.short) + " added. " + '<a href="#/cart">View cart</a>'); }
    save("nj-bk-cart", cart);
    $$('[data-add="' + id + '"]').forEach(function (b) {
      var big = b.classList.contains("add-big");
      var tmp = document.createElement("div"); tmp.innerHTML = addBtn(p, big);
      b.replaceWith(tmp.firstChild);
    });
    updCart();
    if (parse().r === "cart") render();
  }

  /* ---------- SEARCH ---------- */
  function searchIndex() {
    var out = [];
    D.products.forEach(function (p) {
      var d = dom(p.domain);
      out.push({ t: p.short, s: d.name + " · " + p.where, u: "#/case/" + p.id, k: "Case", hay: [p.name, p.short, p.hook, p.problem, d.name, p.where, p.summary.problem, p.summary.did, p.skills.map(function (x) { return skill(x).name; }).join(" "), p.pack.map(function (x) { return x[0]; }).join(" ")].join(" ").toLowerCase() });
    });
    D.domains.forEach(function (d) { out.push({ t: d.name, s: "Aisle · " + d.where, u: "#/aisles/" + d.id, k: "Aisle", hay: (d.name + " " + d.where).toLowerCase() }); });
    D.skills.forEach(function (s) { out.push({ t: s.name, s: "Program skill", u: "#/aisles/skill/" + s.id, k: "Skill", hay: s.name.toLowerCase() }); });
    [["Dark store go-live planner", "#/planner", "planner dark store launch gantt critical path go-live gates"], ["First 90 days at Blinkit", "#/first-90", "first 90 days hypotheses blinkit plan sourced"], ["How I run a program", "#/playbook", "playbook intake plan phase monitor close habits"], ["Deliveries: experience", "#/deliveries", "experience phonepe cogent masters union education orders"]].forEach(function (x) {
      out.push({ t: x[0], s: "Page", u: x[1], k: "Page", hay: (x[0] + " " + x[2]).toLowerCase() });
    });
    return out;
  }
  var IDX;
  function bindSearch() {
    var q = $("#q"), drop = $("#drop");
    IDX = IDX || searchIndex();
    function run() {
      var v = q.value.trim().toLowerCase();
      if (!v) { drop.hidden = true; q.setAttribute("aria-expanded", "false"); return; }
      var terms = v.split(/\s+/);
      var res = IDX.filter(function (x) { return terms.every(function (t) { return x.hay.indexOf(t) > -1; }); }).slice(0, 8);
      drop.innerHTML = res.length ? res.map(function (x, i) {
        return '<a role="option" class="dr" href="' + x.u + '" id="dr' + i + '"><span class="dr-k">' + x.k + '</span><span class="dr-t"><b>' + esc(x.t) + "</b><small>" + esc(x.s) + "</small></span>" + ic("chev") + "</a>";
      }).join("") : '<p class="dr-none">Nothing for “' + esc(q.value) + '”. Try “gates”, “clocks” or “P&amp;L”.</p>';
      drop.hidden = false; q.setAttribute("aria-expanded", "true");
    }
    q.addEventListener("input", run);
    q.addEventListener("focus", run);
    q.addEventListener("keydown", function (e) {
      var opts = $$(".dr", drop);
      if (e.key === "Escape") { q.value = ""; run(); q.blur(); }
      else if (e.key === "Enter") { var f = opts[0]; if (f) { location.hash = f.getAttribute("href"); closeDrop(); } }
      else if (e.key === "ArrowDown" && opts.length) { e.preventDefault(); opts[0].focus(); }
    });
    drop.addEventListener("keydown", function (e) {
      var opts = $$(".dr", drop), i = opts.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); (opts[i + 1] || opts[0]).focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); if (i <= 0) q.focus(); else opts[i - 1].focus(); }
      if (e.key === "Escape") { closeDrop(); q.focus(); }
    });
    drop.addEventListener("click", function () { closeDrop(); });
    document.addEventListener("click", function (e) { if (!e.target.closest(".srch")) closeDrop(true); });
  }
  function closeDrop(keep) { var d = $("#drop"), q = $("#q"); if (!d) return; d.hidden = true; q.setAttribute("aria-expanded", "false"); if (!keep) q.value = ""; }

  /* ---------- VIEWS ---------- */
  function vHome() {
    var ps = sorted();
    var promos = [
      { t: "Launches with gates", s: "A category pilot sized in dark stores, 5 gates before scale-up", u: "#/case/wowworld", c: "pr-y", i: "flag", b: "Open case" },
      { t: "Many parties, one clock each", s: "BD, onboarding, ops and the acquirer, timed separately", u: "#/case/mid", c: "pr-t", i: "clock", b: "Open case" },
      { t: "Phased, not big-bang", s: "95% of payment traffic moved in 3 months", u: "#/case/migration", c: "pr-b", i: "bolt", b: "Open case" },
      { t: "Plan a dark store go-live", s: "Move one workstream, watch the launch date slip", u: "#/planner", c: "pr-g", i: "plan", b: "Try it" }
    ];
    var evidence = [
      ["10 stages", "MID-to-live mapped; go-live 53% / 40% faster", "golive", "result"],
      ["360", "merchant go-lives in one upload", "golive", "result"],
      ["95% · 3 mo", "traffic migrated in phased shifts with live monitoring", "migration", "result"],
      ["4 + 5+", "network launches and partner integrations, requirements to go-live", "launches", "result"],
      ["4 teams", "aligned on the H2H MVP scope", "h2h", "result"],
      ["3 gates", "Perfora roadmap: fix, prove, grow", "perfora", "target"],
      ["5 gates", "WOW! World pilot in 300 dark stores", "wowworld", "target"],
      ["4 clocks", "per-party turnaround in MID Procurement", "mid", "built"],
      ["Weekly", "P&L, stock tracking, packing, Shiprocket at Found It", "foundit", "result"]
    ];
    return '<div class="wrap home">' +
      '<section class="hero">' +
        '<div class="hero-tx"><p class="hero-k">Program Manager · ready to deliver</p>' +
        "<h1>Problems with many parties and a date, <span>run to completion.</span></h1>" +
        "<p>Go-live workflows, phased migrations, gated launches and weekly P&amp;Ls across 8 domains, from payments ops to an FMCG category planned for dark stores. Every case lists the teams in its pack and is tracked stage by stage.</p>" +
        '<div class="hero-cta"><a class="btn btn-w" href="#/aisles">Shop the cases</a><a class="btn btn-o" href="#/planner">Try the go-live planner</a></div></div>' +
        '<div class="hero-me"><img src="assets/portrait.jpg" alt="Portrait of Navya Juneja" width="600" height="750"><span class="hero-badge">' + ic("check") + "11 programs · 8 domains</span></div>" +
      "</section>" +
      '<div class="promos" role="list">' + promos.map(function (p) {
        return '<a role="listitem" class="promo ' + p.c + '" href="' + p.u + '"><span class="pr-ic">' + ic(p.i) + '</span><b>' + p.t + "</b><span>" + p.s + '</span><em class="pr-b">' + p.b + "</em></a>";
      }).join("") + "</div>" +
      '<section class="sec"><div class="sec-h"><h2>Shop by domain</h2><a class="see" href="#/aisles">see all</a></div>' +
      '<div class="cats">' + D.domains.map(function (d) {
        return '<a class="cat" href="#/aisles/' + d.id + '"><span class="cat-t" style="background:' + d.tint + '">' + ic(d.icon) + "</span><b>" + esc(d.name) + "</b><small>" + esc(d.where) + "</small></a>";
      }).join("") + "</div>" +
      '<div class="chips" aria-label="Shop by program skill">' + D.skills.map(function (s) { return '<a class="chip" href="#/aisles/skill/' + s.id + '">' + esc(s.name) + "</a>"; }).join("") + "</div></section>" +
      rail("Problems I've run to completion", ps.map(card), "#/aisles") +
      '<section class="sec"><div class="sec-h"><h2>Bestsellers: program evidence</h2></div><div class="ev">' + evidence.map(function (e) {
        return '<a class="evc" href="#/case/' + e[2] + '"><b>' + e[0] + "</b><span>" + e[1] + "</span>" + prov(e[3]) + "</a>";
      }).join("") + "</div></section>" +
      '<section class="sec band"><div class="sec-h"><h2>How I run a program</h2><a class="see" href="#/playbook">see all</a></div>' +
      '<ol class="flow">' + D.playbook.map(function (s, i) {
        return '<li><a href="#/playbook#pb-' + s.id + '"><span class="fl-n">' + (i + 1) + "</span><b>" + s.t + "</b><small>" + esc(s.q) + "</small></a></li>";
      }).join("") + "</ol></section>" +
      '<section class="duo">' +
        '<a class="duo-c duo-plan" href="#/planner"><span class="duo-k">Interactive · Modelled</span><b>Dark store go-live planner</b><span>Seven workstreams, owners and dependencies. Slip one and see whether the launch date moves.</span>' + miniGantt() + '<em>Open planner ' + ic("chev") + "</em></a>" +
        '<a class="duo-c duo-90" href="#/first-90"><span class="duo-k">Hypotheses · Sourced facts</span><b>First 90 days at Blinkit</b><span>Four hypotheses from Blinkit\'s public pages, each with the metric that would prove it wrong.</span><ul class="duo-l">' + D.pilot.map(function (h) { return "<li>" + esc(h.t) + "</li>"; }).join("") + '</ul><em>Read the plan ' + ic("chev") + "</em></a>" +
      "</section>" +
      rail("Beyond payments <small class=\"sub\">7 domains outside fintech</small>", ps.filter(function (p) { return !p.phonepe; }).map(card), "#/aisles") +
      '<section class="sec"><div class="sec-h"><h2>Your recent deliveries</h2><a class="see" href="#/deliveries">see all</a></div>' + orderCard(D.orders[2], true) + "</section>" +
      "</div>";
  }

  function miniGantt() {
    var s = schedule(D.planner.tasks);
    return '<div class="mg" aria-hidden="true">' + D.planner.tasks.map(function (t) {
      var x = s.t[t.id];
      return '<i style="left:' + (x.es / s.total * 100) + "%;width:" + (t.d / s.total * 100) + '%" class="' + (x.slack === 0 ? "crit" : "") + '"></i>';
    }).join("") + "</div>";
  }

  function vAisles(a, b) {
    var mode = "all", sel = null;
    if (a === "skill" && skill(b)) { mode = "skill"; sel = b; }
    else if (a && dom(a)) { mode = "dom"; sel = a; }
    var list = sorted().filter(function (p) {
      if (mode === "dom") return p.domain === sel;
      if (mode === "skill") return p.skills.indexOf(sel) > -1;
      return true;
    });
    var title = mode === "dom" ? dom(sel).name : mode === "skill" ? skill(sel).name : "All cases";
    var counts = {};
    D.products.forEach(function (p) { counts[p.domain] = (counts[p.domain] || 0) + 1; });
    return '<div class="wrap aisles">' +
      '<aside class="side" aria-label="Domains"><a class="side-a' + (mode === "all" ? " on" : "") + '" href="#/aisles"><span class="side-ic" style="background:#FFF7DA">' + ic("grid") + "</span><span>All cases</span></a>" +
      D.domains.map(function (d) {
        return '<a class="side-a' + (sel === d.id ? " on" : "") + '" href="#/aisles/' + d.id + '"' + (sel === d.id ? ' aria-current="page"' : "") + '><span class="side-ic" style="background:' + d.tint + '">' + ic(d.icon) + "</span><span>" + esc(d.short) + "</span></a>";
      }).join("") + "</aside>" +
      '<section class="aisle-main"><div class="ais-h"><div><p class="crumb"><a href="#/">Home</a> / <a href="#/aisles">Aisles</a>' + (mode !== "all" ? " / " + esc(title) : "") + "</p><h1>" + esc(title) + ' <small>(' + list.length + " case" + (list.length === 1 ? "" : "s") + ")</small></h1></div></div>" +
      '<div class="chips chips-f" role="group" aria-label="Filter by program skill"><a class="chip' + (mode !== "skill" ? " on" : "") + '" href="#/aisles">Any skill</a>' + D.skills.map(function (s) {
        return '<a class="chip' + (sel === s.id ? " on" : "") + '" href="#/aisles/skill/' + s.id + '"' + (sel === s.id ? ' aria-current="page"' : "") + ">" + esc(s.name) + "</a>";
      }).join("") + "</div>" +
      (mode === "dom" ? '<p class="ais-note">' + esc(dom(sel).where) + ". " + (sel === "fintech" ? "PhonePe figures are as stated on my CV; no internal data is shown." : "") + "</p>" : "") +
      '<div class="grid">' + list.map(card).join("") + "</div></section></div>";
  }

  function gallery(p) {
    if (!p.media || !p.media.length) return "";
    return '<div class="thumbs">' + p.media.map(function (m, i) {
      return '<button type="button" class="thumb" data-media="' + p.id + ":" + i + '" aria-label="Open ' + esc(m.alt) + '"><img src="' + (m.type === "video" ? m.poster : m.src) + '" alt="" loading="lazy">' + (m.type === "video" ? '<span class="th-play">' + ic("play") + "</span>" : "") + "</button>";
    }).join("") + "</div>";
  }

  function tracker(steps, done) {
    var n = typeof done === "number" ? done : (done ? steps.length : steps.length - 1);
    return '<ol class="trk">' + steps.map(function (s, i) {
      var st = i < n ? "ok" : i === n ? "now" : "todo";
      return '<li class="' + st + '"><span class="trk-d">' + (st === "ok" ? ic("check") : "") + "</span><div><b>" + esc(s[0]) + "</b><span>" + esc(s[1]) + "</span></div></li>";
    }).join("") + "</ol>";
  }

  function secBody(s) {
    var h = "";
    if (s.p) h += "<p>" + esc(s.p) + "</p>";
    if (s.list) h += '<ul class="ticks">' + s.list.map(function (x) { return "<li>" + ic("check") + esc(x) + "</li>"; }).join("") + "</ul>";
    if (s.steps) h += '<ol class="steps">' + s.steps.map(function (x) { return "<li><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></li>"; }).join("") + "</ol>";
    if (s.compare) h += '<div class="cmp">' + s.compare.map(function (x) { return "<div><b>" + esc(x[0]) + "</b><p>" + esc(x[1]) + "</p></div>"; }).join("") + "</div>";
    if (s.tiers) h += '<div class="tiers">' + s.tiers.map(function (x) { return "<div><span>" + esc(x[0]) + "</span><b>" + esc(x[1]) + "</b><small>" + esc(x[2]) + "</small></div>"; }).join("") + "</div>";
    return h;
  }

  function vCase(id) {
    var p = byId(id); if (!p) return vNotFound();
    var d = dom(p.domain);
    var similar = sorted().filter(function (x) { return x.id !== p.id && (x.domain === p.domain || x.skills.some(function (s) { return p.skills.indexOf(s) > -1; })); }).slice(0, 8);
    var done = ["Delivered", "Launched", "Real revenue"].indexOf(p.status) > -1;
    var pitch = /pitched|placed/i.test(p.status);
    var stepsDone = done || pitch ? true : false;
    var trkSub = done ? "Tracked stage by stage" : pitch ? "A plan pitched, not a launch I ran" : p.status === "Built" ? "Working build, still in progress" : "Proposed, never launched";
    return '<div class="wrap pdp">' +
      '<p class="crumb"><a href="#/">Home</a> / <a href="#/aisles/' + d.id + '">' + esc(d.name) + "</a> / " + esc(p.short) + "</p>" +
      '<div class="pdp-g">' +
        '<div class="pdp-l">' + '<div class="pdp-img">' + poster(p, true) + "</div>" + gallery(p) +
          '<section class="pd"><h2>Product details</h2>' +
          '<dl class="pd-dl"><dt>The problem</dt><dd>' + esc(p.summary.problem) + "</dd><dt>What I did</dt><dd>" + esc(p.summary.did) + "</dd><dt>Where it landed</dt><dd>" + esc(p.summary.landed) + "</dd>" +
          p.details.map(function (x) { return "<dt>" + esc(x[0]) + "</dt><dd>" + esc(x[1]) + "</dd>"; }).join("") + "</dl></section>" +
        "</div>" +
        '<div class="pdp-r">' +
          '<h1 class="pdp-t">' + esc(p.name) + "</h1>" +
          '<div class="pdp-meta"><span class="eta">' + ic("clock") + esc(p.eta) + '</span><span class="stat">' + esc(p.status) + "</span></div>" +
          '<a class="pdp-brand" href="#/aisles/' + d.id + '">View all in ' + esc(d.name) + " " + ic("chev") + "</a>" +
          '<p class="pdp-hook">' + esc(p.hook) + "</p>" +
          '<div class="skills">' + p.skills.map(function (s) { return '<a class="chip chip-s" href="#/aisles/skill/' + s + '">' + esc(skill(s).name) + "</a>"; }).join("") + "</div>" +
          '<h2 class="h-sm">Select unit</h2><div class="units">' + p.metrics.map(function (m, i) {
            return '<div class="unit' + (i === 0 ? " on" : "") + '"><b>' + esc(m.v) + "</b><span>" + esc(m.l) + "</span>" + prov(m.p) + "</div>";
          }).join("") + "</div>" +
          (p.phonepe ? '<p class="cv-note">' + ic("doc") + "Figures as stated on my CV. No PhonePe internal data is shown.</p>" : "") +
          '<div class="pdp-buy">' + addBtn(p, true) + '<a class="btn btn-ghost" href="#/cart">Go to cart</a></div>' +
          '<section class="why"><h2>Why this matters at Blinkit</h2><p>' + esc(p.blinkit) + '</p><p class="why-n">Relevance, not a claim about how Blinkit works inside.</p></section>' +
          '<section class="pack"><h2>' + ic("team") + "What's in the pack <small>teams and parties involved</small></h2><ul>" + p.pack.map(function (x) { return "<li><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></li>"; }).join("") + "</ul></section>" +
        "</div>" +
      "</div>" +
      '<section class="sec trk-sec"><div class="trk-h' + (done ? "" : " trk-pending") + '"><span>' + ic(done ? "check" : "clock") + "</span><div><b>" + (done ? "Program delivered" : esc(p.status)) + "</b><small>" + trkSub + "</small></div></div>" + tracker(p.track, stepsDone) + "</section>" +
      (p.sections.length ? '<section class="sec secs">' + p.sections.map(function (s) { return '<div class="sx"><h2>' + esc(s.h) + "</h2>" + secBody(s) + "</div>"; }).join("") + "</section>" : "") +
      ((p.deck || p.links) ? '<section class="sec"><div class="lnks">' +
        (p.deck ? '<a class="lnk" href="' + p.deck.u + '" target="_blank" rel="noopener">' + ic("doc") + "<span><b>" + esc(p.deck.t) + "</b><small>PDF · " + p.deck.pages + " pages · " + p.deck.size + "</small></span></a>" : "") +
        (p.links || []).map(function (l) { return '<a class="lnk" href="' + l.u + '" target="_blank" rel="noopener">' + ic("ext") + "<span><b>" + esc(l.t) + "</b><small>" + esc(l.u.replace(/^https?:\/\//, "").split("/")[0]) + "</small></span></a>"; }).join("") +
        "</div></section>" : "") +
      (similar.length ? rail("Similar cases", similar.map(card)) : "") +
      "</div>";
  }

  function orderCard(o, compact) {
    var rel = (o.related || []).map(byId).filter(Boolean);
    return '<article class="ord" id="ord-' + o.id + '">' +
      '<div class="ord-h"><img src="' + o.logo + '" alt="" width="44" height="44"><div><b>' + esc(o.org) + "</b><span>" + esc(o.title) + "</span><small>" + esc(o.when) + " · " + esc(o.where) + '</small></div><span class="ord-s ' + o.status + '">' + (o.status === "delivered" ? ic("check") : ic("clock")) + esc(o.statusText) + "</span></div>" +
      (o.track ? tracker(o.track, o.status === "delivered").replace('class="trk"', 'class="trk trk-row"') : "") +
      '<p class="ord-b">' + esc(o.body) + "</p>" +
      (!compact && o.bullets ? '<ul class="ord-l">' + o.bullets.map(function (b) { return "<li><b>" + esc(b[0]) + "</b> " + esc(b[1]) + "</li>"; }).join("") + "</ul>" : "") +
      (o.pack ? '<div class="ord-p"><span>' + ic("team") + "In the pack</span>" + o.pack.map(function (x) { return '<i class="tag">' + esc(x) + "</i>"; }).join("") + "</div>" : "") +
      (rel.length ? '<div class="ord-r">' + rel.map(function (p) { return '<a href="#/case/' + p.id + '">' + esc(p.short) + " " + ic("chev") + "</a>"; }).join("") + "</div>" : "") +
      (compact ? '<a class="ord-more" href="#/deliveries">All deliveries ' + ic("chev") + "</a>" : "") +
      (o.org === "PhonePe" && !compact ? '<p class="cv-note">' + ic("doc") + "Figures as stated on my CV. No PhonePe internal data is shown.</p>" : "") +
      "</article>";
  }

  function vDeliveries() {
    var work = D.orders.filter(function (o) { return o.type === "work" || o.id === "mu"; });
    var edu = D.orders.filter(function (o) { return o.type === "edu" && o.id !== "mu"; });
    return '<div class="wrap narrow">' +
      '<p class="crumb"><a href="#/">Home</a> / Deliveries</p><h1 class="pg-t">My deliveries</h1><p class="pg-s">Experience as orders, newest first. Each one shows what was in the pack (the teams and parties involved) and how it was tracked.</p>' +
      work.map(function (o) { return orderCard(o); }).join("") +
      '<h2 class="pg-h2">Earlier orders · education</h2>' + edu.map(function (o) { return orderCard(o); }).join("") +
      '<section class="sec"><h2 class="pg-h2">Certifications</h2><div class="certs">' + D.certs.map(function (c) { return '<div class="cert">' + ic("check") + "<div><b>" + esc(c[0]) + "</b><span>" + esc(c[1]) + "</span></div></div>"; }).join("") + "</div></section>" +
      "</div>";
  }

  function vPlaybook() {
    return '<div class="wrap narrow">' +
      '<p class="crumb"><a href="#/">Home</a> / How I run a program</p><h1 class="pg-t">How I run a program</h1>' +
      '<p class="pg-s">Five steps, each drawn only from things I have actually done. Every step links to the case it came from.</p>' +
      '<ol class="pb">' + D.playbook.map(function (s, i) {
        return '<li id="pb-' + s.id + '" class="pb-s"><div class="pb-h"><span class="fl-n">' + (i + 1) + "</span><div><h2>" + s.t + "</h2><p>" + esc(s.q) + "</p></div></div>" +
          '<ul class="pb-l">' + s.did.map(function (x) {
            var p = byId(x[0]);
            return '<li><a href="#/case/' + p.id + '"><span class="pb-mini" style="background:' + p.poster.bg + ";color:" + p.poster.fg + '">' + esc(p.poster.big) + "</span><span><b>" + esc(p.short) + "</b><small>" + esc(x[1]) + "</small></span>" + ic("chev") + "</a></li>";
          }).join("") + "</ul></li>";
      }).join("") + "</ol>" +
      '<h2 class="pg-h2">Four habits, in every case</h2><div class="habits">' + D.habits.map(function (h, i) {
        return '<div class="hab"><span class="hab-n">0' + (i + 1) + "</span><b>" + esc(h[0]) + "</b><p>" + esc(h[1]) + "</p></div>";
      }).join("") + "</div>" +
      '<div class="cta-band"><div><b>Google Project Management certification</b><span>Project scoping, stakeholder alignment, risk planning, Agile delivery.</span></div><a class="btn btn-g" href="#/planner">See it in the planner</a></div>' +
      "</div>";
  }

  /* ---------- PLANNER ---------- */
  var plan = { d: {}, gates: [] };
  function resetPlan() { plan.d = {}; D.planner.tasks.forEach(function (t) { plan.d[t.id] = t.d; }); plan.gates = D.planner.gates.map(function () { return false; }); }
  resetPlan();
  function schedule(tasks, dur) {
    var t = {}, total = 0;
    tasks.forEach(function (x) {
      var d = dur ? dur[x.id] : x.d;
      var es = 0; x.deps.forEach(function (p) { es = Math.max(es, t[p].ef); });
      t[x.id] = { es: es, ef: es + d, d: d };
      total = Math.max(total, es + d);
    });
    for (var i = tasks.length - 1; i >= 0; i--) {
      var x = tasks[i], lf = total;
      tasks.forEach(function (y) { if (y.deps.indexOf(x.id) > -1) lf = Math.min(lf, t[y.id].ls); });
      t[x.id].lf = lf; t[x.id].ls = lf - t[x.id].d; t[x.id].slack = lf - t[x.id].ef;
    }
    return { t: t, total: total };
  }
  var BASE = schedule(D.planner.tasks).total;
  var whatifs = [
    ["Site handover runs late", "site", 5],
    ["Hiring takes longer", "hire", 6],
    ["Fit-out vendor is quick", "fitout", -4],
    ["Riders ready early", "riders", -3]
  ];

  function vPlanner() {
    return '<div class="wrap planner">' +
      '<p class="crumb"><a href="#/">Home</a> / Dark store go-live planner</p>' +
      '<div class="pl-top"><div><h1 class="pg-t">Dark store go-live planner</h1><p class="pg-s">Seven workstreams with owners and dependencies. Change a duration and see whether the launch moves. Workstreams on the critical path move it day for day; the rest have slack.</p></div>' +
      '<div class="pl-eta" id="plEta" aria-live="polite"></div></div>' +
      '<p class="pl-note">' + prov("modelled") + " " + esc(D.planner.note) + "</p>" +
      '<div class="pl-g"><section class="pl-card" aria-label="Workstreams"><div class="pl-ch" id="plChart"></div>' +
      '<div class="wi"><span>What if…</span>' + whatifs.map(function (w, i) { return '<button type="button" class="chip" data-wi="' + i + '">' + esc(w[0]) + " (" + (w[2] > 0 ? "+" : "") + w[2] + "d)</button>"; }).join("") + '<button type="button" class="chip chip-r" id="plReset">Reset</button></div></section>' +
      '<aside class="pl-side"><section class="pl-card"><h2>Per-party clocks</h2><p class="pl-s">Days each owner has work in flight. They overlap, so they add up to more than the launch date: the same reason MID Procurement shows timelines, not a pie chart.</p><ul class="clk" id="plClk"></ul><a class="pl-lnk" href="#/case/mid">The case behind this ' + ic("chev") + "</a></section>" +
      '<section class="pl-card"><h2>Go-live gates</h2><p class="pl-s">The store goes live when every gate is checked, not when the date arrives.</p><div id="plGates"></div><button type="button" class="btn btn-g btn-full" id="plGo"></button></section></aside></div>' +
      "</div>";
  }
  function drawPlanner() {
    var s = schedule(D.planner.tasks, plan.d), total = s.total, diff = total - BASE;
    var span = Math.max(total, BASE) + 2;
    $("#plEta").innerHTML = '<span class="pl-eta-k">Store go-live in</span><b>' + total + ' days</b><span class="pl-eta-d ' + (diff > 0 ? "late" : diff < 0 ? "early" : "") + '">' + (diff === 0 ? "On the baseline plan" : (diff > 0 ? "+" + diff + " days late" : Math.abs(diff) + " days early") + " vs " + BASE + "-day plan") + "</span>";
    var weeks = []; for (var w = 0; w <= span; w += 7) weeks.push(w);
    $("#plChart").innerHTML =
      '<div class="gh"><span>Workstream · owner</span><span class="gh-ax">' + weeks.map(function (w) { return '<i style="left:' + (w / span * 100) + '%">D' + w + "</i>"; }).join("") + "</span><span>Days</span></div>" +
      D.planner.tasks.map(function (t) {
        var x = s.t[t.id], crit = x.slack === 0;
        var deps = t.deps.map(function (dd) { for (var i = 0; i < D.planner.tasks.length; i++) if (D.planner.tasks[i].id === dd) return D.planner.tasks[i].n; }).join(", ");
        return '<div class="gr' + (crit ? " crit" : "") + '"><div class="gr-n"><b>' + esc(t.n) + "</b><small>" + esc(t.owner) + (deps ? " · after " + esc(deps) : "") + "</small></div>" +
          '<div class="gr-tr"><i class="gr-b" style="left:' + (x.es / span * 100) + "%;width:" + (x.d / span * 100) + '%"><span>' + (x.d / span < 0.12 ? "" : crit ? "Critical" : x.slack + "d slack") + '</span></i><i class="gr-base" style="left:' + (BASE / span * 100) + '%"></i></div>' +
          '<div class="gr-st"><button type="button" data-st="' + t.id + '" data-v="-1" aria-label="Shorten ' + esc(t.n) + ' by a day"' + (x.d <= t.min ? " disabled" : "") + ">" + ic("minus") + '</button><output aria-label="' + esc(t.n) + ' duration">' + x.d + '</output><button type="button" data-st="' + t.id + '" data-v="1" aria-label="Lengthen ' + esc(t.n) + ' by a day"' + (x.d >= t.max ? " disabled" : "") + ">" + ic("plus") + "</button></div></div>";
      }).join("") +
      '<div class="gl"><span><i class="lg lg-c"></i>Critical path</span><span><i class="lg lg-s"></i>Has slack</span><span><i class="lg lg-b"></i>Baseline go-live (day ' + BASE + ")</span></div>";
    var own = {};
    D.planner.tasks.forEach(function (t) { own[t.owner] = (own[t.owner] || 0) + plan.d[t.id]; });
    var mx = Math.max.apply(null, Object.keys(own).map(function (k) { return own[k]; }));
    $("#plClk").innerHTML = Object.keys(own).map(function (k) { return "<li><span>" + esc(k) + '</span><i><em style="width:' + (own[k] / mx * 100) + '%"></em></i><b>' + own[k] + "d</b></li>"; }).join("") +
      '<li class="clk-t"><span>Sum of clocks</span><i></i><b>' + Object.keys(own).reduce(function (a, k) { return a + own[k]; }, 0) + "d</b></li><li class=\"clk-t\"><span>Actual launch</span><i></i><b>" + total + "d</b></li>";
    $("#plGates").innerHTML = '<ul class="gates">' + D.planner.gates.map(function (g, i) {
      return '<li><label><input type="checkbox" data-gate="' + i + '"' + (plan.gates[i] ? " checked" : "") + "><span>" + esc(g) + "</span></label></li>";
    }).join("") + "</ul>";
    var n = plan.gates.filter(Boolean).length, all = n === plan.gates.length;
    var go = $("#plGo");
    go.disabled = !all;
    go.innerHTML = all ? ic("check") + " Go live on day " + total : n + " of " + plan.gates.length + " gates passed";
  }
  function bindPlanner() {
    drawPlanner();
    var root = $(".planner");
    root.addEventListener("click", function (e) {
      var st = e.target.closest("[data-st]");
      if (st) {
        var t = D.planner.tasks.filter(function (x) { return x.id === st.dataset.st; })[0];
        plan.d[t.id] = Math.max(t.min, Math.min(t.max, plan.d[t.id] + +st.dataset.v));
        var before = schedule(D.planner.tasks, plan.d).total; drawPlanner();
        var b = $('[data-st="' + t.id + '"][data-v="' + st.dataset.v + '"]'); if (b && !b.disabled) b.focus();
        return before;
      }
      var wi = e.target.closest("[data-wi]");
      if (wi) {
        var w = whatifs[+wi.dataset.wi], tk = D.planner.tasks.filter(function (x) { return x.id === w[1]; })[0];
        var prev = schedule(D.planner.tasks, plan.d).total;
        plan.d[tk.id] = Math.max(tk.min, Math.min(tk.max, plan.d[tk.id] + w[2]));
        drawPlanner();
        var now = schedule(D.planner.tasks, plan.d).total;
        toast(esc(w[0]) + ": launch " + (now === prev ? "does not move (that workstream had slack)" : (now > prev ? "slips " + (now - prev) : "moves up " + (prev - now)) + " day" + (Math.abs(now - prev) === 1 ? "" : "s")));
        return;
      }
      if (e.target.closest("#plReset")) { resetPlan(); drawPlanner(); toast("Plan reset to the baseline"); return; }
      if (e.target.closest("#plGo")) { toast(ic("check") + " Store live on day " + schedule(D.planner.tasks, plan.d).total + ". Performance tracking starts now."); }
    });
    root.addEventListener("change", function (e) {
      var g = e.target.closest("[data-gate]");
      if (g) { plan.gates[+g.dataset.gate] = g.checked; var y = window.scrollY; drawPlanner(); window.scrollTo(0, y); var el = $('[data-gate="' + g.dataset.gate + '"]'); if (el) el.focus(); }
    });
  }

  function vFirst90() {
    return '<div class="wrap narrow">' +
      '<p class="crumb"><a href="#/">Home</a> / First 90 days</p><h1 class="pg-t">First 90 days as a Program Manager at Blinkit</h1>' +
      '<p class="pg-s">Hypotheses, not findings. The facts come from Blinkit\'s and Eternal\'s public pages (labelled Sourced, with links). What I would do with them is my guess, and each guess comes with the number that would prove it wrong.</p>' +
      '<section class="sec"><h2 class="pg-h2">What Blinkit says publicly</h2><div class="facts">' + D.facts.map(function (f) {
        return '<a class="fact" href="' + f.u + '" target="_blank" rel="noopener"><b>' + esc(f.v) + "</b><span>" + esc(f.l) + "</span><small>" + prov("sourced") + " " + esc(f.src) + " " + ic("ext") + "</small></a>";
      }).join("") + '</div><p class="src-n">Fetched November 2026.</p></section>' +
      '<section class="sec"><h2 class="pg-h2">The 90 days</h2><ol class="ninety">' + D.ninety.map(function (n) {
        return "<li><span>" + esc(n.phase) + "</span><b>" + esc(n.t) + "</b><p>" + esc(n.body) + "</p></li>";
      }).join("") + "</ol></section>" +
      '<section class="sec"><h2 class="pg-h2">Four hypotheses</h2>' + D.pilot.map(function (h, i) {
        return '<article class="hyp"><div class="hyp-n">H' + (i + 1) + '</div><div class="hyp-b"><h3>' + esc(h.t) + "</h3><p>" + esc(h.w) + "</p>" +
          '<dl><dt>' + ic("flag") + "What I would measure</dt><dd>" + esc(h.m) + "</dd><dt class=\"wrong\">" + ic("x") + "Proves me wrong if</dt><dd>" + esc(h.wrong) + "</dd></dl>" +
          '<div class="hyp-c"><span>From:</span>' + h.cases.map(function (c) { var p = byId(c); return '<a href="#/case/' + c + '">' + esc(p.short) + "</a>"; }).join("") + "</div></div></article>";
      }).join("") + "</section>" +
      "</div>";
  }

  var SLOTS = [["intro", "Intro call", "20 min · get to know each other"], ["walk", "Case walkthrough", "45 min · I walk you through 1–2 cases from your cart"], ["loop", "Interview loop", "Your process · I'll make the time"]];
  function vCart() {
    var items = cart.map(byId).filter(Boolean);
    var sugg = sorted().filter(function (p) { return !inCart(p.id); }).slice(0, 6);
    return '<div class="wrap cartpg">' +
      '<p class="crumb"><a href="#/">Home</a> / Cart</p><h1 class="pg-t">My Cart</h1>' +
      '<div class="cart-g"><div class="cart-l">' +
        '<section class="cbox"><div class="cbox-h">' + ic("clock") + "<div><b>Delivery in 90 days</b><small>Shipment of " + items.length + " case" + (items.length === 1 ? "" : "s") + "</small></div></div>" +
        (items.length ? '<ul class="citems">' + items.map(function (p) {
          return '<li><a class="ci-img" href="#/case/' + p.id + '" style="background:' + p.poster.bg + ";color:" + p.poster.fg + '">' + esc(p.poster.big) + '</a><div class="ci-t"><a href="#/case/' + p.id + '"><b>' + esc(p.short) + "</b></a><small>" + esc(dom(p.domain).name) + "</small><span>" + esc(p.price.v) + " " + esc(p.price.u) + " " + prov(p.price.prov) + "</span></div>" + addBtn(p) + "</li>";
        }).join("") + "</ul>" : '<div class="cempty">' + ic("cart", "big") + "<b>Your shortlist is empty</b><p>Add the cases you want to talk about. You can also order an intro call with nothing in the cart.</p></div>") +
        "</section>" +
        '<section class="cbox"><h2>Choose a slot</h2><div class="slots" role="radiogroup" aria-label="Kind of conversation">' + SLOTS.map(function (s) {
          return '<label class="slot"><input type="radio" name="slot" value="' + s[0] + '"' + (form.slot === s[0] ? " checked" : "") + "><span><b>" + s[1] + "</b><small>" + s[2] + "</small></span></label>";
        }).join("") + "</div>" +
        '<div class="fld"><label for="fName">Your name</label><input id="fName" autocomplete="name" value="' + esc(form.name) + '"></div>' +
        '<div class="fld"><label for="fTeam">Team and role you are hiring for <small>(optional)</small></label><input id="fTeam" value="' + esc(form.team) + '" placeholder="e.g. Program Manager, store launches"></div>' +
        '<div class="fld"><label for="fNote">Note <small>(optional)</small></label><textarea id="fNote" rows="3">' + esc(form.note) + "</textarea></div></section>" +
      "</div>" +
      '<aside class="cart-r"><section class="cbox"><h2>Bill details</h2><dl class="bill"><dt>' + ic("doc") + "Cases total</dt><dd><s>priceless</s> ₹0</dd><dt>" + ic("bolt") + "Delivery charge</dt><dd><span class=\"free\">FREE</span></dd><dt>" + ic("pin") + "Relocation to Bengaluru</dt><dd><span class=\"free\">FREE</span></dd><dt class=\"gt\">Grand total</dt><dd class=\"gt\">₹0</dd></dl>" +
        '<p class="bill-n">Placing the order opens an email to ' + esc(P.email) + " with your slot and shortlist filled in. Nothing is sent until you press send.</p>" +
        '<button class="btn btn-g btn-full btn-pay" type="button" id="placeBtn"><span><b>₹0</b><small>TOTAL</small></span><span>Place order: email Navya ' + ic("chev") + "</span></button>" +
        '<div class="alt"><a href="' + P.phoneHref + '">' + ic("phone") + P.phone + '</a><a href="' + P.linkedin + '" target="_blank" rel="noopener">' + ic("link") + P.linkedinShort + '</a><a href="' + P.resume + '" target="_blank" rel="noopener">' + ic("doc") + "Résumé PDF</a></div></section></aside>" +
      "</div>" +
      (sugg.length ? rail("You might also like", sugg.map(card)) : "") +
      "</div>";
  }
  function mailto() {
    var items = cart.map(byId).filter(Boolean);
    var slot = SLOTS.filter(function (s) { return s[0] === form.slot; })[0] || SLOTS[0];
    var subj = slot[1] + " · Program Manager · Navya Juneja";
    var body = "Hi Navya,\n\n" + "I'd like to book: " + slot[1] + " (" + slot[2] + ").\n" +
      (form.team ? "Role / team: " + form.team + "\n" : "") +
      (items.length ? "\nCases I'd like to discuss:\n" + items.map(function (p) { return "- " + p.short + ": " + location.href.split("#")[0] + "#/case/" + p.id; }).join("\n") + "\n" : "") +
      (form.note ? "\n" + form.note + "\n" : "") + "\nThanks,\n" + (form.name || "");
    return "mailto:" + P.email + "?subject=" + encodeURIComponent(subj) + "&body=" + encodeURIComponent(body);
  }
  function bindCart() {
    var f = function () {
      form.name = $("#fName").value; form.team = $("#fTeam").value; form.note = $("#fNote").value;
      var r = $('input[name="slot"]:checked'); form.slot = r ? r.value : "intro";
      save("nj-bk-form", form);
    };
    $$(".cartpg input, .cartpg textarea").forEach(function (el) { el.addEventListener("input", f); el.addEventListener("change", f); });
    $("#placeBtn").addEventListener("click", function () { f(); var m = mailto(); location.hash = "#/placed"; setTimeout(function () { window.location.href = m; }, 60); });
  }

  function vPlaced() {
    var items = cart.map(byId).filter(Boolean);
    var slot = (SLOTS.filter(function (s) { return s[0] === form.slot; })[0] || SLOTS[0])[1];
    return '<div class="placed"><div class="pl-hero"><span class="pl-tick">' + ic("check") + "</span><h1>Order placed</h1><p>" + esc(slot) + (items.length ? " · " + items.length + " case" + (items.length > 1 ? "s" : "") : "") + "</p></div>" +
      '<div class="wrap narrow"><section class="cbox">' + tracker([["Order placed", "Your email client opened with the details filled in"], ["You press send", "Nothing leaves until you do"], ["Navya replies", "With times for your " + slot.toLowerCase()]], 1) +
      '<p class="bill-n">Email client did not open? Write to <a href="mailto:' + P.email + '">' + P.email + '</a> or call <a href="' + P.phoneHref + '">' + P.phone + '</a>.</p>' +
      '<div class="alt"><button type="button" class="btn btn-ghost" id="copyMail">' + ic("mail") + 'Copy email address</button><a class="btn btn-ghost" href="' + mailto() + '">' + ic("mail") + 'Open the email again</a><a class="btn btn-ghost" href="' + P.resume + '" target="_blank" rel="noopener">' + ic("doc") + "Résumé PDF</a></div></section>" +
      '<p class="center"><a class="btn btn-g" href="#/">Continue browsing</a></p></div></div>';
  }

  function vAbout() {
    return '<div class="wrap narrow about">' +
      '<section class="ab-h"><img src="assets/portrait.jpg" alt="Portrait of Navya Juneja" width="600" height="750"><div><p class="hero-k">Program Manager</p><h1>Navya Juneja</h1>' +
      "<p>I take problems with many parties, unclear owners and a date, and run them to completion. Two years in PhonePe's payments operations (merchant go-live, bank migrations, network launches), then H2H at Cogent, then a run of builds and ventures across D2C, FMCG, retail and ops tooling.</p>" +
      '<ul class="ab-c"><li>' + ic("pin") + esc(P.location) + '</li><li><a href="mailto:' + P.email + '">' + ic("mail") + P.email + '</a></li><li><a href="' + P.phoneHref + '">' + ic("phone") + P.phone + '</a></li><li><a href="' + P.linkedin + '" target="_blank" rel="noopener">' + ic("link") + P.linkedinShort + '</a></li><li><a href="' + P.portfolio + '" target="_blank" rel="noopener">' + ic("ext") + "Main portfolio</a></li></ul>" +
      '<div class="hero-cta"><a class="btn btn-g" href="#/cart">Book a conversation</a><a class="btn btn-ghost" href="' + P.resume + '" target="_blank" rel="noopener">' + ic("doc") + 'Résumé PDF</a></div></div>' +
      '<img class="qr" src="assets/qr-linkedin.svg" alt="QR code linking to linkedin.com/in/junejanavya" width="104" height="104"></section>' +
      '<section class="sec"><h2 class="pg-h2">Certifications</h2><div class="certs">' + D.certs.map(function (c) { return '<div class="cert">' + ic("check") + "<div><b>" + esc(c[0]) + "</b><span>" + esc(c[1]) + "</span></div></div>"; }).join("") + "</div></section>" +
      '<section class="sec"><h2 class="pg-h2">Off the clock</h2><div class="ev ev-off">' + D.offclock.map(function (o) { return '<div class="evc"><b>' + esc(o[0]) + "</b><span>" + esc(o[1]) + "</span></div>"; }).join("") + "</div></section>" +
      '<section class="sec"><h2 class="pg-h2">FAQ</h2><div class="faq">' + D.faq.map(function (f) { return "<details><summary>" + esc(f[0]) + ic("down") + "</summary><p>" + esc(f[1]) + "</p></details>"; }).join("") + "</div></section>" +
      "</div>";
  }

  function vNotFound() {
    return '<div class="wrap narrow nf">' + ic("bag", "big") + "<h1>This aisle is empty</h1><p>The page you asked for is not here.</p><a class=\"btn btn-g\" href=\"#/\">Back to home</a></div>";
  }

  /* ---------- SHEETS / TOAST ---------- */
  var lastFocus;
  function openSheet(html, label) {
    lastFocus = document.activeElement;
    var sh = $("#sheet"), sc = $("#scrim");
    sh.innerHTML = '<button class="sh-x" type="button" aria-label="Close">' + ic("x") + "</button>" + html;
    sh.setAttribute("aria-label", label || "Details");
    sh.hidden = false; sc.hidden = false;
    requestAnimationFrame(function () { sh.classList.add("on"); sc.classList.add("on"); });
    document.body.classList.add("noscroll");
    $(".sh-x", sh).focus();
  }
  function closeSheet() {
    var sh = $("#sheet"), sc = $("#scrim");
    if (sh.hidden) return;
    sh.classList.remove("on"); sc.classList.remove("on");
    $$("video", sh).forEach(function (v) { v.pause(); });
    setTimeout(function () { sh.hidden = true; sc.hidden = true; sh.innerHTML = ""; }, RM ? 0 : 220);
    document.body.classList.remove("noscroll");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function locSheet() {
    openSheet('<div class="sh-b"><h2>' + ic("pin") + 'Delivering to</h2><p class="sh-s">Where I can work from</p>' +
      '<ul class="locs"><li class="on">' + ic("check") + "<div><b>Gurgaon</b><span>Based here now</span></div></li><li>" + ic("check") + "<div><b>Bengaluru</b><span>Open to relocating; lived and worked here at PhonePe and Christ University</span></div></li><li>" + ic("check") + "<div><b>Elsewhere</b><span>Open to relocating</span></div></li></ul>" +
      '<p class="sh-s">"Delivery in 90 days" refers to the <a href="#/first-90">first-90-days plan</a>, not a notice period.</p></div>', "Location");
  }
  function lightbox(pid, i) {
    var p = byId(pid), m = p.media[i];
    var body = m.type === "video" ? '<video src="' + m.src + '" poster="' + m.poster + '" controls playsinline preload="none" aria-label="' + esc(m.alt) + '"></video>' : '<img src="' + m.src + '" alt="' + esc(m.alt) + '">';
    openSheet('<div class="sh-b lb">' + body + '<p class="sh-s">' + esc(m.alt) + "</p>" +
      (p.media.length > 1 ? '<div class="lb-n"><button type="button" class="btn btn-ghost" data-media="' + pid + ":" + ((i - 1 + p.media.length) % p.media.length) + '">' + ic("back") + 'Previous</button><span>' + (i + 1) + " / " + p.media.length + '</span><button type="button" class="btn btn-ghost" data-media="' + pid + ":" + ((i + 1) % p.media.length) + '">Next' + ic("chev") + "</button></div>" : "") + "</div>", "Media");
  }
  var toastT;
  function toast(html) {
    var t = $("#toast"); t.innerHTML = html; t.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("on"); }, 2800);
  }

  /* ---------- ROUTER ---------- */
  function parse() {
    var h = (location.hash || "#/").replace(/^#\/?/, "");
    var anchor = null;
    var hi = h.indexOf("#"); if (hi > -1) { anchor = h.slice(hi + 1); h = h.slice(0, hi); }
    var parts = h.split("/").filter(Boolean);
    return { r: parts[0] || "", a: parts[1], b: parts[2], anchor: anchor };
  }
  var TITLES = { "": "Program Manager, delivered", aisles: "Aisles", deliveries: "Deliveries", playbook: "How I run a program", planner: "Go-live planner", "first-90": "First 90 days", cart: "Cart", placed: "Order placed", about: "About" };
  var prevRoute = null;
  function render() {
    var R = parse(), v = $("#view"), html;
    switch (R.r) {
      case "": html = vHome(); break;
      case "aisles": html = vAisles(R.a, R.b); break;
      case "case": html = vCase(R.a); break;
      case "deliveries": html = vDeliveries(); break;
      case "playbook": html = vPlaybook(); break;
      case "planner": html = vPlanner(); break;
      case "first-90": html = vFirst90(); break;
      case "cart": html = vCart(); break;
      case "placed": html = vPlaced(); break;
      case "about": html = vAbout(); break;
      default: html = vNotFound();
    }
    v.innerHTML = html;
    document.body.className = "r-" + (R.r || "home") + (document.body.classList.contains("noscroll") ? " noscroll" : "");
    var t = R.r === "case" && byId(R.a) ? byId(R.a).short : (TITLES[R.r] || "Not found");
    document.title = "navya · " + t;
    $$("#bnav a").forEach(function (a) { var on = a.dataset.nav === R.r || (a.dataset.nav === "aisles" && R.r === "case"); a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    if (R.r === "planner") bindPlanner();
    if (R.r === "cart") bindCart();
    if (R.r === "placed") { var cm = $("#copyMail"); if (cm) cm.addEventListener("click", function () { try { navigator.clipboard.writeText(P.email).then(function () { toast("Email address copied"); }, function () { toast(P.email); }); } catch (e) { toast(P.email); } }); }
    railNav();
    updCart();
    var key = R.r + "/" + (R.a || "") + "/" + (R.b || "");
    if (R.anchor) { var el = document.getElementById(R.anchor); if (el) { el.scrollIntoView({ behavior: RM ? "auto" : "smooth" }); } }
    else if (key !== prevRoute) { window.scrollTo(0, 0); if (prevRoute !== null) v.focus({ preventScroll: true }); }
    prevRoute = key;
  }
  function railNav() {
    $$(".rail-wrap").forEach(function (w) {
      var r = $(".rail", w), p = $(".rprev", w), n = $(".rnext", w);
      function upd() { p.disabled = r.scrollLeft < 4; n.disabled = r.scrollLeft + r.clientWidth >= r.scrollWidth - 4; }
      p.addEventListener("click", function () { r.scrollBy({ left: -r.clientWidth * 0.85, behavior: RM ? "auto" : "smooth" }); });
      n.addEventListener("click", function () { r.scrollBy({ left: r.clientWidth * 0.85, behavior: RM ? "auto" : "smooth" }); });
      r.addEventListener("scroll", upd, { passive: true }); upd();
    });
  }

  /* ---------- global events ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-add]"); if (a) { e.preventDefault(); toggleCart(a.dataset.add); return; }
    var m = e.target.closest("[data-media]"); if (m) { var x = m.dataset.media.split(":"); if (!$("#sheet").hidden) { $("#sheet").classList.remove("on"); } lightbox(x[0], +x[1]); return; }
    if (e.target.closest(".sh-x") || e.target.id === "scrim") { closeSheet(); return; }
    var l = e.target.closest("#sheet a[href^='#']"); if (l) closeSheet();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSheet();
    if (e.key === "Tab" && !$("#sheet").hidden) {
      var f = $$('#sheet a, #sheet button, #sheet video, #sheet input').filter(function (x) { return !x.disabled; });
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
    if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") { var q = $("#q"); if (q) { e.preventDefault(); q.focus(); } }
  });
  window.addEventListener("hashchange", function () { closeSheet(); closeDrop(); render(); });

  /* ---------- splash ---------- */
  function splash() {
    var s = $("#splash");
    if (sload("nj-bk-splash") || RM || location.hash.length > 2) { s.remove(); return; }
    ssave("nj-bk-splash", "1");
    $(".sp-mark", s).innerHTML = mark(76);
    s.hidden = false;
    var done = function () { if (!s.parentNode) return; s.classList.add("out"); setTimeout(function () { s.remove(); }, 380); };
    $("#spSkip").addEventListener("click", done);
    $("#spSkip").focus();
    setTimeout(done, 2600);
  }

  renderShell();
  render();
  splash();
})();
