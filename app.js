import { GAMES } from "./games.js";

const state = { q: "", genre: "All", flags: new Set(), sort: "featured" };
const $ = (id) => document.getElementById(id);
const GENRES = ["All", ...new Set(GAMES.map((g) => g.genre))];

const featuredScore = (g) => (g.lauta ? 4 : 0) + (g.hot ? 2 : 0) + (g.mp ? 0.5 : 0);
const SORTS = {
  featured: (a, b) => featuredScore(b) - featuredScore(a),
  az: (a, b) => a.title.localeCompare(b.title),
  new: (a, b) => b.year - a.year,
  old: (a, b) => a.year - b.year,
  stars: (a, b) => (b.stars || 0) - (a.stars || 0),
};

function matches(g) {
  const hay = `${g.title} ${g.by} ${g.platform} ${g.genre} ${g.note || ""}`.toLowerCase();
  if (state.q && !hay.includes(state.q)) return false;
  if (state.genre !== "All" && g.genre !== state.genre) return false;
  return [...state.flags].every((f) => g[f]);
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const host = (url) => new URL(url).hostname.replace(/^www\./, "");
// Must match slug() in the art generation script: images/<slug>.jpg
const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function card(g) {
  const badges = [
    g.down && `<span class="badge down">⛔ Offline</span>`,
    g.lauta && `<span class="badge lauta">⚡ Lauta</span>`,
    g.hot && `<span class="badge hot">🔥 Trending</span>`,
    g.mp && `<span class="badge">👥 Online</span>`,
  ].filter(Boolean).join("");
  const alts = (g.alt || []).map(([label, url]) =>
    `<a class="alt" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`).join("");
  const repo = g.repo
    ? `<a class="alt repo" href="https://github.com/${esc(g.repo)}" target="_blank" rel="noopener">★ ${g.stars.toLocaleString()}</a>` : "";
  return `
    <article class="card g-${g.genre.toLowerCase()}${g.down ? " down" : ""}">
      ${g.down ? "" : `<a class="play" href="${esc(g.url)}" target="_blank" rel="noopener" aria-label="Play ${esc(g.title)}"></a>`}
      <div class="art">
        <img src="images/${slug(g.title)}.jpg" alt="" loading="lazy" onerror="this.remove()">
        <span class="year">${g.year}</span>
        <span class="plat">${esc(g.platform)}</span>
        <span class="initial" aria-hidden="true">${esc(g.title[0])}</span>
        <span class="cta">▶ PLAY</span>
      </div>
      <div class="body">
        <div class="badges">${badges}</div>
        <h2>${esc(g.title)}</h2>
        <p class="meta">${esc(g.genre)} · port by ${esc(g.by)}</p>
        ${g.down ? `<p class="note">Host went offline. Check back later.</p>` : g.note ? `<p class="note">${esc(g.note)}</p>` : ""}
        <p class="host">${esc(host(g.url))}</p>
        ${alts || repo ? `<div class="alts">${alts}${repo}</div>` : ""}
      </div>
    </article>`;
}

function render() {
  const list = GAMES.filter(matches).sort((a, b) => (a.down || 0) - (b.down || 0) || SORTS[state.sort](a, b));
  $("grid").innerHTML = list.map(card).join("");
  $("empty").hidden = list.length > 0;
  $("count").textContent = list.length === GAMES.length ? GAMES.length : `${list.length}/${GAMES.length}`;
}

function setupControls() {
  $("genres").innerHTML = GENRES.map((g) =>
    `<button data-genre="${g}" aria-pressed="${g === "All"}">${g}</button>`).join("");
  $("genres").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    state.genre = b.dataset.genre;
    $("genres").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    render();
  });
  $("flags").querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", "false"));
  $("flags").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    const on = !state.flags.has(b.dataset.flag);
    on ? state.flags.add(b.dataset.flag) : state.flags.delete(b.dataset.flag);
    b.setAttribute("aria-pressed", on);
    render();
  });
  $("q").addEventListener("input", (e) => { state.q = e.target.value.trim().toLowerCase(); render(); });
  $("sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
}

setupControls();
render();
