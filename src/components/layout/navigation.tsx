"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

export function MainNavigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      {siteConfig.navigation.main.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

export function MobileNavigation() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center p-2 text-muted-foreground hover:text-foreground"
        aria-label="打开菜单"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 bg-background border-b shadow-lg">
          <div className="container py-4">
            <nav className="flex flex-col space-y-3">
              {siteConfig.navigation.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}