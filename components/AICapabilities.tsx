import Reveal from "./Reveal";

const supporting = [
  {
    title: "Intelligent scheduling",
    body: "Our scheduling engine balances aircraft availability, mechanic qualifications, parts stock, and slot constraints simultaneously — producing efficient maintenance plans in seconds instead of hours.",
  },
  {
    title: "Natural language interface",
    body: "Query fleet status, pull compliance reports, or open a work order in plain language. It understands aviation terminology, so nobody needs training to use it.",
  },
  {
    title: "Anomaly detection",
    body: "FDM feeds, borescope images, and ACARS messages are analyzed continuously. Deviations are flagged and routed to the right technician while there's still time to act.",
  },
];

export default function AICapabilities() {
  return (
    <section id="ai" className="py-24 md:py-28 bg-paper-raised border-y border-line">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Built to think, not just track.
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            NxtMRO doesn&apos;t just digitize your processes — it learns from
            them and keeps improving your operation automatically.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          {/* Dominant capability */}
          <div className="lg:col-span-7 bg-paper border border-line rounded-lg p-8 md:p-10">
            <div className="grid sm:grid-cols-2 gap-8 sm:items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink leading-snug">
                  Catch failures before they happen
                </h3>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  Our models analyze sensor data, historical maintenance
                  records, and manufacturer bulletins to flag components
                  trending toward failure — early enough for your team to act
                  before the AOG, not after.
                </p>
              </div>
              <RadarDiagram />
            </div>
          </div>

          {/* Supporting capabilities */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-line">
            {supporting.map((item) => (
              <div key={item.title} className="py-6 first:pt-0 last:pb-0">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RadarDiagram() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full max-w-[220px] mx-auto instrument-settle"
      role="img"
      aria-label="Diagram of concentric detection rings with flagged points"
    >
      <g stroke="var(--color-line-strong)" strokeWidth="1" fill="none">
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="30" />
        <line x1="10" y1="100" x2="190" y2="100" />
        <line x1="100" y1="10" x2="100" y2="190" />
      </g>

      {/* perimeter ticks */}
      <g stroke="var(--color-ink-faint)" strokeWidth="1">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const x1 = 100 + Math.cos(angle) * 90;
          const y1 = 100 + Math.sin(angle) * 90;
          const x2 = 100 + Math.cos(angle) * 84;
          const y2 = 100 + Math.sin(angle) * 84;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>

      {/* sweep wedge */}
      <path
        d="M100,100 L100,10 A90,90 0 0,1 163,37 Z"
        fill="var(--color-amber)"
        fillOpacity="0.12"
      />
      <line x1="100" y1="100" x2="163" y2="37" stroke="var(--color-amber)" strokeWidth="1.5" />

      {/* flagged points */}
      <circle cx="132" cy="150" r="3.5" fill="var(--color-amber)" />
      <circle cx="70" cy="70" r="3.5" fill="var(--color-amber)" />
      <circle cx="60" cy="130" r="3" fill="var(--color-ink-faint)" />
    </svg>
  );
}
