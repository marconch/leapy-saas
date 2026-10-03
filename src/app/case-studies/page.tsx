import type { Metadata } from "next"
import Link from "next/link"
import { Reveal } from "@/components/site/motion"
import { Arrow, CtaBand, Marquee, PageHero, SectionHead } from "@/components/site/ui"

// 标题整行链接到 /case-studies/[slug] 详情页

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
    results: ["交付准时率提升", "质检不良率降低", "库存周转率提升", "采购周期缩短"],
  },
  {
    slug: "electronics-factory-smart-upgrade",
    tag: "ELECTRONICS · 2024-02",
    title: "电子制造企业协同制造升级",
    challenge: "多产品线并行生产，BOM 与工艺路线复杂，需要提升生产协同与交付响应速度。",
    solution: "实施领跃生产工单、BOM 与工艺路线管理，结合供应链协同，优化生产计划与资源配置。",
    quote: null,
    quoteBy: null,
    results: ["生产计划准确率提升", "产线切换时间减少", "在制品库存降低", "客户交期满足率提升"],
  },
]

const COMPACT_CASES = [
  {
    slug: "machinery-manufacturer-efficiency-optimization",
    tag: "MACHINERY · 2024-03",
    title: "机械制造企业效率优化项目",
    description:
      "传统生产模式协同效率低下，成本核算困难。部署领跃平台后实现生产工单、质检与成本核算、财务一体化管控。",
    results: ["综合生产效率提升", "制造成本降低"],
  },
  {
    slug: "chemical-plant-safety-digitalization",
    tag: "CHEMICAL · 2024-04",
    title: "化工企业供应链与财务一体化",
    description:
      "原料批次多、对账流程繁琐，财务月结周期长。贯通采购入库、批次库存、应收应付对账与成本月结。",
    results: ["批次全程可追溯", "月结对账周期缩短"],
  },
]

const INDUSTRIES = ["AUTOMOTIVE", "ELECTRONICS", "MACHINERY", "CHEMICAL"]

function ResultCell({ no, label }: { no: number; label: string }) {
  return (
    <div className="flex h-full flex-col justify-between gap-[clamp(28px,4vw,72px)] p-[clamp(16px,2vw,32px)]">
      <span className="eyebrow text-red">{String(no).padStart(2, "0")}</span>
      <span className="title text-balance text-[clamp(18px,2.2vw,36px)]">{label}</span>
    </div>
  )
}

