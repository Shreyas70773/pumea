import Link from "next/link"
import { NAP, SOCIAL } from "@/lib/constants"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  equipment: [
    { label: "Water Treatment", href: "/equipment/water-beverage/water-treatment" },
    { label: "Filling Machines", href: "/equipment/filling-packaging/filling-machines" },
    { label: "Labeling Machines", href: "/equipment/filling-packaging/labeling-machines" },
    { label: "Pellet Mills", href: "/equipment/feed-processing/pellet-mills" },
    { label: "Hammer Mills", href: "/equipment/feed-processing/crushers/hammer-mill" },
    { label: "Tanks & Vessels", href: "/equipment/tanks-vessels" },
  ],
  company: [
    { label: "Our Track Record", href: "/about/our-track-record" },
    { label: "Our Story", href: "/about/our-story" },
    { label: "Contact", href: "/contact" },
    { label: "Request a Quote", href: "/request-quote" },
  ],
  locations: [
    { label: "Dubai", href: "/locations/dubai" },
    { label: "UAE", href: "/locations/uae" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-primary">Pacific</span> Unity
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Industrial equipment supplier in the UAE. Feed processing, water
              treatment, filling & packaging, and stainless steel tanks.
            </p>
            <div className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              <a href={`tel:${NAP.phone}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                {NAP.phone}
              </a>
              <a href={`mailto:${NAP.email}`} className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                {NAP.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {NAP.address.street}, {NAP.address.area},{" "}
                  {NAP.address.city}, {NAP.address.country}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Equipment</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.equipment.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Locations</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLinks.locations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {NAP.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
