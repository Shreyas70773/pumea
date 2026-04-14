export function getExperimentVariant(experimentKey: string, variants: string[]) {
  if (typeof window === "undefined" || variants.length === 0) return variants[0]

  const storageKey = `exp.${experimentKey}`
  const existing = window.localStorage.getItem(storageKey)
  if (existing && variants.includes(existing)) return existing

  const selected = variants[Math.floor(Math.random() * variants.length)]
  window.localStorage.setItem(storageKey, selected)
  return selected
}
