import type { Metadata } from "next"
import Link from "next/link"
import { RESOURCES } from "@/lib/content-map"

export const metadata: Metadata = {
  title: "Guides | Pacific Unity UAE",
  description: "Planning guides for feed, water, and packaging systems.",
  alternates: { canonical: "https://pacificunity.ae/resources/guides/" },
}

export default function GuidesPage() {
  const guides = RESOURCES.filter((item) => item.type === "guide")
  return (
    <section className="mx-auto max-w-4xl px-4 pb-12 pt-10 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Guides</h1>
      <div className="mt-6 space-y-3">
        {guides.map((item) => (
          <Link key={item.slug} href={`/resources/${item.slug}/`} className="block rounded-md border p-4 hover:bg-muted">
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
