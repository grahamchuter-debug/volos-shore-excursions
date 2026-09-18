/**
 * Featured-tour helpers — Meteora Editor's Choice used for homepage cards / schema.
 */
import { getBookableProduct } from "@/data/bookable-products";

const flagship = getBookableProduct("private-meteora-monasteries");

export const featuredTour = flagship
  ? {
      slug: flagship.slug,
      path: flagship.path,
      bookingPath: flagship.bookingPath,
      cardName: flagship.name,
      fullName: flagship.experienceName,
    }
  : {
      slug: "private-meteora-monasteries",
      path: "/shore-excursions/private-meteora-monasteries",
      bookingPath: "/book/private-meteora-monasteries",
      cardName: "Private Journey from Volos to Meteora Monasteries with Lunch",
      fullName: "Private Journey from Volos to Meteora Monasteries with Lunch",
    };
