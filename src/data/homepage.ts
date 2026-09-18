import type { ExperienceCard, FAQ, VisitorType } from "./types";

export const homepageTagline = "Gateway to Meteora & Mount Pelion.";

export const homepageSubheading =
  "Volos offers three excellent cruise experiences: explore the walkable waterfront independently, discover Mount Pelion’s traditional villages, or — when schedule allows — journey inland to Meteora’s spectacular monasteries. Neither path is “correct” — only the one that matches your hours ashore.";

export const homepageDestinationLine =
  "Meteora · Mount Pelion · Pagasetic Gulf · Jason & the Argonauts · Tsipouro";

export const visitorTypes: VisitorType[] = [
  {
    id: "port-day",
    label: "I'm visiting Volos for the day on a cruise",
    shortLabel: "Port day",
    description:
      "Match your hours ashore to a city walk, Mount Pelion villages, or — carefully — Meteora when your call is long enough.",
    href: "/shore-excursions",
    cta: "Plan my port day",
  },
  {
    id: "first-time",
    label: "It's my first time in mainland Greece",
    shortLabel: "First visit",
    description:
      "Compare independent Volos, Mount Pelion and Editor’s Choice Meteora before you choose.",
    href: "/compare/first-time-volos-day",
    cta: "See first-time picks",
  },
  {
    id: "independent",
    label: "I prefer to explore independently",
    shortLabel: "Independent",
    description:
      "Volos is one of Greece’s easier mainland ports to enjoy on foot — waterfront, cafés and mythic atmosphere without a tour.",
    href: "/guides/explore-independently",
    cta: "Walk It Yourself",
  },
  {
    id: "planner",
    label: "I want help choosing my day",
    shortLabel: "Cruise planner",
    description:
      "Tell us your port times, interests, mobility and pace for a tailored mainland Greece plan from Volos.",
    href: "/cruise-planner",
    cta: "Use the planner",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "excursions",
    number: "01",
    title: "Shore excursions",
    description:
      "Carefully selected experiences across Meteora monasteries, Mount Pelion villages, farm cooking and private gulf days — designed around cruise timing.",
    href: "/shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "guides",
    number: "02",
    title: "Port & mainland guides",
    description:
      "Honest advice on walking from the cruise waterfront, Mount Pelion, tsipouro culture, Jason’s mythic landscape and when an organised tour genuinely helps.",
    href: "/guides",
    cta: "Read the guides",
  },
  {
    slug: "schedules",
    number: "03",
    title: "Cruise ship schedule",
    description:
      "Ship call data for Volos will appear here once confirmed schedules are available for publication.",
    href: "/ship-schedules",
    cta: "View schedules",
  },
];

export const spiritOfPlace = {
  title: "Mainland Greece revealed — gulf light, mountain villages, mythic stone.",
  body: [
    "Volos opens onto the Pagasetic Gulf — a relaxed mainland harbour where café tables face the water, Mount Pelion rises in green tiers behind the city, and the legend of Jason and the Argonauts still colours the promenade. This is not the white-village postcard of the Cyclades; it is authentic Thessaly and Pelion: tsipouro, stone mansions, mountain air and naturally beautiful coastal Greece.",
    "Beyond the waterfront, Volos is a true gateway — to traditional Pelion villages on a shorter scenic climb, and to Meteora’s rock-perched monasteries when a long, unhurried call allows. We write like a premium travel magazine for cruise passengers — fewer recommendations, clearer trade-offs, and always a plan that protects your return to the ship.",
  ],
};

export const honestAdvicePoints = [
  {
    title: "The city rewards a relaxed walk",
    body: "Volos is an easy city to explore independently — waterfront promenade, cafés, mythic atmosphere and excellent food make a genuinely enjoyable day without a tour.",
  },
  {
    title: "Mount Pelion is the shorter scenic choice",
    body: "If you want traditional villages, mountain vistas and mainland Greek culture without a marathon inland day, Pelion is usually the smarter organised option.",
  },
  {
    title: "Meteora is remarkable — and long",
    body: "If this is a first visit and your schedule allows, Meteora is extraordinary. It is also a long inland journey. Never risk missing the ship for monasteries that cannot guarantee your return.",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "Can I explore Volos without an excursion?",
      answer:
        "Yes. Volos is an easy city to explore independently and offers an enjoyable day of walking, cafés, waterfront views and local food. Many cruise passengers stroll from the terminal along the promenade and return with a sensible buffer. Organised excursions become especially useful when you want Mount Pelion villages or Meteora beyond comfortable walking distance.",
    },
    {
      question: "How far is the centre from the cruise port?",
      answer:
        "The waterfront and approaches to the walkable city are typically a realistic stroll from the cruise berth for most guests — often around 10–25 minutes depending on berth, pace and route. Exact timing varies; follow port signage and allow extra time if mobility is limited.",
    },
    {
      question: "Should I book a tour?",
      answer:
        "Book a tour when discovering Mount Pelion or Meteora is your priority — or when you want private farm cooking, wine tasting or structured village narrative. Skip a tour when you prefer flexible wandering, tsipouro tavernas and self-paced photography along the gulf.",
    },
    {
      question: "Can I visit Meteora on a cruise day from Volos?",
      answer:
        "Sometimes — when your usable hours ashore support a roughly nine-hour inland journey plus a proper return buffer. Meteora is remarkable, but it is a long day. If your call is shorter, Mount Pelion or an independent Volos walk are usually wiser.",
    },
    {
      question: "What is your Editor's Choice excursion?",
      answer:
        "Private Journey from Volos to Meteora Monasteries with Lunch — the strongest overall cruise experience when you want Greece’s most spectacular monasteries and your schedule allows the inland journey.",
    },
  ];
}

