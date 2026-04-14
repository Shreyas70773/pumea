"use client"

import { useMemo, useState } from "react"

export default function BudgetCalculatorPage() {
  const [capacity, setCapacity] = useState(3)
  const [automation, setAutomation] = useState(1)
  const estimate = useMemo(() => Math.round(capacity * 12000 + automation * 25000), [capacity, automation])

  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 pt-10 md:px-6">
      <h1 className="text-3xl font-bold tracking-tight">Budget Calculator</h1>
      <p className="mt-2 text-sm text-muted-foreground">Quick estimate helper for early planning only.</p>
      <div className="mt-6 space-y-4 rounded-xl border p-6">
        <label className="block text-sm font-medium">Target Capacity (TPH): {capacity}</label>
        <input type="range" min={1} max={20} value={capacity} onChange={(e) => setCapacity(Number(e.target.value))} className="w-full" />

        <label className="block text-sm font-medium">Automation Level: {automation}</label>
        <input type="range" min={1} max={5} value={automation} onChange={(e) => setAutomation(Number(e.target.value))} className="w-full" />

        <p className="text-lg font-semibold">Estimated baseline budget: AED {estimate.toLocaleString()}</p>
      </div>
    </section>
  )
}
