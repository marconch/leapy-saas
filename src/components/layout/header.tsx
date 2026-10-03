"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/site-config"
import { Arrow } from "@/components/site/ui"

const NAV_ITEMS = [
  { label: "产品", en: "Products", href: "/products" },
  { label: "解决方案", en: "Solutions", href: "/solutions" },
  { label: "行业应用", en: "Industries", href: "/industries" },
  { label: "价格", en: "Pricing", href: "/pricing" },
  { label: "案例研究", en: "Cases", href: "/case-studies" },
  { label: "资源", en: "Resources", href: "/resources" },
  { label: "关于我们", en: "About", href: "/about" },
  { label: "联系我们", en: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  React.useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 480 && y > lastY + 2)
      if (y < lastY - 2) setHidden(false)
      lastY = y
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => setOpen(false), [pathname])

  React.useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : ""
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => {
      document.documentElement.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,backdrop-filter] duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled && !open
            ? "border-b border-line bg-paper/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label="领跃 LeanLeap 首页"
            className={`relative z-[60] flex shrink-0 items-center gap-2.5 transition-colors duration-500 ${open ? "text-paper" : "text-ink"}`}
          >
            <Image src="/logo.svg" alt="" width={30} height={30} className="h-[30px] w-[30px]" priority />
            <span className="flex items-baseline gap-1.5">
              <span className="font-display text-[17px] font-bold">领跃</span>
              <span className="font-grotesk text-[15px] font-semibold tracking-[-0.02em]">LeanLeap</span>
            </span>
          </Link>

          <nav aria-label="主导航" className="hidden items-center gap-[clamp(14px,1.7vw,30px)] text-[14px] min-[1100px]:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`ulink py-1 transition-colors ${isActive(item.href) ? "font-semibold text-ink" : "text-ink/70 hover:text-ink"}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2.5">
            <a href={siteConfig.loginUrl} className="ulink mr-3 hidden text-[14px] text-ink/80 hover:text-ink min-[1100px]:block">
              登录
            </a>
            <a
              href={siteConfig.loginUrl}
              className={`btn btn-red btn-sm relative z-[60] ${open ? "max-[480px]:hidden" : ""}`}
            >
              <span>免费试用</span>
              <span className="btn-arrow">
                <Arrow size={12} />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "关闭菜单" : "打开菜单"}
              aria-expanded={open}
              aria-controls="site-menu"
              className={`relative z-[60] grid h-11 w-11 cursor-pointer place-items-center rounded-full border transition-colors duration-500 min-[1100px]:hidden ${
                open ? "border-white/25 text-paper" : "border-line text-ink"
              }`}
            >
              <span className="relative block h-3 w-[18px]">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${open ? "translate-y-[5px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* 全屏菜单 */}
      <div
        id="site-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-ink text-paper transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(.76,0,.24,1)] min-[1100px]:hidden ${
          open
            ? "visible [clip-path:inset(0_0_0_0)]"
            : "invisible [clip-path:inset(0_0_100%_0)]"
        }`}
      >
        <div aria-hidden className="grid-bg on-dark pointer-events-none absolute inset-0" />
        <nav
          aria-label="移动端导航"
          className="wrap relative flex flex-1 flex-col justify-center overflow-y-auto pb-6 pt-[calc(var(--header-h)+16px)]"
        >
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="group flex items-baseline justify-between gap-4 border-b border-white/12 py-[clamp(10px,1.9vh,18px)]"
            >
              <span className="flex items-baseline gap-4 overflow-hidden">
                <span className="eyebrow w-6 text-white/40">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={`font-display text-[clamp(26px,7.4vw,44px)] font-bold tracking-[-0.03em] transition-transform duration-[900ms] ease-[cubic-bezier(.16,1,.3,1)] ${
                    open ? "translate-y-0" : "translate-y-[120%]"
                  } ${isActive(item.href) ? "text-red" : ""}`}
                  style={{ transitionDelay: open ? `${180 + i * 45}ms` : "0ms" }}
                >
                  {item.label}
                </span>
              </span>
              <span className="eyebrow text-white/40 transition-colors group-hover:text-red">{item.en}</span>
            </Link>
          ))}
        </nav>
        <div className="wrap relative flex flex-wrap items-center justify-between gap-4 pb-8 pt-4">
          <a href={siteConfig.loginUrl} tabIndex={open ? 0 : -1} className="btn btn-ghost on-dark btn-sm">
            登录
          </a>
          <span className="eyebrow text-white/40">{siteConfig.contact.email}</span>
        </div>
      </div>
    </>
  )
}
