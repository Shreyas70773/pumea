type ProofModuleProps = {
  title?: string
  points: Array<{ label: string; value: string; hint?: string }>
}

export function ProofModule({ title = "Commercial Outcomes", points }: ProofModuleProps) {
  return (
    <section className="rounded-xl border p-6 md:p-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((point) => (
          <div key={point.label} className="rounded-lg border bg-muted/20 p-4">
            <p className="text-2xl font-bold text-primary">{point.value}</p>
            <p className="mt-1 font-medium">{point.label}</p>
            {point.hint && <p className="mt-1 text-xs text-muted-foreground">{point.hint}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
