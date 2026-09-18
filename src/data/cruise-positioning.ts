/**
 * Central cruise-positioning + Your Day Ashore experience categories.
 * Reusable World 2.0 pattern — destination copy lives here; component stays generic.
 */
export const cruisePositioning = {
  enabled: true,
  eyebrow: "Designed for Cruise Passengers",
  message: "Helping cruise passengers make every hour ashore count.",
  variantBMessage: "Everything here is built around your time in port.",
  activeVariant: "A" as "A" | "B",
  showDayAshoreSection: true,
} as const;

export function getCruiseTrustMessage(): string {
  if (cruisePositioning.activeVariant === "B") {
    return cruisePositioning.variantBMessage;
  }
  return cruisePositioning.message;
}

export interface DayAshoreItem {
  id: string;
  title: string;
  body: string;
  href?: string;
  icon: "clock" | "route" | "walk" | "sunrise" | "viewpoint" | "food" | "family" | "luxury";
}

export const dayAshoreIntro =
  "Where will your day in Volos take you? Choose the experience that fits your hours ashore — then build everything around your ship’s schedule.";

export const dayAshoreItems: DayAshoreItem[] = [
  {
    id: "editors-choice",
    title: "Editor's Choice",
    body: "Private Journey to Meteora Monasteries — mainland Greece’s most spectacular cruise day when schedule allows.",
    href: "/shore-excursions/private-meteora-monasteries",
    icon: "luxury",
  },
  {
    id: "mount-pelion",
    title: "Mount Pelion",
    body: "Traditional stone villages, mountain air and gulf panoramas on a shorter scenic climb.",
    href: "/guides/mount-pelion-guide",
    icon: "sunrise",
  },
  {
    id: "walk-it-yourself",
    title: "Walk It Yourself",
    body: "A self-guided Volos waterfront loop — promenade, cafés and mythic atmosphere at your own pace.",
    href: "/guides/explore-independently",
    icon: "walk",
  },
  {
    id: "history",
    title: "History",
    body: "Jason, the Argonauts and ancient Iolcus — the mythic story still woven into the gulf city.",
    href: "/guides/jason-argonauts-guide",
    icon: "route",
  },
  {
    id: "food",
    title: "Food",
    body: "Tsipouro, meze and Greek tavernas — Volos’s everyday table by the Pagasetic Gulf.",
    href: "/guides/tsipouro-guide",
    icon: "food",
  },
  {
    id: "photography",
    title: "Photography",
    body: "Gulf light, Pelion balconies and monastery rock pillars when your hours ashore allow.",
    href: "/guides/best-viewpoints",
    icon: "viewpoint",
  },
  {
    id: "families",
    title: "Families",
    body: "Farm cooking, shorter Pelion circuits and relaxed waterfront walks when travelling with children.",
    href: "/shore-excursions/private-volos-farm-cooking",
    icon: "family",
  },
];
