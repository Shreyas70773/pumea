export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== "undefined" && "gtag" in window) {
    ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      "event",
      eventName,
      params,
    )
  }
}
