(function () {
  const data = window.reportData;
  if (!data) {
    document.getElementById("app").innerHTML =
      "<div class='card'>未找到 reportData（请确认 reportData.js 已正确引入）</div>";
    return;
  }

  const $ = (id) => document.getElementById(id);

  $("productName").textContent = data.meta.productName;
  $("subtitle").textContent = data.meta.subtitle;
  $("lastUpdated").textContent = data.meta.lastUpdated;
  $("confidential").textContent = data.meta.confidential;

  $("positioning").textContent = data.overview.positioning;
  const hl = $("highlights");
  data.overview.highlights.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    hl.appendChild(li);
  });

  const compWrap = $("competitors");
  data.competitors.forEach((c) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="row space-between">
        <div class="h3">${escapeHtml(c.name)}</div>
        <span class="pill">${escapeHtml(c.tier)}</span>
      </div>
      <div class="muted">${escapeHtml(c.tagline || "")}</div>
    `;
    compWrap.appendChild(div);
  });

  const bcWrap = $("battlecards");
  data.battlecards.forEach((b) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="row space-between">
        <div class="h3">vs ${escapeHtml(b.vs)}</div>
        <span class="pill">${escapeHtml(b.priority)}优先</span>
      </div>
      <div class="mt8">${escapeHtml(b.oneLiner)}</div>
    `;
    bcWrap.appendChild(div);
  });

  const matrixWrap = $("matrix");
  // === Feature Matrix Title ===
const matrixTitle = document.createElement("div");
matrixTitle.className = "card";
matrixTitle.innerHTML = `
  <div class="h2">竞品功能模块</div>
  <div class="muted mt8">
    按核心流程 → 子模块展开，对比 Elven 与主要竞品能力覆盖
  </div>
`;
matrixWrap.appendChild(matrixTitle);

  const competitorNames = data.competitors.map((c) => c.name);

   function renderMatrix(filterText) {
    matrixWrap.innerHTML = "";
    const q = (filterText || "").trim().toLowerCase();

    data.featureMatrix.forEach((cat, idx) => {
      const features = (cat.features || []).filter((f) => {
        if (!q) return true;
        const name = String(f.name || "").toLowerCase();
        const catName = String(cat.category || "").toLowerCase();
        return name.includes(q) || catName.includes(q);
      });

      if (features.length === 0) return;

      const competitorNames = data.competitors.map((c) => c.name);

      // ✅ 用 details/summary 让整个模块可折叠
      const wrapper = document.createElement("details");
      wrapper.className = "card";
      wrapper.open = false; // 默认收起；如果你想默认展开改成 true

      const summary = document.createElement("summary");
      summary.className = "row space-between";
      summary.style.cursor = "pointer";
      summary.style.listStyle = "none"; // 让部分浏览器的默认三角不占位
      // === 解析 category：核心流程 / 子模块 ===
const raw = cat.category || "";
let mainIndex = "";
let mainName = "";
let subName = raw;

if (raw.includes("/")) {
  const parts = raw.split("/");
  const left = parts[0].trim();   // "1. 数据导入与账户管理"
  subName = parts[1].trim();      // "账户接入与管理"

  const match = left.match(/^(\d+)\.\s*(.+)$/);
  if (match) {
    mainIndex = match[1];         // "1"
    mainName = match[2];          // "数据导入与账户管理"
  }
}

summary.innerHTML = `
  <div class="h3">
    ${mainIndex ? `${mainIndex}. ${escapeHtml(mainName)} / ` : ""}
    ${escapeHtml(subName)}
  </div>
  <div class="muted">${features.length} 条</div>
`;

      // 防止 summary 点击选中文字导致怪异体验
      summary.addEventListener("mousedown", (e) => e.preventDefault());

      const content = document.createElement("div");
      content.className = "mt12";

      content.innerHTML = `
        <div class="tableWrap">
          <table class="table">
            <thead>
              <tr>
                <th style="min-width:280px">Elven 功能点</th>
                <th style="min-width:90px">Elven</th>
                ${competitorNames
                  .map((n) => `<th style="min-width:100px">${escapeHtml(n)}</th>`)
                  .join("")}
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      `;

      const tbody = content.querySelector("tbody");

      features.forEach((f) => {
        const tr = document.createElement("tr");

        const notes = f._notes || {};
        const tdName = document.createElement("td");
        tdName.className = "feat";
        tdName.textContent = f.name || "";
        tr.appendChild(tdName);

        tr.appendChild(statusCell(f.ourProduct, null));

        competitorNames.forEach((n) => {
          tr.appendChild(statusCell(f[n], notes[n]));
        });

        tbody.appendChild(tr);
      });

      wrapper.appendChild(summary);
      wrapper.appendChild(content);
      matrixWrap.appendChild(wrapper);
    });
  }


  function statusCell(status, note) {
    const td = document.createElement("td");
    const s = (status || "-").trim();
    td.className = "center";
    const span = document.createElement("span");
    span.className = "badge " + badgeClass(s);
    span.textContent = s;
    if (note) span.title = note;
    td.appendChild(span);
    return td;
  }

  function badgeClass(s) {
    if (s === "支持") return "ok";
    if (s === "部分支持") return "partial";
    if (s === "不支持") return "no";
    return "unknown";
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  const search = $("search");
  search.addEventListener("input", () => renderMatrix(search.value));
  renderMatrix("");
})();
