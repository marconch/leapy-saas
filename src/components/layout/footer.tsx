import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

// Portal design / SiteFooter：深色底 #080B12，四组导航 + 品牌与联系信息
const FOOTER_COLUMNS = [
  {
    caption: "产品 PRODUCT",
    links: [
      { label: "供应链管理", href: "/products#supply-chain" },
      { label: "生产制造", href: "/products#manufacturing" },
      { label: "财务管理", href: "/products#finance" },
      { label: "经营报表", href: "/products#analytics" }
    ]
  },
  {
    caption: "方案 SOLUTIONS",
    links: [
      { label: "汽车制造", href: "/solutions#automotive" },
      { label: "电子制造", href: "/solutions#electronics" },
      { label: "机械制造", href: "/solutions#machinery" },
      { label: "化工制造", href: "/solutions#chemical" }
    ]
  },
  {
    caption: "资源 RESOURCES",
    links: [
      { label: "技术文档", href: "/resources#docs" },
      { label: "API 参考", href: "/resources#api" },
      { label: "最佳实践", href: "/resources#practices" },
      { label: "案例研究", href: "/case-studies" }
    ]
  },
  {
    caption: "公司 COMPANY",
    links: [
      { label: "关于我们", href: "/about" },
      { label: "加入我们", href: "/about#careers" },
      { label: "价格方案", href: "/pricing" },
      { label: "联系我们", href: "/contact" }
    ]
  }
]

export function Footer() {
  return (
    <footer className="bg-[#080B12] [font-family:'PingFang_SC',system-ui,sans-serif]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-12 px-[clamp(16px,3vw,32px)] pb-10 pt-14">
        <div className="flex min-w-[240px] flex-[1_1_260px] flex-col gap-3.5">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="LeanLeap" width={28} height={28} className="h-7 w-7" />
            <span className="flex items-baseline gap-1.5">
              <span className="text-[15px] font-semibold text-[#F6F8FC]">领跃</span>
              <span className="font-grotesk text-[13px] font-semibold text-[#F6F8FC]">LeanLeap</span>
            </span>
          </div>
          <p className="m-0 max-w-[280px] text-[12px] leading-[1.7] text-[#6B7589]">
            协同制造管理云平台，打通采购、销售、生产、库存、财务、成本到经营分析的全业务链路。
          </p>
          <div className="flex flex-col gap-1.5 text-[12px] text-[#6B7589]">
            <span>{siteConfig.contact.address}</span>
            <span className="font-jbmono">+86 21-6209 5557</span>
            <span className="font-jbmono">{siteConfig.contact.email}</span>
          </div>
        </div>

        {FOOTER_COLUMNS.map((col) => (
          <div key={col.caption} className="flex min-w-[120px] flex-[1_1_130px] flex-col gap-3">
            <span className="font-grotesk text-[11px] font-semibold tracking-[0.14em] text-[#515A6E]">
              {col.caption}
            </span>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] text-[#8B95A8] no-underline transition-colors hover:text-[#F6F8FC]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-[#1A202B]">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-[clamp(16px,3vw,32px)] py-[18px]">
          <span className="text-[12px] text-[#515A6E]">© 2026 {siteConfig.creator} · 沪ICP备</span>
          <div className="flex gap-5 text-[12px] text-[#515A6E]">
            <Link href="/legal/privacy" className="no-underline transition-colors hover:text-[#8B95A8]">
              隐私政策
            </Link>
            <Link href="/legal/terms" className="no-underline transition-colors hover:text-[#8B95A8]">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
