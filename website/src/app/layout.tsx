import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import { OrganizationSchema } from "@/components/seo/schema/organization"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://pacificunity.ae"),
  title: {
    default: "Pacific Unity MEA — Industrial Equipment Supplier Dubai",
    template: "%s | Pacific Unity MEA",
  },
  description:
    "Feed processing, water treatment, filling & packaging, and stainless steel tank equipment for the UAE. Proven track record across 9 countries. Request a quote.",
  keywords: [
    "industrial equipment supplier Dubai",
    "water treatment plant Dubai",
    "pellet mill UAE",
    "filling machine Dubai",
    "labeling machine UAE",
    "stainless steel tanks Dubai",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "Pacific Unity MEA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <OrganizationSchema />
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  )
}
