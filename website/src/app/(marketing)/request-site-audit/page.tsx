import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Request Site Audit | Pacific Unity UAE",
  description: "Request a site audit to validate utilities, layout constraints, and system fit before procurement.",
  alternates: { canonical: "https://pacificunity.ae/request-site-audit/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Request Site Audit", href: "/request-site-audit/" },
]

export default function RequestSiteAuditPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <SectionHeading title="Request Site Audit" subtitle="For complex projects where layout, utilities, and process integration must be validated early." />
          <ContactForm intent="evaluate" pageType="mofu" sourceRoute="/request-site-audit/" />
        </div>
      </section>
    </>
  )
}
