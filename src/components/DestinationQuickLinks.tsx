import Link from "next/link";

const VOLOS_LINKS = [
  {
    title: "Tour or independent?",
    description:
      "Honest comparison for Volos cruise passengers — when to walk alone and when a guide helps.",
    href: "/compare/tour-or-independent",
  },
  {
    title: "Best Volos shore excursions",
    description:
      "Our curated launch collection — Editor’s Choice first, with honest trade-offs for every option.",
    href: "/compare/best-shore-excursions",
  },
  {
    title: "Walking from Volos port",
    description:
      "How far the waterfront really is, and how to reach the promenade on foot.",
    href: "/guides/walking-from-port",
  },
  {
    title: "Can you explore independently?",
    description:
      "When a flexible foot day is the better choice — and when organised transport earns its place.",
    href: "/guides/explore-independently",
  },
  {
    title: "First time in Volos",
    description:
      "A practical first-call plan: city walking, Mount Pelion, or Meteora when hours allow.",
    href: "/compare/first-time-volos-day",
  },
  {
    title: "Volos cruise schedules",
    description:
      "Confirmed ship-call data will appear here once schedules are ready for publication.",
    href: "/ship-schedules/volos",
  },
];

export function DestinationQuickLinks() {
  return (
    <section className="section-padding bg-coastal-50 border-t border-coastal-100">
      <div className="container-wide">
        <p className="section-eyebrow">Keep planning</p>
        <h2 className="section-title mt-2">Your Volos planning hub</h2>
        <p className="section-subtitle">
          Use these guides and comparisons to shape a port day that matches your ship hours, energy
          and curiosity — whether you stay in Volos or travel to Pelion and Meteora.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VOLOS_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card-feature group">
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {link.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/guides" className="btn-secondary text-sm">
            All Volos planning guides
          </Link>
        </div>
      </div>
    </section>
  );
}
