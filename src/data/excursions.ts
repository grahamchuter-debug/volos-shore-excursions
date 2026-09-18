import type { ExcursionPage } from "./types";

const PORT_LOGISTICS =
  "Cruise ships calling at Volos typically berth along the city’s Pagasetic Gulf waterfront, with passenger access oriented toward the promenade and centre. The Argonauts-themed waterfront, cafés and much of the walkable city sit within a realistic stroll for many guests — exact times depend on berth assignment, pace and crowds. Mount Pelion villages are a shorter scenic climb inland; Meteora is a long inland journey across the Thessaly plains and only suits a long, unhurried port call. Confirm your ship’s all-aboard time — not merely the published departure — and aim to be back at the terminal 60–90 minutes early. Longer regional days need the larger end of that buffer.";

const SEG_SUPPLIER = {
  kind: "shore-excursions-group" as const,
  name: "Shore Excursions Group",
  notes:
    "Partner network — confirm availability for your sailing. Catalogue imported from shoreexcursionsgroup.com/port/volos-shore-excursions.",
};

const RETURN_GUARANTEE =
  "Return to ship guarantee: itineraries are planned around your Volos cruise call so you are back at the terminal with time before all-aboard. If an operational delay on our side causes you to miss the ship, we work with the local provider under the published return-to-ship assurance for that booking.";

