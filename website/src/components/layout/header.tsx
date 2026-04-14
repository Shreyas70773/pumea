"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS, getWhatsAppUrl } from "@/lib/constants"
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <span className="text-primary">Pacific</span>
          <span>Unity</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                {"children" in item && item.children && (
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>
              {"children" in item && item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-55 rounded-lg border bg-popover p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full p-2 text-green-600 transition-colors hover:bg-green-50 sm:inline-flex"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/request-quote">Request Quote</Link>
          </Button>
          <button
            type="button"
            className="rounded-md p-2 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t bg-background px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium"
                >
                  {item.label}
                </Link>
                {"children" in item &&
                  item.children?.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-6 py-2 text-sm text-muted-foreground"
                    >
                      {child.label}
                    </Link>
                  ))}
              </div>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild size="sm" variant="outline">
              <Link href="/contact" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/request-quote" onClick={() => setMobileOpen(false)}>
                Request Quote
              </Link>
            </Button>
            <Button asChild size="sm" variant="outline" className="text-green-600">
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
