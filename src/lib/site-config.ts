export const siteConfig = {
  name: "领跃协同制造管理系统",
  description:
    "领跃（LeanLeap）协同制造管理云平台，打通采购、销售、生产、库存、财务、成本到经营分析的全业务链路，助力制造企业实现一体化数字化经营。",
  url: "https://www.leanleap.app", // 占位域名，后续可替换
  loginUrl: "https://leanleap.app/login", // 产品登录入口（领跃产品主域）
  ogImage: "https://www.leanleap.app/logo.svg",
  logo: "/logo.svg",
  creator: "上海逾迈信息科技有限公司",
  keywords: [
    "协同制造管理",
    "制造业ERP",
    "供应链管理",
    "生产管理",
    "财务管理",
    "成本核算",
    "多租户SaaS",
    "工作流审批",
    "数字化经营"
  ],
  navigation: {
    main: [
      {
        title: "产品",
        href: "/products",
        description: "协同制造管理的核心业务模块"
      },
      {
        title: "解决方案",
        href: "/solutions",
        description: "面向不同制造场景的解决方案"
      },
      {
        title: "行业应用",
        href: "/industries",
        description: "各制造行业的应用案例"
      },
      {
        title: "价格",
        href: "/pricing",
        description: "灵活的多租户订阅方案"
      },
      {
        title: "案例研究",
        href: "/case-studies",
        description: "客户成功案例"
      },
      {
        title: "资源",
        href: "/resources",
        description: "技术文档和资源"
      },
      {
        title: "关于我们",
        href: "/about",
        description: "了解领跃团队"
      },
      {
        title: "联系我们",
        href: "/contact",
        description: "获取专业支持"
      }
    ],
    footer: [
      {
        title: "产品",
        items: [
          { title: "供应链管理", href: "/products#supply-chain" },
          { title: "生产制造", href: "/products#manufacturing" },
          { title: "财务管理", href: "/products#finance" },
          { title: "经营报表", href: "/products#analytics" }
        ]
      },
      {
        title: "解决方案",
        items: [
          { title: "汽车制造", href: "/solutions#automotive" },
          { title: "电子制造", href: "/solutions#electronics" },
          { title: "机械制造", href: "/solutions#machinery" },
          { title: "化工制造", href: "/solutions#chemical" }
        ]
      },
      {
        title: "资源",
        items: [
          { title: "技术文档", href: "/resources#docs" },
          { title: "API 参考", href: "/resources#api" },
          { title: "最佳实践", href: "/resources#practices" },
          { title: "培训中心", href: "/resources#training" }
        ]
      },
      {
        title: "公司",
        items: [
          { title: "关于我们", href: "/about" },
          { title: "职业机会", href: "/about#careers" },
          { title: "新闻动态", href: "/about#news" },
          { title: "联系我们", href: "/contact" }
        ]
      }
    ],
    legal: [
      { title: "隐私政策", href: "/legal/privacy" },
      { title: "服务条款", href: "/legal/terms" }
    ]
  },
  contact: {
    email: "ch@leapingtech.com",
    phone: "+8613916625509",
    address: "上海市宁夏路201号"
  },
  social: {
    wechat: "#",
    weibo: "#",
    linkedin: "#"
  }
}
