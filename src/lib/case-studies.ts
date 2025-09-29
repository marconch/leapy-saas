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
    challenge: "该企业面临生产效率低下、质量管控困难、库存积压严重等问题，急需数字化转型提升竞争力。",
    solution: "部署领跃智能制造平台，实现生产全流程数字化管理，包括MES系统、设备管理、质量控制等模块。",
    results: [
      "生产效率提升40%",
      "产品质量缺陷率降低85%",
      "库存周转率提升60%",
      "设备综合效率提升35%"
    ],
    metrics: [
      { name: "生产效率", value: "40%", improvement: "提升" },
      { name: "缺陷率", value: "85%", improvement: "降低" },
      { name: "库存周转", value: "60%", improvement: "提升" },
      { name: "设备效率", value: "35%", improvement: "提升" }
    ],
    testimonial: {
      quote: "领跃平台帮助我们实现了生产管理的数字化升级，效果超出预期。",
      author: "张总",
      role: "生产总监"
    },
    publishedAt: "2024-01-15",
    featured: true
  },
  {
    slug: "electronics-factory-smart-upgrade",
    title: "电子制造企业智能工厂升级",
    company: "某大型电子制造企业",
    industry: "电子制造",
    challenge: "多产品线并行生产，工艺复杂，需要提升生产柔性和响应速度。",
    solution: "实施智能排产系统和实时监控平台，优化生产计划和资源配置。",
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
    challenge: "传统生产模式效率低下，成本控制困难，亟需提升管理水平。",
    solution: "部署综合管理平台，实现生产、质量、成本一体化管控。",
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
    title: "化工企业安全生产数字化",
    company: "某精细化工企业",
    industry: "化工制造",
    challenge: "安全生产要求严格，需要实现全过程安全监控和风险预警。",
    solution: "建设安全生产监控平台，实现风险实时监测和预警。",
    results: [
      "安全事故率降至零",
      "风险预警准确率95%",
      "应急响应时间缩短80%",
      "安全合规率100%"
    ],
    metrics: [
      { name: "安全事故率", value: "0", improvement: "降至" },
      { name: "预警准确率", value: "95%", improvement: "达到" },
      { name: "响应时间", value: "80%", improvement: "缩短" },
      { name: "合规率", value: "100%", improvement: "达到" }
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