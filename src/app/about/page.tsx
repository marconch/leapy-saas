import type { Metadata } from "next"
import Link from "next/link"

// 关于我们页 —— 按 claude.ai/design "Portal design" 项目 About.dc.html 逐值重构

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "了解领跃团队，我们致力于为制造企业提供领先的协同制造管理云平台，助力企业实现供应链、生产、财务一体化协同管理。",
}

const GROWTH_STATS = [
  { value: "50+", label: "服务客户", red: true },
  { value: "20+", label: "团队成员", red: false },
  { value: "8", label: "核心模块", red: false },
  { value: "20", unit: "年", label: "行业经验", red: false }
]

const VALUES = [
  { no: "01", title: "创新驱动", desc: "持续技术创新，为客户提供领先的解决方案。" },
  { no: "02", title: "客户至上", desc: "深入理解客户需求，提供超预期的服务体验。" },
  { no: "03", title: "专业专注", desc: "专注制造业领域，打造专业的产品和服务。" },
  { no: "04", title: "合作共赢", desc: "与客户、合作伙伴携手共创美好未来。" }
]

const TEAM = [
  {
    initial: "张",
    gradient: "linear-gradient(135deg,#E10A1F,#6A37CC)",
    name: "张明",
    role: "创始人 & CEO",
    desc: "15 年制造业信息化经验，曾任知名制造企业 CIO。"
  },
  {
    initial: "李",
    gradient: "linear-gradient(135deg,#2257C9,#6A37CC)",
    name: "李华",
    role: "技术总监",
    desc: "资深软件架构师，专注工业软件开发 10 余年。"
  },
  {
    initial: "王",
    gradient: "linear-gradient(135deg,#E10A1F,#B00717)",
    name: "王丽",
    role: "产品总监",
    desc: "深耕制造业务流程，产品设计经验丰富。"
  },
  {
    initial: "刘",
    gradient: "linear-gradient(135deg,#2257C9,#0F9D70)",
    name: "刘强",
    role: "解决方案总监",
    desc: "制造业数字化转型专家，服务过众多知名企业。"
  }
]

const MILESTONES = [
  { year: "2018", event: "公司成立，获得天使轮投资", red: true },
  { year: "2019", event: "发布第一版协同制造管理云平台，服务首批客户", red: false },
  { year: "2020", event: "完成 A 轮融资，团队扩展到 50 人", red: false },
  { year: "2021", event: "服务客户突破 100 家，产品功能全面升级", red: false },
  { year: "2022", event: "获得行业权威认证，开拓海外市场", red: false },
  { year: "2023", event: "完成 B 轮融资，成立研发中心", red: false },
  { year: "2024", event: "客户数量超过 500 家，成为行业领先品牌", red: true }
]

