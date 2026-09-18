import type { Comparison } from "./types";

export const comparisons: Comparison[] = [
  {
    slug: "tour-or-independent",
    title: "Tour or Independent?",
    seoTitle: "Volos Tour or Independent? Honest Cruise Advice",
    metaDescription:
      "Should you book a Volos shore excursion or explore the waterfront independently? Honest comparison for cruise passengers — city, Pelion and Meteora.",
    kind: "versus",
    optionA: "Independent",
    optionB: "Guided tour",
    summary:
      "Volos is one of mainland Greece’s easier cruise ports to enjoy on foot. Independence wins for flexible waterfront, Argonauts and tsipouro days; a guided tour wins for Mount Pelion villages, farm cooking and especially Meteora within limited hours.",
    verdict:
      "Choose independence when Volos itself is your priority and you enjoy self-paced walking. Choose a tour when you want Pelion stone villages, private pacing or Meteora’s monasteries with cruise-aware return.",
    overview: [
      "Many guests walk from the passenger area into the Pagasetic Gulf promenade and centre without an organised excursion.",
      "Guided Pelion days add mountain-village context while still protecting ship timing.",
      "Meteora almost always needs organised private transport and a long, unhurried call.",
    ],
    comparisonTable: [
      { category: "Best for", optionA: "Flexible waterfront & tsipouro", optionB: "Pelion villages or Meteora reach" },
      { category: "Cost", optionA: "Lower", optionB: "Higher" },
      { category: "Walking", optionA: "Self-paced promenade & centre", optionB: "Guided pace on village or monastery paths" },
      { category: "Return timing", optionA: "Your responsibility", optionB: "Cruise-aware operator planning" },
      { category: "Beyond the city", optionA: "Harder without transport", optionB: "Practical with organised routing" },
    ],
    faqs: [
      {
        question: "Can I explore Volos without an excursion?",
        answer:
          "Yes. Independent city days along the waterfront are common and often excellent — Argonauts monument, cafés and a relaxed gulf atmosphere.",
      },
      {
        question: "When is a tour clearly better?",
        answer:
          "When you want Mount Pelion villages, farm cooking, private pacing or Meteora within a single cruise call. DIY Meteora is rarely realistic against all-aboard.",
      },
    ],
    relatedSlugs: ["first-time-volos-day", "best-shore-excursions", "meteora-or-volos-city"],
    imageKey: "compare",
  },
  {
    slug: "best-shore-excursions",
    title: "Best Shore Excursions",
    seoTitle: "Best Volos Shore Excursions for Cruise Passengers",
    metaDescription:
      "Best Volos shore excursions compared: Meteora monasteries, Mount Pelion villages, wine tasting, farm cooking and private days.",
    kind: "guide",
    summary:
      "Start with Private Journey to Meteora for first-timers who want mainland Greece’s most spectacular monasteries when hours allow. Choose Historical Pelion or wine tasting for mountain character closer to the ship, and keep independence as a genuine alternative.",
    verdict:
      "Editor’s Choice remains the clearest regional first-time pick when your call supports a long inland day. Match everything else to hours ashore and appetite for road time versus waterfront flexibility.",
    overview: [
      "City and Pelion experiences stay closer to the ship and protect timing.",
      "Meteora needs honest clock management and a fuller call across Thessaly.",
    ],
    guideItems: [
      {
        name: "Private Journey from Volos to Meteora Monasteries",
        slug: "private-meteora-monasteries",
        href: "/shore-excursions/private-meteora-monasteries",
        reason: "Best introduction to Greece’s rock-perched monasteries — context plus cruise-aware return.",
        topExcursion: "Private Journey from Volos to Meteora Monasteries with Lunch",
        returnConfidence: "High with full-day window",
        walkingDifficulty: "Moderate",
      },
      {
        name: "Historical Pelion Villages",
        slug: "historical-pelion-villages",
        href: "/shore-excursions/historical-pelion-villages",
        reason: "Pinakates, Vizitsa and Milies without a nine-hour Meteora commitment.",
        topExcursion: "Historical Pelion and the Charming Villages of Pinakates, Vizitsa, and Milies",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate village walking",
      },
      {
        name: "Panoramic Pelion Wine Tasting",
        slug: "panoramic-pelion-wine-tasting",
        href: "/shore-excursions/panoramic-pelion-wine-tasting",
        reason: "Portaria, Makrinitsa and a tasting stop with gulf views.",
        topExcursion: "Panoramic Pelion Villages and Wine Tasting",
        returnConfidence: "High",
        walkingDifficulty: "Relaxed–moderate",
      },
      {
        name: "Private Volos Farm Cooking",
        slug: "private-volos-farm-cooking",
        href: "/shore-excursions/private-volos-farm-cooking",
        reason: "Hands-on Greek cooking and shared lunch near Volos.",
        topExcursion: "Private Volos Farm and Authentic Greek Lunch Cooking Experience",
        returnConfidence: "Very high",
        walkingDifficulty: "Relaxed",
      },
      {
        name: "Private Mylopotamos & Tsagkarada",
        slug: "private-mylopotamos-tsagkarada",
        href: "/shore-excursions/private-mylopotamos-tsagkarada",
        reason: "Aegean beach character plus a classic Pelion village — private pacing.",
        topExcursion: "Private Mylopotamos Beach and Tsagkarada Village Experience",
        returnConfidence: "High on a solid call",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "What is Editor's Choice?",
        answer:
          "Private Journey from Volos to Meteora Monasteries with Lunch — selected for cruise visitors who want mainland Greece’s most iconic monastery landscape with ship-aware timing.",
      },
      {
        question: "What if I do not want a long road day?",
        answer:
          "Choose Historical Pelion, wine tasting, farm cooking or Walk It Yourself on the Volos waterfront. Those are excellent days, not consolation prizes.",
      },
    ],
    relatedSlugs: ["first-time-volos-day", "tour-or-independent", "meteora-or-pelion"],
    imageKey: "historic",
  },
  {
    slug: "first-time-volos-day",
    title: "First-Time Volos Day",
    seoTitle: "First Time in Volos on a Cruise — How to Spend the Day",
    metaDescription:
      "First-time Volos cruise day plan: waterfront priorities, tsipouro, independent vs tour, Meteora, Mount Pelion and what to skip.",
    kind: "guide",
    summary:
      "First-timers should anchor the day in the Pagasetic Gulf waterfront — or deliberately choose Meteora or Mount Pelion if regional Greece is the priority. Do not attempt Meteora and a deep Pelion circuit on the same call.",
    verdict:
      "Do not try to see all of Thessaly. See Volos well — or Meteora well — or Pelion well — then decide if a future call deserves another story.",
    overview: [
      "Walk or take a short taxi from the passenger area toward the promenade and Argonauts monument.",
      "Use the waterfront for orientation, then cafés, museums or a tsipouro meze stop.",
      "Consider Editor’s Choice if you want Meteora rather than a city or Pelion walking day.",
    ],
    guideItems: [
      {
        name: "Walk It Yourself",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "The essential first Volos experience on foot along the gulf.",
        topExcursion: "Independent waterfront day",
        returnConfidence: "Very high on foot with buffer",
        walkingDifficulty: "Self-paced",
      },
      {
        name: "Meteora Monasteries",
        slug: "private-meteora-monasteries",
        href: "/shore-excursions/private-meteora-monasteries",
        reason: "Mainland Greece’s most spectacular monasteries when the region is the goal.",
        topExcursion: "Private Journey from Volos to Meteora Monasteries with Lunch",
        returnConfidence: "High on a full call",
        walkingDifficulty: "Moderate monastery approaches",
      },
      {
        name: "Mount Pelion villages",
        slug: "historical-pelion-villages",
        href: "/shore-excursions/historical-pelion-villages",
        reason: "Traditional stone villages closer to the ship than Meteora.",
        topExcursion: "Historical Pelion Villages",
        returnConfidence: "Very high",
        walkingDifficulty: "Moderate",
      },
      {
        name: "One Day in Volos",
        slug: "one-day-in-volos",
        href: "/compare/one-day-in-volos",
        reason: "A realistic city-day sequence without overpacking.",
        topExcursion: "Walk It Yourself",
        returnConfidence: "Your discipline",
        walkingDifficulty: "Self-paced",
      },
    ],
    faqs: [
      {
        question: "Should first-timers book a tour?",
        answer:
          "Optional for the city. Book for Meteora, Pelion villages or narrative; explore independently if you prefer waterfront light, cafés and flexible photography time.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "meteora-or-volos-city", "one-day-in-volos"],
    imageKey: "historic",
  },
  {
    slug: "meteora-or-pelion",
    title: "Meteora or Mount Pelion?",
    seoTitle: "Meteora or Mount Pelion from Volos? Cruise Day Comparison",
    metaDescription:
      "Compare Meteora monasteries and Mount Pelion villages for Volos cruise passengers — road time, atmosphere, walking and which to prioritise.",
    kind: "versus",
    optionA: "Mount Pelion",
    optionB: "Meteora",
    summary:
      "Mount Pelion delivers traditional stone villages, mountain air and shorter transfers from Volos. Meteora delivers Greece’s rock-perched monasteries and Thessaly plains drama — at the cost of a long inland day.",
    verdict:
      "Choose Pelion unless you deliberately want Meteora and have a long, unhurried port call. Do not attempt both deeply on one ordinary cruise day.",
    overview: [
      "Pelion climbs behind Volos — typically a half-day to three-village format.",
      "Meteora requires a substantial Thessaly transfer and a generous return buffer.",
      "Both are authentic mainland Greece; they tell different stories.",
    ],
    comparisonTable: [
      { category: "Travel time", optionA: "Shorter scenic climb", optionB: "Significant plains crossing" },
      { category: "Experience", optionA: "Stone villages & mountain vistas", optionB: "Rock monasteries & Kalambaka views" },
      { category: "Risk to buffer", optionA: "Lower", optionB: "Higher" },
      { category: "Best call length", optionA: "Half to full day", optionB: "Long full day" },
      { category: "Best for", optionA: "Village culture closer to ship", optionB: "Iconic monastery landscape" },
    ],
    faqs: [
      {
        question: "Is Meteora worth missing Pelion time?",
        answer:
          "Only if the monasteries are your priority. Pelion itself is excellent — skipping it entirely is a deliberate choice, not a default.",
      },
      {
        question: "Can I visit both on one port day?",
        answer:
          "Not properly. Combined days feel rushed and threaten your return buffer. Pick one story and do it well.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "meteora-or-volos-city", "first-time-volos-day"],
    imageKey: "meteora",
  },
  {
    slug: "meteora-or-volos-city",
    title: "Meteora or Stay in Volos?",
    seoTitle: "Meteora or Stay in Volos? Cruise Day Comparison",
    metaDescription:
      "Compare a Meteora monastery day and a Volos city day for cruise passengers — walking, atmosphere, timing and which to prioritise.",
    kind: "versus",
    optionA: "Volos city",
    optionB: "Meteora",
    summary:
      "Volos delivers waterfront walks, Argonauts mythology, cafés and tsipouro beside the ship. Meteora delivers mainland Greece’s most theatrical monasteries — at the cost of long road time across Thessaly.",
    verdict:
      "Choose Volos unless you deliberately want Meteora and have a long, unhurried port call. Do not treat the city as a consolation prize; it is a genuine mainland harbour day.",
    overview: [
      "The promenade and centre need no long transfer.",
      "Meteora requires organised private transport and a generous return buffer.",
      "Shorter calls almost always favour Volos on foot or a nearer Pelion option.",
    ],
    comparisonTable: [
      { category: "Travel time", optionA: "Minimal", optionB: "Significant" },
      { category: "Experience", optionA: "Gulf promenade, myth & food", optionB: "Rock monasteries & Thessaly plains" },
      { category: "Risk to buffer", optionA: "Lower", optionB: "Higher" },
      { category: "Best call length", optionA: "Short to full day", optionB: "Long full day" },
    ],
    faqs: [
      {
        question: "Is Meteora worth missing Volos time?",
        answer:
          "Only if the monasteries are your priority. Volos itself rewards a waterfront day — skipping it entirely is deliberate, not automatic.",
      },
      {
        question: "What if my call is shortened?",
        answer:
          "Stay in Volos. Keep Meteora for a confirmed long window only — never gamble all-aboard on Thessaly traffic.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "first-time-volos-day", "meteora-or-pelion"],
    imageKey: "compare",
  },
  {
    slug: "private-tour-vs-small-group",
    title: "Private vs Small Group",
    seoTitle: "Private vs Small-Group Shore Tours from Volos",
    metaDescription:
      "Compare private and small-group Volos shore excursions for pace, cost, Meteora, Pelion villages, mobility and return-to-ship timing.",
    kind: "versus",
    optionA: "Private tour",
    optionB: "Small group",
    summary:
      "Private tours buy control: your party’s pacing, flexible stops and easier mobility adaptation. Small-group formats keep Pelion village days more accessible per person while still avoiding mega-coach crowds.",
    verdict:
      "Choose private for Meteora, families, couples who want silence between stops, or any day shaped around one party. Choose small group when price matters and a published Pelion itinerary fits. Private does not invent hours you do not have.",
    overview: [
      "Editor’s Choice Meteora is offered as a private journey for timing and monastery access.",
      "Historical Pelion and wine tasting work well as small-group formats closer to the ship.",
      "Farm cooking and Mylopotamos days are typically private for kitchen and beach pacing.",
    ],
    comparisonTable: [
      { category: "Group size", optionA: "Your party only", optionB: "Shared with other cruise guests" },
      { category: "Pace", optionA: "Adjustable within port constraints", optionB: "Fixed to the published route" },
      { category: "Cost", optionA: "Higher overall; strong for families", optionB: "Lower per person" },
      { category: "Mobility", optionA: "Stops and walking often adaptable", optionB: "Group route less flexible" },
      { category: "Meteora fit", optionA: "Strong — private timing preferred", optionB: "Less common for this port day" },
    ],
    faqs: [
      {
        question: "Is private always better for Meteora?",
        answer:
          "For Volos cruise calls, private pacing is the practical format we feature — monastery access and Thessaly traffic reward control over the clock.",
      },
      {
        question: "Are small-group Pelion days rushed?",
        answer:
          "Good operators design village stops around regrouping time. Read duration and walking notes; three villages still need a solid half day.",
      },
    ],
    relatedSlugs: ["best-shore-excursions", "tour-or-independent", "meteora-or-pelion"],
    imageKey: "private",
  },
  {
    slug: "one-day-in-volos",
    title: "One Day in Volos",
    seoTitle: "One Day in Volos from the Cruise Port",
    metaDescription:
      "Plan one realistic day in Volos: waterfront, Argonauts, cafés, tsipouro, optional museum time and a safe return to your ship.",
    kind: "guide",
    summary:
      "Volos rewards a city day. Its Pagasetic Gulf promenade, Argonauts story, cafés and tsipouro culture sit close enough to combine without turning the call into a transport exercise.",
    verdict:
      "Start on the waterfront and Argonauts monument, walk the centre at your own pace, take a proper meze or tsipouro pause, then return along the gulf with time in hand. Leave Meteora and deep Pelion for another story — or a different booking.",
    overview: [
      "Morning: promenade orientation, Argonauts monument and harbour light.",
      "Midday: centre streets, optional museum or viewpoint pause.",
      "Lunch: local meze, seafood or a classic tsipouro stop.",
      "Afternoon: café time and a disciplined walk or taxi back to the berth.",
    ],
    guideItems: [
      {
        name: "Walk It Yourself",
        slug: "explore-independently",
        href: "/guides/explore-independently",
        reason: "The essential DIY waterfront and centre route.",
        topExcursion: "Independent Volos day",
        returnConfidence: "Very high with a 60–90 minute buffer",
        walkingDifficulty: "Easy to moderate",
      },
      {
        name: "One Day guide",
        slug: "one-day-in-volos",
        href: "/guides/one-day-in-volos",
        reason: "Editorial sequence for a single cruise call without overpacking.",
        topExcursion: "Walk It Yourself",
        returnConfidence: "Very high",
        walkingDifficulty: "Self-paced",
      },
      {
        name: "Tsipouro & food",
        slug: "tsipouro-guide",
        href: "/guides/tsipouro-guide",
        reason: "Build lunch around local drinking-and-meze culture.",
        topExcursion: "Private Volos Farm Cooking",
        returnConfidence: "Very high in the centre",
        walkingDifficulty: "Easy",
      },
      {
        name: "Private Volos & Pelion",
        slug: "private-volos-pelion-villages",
        href: "/shore-excursions/private-volos-pelion-villages",
        reason: "When you want city context plus mountain villages in one private day.",
        topExcursion: "Private Volos, Historic Mt Pelion, and Greek Villages",
        returnConfidence: "High on a solid call",
        walkingDifficulty: "Moderate",
      },
    ],
    faqs: [
      {
        question: "Can I add Mount Pelion to a city day?",
        answer:
          "Lightly on a long call — one village or a short scenic climb — but do not stack a full three-village circuit after a deep city morning. Prefer a dedicated Pelion excursion.",
      },
      {
        question: "Is tsipouro essential?",
        answer:
          "It is part of Volos’s character, not compulsory. Choose it if you enjoy meze culture; otherwise let the waterfront and coffee lead the day.",
      },
    ],
    relatedSlugs: ["first-time-volos-day", "tour-or-independent", "best-shore-excursions"],
    imageKey: "historic",
  },
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export function getComparisonDisplayTitle(c: Comparison): string {
  if (c.kind === "versus" && c.optionA && c.optionB) {
    return `${c.optionA} or ${c.optionB}?`;
  }
  return c.title;
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map((c) => c.slug);
}
