import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNavigation, MobileNavigation } from "./navigation"
import { siteConfig } from "@/lib/site-config"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center space-x-4">
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 object-contain"
              priority
            />
            <span className="truncate text-base font-bold tracking-tight md:text-xl">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <MainNavigation />

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact">联系销售</Link>
            </Button>
            <Button size="sm" asChild>
              <a href={siteConfig.loginUrl}>免费试用</a>
            </Button>
          </div>

          {/* Mobile: Free Trial button + menu */}
          <div className="flex shrink-0 items-center space-x-2 md:hidden">
            <Button size="sm" asChild>
              <a href={siteConfig.loginUrl}>免费试用</a>
            </Button>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  )
}