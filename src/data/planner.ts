import { SIGNATURE_EXPERIENCE_PATH, signatureRivieraExperience } from "./signature-experience";

export interface PlannerInput {
  arrivalTime?: string;
  departureTime?: string;
  adults: number;
  children: number;
  interests: string[];
  mobility: "full" | "some" | "limited";
  budget: "budget" | "mid" | "premium";
  travelStyle: "diy" | "guided";
}

export interface PlannerLink {
  label: string;
  href: string;
  why: string;
}

export interface PlannerResult {
  headline: string;
  summary: string;
  excursions: PlannerLink[];
  transfers: PlannerLink[];
  stay: PlannerLink[];
  logistics: PlannerLink[];
  dayPlan: { time: string; text: string }[];
}

export const PLANNER_VISITOR_TYPES = [
  {
    id: "independent",
    label: "Independent Volos explorer",
    description: "A low-risk city day using walking, waterfront cafés and your own return buffer.",
  },
  {
    id: "meteora",
    label: "First-time Meteora visitor",
    description: "A private long day for passengers with enough port time for the monasteries.",
  },
  {
    id: "pelion",
    label: "Mount Pelion traveller",
    description: "Stone villages, mountain vistas and traditional mainland Greece closer to the ship.",
  },
  {
    id: "food",
    label: "Food & tsipouro traveller",
    description: "Farm cooking, meze culture and Volos’s drinking-and-dining character near the gulf.",
  },
] as const;

export const INTEREST_OPTIONS = [
  { id: "meteora", label: "Meteora monasteries" },
  { id: "pelion", label: "Mount Pelion villages" },
  { id: "city-walk", label: "Volos city walk" },
  { id: "food", label: "Food & tsipouro" },
  { id: "myth", label: "Myth & history" },
  { id: "photography", label: "Photography & scenery" },
  { id: "family", label: "Family-friendly" },
  { id: "independent", label: "Independent travel" },
];

type PlanKey = "independent" | "meteora" | "pelion" | "food";

export const VOLOS_DAY_PLANS: Record<
  PlanKey,
  { headline: string; summary: string; minimumHours: number; links: PlannerLink[]; dayPlan: PlannerResult["dayPlan"] }
> = {
  independent: {
    headline: "Independent Volos waterfront & centre",
    summary:
      "The most flexible choice: walk from the passenger area along the Pagasetic Gulf promenade to the Argonauts monument, cafés and a relaxed city pace.",
    minimumHours: 4,
    links: [
      {
        label: "Walking from Volos Port",
        href: "/guides/walking-from-port",
        why: "Walking route, timing and return-to-ship advice.",
      },
      {
        label: "Walk It Yourself",
        href: "/guides/explore-independently",
        why: "Full DIY waterfront-to-centre plan without an organised tour.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Walk from the cruise port along the waterfront to the Argonauts monument and promenade cafés." },
      { time: "Late morning", text: "Explore the centre, optional museum or viewpoint pause." },
      { time: "Afternoon", text: "Tsipouro meze or coffee — then return with a buffer." },
    ],
  },
  meteora: {
    headline: "Meteora monasteries introduction",
    summary:
      "A private journey to Agios Stephanos and Varlam with Thessaly plains context and cruise-aware return — our favourite first-time regional format when hours allow.",
    minimumHours: 8,
    links: [
      {
        label: "Private Journey to Meteora Monasteries",
        href: "/shore-excursions/private-meteora-monasteries",
        why: "Editor’s Choice introduction for cruise visitors who want mainland Greece beyond the gulf.",
      },
      {
        label: "Meteora or stay in Volos?",
        href: "/compare/meteora-or-volos-city",
        why: "Honest trade-offs before committing to road time.",
      },
    ],
    dayPlan: [
      { time: "Meet", text: "Join your private guide or driver near the passenger area." },
      { time: "Guided day", text: "Thessaly transfer, monastery visits and Kalambaka lunch window." },
      { time: "Return", text: "Drive back to Volos with a planned all-aboard buffer." },
    ],
  },
  pelion: {
    headline: "Mount Pelion villages",
    summary:
      "Traditional stone villages, mountain air and Aegean-facing views — closer to the ship than Meteora, with honest half-day pacing.",
    minimumHours: 5,
    links: [
      {
        label: "Historical Pelion Villages",
        href: "/shore-excursions/historical-pelion-villages",
        why: "Pinakates, Vizitsa and Milies — the clearest small-group Pelion introduction.",
      },
      {
        label: "Panoramic Pelion Wine Tasting",
        href: "/shore-excursions/panoramic-pelion-wine-tasting",
        why: "Portaria, Makrinitsa and a tasting stop with gulf panoramas.",
      },
      {
        label: "Meteora or Mount Pelion?",
        href: "/compare/meteora-or-pelion",
        why: "Compare mountain villages against a long monastery day.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Climb into Pelion for stone-village stops and viewpoints." },
      { time: "Midday", text: "Village wandering, optional tasting or taverna pause." },
      { time: "Afternoon", text: "Return to Volos with a comfortable ship buffer." },
    ],
  },
  food: {
    headline: "Food, farm & tsipouro culture",
    summary:
      "Hands-on cooking, shared Greek lunch or independent meze culture — the everyday Volos visitors remember longest.",
    minimumHours: 4,
    links: [
      {
        label: "Private Volos Farm Cooking",
        href: "/shore-excursions/private-volos-farm-cooking",
        why: "Farm introduction, cooking experience and shared lunch near Volos.",
      },
      {
        label: "Tsipouro Guide",
        href: "/guides/tsipouro-guide",
        why: "Independent meze and drinking-culture tips beside the gulf.",
      },
      {
        label: "Food Guide",
        href: "/guides/food-guide",
        why: "Local tasting ideas without a long road day.",
      },
    ],
    dayPlan: [
      { time: "Morning", text: "Waterfront orientation or meet for the farm experience." },
      { time: "Midday", text: "Cooking, shared lunch or independent tsipouro meze." },
      { time: "Afternoon", text: "Café pause, then return with a buffer." },
    ],
  },
};