function RowArrow() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-45 md:h-14 md:w-14">
      <Arrow />
    </span>
  )
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        index="05"
        eyebrow="Case studies"
        lines={[
          <span key="l1">
            客户<span className="text-red">成功案例</span>
          </span>,
        ]}
        desc="真实的客户故事：从供应链到财务，看制造企业如何通过领跃实现一体化协同经营。"
      />

      {/* ───────── 精选案例：巨型标题翻色行 + 成果宫格 ───────── */}
      <section className="bg-paper">
        <div className="wrap py-[clamp(72px,10vw,160px)]">
          <SectionHead index="01" eyebrow="Featured" lines={["精选案例"]} />

          <div className="mt-[clamp(40px,6vw,96px)] flex flex-col gap-[clamp(56px,8vw,128px)]">
            {FEATURED_CASES.map((cs, i) => (
              <article key={cs.slug}>
                <Reveal>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="flip-row group grid grid-cols-12 items-center gap-x-6 gap-y-4 border-y border-ink px-[clamp(0px,1.2vw,20px)] py-[clamp(24px,3.2vw,56px)]"
                  >
                    <span className="col-span-12 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="eyebrow text-red">{String(i + 1).padStart(2, "0")}</span>
                      <span className="bg-red px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-white">精选案例</span>
                      <span className="eyebrow flip-mute text-mute">{cs.tag}</span>
                    </span>
                    <h2 className="display col-span-10 text-[clamp(28px,4.6vw,84px)] text-balance">{cs.title}</h2>
                    <span className="col-span-2 flex justify-end">
                      <RowArrow />
                    </span>
                  </Link>
                </Reveal>

                <div className="mt-[clamp(28px,4vw,64px)] grid gap-x-10 gap-y-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <dl className="flex flex-col gap-7">
                      <Reveal className="grid grid-cols-[64px_1fr] gap-x-4">
                        <dt className="eyebrow pt-1.5 text-red">挑战</dt>
                        <dd className="text-[clamp(15px,1.25vw,18px)] leading-[1.8]">{cs.challenge}</dd>
                      </Reveal>
                      <Reveal delay={80} className="grid grid-cols-[64px_1fr] gap-x-4">
                        <dt className="eyebrow pt-1.5 text-red">方案</dt>
                        <dd className="text-[clamp(15px,1.25vw,18px)] leading-[1.8] text-mute">{cs.solution}</dd>
                      </Reveal>
                    </dl>
                    {cs.quote && (
                      <Reveal delay={160} as="figure" className="mt-[clamp(28px,3.4vw,52px)] border-l-2 border-red pl-[clamp(16px,2vw,28px)]">
                        <blockquote className="title text-[clamp(19px,1.9vw,28px)] leading-[1.5]">{cs.quote}</blockquote>
                        <figcaption className="eyebrow mt-4 text-mute">{cs.quoteBy}</figcaption>
                      </Reveal>
                    )}
                  </div>
                  <div className="hairgrid grid-cols-2 self-start lg:col-span-7">
                    {cs.results.map((label, j) => (
                      <Reveal key={label} delay={j * 80}>
                        <ResultCell no={j + 1} label={label} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 更多行业 ───────── */}
      <section className="relative bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <div className="relative pt-[clamp(72px,10vw,160px)]">
          <div aria-hidden>
            <Marquee
              duration={44}
              className="border-y border-white/12 py-[clamp(14px,1.6vw,24px)]"
              itemClassName="font-display text-[clamp(40px,6.6vw,120px)] font-black leading-none tracking-[-0.04em]"
              items={INDUSTRIES.flatMap((name, i) => [
                <span key={name} className={i % 2 ? "outline-text text-paper" : "text-paper"}>
                  {name}
                </span>,
                <span key={`${name}-sep`} className="mx-[0.35em] inline-block h-[0.14em] w-[0.7em] bg-red" />,
              ])}
            />
          </div>

          <div className="wrap pb-[clamp(72px,10vw,160px)] pt-[clamp(56px,8vw,128px)]">
            <SectionHead index="02" eyebrow="More cases" onDark lines={["更多行业实践"]} />

            <div className="mt-[clamp(40px,6vw,96px)] grid gap-x-[clamp(24px,4vw,72px)] gap-y-[clamp(48px,6vw,80px)] lg:grid-cols-2">
              {COMPACT_CASES.map((cs, i) => (
                <article key={cs.slug} className="flex flex-col">
                  <Reveal delay={i * 100}>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="flip-row group flex items-center justify-between gap-6 border-y border-paper px-[clamp(0px,1.2vw,20px)] py-[clamp(22px,2.6vw,40px)] [--flip-bg:var(--color-paper)] [--flip-fg:var(--color-ink)]"
                    >
                      <span className="flex flex-col gap-4">
                        <span className="flex items-center gap-4">
                          <span className="eyebrow text-red">{String(FEATURED_CASES.length + i + 1).padStart(2, "0")}</span>
                          <span className="eyebrow flip-mute text-mute-d">{cs.tag}</span>
                        </span>
                        <h2 className="title text-[clamp(24px,2.7vw,44px)] text-balance">{cs.title}</h2>
                      </span>
                      <RowArrow />
                    </Link>
                  </Reveal>
                  <Reveal delay={i * 100 + 80}>
                    <p className="mb-[clamp(24px,3vw,44px)] mt-[clamp(20px,2.4vw,36px)] max-w-[560px] text-[clamp(15px,1.15vw,17px)] leading-[1.85] text-mute-d">
                      {cs.description}
                    </p>
                  </Reveal>
                  <div className="hairgrid on-dark mt-auto grid-cols-2">
                    {cs.results.map((label, j) => (
                      <Reveal key={label} delay={i * 100 + j * 80}>
                        <ResultCell no={j + 1} label={label} />
                      </Reveal>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        lines={["成为下一个", "成功案例"]}
        sub="我们的顾问将结合您的行业特点提供定制化演示。"
        primary={{ label: "预约演示 Book a demo", href: "/contact" }}
        secondary={{ label: "行业方案 Solutions", href: "/solutions" }}
      />
    </>
  )
}
