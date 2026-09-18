import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Can I explore Volos without an excursion?",
    answer:
      "Yes. Volos’s waterfront, Argonauts monument and central streets are well suited to independent exploration. Many visitors walk Akti Argonafton, Ermou and a tsipouro or café stop without an organised tour.",
  },
  {
    question: "How far is the waterfront from the cruise port?",
    answer:
      "Often around 5–15 minutes on foot to the main promenade, depending on berth, pace and route. Central shopping and museum areas may take a little longer.",
  },
  {
    question: "How far is Meteora from Volos?",
    answer:
      "By road it is typically around two to two-and-a-half hours each way in normal conditions. Treat Meteora as a full-day commitment — realistic only on a long cruise call with organised logistics and a generous return buffer.",
  },
  {
    question: "Is Mount Pelion realistic on a cruise day?",
    answer:
      "Often yes. Popular Pelion villages are much closer than Meteora and fit more port calls. Expect cobbles, slopes and road time — a guided day helps with pacing and the return to ship.",
  },
  {
    question: "Should I book a tour?",
    answer:
      "Book when you want Meteora, Mount Pelion villages, structured narrative, mobility support, or simply prefer not to manage mountain or monastery logistics yourself. Skip when you prefer self-paced wandering and food culture in the city.",
  },
  {
    question: "How walkable is Volos?",
    answer:
      "The waterfront and central streets are relatively flat and cruise-friendly. Some inland stretches include cobbles and uneven paving. Mount Pelion villages add steeper lanes and steps.",
  },
  {
    question: "What should I wear for Meteora monasteries?",
    answer:
      "Dress modestly for entry — covered shoulders and knees. Carry a light cover-up or wrap even in hot weather. Follow posted photography rules inside monasteries.",
  },
  {
    question: "How much free time should I allow before all-aboard?",
    answer:
      "Protect 60–90 minutes after sightseeing for a city day. Pelion and especially Meteora days need the larger end of that buffer.",
  },
  {
    question: "What is your Editor's Choice?",
    answer:
      "Private Meteora Monasteries — the strongest rock-monastery day from Volos when hours ashore can honestly support the long road journey.",
  },
  {
    question: "What currency is used?",
    answer:
      "Greece uses the euro (EUR). Cards are widely accepted; a little cash still helps for smaller bakeries and traditional spots.",
  },
];

export function getAllFaqs(): FAQ[] {
  const seen = new Set<string>();
  const merged: FAQ[] = [];
  for (const faq of [...getHomepageFaqs(), ...extraFaqs]) {
    if (seen.has(faq.question)) continue;
    seen.add(faq.question);
    merged.push(faq);
  }
  return merged;
}
