import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

// 价格页 —— 按 claude.ai/design "Portal design" 项目 Pricing.dc.html 逐值重构

export const metadata: Metadata = {
  title: "价格方案",
  description:
    "灵活的定价方案，满足不同规模企业的数字化转型需求。提供标准版、专业版和企业版多种选择。",
}

const CHECK = "✓"
const DASH = "—"

const COMPARISON_ROWS: { name: string; cells: string[] }[] = [
  { name: "供应链管理（采购/销售/库存）", cells: [CHECK, CHECK, CHECK] },
  { name: "生产制造（工单/BOM/工艺/质检）", cells: ["基础", CHECK, CHECK] },
  { name: "财务与成本管理", cells: [DASH, CHECK, CHECK] },
  { name: "报表中心 / 经营分析", cells: ["标准报表", "自定义", "高级分析"] },
  { name: "工作流审批", cells: ["基础", CHECK, CHECK] },
  { name: "API 集成", cells: [DASH, CHECK, CHECK] },
  { name: "多租户 / 多组织", cells: [DASH, DASH, CHECK] },
  { name: "私有化部署", cells: [DASH, DASH, CHECK] }
]

const FAQS = [
  { q: "是否提供免费试用？", a: "是的，我们为所有新客户提供 30 天免费试用期，您可以体验完整的产品功能。" },
  { q: "如何进行系统部署？", a: "我们提供云端 SaaS 和私有化部署两种方式，根据您的需求和 IT 环境选择最适合的部署方案。" },
  { q: "包含哪些技术支持？", a: "所有方案都包含技术支持，专业版和企业版提供更快速的响应和更全面的服务。" },
  { q: "可以随时升级方案吗？", a: "当然可以，您可以根据业务发展需要随时升级到更高级的方案。" }
]

function FeatureItem({ text }: { text: string }) {
  return (
    <span className="flex gap-2 text-[13px] text-[#4A5468]">
      <span className="text-[#0F9D70]">✓</span>
      {text}
    </span>
  )
}

