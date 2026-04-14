import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/constants"

interface CTAStripProps {
  title?: string
  description?: string
  whatsappMessage?: string
}

export function CTAStrip({
  title = "Ready to Discuss Your Project?",
  description = "Get expert guidance on the right equipment for your operation. Our team responds within 24 hours.",
  whatsappMessage,
}: CTAStripProps) {
  return (
    <section className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground md:px-12 md:py-16">
      <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">{description}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild size="lg" variant="secondary" className="min-w-[200px]">
          <Link href="/request-quote">Request a Quote</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
