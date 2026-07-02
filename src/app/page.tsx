import Link from "next/link"

// 首页 —— 按 claude.ai/design "Portal design" 项目 Home.dc.html 逐值重构
// 设计语言：白底、红色强调 #E10A1F、英文标签 Space Grotesk、数字 JetBrains Mono

const HERO_STATS = [
  { value: "50+", label: "服务客户", caption: "CLIENTS", tinted: true },
  { value: "8", label: "核心业务模块", caption: "MODULES", tinted: false },
  { value: "20", unit: "年", label: "行业经验", caption: "YEARS", tinted: false },
  { value: "96%", label: "订单准时交付率", caption: "ON-TIME DELIVERY", tinted: true, red: true }
]

const HERO_PILLS = ["多租户 SaaS 快速上线", "采购到财务全链路打通", "工作流审批灵活可配"]

const SERVICES = [
  {
    no: "01",
    title: "领跃协同制造管理系统",
    description: "覆盖采购、销售、生产、库存、财务、成本的全链路业务协同。",
    points: ["打通供应链与财务，降低库存积压与对账差错", "跨部门在线协同，提升单据流转与履约效率"]
  },
  {
    no: "02",
    title: "专业的实施、开发、运维服务",
    description: "以客户业务为核心，从咨询、实施到运维全程陪伴。",
    points: ["以客户为中心，赋能企业数字化转型"]
  },
  {
    no: "03",
    title: "一体化数字化经营方案",
    description: "结合制造行业经验，提供端到端的业务中台与经营分析。",
    points: ["供应链、制造、财务成本、报表分析模块化组合", "支持多租户 SaaS 与经营数据闭环"]
  }
]

const KPIS = [
  { label: "订单准时交付率", value: 96, color: "#E10A1F" },
  { label: "库存周转率", value: 82, color: "#1C2230" },
  { label: "应收回款率", value: 92, color: "#4A5468" },
  { label: "月度结账及时率", value: 95, color: "#6E7889" },
  { label: "单据审批时效", value: 88, color: "#98A1B2" }
]

const ADVANTAGES = [
  "全业务链路在线协同",
  "多租户数据隔离与权限管控",
  "可配置的工作流审批引擎",
  "实时经营报表与成本分析",
  "灵活的开放集成能力"
]

