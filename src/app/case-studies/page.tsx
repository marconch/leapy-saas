import type { Metadata } from "next"
import Link from "next/link"

// 案例研究页 —— 按 claude.ai/design "Portal design" 项目 CaseStudies.dc.html 逐值重构
// 卡片标题链接到既有 /case-studies/[slug] 详情页（视觉不变，悬停变红提示）

export const metadata: Metadata = {
  title: "客户案例",
  description:
    "领跃 LeanLeap 协同制造管理云平台的成功案例分享，展示在汽车、电子、机械、化工等行业的数字化转型成果。",
}

const FEATURED_CASES = [
  {
    slug: "automotive-manufacturer-digital-transformation",
    tag: "AUTOMOTIVE · 2024-01",
    title: "某知名汽车制造商数字化转型",
    challenge: "供应链协同低效、生产工单与质检脱节、库存积压严重，急需协同制造管理升级。",
    solution:
      "部署领跃协同制造管理平台，打通采购到入库、销售到出库、生产工单与质检，实现供应链、生产制造与财务的一体化管理。",
    quote: "“领跃平台帮助我们打通了供应链与生产制造的协同管理，效果超出预期。”",
    quoteBy: "张总 · 生产总监",
    metrics: [
      { value: "+40%", label: "交付准时率提升", red: true },
      { value: "-85%", label: "质检不良率降低", red: false },
      { value: "+60%", label: "库存周转率提升", red: false },
      { value: "-35%", label: "采购周期缩短", red: false }
    ]
  },
  {
    slug: "electronics-factory-smart-upgrade",
    tag: "ELECTRONICS · 2024-02",
    title: "电子制造企业协同制造升级",
    challenge: "多产品线并行生产，BOM 与工艺路线复杂，需要提升生产协同与交付响应速度。",
    solution: "实施领跃生产工单、BOM 与工艺路线管理，结合供应链协同，优化生产计划与资源配置。",
    quote: null,
    quoteBy: null,
    metrics: [
      { value: "98%", label: "生产计划准确率", red: true },
      { value: "-70%", label: "产线切换时间", red: false },
      { value: "-50%", label: "在制品库存", red: false },
      { value: "99%", label: "客户交期满足率", red: false }
    ]
  }
]

const COMPACT_CASES = [
  {
    slug: "machinery-manufacturer-efficiency-optimization",
    tag: "MACHINERY · 2024-03",
    title: "机械制造企业效率优化项目",
    description:
      "传统生产模式协同效率低下，成本核算困难。部署领跃平台后实现生产工单、质检与成本核算、财务一体化管控。",
    metrics: [
      { value: "+45%", label: "综合生产效率", red: true },
      { value: "-20%", label: "制造成本", red: false }
    ]
  },
  {
    slug: "chemical-plant-safety-digitalization",
    tag: "CHEMICAL · 2024-04",
    title: "化工企业供应链与财务一体化",
    description:
      "原料批次多、对账流程繁琐，财务月结周期长。贯通采购入库、批次库存、应收应付对账与成本月结。",
    metrics: [
      { value: "100%", label: "批次追溯覆盖率", red: true },
      { value: "-80%", label: "月结对账周期", red: false }
    ]
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)]">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">CASE STUDIES</span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          客户成功案例
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          真实的客户故事：从供应链到财务，看制造企业如何通过领跃实现一体化协同经营。
        </p>
      </div>

      {/* cases */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,72px)]">
        {FEATURED_CASES.map((cs) => (
          <div key={cs.slug} className="overflow-hidden rounded-xl border border-[#E2E7EF]">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
              <div className="flex flex-col gap-3.5 p-[clamp(24px,3.5vw,40px)]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-[#FCE9EB] px-2.5 py-1 text-[11px] font-semibold text-[#B00717]">
                    精选案例
                  </span>
                  <span className="font-grotesk text-[11px] tracking-[0.1em] text-[#98A1B2]">{cs.tag}</span>
                </div>
                <h2 className="m-0 text-[clamp(19px,2.4vw,24px)] font-semibold tracking-[-0.01em] text-[#11151E]">
                  <Link href={`/case-studies/${cs.slug}`} className="text-inherit no-underline transition-colors hover:text-[#E10A1F]">
                    {cs.title}
                  </Link>
                </h2>
                <p className="m-0 text-[13px] leading-[1.75] text-[#6E7889]">
                  <span className="font-semibold text-[#4A5468]">挑战：</span>
                  {cs.challenge}
                </p>
                <p className="m-0 text-[13px] leading-[1.75] text-[#6E7889]">
                  <span className="font-semibold text-[#4A5468]">方案：</span>
                  {cs.solution}
                </p>
                {cs.quote && (
                  <div className="mt-1 rounded-r-lg border-l-2 border-[#E10A1F] bg-[#F7F9FC] px-[18px] py-3.5">
                    <p className="mb-1.5 mt-0 text-[13px] leading-[1.7] text-[#4A5468]">{cs.quote}</p>
                    <span className="text-[12px] text-[#98A1B2]">{cs.quoteBy}</span>
                  </div>
                )}
              </div>
              <div className="grid content-center grid-cols-2 gap-5 border-l border-[#E2E7EF] bg-[#F7F9FC] p-[clamp(24px,3.5vw,40px)]">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className={`font-jbmono text-[30px] font-semibold ${m.red ? "text-[#E10A1F]" : "text-[#11151E]"}`}>
                      {m.value}
                    </span>
                    <span className="text-[12px] text-[#6E7889]">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {COMPACT_CASES.map((cs) => (
            <div key={cs.slug} className="flex flex-col gap-3.5 rounded-xl border border-[#E2E7EF] p-[clamp(24px,3vw,32px)]">
              <span className="font-grotesk text-[11px] tracking-[0.1em] text-[#98A1B2]">{cs.tag}</span>
              <h2 className="m-0 text-[19px] font-semibold tracking-[-0.01em] text-[#11151E]">
                <Link href={`/case-studies/${cs.slug}`} className="text-inherit no-underline transition-colors hover:text-[#E10A1F]">
                  {cs.title}
                </Link>
              </h2>
              <p className="m-0 text-[13px] leading-[1.75] text-[#6E7889]">{cs.description}</p>
              <div className="mt-auto flex gap-7 border-t border-[#EDF0F6] pt-4">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-0.5">
                    <span className={`font-jbmono text-[24px] font-semibold ${m.red ? "text-[#E10A1F]" : "text-[#11151E]"}`}>
                      {m.value}
                    </span>
                    <span className="text-[11px] text-[#6E7889]">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#11151E]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,56px)]">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[clamp(20px,2.6vw,26px)] font-semibold tracking-[-0.02em] text-[#F6F8FC]">
              成为下一个成功案例
            </h2>
            <span className="text-[13px] text-[#8B95A8]">我们的顾问将结合您的行业特点提供定制化演示。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              预约演示 Book a demo
            </Link>
            <Link
              href="/solutions"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              行业方案 Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
