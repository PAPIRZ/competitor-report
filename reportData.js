window.reportData = {
  meta: {
    productName: "Elven",
    subtitle: "竞品报告（静态版 / 来自Excel）",
    lastUpdated: "2026-02-03",
    confidential: "Internal use only",
  },
  overview: {
    positioning:
      "这是一个静态竞品报告页面（GitHub Pages）。Feature Matrix 使用树状目录（图2格式），点击子模块查看竞品对比表（已隐藏 Elven 列）。",
    highlights: [
      "Feature Matrix：树状目录 → 点击子模块显示表格",
      "表格仅展示竞品对比（Cryptio/Tres/Bitwave/Coinledger/Softledger）",
      "后续可把 Excel 全量 22 个子模块 / 71 条功能点全部导入",
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
        {
          name: "链上钱包接入。",
          Cryptio: "部分支持",
          Tres: "部分支持",
          Bitwave: "部分支持",
          Coinledger: "部分支持",
          Softledger: "部分支持",
        },
        {
          name: "交易所（CEX）账户接入。",
          Cryptio: "部分支持",
          Tres: "部分支持",
          Bitwave: "部分支持",
          Coinledger: "部分支持",
          Softledger: "部分支持",
        },
        {
          name: "托管账户接入。",
          Cryptio: "部分支持",
          Tres: "部分支持",
          Bitwave: "部分支持",
          Coinledger: "不支持",
          Softledger: "不支持",
        },
      ],
    },
    {
      category: "1. 数据导入与账户管理 / 资金看板与余额校验",
      features: [
        {
          name: "资金看板（Balance Dashboard）实时监控。",
          Cryptio: "部分支持",
          Tres: "部分支持",
          Bitwave: "部分支持",
          Coinledger: "不支持",
          Softledger: "部分支持",
        },
        {
          name: "自动化余额校验任务（期初+变动=期末）。",
          Cryptio: "部分支持",
          Tres: "部分支持",
          Bitwave: "部分支持",
          Coinledger: "不支持",
          Softledger: "部分支持",
        },
      ],
    },
    {
      category: "2. 对账与流水治理 / 对账任务与差异处理",
      features: [
        {
          name: "对账任务创建（按期间/账户/币种）。",
          Cryptio: "部分支持",
          Tres: "部分支持",
          Bitwave: "部分支持",
          Coinledger: "不支持",
          Softledger: "部分支持",
        },
        {
          name: "差异识别（缺失、重复、金额不一致）。",
          Cryptio: "部分支持",
          Tres: "部分支持",
          Bitwave: "部分支持",
          Coinledger: "不支持",
          Softledger: "部分支持",
        },
      ],
    },
  ],
  battlecards: [
    { vs: "Cryptio", priority: "高", oneLiner: "主打资金闭环与可审计对账；对方强在纯加密核算与报表。" },
    { vs: "Tres", priority: "高", oneLiner: "主打复杂组织/多资金渠道/对账闭环；对方偏轻量起步。" },
    { vs: "Bitwave", priority: "中", oneLiner: "主打端到端接入+对账闭环；对方偏审计导出交付。" },
    { vs: "Coinledger", priority: "低", oneLiner: "对方偏个人报税；你强调企业级多实体与对账闭环。" },
    { vs: "Softledger", priority: "中", oneLiner: "对方传统会计；你强调链上/交易所/托管解析能力。" },
  ],
  updates: [],
};
