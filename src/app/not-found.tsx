import Link from "next/link"
import { GridPulse, Reveal, Rule } from "@/components/site/motion"
import { Arrow, Btn, Tag } from "@/components/site/ui"

const POPULAR = [
  { href: "/case-studies", title: "客户案例", desc: "查看成功案例" },
  { href: "/pricing", title: "价格方案", desc: "了解定价信息" },
  { href: "/resources", title: "资源中心", desc: "技术文档资料" },
]

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper pt-[calc(var(--header-h)+clamp(24px,4vw,56px))]">
      <div
        aria-hidden
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]"
      />
      <GridPulse className="[mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]" />

      <div className="wrap relative flex flex-1 flex-col pb-[clamp(40px,6vw,88px)]">
        <Reveal variant="fade" className="flex items-center justify-between gap-6">
          <Tag index="—">Error 404</Tag>
          <span aria-hidden className="eyebrow hidden text-mute sm:block">
            Page not found
          </span>
        </Reveal>

        {/* 巨型 404 */}
        <Reveal variant="scale" delay={100} className="relative mt-[clamp(8px,2vw,24px)]">
          <p
            aria-hidden
            className="num m-0 flex select-none items-end text-[clamp(150px,36vw,620px)] leading-[0.82] tracking-[-0.07em]"
          >
            <span>4</span>
            <span className="text-red">0</span>
            <span>4</span>
            <span className="mb-[0.08em] ml-[0.06em] inline-block h-[0.1em] w-[0.1em] bg-red" />
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,5vw,72px)] grid gap-x-10 gap-y-12 md:grid-cols-12">
          <Reveal delay={200} className="md:col-span-6">
            <h1 className="title text-[clamp(32px,5.2vw,88px)]">页面未找到</h1>
            <p className="mt-5 max-w-[520px] text-[clamp(16px,1.35vw,20px)] leading-[1.75] text-ink/80">
              抱歉，您访问的页面不存在或已被移动。
            </p>
            <p className="eyebrow mt-9 text-mute">您可以尝试以下选项：</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Btn href="/" magnetic>
                返回首页
              </Btn>
              <Btn href="/products" variant="ghost">
                查看产品
              </Btn>
              <Btn href="/solutions" variant="ghost">
                解决方案
              </Btn>
              <Btn href="/contact" variant="ghost">
                联系我们
              </Btn>
            </div>
          </Reveal>

          <Reveal delay={320} className="md:col-span-5 md:col-start-8">
            <div className="mb-5 flex items-baseline justify-between">
              <h2 className="text-[15px] font-semibold">热门页面：</h2>
              <span aria-hidden className="eyebrow text-mute">
                Popular
              </span>
            </div>
            <Rule className="!bg-ink !opacity-100" />
            <ul>
              {POPULAR.map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flip-row group flex items-center gap-5 border-b border-line px-[clamp(0px,1vw,14px)] py-[clamp(14px,1.6vw,22px)]"
                  >
                    <span className="eyebrow text-red">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[clamp(17px,1.5vw,22px)] font-semibold">{item.title}</span>
                    <span className="flip-mute text-[14px] text-mute">— {item.desc}</span>
                    <Arrow className="ml-auto shrink-0 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-mute">
              如果您认为这是一个错误，请
              <Link href="/contact" className="ulink text-ink">
                联系我们
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
