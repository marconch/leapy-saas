import type { Metadata } from "next"
import Link from "next/link"

// 资源中心页 —— 按 claude.ai/design "Portal design" 项目 Resources.dc.html 逐值重构
// 分类卡带 #docs/#api/#practices/#training 锚点（footer 链接依赖前三个）

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
      { title: "故障排除指南", sub: "常见问题解决方案" }
    ]
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
      { title: "第三方集成", sub: "ERP、OA 等系统集成指南" }
    ]
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
      { title: "经营数据分析应用", sub: "BI 报表与经营看板价值挖掘" }
    ]
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
      { title: "在线研讨会", sub: "定期的技术分享会" }
    ]
  }
]

const DOWNLOADS = [
  { name: "产品白皮书", desc: "全面了解协同制造管理解决方案", meta: "PDF · 2.3 MB" },
  { name: "ROI 计算器", desc: "投资回报率评估工具", meta: "Excel · 1.1 MB" },
  { name: "实施检查清单", desc: "项目实施关键节点检查", meta: "PDF · 0.8 MB" },
  { name: "行业案例集", desc: "各行业成功案例合集", meta: "PDF · 5.2 MB" }
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)]">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">RESOURCE CENTER</span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          资源中心
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          丰富的技术资源和学习材料，助力您更好地使用和部署协同制造管理平台。
        </p>
      </div>

      {/* categories */}
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id} className="flex scroll-mt-20 flex-col gap-4 rounded-xl border border-[#E2E7EF] p-7">
              <div className="flex flex-col gap-1">
                <span className="font-grotesk text-[11px] tracking-[0.1em] text-[#98A1B2]">{cat.eyebrow}</span>
                <span className="text-[18px] font-semibold text-[#11151E]">{cat.name}</span>
                <span className="text-[12px] text-[#6E7889]">{cat.description}</span>
              </div>
              <div className="flex flex-col">
                {cat.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex cursor-pointer items-center justify-between gap-3 border-t border-[#EDF0F6] py-3 transition-colors hover:bg-[#F7F9FC]"
                  >
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-medium text-[#1C2230]">{item.title}</span>
                      <span className="text-[12px] text-[#98A1B2]">{item.sub}</span>
                    </span>
                    <span className="shrink-0 text-[#98A1B2]">→</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* downloads */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">DOWNLOADS</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">热门下载</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {DOWNLOADS.map((dl) => (
              <div key={dl.name} className="flex items-center justify-between gap-4 rounded-xl border border-[#E2E7EF] bg-white p-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-semibold text-[#11151E]">{dl.name}</span>
                  <span className="text-[12px] text-[#6E7889]">{dl.desc}</span>
                  <span className="font-jbmono text-[11px] text-[#98A1B2]">{dl.meta}</span>
                </div>
                <span className="shrink-0 cursor-pointer rounded-lg border border-[#C4CBD7] px-4 py-2 text-[12px] font-medium text-[#1C2230] transition-colors hover:border-[#E10A1F] hover:text-[#E10A1F]">
                  下载
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* support */}
      <div className="border-t border-[#E2E7EF] bg-white">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">SUPPORT</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">
              需要更多帮助？
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            <div className="flex flex-col gap-2 rounded-xl border border-[#E2E7EF] p-[26px]">
              <span className="text-[15px] font-semibold text-[#11151E]">在线客服</span>
              <span className="text-[13px] text-[#6E7889]">工作日 9:00 – 18:00</span>
              <Link href="/contact" className="mt-1.5 text-[13px] font-medium text-[#E10A1F] no-underline">
                开始对话 →
              </Link>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-[#E2E7EF] p-[26px]">
              <span className="text-[15px] font-semibold text-[#11151E]">邮件支持</span>
              <span className="font-jbmono text-[13px] text-[#6E7889]">support@leapingtech.com</span>
              <a href="mailto:support@leapingtech.com" className="mt-1.5 text-[13px] font-medium text-[#E10A1F] no-underline">
                发送邮件 →
              </a>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-[#E2E7EF] p-[26px]">
              <span className="text-[15px] font-semibold text-[#11151E]">电话支持</span>
              <span className="font-jbmono text-[13px] text-[#6E7889]">021-6209 5557</span>
              <a href="tel:+862162095557" className="mt-1.5 text-[13px] font-medium text-[#E10A1F] no-underline">
                立即致电 →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#11151E]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-6 px-[clamp(16px,3vw,32px)] py-[clamp(40px,5vw,56px)]">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[clamp(20px,2.6vw,26px)] font-semibold tracking-[-0.02em] text-[#F6F8FC]">
              加入用户社区
            </h2>
            <span className="text-[13px] text-[#8B95A8]">与其他用户交流经验，获取最新产品动态。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              加入微信群
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              技术论坛
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
