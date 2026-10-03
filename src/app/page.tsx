import { Counter, GridPulse, Grow, Lines, Reveal, Rule, ScrollScene } from "@/components/site/motion"
import { Arrow, Btn, CtaBand, Marquee, SectionHead, ShotFrame, Tag } from "@/components/site/ui"
import { ChainScrolly } from "@/components/home/chain"
import { CHAIN } from "@/components/home/chain-data"
import { Gallery } from "@/components/home/gallery"
import Link from "next/link"

const STATS = [
  { value: 50, suffix: "+", label: "服务客户", caption: "Clients" },
  { value: 8, suffix: "", label: "核心业务模块", caption: "Modules" },
  { value: 20, suffix: "年", label: "行业经验", caption: "Years" },
  { value: 96, suffix: "%", label: "订单准时交付率", caption: "On-time delivery", red: true },
]

const HERO_PILLS = ["多租户 SaaS 快速上线", "采购到财务全链路打通", "工作流审批灵活可配"]

const SERVICES = [
  {
    no: "01",
    title: "领跃协同制造管理系统",
    description: "覆盖采购、销售、生产、库存、财务、成本的全链路业务协同。",
    points: ["打通供应链与财务，降低库存积压与对账差错", "跨部门在线协同，提升单据流转与履约效率"],
    href: "/products",
  },
  {
    no: "02",
    title: "专业的实施、开发、运维服务",
    description: "以客户业务为核心，从咨询、实施到运维全程陪伴。",
    points: ["以客户为中心，赋能企业数字化转型"],
    href: "/contact",
  },
  {
    no: "03",
    title: "一体化数字化经营方案",
    description: "结合制造行业经验，提供端到端的业务中台与经营分析。",
    points: ["供应链、制造、财务成本、报表分析模块化组合", "支持多租户 SaaS 与经营数据闭环"],
    href: "/solutions",
  },
]

const KPIS = [
  { label: "订单准时交付率", value: 96, red: true },
  { label: "月度结账及时率", value: 95 },
  { label: "应收回款率", value: 92 },
  { label: "单据审批时效", value: 88 },
  { label: "库存周转率", value: 82 },
]

const ADVANTAGES = [
  "全业务链路在线协同",
  "多租户数据隔离与权限管控",
  "可配置的工作流审批引擎",
  "实时经营报表与成本分析",
  "灵活的开放集成能力",
]

