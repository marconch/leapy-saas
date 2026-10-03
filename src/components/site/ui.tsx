import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Lines, Magnetic, Reveal, Rule } from "./motion"

/* ───────── 箭头 ───────── */
export function Arrow({ className = "", size = 14 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden className={className}>
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  )
}

/* ───────── 按钮 ───────── */
type BtnProps = {
  href: string
  children: React.ReactNode
  variant?: "red" | "ink" | "ghost"
  onDark?: boolean
  size?: "md" | "sm"
  magnetic?: boolean
  external?: boolean
  className?: string
}

export function Btn({
  href,
  children,
  variant = "red",
  onDark = false,
  size = "md",
  magnetic = false,
  external = false,
  className = "",
}: BtnProps) {
  const cls = [
    "btn",
    variant === "red" && "btn-red",
    variant === "ghost" && "btn-ghost",
    onDark && "on-dark",
    size === "sm" && "btn-sm",
    className,
  ]
    .filter(Boolean)
    .join(" ")
  const inner = (
    <>
      <span>{children}</span>
      {variant !== "ghost" && (
        <span className="btn-arrow">
          <Arrow size={size === "sm" ? 12 : 14} />
        </span>
      )}
    </>
  )
  const node = external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
  return magnetic ? <Magnetic>{node}</Magnetic> : node
}

/* ───────── 章节标签：[ 01 ] ── LABEL ───────── */
export function Tag({
  index,
  children,
  className = "",
}: {
  index?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span className="inline-block h-[7px] w-[7px] bg-red" />
      {index && <span className="opacity-60">{index}</span>}
      <span>{children}</span>
    </span>
  )
}

/* ───────── 内页首屏 ───────── */
export function PageHero({
  index,
  eyebrow,
  lines,
  desc,
  meta,
  children,
}: {
  index: string
  eyebrow: string
  lines: React.ReactNode[]
  desc?: React.ReactNode
  meta?: { label: string; value: string }[]
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-paper pt-[calc(var(--header-h)+clamp(48px,9vw,128px))]">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="wrap relative">
        <Reveal variant="fade" className="flex items-center justify-between gap-6">
          <Tag index={index}>{eyebrow}</Tag>
          <span className="eyebrow hidden text-mute sm:block">LeanLeap® — 领跃协同制造</span>
        </Reveal>
        <Lines
          as="h1"
          lines={lines}
          delay={120}
          className="display mt-[clamp(28px,4vw,56px)] text-[clamp(44px,9.2vw,168px)] text-balance"
        />
        <div className="mt-[clamp(32px,5vw,72px)] grid gap-10 pb-[clamp(40px,6vw,88px)] md:grid-cols-12">
          {desc && (
            <Reveal delay={380} className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
              <p className="text-[clamp(16px,1.35vw,20px)] leading-[1.75] text-ink/80">{desc}</p>
              {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
            </Reveal>
          )}
        </div>
        {meta && (
          <>
            <Rule />
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 py-6 md:grid-cols-4">
              {meta.map((m, i) => (
                <Reveal key={m.label} delay={i * 80} className="flex flex-col gap-1.5">
                  <span className="eyebrow text-mute">{m.label}</span>
                  <span className="font-grotesk text-[15px] font-medium">{m.value}</span>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="h-px w-full bg-line" />
    </section>
  )
}

/* ───────── 章节头 ───────── */
export function SectionHead({
  index,
  eyebrow,
  lines,
  desc,
  onDark = false,
  className = "",
}: {
  index?: string
  eyebrow: string
  lines: React.ReactNode[]
  desc?: React.ReactNode
  onDark?: boolean
  className?: string
}) {
  return (
    <div className={`grid gap-x-10 gap-y-8 md:grid-cols-12 ${className}`}>
      <Reveal variant="fade" className="md:col-span-3">
        <Tag index={index} className={onDark ? "text-paper" : ""}>
          {eyebrow}
        </Tag>
      </Reveal>
      <div className="md:col-span-9">
        <Lines lines={lines} className="title text-[clamp(32px,5.2vw,88px)] text-balance" />
        {desc && (
          <Reveal delay={200}>
            <p
              className={`mt-7 max-w-[620px] text-[clamp(15px,1.15vw,18px)] leading-[1.8] ${onDark ? "text-mute-d" : "text-mute"}`}
            >
              {desc}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  )
}

/* ───────── 截图画框 ───────── */
export function ShotFrame({
  src,
  alt,
  label,
  priority = false,
  dark = false,
  className = "",
}: {
  src: string
  alt: string
  label?: string
  priority?: boolean
  dark?: boolean
  className?: string
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[clamp(8px,1vw,14px)] border ${dark ? "border-white/15 bg-[#0d0f14]" : "border-ink/15 bg-white"} shadow-[0_40px_120px_-40px_rgba(11,12,16,.45)] ${className}`}
    >
      <div
        className={`flex h-9 items-center gap-2 border-b px-3.5 ${dark ? "border-white/10 bg-[#14161c]" : "border-ink/10 bg-[#f7f6f3]"}`}
      >
        <span className="h-2 w-2 rounded-full bg-red" />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/20" : "bg-ink/15"}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? "bg-white/20" : "bg-ink/15"}`} />
        {label && (
          <span className={`eyebrow ml-3 truncate !text-[10px] ${dark ? "text-white/50" : "text-mute"}`}>{label}</span>
        )}
      </div>
      <Image
        src={src}
        alt={alt}
        width={1760}
        height={990}
        priority={priority}
        className="block h-auto w-full"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
    </figure>
  )
}

/* ───────── 跑马灯 ───────── */
export function Marquee({
  items,
  reverse = false,
  duration = 40,
  className = "",
  itemClassName = "",
}: {
  items: React.ReactNode[]
  reverse?: boolean
  duration?: number
  className?: string
  itemClassName?: string
}) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className={`flex shrink-0 items-center ${itemClassName}`}>
          {item}
        </span>
      ))}
    </div>
  )
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="marquee-track" data-reverse={reverse} style={{ ["--dur" as string]: `${duration}s` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

/* ───────── 全站统一 CTA ───────── */
export function CtaBand({
  lines = ["开启您的", "协同制造管理升级"],
  sub = "针对您所在的行业，为您定制一场产品演示。",
  primary = { label: "预约演示", href: "/contact" },
  secondary = { label: "查看价格", href: "/pricing" },
}: {
  lines?: React.ReactNode[]
  sub?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="relative overflow-hidden bg-red text-white">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 [--grid-c:rgba(255,255,255,.12)]" />
      <div className="wrap relative py-[clamp(72px,11vw,180px)]">
        <Reveal variant="fade">
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="inline-block h-[7px] w-[7px] bg-white" />
            Next step
          </span>
        </Reveal>
        <Lines lines={lines} className="display mt-8 text-[clamp(40px,8.4vw,150px)]" />
        <div className="mt-[clamp(36px,5vw,72px)] flex flex-wrap items-end justify-between gap-8">
          <Reveal delay={200}>
            <p className="max-w-[420px] text-[clamp(15px,1.2vw,18px)] leading-[1.75] text-white/85">{sub}</p>
          </Reveal>
          <Reveal delay={300} className="flex flex-wrap items-center gap-3">
            <Btn href={primary.href} variant="ink" magnetic className="[--btn-hover:#fff] hover:!text-ink">
              {primary.label}
            </Btn>
            <Link
              href={secondary.href}
              className="btn btn-ghost !text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.45)] [--btn-hover:#fff] hover:!text-ink"
            >
              {secondary.label}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