/** Primary decision grid — Experience Cards (not awards). */
export const featuredExperienceCards: ExperienceCard[] = [
  {
    slug: "editors-choice-meteora",
    type: "guided",
    title: "Meteora Monasteries",
    eyebrow: "Editor's Choice",
    description:
      "Private journey to Agios Stephanos and Varlam — our strongest organised day when schedule allows and the monasteries are the priority.",
    href: "/shore-excursions/private-meteora-monasteries",
    cta: "View Editor's Choice",
    imageKey: "meteora",
  },
  {
    slug: "mount-pelion",
    type: "nature",
    title: "Traditional Villages",
    eyebrow: "Mount Pelion",
    description:
      "Stone mansions, mountain air and gulf panoramas — mainland Greece’s most rewarding shorter scenic day from Volos.",
    href: "/guides/mount-pelion-guide",
    cta: "Explore Mount Pelion",
    imageKey: "pelion",
  },
  {
    slug: "explore-independently",
    type: "walk-it-yourself",
    title: "Historic Volos",
    eyebrow: "Walk It Yourself",
    description:
      "A free self-guided route from the cruise waterfront through promenade cafés, mythic landmarks and relaxed gulf atmosphere.",
    href: "/guides/explore-independently",
    cta: "Open the walking guide",
    imageKey: "walking",
    duration: "2.5–4 hours",
    distance: "Approximately 3–5 km",
    difficulty: "Easy to moderate",
    idealFor: "Independent cruise passengers",
  },
  {
    slug: "food-local-life",
    type: "food-wine",
    title: "Tsipouro & Greek Taverns",
    eyebrow: "Food & Local Life",
    description:
      "Volos’s famous tsipouro culture, meze tables and the everyday flavours of mainland Greece by the gulf.",
    href: "/guides/tsipouro-guide",
    cta: "Explore food & tsipouro",
    imageKey: "tsipouro",
  },
  {
    slug: "myth-history",
    type: "history",
    title: "Jason, the Argonauts & Ancient Iolcus",
    eyebrow: "Myth & History",
    description:
      "The mythic launching ground of the Argo — how Volos’s harbour still carries the story of Jason and ancient Thessaly.",
    href: "/guides/jason-argonauts-guide",
    cta: "Read the mythic guide",
    imageKey: "argonauts",
  },
];

export const experienceCards: ExperienceCard[] = [
  ...featuredExperienceCards,
  {
    slug: "history",
    type: "history",
    title: "History",
    description:
      "Ancient Iolcus echoes, museum treasures and the layered story of Thessaly’s gulf city.",
    href: "/guides/jason-argonauts-guide",
    cta: "Explore myth & history",
    imageKey: "historic",
  },
  {
    slug: "photography",
    type: "photography",
    title: "Photography",
    description:
      "Pagasetic Gulf light, Pelion balconies and monastery rock pillars when schedule allows.",
    href: "/guides/best-viewpoints",
    cta: "Find viewpoints",
    imageKey: "photography",
  },
  {
    slug: "families",
    type: "families",
    title: "Families",
    description:
      "Manageable farm cooking, shorter Pelion circuits and relaxed waterfront walks with children.",
    href: "/shore-excursions/private-volos-farm-cooking",
    cta: "Family-friendly days",
    imageKey: "family",
  },
  {
    slug: "private",
    type: "private",
    title: "Private Experiences",
    description:
      "Private Meteora, Pelion beach days, farm cooking and village circuits when your party wants tailored pacing.",
    href: "/shore-excursions/private-volos-pelion-villages",
    cta: "Browse private options",
    imageKey: "private",
  },
];

/** Homepage hero — destination copy (components stay generic). */
export const homepageHero = {
  eyebrow: "Volos Shore Excursions",
  headline: homepageTagline,
  subheading: homepageSubheading,
  destinationLine: homepageDestinationLine,
  primaryCta: { href: "/shore-excursions", label: "Explore Shore Excursions" },
  secondaryCta: { href: "/guides/explore-independently", label: "Walk It Yourself" },
} as const;

