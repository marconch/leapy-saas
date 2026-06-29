import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/logo.svg"
                alt={siteConfig.name}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="mt-4 flex space-x-4">
              <Link
                href={siteConfig.social.wechat}
                className="text-muted-foreground hover:text-foreground"
                aria-label="微信"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 12.5a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"/>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.5 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm8 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"/>
                </svg>
              </Link>
              <Link
                href={siteConfig.social.weibo}
                className="text-muted-foreground hover:text-foreground"
                aria-label="微博"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          {siteConfig.navigation.footer.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <span>© 2025 {siteConfig.creator}. 保留所有权利.</span>
          </div>
          <div className="mt-4 flex space-x-6 md:mt-0">
            {siteConfig.navigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center text-sm text-muted-foreground md:text-left">
          <p>
            联系电话: {siteConfig.contact.phone} |
            邮箱: {siteConfig.contact.email}
          </p>
          <p className="mt-1">
            地址: {siteConfig.contact.address}
          </p>
        </div>
      </div>
    </footer>
  )
}