import type { Metadata } from "next"
import Link from "next/link"

import { Reveal, Rule, ScrollScene } from "@/components/site/motion"
import { Arrow, Btn, CtaBand, PageHero, SectionHead, ShotFrame } from "@/components/site/ui"

export const metadata: Metadata = {
  title: "产品",
  description:
    "了解领跃协同制造管理云平台的核心产品功能，涵盖供应链管理、生产制造、财务管理、成本管理与经营分析等。",
}

const PRODUCT_CLOUDS = [
  {
    id: "supply-chain",
    eyebrow: "Supply chain cloud",
    name: "供应链管理",
    description: "打通采购、销售与仓储全链路，订单与库存实时协同，提升周转效率。",
    features: ["采购合同 / 订单 / 入库", "销售订单 / 出库 / 发票", "库存与 WMS 管理", "移库与盘点"],
    shot: { src: "/shots/sales.jpg", label: "销售订单" },
  },
  {
    id: "manufacturing",
    eyebrow: "Manufacturing cloud",
    name: "生产制造 · 制造云",
    description: "面向协同制造的生产工单与工艺管理，从 BOM 到质检全程可控。",
    features: ["生产工单管理", "BOM 物料清单", "工艺路线管理", "生产质检"],
    shot: { src: "/shots/manufacturing.jpg", label: "生产工单" },
  },
  {
    id: "finance",
    eyebrow: "Finance cloud",
    name: "财务管理 · 财务云",
    description: "业务财务一体化，应收应付与收付款自动对账，凭证与账户清晰可查。",
    features: ["应收应付管理", "收付款与对账", "凭证管理", "银行账户管理"],
    shot: { src: "/shots/finance.jpg", label: "应收单" },
  },
  {
    id: "analytics",
    eyebrow: "Analytics",
    name: "报表中心 · 经营分析",
    description: "强大的数据分析和可视化能力，为经营决策提供实时数据支持。",
    features: ["BI 经营报表", "经营看板", "趋势分析", "定制报表"],
    shot: { src: "/shots/workbench.jpg", label: "工作台" },
  },
]

const CORE_MODULES = [
  { no: "M-01", name: "采购管理", desc: "覆盖采购合同、订单与入库，供应商协同高效透明。" },
  { no: "M-02", name: "销售管理", desc: "贯通销售订单、出库与发票，订单履约一目了然。" },
  { no: "M-03", name: "库存与 WMS", desc: "多仓库存、移库与盘点，库存数据实时准确。" },
  { no: "M-04", name: "生产制造", desc: "生产工单、BOM 与工艺路线，制造过程协同可控。" },
  { no: "M-05", name: "财务管理", desc: "应收应付、收付款与凭证，业财一体自动对账。" },
  { no: "M-06", name: "成本管理", desc: "成本核算与月结，实时掌握成本构成与变化。" },
  { no: "M-07", name: "投资管理", desc: "基金与投资业务管理，资金运作清晰可追溯。" },
  { no: "M-08", name: "工作流审批", desc: "Warm-Flow 引擎驱动单据审批，流程灵活可配。" },
]

const ADVANTAGES = [
  { name: "多租户 SaaS 架构", desc: "云原生多租户隔离，开箱即用，按需弹性扩展。" },
  { name: "业务全程协同", desc: "采购、生产、销售、财务一体化，数据实时打通。" },
  { name: "灵活工作流审批", desc: "基于 Warm-Flow 的可视化审批，单据流转可配置。" },
  { name: "RBAC 权限管控", desc: "细粒度角色权限与数据权限，安全合规可控。" },
  { name: "业财一体核算", desc: "业务单据自动生成凭证，成本与利润实时可见。" },
  { name: "经营数据可视化", desc: "BI 报表与经营看板，为经营决策提供实时依据。" },
]

const pad = (n: number) => String(n).padStart(2, "0")
const TOTAL = pad(PRODUCT_CLOUDS.length)

