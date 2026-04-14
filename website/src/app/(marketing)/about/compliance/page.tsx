import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"

export const metadata: Metadata = {
  title: "Compliance | Pacific Unity UAE",
  description: "Delivery process aligned to practical compliance and operational safety expectations.",
  alternates: { canonical: "https://pacificunity.ae/about/compliance/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Compliance", href: "/about/compliance/" },
]

export default function CompliancePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Compliance Readiness" subtitle="Risk-managed deployment approach for regulated and quality-critical operations." />
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Scope review includes utility, quality, and process constraints.</li>
            <li>Site execution planning includes installation safety and commissioning controls.</li>
            <li>Post-installation workflow includes validation and operator handover checkpoints.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
