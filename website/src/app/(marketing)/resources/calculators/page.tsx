import type { Metadata } from "next"
import Link from "next/link"
import { RESOURCES } from "@/lib/content-map"

export const metadata: Metadata = {
  title: "Calculators | Pacific Unity UAE",
  description: "Planning calculators and estimation tools for industrial system design.",
  alternates: { canonical: "https://pacificunity.ae/resources/calculators/" },
}

export default function CalculatorsPage() {
  const items = RESOURCES.filter((item) => item.type === "calculator")
  return (
    <section className="mx-auto max-w-4xl px-4 pb-12 pt-10 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Calculators</h1>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <Link key={item.slug} href={`/resources/${item.slug}/`} className="block rounded-md border p-4 hover:bg-muted">
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  )
}
