import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You — Quote Request Received | Pacific Unity MEA",
  description:
    "Your quote request has been received. We will respond within 24 hours with a detailed quotation.",
  robots: { index: false, follow: true },
}

export default function QuoteSuccessPage() {
  return (
    <section className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-xl text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />

        <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
          Thank You — Your Quote Request Has Been Received
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          We have received your enquiry and will respond within <strong>24 hours</strong> with
          a detailed quotation tailored to your requirements.
        </p>

        <p className="mt-4 text-muted-foreground">
          If your request is urgent, feel free to call us directly at{" "}
          <a href="tel:971543509370" className="font-medium text-primary hover:underline">
            +971 54 350 9370
          </a>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/">
              Return to Homepage <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/equipment/water-beverage/water-treatment/">
              Browse Equipment
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
