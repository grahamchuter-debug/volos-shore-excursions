import type { FAQ } from "./types";

export interface Terminal {
  name: string;
  quay: string;
  usedBy: string;
  cityAccess: string;
}

export interface PortGuideSection {
  heading: string;
  paragraphs: string[];
}

export const portGuideContent = {
  title: "Volos Cruise Port Guide",
  subtitle:
    "Terminal access, walking times to the waterfront and Argonauts monument, food and tsipouro culture, transport toward Mount Pelion and Meteora, and sensible return-to-ship planning.",
  terminals: [
    {
      name: "Volos cruise passenger area",
      quay: "Passenger access within the commercial harbour on the Pagasetic Gulf",
      usedBy: "Most cruise ships calling at Volos on Aegean and Eastern Mediterranean itineraries",
      cityAccess:
        "Often a realistic 5–15 minute walk to Akti Argonafton and the waterfront; taxis available at peak turnaround for Pelion and city hops",
    },
    {
      name: "Alternative berth positions",
      quay: "Occasional alternative positions within the wider port complex",
      usedBy: "Selected calls when specific berths are assigned",
      cityAccess:
        "Walking times vary — follow terminal signage and allow a conservative buffer into the city centre",
    },
  ] as Terminal[],
  sections: [
    {
      heading: "Where cruise ships dock in Volos",
      paragraphs: [
        "Cruise ships calling at Volos typically berth in the commercial harbour beside the city, with passenger access oriented toward the waterfront promenade rather than a distant industrial outpost.",
        "Check the ship’s daily programme and terminal signage on arrival. Shuttle arrangements vary by line and berth; many guests walk to Akti Argonafton without needing a transfer.",
        "Volos is an excellent base for a city day on foot. Mount Pelion villages and Meteora are separate journeys requiring road time — Meteora especially so.",
      ],
    },
    {
      heading: "Walking from the port",
      paragraphs: [
        "From the passenger area, follow signs toward the city waterfront rather than wandering the working port.",
        "Allow roughly 5–15 minutes to reach the main promenade in normal conditions, longer from more distant berths or at a slower pace.",
        "If mobility, weather or luggage are factors, take a short taxi instead of proving a point.",
      ],
    },
    {
      heading: "Volos city highlights",
      paragraphs: [
        "The waterfront promenade and Argonauts monument anchor most first visits — allow time to absorb the gulf setting and Mount Pelion backdrop.",
        "Ermou shopping street, harbour cafés and optional time at the Archaeological Museum reward a human pace.",
        "Tsipouro tavernas are part of the destination, not a sideshow — pace the meze ritual with all-aboard in mind.",
      ],
    },
    {
      heading: "Beyond the city — Mount Pelion and Meteora",
      paragraphs: [
        "Mount Pelion’s traditional villages are the stronger near-regional day for many cruise calls — stone lanes, gulf viewpoints and cooler mountain air.",
        "Meteora’s rock monasteries are the flagship wonder, typically around two to two-and-a-half hours each way by road. Only attempt them on a long call with organised logistics.",
        "Do not try to combine Pelion, Meteora and a full city checklist in one port day.",
      ],
    },
    {
      heading: "Food and tsipouro near the port",
      paragraphs: [
        "Volos is serious about food — gulf seafood, meze culture and bakeries sit within walking distance of many berths.",
        "Tsipouradika serve small glasses of tsipouro with successive plates of meze. Treat it as culture, share plates, and protect your ship buffer.",
      ],
    },
    {
      heading: "Return to ship",
      paragraphs: [
        "Plan from all-aboard, not published departure. Aim to be back at the terminal 60–90 minutes early.",
        "Pelion and especially Meteora days need the larger end of that buffer. The ship will not wait.",
      ],
    },
  ] as PortGuideSection[],
  faqs: [
    {
      question: "Can I walk into Volos from the cruise port?",
      answer:
        "Usually yes for the waterfront, Argonauts monument and central streets. Exact times depend on berth assignment — follow signage and keep a buffer.",
    },
    {
      question: "Do I need a shore excursion?",
      answer:
        "Not for the city if you enjoy walking. Yes for Mount Pelion villages if you want guided pacing, and almost always yes for Meteora if you want cruise-safe timing on the long road day.",
    },
    {
      question: "What is the best first stop?",
      answer:
        "The waterfront promenade and Argonauts monument — then decide whether to continue into the centre, climb toward Pelion, or keep the day for Meteora on a long call.",
    },
  ] satisfies FAQ[],
};

export const terminals = portGuideContent.terminals;
export const portGuideSections = portGuideContent.sections;
export const portGuideFaqs = portGuideContent.faqs;
