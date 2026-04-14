"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
  honeypot: z.string().max(0),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      honeypot: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    if (data.honeypot) return

    // Placeholder — replace with actual API call
    console.log("Contact form:", data)
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border bg-muted/30 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-lg font-semibold">Message Sent</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for getting in touch. We will respond within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="contact-honeypot">Leave this empty</label>
        <input
          id="contact-honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("honeypot")}
        />
      </div>

      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
          Your Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="contact-name"
          placeholder="Full name"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
          Email Address <span className="text-destructive">*</span>
        </label>
        <Input
          id="contact-email"
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
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder="How can we help you?"
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
          "Send Message"
        )}
      </Button>
    </form>
  )
}
