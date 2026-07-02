"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/lib/site-config"

// Portal design / SiteHeader：桌面断点 960px，当前页红色下划线高亮
const NAV_ITEMS = [
  { key: "products", label: "产品", href: "/products" },
  { key: "solutions", label: "解决方案", href: "/solutions" },
  { key: "industries", label: "行业应用", href: "/industries" },
  { key: "pricing", label: "价格", href: "/pricing" },
  { key: "cases", label: "案例研究", href: "/case-studies" },
  { key: "resources", label: "资源", href: "/resources" },
  { key: "about", label: "关于我们", href: "/about" },
  { key: "contact", label: "联系我们", href: "/contact" }
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = React.useState(false)

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <div className="sticky top-0 z-50 border-b border-[#E2E7EF] bg-[rgba(255,255,255,.96)] backdrop-blur-[10px] [font-family:'PingFang_SC',system-ui,sans-serif]">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-4 px-[clamp(16px,3vw,32px)]">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 no-underline">
          <Image src="/logo.svg" alt="LeanLeap" width={28} height={28} className="h-7 w-7" priority />
          <span className="flex items-baseline gap-1.5">
            <span className="text-[16px] font-semibold text-[#11151E]">领跃</span>
            <span className="font-grotesk text-[14px] font-semibold tracking-[-0.02em] text-[#11151E]">LeanLeap</span>
          </span>
        </Link>

        {/* Desktop navigation (>= 960px) */}
        <nav className="hidden gap-1 text-[13px] min-[960px]:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={
                isActive(item.href)
                  ? "border-b-2 border-[#E10A1F] px-2.5 pb-5 pt-[22px] font-semibold text-[#11151E] no-underline"
                  : "border-b-2 border-transparent px-2.5 pb-5 pt-[22px] font-normal text-[#4A5468] no-underline transition-colors hover:text-[#11151E]"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3.5 min-[960px]:flex">
          <span className="font-grotesk cursor-pointer text-[12px] tracking-[0.04em] text-[#6E7889]">中 · EN</span>
          <a
            href={siteConfig.loginUrl}
            className="rounded-lg border border-[#C4CBD7] px-3.5 py-2 text-[13px] font-medium text-[#1C2230] no-underline transition-colors hover:border-[#98A1B2]"
          >
            登录
          </a>
          <Link
            href="/contact"
            className="rounded-lg bg-[#E10A1F] px-[18px] py-[9px] text-[13px] font-semibold text-white no-underline transition-colors hover:bg-[#B00717]"
          >
            免费试用
          </Link>
        </div>

        {/* Mobile (< 960px): CTA + hamburger */}
        <div className="flex items-center gap-3.5 min-[960px]:hidden">
          <Link
            href="/contact"
            className="rounded-lg bg-[#E10A1F] px-3.5 py-2 text-[12px] font-semibold text-white no-underline"
          >
            免费试用
          </Link>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex w-[22px] cursor-pointer flex-col gap-1 border-none bg-transparent px-0 py-2"
            aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={menuOpen}
          >
            <span className="block h-0.5 rounded-sm bg-[#1C2230]" />
            <span className="block h-0.5 rounded-sm bg-[#1C2230]" />
            <span className="block h-0.5 rounded-sm bg-[#1C2230]" />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="flex flex-col border-t border-[#E2E7EF] bg-white px-[clamp(16px,3vw,32px)] pb-5 pt-2 min-[960px]:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={
                isActive(item.href)
                  ? "border-b border-[#EDF0F6] py-3.5 text-[15px] font-semibold text-[#11151E] no-underline"
                  : "border-b border-[#EDF0F6] py-3.5 text-[15px] font-normal text-[#4A5468] no-underline"
              }
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-2.5">
            <a
              href={siteConfig.loginUrl}
              className="flex-1 rounded-lg border border-[#C4CBD7] p-3 text-center text-[14px] font-medium text-[#1C2230] no-underline"
            >
              登录
            </a>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-lg bg-[#E10A1F] p-3 text-center text-[14px] font-semibold text-white no-underline"
            >
              免费试用
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
