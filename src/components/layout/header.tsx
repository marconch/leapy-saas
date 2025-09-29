import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MainNavigation, MobileNavigation } from "./navigation"
import { siteConfig } from "@/lib/site-config"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <span className="text-xl font-bold tracking-tight">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <MainNavigation />

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact">联系销售</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact">免费试用</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation />
        </div>
      </div>
    </header>
  )
}