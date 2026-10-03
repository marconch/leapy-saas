import type { Metadata } from "next"
import { ContactForm } from "@/components/ContactForm"
import { GridPulse, Lines, Reveal, Rule } from "@/components/site/motion"
import { Btn, PageHero, SectionHead, Tag } from "@/components/site/ui"
import { siteConfig } from "@/lib/site-config"

// 联系我们页 —— 品牌进化版（编辑式 / 图纸感）
// 表单提交链路（POST /api/contact → SQLite + 双邮件）完整保留于 ContactForm

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系领跃 LeanLeap 团队，获取专业的协同制造管理云平台咨询和技术支持。多种联系方式，快速响应您的需求。",
}

const HQ_PHONE = "+86 21-6209 5557"

const RESPONSE_PROMISES = [
  { text: "销售咨询：30 分钟内响应", dot: "bg-red" },
  { text: "技术支持：2 小时内响应", dot: "bg-ink" },
  { text: "商务合作：1 个工作日内响应", dot: "bg-ink/35" },
]

const SERVICE_HOURS = [
  { label: "工作日", value: "9:00 – 18:00", red: false },
  { label: "技术支持", value: "7×24 小时", red: false },
  { label: "紧急支持", value: "随时响应", red: true },
]

const CHANNELS = [
  { eyebrow: "SALES", name: "销售咨询", desc: "了解产品功能、价格方案和实施周期", value: "+86 139 1662 5509" },
  { eyebrow: "SUPPORT", name: "技术支持", desc: "产品使用问题、技术疑问解答", value: "ch@leapingtech.com" },
  { eyebrow: "BUSINESS", name: "商务合作", desc: "渠道合作、战略联盟、投资洽谈", value: "business@leapingtech.com" },
  { eyebrow: "MEDIA", name: "媒体咨询", desc: "新闻采访、市场活动、品牌合作", value: "media@leapingtech.com" },
]

