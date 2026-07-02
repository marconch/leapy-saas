import type { Metadata } from "next"
import Link from "next/link"

// 行业应用页 —— 按 claude.ai/design "Portal design" 项目 Industries.dc.html 逐值重构

export const metadata: Metadata = {
  title: "行业应用",
  description:
    "领跃协同制造管理云平台 (LeanLeap) 在各个行业的成功应用案例，涵盖汽车、电子、机械、化工等多个制造领域。",
}

const INDUSTRY_DISTRIBUTION = [
  { label: "汽车制造", value: 45, width: "100%", color: "#E10A1F" },
  { label: "电子制造", value: 38, width: "84%", color: "#1C2230" },
  { label: "机械制造", value: 28, width: "62%", color: "#4A5468" },
  { label: "化工制造", value: 22, width: "49%", color: "#6E7889" },
  { label: "其他行业", value: 15, width: "33%", color: "#98A1B2" }
]

const RESULTS = [
  { value: "500+", label: "服务企业数量", red: false },
  { value: "2000+", label: "覆盖生产线", red: false },
  { value: "35%", label: "平均效率提升", red: true },
  { value: "98%", label: "客户满意度", red: true }
]

const USE_CASES = [
  {
    eyebrow: "AUTOMOTIVE",
    name: "汽车制造",
    description: "整车及零部件制造企业的协同制造数字化转型。",
    points: ["采购合同与供应商协同", "生产工单与 BOM 管理", "工艺路线与质检追溯", "成本核算与经营分析"],
    quote: "“某知名车企通过协同制造平台实现采购到生产全流程协同，整体运营效率提升 40%”"
  },
  {
    eyebrow: "ELECTRONICS",
    name: "电子制造",
    description: "消费电子及工业电子产品制造的协同管理。",
    points: ["供应链协同与库存管理", "生产工单与 BOM 管理", "工序质检全程把控", "财务对账与成本核算"],
    quote: "“大型电子制造商通过供应链协同实现库存周转率提升 60%”"
  },
  {
    eyebrow: "MACHINERY",
    name: "机械制造",
    description: "通用机械及专用设备制造的协同管理。",
    points: ["工艺路线与 BOM 管理", "生产工单与质检管理", "销售订单与采购协同", "成本核算与月结"],
    quote: "“机械装备企业交期准确率提升至 98%”"
  },
  {
    eyebrow: "CHEMICAL",
    name: "化工制造",
    description: "精细化工及基础化工生产的协同管理。",
    points: ["BOM 配方与工艺路线管理", "生产工单与批次质检", "供应链与库存批次管理", "财务核算与经营报表"],
    quote: "“化工企业实现批次质检与财务核算一体化，批次全程可追溯”"
  }
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)]">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">
          INDUSTRY APPLICATIONS
        </span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          行业应用案例
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          深耕制造业多年，为不同行业客户提供专业的数字化转型服务。
        </p>
      </div>

      {/* distribution + results */}
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
          <div className="flex flex-col gap-5 rounded-xl border border-[#E2E7EF] p-7">
            <span className="text-[15px] font-semibold text-[#11151E]">客户行业分布</span>
            <div className="flex flex-col gap-3.5">
              {INDUSTRY_DISTRIBUTION.map((row) => (
                <div key={row.label} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-[12px]">
                    <span className="text-[#4A5468]">{row.label}</span>
                    <span className="font-jbmono font-semibold text-[#11151E]">{row.value}</span>
                  </div>
                  <div className="h-1.5 rounded-[3px] bg-[#EDF0F6]">
                    <div className="h-1.5 rounded-[3px]" style={{ width: row.width, background: row.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-xl border border-[#E2E7EF] bg-[#F7F9FC] p-7">
            <span className="text-[15px] font-semibold text-[#11151E]">服务成果</span>
            <div className="grid grid-cols-2 gap-5">
              {RESULTS.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className={`font-jbmono text-[30px] font-semibold ${item.red ? "text-[#E10A1F]" : "text-[#11151E]"}`}>
                    {item.value}
                  </span>
                  <span className="text-[12px] text-[#6E7889]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* use cases */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">USE CASES</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">
              典型应用场景
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {USE_CASES.map((useCase) => (
              <div key={useCase.eyebrow} className="flex flex-col gap-3.5 rounded-xl border border-[#E2E7EF] bg-white p-[30px]">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-grotesk text-[11px] tracking-[0.1em] text-[#98A1B2]">{useCase.eyebrow}</span>
                  <span className="text-[18px] font-semibold text-[#11151E]">{useCase.name}</span>
                </div>
                <p className="m-0 text-[13px] leading-[1.7] text-[#6E7889]">{useCase.description}</p>
                <div className="flex flex-col gap-[7px]">
                  {useCase.points.map((point) => (
                    <span key={point} className="flex gap-2 text-[13px] text-[#4A5468]">
                      <span className="text-[#E10A1F]">—</span>
                      {point}
                    </span>
                  ))}
                </div>
                <div className="rounded-r-lg border-l-2 border-[#E10A1F] bg-[#F7F9FC] px-4 py-3">
                  <span className="text-[12px] leading-[1.7] text-[#6E7889]">{useCase.quote}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#11151E]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,56px)]">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[clamp(20px,2.6vw,26px)] font-semibold tracking-[-0.02em] text-[#F6F8FC]">
              探索您的行业解决方案
            </h2>
            <span className="text-[13px] text-[#8B95A8]">了解我们如何为您的行业提供专业的数字化转型服务。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/case-studies"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              查看更多案例
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              联系行业专家
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
