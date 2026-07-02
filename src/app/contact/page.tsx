import type { Metadata } from "next"
import Link from "next/link"
import { ContactForm } from "@/components/ContactForm"
import { siteConfig } from "@/lib/site-config"

// 联系我们页 —— 按 claude.ai/design "Portal design" 项目 Contact.dc.html 逐值重构
// 表单提交链路（POST /api/contact → SQLite + 双邮件）完整保留于 ContactForm

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系领跃 LeanLeap 团队，获取专业的协同制造管理云平台咨询和技术支持。多种联系方式，快速响应您的需求。",
}

const RESPONSE_PROMISES = [
  { text: "销售咨询：30 分钟内响应", color: "#E10A1F" },
  { text: "技术支持：2 小时内响应", color: "#1C2230" },
  { text: "商务合作：1 个工作日内响应", color: "#98A1B2" }
]

const CHANNELS = [
  { eyebrow: "SALES", name: "销售咨询", desc: "了解产品功能、价格方案和实施周期", value: "+86 139 1662 5509" },
  { eyebrow: "SUPPORT", name: "技术支持", desc: "产品使用问题、技术疑问解答", value: "ch@leapingtech.com" },
  { eyebrow: "BUSINESS", name: "商务合作", desc: "渠道合作、战略联盟、投资洽谈", value: "business@leapingtech.com" },
  { eyebrow: "MEDIA", name: "媒体咨询", desc: "新闻采访、市场活动、品牌合作", value: "media@leapingtech.com" }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)]">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">CONTACT US</span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          联系我们
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          我们的专业团队随时为您提供咨询和支持，助力您的数字化转型之旅。
        </p>
      </div>

      {/* form + info */}
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-5">
          <div className="flex flex-col gap-[18px] rounded-xl border border-[#E2E7EF] p-[clamp(24px,3vw,32px)]">
            <span className="text-[16px] font-semibold text-[#11151E]">在线咨询</span>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3.5 rounded-xl border border-[#E2E7EF] bg-[#F7F9FC] p-7">
              <span className="text-[15px] font-semibold text-[#11151E]">快速响应承诺</span>
              <div className="flex flex-col gap-2.5">
                {RESPONSE_PROMISES.map((p) => (
                  <span key={p.text} className="flex items-center gap-2.5 text-[13px] text-[#4A5468]">
                    <span className="h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: p.color }} />
                    {p.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3.5 rounded-xl border border-[#E2E7EF] p-7">
              <span className="text-[15px] font-semibold text-[#11151E]">服务时间</span>
              <div className="flex flex-col">
                <div className="flex justify-between border-b border-[#EDF0F6] py-2.5 text-[13px]">
                  <span className="text-[#4A5468]">工作日</span>
                  <span className="font-jbmono text-[#11151E]">9:00 – 18:00</span>
                </div>
                <div className="flex justify-between border-b border-[#EDF0F6] py-2.5 text-[13px]">
                  <span className="text-[#4A5468]">技术支持</span>
                  <span className="font-jbmono text-[#11151E]">7×24 小时</span>
                </div>
                <div className="flex justify-between py-2.5 text-[13px]">
                  <span className="text-[#4A5468]">紧急支持</span>
                  <span className="font-medium text-[#E10A1F]">随时响应</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-[#E2E7EF] p-7">
              <span className="text-[15px] font-semibold text-[#11151E]">上海总部</span>
              <div className="flex flex-col gap-2 text-[13px] text-[#4A5468]">
                <span>{siteConfig.contact.address}</span>
                <span className="font-jbmono">+86 21-6209 5557</span>
                <span className="font-jbmono">{siteConfig.contact.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact methods */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">CHANNELS</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">联系方式</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {CHANNELS.map((ch) => (
              <div key={ch.eyebrow} className="flex flex-col gap-2 rounded-xl border border-[#E2E7EF] bg-white p-[26px]">
                <span className="font-grotesk text-[11px] tracking-[0.1em] text-[#98A1B2]">{ch.eyebrow}</span>
                <span className="text-[15px] font-semibold text-[#11151E]">{ch.name}</span>
                <span className="text-[12px] leading-[1.6] text-[#6E7889]">{ch.desc}</span>
                <span className="font-jbmono mt-1.5 text-[13px] text-[#1C2230]">{ch.value}</span>
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
              立即开始您的数字化转型
            </h2>
            <span className="text-[13px] text-[#8B95A8]">免费试用 30 天，体验完整的产品功能。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.loginUrl}
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              免费试用 Free trial
            </a>
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
