window.reportData = {
  meta: {
    productName: "Elven",
    subtitle: "竞品报告（静态版 / 来自Excel）",
    lastUpdated: "2026-02-03",
    confidential: "Internal use only",
  },
  overview: {
    positioning: "这是一个静态竞品报告页面（GitHub Pages）。Feature Matrix 已改为图2目录结构，并隐藏 Elven 列。",
    highlights: [
      "Feature Matrix：树状目录 → 点击子模块显示表格",
      "表格仅展示竞品对比列（Cryptio/Tres/Bitwave/Coinledger/Softledger）",
      "后续可把 Excel 全量数据替换进 reportData.js",
    ],
  },
  competitors: [
    { name: "Cryptio", tier: "Tier 1", tagline: "企业级加密财务与报表平台" },
    { name: "Tres", tier: "Tier 1", tagline: "加密财务合规与对账平台" },
    { name: "Bitwave", tier: "Tier 2", tagline: "偏审计导出与企业财务合规" },
    { name: "Coinledger", tier: "Tier 3", tagline: "个人税务/报税工具" },
    { name: "Softledger", tier: "Tier 2", tagline: "传统会计/ERP系统（加密能力较弱）" },
  ],
  featureMatrix: [
    {
      category: "1. 数据导入与账户管理 / 账户接入与管理",
      features: [
        { name: "链上钱包接入。", Cryptio: "部分支持", Tres: "部分支持", Bitwave: "部分支持", Coinledger: "部分支持", Softledger: "部分支持" },
        { name: "交易所（CEX）账户接入。", Cryptio: "部分支持", Tres: "部分支持", Bitwave: "部分支持", Coinledger: "部分支持", Softledger: "部分支持" },
      ],
    },
    {
      category: "1. 数据导入与账户管理 / 资金看板与余额校验",
      features: [
        { name: "资金看板（Balance Dashboard）实时监控。", Cryptio: "部分支持", Tres: "部分支持", Bitwave: "部分支持", Coinledger: "不支持", Softledger: "部分支持" },
        { name: "自动化余额校验任务（期初+变动=期末）。", Cryptio: "部分支持", Tres: "部分支持", Bitwave: "部分支持", Coinledger: "不支持", Softledger: "部分支持" },
      ],
    },
    {
      category: "2. 对账与流水治理 / 对账任务与差异处理",
      features: [
        { name: "对账任务创建（按期间/账户/币种）。", Cryptio: "部分支持", Tres: "部分支持", Bitwave: "部分支持", Coinledger: "不支持", Softledger: "部分支持" },
      ],
    },
  ],
  battlecards: [
    { vs: "Cryptio", priority: "高", oneLiner: "主打资金闭环与可审计对账；对方强在纯加密核算与报表。" },
    { vs: "Tres", priority: "高", oneLiner: "主打复杂组织/多资金渠道/对账闭环；对方偏轻量起步。" },
  ],
  updates: [],
};
