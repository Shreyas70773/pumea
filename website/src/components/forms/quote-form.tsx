"use client"

import { useRouter } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

const PRODUCT_OPTIONS = [
  "Water Treatment",
  "Filling Machines",
  "Labeling Machines",
  "Pellet Mills",
  "Hammer Mills",
  "Tanks & Vessels",
  "Complete Production Line",
  "Other",
] as const

const quoteSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  product: z.string().min(1, "Please select a product category"),
  message: z.string().min(10, "Please provide some details about your requirements"),
  intent: z.string().optional(),
  pageType: z.string().optional(),
  sourceRoute: z.string().optional(),
  honeypot: z.string().max(0),
})

type QuoteFormValues = z.infer<typeof quoteSchema>

type QuoteFormProps = {
  intent?: string
  pageType?: "tofu" | "mofu" | "bofu"
  sourceRoute?: string
}

export function QuoteForm({ intent = "purchase", pageType = "bofu", sourceRoute = "/request-quote/" }: QuoteFormProps) {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      product: "",
      message: "",
      intent,
      pageType,
      sourceRoute,
      honeypot: "",
    },
  })

  async function onSubmit(data: QuoteFormValues) {
    if (data.honeypot) return

    trackEvent("form_submit", {
      form_type: "quote",
      intent: data.intent ?? intent,
      page_type: data.pageType ?? pageType,
      source_route: data.sourceRoute ?? sourceRoute,
      product: data.product,
    })

    // Placeholder — replace with actual API call / CRM sync
    console.log("Quote request:", data)
    await new Promise((resolve) => setTimeout(resolve, 600))
    router.push("/request-quote/success/")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="honeypot">Leave this empty</label>
        <input
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <input type="hidden" {...register("intent")} />
      <input type="hidden" {...register("pageType")} />
      <input type="hidden" {...register("sourceRoute")} />

      <div>
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium">
          Full Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="fullName"
          placeholder="Your full name"
          aria-invalid={!!errors.fullName}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Email Address <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@company.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
          Phone / WhatsApp <span className="text-destructive">*</span>
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="+971 XX XXX XXXX"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="product" className="mb-1.5 block text-sm font-medium">
          Product Interest <span className="text-destructive">*</span>
        </label>
        <Controller
          name="product"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger id="product" className="w-full" aria-invalid={!!errors.product}>
                <SelectValue placeholder="Select a product category" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_OPTIONS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.product && (
          <p className="mt-1 text-sm text-destructive">{errors.product.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project — capacity needed, industry, timeline, etc."
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Submit Quote Request"
        )}
      </Button>
    </form>
  )
}
