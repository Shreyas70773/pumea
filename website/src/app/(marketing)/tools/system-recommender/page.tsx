"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

export default function SystemRecommenderPage() {
  const [industry, setIndustry] = useState("poultry")

  const recommendation = useMemo(() => {
    if (industry === "beverage") return { label: "Beverage Filling Line", href: "/systems/beverage-filling-line/" }
    if (industry === "food") return { label: "Water Treatment Plant", href: "/systems/water-treatment-plant/" }
    return { label: "Feed Production Line", href: "/systems/feed-production-line/" }
  }, [industry])

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 pt-10 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight">System Recommender</h1>
      <p className="mt-2 text-sm text-muted-foreground">Starter wizard for mapping industry profile to system architecture.</p>
      <div className="mt-6 rounded-xl border p-6">
        <select className="w-full rounded-md border p-2" value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <option value="poultry">Poultry / Livestock</option>
          <option value="beverage">Beverage</option>
          <option value="food">Food Processing</option>
        </select>
        <p className="mt-4 text-sm">Recommended path: <strong>{recommendation.label}</strong></p>
        <Link href={recommendation.href} className="mt-4 inline-block rounded-md border px-4 py-2 text-sm hover:bg-muted">
          Open Recommended System
        </Link>
      </div>
    </section>
  )
}
