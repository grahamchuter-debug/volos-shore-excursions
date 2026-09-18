import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CruisePlanner } from "@/components/CruisePlanner";

const path = "/cruise-planner";
const description =
  "Build a personalised Volos cruise plan. Enter your port times, party size, interests, mobility, budget and travel style for tailored mainland Greece recommendations.";

export const metadata = buildMetadata({
  title: "Volos Cruise Planner — Mainland Greece Port Day Itinerary",
  description,
  path,
  keywords: ["Volos cruise planner", "mainland Greece cruise day plan", "Volos port day itinerary", "Meteora from Volos planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Volos Cruise Planner", path },
];

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Volos Cruise Planner", description, path })]} />
      <PageHero
        title="Volos Cruise Planner"
        subtitle="Tell us your ship's hours ashore, who is travelling and what you enjoy — get editorial recommendations for Mount Pelion, Meteora, Volos waterfront and independent days."
        compact
      />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <CruisePlanner />
        </div>
      </section>
    </>
  );
}