function parseHour(value?: string): number | null {
  if (!value) return null;
  const m = value.match(/^(\d{1,2}):(\d{2})$/);
  if (!m) return null;
  return Number(m[1]) + Number(m[2]) / 60;
}

function usableHours(input: PlannerInput): number {
  const arrival = parseHour(input.arrivalTime);
  const departure = parseHour(input.departureTime);
  if (arrival == null || departure == null) return 8;
  let hours = departure - arrival;
  if (hours <= 0) hours += 24;
  return Math.max(1, hours - 1.5);
}

function selectPlan(input: PlannerInput, hours: number): PlanKey {
  const interests = input.interests;
  if (interests.includes("food") && !interests.includes("meteora") && !interests.includes("pelion")) {
    return "food";
  }
  if (interests.includes("meteora")) {
    return hours >= 8 ? "meteora" : hours >= 5 ? "pelion" : "independent";
  }
  if (interests.includes("pelion") || interests.includes("photography")) {
    return hours >= 5 ? "pelion" : "independent";
  }
  if (
    input.travelStyle === "diy" ||
    input.mobility === "limited" ||
    interests.includes("independent") ||
    interests.includes("city-walk") ||
    interests.includes("myth") ||
    hours < 5
  ) {
    if (input.travelStyle === "guided" && hours >= 5 && !interests.includes("independent")) {
      if (interests.includes("food")) return "food";
      return "pelion";
    }
    return "independent";
  }
  if (interests.includes("family") && hours < 8) return "pelion";
  return hours >= 8 && input.travelStyle === "guided" ? "meteora" : "pelion";
}

export function generateVolosPlan(input: PlannerInput): PlannerResult {
  const hours = usableHours(input);
  const key = selectPlan(input, hours);
  const plan = VOLOS_DAY_PLANS[key];
  const partySize = input.adults + input.children;
  const excursions = [...plan.links];

  if (input.budget === "premium") {
    excursions.push({
      label: signatureRivieraExperience.title,
      href: SIGNATURE_EXPERIENCE_PATH,
      why: "Future maximum-eight-guest Thessaly & Pelion concept — in preparation and not bookable.",
    });
  }

  if (input.interests.includes("myth") && key === "independent") {
    excursions.push({
      label: "Jason & the Argonauts Guide",
      href: "/guides/jason-argonauts-guide",
      why: "Myth and harbour context without a road day.",
    });
  }

  if (input.interests.includes("family") && key === "pelion") {
    excursions.push({
      label: "Private Mylopotamos & Tsagkarada",
      href: "/shore-excursions/private-mylopotamos-tsagkarada",
      why: "Beach and village pacing that often suits families on a solid call.",
    });
  }

  return {
    headline: plan.headline,
    summary: `${plan.summary} Your call provides about ${hours.toFixed(1)} usable hours for ${partySize} guest${partySize === 1 ? "" : "s"}. ${hours < plan.minimumHours ? `This is shorter than the ${plan.minimumHours}-hour minimum we recommend for this style, so prefer Volos on foot or a nearer Pelion option.` : ""}`.trim(),
    excursions,
    transfers: [
      {
        label: "Volos Cruise Port Guide",
        href: "/cruise-port-guide",
        why: "Terminal walking times, taxis and city access.",
      },
    ],
    stay: [],
    logistics: [
      {
        label: "Volos Ship Schedule",
        href: "/ship-schedules/volos",
        why: "Recheck the published arrival and departure for your call.",
      },
      {
        label: "Compare Volos options",
        href: "/compare",
        why: "Review honest trade-offs before booking a long Meteora or Pelion day.",
      },
    ],
    dayPlan: [
      ...plan.dayPlan,
      {
        time: "Return buffer",
        text: "Reach the Volos terminal 60–90 minutes before all-aboard; Meteora days require additional Thessaly traffic contingency. Never risk missing the ship for an inland itinerary that cannot guarantee return.",
      },
    ],
  };
}

export function generateSplitPlan(input: PlannerInput): PlannerResult {
  return generateVolosPlan(input);
}
