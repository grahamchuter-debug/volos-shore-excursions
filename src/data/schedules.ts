import volosSchedule from "./imported-schedules/volos.json";
import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";

/**
 * Schedule framework is ready for Volos.
 * Do not publish sample or fictitious ship calls as live data.
 * Keep entries empty until confirmed schedules are available.
 */
const SCHEDULE_FAQS = [
  {
    question: "How accurate are Volos cruise ship schedules?",
    answer: "Schedules are compiled from published cruise timetables and updated periodically. Always confirm arrival, departure and all-aboard times with your cruise line.",
  },
  {
    question: "Where do cruise ships berth in Volos?",
    answer:
      "Cruise ships typically use passenger facilities along Volos’s Pagasetic Gulf waterfront. Walking time into the promenade and centre is often realistic for many guests; follow terminal signage on the day.",
  },
  {
    question: "Is a Volos call long enough for Meteora or Mount Pelion?",
    answer:
      "A full day in port can support a cruise-timed private Meteora excursion, but road time across Thessaly is substantial. Mount Pelion villages usually fit a solid half day. Shorter calls are better suited to waterfront walking and the city centre.",
  },
];

const SCHEDULE_TIPS = [
  "Confirm all-aboard time rather than relying only on the published departure",
  "Allow a generous buffer when returning from Meteora across the Thessaly plains",
  "Keep a lighter Plan B (Volos on foot or nearer Pelion) if your call is shortened",
  "The waterfront is close — independent exploration works well on shorter windows",
  "Never risk missing the ship for an inland itinerary that cannot guarantee return",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "volos",
    name: "Volos",
    country: "Greece",
    seoTitle: "Volos Cruise Ship Schedule — Mainland Greece Port Calls",
    metaDescription:
      "Volos cruise ship schedule framework for planning waterfront walks, Mount Pelion and Meteora when hours allow. Confirmed calls publish when verified.",
    intro:
      "Volos is a Pagasetic Gulf harbour city — and a gateway to Mount Pelion and Meteora when your hours ashore allow.",
    description:
      "Mainland Greece harbour city with access to the Argonauts waterfront, Mount Pelion villages and long inland journeys toward Meteora.",
    scheduleOverview:
      "Verified published calls for this planning window. Always confirm arrival, departure and all-aboard times with your cruise line.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  volos: volosSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((port) => port.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((port) => port.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getScheduleMonths(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function getScheduleYears(slug: string): ScheduleYear[] {
  const years = new Set<ScheduleYear>();
  for (const entry of getScheduleEntries(slug)) {
    const y = Number(entry.date.slice(0, 4)) as ScheduleYear;
    if (y) years.add(y);
  }
  return [...years].sort();
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const normalised = query.toLowerCase().trim();
  if (!normalised) return [];

  return schedulePorts
    .map((port) => ({
      portSlug: port.slug,
      entries: getScheduleEntries(port.slug).filter(
        (entry) =>
          entry.ship.toLowerCase().includes(normalised) ||
          entry.cruiseLine.toLowerCase().includes(normalised),
      ),
    }))
    .filter((result) => result.entries.length > 0);
}

export function getTodayTomorrowEntries(slug: string): {
  today: ScheduleEntry[];
  tomorrow: ScheduleEntry[];
} {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dateKey = (date: Date) => date.toISOString().slice(0, 10);

  return {
    today: entries.filter((entry) => entry.date === dateKey(today)),
    tomorrow: entries.filter((entry) => entry.date === dateKey(tomorrow)),
  };
}
