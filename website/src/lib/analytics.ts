export type TrackPayload = Record<string, string | number | boolean | null | undefined>

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export function trackEvent(eventName: string, params?: TrackPayload) {
  if (typeof window === "undefined") return

  if ("gtag" in window) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      eventName,
      params,
    )
  }

  if (!window.dataLayer) {
    window.dataLayer = []
  }

  window.dataLayer.push({
    event: eventName,
    timestamp: Date.now(),
    ...(params ?? {}),
  })
}
