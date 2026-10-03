import type { Metadata } from "next"

import { Grow, Reveal, ScrollScene } from "@/components/site/motion"
import { Arrow, Btn, CtaBand, Marquee, PageHero, SectionHead, ShotFrame } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "解决方案",
  description:
    "针对不同行业和场景的协同制造管理解决方案，覆盖供应链、生产制造、财务与成本，满足汽车、电子、机械、化工等行业的数字化转型需求。",
}

// name = industry + "解决方案"；拆开只为标题断行，文案不变
const SOLUTIONS = [
  {
    id: "automotive",
    eyebrow: "Automotive",
    industry: "汽车制造",
    description: "专为汽车制造行业设计，打通采购、生产工单与质检，支撑复杂装配工艺与严格的质量要求。",
    benefits: ["采购到交付全流程协同", "生产工单与 BOM 精细管理", "批次全程可追溯", "供应链与质检联动"],
    shot: { src: "/shots/manufacturing.jpg", label: "生产工单" },
  },
  {
    id: "electronics",
    eyebrow: "Electronics",
    industry: "电子制造",
    description: "适用于电子产品制造的精细化协同管理，支撑多品类、多批次的订单与库存运营。",
    benefits: ["多批次精细库存管理", "销售订单快速响应", "工序质检全程把控", "WMS 移库与盘点高效"],
    shot: { src: "/shots/sales.jpg", label: "销售订单" },
  },
  {
    id: "machinery",
    eyebrow: "Machinery",
    industry: "机械制造",
    description: "面向机械制造企业的协同制造管理方案，优化复杂工艺路线与工单排程。",
    benefits: ["工艺路线标准化", "工单进度透明可控", "减少在制品积压", "交期准确性提升"],
    shot: { src: "/shots/taskboard.jpg", label: "生产任务看板" },
  },
  {
    id: "chemical",
    eyebrow: "Chemical",
    industry: "化工制造",
    description: "面向化工行业的批次化生产与成本核算管理，保障质量合规与经营透明。",
    benefits: ["批次质检与合规管理", "成本核算与月结", "应收应付对账清晰", "采购入库精细管控"],
    shot: { src: "/shots/costing.jpg", label: "存货月结" },
  },
]

const PROCESS_STEPS = [
  { step: "01", title: "需求调研", desc: "深入了解企业现状和需求" },
  { step: "02", title: "方案设计", desc: "制定定制化解决方案" },
  { step: "03", title: "系统部署", desc: "快速部署和系统集成" },
  { step: "04", title: "培训支持", desc: "全面培训和持续支持" },
]

