import type { Metadata } from "next"
import Link from "next/link"

// 产品页 —— 按 claude.ai/design "Portal design" 项目 Products.dc.html 逐值重构

export const metadata: Metadata = {
  title: "产品",
  description:
    "了解领跃协同制造管理云平台的核心产品功能，涵盖供应链管理、生产制造、财务管理、成本管理与经营分析等。",
}

const PRODUCT_CLOUDS = [
  {
    id: "supply-chain",
    eyebrow: "SUPPLY CHAIN CLOUD",
    name: "供应链管理",
    description: "打通采购、销售与仓储全链路，订单与库存实时协同，提升周转效率。",
    features: ["采购合同 / 订单 / 入库", "销售订单 / 出库 / 发票", "库存与 WMS 管理", "移库与盘点"]
  },
  {
    id: "manufacturing",
    eyebrow: "MANUFACTURING CLOUD",
    name: "生产制造 · 制造云",
    description: "面向协同制造的生产工单与工艺管理，从 BOM 到质检全程可控。",
    features: ["生产工单管理", "BOM 物料清单", "工艺路线管理", "生产质检"]
  },
  {
    id: "finance",
    eyebrow: "FINANCE CLOUD",
    name: "财务管理 · 财务云",
    description: "业务财务一体化，应收应付与收付款自动对账，凭证与账户清晰可查。",
    features: ["应收应付管理", "收付款与对账", "凭证管理", "银行账户管理"]
  },
  {
    id: "analytics",
    eyebrow: "ANALYTICS",
    name: "报表中心 · 经营分析",
    description: "强大的数据分析和可视化能力，为经营决策提供实时数据支持。",
    features: ["BI 经营报表", "经营看板", "趋势分析", "定制报表"]
  }
]

const CORE_MODULES = [
  { no: "M-01", name: "采购管理", desc: "覆盖采购合同、订单与入库，供应商协同高效透明。" },
  { no: "M-02", name: "销售管理", desc: "贯通销售订单、出库与发票，订单履约一目了然。" },
  { no: "M-03", name: "库存与 WMS", desc: "多仓库存、移库与盘点，库存数据实时准确。" },
  { no: "M-04", name: "生产制造", desc: "生产工单、BOM 与工艺路线，制造过程协同可控。" },
  { no: "M-05", name: "财务管理", desc: "应收应付、收付款与凭证，业财一体自动对账。" },
  { no: "M-06", name: "成本管理", desc: "成本核算与月结，实时掌握成本构成与变化。" },
  { no: "M-07", name: "投资管理", desc: "基金与投资业务管理，资金运作清晰可追溯。" },
  { no: "M-08", name: "工作流审批", desc: "Warm-Flow 引擎驱动单据审批，流程灵活可配。" }
]

const ADVANTAGES = [
  { name: "多租户 SaaS 架构", desc: "云原生多租户隔离，开箱即用，按需弹性扩展。" },
  { name: "业务全程协同", desc: "采购、生产、销售、财务一体化，数据实时打通。" },
  { name: "灵活工作流审批", desc: "基于 Warm-Flow 的可视化审批，单据流转可配置。" },
  { name: "RBAC 权限管控", desc: "细粒度角色权限与数据权限，安全合规可控。" },
  { name: "业财一体核算", desc: "业务单据自动生成凭证，成本与利润实时可见。" },
  { name: "经营数据可视化", desc: "BI 报表与经营看板，为经营决策提供实时依据。" }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)]">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">PRODUCT SUITE</span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          协同制造管理产品套件
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          覆盖采购、生产、销售、财务的一体化协同管理产品矩阵，助力制造企业经营数字化升级。
        </p>
      </div>

      {/* 4 product clouds */}
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {PRODUCT_CLOUDS.map((cloud) => (
            <div
              key={cloud.id}
              id={cloud.id}
              className="flex scroll-mt-20 flex-col gap-3.5 rounded-xl border border-[#E2E7EF] p-8 transition-colors hover:border-[#E10A1F]"
            >
              <span className="font-grotesk text-[11px] tracking-[0.1em] text-[#98A1B2]">{cloud.eyebrow}</span>
              <span className="text-[19px] font-semibold text-[#11151E]">{cloud.name}</span>
              <p className="m-0 text-[13px] leading-[1.7] text-[#6E7889]">{cloud.description}</p>
              <div className="mt-1 grid grid-cols-2 gap-2">
                {cloud.features.map((feature) => (
                  <span key={feature} className="flex items-baseline gap-2 text-[12px] text-[#4A5468]">
                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#E10A1F]" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8 core modules */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-4 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">CORE MODULES</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">核心功能模块</h2>
          </div>
          <p className="mb-9 mt-0 max-w-[640px] text-[14px] leading-[1.7] text-[#6E7889]">
            沿用成熟平台能力，并以云原生架构进一步提升扩展性与交付速度。
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {CORE_MODULES.map((mod) => (
              <div key={mod.no} className="flex flex-col gap-2 rounded-[10px] border border-[#E2E7EF] bg-white p-[22px]">
                <span className="font-jbmono text-[11px] text-[#E10A1F]">{mod.no}</span>
                <span className="text-[15px] font-semibold text-[#11151E]">{mod.name}</span>
                <span className="text-[12px] leading-[1.6] text-[#6E7889]">{mod.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* advantages */}
      <div className="border-t border-[#E2E7EF] bg-white">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">WHY LEANLEAP</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">产品优势</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] border-t border-[#E2E7EF]">
            {ADVANTAGES.map((adv) => (
              <div key={adv.name} className="flex flex-col gap-2 border-b border-[#E2E7EF] py-[26px] pr-6">
                <span className="text-[15px] font-semibold text-[#11151E]">{adv.name}</span>
                <span className="text-[13px] leading-[1.7] text-[#6E7889]">{adv.desc}</span>
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
              准备开始数字化转型？
            </h2>
            <span className="text-[13px] text-[#8B95A8]">联系我们的专家，获取定制化解决方案。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              预约演示 Book a demo
            </Link>
            <Link
              href="/resources"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              下载产品手册
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
