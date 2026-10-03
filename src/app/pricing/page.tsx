import type { Metadata } from "next"
import { Lines, Reveal } from "@/components/site/motion"
import { Btn, CtaBand, PageHero, SectionHead, Tag } from "@/components/site/ui"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "价格方案",
  description:
    "灵活的定价方案，满足不同规模企业的数字化转型需求。提供标准版、专业版和企业版多种选择。",
}

const CHECK = "✓"
const DASH = "—"

type Plan = {
  no: string
  name: string
  en: string
  price: string
  unit?: string
  desc: string
  features: string[]
  cta: { label: string; href: string; external?: boolean }
  popular?: boolean
}

const PLANS: Plan[] = [
  {
    no: "01",
    name: "标准版",
    en: "Standard",
    price: "¥19,800",
    unit: "/月",
    desc: "适合中小型制造企业的协同管理基础需求。",
    features: ["最多支持 20 个用户账号", "供应链管理（采购/销售/库存）", "标准报表模板", "邮件技术支持", "基础培训服务"],
    cta: { label: "开始试用", href: siteConfig.loginUrl, external: true },
  },
  {
    no: "02",
    name: "专业版",
    en: "Professional",
    price: "¥39,800",
    unit: "/月",
    desc: "适合中型制造企业的全面协同管理。",
    features: [
      "最多支持 100 个用户账号",
      "供应链 + 生产制造 + 财务管理",
      "自定义报表和经营看板",
      "电话 + 在线技术支持",
      "现场培训服务",
      "API 集成支持",
    ],
    cta: { label: "立即开始", href: siteConfig.loginUrl, external: true },
    popular: true,
  },
  {
    no: "03",
    name: "企业版",
    en: "Enterprise",
    price: "定制报价",
    desc: "大型制造集团的多租户协同制造解决方案。",
    features: [
      "无限用户与多租户/多组织",
      "全功能模块（含成本/投资/工作流）",
      "定制化开发服务",
      "7×24 小时专属支持",
      "专业实施团队",
      "私有化部署选项",
    ],
    cta: { label: "联系销售", href: "/contact" },
  },
]

const COMPARISON_ROWS: { name: string; cells: string[] }[] = [
  { name: "供应链管理（采购/销售/库存）", cells: [CHECK, CHECK, CHECK] },
  { name: "生产制造（工单/BOM/工艺/质检）", cells: ["基础", CHECK, CHECK] },
  { name: "财务与成本管理", cells: [DASH, CHECK, CHECK] },
  { name: "报表中心 / 经营分析", cells: ["标准报表", "自定义", "高级分析"] },
  { name: "工作流审批", cells: ["基础", CHECK, CHECK] },
  { name: "API 集成", cells: [DASH, CHECK, CHECK] },
  { name: "多租户 / 多组织", cells: [DASH, DASH, CHECK] },
  { name: "私有化部署", cells: [DASH, DASH, CHECK] },
]

const FAQS = [
  { q: "是否提供免费试用？", a: "是的，我们为所有新客户提供 30 天免费试用期，您可以体验完整的产品功能。" },
  { q: "如何进行系统部署？", a: "我们提供云端 SaaS 和私有化部署两种方式，根据您的需求和 IT 环境选择最适合的部署方案。" },
  { q: "包含哪些技术支持？", a: "所有方案都包含技术支持，专业版和企业版提供更快速的响应和更全面的服务。" },
  { q: "可以随时升级方案吗？", a: "当然可以，您可以根据业务发展需要随时升级到更高级的方案。" },
]

function ComparisonCell({ value, highlight }: { value: string; highlight: boolean }) {
  if (value === CHECK)
    return (
      <>
        <span aria-hidden className={`inline-block h-[9px] w-[9px] ${highlight ? "bg-red" : "bg-paper"}`} />
        <span className="sr-only">包含</span>
      </>
    )
  if (value === DASH)
    return (
      <>
        <span aria-hidden className="inline-block h-px w-4 bg-white/25 align-middle" />
        <span className="sr-only">不包含</span>
      </>
    )
  return <span className="font-jbmono text-[12px] tracking-[0.06em] text-paper/85">{value}</span>
}

