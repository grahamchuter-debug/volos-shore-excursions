import type { FAQ } from "./types";

/** Keep path aligned with `src/app/signature-riviera-experience/` to avoid broken builds. */
export const SIGNATURE_EXPERIENCE_PATH = "/signature-riviera-experience";

export interface SignatureBenefit {
  emoji: string;
  title: string;
  description: string;
}

export const signatureVolosExperience = {
  slug: "signature-riviera-experience",
  title: "Signature Thessaly & Pelion Discovery",
  seoTitle: "Signature Thessaly & Pelion Discovery — Future Private Day from Volos",
  metaDescription:
    "Preview a future small-group Volos shore experience — maximum eight guests, Mount Pelion, gulf character and flexible Meteora emphasis. Not currently bookable.",
  tagline:
    "A future small-group journey through Volos, Mount Pelion and Thessaly — designed around your ship, not a generic day tour.",
  overview:
    "Signature Thessaly & Pelion Discovery is a product concept in preparation. The proposed experience would take no more than eight guests from Volos through carefully paced gulf and mountain highlights, with optional Meteora emphasis when hours allow, a local lunch and enough flexibility to respond to the group, weather and port timings. It does not currently exist as a bookable excursion.",
  comingSoon: true,
  benefits: [
    {
      emoji: "👥",
      title: "Maximum 8 guests",
      description: "A proposed small-group format intended to avoid coach-tour delays and support personal attention.",
    },
    {
      emoji: "⛰️",
      title: "Pelion & Thessaly focus",
      description: "Mount Pelion villages, gulf light and optional Meteora depth at the heart of the concept.",
    },
    {
      emoji: "📸",
      title: "Photography stops",
      description: "Time for monastery silhouettes, stone villages and Pagasetic views rather than images through a coach window.",
    },
    {
      emoji: "🍽️",
      title: "Local lunch",
      description: "A relaxed Thessalian or Pelion lunch proposed as part of the experience, subject to final partner arrangements.",
    },
    {
      emoji: "🧭",
      title: "Flexible itinerary",
      description: "Room to adjust for weather, crowds and the interests of a small group — including Meteora when the call supports it.",
    },
    {
      emoji: "🚢",
      title: "Ship-first timing",
      description: "Planned backwards from all-aboard with a conservative Volos return buffer.",
    },
  ] as SignatureBenefit[],
  faqs: [
    {
      question: "Can I book Signature Thessaly & Pelion Discovery now?",
      answer:
        "No. It is a future concept in preparation and is not bookable. Explore current Volos shore excursions or enquire for updates.",
    },
    {
      question: "How is this different from Editor's Choice?",
      answer:
        "Editor’s Choice is our current recommended Meteora introduction. Signature is a future small-group flagship concept with a stricter guest limit and more flexible pacing across gulf, Pelion and Thessaly.",
    },
  ] as FAQ[],
};

/** Primary export name expected by existing Signature Experience components and route. */
export const signatureRivieraExperience = signatureVolosExperience;

export function getSignatureEditorialRecommendation() {
  return {
    category: "best-got" as const,
    title: signatureRivieraExperience.title,
    description:
      "A future maximum-eight-guest Thessaly & Pelion experience. In preparation and not currently bookable.",
    href: SIGNATURE_EXPERIENCE_PATH,
    signature: true,
    comingSoon: true,
  };
}
