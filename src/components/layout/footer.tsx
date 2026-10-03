import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"
import { Reveal } from "@/components/site/motion"

const FOOTER_COLUMNS = [
  {
    caption: "产品 / Product",
    links: [
      { label: "供应链管理", href: "/products#supply-chain" },
      { label: "生产制造", href: "/products#manufacturing" },
      { label: "财务管理", href: "/products#finance" },
      { label: "经营报表", href: "/products#analytics" },
    ],
  },
  {
    caption: "方案 / Solutions",
    links: [
      { label: "汽车制造", href: "/solutions#automotive" },
      { label: "电子制造", href: "/solutions#electronics" },
      { label: "机械制造", href: "/solutions#machinery" },
      { label: "化工制造", href: "/solutions#chemical" },
    ],
  },
  {
    caption: "资源 / Resources",
    links: [
      { label: "技术文档", href: "/resources#docs" },
      { label: "API 参考", href: "/resources#api" },
      { label: "最佳实践", href: "/resources#practices" },
      { label: "案例研究", href: "/case-studies" },
    ],
  },
  {
    caption: "公司 / Company",
    links: [
      { label: "关于我们", href: "/about" },
      { label: "加入我们", href: "/about#careers" },
      { label: "价格方案", href: "/pricing" },
      { label: "联系我们", href: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="wrap grid gap-x-10 gap-y-14 pb-16 pt-[clamp(56px,7vw,112px)] md:grid-cols-12">
        <div className="flex flex-col gap-6 md:col-span-4">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="" width={32} height={32} className="h-8 w-8" />
            <span className="flex items-baseline gap-1.5">
              <span className="font-display text-[18px] font-bold">领跃</span>
              <span className="font-grotesk text-[16px] font-semibold tracking-[-0.02em]">LeanLeap</span>
            </span>
          </div>
          <p className="max-w-[340px] text-[14px] leading-[1.8] text-mute-d">
            协同制造管理云平台，打通采购、销售、生产、库存、财务、成本到经营分析的全业务链路。
          </p>
          <div className="mt-2 flex flex-col gap-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="ulink w-fit font-grotesk text-[clamp(20px,2vw,28px)] font-medium tracking-[-0.02em]"
            >
              {siteConfig.contact.email}
            </a>
            <a href="tel:+862162095557" className="ulink w-fit font-grotesk text-[15px] text-mute-d">
              +86 21-6209 5557
            </a>
            <span className="text-[13px] text-mute-d">{siteConfig.contact.address}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:col-span-8 md:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.caption} className="flex flex-col gap-3.5">
              <span className="eyebrow mb-1.5 text-white/65">{col.caption}</span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="ulink w-fit text-[14px] text-paper/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 巨型字标 */}
      <Reveal variant="fade" className="wrap select-none">
        <div aria-hidden className="[container-type:inline-size]">
          <div className="font-grotesk whitespace-nowrap text-center text-[23.4cqw] font-bold pb-[0.06em] leading-[0.9] tracking-[-0.055em] text-paper">
            LeanLeap
          </div>
        </div>
      </Reveal>

      <div className="mt-[clamp(20px,3vw,48px)] border-t border-line-d">
        <div className="wrap flex flex-wrap items-center justify-between gap-3 py-5 text-[12px] text-white/65">
          <span>
            © 2026 {siteConfig.creator} ·{" "}
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              沪ICP备20031664号-1
            </a>
          </span>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="transition-colors hover:text-white">
              隐私政策
            </Link>
            <Link href="/legal/terms" className="transition-colors hover:text-white">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
