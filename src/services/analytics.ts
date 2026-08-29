const MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID?.trim();
const CONSENT_KEY = 'analyticsConsent';

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let initialized = false;
let lastPagePath = '';

const hasAnalyticsConsent = () =>
  typeof window !== 'undefined' &&
  window.localStorage.getItem(CONSENT_KEY) === 'granted';

/** Loads official GA4 gtag.js once, only in production and after explicit consent. */
export function initAnalytics(): boolean {
  if (!import.meta.env.PROD || !MEASUREMENT_ID || !hasAnalyticsConsent()) {
    return false;
  }

  if (initialized) return true;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };

  window.gtag('js', new Date());
  // React Router owns page views, so GA must not send its automatic first view.
  window.gtag('config', MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  script.dataset.ga4 = MEASUREMENT_ID;
  document.head.appendChild(script);
  initialized = true;
  return true;
}

/** Sends one SPA page_view per unique pathname, query string and hash. */
export function trackPageView(
  pagePath = `${location.pathname}${location.search}${location.hash}`
) {
  if (!initAnalytics() || pagePath === lastPagePath) return;

  lastPagePath = pagePath;
  window.gtag('event', 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pagePath,
  });
}

/** Sends a consent-gated GA4 event from the single analytics entry point. */
export function trackEvent(name: string, params: AnalyticsParams = {}) {
  if (!initAnalytics()) return;
  window.gtag('event', name, params);
}

/** Tracks a visitor leaving the site through an external link. */
export function trackOutboundLink(url: string) {
  trackEvent('click', { link_url: url, outbound: true });
}

/** Tracks downloads with GA4's recommended file_download event. */
export function trackDownload(filename: string) {
  trackEvent('file_download', { file_name: filename });
}

/** Tracks contact intent while preserving the chosen contact channel. */
export function trackContact(type: string) {
  trackEvent('click', {
    content_type: 'contact',
    contact_type: type,
    link_text: type === 'contact_form' ? 'Contact' : type,
  });
}

/** Tracks a gallery/series page using GA4's recommended list-view event. */
export function trackGalleryView(listName: string, itemCount: number) {
  trackEvent('view_item_list', {
    item_list_name: listName,
    item_count: itemCount,
  });
}

type ArtworkAnalytics = {
  id: string;
  name: string;
  price: string;
};

/** Tracks opening an artwork detail as a GA4 ecommerce-style item view. */
export function trackArtworkView(artwork: ArtworkAnalytics) {
  const numericPrice = Number(
    artwork.price.replace(/[^\d.,]/g, '').replace(',', '.')
  );

  trackEvent('view_item', {
    item_id: artwork.id,
    item_name: artwork.name,
    item_category: 'painting',
    artist: 'Roman Sophie',
    price: Number.isFinite(numericPrice) ? numericPrice : undefined,
    currency: artwork.price.includes('$') ? 'USD' : undefined,
  });
}
