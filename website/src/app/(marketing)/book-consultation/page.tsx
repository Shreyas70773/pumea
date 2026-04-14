import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { SectionHeading } from "@/components/shared/section-heading"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Book Consultation | Pacific Unity UAE",
  description: "Book a technical consultation to map your production goals to a practical system architecture.",
  alternates: { canonical: "https://pacificunity.ae/book-consultation/" },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Book Consultation", href: "/book-consultation/" },
]

export default function BookConsultationPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <div className="mx-auto max-w-7xl px-4 md:px-6"><Breadcrumbs items={breadcrumbs} /></div>
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-3xl space-y-6">
          <SectionHeading title="Book a Technical Consultation" subtitle="Ideal for solution evaluation and system-level planning (MOFU stage)." />
          <ContactForm intent="evaluate" pageType="mofu" sourceRoute="/book-consultation/" />
        </div>
      </section>
    </>
  )
}
