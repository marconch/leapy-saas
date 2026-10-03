import type { Metadata } from "next"

import { Reveal } from "@/components/site/motion"
import { Btn, CtaBand, Marquee, PageHero, SectionHead } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "行业应用",
  description:
    "领跃协同制造管理云平台 (LeanLeap) 在各个行业的成功应用案例，涵盖汽车、电子、机械、化工等多个制造领域。",
}

const USE_CASES = [
  {
    eyebrow: "Automotive",
    name: "汽车制造",
    description: "整车及零部件制造企业的协同制造数字化转型。",
    points: ["采购合同与供应商协同", "生产工单与 BOM 管理", "工艺路线与质检追溯", "成本核算与经营分析"],
    quote: "“某知名车企通过协同制造平台实现采购到生产全流程协同，整体运营效率提升 40%”",
  },
  {
    eyebrow: "Electronics",
    name: "电子制造",
    description: "消费电子及工业电子产品制造的协同管理。",
    points: ["供应链协同与库存管理", "生产工单与 BOM 管理", "工序质检全程把控", "财务对账与成本核算"],
    quote: "“大型电子制造商通过供应链协同实现库存周转率提升 60%”",
  },
  {
    eyebrow: "Machinery",
    name: "机械制造",
    description: "通用机械及专用设备制造的协同管理。",
    points: ["工艺路线与 BOM 管理", "生产工单与质检管理", "销售订单与采购协同", "成本核算与月结"],
    quote: "“机械装备企业交期准确率提升至 98%”",
  },
  {
    eyebrow: "Chemical",
    name: "化工制造",
    description: "精细化工及基础化工生产的协同管理。",
    points: ["BOM 配方与工艺路线管理", "生产工单与批次质检", "供应链与库存批次管理", "财务核算与经营报表"],
    quote: "“化工企业实现批次质检与财务核算一体化，批次全程可追溯”",
  },
]

const pad = (n: number) => String(n).padStart(2, "0")
const TOTAL = pad(USE_CASES.length)

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Industry applications"
        lines={[<span key="l1">行业<span className="text-red">应用</span>案例</span>]}
        desc="深耕制造业多年，为不同行业客户提供专业的数字化转型服务。"
        meta={USE_CASES.map((u, i) => ({ label: `${pad(i + 1)} — ${u.eyebrow}`, value: u.name }))}
      >
        <Btn href="/case-studies" magnetic>
          查看更多案例
        </Btn>
        <Btn href="/contact" variant="ghost">
          联系行业专家
        </Btn>
      </PageHero>

      {/* ───────── 行业名跑马灯 ───────── */}
      <div className="bg-paper py-[clamp(40px,6vw,96px)]">
        <Marquee
          duration={46}
          className="border-y border-line py-[clamp(14px,1.6vw,24px)]"
          itemClassName="font-display text-[clamp(40px,6.6vw,120px)] font-black leading-none tracking-[-0.04em]"
          items={USE_CASES.flatMap((row, i) => [
            <span key={row.name} className={i % 2 ? "outline-text [--stroke:var(--color-ink)]" : ""}>
              {row.name}
            </span>,
            <span key={`${row.name}-sep`} className="mx-[0.35em] inline-block h-[0.14em] w-[0.7em] bg-red" />,
          ])}
        />
      </div>

      {/* ───────── 典型应用场景：巨型行业名翻色行 ───────── */}
      <section className="relative bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <div className="relative pt-[clamp(72px,10vw,160px)]">
          <div className="wrap">
            <SectionHead index="01" eyebrow="Use cases" onDark lines={["典型应用场景"]} />
          </div>
          <div className="mt-[clamp(40px,6vw,96px)] border-b border-white/12">
            {USE_CASES.map((useCase, i) => (
              <Reveal as="article" key={useCase.eyebrow}>
                <div className="flip-row border-t border-white/12 [--flip-bg:var(--color-paper)] [--flip-fg:var(--color-ink)]">
                <div className="wrap grid gap-x-10 gap-y-8 py-[clamp(40px,5.5vw,96px)] lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <span className="eyebrow inline-flex items-center gap-3">
                      <span aria-hidden className="inline-block h-[7px] w-[7px] bg-red" />
                      <span className="opacity-60">
                        {pad(i + 1)} / {TOTAL}
                      </span>
                      <span>{useCase.eyebrow}</span>
                    </span>
                    <h3 className="display mt-[clamp(16px,2vw,32px)] text-[clamp(60px,11.5vw,208px)] leading-[0.98]">
                      {useCase.name}
                    </h3>
                  </div>
                  <div className="lg:col-span-4 lg:col-start-9 lg:pt-10">
                    <p className="text-[clamp(16px,1.35vw,20px)] leading-[1.75]">{useCase.description}</p>
                    <ul className="mt-6 grid gap-x-6 sm:grid-cols-2 lg:grid-cols-1">
                      {useCase.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 border-t border-current/15 py-3 text-[14px]"
                        >
                          <span aria-hidden className="h-[5px] w-[5px] shrink-0 bg-red" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <blockquote className="flip-mute mt-6 border-l-2 border-red pl-4 text-[14px] leading-[1.8] text-mute-d">
                      {useCase.quote}
                    </blockquote>
                  </div>
                </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        lines={["探索您的", "行业解决方案"]}
        sub="了解我们如何为您的行业提供专业的数字化转型服务。"
        primary={{ label: "查看更多案例", href: "/case-studies" }}
        secondary={{ label: "联系行业专家", href: "/contact" }}
      />
    </>
  )
}
