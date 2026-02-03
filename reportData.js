window.reportData = {
  meta: {
    productName: "Elven",
    subtitle: "竞品报告（静态版）",
    lastUpdated: "2026-02-03",
    confidential: "Internal use only",
  },
  overview: {
    positioning: "测试：如果你看到这段文字，说明 reportData.js 已正确加载。",
    highlights: ["测试 1", "测试 2"],
  },
  competitors: [
    { name: "Cryptio", tier: "Tier 1", tagline: "test" },
    { name: "Tres", tier: "Tier 1", tagline: "test" },
  ],
  featureMatrix: [
    {
      category: "1. 数据导入与账户管理 / 账户接入与管理",
      features: [
        { name: "链上钱包接入。", ourProduct: "支持", Cryptio: "部分支持", Tres: "部分支持" },
      ],
    },
  ],
  battlecards: [{ vs: "Cryptio", priority: "高", oneLiner: "test" }],
  updates: [],
};
