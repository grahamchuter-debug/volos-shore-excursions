import type { AttractionPage } from "./types";

export const highlights: AttractionPage[] = [
  {
    slug: "volos-waterfront",
    title: "Volos Waterfront",
    seoTitle: "Volos Waterfront Promenade — Cruise Visitor Highlight",
    metaDescription:
      "Volos waterfront promenade cruise guide — Akti Argonafton, Pagasetic Gulf light and how the harbour anchors an independent walking day.",
    attractionName: "Volos waterfront promenade",
    tagline: "The city’s open living room on the Pagasetic Gulf.",
    overview:
      "The Volos waterfront is where the city breathes — cafés, strollers and gulf light with Mount Pelion rising inland as the defining backdrop.",
    body: [
      "Akti Argonafton is the natural arrival corridor from most cruise berths.",
      "Walk it slowly; this is character, not merely transit between ship and shopping street.",
      "Use it as your orientation spine on Walk It Yourself and as your return path to the terminal.",
    ],
    distanceFromPort: "Often begins near cruise passenger access — typically about 5–15 minutes depending on berth",
    travelTime: "Walking from many berths",
    timeNeeded: "20–40 minutes as a corridor or linger",
    gettingThere: [
      {
        method: "Walk from terminal",
        detail: "Follow terminal signage toward the city waterfront and Akti Argonafton.",
        time: "5–15 min",
        cost: "Free",
      },
      {
        method: "Taxi",
        detail: "Short hop if mobility or heat is a factor.",
        time: "5–10 min",
        cost: "Metered fare",
      },
    ],
    highlights: [
      "Pagasetic Gulf views",
      "Mount Pelion backdrop",
      "Café culture and everyday local life",
    ],
    tips: [
      "Sun protection at midday",
      "Soft morning and late light are kinder for photographs",
    ],
    faqs: [
      {
        question: "Is the waterfront enough for a short call?",
        answer:
          "Yes — promenade, Argonauts monument and a café or tsipouro stop can fill a short, satisfying day without leaving the harbour edge.",
      },
    ],
    relatedAttractionSlugs: ["argonauts-monument", "pagasetic-gulf", "mount-pelion"],
  },
  {
    slug: "argonauts-monument",
    title: "Argonauts Monument",
    seoTitle: "Argonauts Monument Volos — Cruise Highlight",
    metaDescription:
      "Argonauts monument Volos cruise guide — Jason and the Argo landmark on the waterfront for day visitors walking from the cruise port.",
    attractionName: "Argonauts monument",
    tagline: "Jason’s departure made visible — Volos’s mythological signature.",
    overview:
      "The Argonauts monument is Volos’s most recognisable landmark for cruise visitors — a sculptural reminder that ancient Iolcus and the Argo story sit beneath the modern harbour city.",
    body: [
      "Exterior photographs from the promenade are enough for most guests; there is no ticketed interior to manage.",
      "Pair it with a waterfront stroll and café pause rather than treating it as a single isolated stop.",
      "It is also a practical meeting point if your party splits and reunites.",
    ],
    distanceFromPort: "Short walk along the waterfront from most cruise passenger access points",
    travelTime: "Often 10–20 minutes on foot depending on berth",
    timeNeeded: "15–30 minutes including photographs",
    gettingThere: [
      {
        method: "Walk",
        detail: "Follow the waterfront promenade toward the Argonauts monument.",
        time: "10–20 min",
        cost: "Free",
      },
    ],
    highlights: [
      "Iconic mythological landmark",
      "Strong harbour photography",
      "Navigation anchor for independent walks",
    ],
    tips: [
      "Step back for the wider harbour and mountain frame",
      "Morning light is usually kinder than harsh midday",
    ],
    faqs: [
      {
        question: "Is there an entrance fee?",
        answer: "No — the monument is part of the public waterfront.",
      },
    ],
    relatedAttractionSlugs: ["volos-waterfront", "ancient-iolcus", "pagasetic-gulf"],
  },
  {
    slug: "mount-pelion",
    title: "Mount Pelion",
    seoTitle: "Mount Pelion from Volos — Cruise Day Highlight",
    metaDescription:
      "Mount Pelion from Volos cruise port — traditional villages, gulf viewpoints and when a guided village day makes honest sense for your call.",
    attractionName: "Mount Pelion",
    tagline: "The mountain of the Centaurs — stone villages above the gulf.",
    overview:
      "Mount Pelion rises behind Volos as myth, mountain forest and living village landscape — often the most rewarding regional day that still fits more cruise calls than Meteora.",
    body: [
      "Villages such as Makrinitsa offer stone architecture, shaded squares and balcony views over Volos and the Pagasetic Gulf.",
      "Expect cobbles, slopes and cooler mountain air. Organised excursions manage roads and return timing; taxis can work for confident independent travellers.",
      "Do not combine a full Pelion circuit with Meteora on the same cruise clock.",
    ],
    distanceFromPort: "Village approaches typically within about 30–60 minutes by road depending on destination and traffic",
    travelTime: "About 30–60 minutes each way for popular villages",
    timeNeeded: "Half day or more including transfers and village walking",
    gettingThere: [
      {
        method: "Organised excursion",
        detail: "Recommended for cruise timing — see Historical Pelion Villages.",
        time: "Half to full day",
        cost: "Excursion fare",
      },
      {
        method: "Taxi",
        detail: "Possible for experienced travellers who protect a conservative return buffer.",
        time: "Custom",
        cost: "Agree fare or use meter; confirm return timing",
      },
    ],
    highlights: [
      "Traditional Pelion villages",
      "Panoramic gulf viewpoints",
      "More cruise-realistic than Meteora for many calls",
    ],
    tips: [
      "Wear shoes for cobbles and slopes",
      "Carry a light layer for mountain air",
    ],
    faqs: [
      {
        question: "Is Mount Pelion walkable from the ship?",
        answer:
          "No. You need road transfer to the villages. Walking applies once you are in the village lanes.",
      },
    ],
    relatedAttractionSlugs: ["pagasetic-gulf", "volos-waterfront", "meteora"],
    relatedExcursionSlug: "historical-pelion-villages",
  },
  {
    slug: "meteora",
    title: "Meteora",
    seoTitle: "Meteora from Volos — Cruise Day Trip Highlight",
    metaDescription:
      "Meteora monasteries from Volos — honest distance, timing and cruise-day advice for visiting the rock pillars from the Pagasetic Gulf port.",
    attractionName: "Meteora",
    tagline: "Rock pillars and clifftop monasteries — magnificent, and far from a casual add-on.",
    overview:
      "Meteora is one of Europe’s great sacred landscapes. From Volos it is also a long road day that only works when ship hours and logistics are honest.",
    body: [
      "Expect roughly two to two-and-a-half hours each way by road before monastery time on site.",
      "Modest dress is required for entry. Some interiors restrict photography.",
      "Most cruise passengers should use organised private or small-group transport planned around all-aboard rather than improvising the return.",
    ],
    distanceFromPort: "Roughly two to two-and-a-half hours by road each way in normal conditions",
    travelTime: "About 2–2.5 hours each way",
    timeNeeded: "A full day including transfers, monastery visits and buffers",
    gettingThere: [
      {
        method: "Organised excursion",
        detail: "Strongly recommended for cruise timing — see Editor’s Choice Private Meteora Monasteries.",
        time: "Full day",
        cost: "Excursion fare",
      },
      {
        method: "Private transfer",
        detail: "Flexible for small parties who still protect a generous ship buffer.",
        time: "Custom",
        cost: "Private rate",
      },
    ],
    highlights: [
      "UNESCO rock monasteries",
      "Extraordinary vertical landscape",
      "Requires a long cruise call from Volos",
    ],
    tips: [
      "Do not combine with a full Volos city checklist",
      "Carry a cover-up for shoulders and knees",
      "Protect the larger end of a 60–90 minute return buffer",
    ],
    faqs: [
      {
        question: "Is this the Editor's Choice?",
        answer:
          "Yes — Private Meteora Monasteries is our Editor’s Choice from Volos when hours ashore support the journey.",
      },
      {
        question: "Can I visit Meteora independently from the ship?",
        answer:
          "Experienced travellers can, but most cruise passengers are safer with organised timing. The road day is long and the ship will not wait.",
      },
    ],
    relatedAttractionSlugs: ["mount-pelion", "volos-waterfront"],
    relatedExcursionSlug: "private-meteora-monasteries",
  },
  {
    slug: "pagasetic-gulf",
    title: "Pagasetic Gulf",
    seoTitle: "Pagasetic Gulf Volos — Cruise Highlight",
    metaDescription:
      "Pagasetic Gulf from Volos cruise port — harbour light, waterfront views and the coastal setting that frames the city and Mount Pelion.",
    attractionName: "Pagasetic Gulf",
    tagline: "The enclosed gulf that gives Volos its coastal character.",
    overview:
      "The Pagasetic Gulf is Volos’s seaward stage — fishing boats, open promenade light and the calm that makes the city feel coastal even as Thessalian mountains rise inland.",
    body: [
      "You do not need a boat trip to appreciate it; the waterfront promenade is the everyday viewpoint.",
      "Photographers should favour softer morning or late light; midday haze can flatten the mountain backdrop.",
      "The gulf also explains why seafood and harbour cafés sit at the heart of local food culture.",
    ],
    distanceFromPort: "Immediate from cruise berths and the waterfront promenade",
    travelTime: "Immediate",
    timeNeeded: "Ongoing as setting — 15–40 minutes for a dedicated linger",
    gettingThere: [
      {
        method: "Walk",
        detail: "Step onto the waterfront promenade from passenger access.",
        time: "5–15 min",
        cost: "Free",
      },
    ],
    highlights: [
      "Harbour and gulf photography",
      "Coastal atmosphere without leaving the city",
      "Backdrop for the Argonauts story",
    ],
    tips: [
      "Use the gulf as your orientation when returning to the ship",
      "Combine with a café pause rather than a single snapshot",
    ],
    faqs: [
      {
        question: "Is a boat trip necessary?",
        answer:
          "No for most cruise visitors. The promenade already delivers the gulf experience; boat options are optional extras when timing allows.",
      },
    ],
    relatedAttractionSlugs: ["volos-waterfront", "argonauts-monument", "mount-pelion"],
  },
  {
    slug: "ancient-iolcus",
    title: "Ancient Iolcus & Archaeological Museum",
    seoTitle: "Ancient Iolcus & Volos Archaeological Museum — Cruise Highlight",
    metaDescription:
      "Ancient Iolcus and the Archaeological Museum of Volos — Jason’s myth, Thessalian archaeology and optional museum time for cruise visitors.",
    attractionName: "Ancient Iolcus / Archaeological Museum of Volos",
    tagline: "Where Jason’s city meets Thessalian archaeology.",
    overview:
      "Ancient Iolcus is the mythic launch point of the Argonauts. For cruise visitors, the story is best approached through the waterfront monument and — when hours allow — the Archaeological Museum of Volos.",
    body: [
      "Do not expect a single reconstructed ancient city beside the cruise berth. The Iolcus narrative is layered across landscape, legend and museum collections.",
      "The Archaeological Museum rewards visitors who want depth beyond the promenade photograph.",
      "On a short call, the Argonauts monument and a good local meal may be the wiser use of limited hours.",
    ],
    distanceFromPort: "Museum area typically about 15–25 minutes on foot from central waterfront approaches",
    travelTime: "Walk or short taxi from the promenade",
    timeNeeded: "45–90 minutes if entering the museum",
    gettingThere: [
      {
        method: "Walk",
        detail: "From the waterfront / Ermou area, continue toward the Archaeological Museum.",
        time: "15–25 min from central waterfront",
        cost: "Free to reach; museum ticket if entering",
      },
      {
        method: "Taxi",
        detail: "Useful in heat or with limited mobility.",
        time: "5–10 min",
        cost: "Metered fare",
      },
    ],
    highlights: [
      "Argonaut / Iolcus associations",
      "Regional archaeological collections",
      "Optional depth on a longer city day",
    ],
    tips: [
      "Confirm museum opening hours before committing",
      "Skip without guilt on a short call — the waterfront still tells the myth",
    ],
    faqs: [
      {
        question: "Do I need the museum to understand the Argonaut story?",
        answer:
          "No. The waterfront monument and local storytelling are enough for many guests. The museum adds archaeological depth when time allows.",
      },
    ],
    relatedAttractionSlugs: ["argonauts-monument", "volos-waterfront"],
  },
];

export function getHighlightBySlug(slug: string): AttractionPage | undefined {
  return highlights.find((h) => h.slug === slug);
}

export function getAllHighlightSlugs(): string[] {
  return highlights.map((h) => h.slug);
}
