export interface CaseStudy {
  slug: string
  title: string
  company: string
  industry: string
  challenge: string
  solution: string
  results: string[]
  metrics: {
    name: string
    value: string
    improvement: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  publishedAt: string
  featured: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "automotive-manufacturer-digital-transformation",
    title: "某知名汽车制造商数字化转型",
    company: "某知名汽车制造商",
    industry: "汽车制造",
    challenge: "该企业面临供应链协同低效、生产工单与质检脱节、库存积压严重等问题，急需协同制造管理升级提升竞争力。",
    solution: "部署领跃协同制造管理平台（LeanLeap），打通采购到入库、销售到出库、生产工单与质检，实现供应链、生产制造与财务的一体化管理。",
    results: [
      "订单交付准时率提升40%",
      "产品质检不良率降低85%",
      "库存周转率提升60%",
      "采购到入库周期缩短35%"
    ],
    metrics: [
      { name: "交付准时率", value: "40%", improvement: "提升" },
      { name: "质检不良率", value: "85%", improvement: "降低" },
      { name: "库存周转", value: "60%", improvement: "提升" },
      { name: "采购周期", value: "35%", improvement: "缩短" }
    ],
    testimonial: {
      quote: "领跃平台帮助我们打通了供应链与生产制造的协同管理，效果超出预期。",
      author: "张总",
      role: "生产总监"
    },
    publishedAt: "2024-01-15",
    featured: true
  },
  {
    slug: "electronics-factory-smart-upgrade",
    title: "电子制造企业协同制造升级",
    company: "某大型电子制造企业",
    industry: "电子制造",
    challenge: "多产品线并行生产，BOM 与工艺路线复杂，需要提升生产协同与交付响应速度。",
    solution: "实施领跃生产工单、BOM 与工艺路线管理，结合供应链协同，优化生产计划与资源配置。",
    results: [
      "生产计划准确率提升至98%",
      "产线切换时间减少70%",
      "在制品库存降低50%",
      "客户交期满足率达到99%"
    ],
    metrics: [
      { name: "计划准确率", value: "98%", improvement: "达到" },
      { name: "切换时间", value: "70%", improvement: "减少" },
      { name: "在制品库存", value: "50%", improvement: "降低" },
      { name: "交期满足率", value: "99%", improvement: "达到" }
    ],
    publishedAt: "2024-02-20",
    featured: true
  },
  {
    slug: "machinery-manufacturer-efficiency-optimization",
    title: "机械制造企业效率优化项目",
    company: "某机械装备制造企业",
    industry: "机械制造",
    challenge: "传统生产模式协同效率低下，成本核算困难，亟需提升一体化管理水平。",
    solution: "部署领跃协同制造管理平台，实现生产工单、质检与成本核算、财务一体化管控。",
    results: [
      "综合生产效率提升45%",
      "制造成本降低20%",
      "产品质量稳定性提升",
      "管理效率大幅提升"
    ],
    metrics: [
      { name: "生产效率", value: "45%", improvement: "提升" },
      { name: "制造成本", value: "20%", improvement: "降低" },
      { name: "质量稳定性", value: "优秀", improvement: "达到" },
      { name: "管理效率", value: "显著", improvement: "提升" }
    ],
    publishedAt: "2024-03-10",
    featured: false
  },
  {
    slug: "chemical-plant-safety-digitalization",
    title: "化工企业供应链与财务一体化",
    company: "某精细化工企业",
    industry: "化工制造",
    challenge: "原料批次多、对账流程繁琐，财务月结周期长，急需打通供应链与财务一体化管理。",
    solution: "部署领跃协同制造管理平台，贯通采购入库、批次库存、应收应付对账与成本月结。",
    results: [
      "批次追溯覆盖率达到100%",
      "财务对账效率提升95%",
      "月结对账周期缩短80%",
      "库存账实相符率100%"
    ],
    metrics: [
      { name: "批次追溯", value: "100%", improvement: "达到" },
      { name: "对账效率", value: "95%", improvement: "提升" },
      { name: "月结周期", value: "80%", improvement: "缩短" },
      { name: "账实相符率", value: "100%", improvement: "达到" }
    ],
    publishedAt: "2024-04-05",
    featured: false
  }
]

export function getFeaturedCaseStudies() {
  return caseStudies.filter(cs => cs.featured)
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find(cs => cs.slug === slug)
}

export function getAllCaseStudies() {
  return caseStudies.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}