const pad = (n: number) => String(n).padStart(2, "0")
const TOTAL = pad(SOLUTIONS.length)

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Industry solutions"
        lines={[<span key="l1">行业<span className="text-red">解决方案</span></span>]}
        desc="基于深度行业理解，为不同制造领域提供针对性的协同制造管理解决方案。"
        meta={SOLUTIONS.map((s, i) => ({ label: `${pad(i + 1)} — ${s.eyebrow}`, value: `${s.industry}解决方案` }))}
      >
        <Btn href="/contact" magnetic>
          免费咨询
        </Btn>
        <Btn href="/case-studies" variant="ghost">
          查看案例
        </Btn>
      </PageHero>

      {/* ───────── 四个行业方案 ───────── */}
      <section className="overflow-hidden bg-paper">
        {SOLUTIONS.map((solution, i) => {
          const flip = i % 2 === 1
          return (
            <article
              key={solution.id}
              id={solution.id}
              aria-labelledby={`${solution.id}-title`}
              className="scroll-mt-28 border-b border-line"
            >
              <div className="wrap py-[clamp(64px,9vw,152px)]">
                <Reveal variant="fade" className="flex items-center justify-between gap-6">
                  <span className="eyebrow inline-flex items-center gap-3">
                    <span aria-hidden className="inline-block h-[7px] w-[7px] bg-red" />
                    <span className="opacity-60">
                      {pad(i + 1)} / {TOTAL}
                    </span>
                    <span>{solution.eyebrow}</span>
                  </span>
                  <span className="eyebrow hidden text-mute sm:block">Solution</span>
                </Reveal>

                <Reveal>
                  <h2
                    id={`${solution.id}-title`}
                    className="display mt-[clamp(20px,2.6vw,40px)] flex flex-wrap items-baseline gap-x-[0.18em] text-[clamp(44px,10.2vw,184px)] leading-[1]"
                  >
                    <span>{solution.industry}</span>
                    <span className="outline-text [--stroke:var(--color-ink)]">解决方案</span>
                  </h2>
                </Reveal>

                <div className="mt-[clamp(36px,5vw,80px)] grid items-start gap-x-10 gap-y-12 lg:grid-cols-12">
                  <ScrollScene
                    className={`lg:col-span-7 lg:row-start-1 ${flip ? "lg:col-start-6" : "lg:col-start-1"}`}
                  >
                    <Reveal variant="scale">
                      <div
                        className="will-change-transform"
                        style={{ transform: "translate3d(0, calc((0.5 - var(--p, 0.5)) * 48px), 0)" }}
                      >
                        <ShotFrame
                          src={solution.shot.src}
                          alt={`领跃协同制造管理系统界面：${solution.shot.label}`}
                          label={`leanleap.app — ${solution.shot.label}`}
                        />
                      </div>
                    </Reveal>
                  </ScrollScene>

                  <div className={`lg:col-span-4 lg:row-start-1 ${flip ? "lg:col-start-1" : "lg:col-start-9"}`}>
                    <Reveal>
                      <p className="text-[clamp(17px,1.5vw,23px)] leading-[1.7] text-ink/85">{solution.description}</p>
                    </Reveal>
                    <Reveal delay={80} className="mt-[clamp(28px,3.4vw,52px)] flex items-baseline justify-between">
                      <h3 className="text-[15px] font-semibold">核心价值</h3>
                      <span className="eyebrow text-mute">Key value</span>
                    </Reveal>
                    <ul className="mt-4 border-t border-ink">
                      {solution.benefits.map((benefit, j) => (
                        <Reveal
                          as="li"
                          key={benefit}
                          delay={120 + j * 60}
                          className="flex items-baseline gap-4 border-b border-line py-[clamp(14px,1.5vw,20px)]"
                        >
                          <span className="eyebrow text-red">{pad(j + 1)}</span>
                          <span className="text-[clamp(16px,1.35vw,20px)] font-medium">{benefit}</span>
                        </Reveal>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </section>

      {/* ───────── 实施流程：大序号步骤 ───────── */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <div className="relative">
          <Marquee
            duration={44}
            className="border-b border-white/12 py-[clamp(14px,1.6vw,24px)]"
            itemClassName="font-display text-[clamp(36px,6vw,108px)] font-black uppercase leading-none tracking-[-0.04em]"
            items={SOLUTIONS.flatMap((s, i) => [
              <span key={s.id} className={i % 2 ? "outline-text text-paper" : "text-paper"}>
                {s.eyebrow}
              </span>,
              <span key={`${s.id}-sep`} className="mx-[0.35em] inline-block h-[0.14em] w-[0.7em] bg-red" />,
            ])}
          />
          <div className="wrap py-[clamp(72px,10vw,160px)]">
            <SectionHead index="05" eyebrow="Implementation" onDark lines={["实施流程"]} />
            <ol className="hairgrid on-dark mt-[clamp(40px,6vw,96px)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS_STEPS.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.step}
                  delay={i * 110}
                  className="relative flex flex-col justify-between gap-[clamp(48px,7vw,128px)] p-[clamp(20px,2.2vw,36px)]"
                >
                  <Grow delay={300 + i * 220} className="absolute inset-x-0 top-0 h-[2px] bg-red" />
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-mute-d">Step</span>
                    {i < PROCESS_STEPS.length - 1 ? (
                      <Arrow className="text-red" />
                    ) : (
                      <span aria-hidden className="h-[9px] w-[9px] bg-red" />
                    )}
                  </div>
                  <div>
                    <span
                      aria-hidden
                      className={`num block text-[clamp(96px,12vw,220px)] leading-[0.8] ${i === 0 ? "text-red" : ""}`}
                    >
                      {item.step}
                    </span>
                    <h3 className="title mt-[clamp(20px,2.4vw,36px)] text-[clamp(24px,2.4vw,40px)]">{item.title}</h3>
                    <p className="mt-3 text-[clamp(14px,1.1vw,17px)] leading-[1.75] text-mute-d">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand
        lines={["寻找适合您的", "解决方案？"]}
        sub="我们的专家将为您量身定制最优解决方案。"
        primary={{ label: "免费咨询", href: "/contact" }}
        secondary={{ label: "查看案例", href: "/case-studies" }}
      />
    </>
  )
}