export interface ChooseYourDayCard {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  highlights: readonly string[];
  cta: string;
  href: string;
  imageKey: string;
  wide?: boolean;
}

export const chooseYourDay = {
  eyebrow: "Choose Your Day",
  title: "How would you like to experience Volos?",
  subtitle:
    "Three excellent cruise experiences — explore the city independently, discover Mount Pelion’s traditional villages, or take our Editor’s Choice adventure to Meteora.",
  cards: [
    {
      slug: "explore-volos",
      emoji: "🚶",
      title: "Explore Volos",
      tagline:
        "Walk the waterfront, cafés and mythic promenade at your own pace — often the finest relaxed day ashore from this port.",
      highlights: [
        "Walkable waterfront from many berths",
        "Pagasetic Gulf promenade and café culture",
        "Jason & the Argonauts atmosphere",
        "Tsipouro tavernas when you want a local pause",
        "Honest return-to-ship buffers",
      ],
      cta: "Open Walk It Yourself",
      href: "/guides/explore-independently",
      imageKey: "walking",
      wide: true,
    },
    {
      slug: "discover-mount-pelion",
      emoji: "🗺️",
      title: "Discover Mount Pelion",
      tagline:
        "Leave the gulf for traditional stone villages, panoramic views and mainland Greek culture on a shorter scenic climb.",
      highlights: [
        "Pinakates, Vizitsa, Milies and Makrinitsa",
        "Wine tasting and village lanes",
        "Best when scenic culture is the priority",
        "Cruise-aware timing and meeting points",
        "Clear trade-off versus a full Meteora day",
      ],
      cta: "Browse Pelion excursions",
      href: "/shore-excursions",
      imageKey: "pelion",
      wide: true,
    },
    {
      slug: "visit-meteora",
      emoji: "⭐",
      title: "Visit Meteora",
      tagline:
        "Private Journey to Meteora Monasteries — our strongest overall cruise experience from Volos when schedule allows.",
      highlights: [
        "Agios Stephanos and Varlam Monasteries",
        "Thessaly plains and Kalambaka lunch",
        "Greece’s most spectacular monastery landscape",
        "Designed around cruise timing",
        "Never required if the city walk or Pelion is enough",
      ],
      cta: "View Editor's Choice",
      href: "/shore-excursions/private-meteora-monasteries",
      imageKey: "meteora",
      wide: false,
    },
  ] as const satisfies readonly ChooseYourDayCard[],
};

export const honestAdviceContent = {
  eyebrow: "Honest advice",
  title: "Do You Need a Shore Excursion in Volos?",
  subtitle:
    "Volos offers three excellent cruise experiences. If this is a first visit and your schedule allows, Meteora is remarkable — but it is a long inland journey. If you want a shorter scenic day, Mount Pelion delivers villages, views and traditional culture. If you want a relaxed day, Volos’s walkable waterfront has excellent food and cafés. Choose what genuinely suits your interests. We never push excursions unnecessarily.",
  independent: {
    title: "You can explore Volos independently — and many passengers should",
    body: "Volos is an easy city to explore independently and offers an enjoyable day of walking, cafés, local food and gulf views:",
    items: [
      "Pagasetic Gulf waterfront promenade",
      "Café culture and relaxed harbour light",
      "Jason & the Argonauts mythic landmarks",
      "Tsipouro tavernas and meze before returning",
    ],
    note: "Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.",
  },
  organised: {
    title: "When a guided day is the better choice",
    body: "If your priority is discovering mainland Greece beyond the waterfront, organised excursions provide access that independent wandering cannot match in a single port call:",
    items: [
      {
        label: "Meteora Monasteries",
        detail:
          "Greece’s most spectacular monasteries — our Editor’s Choice when schedule allows a long inland day",
      },
      {
        label: "Mount Pelion villages",
        detail:
          "Traditional stone villages, panoramic views and shorter scenic culture from Volos",
      },
      {
        label: "Wine tasting & Portaria",
        detail:
          "Pelion panoramas with a local tasting — compact and cruise-friendly",
      },
      {
        label: "Farm cooking",
        detail:
          "Hands-on Greek lunch near the gulf when food and private pacing matter most",
      },
    ],
  },
  links: [
    { href: "/compare/tour-or-independent", label: "Tour or independent?" },
    { href: "/guides/explore-independently", label: "Walk It Yourself" },
    { href: "/guides/mount-pelion-guide", label: "Mount Pelion Guide" },
  ],
} as const;

export const featuredSectionCopy = {
  eyebrow: "When you're ready",
  title: "Featured shore excursions",
  subtitle:
    "Curated Volos experiences planned around your cruise day. Live booking opens once EUR selling prices and fulfilment routes are verified.",
} as const;