export default function PricingPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="Pricing"
        lines={[
          "选择适合",
          <span key="l2" className="text-red">
            您的方案
          </span>,
        ]}
        desc="灵活的定价模式，从小规模试用到企业级部署，满足不同阶段的数字化转型需求。所有新客户均享 30 天免费试用。"
        meta={[
          { label: "Plans", value: "标准版 / 专业版 / 企业版" },
          { label: "Free trial", value: "30 天免费试用" },
          { label: "Deployment", value: "云端 SaaS / 私有化部署" },
          { label: "Support", value: "所有方案均含技术支持" },
        ]}
      />

      {/* ───────── 套餐：发丝线三栏，推荐列反白为墨色 ───────── */}
      <section className="bg-paper">
        <div className="wrap py-[clamp(72px,10vw,160px)]">
          <SectionHead index="01" eyebrow="Plans" lines={["三种方案，", "按阶段选择"]} />

          <div className="hairgrid mt-[clamp(40px,6vw,96px)] lg:grid-cols-3">
            {PLANS.map((plan, i) => {
              const dark = !!plan.popular
              return (
                <Reveal
                  key={plan.name}
                  delay={i * 110}
                  className={`relative flex flex-col p-[clamp(22px,2.6vw,44px)] ${dark ? "!bg-ink text-paper" : ""}`}
                >
                  {dark && <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />}
                  <div className="relative flex flex-1 flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className={`eyebrow ${dark ? "text-mute-d" : "text-mute"}`}>
                        {plan.no} / {plan.en}
                      </span>
                      {plan.popular && (
                        <span className="bg-red px-2.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-white">
                          最受欢迎
                        </span>
                      )}
                    </div>

                    <h3 className="title mt-[clamp(28px,4vw,64px)] text-[clamp(26px,2.6vw,40px)]">{plan.name}</h3>

                    <div className="mt-[clamp(16px,2vw,28px)] flex items-baseline gap-2 text-[clamp(56px,14vw,96px)] leading-none lg:text-[clamp(46px,5.2vw,92px)]">
                      {plan.unit ? (
                        <span className={`num ${dark ? "text-red" : ""}`}>{plan.price}</span>
                      ) : (
                        <span className="display text-[0.6em] leading-[1.3]">{plan.price}</span>
                      )}
                      {plan.unit && (
                        <span className={`font-grotesk text-[15px] tracking-normal ${dark ? "text-mute-d" : "text-mute"}`}>
                          {plan.unit}
                        </span>
                      )}
                    </div>

                    <p className={`mt-5 text-[15px] leading-[1.75] ${dark ? "text-mute-d" : "text-mute"}`}>{plan.desc}</p>

                    <ul
                      className={`mt-[clamp(24px,3vw,44px)] flex flex-1 flex-col border-t ${dark ? "border-white/12" : "border-line"}`}
                    >
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex gap-3 border-b py-3.5 text-[14px] leading-[1.6] ${dark ? "border-white/12" : "border-line"}`}
                        >
                          <span aria-hidden className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-red" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-[clamp(28px,3.4vw,52px)]">
                      <Btn
                        href={plan.cta.href}
                        external={plan.cta.external}
                        variant={dark ? "red" : "ink"}
                        onDark={dark}
                        magnetic={dark}
                      >
                        {plan.cta.label}
                      </Btn>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── 功能对比 ───────── */}
      <section className="relative bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <div className="wrap relative py-[clamp(72px,10vw,160px)]">
          <SectionHead index="02" eyebrow="Compare" onDark lines={["功能对比"]} />

          <Reveal className="mt-[clamp(40px,6vw,96px)]">
            <div className="relative -mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)]" tabIndex={0} role="region" aria-label="功能对比表">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-paper">
                    <th scope="col" className="eyebrow w-[40%] py-5 pr-4 align-bottom font-medium text-mute-d">
                      功能模块
                    </th>
                    {PLANS.map((plan) => (
                      <th
                        key={plan.name}
                        scope="col"
                        className={`w-[20%] px-3 py-5 text-center align-bottom ${plan.popular ? "bg-white/[0.06]" : ""}`}
                      >
                        <span className={`eyebrow block ${plan.popular ? "text-red" : "text-mute-d"}`}>{plan.en}</span>
                        <span className="title mt-2 block text-[clamp(17px,1.8vw,28px)]">{plan.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, i) => (
                    <tr key={row.name} className="border-b border-white/12 transition-colors duration-300 hover:bg-white/[0.04]">
                      <th scope="row" className="py-[clamp(16px,1.7vw,26px)] pr-4 font-normal">
                        <span className="flex items-baseline gap-4">
                          <span aria-hidden className="eyebrow text-mute-d">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[clamp(14px,1.25vw,19px)]">{row.name}</span>
                        </span>
                      </th>
                      {row.cells.map((cell, j) => (
                        <td key={j} className={`px-3 text-center ${PLANS[j].popular ? "bg-white/[0.06]" : ""}`}>
                          <ComparisonCell value={cell} highlight={!!PLANS[j].popular} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="bg-paper">
        <div className="wrap py-[clamp(72px,10vw,160px)]">
          <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal variant="fade">
                  <Tag index="03">FAQ</Tag>
                </Reveal>
                <Lines lines={["常见问题"]} className="title mt-7 text-[clamp(32px,5.2vw,88px)]" />
              </div>
            </div>
            <dl className="lg:col-span-8">
              {FAQS.map((faq, i) => (
                <Reveal
                  key={faq.q}
                  delay={i * 70}
                  className="grid grid-cols-12 gap-x-6 gap-y-3 border-t border-line py-[clamp(24px,3vw,44px)] last:border-b"
                >
                  <span aria-hidden className="eyebrow col-span-12 text-red md:col-span-1 md:pt-2.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="title col-span-12 text-[clamp(20px,2.1vw,32px)] md:col-span-5">{faq.q}</dt>
                  <dd className="col-span-12 text-[15px] leading-[1.85] text-mute md:col-span-6 md:pt-1.5">{faq.a}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand
        lines={["准备开始您的", "数字化转型？"]}
        sub="立即开始 30 天免费试用，或联系我们获取定制方案。"
        primary={{ label: "免费试用 Free trial", href: siteConfig.loginUrl }}
        secondary={{ label: "联系销售 Sales", href: "/contact" }}
      />
    </>
  )
}