export default function Home() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-paper pt-[calc(var(--header-h)+clamp(28px,5vw,72px))]">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_40%,transparent_92%)]" />
        <GridPulse className="[mask-image:linear-gradient(to_bottom,black_40%,transparent_92%)]" />

        <div className="wrap relative">
          <Reveal variant="fade" delay={500} className="flex items-center justify-between gap-6">
            <Tag>Collaborative Manufacturing Cloud</Tag>
            <span className="eyebrow hidden text-mute sm:block">Shanghai, China</span>
          </Reveal>

          <Lines
            as="h1"
            delay={520}
            className="display mt-[clamp(24px,3.2vw,48px)] text-[clamp(38px,10vw,196px)]"
            lines={[
              "一体化协同制造管理",
              <span key="l2" className="flex items-baseline gap-[0.12em]">
                让经营<span className="text-red">尽在掌握</span>
              </span>,
            ]}
          />

          <div className="mt-[clamp(28px,4vw,64px)] grid gap-x-10 gap-y-10 md:grid-cols-12">
            <Reveal delay={900} className="md:col-span-4">
              <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-2 font-jbmono text-[12px] tracking-[0.06em] text-ink/70">
                {CHAIN.map((step, i) => (
                  <li key={step.key} className="flex items-center gap-2.5">
                    <span>{step.zh}</span>
                    {i < CHAIN.length - 1 && <Arrow size={10} className="text-red" />}
                  </li>
                ))}
              </ol>
              <p className="mt-3 font-grotesk text-[14px] text-mute">One platform from procurement to finance.</p>
            </Reveal>
            <Reveal delay={980} className="md:col-span-7 md:col-start-6 lg:col-span-5 lg:col-start-8">
              <p className="text-[clamp(16px,1.35vw,20px)] leading-[1.75] text-ink/85">
                借助领跃（LeanLeap）协同制造管理系统，将采购、销售、生产、库存、财务、成本紧密连接，构建以数据驱动的一体化经营平台，持续提升协同效率与经营质量。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href="/contact" magnetic>
                  预约演示
                </Btn>
                <Btn href="/products" variant="ghost">
                  了解产品
                </Btn>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {HERO_PILLS.map((pill) => (
                  <li key={pill} className="flex items-center gap-2 text-[13px] text-mute">
                    <span className="h-[5px] w-[5px] bg-red" />
                    {pill}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* 产品画面：随滚动由倾斜放平 */}
        <ScrollScene className="relative mt-[clamp(48px,7vw,112px)]">
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-[46%] bg-ink" />
          <div className="wrap relative [perspective:1800px]">
            <Reveal variant="fade" delay={1100}>
              <div
                className="origin-top will-change-transform"
                style={{
                  ["--t" as string]: "clamp(0, calc(var(--p, 0) * 2.6), 1)",
                  transform:
                    "rotateX(calc((1 - var(--t)) * 16deg)) scale(calc(0.9 + var(--t) * 0.1))",
                }}
              >
                <ShotFrame
                  src="/shots/workbench.jpg"
                  alt="领跃协同制造管理系统工作台界面"
                  label="leanleap.app — 工作台"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </ScrollScene>
      </section>

      {/* ───────── 一条链 ───────── */}
      <section className="relative bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <div className="relative pt-[clamp(72px,10vw,160px)]">
          <Marquee
            duration={48}
            className="border-y border-white/12 py-[clamp(14px,1.6vw,24px)]"
            itemClassName="font-display text-[clamp(40px,6.6vw,120px)] font-black leading-none tracking-[-0.04em]"
            items={CHAIN.flatMap((step, i) => [
              <span key={step.key} className={i % 2 ? "outline-text text-paper" : "text-paper"}>
                {step.zh}
              </span>,
              <span key={`${step.key}-sep`} className="mx-[0.35em] inline-block h-[0.14em] w-[0.7em] bg-red" />,
            ])}
          />
          <div className="wrap pb-[clamp(40px,5vw,72px)] pt-[clamp(56px,8vw,128px)]">
            <SectionHead
              index="01"
              eyebrow="The chain"
              onDark
              lines={["六个环节，", "连成一条链"]}
              desc="从一张采购合同到一份成本报表，业务单据在同一数据底座上逐级流转。每一步都可追溯，每一笔都对得上。"
            />
          </div>
          <ChainScrolly />
        </div>
      </section>

      {/* ───────── 数字 ───────── */}
      <section className="bg-paper">
        <div className="wrap py-[clamp(72px,10vw,160px)]">
          <SectionHead index="02" eyebrow="By the numbers" lines={["二十年行业经验，", "沉淀为一套系统"]} />
          <div className="hairgrid mt-[clamp(40px,6vw,96px)] grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <Reveal
                key={stat.caption}
                delay={i * 90}
                className="flex flex-col justify-between gap-[clamp(40px,6vw,104px)] p-[clamp(18px,2.2vw,36px)]"
              >
                <span className="eyebrow text-mute">{stat.caption}</span>
                <div>
                  <div className={`num text-[clamp(56px,8.6vw,164px)] leading-[0.9] ${stat.red ? "text-red" : ""}`}>
                    <Counter value={stat.value} />
                    <span className="text-[0.5em] tracking-normal">{stat.suffix}</span>
                  </div>
                  <div className="mt-4 text-[clamp(14px,1.1vw,17px)] font-medium">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 产品与服务 ───────── */}
      <section className="bg-paper">
        <div className="wrap pb-[clamp(72px,10vw,160px)]">
          <SectionHead
            index="03"
            eyebrow="Products & services"
            lines={["产品与服务"]}
            desc="沿袭制造行业管理最佳实践，提供从方案咨询到落地运维的一体化服务体系，帮助制造企业快速完成数字化升级。"
          />
          <div className="mt-[clamp(40px,6vw,96px)]">
            {SERVICES.map((service) => (
              <Reveal key={service.no}>
                <Link
                  href={service.href}
                  className="flip-row group grid grid-cols-12 items-start gap-x-6 gap-y-4 border-t border-line px-[clamp(0px,1.2vw,20px)] py-[clamp(24px,3vw,48px)] last:border-b"
                >
                  <span className="eyebrow col-span-12 text-red md:col-span-1 md:pt-3">{service.no}</span>
                  <h3 className="title col-span-12 text-[clamp(24px,3vw,48px)] md:col-span-6">{service.title}</h3>
                  <div className="col-span-10 md:col-span-4">
                    <p className="flip-mute text-[15px] leading-[1.75] text-mute">{service.description}</p>
                    <ul className="mt-4 flex flex-col gap-2">
                      {service.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-[14px] leading-[1.6]">
                          <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-red" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="col-span-2 flex justify-end md:col-span-1 md:pt-2">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-current transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-45">
                      <Arrow />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 经营指标 ───────── */}
      <section className="bg-paper-2">
        <div className="wrap py-[clamp(72px,10vw,160px)]">
          <SectionHead
            index="04"
            eyebrow="Live operations"
            lines={["实时经营指标"]}
            desc="将采购、生产、库存、财务与成本指标统一到同一数据底座，以数据驱动的方式持续优化经营决策。"
          />
          <div className="mt-[clamp(40px,6vw,96px)] grid gap-x-10 gap-y-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-baseline justify-between">
                <span className="text-[15px] font-semibold">核心 KPI 指标</span>
                <span className="eyebrow text-mute">KPI / %</span>
              </div>
              {KPIS.map((kpi, i) => (
                <Reveal key={kpi.label} delay={i * 70} className="border-t border-line py-[clamp(14px,1.6vw,22px)] last:border-b">
                  <div className="flex items-end justify-between gap-6">
                    <span className="text-[clamp(15px,1.3vw,19px)]">{kpi.label}</span>
                    <span className={`num text-[clamp(32px,4vw,64px)] leading-none ${kpi.red ? "text-red" : ""}`}>
                      <Counter value={kpi.value} duration={1400} />
                      <span className="text-[0.5em]">%</span>
                    </span>
                  </div>
                  <div className="mt-4 h-[3px] w-full bg-ink/10">
                    <Grow
                      delay={200 + i * 70}
                      className={`h-full ${kpi.red ? "bg-red" : "bg-ink"}`}
                      style={{ width: `${kpi.value}%` }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="mb-6 flex items-baseline justify-between">
                <span className="text-[15px] font-semibold">平台优势</span>
                <span className="eyebrow text-mute">Advantages</span>
              </div>
              <Rule className="!opacity-100 !bg-ink" />
              {ADVANTAGES.map((advantage, i) => (
                <Reveal
                  key={advantage}
                  delay={i * 70}
                  className="flex items-baseline gap-5 border-b border-line py-[clamp(16px,1.8vw,24px)]"
                >
                  <span className="eyebrow text-red">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[clamp(16px,1.4vw,21px)] font-medium">{advantage}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 产品实景 ───────── */}
      <section className="relative bg-ink py-[clamp(72px,8vw,120px)] text-paper lg:py-0">
        <Gallery />
      </section>

      <CtaBand />
    </>
  )
}
