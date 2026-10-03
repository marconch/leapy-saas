import type { Metadata } from "next"
import { Counter, GridPulse, Reveal } from "@/components/site/motion"
import { CtaBand, PageHero, SectionHead } from "@/components/site/ui"

// 关于我们页 —— 品牌进化版（编辑式 / 图纸感）；文案与数据沿用原页

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "了解领跃团队，我们致力于为制造企业提供领先的协同制造管理云平台，助力企业实现供应链、生产、财务一体化协同管理。",
}

const GROWTH_STATS = [
  { value: 50, suffix: "+", label: "服务客户", caption: "Clients", red: true },
  { value: 20, suffix: "+", label: "团队成员", caption: "Team", red: false },
  { value: 8, suffix: "", label: "核心模块", caption: "Modules", red: false },
  { value: 20, suffix: "年", label: "行业经验", caption: "Years", red: false },
]

const VALUES = [
  { no: "01", title: "创新驱动", desc: "持续技术创新，为客户提供领先的解决方案。" },
  { no: "02", title: "客户至上", desc: "深入理解客户需求，提供超预期的服务体验。" },
  { no: "03", title: "专业专注", desc: "专注制造业领域，打造专业的产品和服务。" },
  { no: "04", title: "合作共赢", desc: "与客户、合作伙伴携手共创美好未来。" },
]

const CAREERS = [
  { name: "技术研发", roles: "软件工程师 · 产品经理 · UI/UX 设计师" },
  { name: "销售市场", roles: "销售经理 · 市场专员 · 解决方案顾问" },
  { name: "客户成功", roles: "技术支持 · 实施顾问 · 培训师" },
]

const SECTION_PAD = "py-[clamp(72px,10vw,160px)]"

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="07"
        eyebrow="About LeanLeap"
        lines={[
          "关于",
          <span key="l2">
            领跃<span className="text-red">科技</span>
          </span>,
        ]}
        desc="专注制造企业协同管理，致力于成为领先的协同制造管理云平台服务商。"
      />

      {/* ───────── 使命 / 愿景：巨字宣言 ───────── */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <GridPulse className="opacity-70" />
        <div className={`wrap relative ${SECTION_PAD}`}>
          <Reveal variant="fade" className="flex items-center justify-between gap-6">
            <h2 className="eyebrow inline-flex items-center gap-3">
              <span aria-hidden className="inline-block h-[7px] w-[7px] bg-red" />
              <span className="opacity-60">01</span>
              <span>使命 — Mission</span>
            </h2>
            <span aria-hidden className="eyebrow hidden text-mute-d sm:block">
              Manifesto
            </span>
          </Reveal>

          <Reveal delay={120}>
            <p className="title mt-[clamp(32px,5vw,72px)] max-w-[1400px] text-[clamp(28px,5.4vw,96px)] leading-[1.18] text-pretty">
              通过<span className="text-red">一体化</span>的协同管理平台，助力中国制造企业打通
              <span className="text-red">供应链、生产与财务</span>，提升全球竞争力。
            </p>
          </Reveal>

          <div className="mt-[clamp(56px,8vw,128px)] grid gap-x-10 gap-y-6 border-t border-white/12 pt-[clamp(24px,3vw,40px)] md:grid-cols-12">
            <Reveal variant="fade" className="md:col-span-3">
              <h3 className="eyebrow inline-flex items-center gap-3 text-mute-d">
                <span aria-hidden className="inline-block h-[5px] w-[5px] bg-red" />
                愿景 — Vision
              </h3>
            </Reveal>
            <Reveal delay={120} className="md:col-span-8 md:col-start-5 lg:col-span-7 lg:col-start-6">
              <p className="title text-[clamp(20px,2.4vw,40px)] leading-[1.4] text-paper/90">
                成为中国制造企业协同管理云平台的领导者，推动制造业高质量发展。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 发展数据 ───────── */}
      <section className="bg-paper">
        <div className={`wrap ${SECTION_PAD}`}>
          <SectionHead index="02" eyebrow="By the numbers" lines={["发展数据"]} />
          <div className="hairgrid mt-[clamp(40px,6vw,96px)] grid-cols-2 lg:grid-cols-4">
            {GROWTH_STATS.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 90}
                className="flex flex-col justify-between gap-[clamp(40px,6vw,104px)] p-[clamp(18px,2.2vw,36px)]"
              >
                <span className="eyebrow text-mute">{stat.caption}</span>
                <div>
                  <div className={`num text-[clamp(56px,8.6vw,164px)] leading-[0.9] ${stat.red ? "text-red" : ""}`}>
                    <Counter value={stat.value} />
                    <span className="text-[0.5em] tracking-normal">{stat.suffix}</span>
                  </div>
                  <div className="mt-4 text-[clamp(14px,1.1vw,17px)] font-medium">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 核心价值观 ───────── */}
      <section className="bg-paper">
        <div className="wrap pb-[clamp(72px,10vw,160px)]">
          <SectionHead index="03" eyebrow="Values" lines={["核心价值观"]} />
          <div className="mt-[clamp(40px,6vw,96px)]">
            {VALUES.map((v, i) => (
              <Reveal key={v.no} delay={i * 60}>
                <div className="flip-row grid grid-cols-12 items-baseline gap-x-6 gap-y-3 border-t border-line px-[clamp(0px,1.2vw,20px)] py-[clamp(22px,2.8vw,44px)] last:border-b">
                  <span className="eyebrow col-span-12 text-red md:col-span-1">{v.no}</span>
                  <h3 className="title col-span-12 text-[clamp(30px,4.6vw,80px)] md:col-span-6">{v.title}</h3>
                  <p className="flip-mute col-span-12 text-[clamp(15px,1.2vw,18px)] leading-[1.75] text-mute md:col-span-4 md:col-start-9">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 加入我们 ───────── */}
      <section id="careers" className="scroll-mt-28 bg-paper-2">
        <div className={`wrap ${SECTION_PAD}`}>
          <SectionHead
            index="04"
            eyebrow="Careers"
            lines={["加入我们"]}
            desc="我们正在寻找有激情、有才华的伙伴加入团队，一起推动制造业的数字化变革。"
          />
          <div className="hairgrid mt-[clamp(40px,6vw,96px)] grid-cols-1 md:grid-cols-3">
            {CAREERS.map((c, i) => (
              <Reveal
                key={c.name}
                delay={i * 90}
                className="flex flex-col gap-[clamp(28px,4vw,64px)] p-[clamp(20px,2.2vw,36px)]"
              >
                <span className="eyebrow text-red">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="title text-[clamp(26px,2.8vw,44px)]">{c.name}</h3>
                  <ul className="mt-6 flex flex-col">
                    {c.roles.split(" · ").map((role) => (
                      <li
                        key={role}
                        className="flex items-center gap-3 border-t border-line py-3 text-[15px] last:border-b"
                      >
                        <span aria-hidden className="h-[5px] w-[5px] shrink-0 bg-red" />
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        lines={["想要", "了解更多？"]}
        sub="联系我们，开启您的数字化转型之旅。"
        primary={{ label: "联系我们", href: "/contact" }}
        secondary={{ label: "下载公司介绍", href: "/resources" }}
      />
    </>
  )
}
