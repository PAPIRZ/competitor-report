window.reportData = {
  "meta": {
    "productName": "Elven",
    "subtitle": "竞品报告（静态版 / 来自Excel）",
    "lastUpdated": "2026-02-03",
    "confidential": "Internal use only"
  },
  "overview": {
    "positioning": "静态竞品报告页面（GitHub Pages）。Feature Matrix 使用树状目录（图2格式），点击子模块查看竞品对比表（已隐藏 Elven 列）。",
    "highlights": [
      "已导入 Excel：22 个子模块 / 71 条功能点",
      "表格仅展示竞品对比（Cryptio / Tres / Bitwave / Coinledger / Softledger）",
      "鼠标悬停在“支持/部分支持/不支持”上可看到备注（来自Excel文本）"
    ]
  },
  "competitors": [
    {
      "name": "Cryptio",
      "tier": "Tier 1",
      "tagline": "企业级加密财务与报表平台"
    },
    {
      "name": "Tres",
      "tier": "Tier 1",
      "tagline": "加密财务合规与对账平台"
    },
    {
      "name": "Bitwave",
      "tier": "Tier 2",
      "tagline": "偏审计导出与企业财务合规"
    },
    {
      "name": "Coinledger",
      "tier": "Tier 3",
      "tagline": "个人税务/报税工具"
    },
    {
      "name": "Softledger",
      "tier": "Tier 2",
      "tagline": "传统会计/ERP系统（加密能力较弱）"
    }
  ],
  "featureMatrix": [
    {
      "category": "1. 数据导入与账户管理 / 账户接入与管理",
      "features": [
        {
          "name": "链上钱包接入。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "部分支持",
          "Softledger": "部分支持",
          "_notes": {
            "Cryptio": "30+ 主流公链钱包接入，覆盖标准转账与常见 DeFi 协议，但对复杂自定义合约解析能力有限",
            "Tres": "主流链钱包同步，适用于美企合规场景，对亚洲链生态与新兴协议支持较慢",
            "Bitwave": "ETH / BTC 等主流链钱包数据导入，不支持深度 DeFi 协议级解析",
            "Coinledger": "仅支持部分链的钱包数据导入，用于税务申报，不适合企业级账务管理",
            "Softledger": "个人用户常见钱包导入，不支持企业级地址分组与权限管理"
          }
        },
        {
          "name": "交易所（CEX）账户接入。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "部分支持",
          "Softledger": "部分支持",
          "_notes": {
            "Cryptio": "50+ 家主流交易所 API 接入，覆盖常见交易类型，但对子账户权限与字段映射灵活度有限",
            "Tres": "30+ 家 CEX API 接入，适合中小企业合规使用",
            "Bitwave": "25+ 家交易所数据同步，不支持复杂账户结构",
            "Coinledger": "仅支持美国主流交易所用于报税",
            "Softledger": "个人用户常见交易所导入"
          }
        },
        {
          "name": "托管账户接入。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "传统银行（Banks）账户接入。",
          "Cryptio": "不支持",
          "Tres": "不支持",
          "Bitwave": "不支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "传统银行账户接入",
            "Tres": "传统银行账户接入",
            "Bitwave": "传统银行账户接入",
            "Coinledger": "传统银行账户接入",
            "Softledger": "传统银行账户接入"
          }
        },
        {
          "name": "支付渠道接入。",
          "Cryptio": "不支持",
          "Tres": "不支持",
          "Bitwave": "不支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "支付渠道接入",
            "Tres": "支付渠道接入",
            "Bitwave": "支付渠道接入",
            "Coinledger": "支付渠道接入",
            "Softledger": "支付渠道接入"
          }
        },
        {
          "name": "账户分类管理与初始余额设置。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "1. 数据导入与账户管理 / 数据自动化获取与更新",
      "features": [
        {
          "name": "Elven 内置数据API服务自动获取。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "Open API 导入客户自定义业务数据（客户自有订单系统/审批系统/中台系统等）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "标准 CSV 模板自助上传导入。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "1. 数据导入与账户管理 / 资金看板与余额校验",
      "features": [
        {
          "name": "资金看板（Balance Dashboard）实时监控。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "自动化余额校验任务（期初+变动=期末）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "增量数据定时更新。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "2. 币种与价格管理 / 币种管理与映射",
      "features": [
        {
          "name": "币种管理（增、删、改），支持自定义币种。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "币种映射：异构币种标识（Symbol）映射至标准 ID。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "基于合约地址自定义小币种及其标识。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "2. 币种与价格管理 / 价格源管理",
      "features": [
        {
          "name": "Elven 内置标准价格 API 获取。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "自定义价格 API 接入。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "CSV 历史价格数据补录。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "交易明细初始成本/价格自动匹配。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "币种/价格修复引擎与治理",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "3. 交易清洗与自动化记账 / 交易数据标准化清洗",
      "features": [
        {
          "name": "链上交易（UTXO/EVM/Solana等）标准化。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "交易所交易（现货/合约/期货/理财/杠杆）识别 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "部分支持",
          "Softledger": "部分支持",
          "_notes": {
            "Cryptio": "50+ 家主流交易所 API 接入，覆盖常见交易类型，但对子账户权限与字段映射灵活度有限",
            "Tres": "30+ 家 CEX API 接入，适合中小企业合规使用",
            "Bitwave": "25+ 家交易所数据同步，不支持复杂账户结构",
            "Coinledger": "仅支持美国主流交易所用于报税",
            "Softledger": "个人用户常见交易所导入"
          }
        },
        {
          "name": "支付平台（OTC/收单/结算）流水标记 。",
          "Cryptio": "不支持",
          "Tres": "不支持",
          "Bitwave": "不支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "支付渠道接入",
            "Tres": "支付渠道接入",
            "Bitwave": "支付渠道接入",
            "Coinledger": "支付渠道接入",
            "Softledger": "支付渠道接入"
          }
        },
        {
          "name": "银行/托管流水字段提取与识别 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "原始币种与功能币种双重计量处理 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "3. 交易清洗与自动化记账 / 自动化标签识别",
      "features": [
        {
          "name": "自动化打标签引擎",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "多对一特殊交易识别（如现货交易、内部转账等） 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "手动修改标签",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "3. 交易清洗与自动化记账 / 会计分录批量自动生成",
      "features": [
        {
          "name": "会计规则引擎（自定义COA、记账模板）",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "交易流水自动生成分录 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "业务数据自动化记账（支持多借多贷）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "3. 交易清洗与自动化记账 / 分录管理",
      "features": [
        {
          "name": "手动创建与 CSV/OpenAPI 导入分录 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "分录审批流",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "分录详情页（明细信息、原始凭证）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "4. 对账管理 / 对账任务管理与配置",
      "features": [
        {
          "name": "对账任务创建与定时触发机制 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        },
        {
          "name": "对账数据集与匹配规则自定义 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        },
        {
          "name": "对账报告生成（差异评估与调整建议） 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        }
      ]
    },
    {
      "category": "4. 对账管理 / 对账类型",
      "features": [
        {
          "name": "余额校验：交易与余额对账（期初+变动=期末） 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        },
        {
          "name": "交易对账：交易与交易对账 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        },
        {
          "name": "余额对账：余额与余额对账 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        }
      ]
    },
    {
      "category": "4. 对账管理 / 复杂对账场景支持",
      "features": [
        {
          "name": "三方对账（业务-资金-账本）两两互核 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        },
        {
          "name": "多对多（M2M）复杂对账规则匹配 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        },
        {
          "name": "滚动对账（前期差异自动滚入下期） 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        },
        {
          "name": "复合对账（跨任务结果核对） 。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "链上与交易所对账，但跨系统资金流闭环能力有限",
            "Tres": "多账户对账，适合中小企业合规需求",
            "Bitwave": "交易级对账，对 DeFi 复杂交互支持有限",
            "Coinledger": "不提供企业级对账功能",
            "Softledger": "不提供企业级对账功能"
          }
        }
      ]
    },
    {
      "category": "5. 估值模块 / 重估策略与计价设定",
      "features": [
        {
          "name": "计价方法设定（FIFO/加权平均/个别计价）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "估值频次管理（每日/每月/每季度）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "估值颗粒度管理（大数据聚合维度）",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "5. 估值模块 / 计算引擎与资产类别覆盖",
      "features": [
        {
          "name": "加密现货及法币（外汇）重估。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "衍生品（合约/期货）估值。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "节点挖矿估值。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "OTC Broker Inventory 成本匹配。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "5. 估值模块 / 会计调账处理",
      "features": [
        {
          "name": "估值计算表自动生成。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "会计估值调账分录自定义配置。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "6. 报表模块 / 财务报表输出",
      "features": [
        {
          "name": "财务三张表（资产负债表/利润表/现金流表）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "总账表与科目余额表导出。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "6. 报表模块 / 加密资产专项披露",
      "features": [
        {
          "name": "加密资产持仓表。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "加密资产损益明细表。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "加密资产变动表。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "6. 报表模块 / 灵活导出与集成",
      "features": [
        {
          "name": "支持 CSV 格式批量导出。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "辅助核算字段自定义维度展示。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "多级 COA 报表展示。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "部分支持",
          "_notes": {
            "Cryptio": "提供标准财务报表，但自定义维度与集团合并能力有限",
            "Tres": "提供美式合规报表模板，灵活度较低",
            "Bitwave": "GAAP/IFRS 报表，主要面向北美市场",
            "Coinledger": "不提供企业财务报表",
            "Softledger": "仅提供税务报表，不支持经营分析"
          }
        }
      ]
    },
    {
      "category": "7. 基础设置 / 组织与安全基础管理",
      "features": [
        {
          "name": "多主体与多项目管理设置。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "RBAC 用户权限控制。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "操作审计日志（Audit Logs）。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "7. 基础设置 / 会计环境与核算规则",
      "features": [
        {
          "name": "会计期间与报告币种设置。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "标准及自定义科目表（COA）维护。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "多级 COA 支持。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "会计记账模板（Journal Type）配置。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "7. 基础设置 / ERP 集成",
      "features": [
        {
          "name": "Xero 集成。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        },
        {
          "name": "NetSuite 集成。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    },
    {
      "category": "7. 基础设置 / 税务",
      "features": [
        {
          "name": "新加坡 GST 支持。",
          "Cryptio": "部分支持",
          "Tres": "部分支持",
          "Bitwave": "部分支持",
          "Coinledger": "不支持",
          "Softledger": "不支持",
          "_notes": {
            "Cryptio": "标准功能，但企业级扩展能力有限",
            "Tres": "基础功能，偏美企合规场景",
            "Bitwave": "核心功能，灵活度有限",
            "Coinledger": "该企业级功能",
            "Softledger": "该企业级功能"
          }
        }
      ]
    }
  ],
  "battlecards": [
    {
      "vs": "Cryptio",
      "priority": "高",
      "oneLiner": "主打资金闭环与可审计对账；对方强在纯加密核算与报表。"
    },
    {
      "vs": "Tres",
      "priority": "高",
      "oneLiner": "主打复杂组织/多资金渠道/对账闭环；对方偏轻量起步。"
    },
    {
      "vs": "Bitwave",
      "priority": "中",
      "oneLiner": "对方偏审计导出；你强调对账闭环与流程化控制。"
    },
    {
      "vs": "Coinledger",
      "priority": "低",
      "oneLiner": "对方偏个人报税；你是企业级多实体与对账治理。"
    },
    {
      "vs": "Softledger",
      "priority": "中",
      "oneLiner": "对方传统ERP；你强调链上/交易所/托管解析能力。"
    }
  ],
  "updates": []
};
