import Reveal from "./Reveal";

const features = [
  {
    title: "Digital work orders",
    description:
      "Every job card, sign-off, and write-up moves to digital. Mechanics work faster, records stay clean, and nothing falls through the cracks.",
  },
  {
    title: "Parts & inventory",
    description:
      "Live stock levels across every warehouse, with automated reorder points and full shelf-to-aircraft traceability.",
  },
  {
    title: "Regulatory compliance",
    description:
      "Airworthiness directives, recurring inspections, and EASA/FAA requirements tracked automatically — flagged before the deadline, not after.",
  },
  {
    title: "Fleet tracking",
    description:
      "Tail-number-level visibility across the fleet. Component times, cycles, and calendar limits in one live view.",
  },
  {
    title: "Crew & certification",
    description:
      "AME licenses, ratings, and currency managed in one place. Tasks assign by qualification; expiry warnings go out on their own.",
  },
  {
    title: "Analytics & reporting",
    description:
      "TAT, cost-per-flight-hour, and executive KPI views on demand. Export audit-ready records in seconds.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Every MRO workflow, one system of record.
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            From line maintenance to heavy checks, NxtMRO covers the full
            operation — integrated and auditable from day one.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-x-12 border-t border-line">
          {features.map((f, i) => (
            <div key={f.title} className="py-7 border-b border-line flex gap-5">
              <span className="font-mono text-sm text-amber-text pt-1 shrink-0 w-7">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-muted leading-relaxed max-w-md">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
