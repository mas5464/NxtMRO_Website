import Reveal from "./Reveal";

const ledger = [
  { label: "Airworthiness directives", detail: "Tracked to closure" },
  { label: "Component sign-offs", detail: "Technician + timestamp" },
  { label: "Inspection intervals", detail: "Flagged before due" },
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-24 bg-paper-raised border-y border-line">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight max-w-lg">
              Compliance you can prove, not just claim.
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed max-w-lg">
              Every job card sign-off, AD closure, and inspection is
              timestamped, attributed to the certifying technician, and
              linked to the component it touched. When an auditor asks for
              the history on a part, you pull one record with the full chain
              attached — not a stack of binders.
            </p>

            <dl className="mt-9 divide-y divide-line border-t border-line max-w-lg">
              {ledger.map((item) => (
                <div
                  key={item.label}
                  className="py-4 flex items-baseline justify-between gap-4"
                >
                  <dt className="font-display text-sm font-semibold text-ink">
                    {item.label}
                  </dt>
                  <dd className="font-mono text-xs text-ink-muted text-right shrink-0">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="lg:col-span-6">
            <LedgerDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function LedgerDiagram() {
  const nodes = [40, 100, 160, 220, 280, 340];
  return (
    <svg
      viewBox="0 0 300 380"
      className="w-full h-auto max-w-xs mx-auto instrument-settle"
      role="img"
      aria-label="Diagram of a vertical audit-trail ledger with signed and pending entries"
    >
      <g stroke="var(--color-amber)" strokeWidth="2" fill="none">
        <path d="M14,36 L14,16 L34,16" />
        <path d="M266,16 L286,16 L286,36" />
        <path d="M286,344 L286,364 L266,364" />
        <path d="M34,364 L14,364 L14,344" />
      </g>

      <line x1="60" y1="30" x2="60" y2="350" stroke="var(--color-line-strong)" strokeWidth="1.5" />

      {nodes.map((y, i) => {
        const closed = i < 4;
        return (
          <g key={y}>
            <circle
              cx="60"
              cy={y}
              r="7"
              fill={closed ? "var(--color-amber)" : "var(--color-paper)"}
              stroke={closed ? "var(--color-amber)" : "var(--color-ink-faint)"}
              strokeWidth="1.5"
            />
            {closed && (
              <path
                d={`M56,${y} l3,3.5 l6,-7`}
                stroke="var(--color-paper-raised)"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
            <line
              x1="72"
              y1={y}
              x2="110"
              y2={y}
              stroke="var(--color-line-strong)"
              strokeWidth="1.5"
            />
            <rect
              x="112"
              y={y - 12}
              width="150"
              height="24"
              rx="3"
              fill="var(--color-paper)"
              stroke="var(--color-line-strong)"
              strokeWidth="1.5"
            />
          </g>
        );
      })}
    </svg>
  );
}
