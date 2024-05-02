declare global {
  interface Window {
    umami: any;
  }
}

export function trackEvent(
  event: string,
  eventData?: Record<string, string | number>
) {
  if (typeof window !== 'undefined') {
    window.umami.track(event, eventData);
  }
}
