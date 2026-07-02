import type { Metadata } from "next"
import Link from "next/link"

// 解决方案页 —— 按 claude.ai/design "Portal design" 项目 Solutions.dc.html 逐值重构

export const metadata: Metadata = {
  title: "解决方案",
  description:
    "针对不同行业和场景的协同制造管理解决方案，覆盖供应链、生产制造、财务与成本，满足汽车、电子、机械、化工等行业的数字化转型需求。",
}

const SOLUTIONS = [
  {
    id: "automotive",
    eyebrow: "AUTOMOTIVE",
    name: "汽车制造解决方案",
    description: "专为汽车制造行业设计，打通采购、生产工单与质检，支撑复杂装配工艺与严格的质量要求。",
    benefits: ["采购到交付全流程协同", "生产工单与 BOM 精细管理", "批次全程可追溯", "供应链与质检联动"]
  },
  {
    id: "electronics",
    eyebrow: "ELECTRONICS",
    name: "电子制造解决方案",
    description: "适用于电子产品制造的精细化协同管理，支撑多品类、多批次的订单与库存运营。",
    benefits: ["多批次精细库存管理", "销售订单快速响应", "工序质检全程把控", "WMS 移库与盘点高效"]
  },
  {
    id: "machinery",
    eyebrow: "MACHINERY",
    name: "机械制造解决方案",
    description: "面向机械制造企业的协同制造管理方案，优化复杂工艺路线与工单排程。",
    benefits: ["工艺路线标准化", "工单进度透明可控", "减少在制品积压", "交期准确性提升"]
  },
  {
    id: "chemical",
    eyebrow: "CHEMICAL",
    name: "化工制造解决方案",
    description: "面向化工行业的批次化生产与成本核算管理，保障质量合规与经营透明。",
    benefits: ["批次质检与合规管理", "成本核算与月结", "应收应付对账清晰", "采购入库精细管控"]
  }
]

const PROCESS_STEPS = [
  { step: "01", title: "需求调研", desc: "深入了解企业现状和需求" },
  { step: "02", title: "方案设计", desc: "制定定制化解决方案" },
  { step: "03", title: "系统部署", desc: "快速部署和系统集成" },
  { step: "04", title: "培训支持", desc: "全面培训和持续支持" }
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)]">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">
          INDUSTRY SOLUTIONS
        </span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          行业解决方案
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          基于深度行业理解，为不同制造领域提供针对性的协同制造管理解决方案。
        </p>
      </div>

      {/* solutions */}
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              id={solution.id}
              className="flex scroll-mt-20 flex-col gap-3.5 rounded-xl border border-[#E2E7EF] p-8 transition-colors hover:border-[#E10A1F]"
            >
              <span className="font-grotesk text-[11px] tracking-[0.1em] text-[#98A1B2]">{solution.eyebrow}</span>
              <span className="text-[19px] font-semibold text-[#11151E]">{solution.name}</span>
              <p className="m-0 text-[13px] leading-[1.7] text-[#6E7889]">{solution.description}</p>
              <div className="flex flex-col gap-2 border-t border-[#EDF0F6] pt-3.5">
                <span className="text-[12px] font-semibold text-[#98A1B2]">核心价值</span>
                {solution.benefits.map((benefit) => (
                  <span key={benefit} className="flex gap-2 text-[13px] text-[#4A5468]">
                    <span className="text-[#E10A1F]">—</span>
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* process */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">
              IMPLEMENTATION
            </span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">
              实施流程
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="flex flex-col gap-2.5 rounded-xl border border-[#E2E7EF] bg-white p-[26px]">
                <span className="font-grotesk text-[24px] font-bold text-[#E10A1F]">{item.step}</span>
                <span className="text-[15px] font-semibold text-[#11151E]">{item.title}</span>
                <span className="text-[13px] leading-[1.6] text-[#6E7889]">{item.desc}</span>
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
              寻找适合您的解决方案？
            </h2>
            <span className="text-[13px] text-[#8B95A8]">我们的专家将为您量身定制最优解决方案。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              免费咨询 Consult
            </Link>
            <Link
              href="/case-studies"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              查看案例 Cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
