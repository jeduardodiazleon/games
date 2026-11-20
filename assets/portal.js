/* Portal logic: builds the page from window.GAMES (catalog.js). No need to edit this file. */
(() => {
  "use strict";
  const games = Array.isArray(window.GAMES) ? window.GAMES : [];
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, txt) => { const n = document.createElement(tag); if (cls) n.className = cls; if (txt != null) n.textContent = txt; return n; };
  const best = (g) => { try { return Number(localStorage.getItem("arcade_" + (g.highScoreKey || g.folder))) || 0; } catch (e) { return 0; } };
  const isRecent = (d) => { const t = Date.parse(d); return !isNaN(t) && (Date.now() - t) / 864e5 <= 21; };
  const badgeText = (g) => isRecent(g.updated) ? (g.version && g.version !== "1.0" ? "UPDATED" : "NEW") : null;
  const dir = (g) => "games/" + g.folder + "/";
  const href = (g) => dir(g);

  // Cover: tries games/<folder>/cover.svg → .png → .jpg (or g.cover), falls back to the title's initial.
  function cover(g, withPlay) {
    const box = el("div", "cover");
    const tries = (g.cover ? [g.cover] : ["cover.svg", "cover.png", "cover.jpg"]).map((f) => dir(g) + f);
    let i = 0; const img = new Image(); img.alt = ""; img.loading = "lazy"; img.decoding = "async";
    img.onerror = () => { if (++i < tries.length) img.src = tries[i]; else { img.remove(); box.prepend(el("div", "initial", (g.title || "?").trim()[0])); } };
    img.src = tries[0]; box.append(img);
    if (withPlay) { const p = el("div", "play"); p.append(el("span", null, "▶")); box.append(p); }
    return box;
  }
  function tagRow(g) {
    const t = el("div", "tags");
    (g.tags || []).forEach((x) => t.append(el("span", "tag", x)));
    if (g.controls) t.append(el("span", "tag ctl", "✋ " + g.controls));
    return t;
  }

  function card(g, i) {
    const a = el("a", "card"); a.href = href(g);
    a.style.setProperty("--c", g.color || "#2ef2ff"); a.style.setProperty("--i", i);
    const b = badgeText(g); if (b) a.append(el("span", "badge", b));
    a.append(cover(g, true));
    const body = el("div", "body");
    body.append(el("h3", null, g.title), tagRow(g), el("p", null, g.description || ""));
    const foot = el("div", "foot"), sc = el("div", "score");
    sc.append(el("small", null, "HIGH SCORE"), el("b", null, String(best(g))));
    foot.append(sc);
    if (g.version) foot.append(el("span", "ver", "v" + g.version));
    foot.append(el("span", "btn-play", "PLAY ▶"));
    body.append(foot); a.append(body);
    a.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      const r = a.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      a.style.setProperty("--ry", (x * 8).toFixed(2) + "deg"); a.style.setProperty("--rx", (-y * 8).toFixed(2) + "deg");
    });
    a.addEventListener("pointerleave", () => { a.style.removeProperty("--rx"); a.style.removeProperty("--ry"); });
    return a;
  }

  function featured() {
    if (!games.length) return;
    const g = games.find((x) => x.featured) || [...games].sort((a, b) => (Date.parse(b.updated) || 0) - (Date.parse(a.updated) || 0))[0];
    const box = el("a", "featured"); box.href = href(g); box.style.setProperty("--c", g.color || "#2ef2ff");
    box.append(cover(g, false));
    const info = el("div", "info");
    info.append(el("span", "kicker", "★ FEATURED GAME"), el("h3", null, g.title), tagRow(g), el("p", null, g.description || ""));
    const row = el("div", "row"), sc = el("div", "score");
    row.append(el("span", "btn-play", "PLAY NOW ▶"));
    sc.append(el("small", null, "YOUR HIGH SCORE"), el("b", null, String(best(g))));
    row.append(sc); info.append(row); box.append(info);
    $("featuredSlot").append(box); $("featured").hidden = false;
  }

  let filter = "All";
  function render() {
    const list = $("cards"); list.innerHTML = "";
    const shown = games.filter((g) => filter === "All" || (g.tags || []).includes(filter));
    shown.forEach((g, i) => list.append(card(g, i)));
    if (!shown.length) list.append(el("p", "empty", "No games with that tag yet."));
    if (filter === "All") {
      const s = el("div", "soon"); s.setAttribute("aria-hidden", "true");
      s.innerHTML = '<div><div class="plus">+</div><b>COMING SOON</b>New cartridge in development<i>_</i></div>';
      list.append(s);
    }
  }
  function filters() {
    const tags = ["All", ...new Set(games.flatMap((g) => g.tags || []))];
    if (tags.length <= 2) return;
    tags.forEach((t) => {
      const b = el("button", "chip", t); b.type = "button"; b.setAttribute("aria-pressed", String(t === filter));
      b.addEventListener("click", () => { filter = t; $("filters").querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.textContent === t))); render(); });
      $("filters").append(b);
    });
  }
  function count(node, end) {
    const t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / 900); node.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString("en-US"); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }

  featured(); filters(); render();
  count($("statGames"), games.length);
  count($("statScore"), games.reduce((s, g) => s + best(g), 0));
})();