function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <>
      <div className="mb-4 flex flex-wrap items-baseline gap-3.5">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">{eyebrow}</span>
        <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">{title}</h2>
      </div>
      <p className="mb-9 mt-0 max-w-[640px] text-[14px] leading-[1.7] text-[#6E7889]">{desc}</p>
    </>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[clamp(32px,5vw,64px)] px-[clamp(16px,3vw,32px)] pb-[clamp(40px,6vw,72px)] pt-[clamp(48px,7vw,88px)]">
        <div className="flex flex-col gap-[22px]">
          <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">
            COLLABORATIVE MANUFACTURING CLOUD
          </span>
          <h1 className="m-0 text-pretty text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#11151E]">
            一体化协同制造管理
            <br />
            让经营尽在掌握
          </h1>
          <p className="font-grotesk m-0 text-[clamp(14px,1.6vw,17px)] tracking-[-0.01em] text-[#6E7889]">
            One platform from procurement to finance.
          </p>
          <p className="m-0 max-w-[520px] text-[15px] leading-[1.75] text-[#4A5468]">
            借助领跃（LeanLeap）协同制造管理系统，将采购、销售、生产、库存、财务、成本紧密连接，构建以数据驱动的一体化经营平台，持续提升协同效率与经营质量。
          </p>
          <div className="mt-1.5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              预约演示 Book a demo
            </Link>
            <Link
              href="/products"
              className="rounded-lg border border-[#C4CBD7] px-[26px] py-[13px] text-[14px] font-medium text-[#1C2230] no-underline transition-colors hover:border-[#98A1B2]"
            >
              了解产品 Explore
            </Link>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-2.5">
            {HERO_PILLS.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2 rounded-full border border-[#EDF0F6] bg-[#F7F9FC] px-3.5 py-[7px] text-[12px] text-[#4A5468]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E10A1F]" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#E2E7EF] bg-[#E2E7EF]">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.caption}
              className={`flex flex-col gap-1.5 px-[clamp(16px,2vw,24px)] py-[clamp(18px,2.5vw,28px)] ${stat.tinted ? "bg-[#F7F9FC]" : "bg-white"}`}
            >
              <span
                className={`font-jbmono text-[clamp(24px,3vw,34px)] font-semibold ${stat.red ? "text-[#E10A1F]" : "text-[#11151E]"}`}
              >
                {stat.value}
                {stat.unit && <span className="text-[0.6em]">{stat.unit}</span>}
              </span>
              <span className="text-[13px] text-[#1C2230]">{stat.label}</span>
              <span className="font-grotesk text-[11px] tracking-[0.08em] text-[#98A1B2]">{stat.caption}</span>
            </div>
          ))}
        </div>
      </div>

      {/* services */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <SectionHeading
            eyebrow="PRODUCTS & SERVICES"
            title="产品与服务"
            desc="沿袭制造行业管理最佳实践，提供从方案咨询到落地运维的一体化服务体系，帮助制造企业快速完成数字化升级。"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {SERVICES.map((service) => (
              <div key={service.no} className="flex flex-col gap-3 rounded-xl border border-[#E2E7EF] bg-white p-7">
                <span className="font-jbmono text-[12px] text-[#98A1B2]">{service.no}</span>
                <span className="text-[17px] font-semibold leading-[1.4] text-[#11151E]">{service.title}</span>
                <p className="m-0 text-[13px] leading-[1.7] text-[#6E7889]">{service.description}</p>
                <div className="mt-1 flex flex-col gap-2">
                  {service.points.map((point) => (
                    <span key={point} className="flex gap-2 text-[13px] text-[#4A5468]">
                      <span className="shrink-0 text-[#E10A1F]">—</span>
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* KPI + advantages */}
      <div className="border-t border-[#E2E7EF] bg-white">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <SectionHeading
            eyebrow="LIVE OPERATIONS"
            title="实时经营指标"
            desc="将采购、生产、库存、财务与成本指标统一到同一数据底座，以数据驱动的方式持续优化经营决策。"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
            <div className="flex flex-col gap-5 rounded-xl border border-[#E2E7EF] p-7">
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-semibold text-[#11151E]">核心 KPI 指标</span>
                <span className="text-[12px] text-[#98A1B2]">结合业务单据与实时数据，形成面向经营的指标体系</span>
              </div>
              <div className="flex flex-col gap-3.5">
                {KPIS.map((kpi) => (
                  <div key={kpi.label} className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[12px]">
                      <span className="text-[#4A5468]">{kpi.label}</span>
                      <span className="font-jbmono font-semibold text-[#11151E]">{kpi.value}%</span>
                    </div>
                    <div className="h-1.5 rounded-[3px] bg-[#EDF0F6]">
                      <div
                        className="h-1.5 rounded-[3px]"
                        style={{ width: `${kpi.value}%`, background: kpi.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-xl border border-[#E2E7EF] bg-[#F7F9FC] p-7">
              <div className="flex flex-col gap-1">
                <span className="text-[15px] font-semibold text-[#11151E]">平台优势</span>
                <span className="text-[12px] text-[#98A1B2]">沉淀制造企业管理最佳实践，全面覆盖经营全景</span>
              </div>
              <div className="flex flex-col">
                {ADVANTAGES.map((advantage, i) => (
                  <div
                    key={advantage}
                    className={`flex items-baseline gap-3 py-[13px] ${i < ADVANTAGES.length - 1 ? "border-b border-[#EDF0F6]" : ""}`}
                  >
                    <span className="font-jbmono text-[11px] text-[#E10A1F]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[13px] text-[#1C2230]">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#11151E]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,56px)]">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[clamp(20px,2.6vw,26px)] font-semibold tracking-[-0.02em] text-[#F6F8FC]">
              开启您的协同制造管理升级
            </h2>
            <span className="font-grotesk text-[13px] text-[#8B95A8]">
              Tailored demo for your industry — talk to a consultant.
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              联系顾问 Contact us
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              查看价格 Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
