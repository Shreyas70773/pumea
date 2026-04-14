"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import type { IntentStage } from "@/lib/content-map"
import { getExperimentVariant } from "@/lib/experiments"

type IntentCTAProps = {
  intent: IntentStage
  sourceRoute: string
  className?: string
}

const CTA_MAP: Record<IntentStage, { title: string; description: string; primary: { label: string; href: string }; secondary: { label: string; href: string } }> = {
  tofu: {
    title: "Need planning help before shortlisting equipment?",
    description: "Start with practical guides and planning tools before moving into technical selection.",
    primary: { label: "View Resources", href: "/resources/" },
    secondary: { label: "Open Budget Calculator", href: "/tools/budget-calculator/" },
  },
  mofu: {
    title: "Want a system-level recommendation?",
    description: "Book a technical consultation to map your requirements to a practical setup.",
    primary: { label: "Book Consultation", href: "/book-consultation/" },
    secondary: { label: "Request Site Audit", href: "/request-site-audit/" },
  },
  bofu: {
    title: "Ready to move toward procurement?",
    description: "Share your capacity, utilities, and timeline to receive a detailed commercial quote.",
    primary: { label: "Request Quote", href: "/request-quote/purchase/" },
    secondary: { label: "Compare Options", href: "/compare/gear-drive-pellet-mill-vs-belt-driven-pellet-mill/" },
  },
}

export function IntentCTA({ intent, sourceRoute, className = "" }: IntentCTAProps) {
  const cta = CTA_MAP[intent]
  const [variant] = useState(() => {
    if (typeof window === "undefined") return "control"
    return getExperimentVariant(`cta-copy-${intent}`, ["control", "alt"])
  })

  const primaryLabel = variant === "alt" && intent === "bofu" ? "Get Budgetary Quote" : cta.primary.label
  const secondaryLabel = variant === "alt" && intent === "mofu" ? "Schedule Technical Call" : cta.secondary.label

  function onClick(label: string) {
    trackEvent("cta_click", {
      cta_label: label,
      intent,
      experiment_variant: variant,
      source_route: sourceRoute,
      page_type: intent,
    })
  }

  return (
    <section className={`rounded-xl border bg-muted/30 p-6 md:p-8 ${className}`}>
      <h3 className="text-xl font-semibold">{cta.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{cta.description}</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Button asChild onClick={() => onClick(cta.primary.label)}>
          <Link href={cta.primary.href}>{primaryLabel}</Link>
        </Button>
        <Button asChild variant="outline" onClick={() => onClick(cta.secondary.label)}>
          <Link href={cta.secondary.href}>{secondaryLabel}</Link>
        </Button>
      </div>
    </section>
  )
}
