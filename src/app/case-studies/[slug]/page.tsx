import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Lines, Reveal, Rule } from "@/components/site/motion"
import { Arrow, Btn, CtaBand, SectionHead, ShotFrame, Tag } from "@/components/site/ui"
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {
      title: "案例未找到",
    }
  }

  return {
    title: caseStudy.title,
    description: caseStudy.challenge,
  }
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies()

  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

/* 方案涉及的产品模块界面（示意，非客户现场画面） */
const PRODUCT_SHOTS: Record<string, { src: string; module: string }> = {
  "automotive-manufacturer-digital-transformation": { src: "/shots/manufacturing.jpg", module: "生产制造" },
  "electronics-factory-smart-upgrade": { src: "/shots/manufacturing.jpg", module: "生产制造" },
  "machinery-manufacturer-efficiency-optimization": { src: "/shots/costing.jpg", module: "成本核算" },
  "chemical-plant-safety-digitalization": { src: "/shots/finance.jpg", module: "财务管理" },
}

function RowArrow() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:-rotate-45 md:h-14 md:w-14">
      <Arrow />
    </span>
  )
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const all = getAllCaseStudies()
  const relatedCases = all
    .filter((cs) => cs.slug !== caseStudy.slug && cs.industry === caseStudy.industry)
    .slice(0, 2)
  const nextCase = all[(all.findIndex((cs) => cs.slug === caseStudy.slug) + 1) % all.length]
  const published = new Date(caseStudy.publishedAt).toLocaleDateString("zh-CN")
  const shot = PRODUCT_SHOTS[caseStudy.slug]

  const info = [
    { label: "客户企业", value: caseStudy.company },
    { label: "所属行业", value: caseStudy.industry },
  ]

  const chapters = [
    { no: "01", en: "Challenge", title: "面临挑战", body: caseStudy.challenge },
    { no: "02", en: "Solution", title: "解决方案", body: caseStudy.solution },
  ]

  return (
    <>
      {/* ───────── 首屏 ───────── */}
      <section className="relative overflow-hidden bg-paper pt-[calc(var(--header-h)+clamp(40px,7vw,104px))]">
        <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <div className="wrap relative">
          <Reveal eager variant="fade">
            <nav aria-label="面包屑" className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-mute">
              <Link href="/" className="ulink">
                首页
              </Link>
              <span aria-hidden>/</span>
              <Link href="/case-studies" className="ulink">
                客户案例
              </Link>
              <span aria-hidden>/</span>
              <span className="text-ink" aria-current="page">
                {caseStudy.title}
              </span>
            </nav>
          </Reveal>

          <Reveal eager variant="fade" delay={80} className="mt-[clamp(28px,4vw,56px)] flex flex-wrap items-center gap-x-5 gap-y-3">
            <Tag index="05">{caseStudy.industry}</Tag>
            {caseStudy.featured && (
              <span className="bg-red px-2 py-1 text-[11px] font-semibold tracking-[0.08em] text-white">精选案例</span>
            )}
          </Reveal>

          <Lines eager
            as="h1"
            lines={[caseStudy.title]}
            delay={120}
            className="display mt-[clamp(20px,3vw,40px)] max-w-[14em] text-[clamp(36px,7.2vw,128px)] text-balance"
          />

          <Reveal eager delay={380} className="mt-[clamp(28px,4vw,56px)] pb-[clamp(28px,4vw,56px)]">
            <p className="eyebrow text-mute">发布时间：{published}</p>
          </Reveal>
        </div>
        <div className="h-px w-full bg-line" />
      </section>

      {/* ───────── 正文：左侧 sticky 元信息 + 编辑式长文 ───────── */}
      <section className="bg-paper">
        <div className="wrap grid gap-x-10 gap-y-14 py-[clamp(72px,10vw,160px)] lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Reveal variant="fade">
                <h2 className="eyebrow flex items-center gap-3">
                  <span aria-hidden className="inline-block h-[7px] w-[7px] bg-red" />
                  项目信息
                </h2>
              </Reveal>
              <dl className="mt-6 grid grid-cols-2 border-t border-ink lg:grid-cols-1">
                {info.map((item, i) => (
                  <Reveal key={item.label} delay={i * 60} className="flex flex-col gap-1.5 border-b border-line py-4 pr-4">
                    <dt className="eyebrow text-mute">{item.label}</dt>
                    <dd className="text-[15px] font-medium">{item.value}</dd>
                  </Reveal>
                ))}
              </dl>
              <Reveal delay={240} className="mt-8">
                <h3 className="title text-[20px]">获取类似解决方案</h3>
                <p className="mt-2 text-[14px] leading-[1.75] text-mute">了解如何为您的企业实现类似的转型效果</p>
                <div className="mt-5">
                  <Btn href="/contact" size="sm">
                    免费咨询
                  </Btn>
                </div>
              </Reveal>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            {chapters.map((chapter, i) => (
              <div key={chapter.no} className={i > 0 ? "mt-[clamp(56px,7vw,112px)]" : ""}>
                <Reveal variant="fade" className="flex items-center justify-between gap-6">
                  <h2 className="eyebrow flex items-center gap-3">
                    <span className="text-red">{chapter.no}</span>
                    {chapter.title}
                  </h2>
                  <span aria-hidden className="eyebrow text-mute">
                    {chapter.en}
                  </span>
                </Reveal>
                <Rule className="mt-4 !bg-ink !opacity-100" />
                <Reveal delay={120}>
                  <p
                    className={
                      i === 0
                        ? "title mt-[clamp(24px,3vw,44px)] text-[clamp(22px,2.9vw,46px)] leading-[1.45]"
                        : "mt-[clamp(24px,3vw,44px)] text-[clamp(18px,1.9vw,28px)] leading-[1.75] text-ink/85"
                    }
                  >
                    {chapter.body}
                  </p>
                </Reveal>
              </div>
            ))}

            {shot && (
              <Reveal variant="scale" className="mt-[clamp(40px,5vw,80px)]">
                <ShotFrame
                  src={shot.src}
                  alt={`领跃协同制造管理系统${shot.module}模块界面`}
                  label={`leanleap.app — ${shot.module}`}
                />
                <p className="eyebrow mt-4 text-mute">产品界面 · {shot.module}</p>
              </Reveal>
            )}

            <div className="mt-[clamp(56px,7vw,112px)]">
              <Reveal variant="fade" className="flex items-center justify-between gap-6">
                <h2 className="eyebrow flex items-center gap-3">
                  <span className="text-red">03</span>
                  实施效果
                </h2>
                <span aria-hidden className="eyebrow text-mute">
                  Results
                </span>
              </Reveal>
              <Rule className="mt-4 !bg-ink !opacity-100" />
              <ul>
                {caseStudy.results.map((result, i) => (
                  <Reveal
                    as="li"
                    key={result}
                    delay={i * 70}
                    className="flex items-baseline gap-5 border-b border-line py-[clamp(16px,2vw,28px)]"
                  >
                    <span aria-hidden className="h-[5px] w-[5px] shrink-0 -translate-y-[0.35em] bg-red" />
                    <span className="title text-[clamp(19px,2.3vw,36px)]">{result}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 客户评价：大引言 ───────── */}
      {caseStudy.testimonial && (
        <section className="bg-paper-2">
          <div className="wrap grid gap-x-10 gap-y-8 py-[clamp(72px,10vw,160px)] md:grid-cols-12">
            <Reveal variant="fade" className="md:col-span-3">
              <h2>
                <Tag index="04">客户评价</Tag>
              </h2>
            </Reveal>
            <figure className="md:col-span-9">
              <span aria-hidden className="display block h-[0.5em] text-[clamp(96px,14vw,240px)] leading-[0.8] text-red">
                “
              </span>
              <blockquote>
                <Lines
                  as="p"
                  lines={[caseStudy.testimonial.quote]}
                  className="display mt-[clamp(20px,2.6vw,40px)] text-[clamp(26px,4.4vw,76px)] leading-[1.22] text-balance"
                />
              </blockquote>
              <Reveal delay={300} as="figcaption" className="mt-[clamp(28px,4vw,56px)] flex items-center gap-4">
                <span aria-hidden className="h-px w-12 bg-ink" />
                <span className="text-[clamp(15px,1.2vw,18px)] font-medium">
                  {caseStudy.testimonial.author}, {caseStudy.testimonial.role}
                </span>
              </Reveal>
            </figure>
          </div>
        </section>
      )}

      {/* ───────── 相关案例（同行业） ───────── */}
      {relatedCases.length > 0 && (
        <section className="bg-paper">
          <div className="wrap pt-[clamp(72px,10vw,160px)]">
            <SectionHead eyebrow="Related" lines={["相关案例"]} />
            <div className="mt-[clamp(40px,6vw,96px)]">
              {relatedCases.map((relatedCase) => (
                <Reveal key={relatedCase.slug}>
                  <Link
                    href={`/case-studies/${relatedCase.slug}`}
                    className="flip-row group grid grid-cols-12 items-center gap-x-6 gap-y-3 border-t border-line px-[clamp(0px,1.2vw,20px)] py-[clamp(24px,3vw,48px)] last:border-b"
                  >
                    <span className="eyebrow col-span-12 text-red md:col-span-2">{relatedCase.industry}</span>
                    <div className="col-span-10 md:col-span-9">
                      <h3 className="title text-[clamp(22px,2.8vw,44px)]">{relatedCase.title}</h3>
                      <p className="flip-mute mt-3 line-clamp-2 max-w-[640px] text-[15px] leading-[1.75] text-mute">
                        {relatedCase.challenge}
                      </p>
                      <span className="eyebrow mt-4 inline-block">查看详情</span>
                    </div>
                    <span className="col-span-2 flex justify-end md:col-span-1">
                      <RowArrow />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── 下一个案例 ───────── */}
      {nextCase && nextCase.slug !== caseStudy.slug && (
        <section className="bg-paper">
          <div className="wrap py-[clamp(72px,10vw,160px)]">
            <Reveal>
              <Link
                href={`/case-studies/${nextCase.slug}`}
                className="flip-row group grid grid-cols-12 items-end gap-x-6 gap-y-5 border-y border-ink px-[clamp(0px,1.2vw,20px)] py-[clamp(28px,4vw,72px)]"
              >
                <span className="col-span-12 flex items-center gap-4">
                  <span className="eyebrow text-red">Next case</span>
                  <span className="eyebrow flip-mute text-mute">{nextCase.industry}</span>
                </span>
                <span className="display col-span-10 text-[clamp(28px,5.6vw,104px)] text-balance">{nextCase.title}</span>
                <span className="col-span-2 flex justify-end pb-[0.4em]">
                  <RowArrow />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <CtaBand
        lines={["开启您的", "数字化转型之旅"]}
        sub="联系我们的专家，获取定制化解决方案"
        primary={{ label: "联系专家", href: "/contact" }}
        secondary={{ label: "查看更多案例", href: "/case-studies" }}
      />
    </>
  )
}