function hrefOf(value: string) {
  return value.includes("@") ? `mailto:${value}` : `tel:${value.replace(/[^+\d]/g, "")}`
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="08"
        eyebrow="Contact"
        lines={[
          <span key="l1">
            联系<span className="text-red">我们</span>
          </span>,
        ]}
        desc="我们的专业团队随时为您提供咨询和支持，助力您的数字化转型之旅。"
      />

      {/* ───────── 直达方式 + 表单 ───────── */}
      <section className="bg-paper">
        <div className="wrap grid gap-x-10 gap-y-[clamp(64px,9vw,120px)] py-[clamp(72px,10vw,160px)] lg:grid-cols-12">
          {/* 左：巨型邮箱 / 电话 / 地址 */}
          <div className="min-w-0 lg:col-span-5">
            <Reveal variant="fade">
              <Tag index="01">上海总部</Tag>
            </Reveal>

            <Reveal delay={100} className="mt-[clamp(28px,3.5vw,48px)]">
              <span className="eyebrow text-mute">Email</span>
              <p className="mt-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="ulink font-grotesk text-[clamp(26px,3.1vw,52px)] leading-[1.15] font-medium tracking-[-0.03em] [overflow-wrap:anywhere] transition-colors hover:text-red"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-[clamp(24px,3vw,40px)]">
              <span className="eyebrow text-mute">Phone</span>
              <p className="mt-2">
                <a
                  href={hrefOf(HQ_PHONE)}
                  className="ulink num text-[clamp(26px,3.1vw,52px)] leading-[1.15] transition-colors hover:text-red"
                >
                  {HQ_PHONE}
                </a>
              </p>
            </Reveal>

            <Reveal delay={260} className="mt-[clamp(24px,3vw,40px)]">
              <span className="eyebrow text-mute">Address</span>
              <address className="mt-2 text-[clamp(18px,1.6vw,24px)] leading-[1.5] font-medium not-italic">
                {siteConfig.contact.address}
              </address>
            </Reveal>

            {/* 快速响应承诺 */}
            <div className="mt-[clamp(48px,6vw,88px)]">
              <div className="mb-5 flex items-baseline justify-between">
                <h2 className="text-[15px] font-semibold">快速响应承诺</h2>
                <span aria-hidden className="eyebrow text-mute">
                  Response
                </span>
              </div>
              <Rule className="!bg-ink !opacity-100" />
              <ul>
                {RESPONSE_PROMISES.map((p, i) => (
                  <Reveal
                    as="li"
                    key={p.text}
                    delay={i * 70}
                    className="flex items-center gap-4 border-b border-line py-[clamp(14px,1.5vw,20px)] text-[clamp(15px,1.2vw,18px)] font-medium"
                  >
                    <span aria-hidden className={`h-[7px] w-[7px] shrink-0 ${p.dot}`} />
                    {p.text}
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* 服务时间 */}
            <div className="mt-[clamp(40px,5vw,64px)]">
              <div className="mb-5 flex items-baseline justify-between">
                <h2 className="text-[15px] font-semibold">服务时间</h2>
                <span aria-hidden className="eyebrow text-mute">
                  Hours
                </span>
              </div>
              <Rule className="!bg-ink !opacity-100" />
              <dl>
                {SERVICE_HOURS.map((h, i) => (
                  <Reveal
                    key={h.label}
                    delay={i * 70}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-[clamp(14px,1.5vw,20px)]"
                  >
                    <dt className="text-[clamp(15px,1.2vw,18px)] text-mute">{h.label}</dt>
                    <dd
                      className={`m-0 font-grotesk text-[clamp(18px,1.7vw,26px)] font-medium tracking-[-0.02em] ${h.red ? "text-red" : ""}`}
                    >
                      {h.value}
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>

          {/* 右：表单 */}
          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="fade">
                <Tag index="02">Inquiry</Tag>
              </Reveal>
              <Lines lines={["在线咨询"]} className="title mt-6 text-[clamp(32px,4.4vw,72px)]" />
              <Rule className="mt-[clamp(24px,3vw,40px)] !bg-ink !opacity-100" />
              <Reveal delay={150} className="mt-[clamp(28px,3.5vw,48px)]">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 联系方式 ───────── */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <GridPulse className="opacity-60" />
        <div className="wrap relative py-[clamp(72px,10vw,160px)]">
          <SectionHead index="03" eyebrow="Channels" onDark lines={["联系方式"]} />
          <div className="hairgrid on-dark mt-[clamp(40px,6vw,96px)] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {CHANNELS.map((ch, i) => (
              <Reveal
                key={ch.eyebrow}
                delay={i * 90}
                className="flex min-w-0 flex-col justify-between gap-[clamp(40px,5vw,96px)] p-[clamp(20px,2.2vw,36px)]"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-mute-d">{ch.eyebrow}</span>
                  <span aria-hidden className="eyebrow text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="title text-[clamp(26px,2.6vw,40px)]">{ch.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-mute-d">{ch.desc}</p>
                  <p className="mt-6 border-t border-white/12 pt-5">
                    <a
                      href={hrefOf(ch.value)}
                      className="ulink font-grotesk text-[clamp(16px,1.25vw,19px)] font-medium tracking-[-0.01em] [overflow-wrap:anywhere] transition-colors hover:text-red"
                    >
                      {ch.value}
                    </a>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 免费试用 ───────── */}
      <section className="bg-paper-2">
        <div className="wrap grid items-end gap-x-10 gap-y-10 py-[clamp(64px,8vw,128px)] md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal variant="fade">
              <Tag index="04">Free trial</Tag>
            </Reveal>
            <Lines
              lines={[
                "立即开始您的",
                <span key="l2">
                  数字化<span className="text-red">转型</span>
                </span>,
              ]}
              className="title mt-7 text-[clamp(32px,5.2vw,88px)]"
            />
          </div>
          <Reveal delay={200} className="md:col-span-4">
            <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.75] text-mute">
              免费试用 30 天，体验完整的产品功能。
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={siteConfig.loginUrl} external magnetic>
                免费试用
              </Btn>
              <Btn href="/pricing" variant="ghost">
                查看价格
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
