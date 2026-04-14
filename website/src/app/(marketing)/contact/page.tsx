import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { BreadcrumbSchema } from "@/components/seo/schema/breadcrumb"
import { CTAStrip } from "@/components/shared/cta-strip"
import { SectionHeading } from "@/components/shared/section-heading"
import { ContactForm } from "@/components/forms/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { NAP, getWhatsAppUrl } from "@/lib/constants"
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Pacific Unity — Dubai & UAE",
  description:
    "Get in touch with Pacific Unity MEA for industrial equipment enquiries. Office in Ras Al Khaimah, serving Dubai, Abu Dhabi, and all UAE emirates. Call +971 54 350 9370.",
  alternates: {
    canonical: "https://pacificunity.ae/contact/",
  },
}

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact/" },
]

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Contact Pacific Unity — Dubai &amp; UAE
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you need a quotation, technical advice, or after-sales support,
            our team is here to help. We respond to all enquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <SectionHeading title="Get in Touch" as="h2" />
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href={`tel:${NAP.phoneClean}`} className="text-muted-foreground hover:text-primary">
                        {NAP.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        {NAP.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${NAP.email}`} className="text-muted-foreground hover:text-primary">
                        {NAP.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Office Address</p>
                      <address className="not-italic text-muted-foreground">
                        {NAP.address.street}<br />
                        {NAP.address.area}<br />
                        {NAP.address.city}<br />
                        {NAP.address.country}
                      </address>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-muted-foreground">
                        Sunday – Thursday, 9:00 AM – 6:00 PM (UAE time)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="flex aspect-video items-center justify-center rounded-lg border bg-muted/30 p-8 text-center">
                <div>
                  <MapPin className="mx-auto h-10 w-10 text-muted-foreground/50" />
                  <p className="mt-3 font-medium">{NAP.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {NAP.address.street}<br />
                    {NAP.address.area}<br />
                    {NAP.address.city}, {NAP.address.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <SectionHeading title="Send Us a Message" as="h2" />
              <Card>
                <CardContent className="p-6 md:p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-12 md:px-6 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <CTAStrip
            title="Need a Quick Response?"
            description="For urgent equipment enquiries, reach us directly on WhatsApp. We typically reply within minutes during office hours."
          />
        </div>
      </section>
    </>
  )
}
