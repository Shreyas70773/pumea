import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { QuoteForm } from "@/components/forms/quote-form"
import { Card, CardContent } from "@/components/ui/card"
import { NAP, getWhatsAppUrl } from "@/lib/constants"
import {
  ClipboardCheck,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Request a Quote — Pacific Unity MEA",
  description:
    "Request a free quotation for industrial equipment in the UAE. Water treatment plants, filling machines, labeling machines, pellet mills, and more. Response within 24 hours.",
  alternates: {
    canonical: "https://pacificunity.ae/request-quote/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Request a Quote", href: "/request-quote/" },
]

const steps = [
  {
    icon: ClipboardCheck,
    title: "We review your requirements",
    description: "Our team reviews your enquiry and prepares an initial assessment — typically within 24 hours.",
  },
  {
    icon: FileText,
    title: "We prepare a detailed quotation",
    description: "You receive a comprehensive quotation with specifications, pricing, lead times, and delivery details.",
  },
  {
    icon: MapPin,
    title: "We arrange a site visit if needed",
    description: "For larger projects, we visit your facility to assess installation requirements and finalise the scope.",
  },
]

export default function RequestQuotePage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="px-4 pb-16 pt-8 md:px-6 md:pb-20 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Request a Quote — Pacific Unity MEA
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tell us about your project and we will provide a detailed quotation.
            All enquiries are responded to within 24 hours.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <QuoteForm intent="purchase" pageType="bofu" sourceRoute="/request-quote/" />
              </CardContent>
            </Card>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold">What happens next?</h2>
                <div className="mt-4 space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-medium">{step.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border bg-muted/30 p-5">
                <h3 className="font-semibold">Prefer to contact us directly?</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      Call us:{" "}
                      <a href={`tel:${NAP.phoneClean}`} className="font-medium text-primary hover:underline">
                        {NAP.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      WhatsApp:{" "}
                      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
                        {NAP.phone}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>
                      Email:{" "}
                      <a href={`mailto:${NAP.email}`} className="font-medium text-primary hover:underline">
                        {NAP.email}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-muted/30 p-5">
                <h3 className="font-semibold">Our Office</h3>
                <address className="mt-3 text-sm not-italic text-muted-foreground">
                  {NAP.name}<br />
                  {NAP.address.street}<br />
                  {NAP.address.area}<br />
                  {NAP.address.city}, {NAP.address.country}
                </address>
                <p className="mt-3 text-sm text-muted-foreground">
                  <Link href="/contact/" className="text-primary hover:underline">
                    View full contact details
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
