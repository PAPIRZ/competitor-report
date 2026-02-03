(function () {
  const data = window.reportData;
  if (!data) {
    document.getElementById("app").innerHTML =
      "<div class='card'>未找到 reportData（请确认 reportData.js 已正确引入）</div>";
    return;
  }

  const $ = (id) => document.getElementById(id);

  const productNameEl = $("productName");
  const subtitleEl = $("subtitle");
  const lastUpdatedEl = $("lastUpdated");
  const confidentialEl = $("confidential");

  const positioningEl = $("positioning");
  const highlightsEl = $("highlights");
  const competitorsEl = $("competitors");
  const battlecardsEl = $("battlecards");

  const search = $("search");
  const matrixTree = $("matrixTree");
  const matrixDetail = $("matrixDetail");

  const competitorNames = (data.competitors || []).map((c) => c.name);

  // Header/meta
  productNameEl.textContent = data.meta?.productName || "Competitive Report";
  subtitleEl.textContent = data.meta?.subtitle || "—";
  lastUpdatedEl.textContent = data.meta?.lastUpdated || "—";
  confidentialEl.textContent = data.meta?.confidential || "—";

  // Overview
  positioningEl.textContent = data.overview?.positioning || "—";
  (data.overview?.highlights || []).forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    highlightsEl.appendChild(li);
  });

  // Landscape
  (data.competitors || []).forEach((c) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="row space-between">
        <div class="h3">${escapeHtml(c.name)}</div>
        <span class="pill">${escapeHtml(c.tier || "")}</span>
      </div>
      <div class="muted">${escapeHtml(c.tagline || "")}</div>
    `;
    competitorsEl.appendChild(div);
  });

  // Battlecards
  (data.battlecards || []).forEach((b) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <div class="row space-between">
        <div class="h3">vs ${escapeHtml(b.vs)}</div>
        <span class="pill">${escapeHtml(b.priority)}优先</span>
      </div>
      <div class="mt8">${escapeHtml(b.oneLiner)}</div>
    `;
    battlecardsEl.appendChild(div);
  });

  // ===== Feature tree & table (NO Elven column) =====

  function parseCategory(raw) {
    // raw like: "1. 数据导入与账户管理 / 账户接入与管理"
    const out = { mainIndex: "", mainName: "", subName: raw || "" };

    if (!raw) return out;

    if (raw.includes("/")) {
      const parts = raw.split("/");
      const left = parts[0].trim();
      out.subName = parts[1].trim();

      const m = left.match(/^(\d+)\.\s*(.+)$/);
      if (m) {
        out.mainIndex = m[1];
        out.mainName = m[2];
      } else {
        out.mainName = left;
      }
    } else {
      const m = raw.match(/^(\d+)\.\s*(.+)$/);
      if (m) {
        out.mainIndex = m[1];
        out.mainName = m[2];
        out.subName = "";
      } else {
        out.mainName = raw;
        out.subName = "";
      }
    }

    return out;
  }

  function buildFeatureTree(filterText) {
    const q = (filterText || "").trim().toLowerCase();

    const groups = new Map();

    (data.featureMatrix || []).forEach((cat) => {
      const raw = cat.category || "";
      const p = parseCategory(raw);

      const featuresFiltered = (cat.features || []).filter((f) => {
        if (!q) return true;
        const name = String(f.name || "").toLowerCase();
        const catName = String(raw).toLowerCase();
        return name.includes(q) || catName.includes(q);
      });

      if (featuresFiltered.length === 0) return;

      const key = `${p.mainIndex}||${p.mainName}`;
      if (!groups.has(key)) {
        groups.set(key, {
          mainIndex: p.mainIndex,
          mainName: p.mainName || raw,
          items: [],
        });
      }

      groups.get(key).items.push({
        subName: p.subName || p.mainName || raw,
        categoryRaw: raw,
        features: featuresFiltered,
      });
    });

    const groupList = Array.from(groups.values()).sort((a, b) => {
      const ai = parseInt(a.mainIndex || "999", 10);
      const bi = parseInt(b.mainIndex || "999", 10);
      return ai - bi;
    });

    return groupList;
  }

  function renderFeatureTreeAndDetail() {
    matrixTree.innerHTML = "";
    matrixDetail.innerHTML = "";

    // Title card
    const titleCard = document.createElement("div");
    titleCard.className = "treeGroup";
    titleCard.innerHTML = `
      <div class="treeTitle">竞品功能模块</div>
      <div class="muted mt8">点击子模块查看对应的竞品对比表（已隐藏 Elven 列）。</div>
    `;
    matrixTree.appendChild(titleCard);

    const groups = buildFeatureTree(search.value);

    let firstItem = null;

    groups.forEach((g) => {
      const groupEl = document.createElement("div");
      groupEl.className = "treeGroup";

      groupEl.innerHTML = `
        <div class="treeGroupHeader">
          <div class="treeGroupIndex">${escapeHtml(g.mainIndex || "")}</div>
          <div class="treeGroupName">${escapeHtml(g.mainName || "")}</div>
        </div>
        <div class="treeItems"></div>
      `;

      const itemsWrap = groupEl.querySelector(".treeItems");

      g.items.forEach((it) => {
        if (!firstItem) firstItem = it;

        const row = document.createElement("div");
        row.className = "treeItem";
        row.dataset.category = it.categoryRaw;

        row.innerHTML = `
          <span class="treeCaret">▸</span>
          <span>${escapeHtml(it.subName)}</span>
          <span class="muted" style="margin-left:auto">${it.features.length} 条</span>
        `;

        row.addEventListener("click", () => {
          document
            .querySelectorAll(".treeItem")
            .forEach((n) => n.classList.remove("treeItemActive"));
          row.classList.add("treeItemActive");

          renderDetailTable(it);
        });

        itemsWrap.appendChild(row);
      });

      matrixTree.appendChild(groupEl);
    });

    if (firstItem) {
      const firstNode = matrixTree.querySelector(".treeItem");
      if (firstNode) firstNode.classList.add("treeItemActive");
      renderDetailTable(firstItem);
    } else {
      matrixDetail.innerHTML = `<div class="card">没有匹配的功能点（请清空搜索）。</div>`;
    }
  }

  function renderDetailTable(item) {
    matrixDetail.innerHTML = "";

    const p = parseCategory(item.categoryRaw);

    const card = document.createElement("div");
    card.className = "card";

    // ✅ 表格：功能点 + 竞品列（去掉 Elven / ourProduct）
    card.innerHTML = `
      <div class="row space-between">
        <div class="h3">${escapeHtml(p.mainIndex ? `${p.mainIndex}. ${p.mainName}` : p.mainName)}${p.subName ? ` / ${escapeHtml(p.subName)}` : ""}</div>
        <div class="muted">${item.features.length} 条</div>
      </div>

      <div class="tableWrap mt12">
        <table class="table">
          <thead>
            <tr>
              <th style="min-width:320px">功能点</th>
              ${competitorNames.map((n) => `<th style="min-width:110px">${escapeHtml(n)}</th>`).join("")}
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    `;

    const tbody = card.querySelector("tbody");

    item.features.forEach((f) => {
      const tr = document.createElement("tr");

      const notes = f._notes || {};

      const tdName = document.createElement("td");
      tdName.className = "feat";
      tdName.textContent = f.name || "";
      tr.appendChild(tdName);

      competitorNames.forEach((n) => {
        tr.appendChild(statusCell(f[n], notes[n]));
      });

      tbody.appendChild(tr);
    });

    matrixDetail.appendChild(card);
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

  search.addEventListener("input", () => renderFeatureTreeAndDetail());
  renderFeatureTreeAndDetail();
})();
