import type { Metadata } from "next"
import Link from "next/link"
import { Lines, Reveal } from "@/components/site/motion"
import { Arrow, Btn, CtaBand, PageHero, SectionHead } from "@/components/site/ui"

// 分类区块带 #docs/#api/#practices/#training 锚点（footer 链接依赖前三个）

export const metadata: Metadata = {
  title: "资源中心",
  description:
    "领跃协同制造管理系统（LeanLeap）的技术文档、API参考、最佳实践指南和培训资源，助力用户更好地使用和部署系统。",
}

const CATEGORIES = [
  {
    id: "docs",
    eyebrow: "DOCS",
    name: "技术文档",
    description: "详细的产品文档和使用指南",
    items: [
      { title: "快速入门指南", sub: "5 分钟了解平台核心功能" },
      { title: "系统部署手册", sub: "完整的部署和配置说明" },
      { title: "用户操作手册", sub: "详细的功能使用说明" },
      { title: "故障排除指南", sub: "常见问题解决方案" },
    ],
  },
  {
    id: "api",
    eyebrow: "API",
    name: "API 参考",
    description: "开发者集成和定制开发资源",
    items: [
      { title: "REST API 文档", sub: "完整的 API 接口说明" },
      { title: "SDK 开发包", sub: "多语言 SDK 和示例代码" },
      { title: "Webhook 集成", sub: "事件通知和回调机制" },
      { title: "第三方集成", sub: "ERP、OA 等系统集成指南" },
    ],
  },
  {
    id: "practices",
    eyebrow: "GUIDES",
    name: "最佳实践",
    description: "行业经验分享和优化建议",
    items: [
      { title: "供应链协同最佳实践", sub: "采购、销售与库存高效协同" },
      { title: "生产工单管理实践", sub: "工单、BOM 与工艺路线落地" },
      { title: "财务对账与月结规范", sub: "应收应付与成本核算实务" },
      { title: "经营数据分析应用", sub: "BI 报表与经营看板价值挖掘" },
    ],
  },
  {
    id: "training",
    eyebrow: "TRAINING",
    name: "培训中心",
    description: "在线培训课程和认证项目",
    items: [
      { title: "基础操作培训", sub: "平台基本功能使用" },
      { title: "高级功能培训", sub: "深度功能和定制开发" },
      { title: "管理员认证", sub: "系统管理员资格认证" },
      { title: "在线研讨会", sub: "定期的技术分享会" },
    ],
  },
]

const DOWNLOADS = [
  { name: "产品白皮书", desc: "全面了解协同制造管理解决方案", meta: "PDF · 2.3 MB" },
  { name: "ROI 计算器", desc: "投资回报率评估工具", meta: "Excel · 1.1 MB" },
  { name: "实施检查清单", desc: "项目实施关键节点检查", meta: "PDF · 0.8 MB" },
  { name: "行业案例集", desc: "各行业成功案例合集", meta: "PDF · 5.2 MB" },
]

const SUPPORT = [
  { name: "在线客服", value: "工作日 9:00 – 18:00", action: "开始对话", href: "/contact", internal: true },
  { name: "邮件支持", value: "support@leapingtech.com", action: "发送邮件", href: "mailto:support@leapingtech.com" },
  { name: "电话支持", value: "021-6209 5557", action: "立即致电", href: "tel:+862162095557" },
]

