import type { EditorialCategory } from "./types";
import { SIGNATURE_EXPERIENCE_PATH } from "./signature-experience";
import { EXPLORE_INDEPENDENTLY_PATH } from "./explore-independently";

/**
 * Shared Editorial Promise — destination may override copy in this module.
 * Tone: editorial trust, never a sales pitch. Editor's Choice badge stays separate.
 */
export const editorialPromise = {
  eyebrow: "Our editorial promise",
  title: "We'll always recommend the experience we'd choose ourselves",
  lead: "We'll always recommend the experience we'd choose ourselves.",
  points: [
    "Sometimes that's one of our carefully selected Editor's Choice excursions.",
    "Sometimes it's a free self-guided experience.",
  ],
  closing: "Our goal is to help you enjoy the best possible day ashore.",
} as const;

export interface EditorialCategoryDef {
  id: EditorialCategory;
  label: string;
  shortLabel: string;
  description: string;
}

export const EDITORIAL_CATEGORIES: EditorialCategoryDef[] = [
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's Choice",
    description: "Our strongest overall choice for a well-timed Volos cruise day — Private Meteora Monasteries when hours allow.",
  },
  {
    id: "best-historic",
    label: "Best Historic Experience",
    shortLabel: "Historic",
    description: "Argonaut myth, ancient Iolcus associations and Thessalian archaeology.",
  },
  {
    id: "best-independent",
    label: "Best Independent Experience",
    shortLabel: "Walk It Yourself",
    description: "A realistic self-guided Volos waterfront day within easy reach of the ship — when independence is genuinely best.",
  },
  {
    id: "best-coastal",
    label: "Best Beyond the City",
    shortLabel: "Beyond",
    description: "Mount Pelion villages and Meteora when hours ashore allow.",
  },
  {
    id: "best-view",
    label: "Best Views",
    shortLabel: "Views",
    description: "Pagasetic Gulf light, harbour frames and Pelion balcony panoramas.",
  },
  {
    id: "best-got",
    label: "Signature Experience",
    shortLabel: "Signature",
    description: "Our future Volos small-group flagship, currently in preparation.",
  },
  {
    id: "best-families",
    label: "Best for Families",
    shortLabel: "Families",
    description: "Promenade walks and manageable city circuits with sensible pacing.",
  },
  {
    id: "best-photography",
    label: "Best Photography",
    shortLabel: "Photography",
    description: "Argonauts monument, gulf light and Pelion village viewpoints.",
  },
  {
    id: "best-food",
    label: "Best Food & Wine",
    shortLabel: "Food & Wine",
    description: "Tsipouro meze culture, gulf seafood and Pelion mountain flavours.",
  },
  {
    id: "best-luxury",
    label: "Best Private Tour",
    shortLabel: "Private",
    description: "Dedicated transport and flexible pacing for your own party.",
  },
  {
    id: "hidden-gem",
    label: "Hidden Gem",
    shortLabel: "Hidden Gem",
    description: "Working harbour edges and local tsipouradika beyond the busiest promenade frontage.",
  },
  {
    id: "best-value",
    label: "Best Value",
    shortLabel: "Best Value",
    description: "A rewarding port day without unnecessary transfers or expense.",
  },
  {
    id: "best-short-port",
    label: "Best Short Port Call",
    shortLabel: "Short Port",
    description: "Waterfront and Argonauts highlights when usable hours cannot support Pelion or Meteora.",
  },
];

export interface EditorsCollectionItem {
  id: string;
  emoji: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  signature?: boolean;
  comingSoon?: boolean;
}

export const editorsCollectionItems: EditorsCollectionItem[] = [
  {
    id: "editors-choice",
    emoji: "⭐",
    label: "Editor's Choice",
    description:
      "Private Meteora Monasteries — the strongest rock-monastery day from Volos when your call can support the journey.",
    href: "/shore-excursions/private-meteora-monasteries",
    cta: "View our top pick",
  },
  {
    id: "independent",
    emoji: "🚶",
    label: "Walk It Yourself",
    description:
      "Volos on foot — waterfront, Argonauts monument, Ermou, tsipouro culture and cafés with a generous ship buffer.",
    href: EXPLORE_INDEPENDENTLY_PATH,
    cta: "Open the walking guide",
  },
  {
    id: "pelion",
    emoji: "⛰️",
    label: "Best Mount Pelion",
    description:
      "Historical Pelion Villages — stone lanes, gulf balconies and traditional mountain character.",
    href: "/shore-excursions/historical-pelion-villages",
    cta: "Explore Pelion",
  },
  {
    id: "food-wine",
    emoji: "🍽️",
    label: "Best Food & Tsipouro",
    description:
      "Volos meze culture and gulf seafood — start with our Tsipouro and Food guides before you sit down.",
    href: "/guides/tsipouro-guide",
    cta: "Taste Volos",
  },
  {
    id: "historic",
    emoji: "🏛️",
    label: "Best Myth & History",
    description:
      "Argonauts monument, ancient Iolcus associations and optional museum depth on a city day.",
    href: "/guides/argonauts-monument",
    cta: "Follow the myth",
  },
  {
    id: "photography",
    emoji: "📸",
    label: "Best Photography",
    description:
      "Pagasetic Gulf light, harbour frames and Pelion balcony viewpoints above Volos.",
    href: "/guides/best-viewpoints",
    cta: "Find the views",
  },
  {
    id: "families",
    emoji: "👨‍👩‍👧",
    label: "Best for Families",
    description:
      "Waterfront walks keep distances manageable and leave room for ice cream on the promenade.",
    href: "/guides/explore-independently",
    cta: "See the walking guide",
  },
  {
    id: "private",
    emoji: "🚗",
    label: "Best Private Tour",
    description:
      "Private pacing for Meteora or Pelion when your party wants control of the day’s rhythm.",
    href: "/shore-excursions/private-meteora-monasteries",
    cta: "View private Meteora",
  },
  {
    id: "signature-experience",
    emoji: "✨",
    label: "Signature Experience",
    description:
      "A future maximum-eight-guest Volos day, currently in preparation and not bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    cta: "Preview the concept",
    signature: true,
    comingSoon: true,
  },
];

export function getEditorialLabel(id: EditorialCategory): string {
  return EDITORIAL_CATEGORIES.find((category) => category.id === id)?.label ?? id;
}
