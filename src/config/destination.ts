/**
 * World 2.0 Destination Configuration — Volos Shore Excursions
 *
 * Domain is the single source of truth for canonicals, sitemap, OG, JSON-LD and Worker CORS.
 * Do not hard-code the hostname elsewhere.
 */

import type { DestinationCurrencyCode } from "@/lib/commerce/currency";

export type DestinationRegion =
  | "europe"
  | "caribbean"
  | "alaska"
  | "british-isles"
  | "other";

/**
 * CENTRAL — public contact is info@wowatour.com only (default until forwarding works).
 * LOCAL — display hello@ / bookings@ / privacy@ on the destination domain.
 */
export type ContactMode = "central" | "local";

export type DestinationConfig = {
  slug: string;
  name: string;
  destination: string;
  descriptor: string;
  strapline: string;
  domain: string;
  url: string;
  description: string;
  locale: string;
  region: DestinationRegion;
  currency: DestinationCurrencyCode;
  bookingRefPrefix: string;
  pagesProject: string;
  paymentsWorkerName: string;
  d1DatabaseName: string;
  /**
   * Public contact presentation. Keep `central` until destination email
   * forwarding (hello/bookings/privacy) is configured, then switch to `local`.
   */
  contactMode: ContactMode;
  /** Destination-local addresses — used only when contactMode is `local`. */
  contact: {
    hello: string;
    bookings: string;
    privacy: string;
  };
  legal: {
    tradingName: string;
    legalCompanyName: string;
    companyNumber: string;
    registeredJurisdiction: string;
    registeredOfficeLines: string[];
    registeredOfficeFormatted: string;
  };
  port: {
    scheduleSlug: string;
    meetingPointLabel: string;
    country: string;
  };
  seo: {
    defaultKeywords: string[];
  };
  nav: readonly { href: string; label: string }[];
  experienceCategories: readonly string[];
};

export const destinationConfig = {
  slug: "volos",
  name: "Volos Shore Excursions",
  destination: "Volos",
  descriptor: "Shore Excursions",
  strapline: "Gateway to Meteora & Mount Pelion",
  domain: "volosshoreexcursions.com",
  url: "https://volosshoreexcursions.com",
  description:
    "Independent Volos shore excursions and honest cruise-port guidance — Pagasetic Gulf waterfront, Mount Pelion villages, tsipouro culture and Meteora when your hours ashore allow.",
  locale: "en_GB",
  region: "europe",
  currency: "EUR",
  bookingRefPrefix: "VO",
  pagesProject: "volos-shore-excursions",
  paymentsWorkerName: "volos-payments",
  d1DatabaseName: "volos-bookings",
  contactMode: "central",
  contact: {
    hello: "hello@volosshoreexcursions.com",
    bookings: "bookings@volosshoreexcursions.com",
    privacy: "privacy@volosshoreexcursions.com",
  },
  legal: {
    tradingName: "Volos Shore Excursions",
    legalCompanyName: "Wow A Tour Ltd",
    companyNumber: "11426960",
    registeredJurisdiction: "England and Wales",
    registeredOfficeLines: [
      "Kintyre House",
      "70 High Street",
      "Fareham",
      "Hampshire",
      "United Kingdom",
      "PO16 7BB",
    ],
    registeredOfficeFormatted:
      "Kintyre House, 70 High Street, Fareham, Hampshire, United Kingdom, PO16 7BB",
  },
  port: {
    scheduleSlug: "volos",
    meetingPointLabel: "Volos Cruise Port",
    country: "Greece",
  },
  seo: {
    defaultKeywords: [
      "Volos shore excursions",
      "Volos cruise excursions",
      "Volos cruise port guide",
      "Meteora from Volos",
      "Mount Pelion shore excursion",
      "Pelion villages cruise day",
      "tsipouro Volos",
      "Argonauts Volos",
      "Pagasetic Gulf cruise port",
      "Walk It Yourself Volos",
      "mainland Greece cruise day",
      "Gateway to Meteora",
    ],
  },
  nav: [
    { href: "/compare", label: "Compare" },
    { href: "/shore-excursions", label: "Excursions" },
    { href: "/guides", label: "Guides" },
    { href: "/wow-collection", label: "Wow Collection" },
    { href: "/cruise-planner", label: "Planner" },
    { href: "/cruise-port-guide", label: "Port Guide" },
  ],
  experienceCategories: [
    "Editor's Choice",
    "Mount Pelion",
    "Meteora",
    "Food",
    "Walking",
    "Myth & History",
    "Private",
    "Family Friendly",
  ],
} as const satisfies DestinationConfig;

export type AppDestinationConfig = typeof destinationConfig;