const pad = (n: number) => String(n).padStart(2, "0")

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="Resource center"
        lines={["资源中心"]}
        desc="丰富的技术资源和学习材料，助力您更好地使用和部署协同制造管理平台。"
      >
        {CATEGORIES.map((cat) => (
          <Btn key={cat.id} href={`#${cat.id}`} variant="ghost" size="sm">
            {cat.name}
          </Btn>
        ))}
      </PageHero>

      {/* ───────── 编号目录 ───────── */}
      <section className="bg-paper">
        <div className="wrap pb-[clamp(72px,10vw,160px)] pt-[clamp(32px,5vw,80px)]">
          {CATEGORIES.map((cat, i) => (
            <section
              key={cat.id}
              id={cat.id}
              aria-labelledby={`${cat.id}-title`}
              className="grid scroll-mt-28 gap-x-10 gap-y-8 border-t border-ink py-[clamp(40px,6vw,96px)] lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <Reveal variant="fade" className="flex items-center justify-between gap-6 lg:justify-start lg:gap-10">
                    <span className="eyebrow flex items-center gap-3">
                      <span aria-hidden className="inline-block h-[7px] w-[7px] bg-red" />
                      {cat.eyebrow}
                    </span>
                    <span className="eyebrow text-mute">#{cat.id}</span>
                  </Reveal>
                  <div className="mt-[clamp(16px,2vw,32px)] flex items-end gap-[clamp(16px,2vw,32px)] lg:flex-col lg:items-start lg:gap-0">
                    <Reveal>
                      <span
                        aria-hidden
                        className="num block text-[clamp(72px,13vw,232px)] leading-[0.82] text-red"
                      >
                        {pad(i + 1)}
                      </span>
                    </Reveal>
                    <div className="pb-1 lg:mt-[clamp(20px,2.4vw,40px)] lg:pb-0">
                      <Lines
                        lines={[cat.name]}
                        className="title text-[clamp(28px,3.6vw,60px)]"
                      />
                      <Reveal delay={160}>
                        <p className="mt-3 text-[clamp(14px,1.15vw,18px)] leading-[1.75] text-mute">{cat.description}</p>
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="lg:col-span-7">
                {cat.items.map((item, j) => (
                  <Reveal
                    as="li"
                    key={item.title}
                    delay={j * 70}
                    className="flip-row group grid grid-cols-12 items-center gap-x-4 gap-y-1 border-b border-line px-[clamp(0px,1.2vw,20px)] py-[clamp(18px,2.2vw,32px)] first:border-t"
                  >
                    <span aria-hidden className="eyebrow flip-mute col-span-12 text-mute md:col-span-2">
                      {pad(i + 1)}.{j + 1}
                    </span>
                    <div className="col-span-10 md:col-span-9">
                      <h3 className="title text-[clamp(19px,2vw,30px)]">{item.title}</h3>
                      <p className="flip-mute mt-1.5 text-[14px] leading-[1.6] text-mute">{item.sub}</p>
                    </div>
                    <span aria-hidden className="col-span-2 flex justify-end md:col-span-1">
                      <Arrow className="transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-45" />
                    </span>
                  </Reveal>
                ))}
              </ul>
            </section>
          ))}
          <div aria-hidden className="h-px w-full bg-ink" />
        </div>
      </section>

      {/* ───────── 热门下载 ───────── */}
      <section className="relative bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <div className="wrap relative py-[clamp(72px,10vw,160px)]">
          <SectionHead index="05" eyebrow="Downloads" onDark lines={["热门下载"]} />
          <div className="hairgrid on-dark mt-[clamp(40px,6vw,96px)] sm:grid-cols-2 xl:grid-cols-4">
            {DOWNLOADS.map((dl, i) => (
              <Reveal
                key={dl.name}
                delay={i * 90}
                className="group flex min-h-[clamp(220px,24vw,380px)] flex-col justify-between gap-10 p-[clamp(20px,2.2vw,36px)] transition-colors duration-500 hover:!bg-ink-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="eyebrow text-mute-d">{pad(i + 1)}</span>
                  <span className="eyebrow border border-white/20 px-2 py-1 text-paper">{dl.meta}</span>
                </div>
                <div>
                  <h3 className="title text-[clamp(24px,2.4vw,38px)]">{dl.name}</h3>
                  <p className="mt-3 text-[14px] leading-[1.7] text-mute-d">{dl.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-3 border-t border-white/12 pt-4 text-[13px] font-semibold">
                    下载
                    <Arrow size={12} className="rotate-90 text-red transition-transform duration-500 group-hover:translate-y-1" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 支持 ───────── */}
      <section className="bg-paper">
        <div className="wrap py-[clamp(72px,10vw,160px)]">
          <SectionHead index="06" eyebrow="Support" lines={["需要更多帮助？"]} />
          <div className="mt-[clamp(40px,6vw,96px)]">
            {SUPPORT.map((item, i) => {
              const cls =
                "flip-row group grid grid-cols-12 items-center gap-x-6 gap-y-3 border-t border-line px-[clamp(0px,1.2vw,20px)] py-[clamp(24px,3vw,48px)]"
              const inner = (
                <>
                  <span className="col-span-12 flex items-baseline gap-4 md:col-span-3">
                    <span aria-hidden className="eyebrow text-red">
                      {pad(i + 1)}
                    </span>
                    <span className="text-[clamp(16px,1.4vw,21px)] font-semibold">{item.name}</span>
                  </span>
                  <span className="col-span-12 font-grotesk text-[clamp(19px,3.4vw,60px)] font-medium leading-[1.1] tracking-[-0.03em] [overflow-wrap:anywhere] md:col-span-7">
                    {item.value}
                  </span>
                  <span className="col-span-12 flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                    <span className="flip-mute text-[13px] font-semibold text-mute">{item.action}</span>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-45">
                      <Arrow />
                    </span>
                  </span>
                </>
              )
              return (
                <Reveal key={item.name} delay={i * 80} className="last:border-b last:border-line">
                  {item.internal ? (
                    <Link href={item.href} className={cls}>
                      {inner}
                    </Link>
                  ) : (
                    <a href={item.href} className={cls}>
                      {inner}
                    </a>
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        lines={["加入用户社区"]}
        sub="与其他用户交流经验，获取最新产品动态。"
        primary={{ label: "加入微信群", href: "/contact" }}
        secondary={{ label: "技术论坛", href: "/contact" }}
      />
    </>
  )
}
