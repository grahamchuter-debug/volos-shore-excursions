export interface SiteImage {
  src: string;
  alt: string;
  base: string;
}

const B = "/images";

function img(base: string, alt: string): SiteImage {
  return { base, src: `${B}/${base}.jpg`, alt };
}

export const siteImages = {
  hero: img(
    "hero",
    "Pagasetic Gulf waterfront at Volos — gateway to Meteora and Mount Pelion",
  ),
  ogDefault: img(
    "og-default",
    "Volos shore excursions — Meteora, Mount Pelion and mainland Greece",
  ),
  logo: {
    base: "logo-mark",
    src: `${B}/logo-mark.svg`,
    alt: "Volos Shore Excursions",
  },
  port: img("cruise-port", "Volos cruise port on the Pagasetic Gulf"),
} as const;

export const subjectImages: Record<string, SiteImage> = {
  historic: img("historic", "Historic Volos streets and mainland Greek character"),
  coast: img("coast", "Coastal scenery on the Pagasetic Gulf near Volos"),
  coastal: img("coastal", "Coastal light along the Volos waterfront"),
  walking: img("walking", "Walking Volos from the cruise terminal"),
  food: img("food", "Greek tavernas and local flavours in Volos"),
  "food-and-wine": img("food-and-wine", "Tsipouro and Greek dining culture in Volos"),
  private: img("private", "Private shore excursion day from Volos"),
  photography: img("photography", "Photography viewpoints above Volos and Pelion"),
  wine: img("wine", "Wine tasting and Pelion cellar culture"),
  compare: img("compare", "Comparing Volos shore excursion options"),
  port: img("cruise-port", "Volos cruise port terminal"),
  nature: img("nature", "Mountain and gulf nature around Volos"),
  family: img("family", "Family-friendly day ashore in Volos"),
  highlights: img("hero", "Volos, Mount Pelion and Meteora highlights"),
  city: img("volos-waterfront", "Volos waterfront promenade on the Pagasetic Gulf"),
  "hero-home": img("hero-home", "Gateway to Meteora and Mount Pelion from Volos"),
  meteora: img("meteora", "Meteora monasteries day trip from Volos cruise port"),
  pelion: img("pelion", "Traditional Mount Pelion villages from Volos"),
  tsipouro: img("tsipouro", "Tsipouro and Greek tavern culture in Volos"),
  argonauts: img("argonauts", "Jason and the Argonauts monument in Volos"),
  pagasetic: img("pagasetic", "Pagasetic Gulf views from Volos"),
  iolcus: img("iolcus", "Ancient Iolcus and archaeological heritage near Volos"),
  "volos-waterfront": img("volos-waterfront", "Volos waterfront promenade"),
  viewpoints: img("viewpoints", "Best viewpoints around Volos and Mount Pelion"),
  waterfront: img("waterfront", "Volos harbour and waterfront cafés"),
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "private-meteora-monasteries": "meteora",
  "historical-pelion-villages": "pelion",
  "panoramic-pelion-wine-tasting": "wine",
  "private-mylopotamos-tsagkarada": "coast",
  "private-volos-farm-cooking": "food",
  "private-volos-pelion-villages": "pelion",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "highlights");
}

export const excursionsHubImage = pick("pagasetic");

const highlightImageKeys: Record<string, string> = {
  "volos-waterfront": "volos-waterfront",
  "argonauts-monument": "argonauts",
  "mount-pelion": "pelion",
  meteora: "meteora",
  "pagasetic-gulf": "pagasetic",
  "ancient-iolcus": "iolcus",
};

const comparisonImageKeys: Record<string, string> = {
  "tour-or-independent": "compare",
  "best-shore-excursions": "highlights",
  "first-time-volos-day": "walking",
  "meteora-or-pelion": "meteora",
  "meteora-or-volos-city": "meteora",
  "private-tour-vs-small-group": "private",
  "one-day-in-volos": "walking",
};

export function getComparisonImage(slug: string): SiteImage {
  return pick(comparisonImageKeys[slug] ?? "compare");
}

export function getHighlightImage(slug: string): SiteImage {
  return pick(highlightImageKeys[slug] ?? "highlights");
}

export function getExperienceImage(slug: string): SiteImage {
  return pick(slug);
}

export const guidesHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  historic: "historic",
  walking: "walking",
  compare: "compare",
  port: "port",
  "cruise-port": "port",
  food: "food",
  "food-and-wine": "food-and-wine",
  private: "private",
  coast: "coast",
  coastal: "coastal",
  nature: "nature",
  photography: "photography",
  meteora: "meteora",
  pelion: "pelion",
  tsipouro: "tsipouro",
  argonauts: "argonauts",
  pagasetic: "pagasetic",
  iolcus: "iolcus",
  "volos-waterfront": "volos-waterfront",
  viewpoints: "viewpoints",
  waterfront: "waterfront",
  wine: "wine",
};

export function getGuideImage(imageKey: string): SiteImage {
  return pick(guideImageKeys[imageKey] ?? imageKey);
}

export function getHotelImage(_slug?: string): SiteImage {
  return pick("city");
}

export function getTransferImage(_slug?: string): SiteImage {
  return pick("private");
}