export const excursions: ExcursionPage[] = [
  {
    slug: "private-meteora-monasteries",
    title: "Private Journey from Volos to Meteora Monasteries with Lunch",
    seoTitle: "Meteora Monasteries from Volos | Editor's Choice Shore Excursion",
    metaDescription:
      "Editor's Choice private shore excursion from Volos to Meteora — Agios Stephanos, Varlam, Kalambaka lunch and cruise-aware return.",
    category: "Editor's Choice",
    tagline:
      "Greece’s most spectacular monasteries — the strongest overall cruise experience when your hours ashore support a long inland journey from Volos.",
    duration: "Approximately 9 hours",
    pace: "Moderate",
    bestFor:
      "Cruise visitors who want Meteora’s rock-perched monasteries and Thessaly landscapes in a single, well-timed private day from Volos",
    overview:
      "Meteora is mainland Greece at its most theatrical: monasteries clinging to sandstone pillars above Kalambaka, reached across the fertile Thessaly plains. This private Editor’s Choice journey visits Agios Stephanos and Varlam, includes lunch, and protects the return to your Volos berth.",
    body: [
      "We chose this excursion because it delivers the strongest overall cruise experience from Volos: access to Meteora that independent planning rarely matches within a single port call, without pretending every guest needs to leave the gulf.",
      "It particularly suits first-time visitors to mainland Greece who want the region’s most iconic monastery landscape rather than only a waterfront or Pelion village day.",
      "Guests who prefer a relaxed Volos walk or the traditional villages of Mount Pelion may be happier closer to port — and those are genuinely excellent choices from this harbour.",
      "Expect substantial road time through Thessaly, moderate walking at monastery approaches, a Kalambaka lunch window, and a day that needs a long usable window ashore. Exact sequencing flexes with traffic, group pace and ship timing.",
    ],
    highlights: [
      "Private journey from Volos to Meteora",
      "Visits to Agios Stephanos and Varlam Monasteries",
      "Scenic drive across the Thessaly plains",
      "Panoramic views above Kalambaka",
      "Lunch included as stated on your voucher",
      "Return planned around all-aboard",
    ],
    itinerary: [
      {
        title: "Meet near the Volos cruise port",
        detail:
          "Join your private guide or driver near the passenger area and confirm timing against your ship’s all-aboard.",
      },
      {
        title: "Thessaly plains transfer",
        detail:
          "Travel inland across fertile Thessaly toward the rock towers of Meteora — part of the day’s regional character, not merely dead time.",
      },
      {
        title: "Agios Stephanos and Varlam Monasteries",
        detail:
          "Visit two of Meteora’s historic monasteries with time for panoramic views and cultural context as pacing allows.",
      },
      {
        title: "Lunch in Kalambaka",
        detail:
          "Pause for lunch with views toward the rock landscape before the return journey.",
      },
      {
        title: "Return to Volos",
        detail:
          "Retrace to the cruise port with a planned buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Volos",
      "Private round-trip transport to Meteora",
      "English-speaking guide commentary",
      "Lunch and beverage as stated on your voucher",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Monastery entrance fees unless stated on your voucher",
      "Personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Dress modestly for monastery visits — covered shoulders and knees where required",
      "Wear comfortable shoes for uneven surfaces and steps",
      "If you want a shorter scenic day, consider Mount Pelion instead",
      "If you prefer cafés and waterfront wandering, Walk It Yourself remains excellent",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Why is this Editor's Choice?",
        answer:
          "Among Volos’s organised options, Meteora delivers the strongest overall cruise experience: Greece’s most spectacular monastery landscape, Thessaly context, and a private format designed around ship timing. City walks and Pelion villages are excellent — this is the day we choose when schedule allows and the monasteries are the priority.",
      },
      {
        question: "Can I realistically visit Meteora from Volos in one day?",
        answer:
          "Yes, when your usable hours ashore support a roughly nine-hour excursion plus a proper return buffer. It is a long inland journey — booking a private guided option helps keep timing smooth so you can focus on the monasteries rather than transfer logistics.",
      },
      {
        question: "Do I need this tour, or can I stay closer to Volos?",
        answer:
          "You can — and many should — stay closer. Choose Meteora when the monasteries are your priority and your call is long enough; choose Mount Pelion for shorter scenic culture, or independence when waterfront cafés and a self-guided Volos walk are enough.",
      },
    ],
    relatedExcursionSlugs: [
      "historical-pelion-villages",
      "panoramic-pelion-wine-tasting",
      "private-volos-pelion-villages",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — coach travel plus monastery approaches and steps",
    cruiseSuitability:
      "Needs a long, unhurried port call (long inland journey)",
    editorChoice: true,
    whyWeChose: {
      lead: "Meteora is mainland Greece’s most spectacular monastery landscape — and from Volos it is the organised day that most completely rewards a generous cruise call.",
      whyRecommended:
        "Independent Volos is superb for waterfront cafés, mythic atmosphere and a relaxed gulf day. When guests want Greece’s rock-perched monasteries, this private journey delivers Agios Stephanos, Varlam, Thessaly plains and a Kalambaka lunch in one coherent circuit.",
      whoItSuits:
        "First-time visitors to mainland Greece, culture travellers and anyone who prefers a landmark regional day over a purely local city stroll — provided the ship’s usable hours support the journey.",
      whatMakesItSpecial:
        "You leave understanding why Meteora anchors Greek spiritual geography — not only photographing Volos’s promenade — while still returning under cruise-aware timing.",
      cruiseFit:
        "A full-day inland format that needs honest hours ashore and a solid return buffer. Soft-sell honesty: a city walk and Mount Pelion are also excellent; Meteora is for those who want Greece’s most spectacular monasteries when schedule allows.",
      theExperience:
        "You discover why Volos is a gateway to Meteora — and you still walk back to the ship with composure.",
    },
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "historical-pelion-villages",
    title:
      "Historical Pelion and the Charming Villages of Pinakates, Vizitsa, and Milies",
    seoTitle: "Historical Pelion Villages Shore Excursion from Volos",
    metaDescription:
      "Small-group Volos shore excursion to Mount Pelion — Pinakates, Vizitsa and Milies with traditional stone villages, mountain vistas and cruise-aware return.",
    category: "Scenic/Cultural",
    tagline:
      "Three of Pelion’s most atmospheric villages — stone mansions, mountain air and traditional mainland Greece within a half-day from the gulf.",
    duration: "Approximately 5 hours",
    pace: "Moderate",
    bestFor:
      "Cruise guests who want scenic Mount Pelion culture without committing to a full Meteora day",
    overview:
      "Mount Pelion rises behind Volos in a cascade of stone villages, plane trees and Aegean-facing views. This small-group day visits Pinakates, Vizitsa and Milies — three of the peninsula’s most rewarding traditional settlements — paced for a cruise call.",
    body: [
      "Ideal when you want mainland Greece’s mountain-village character rather than only harbour time — and when nine hours inland to Meteora feels too long.",
      "Pinakates offers serene stone architecture and mountain vistas; Vizitsa is known for elegant mansions; Milies brings historic church, folklore and library atmosphere.",
      "A traditional taverna lunch window is often available (cost typically not included) before the return to Volos.",
      "If you prefer complete independence on the waterfront, Walk It Yourself covers a classic Volos loop honestly.",
    ],
    highlights: [
      "Small-group scenic/cultural format",
      "Pinakates mountain village",
      "Vizitsa mansions and lanes",
      "Milies historic landmarks",
      "Cruise-timed meeting from Volos",
    ],
    itinerary: [
      {
        title: "Meet near Volos cruise port",
        detail:
          "Join your small group near the passenger area and confirm the day’s timing against all-aboard.",
      },
      {
        title: "Pinakates",
        detail:
          "Explore a serene Pelion village of stone houses and mountain vistas.",
      },
      {
        title: "Vizitsa",
        detail:
          "Wander elegant mansions and charming streets that define Pelion’s architectural character.",
      },
      {
        title: "Milies",
        detail:
          "Visit historic landmarks such as the church, folklore museum and ancient library as timing allows.",
      },
      {
        title: "Return to Volos",
        detail:
          "Descend to the cruise port with a planned buffer before all-aboard.",
      },
    ],
    included: [
      "Port meeting and return planning in Volos",
      "Round-trip transport into Mount Pelion",
      "English-speaking guide commentary",
      "Tastings as stated on your voucher",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Lunch and personal purchases unless stated on your voucher",
      "Entrance fees unless stated on your voucher",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Wear comfortable shoes for cobbled village streets",
      "Bring a light layer — mountain air can feel cooler than the waterfront",
      "Excellent alternative when Meteora’s inland journey is too long for your call",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this better than Meteora for a shorter call?",
        answer:
          "Often yes. Pelion is a shorter scenic climb from Volos and still delivers traditional Greek village character. Meteora remains Editor’s Choice when your schedule supports a long inland day.",
      },
    ],
    relatedExcursionSlugs: [
      "panoramic-pelion-wine-tasting",
      "private-meteora-monasteries",
      "private-volos-pelion-villages",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — village lanes and gentle slopes",
    cruiseSuitability: "Works well on a solid half-day or longer flexible call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "panoramic-pelion-wine-tasting",
    title: "Panoramic Pelion Villages and Wine Tasting",
    seoTitle: "Pelion Wine Tasting Shore Excursion from Volos",
    metaDescription:
      "Cruise-friendly Volos excursion to Portaria and Makrinitsa with local wine tasting — panoramic Pelion villages above the Pagasetic Gulf.",
    category: "Scenic/Cultural",
    tagline:
      "Portaria, Makrinitsa and a local wine tasting — Pelion’s classic panorama without a marathon inland day.",
    duration: "Approximately 4.5 hours",
    pace: "Moderate",
    bestFor:
      "Guests who want Pelion’s signature viewpoints and a wine pause within a compact cruise window",
    overview:
      "This small-group Pelion circuit pairs Portaria’s cobbled mansions and lively square with Makrinitsa’s sweeping views of Volos and the Pagasetic Gulf — finished with a tasting of local wines.",
    body: [
      "Choose this when you want mountain scenery and village atmosphere closer to port than Meteora, with a sensory pause built in.",
      "Makrinitsa is often called the balcony of Pelion for good reason — gulf light and traditional architecture share the frame.",
      "Pairs naturally with independent waterfront time in Volos afterwards if your call allows.",
    ],
    highlights: [
      "Portaria village and historic mansions",
      "Makrinitsa panoramic viewpoints",
      "Local wine tasting",
      "Views toward Volos and the Pagasetic Gulf",
      "Compact 4.5-hour format",
    ],
    itinerary: [
      {
        title: "Meet near Volos cruise port",
        detail:
          "Join your small group and confirm routing against your ship’s all-aboard.",
      },
      {
        title: "Portaria",
        detail:
          "Explore cobbled streets, historic mansions and the village square.",
      },
      {
        title: "Wine tasting",
        detail:
          "Sample local varieties in a traditional setting as described on your voucher.",
      },
      {
        title: "Makrinitsa",
        detail:
          "Enjoy panoramic views of Volos and the gulf alongside traditional architecture and crafts.",
      },
      {
        title: "Return to Volos",
        detail: "Descend to the cruise port with a deliberate buffer.",
      },
    ],
    included: [
      "Port meeting and return planning in Volos",
      "Round-trip transport into Mount Pelion",
      "English-speaking guide commentary",
      "Wine tasting as stated on your voucher",
      "Return planned around the ship’s all-aboard",
    ],
    notIncluded: [
      "Full meal and personal purchases",
      "Gratuities",
      "Entrance fees unless stated on your voucher",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for cobbles and gentle slopes",
      "Bring sun protection in summer — viewpoints can be bright",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "How does this compare to the historical Pelion villages tour?",
        answer:
          "Both stay in the Pelion mountains. This circuit emphasises Portaria, Makrinitsa and wine tasting; the historical villages day focuses on Pinakates, Vizitsa and Milies. Choose by village character and whether a tasting matters to you.",
      },
    ],
    relatedExcursionSlugs: [
      "historical-pelion-villages",
      "private-volos-pelion-villages",
      "private-meteora-monasteries",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — village streets and viewpoint walking",
    cruiseSuitability: "Excellent on half-day or longer flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-mylopotamos-tsagkarada",
    title: "Private Mylopotamos Beach and Tsagkarada Village Experience",
    seoTitle: "Mylopotamos Beach & Tsagkarada Private Tour from Volos",
    metaDescription:
      "Private Volos shore excursion to Mylopotamos Beach and Tsagkarada Village — Aegean rock formations, mountain plane trees and cruise-aware pacing.",
    category: "Private",
    tagline:
      "Beach rock formations and a cool mountain village — Pelion’s Aegean side at private pace.",
    duration: "Approximately 6 hours",
    pace: "Moderate",
    bestFor:
      "Couples and small parties who want beach time and traditional village charm without a large coach group",
    overview:
      "This private Pelion day pairs Mylopotamos Beach — known for dramatic rock formations and swimming — with Tsagkarada’s cool mountain air, ancient plane tree and stone lanes. Optional taverna lunch keeps the day flexible.",
    body: [
      "Best when privacy and a mix of coast and mountain matter more than monastery architecture or a city-only stroll.",
      "Swim and unwind at Mylopotamos when conditions suit; then climb into Tsagkarada for traditional Pelion atmosphere.",
      "Not required for a successful independent day in Volos — choose this when the Aegean-Pelion combination is the story you want.",
    ],
    highlights: [
      "Private pacing for your party",
      "Mylopotamos Beach and rock formations",
      "Tsagkarada Village and ancient plane tree",
      "Optional local taverna lunch",
      "Cruise-aware meeting and return",
    ],
    itinerary: [
      {
        title: "Private meet near Volos cruise port",
        detail:
          "Join your guide and confirm interests, swimming plans and all-aboard timing.",
      },
      {
        title: "Mylopotamos Beach",
        detail:
          "Time for swimming and scenery among Pelion’s distinctive coastal rock formations.",
      },
      {
        title: "Tsagkarada Village",
        detail:
          "Explore stone streets, mountain air and the village’s famous ancient plane tree.",
      },
      {
        title: "Optional lunch and return",
        detail:
          "Pause at a local taverna if you choose, then return to Volos with a planned buffer.",
      },
    ],
    included: [
      "Private English-speaking guide or driver-guide",
      "Round-trip transport",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Food and drinks unless arranged separately",
      "Gratuities",
      "Personal purchases",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Bring swimwear and a towel if you plan to enter the water",
      "Share mobility needs when booking so beach and village pacing can flex",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is swimming guaranteed?",
        answer:
          "Beach time is built into the concept, but swimming depends on weather, sea conditions and your group’s preference. The rock scenery and village visit remain rewarding either way.",
      },
    ],
    relatedExcursionSlugs: [
      "historical-pelion-villages",
      "panoramic-pelion-wine-tasting",
      "private-volos-farm-cooking",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — beach access and village lanes",
    cruiseSuitability: "Best with a fuller half-day or longer call",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-volos-farm-cooking",
    title: "Private Volos Farm and Authentic Greek Lunch Cooking Experience",
    seoTitle: "Volos Farm Cooking Class Shore Excursion",
    metaDescription:
      "Private farm and Greek cooking experience near Volos cruise port — countryside herbs, traditional recipes and a shared lunch with cruise-aware timing.",
    category: "Private",
    tagline:
      "Countryside herbs, traditional recipes and a shared Greek lunch — local life close to the gulf.",
    duration: "Approximately 4 hours",
    pace: "Moderate",
    bestFor:
      "Food lovers, families and small parties who want a hands-on Greek lunch without a long mountain transfer",
    overview:
      "Just beyond the port, a private farm experience invites you into the Greek countryside — trees, herbs and fresh ingredients — then into the kitchen for traditional dishes and a relaxed farm-to-table lunch.",
    body: [
      "Ideal when culinary immersion matters more than monastery pillars or village panoramas.",
      "Expect a gentle countryside setting, cooking guidance with local ingredients, and a shared meal that feels personal rather than coach-tour formal.",
      "A strong family-friendly alternative to longer regional days when hours ashore are moderate.",
    ],
    highlights: [
      "Private farm visit near Volos",
      "Hands-on Greek cooking",
      "Fresh local ingredients",
      "Lunch and beverage included as stated on your voucher",
      "Compact four-hour cruise format",
    ],
    itinerary: [
      {
        title: "Private meet near Volos cruise port",
        detail:
          "Join your host and confirm dietary needs and all-aboard timing.",
      },
      {
        title: "Farm introduction",
        detail:
          "Explore a countryside farm setting of trees, herbs and local produce.",
      },
      {
        title: "Cooking experience",
        detail:
          "Prepare traditional Greek and Pelion-inspired dishes with fresh ingredients.",
      },
      {
        title: "Shared lunch and return",
        detail:
          "Sit down to the meal you helped create, then return to the cruise port with a buffer.",
      },
    ],
    included: [
      "Private farm and cooking experience",
      "Lunch and beverage as stated on your voucher",
      "English-speaking host guidance",
      "Cruise-aware pacing and return planning",
    ],
    notIncluded: [
      "Personal purchases",
      "Gratuities",
      "Hotel or airport transfers",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Mention allergies or dietary preferences when booking",
      "Comfortable closed shoes suit a working farm setting",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is this suitable for families?",
        answer:
          "Yes — the shorter duration, private pacing and hands-on cooking often suit families better than long inland coach days. Confirm children’s participation details when booking.",
      },
    ],
    relatedExcursionSlugs: [
      "private-volos-pelion-villages",
      "historical-pelion-villages",
      "private-mylopotamos-tsagkarada",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Easy to moderate — farm paths and kitchen standing time",
    cruiseSuitability: "Excellent on shorter or flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
  {
    slug: "private-volos-pelion-villages",
    title: "Private Volos, Historic Mt Pelion, and Greek Villages",
    seoTitle: "Private Volos & Mount Pelion Villages Shore Excursion",
    metaDescription:
      "Private half-day from Volos — archaeological museum context and historic Mount Pelion villages with cruise-aware return to ship.",
    category: "Private",
    tagline:
      "Museum depth and mountain villages — Volos and Pelion in one private half-day.",
    duration: "Approximately 4.5 hours",
    pace: "Moderate",
    bestFor:
      "Small parties who want archaeological context in Volos plus traditional Pelion villages without a large shared group",
    overview:
      "This private circuit combines Volos’s archaeological museum treasures with the serene beauty of historic Mount Pelion villages — ancient Iolcus echoes meeting stone mountain lanes in a single half-day.",
    body: [
      "Choose private when you want tailored pacing between museum narrative and village scenery.",
      "It suits guests who care about Jason’s mythic landscape and Pelion’s traditional architecture in one coherent outing.",
      "Still leaves room for independent waterfront or café time afterwards when your call allows.",
    ],
    highlights: [
      "Private guide for your party",
      "Volos archaeological museum orientation",
      "Historic Mount Pelion villages",
      "Scenic/cultural half-day format",
      "Cruise-aware meeting and return",
    ],
    itinerary: [
      {
        title: "Private meet near Volos cruise port",
        detail:
          "Join your guide and confirm museum interests, mobility and all-aboard timing.",
      },
      {
        title: "Volos museum context",
        detail:
          "Explore archaeological highlights that root the city in ancient Thessaly and the Argonauts’ landscape.",
      },
      {
        title: "Mount Pelion villages",
        detail:
          "Continue into picturesque mountain villages for traditional architecture and gulf-facing views as timing allows.",
      },
      {
        title: "Return to Volos",
        detail:
          "Finish toward the cruise port with a planned buffer before all-aboard.",
      },
    ],
    included: [
      "Private English-speaking guide",
      "Round-trip transport as described on your voucher",
      "Cruise-aware pacing",
    ],
    notIncluded: [
      "Museum entrance fees unless stated on your voucher",
      "Food and drinks",
      "Gratuities",
    ],
    portLogistics: PORT_LOGISTICS,
    tips: [
      "Comfortable shoes for museum floors and village cobbles",
      "Share whether museum or villages should lead the day when booking",
      RETURN_GUARANTEE,
    ],
    faqs: [
      {
        question: "Is a private tour necessary?",
        answer:
          "No. Many visitors explore Volos independently and some join small-group Pelion days. Choose private when you want museum-plus-villages sequencing shaped around your party alone.",
      },
    ],
    relatedExcursionSlugs: [
      "historical-pelion-villages",
      "panoramic-pelion-wine-tasting",
      "private-volos-farm-cooking",
    ],
    featured: true,
    bookingStatus: "comingSoon",
    returnGuarantee: RETURN_GUARANTEE,
    walkingLevel: "Moderate — museum floors and village lanes",
    cruiseSuitability: "Works well on half-day or longer flexible port calls",
    editorChoice: false,
    supplier: SEG_SUPPLIER,
  },
];

export function getExcursionBySlug(slug: string): ExcursionPage | undefined {
  return excursions.find((e) => e.slug === slug);
}

export function getFeaturedExcursions(): ExcursionPage[] {
  return excursions.filter((e) => e.featured);
}

export function getEditorChoiceExcursion(): ExcursionPage | undefined {
  return excursions.find((e) => e.editorChoice);
}

export function getAllExcursionSlugs(): string[] {
  return excursions.map((e) => e.slug);
}
