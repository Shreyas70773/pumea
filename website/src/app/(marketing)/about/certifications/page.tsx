import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"

export const metadata: Metadata = {
  title: "Certifications | Pacific Unity UAE",
  description: "Quality, process, and documentation standards that support project delivery confidence.",
  alternates: { canonical: "https://pacificunity.ae/about/certifications/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Certifications", href: "/about/certifications/" },
]

export default function CertificationsPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Certifications & Documentation" subtitle="Verification-oriented project documentation and supplier qualification process." />
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Factory qualification documentation available during technical evaluation.</li>
            <li>Material, component, and inspection records mapped to project scope.</li>
            <li>Commissioning and handover checklists supplied as part of delivery workflow.</li>
          </ul>
        </div>
      </section>
    </>
  )
}
