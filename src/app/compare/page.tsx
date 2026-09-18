import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { comparisons, getComparisonDisplayTitle } from "@/data/comparisons";
import { getComparisonImage } from "@/lib/images";

const path = "/compare";
const description =
  "Honest comparisons for Volos cruise passengers — Meteora or Pelion, private or small-group touring, one day in Volos, and the best mainland Greece excursions for different travellers.";

export const metadata = buildMetadata({
  title: "Compare Volos Cruise Options — Meteora, Pelion & City",
  description,
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Compare", path },
];

export default function CompareHubPage() {
  const image = getComparisonImage("tour-or-independent");
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Compare Volos Cruise Options", description, path })]} />
      <PageHero
        title="Compare Volos Cruise Options"
        subtitle="Editorial comparisons to help you choose between Meteora, Mount Pelion, Volos city and different touring styles."
        image={image}
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid gap-4 sm:grid-cols-2">
            {comparisons.map((c) => (
              <Link key={c.slug} href={`/compare/${c.slug}`} className="nav-card group">
                <h2 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                  {getComparisonDisplayTitle(c)}
                </h2>
                <p className="mt-2 text-sm text-gray-600">{c.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
