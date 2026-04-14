"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { getWhatsAppUrl } from "@/lib/constants"

export function WhatsAppFAB({ pageTitle }: { pageTitle?: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    const timer = setTimeout(() => setVisible(true), 3000)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const message = pageTitle
    ? `Hi, I found your website and I'm interested in ${pageTitle}.`
    : undefined

  if (!visible) return null

  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