function ComparisonCell({ value }: { value: string }) {
  if (value === CHECK) return <span className="text-center text-[13px] text-[#0F9D70]">✓</span>
  if (value === DASH) return <span className="text-center text-[13px] text-[#C4CBD7]">—</span>
  return <span className="text-center text-[12px] text-[#6E7889]">{value}</span>
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero（居中） */}
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)] text-center">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">PRICING</span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          选择适合您的方案
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          灵活的定价模式，从小规模试用到企业级部署，满足不同阶段的数字化转型需求。所有新客户均享 30 天免费试用。
        </p>
      </div>

      {/* plans */}
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,64px)] pt-4">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-stretch gap-5">
          {/* 标准版 */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#E2E7EF] p-8">
            <span className="text-[15px] font-semibold text-[#11151E]">
              标准版 <span className="font-grotesk text-[11px] font-medium tracking-[0.08em] text-[#98A1B2]">STANDARD</span>
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-jbmono text-[34px] font-semibold text-[#11151E]">¥19,800</span>
              <span className="text-[13px] text-[#98A1B2]">/月</span>
            </div>
            <p className="m-0 text-[13px] leading-[1.6] text-[#6E7889]">适合中小型制造企业的协同管理基础需求。</p>
            <div className="flex flex-1 flex-col gap-[9px] border-t border-[#EDF0F6] pt-4">
              {["最多支持 20 个用户账号", "供应链管理（采购/销售/库存）", "标准报表模板", "邮件技术支持", "基础培训服务"].map(
                (f) => <FeatureItem key={f} text={f} />
              )}
            </div>
            <a
              href={siteConfig.loginUrl}
              className="rounded-lg border border-[#C4CBD7] p-3 text-center text-[14px] font-medium text-[#1C2230] no-underline transition-colors hover:border-[#98A1B2]"
            >
              开始试用
            </a>
          </div>

          {/* 专业版（最受欢迎） */}
          <div className="relative flex flex-col gap-4 rounded-xl border-2 border-[#E10A1F] p-8 shadow-[0_8px_28px_rgba(225,10,31,.08)]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#E10A1F] px-3.5 py-1 text-[11px] font-semibold tracking-[0.04em] text-white">
              最受欢迎
            </span>
            <span className="text-[15px] font-semibold text-[#11151E]">
              专业版 <span className="font-grotesk text-[11px] font-medium tracking-[0.08em] text-[#98A1B2]">PROFESSIONAL</span>
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-jbmono text-[34px] font-semibold text-[#E10A1F]">¥39,800</span>
              <span className="text-[13px] text-[#98A1B2]">/月</span>
            </div>
            <p className="m-0 text-[13px] leading-[1.6] text-[#6E7889]">适合中型制造企业的全面协同管理。</p>
            <div className="flex flex-1 flex-col gap-[9px] border-t border-[#EDF0F6] pt-4">
              {[
                "最多支持 100 个用户账号",
                "供应链 + 生产制造 + 财务管理",
                "自定义报表和经营看板",
                "电话 + 在线技术支持",
                "现场培训服务",
                "API 集成支持"
              ].map((f) => <FeatureItem key={f} text={f} />)}
            </div>
            <a
              href={siteConfig.loginUrl}
              className="rounded-lg bg-[#E10A1F] p-[13px] text-center text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              立即开始
            </a>
          </div>

          {/* 企业版 */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#E2E7EF] p-8">
            <span className="text-[15px] font-semibold text-[#11151E]">
              企业版 <span className="font-grotesk text-[11px] font-medium tracking-[0.08em] text-[#98A1B2]">ENTERPRISE</span>
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-[30px] font-semibold tracking-[-0.02em] text-[#11151E]">定制报价</span>
            </div>
            <p className="m-0 text-[13px] leading-[1.6] text-[#6E7889]">大型制造集团的多租户协同制造解决方案。</p>
            <div className="flex flex-1 flex-col gap-[9px] border-t border-[#EDF0F6] pt-4">
              {[
                "无限用户与多租户/多组织",
                "全功能模块（含成本/投资/工作流）",
                "定制化开发服务",
                "7×24 小时专属支持",
                "专业实施团队",
                "私有化部署选项"
              ].map((f) => <FeatureItem key={f} text={f} />)}
            </div>
            <Link
              href="/contact"
              className="rounded-lg border border-[#C4CBD7] p-3 text-center text-[14px] font-medium text-[#1C2230] no-underline transition-colors hover:border-[#98A1B2]"
            >
              联系销售
            </Link>
          </div>
        </div>
      </div>

      {/* comparison */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">COMPARE</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">功能对比</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#E2E7EF] bg-white">
            <div className="min-w-[680px]">
              <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-[#E2E7EF] bg-[#F7F9FC] px-6 py-4">
                <span className="text-[13px] font-semibold text-[#11151E]">功能模块</span>
                <span className="text-center text-[13px] font-semibold text-[#11151E]">标准版</span>
                <span className="text-center text-[13px] font-semibold text-[#E10A1F]">专业版</span>
                <span className="text-center text-[13px] font-semibold text-[#11151E]">企业版</span>
              </div>
              {COMPARISON_ROWS.map((row, i) => (
                <div
                  key={row.name}
                  className={`grid grid-cols-[2fr_1fr_1fr_1fr] px-6 py-3.5 ${i < COMPARISON_ROWS.length - 1 ? "border-b border-[#EDF0F6]" : ""}`}
                >
                  <span className="text-[13px] text-[#1C2230]">{row.name}</span>
                  {row.cells.map((cell, j) => (
                    <ComparisonCell key={j} value={cell} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="border-t border-[#E2E7EF] bg-white">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">FAQ</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">常见问题</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
            {FAQS.map((faq) => (
              <div key={faq.q} className="flex flex-col gap-2.5 rounded-xl border border-[#E2E7EF] p-[26px]">
                <span className="text-[15px] font-semibold text-[#11151E]">{faq.q}</span>
                <span className="text-[13px] leading-[1.7] text-[#6E7889]">{faq.a}</span>
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
              准备开始您的数字化转型？
            </h2>
            <span className="text-[13px] text-[#8B95A8]">立即开始 30 天免费试用，或联系我们获取定制方案。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.loginUrl}
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              免费试用 Free trial
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              联系销售 Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