export default function ProductsPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Product suite"
        lines={["协同制造管理", <span key="l2">产品<span className="text-red">套件</span></span>]}
        desc="覆盖采购、生产、销售、财务的一体化协同管理产品矩阵，助力制造企业经营数字化升级。"
        meta={PRODUCT_CLOUDS.map((cloud, i) => ({ label: `${pad(i + 1)} — ${cloud.eyebrow}`, value: cloud.name }))}
      >
        <Btn href="/contact" magnetic>
          预约演示
        </Btn>
        <Btn href="#supply-chain" variant="ghost">
          浏览产品云
        </Btn>
      </PageHero>

      {/* ───────── 产品云目录 ───────── */}
      <nav aria-label="产品云目录" className="bg-paper">
        <div className="wrap pt-[clamp(40px,6vw,96px)]">
          {PRODUCT_CLOUDS.map((cloud, i) => (
            <Reveal key={cloud.id} delay={i * 60}>
              <Link
                href={`#${cloud.id}`}
                className="flip-row group grid grid-cols-12 items-center gap-x-4 border-t border-line px-[clamp(0px,1.2vw,20px)] py-[clamp(14px,1.8vw,26px)] last:border-b"
              >
                <span className="eyebrow col-span-2 text-red md:col-span-1">{pad(i + 1)}</span>
                <span className="title col-span-8 text-[clamp(20px,3.4vw,56px)] md:col-span-7">{cloud.name}</span>
                <span className="eyebrow flip-mute col-span-3 hidden text-mute md:block">{cloud.eyebrow}</span>
                <span className="col-span-2 flex justify-end md:col-span-1">
                  <Arrow className="rotate-90 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </nav>

      {/* ───────── 四朵产品云：大序号 + 截图左右交错 ───────── */}
      <section className="overflow-hidden bg-paper pt-[clamp(72px,10vw,160px)]">
        {PRODUCT_CLOUDS.map((cloud, i) => {
          const flip = i % 2 === 1
          return (
            <article
              key={cloud.id}
              id={cloud.id}
              aria-labelledby={`${cloud.id}-title`}
              className={`scroll-mt-28 border-t border-line ${flip ? "bg-paper-2" : "bg-paper"}`}
            >
              <div className="wrap grid items-center gap-x-10 gap-y-12 py-[clamp(56px,8vw,136px)] lg:grid-cols-12">
                <div className={`lg:col-span-4 lg:row-start-1 ${flip ? "lg:col-start-9" : "lg:col-start-1"}`}>
                  <Reveal variant="fade" className="flex items-end justify-between gap-6">
                    <span aria-hidden className="num text-[clamp(96px,13vw,232px)] leading-[0.78]">
                      {pad(i + 1)}
                    </span>
                    <span className="eyebrow pb-1 text-right text-mute">
                      {pad(i + 1)} / {TOTAL}
                      <br />
                      {cloud.eyebrow}
                    </span>
                  </Reveal>
                  <Rule className="mt-[clamp(24px,3vw,44px)] !bg-ink !opacity-100" />
                  <Reveal delay={80}>
                    <h2 id={`${cloud.id}-title`} className="title mt-[clamp(24px,3vw,44px)] text-[clamp(30px,3.6vw,60px)] text-balance">
                      {cloud.name}
                    </h2>
                    <p className="mt-5 text-[clamp(15px,1.15vw,18px)] leading-[1.8] text-mute">{cloud.description}</p>
                  </Reveal>
                  <ul className="mt-[clamp(24px,3vw,40px)]">
                    {cloud.features.map((feature, j) => (
                      <Reveal
                        as="li"
                        key={feature}
                        delay={140 + j * 60}
                        className="flex items-center gap-3 border-t border-line py-3.5 text-[clamp(14px,1.05vw,16px)] font-medium last:border-b"
                      >
                        <span aria-hidden className="h-[5px] w-[5px] shrink-0 bg-red" />
                        {feature}
                        <span aria-hidden className="eyebrow ml-auto text-mute">
                          {pad(j + 1)}
                        </span>
                      </Reveal>
                    ))}
                  </ul>
                </div>

                <ScrollScene
                  className={`lg:col-span-7 lg:row-start-1 ${flip ? "lg:col-start-1" : "lg:col-start-6"}`}
                >
                  <Reveal variant="scale">
                    <div
                      className="will-change-transform"
                      style={{ transform: "translate3d(0, calc((0.5 - var(--p, 0.5)) * 56px), 0)" }}
                    >
                      <ShotFrame
                        src={cloud.shot.src}
                        alt={`领跃${cloud.name}产品界面：${cloud.shot.label}`}
                        label={`leanleap.app — ${cloud.shot.label}`}
                      />
                    </div>
                  </Reveal>
                </ScrollScene>
              </div>
            </article>
          )
        })}
      </section>

      {/* ───────── 核心功能模块 ───────── */}
      <section className="relative bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <div className="wrap relative py-[clamp(72px,10vw,160px)]">
          <SectionHead
            index="05"
            eyebrow="Core modules"
            onDark
            lines={["核心功能模块"]}
            desc="沿用成熟平台能力，并以云原生架构进一步提升扩展性与交付速度。"
          />
          <div className="hairgrid on-dark mt-[clamp(40px,6vw,96px)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_MODULES.map((mod, i) => (
              <Reveal key={mod.no} delay={(i % 4) * 80}>
                <div className="flip-row flex h-full min-h-[clamp(200px,20vw,320px)] flex-col justify-between gap-10 p-[clamp(20px,2.2vw,36px)] [--flip-bg:var(--color-red)] [--flip-fg:#fff]">
                  <span className="eyebrow flip-mute text-red">{mod.no}</span>
                  <div>
                    <h3 className="title text-[clamp(22px,2.2vw,36px)]">{mod.name}</h3>
                    <p className="flip-mute mt-3 text-[14px] leading-[1.75] text-mute-d">{mod.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 产品优势 ───────── */}
      <section className="bg-paper">
        <div className="wrap py-[clamp(72px,10vw,160px)]">
          <SectionHead index="06" eyebrow="Why LeanLeap" lines={["产品优势"]} />
          <div className="mt-[clamp(40px,6vw,96px)]">
            {ADVANTAGES.map((adv, i) => (
              <Reveal key={adv.name} delay={i * 50} className="border-t border-line last:border-b">
                <div className="flip-row grid grid-cols-12 items-baseline gap-x-6 gap-y-3 px-[clamp(0px,1.2vw,20px)] py-[clamp(20px,2.6vw,40px)]">
                  <span className="eyebrow col-span-12 text-red md:col-span-1">{pad(i + 1)}</span>
                  <h3 className="title col-span-12 text-[clamp(24px,3.4vw,56px)] md:col-span-6">{adv.name}</h3>
                  <p className="flip-mute col-span-12 text-[clamp(15px,1.15vw,18px)] leading-[1.75] text-mute md:col-span-4 md:col-start-9">
                    {adv.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        lines={["准备开始", "数字化转型？"]}
        sub="联系我们的专家，获取定制化解决方案。"
        primary={{ label: "预约演示", href: "/contact" }}
        secondary={{ label: "下载产品手册", href: "/resources" }}
      />
    </>
  )
}