const CAREERS = [
  { name: "技术研发", roles: "软件工程师 · 产品经理 · UI/UX 设计师" },
  { name: "销售市场", roles: "销售经理 · 市场专员 · 解决方案顾问" },
  { name: "客户成功", roles: "技术支持 · 实施顾问 · 培训师" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white [font-family:'PingFang_SC',system-ui,sans-serif]">
      {/* hero */}
      <div className="mx-auto flex max-w-[1240px] flex-col gap-[18px] px-[clamp(16px,3vw,32px)] pb-[clamp(32px,4vw,48px)] pt-[clamp(48px,7vw,80px)]">
        <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">ABOUT LEANLEAP</span>
        <h1 className="m-0 text-pretty text-[clamp(30px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.02em] text-[#11151E]">
          关于领跃科技
        </h1>
        <p className="m-0 max-w-[640px] text-[15px] leading-[1.75] text-[#4A5468]">
          专注制造企业协同管理，致力于成为领先的协同制造管理云平台服务商。
        </p>
      </div>

      {/* mission + data */}
      <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] pb-[clamp(48px,6vw,64px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
          <div className="flex flex-col gap-6 rounded-xl border border-[#E2E7EF] p-8">
            <div className="flex flex-col gap-2 border-l-2 border-[#E10A1F] pl-5">
              <span className="text-[14px] font-semibold text-[#11151E]">
                使命 <span className="font-grotesk text-[12px] font-medium tracking-[0.08em] text-[#98A1B2]">MISSION</span>
              </span>
              <p className="m-0 text-[14px] leading-[1.75] text-[#4A5468]">
                通过一体化的协同管理平台，助力中国制造企业打通供应链、生产与财务，提升全球竞争力。
              </p>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-[#C4CBD7] pl-5">
              <span className="text-[14px] font-semibold text-[#11151E]">
                愿景 <span className="font-grotesk text-[12px] font-medium tracking-[0.08em] text-[#98A1B2]">VISION</span>
              </span>
              <p className="m-0 text-[14px] leading-[1.75] text-[#4A5468]">
                成为中国制造企业协同管理云平台的领导者，推动制造业高质量发展。
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 rounded-xl border border-[#E2E7EF] bg-[#F7F9FC] p-8">
            <span className="text-[15px] font-semibold text-[#11151E]">发展数据</span>
            <div className="grid grid-cols-2 gap-5">
              {GROWTH_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className={`font-jbmono text-[30px] font-semibold ${stat.red ? "text-[#E10A1F]" : "text-[#11151E]"}`}>
                    {stat.value}
                    {stat.unit && <span className="text-[0.6em]">{stat.unit}</span>}
                  </span>
                  <span className="text-[12px] text-[#6E7889]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* values */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">VALUES</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">核心价值观</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {VALUES.map((v) => (
              <div key={v.no} className="flex flex-col gap-2.5 rounded-xl border border-[#E2E7EF] bg-white p-[26px]">
                <span className="font-grotesk text-[20px] font-bold text-[#E10A1F]">{v.no}</span>
                <span className="text-[15px] font-semibold text-[#11151E]">{v.title}</span>
                <span className="text-[13px] leading-[1.7] text-[#6E7889]">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* team */}
      <div className="border-t border-[#E2E7EF] bg-white">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">TEAM</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">核心团队</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col gap-3 rounded-xl border border-[#E2E7EF] p-[26px]">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full text-[17px] font-semibold text-white"
                  style={{ background: member.gradient }}
                >
                  {member.initial}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-[#11151E]">{member.name}</span>
                  <span className="text-[12px] font-medium text-[#E10A1F]">{member.role}</span>
                </div>
                <span className="text-[13px] leading-[1.65] text-[#6E7889]">{member.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="border-t border-[#E2E7EF] bg-[#F4F6FA]">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-9 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">MILESTONES</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">发展历程</h2>
          </div>
          <div className="flex flex-col rounded-xl border border-[#E2E7EF] bg-white p-[clamp(20px,3vw,32px)]">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className={`flex items-baseline gap-5 py-3.5 ${i < MILESTONES.length - 1 ? "border-b border-[#EDF0F6]" : ""}`}
              >
                <span className={`font-jbmono w-12 shrink-0 text-[14px] font-semibold ${m.red ? "text-[#E10A1F]" : "text-[#1C2230]"}`}>
                  {m.year}
                </span>
                <span className="text-[14px] text-[#4A5468]">{m.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* careers */}
      <div id="careers" className="scroll-mt-20 border-t border-[#E2E7EF] bg-white">
        <div className="mx-auto max-w-[1240px] px-[clamp(16px,3vw,32px)] py-[clamp(48px,6vw,72px)]">
          <div className="mb-4 flex flex-wrap items-baseline gap-3.5">
            <span className="font-grotesk text-[12px] font-semibold tracking-[0.16em] text-[#E10A1F]">CAREERS</span>
            <h2 className="m-0 text-[clamp(24px,3vw,30px)] font-semibold tracking-[-0.02em] text-[#11151E]">加入我们</h2>
          </div>
          <p className="mb-8 mt-0 max-w-[640px] text-[14px] leading-[1.7] text-[#6E7889]">
            我们正在寻找有激情、有才华的伙伴加入团队，一起推动制造业的数字化变革。
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
            {CAREERS.map((c) => (
              <div key={c.name} className="flex flex-col gap-2 rounded-xl border border-[#E2E7EF] p-6">
                <span className="text-[15px] font-semibold text-[#11151E]">{c.name}</span>
                <span className="text-[13px] leading-[1.6] text-[#6E7889]">{c.roles}</span>
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
              想要了解更多？
            </h2>
            <span className="text-[13px] text-[#8B95A8]">联系我们，开启您的数字化转型之旅。</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#E10A1F] px-[26px] py-[13px] text-[14px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
            >
              联系我们 Contact
            </Link>
            <Link
              href="/resources"
              className="rounded-lg border border-[#39414F] px-[26px] py-[13px] text-[14px] font-medium text-[#DBE1EC] no-underline transition-colors hover:border-[#6B7589]"
            >
              下载公司介绍
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
