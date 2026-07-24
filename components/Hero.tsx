import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-paper pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          {/* Copy */}
          <div className="md:col-span-7">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-ink leading-[1.05] tracking-tight max-w-2xl">
              Predict failures. Automate compliance. Keep flying.
            </h1>

            <p className="mt-6 text-lg text-ink-muted max-w-xl leading-relaxed">
              NxtMRO is the AI-driven MRO platform for line maintenance and heavy
              checks alike — work orders, parts, and compliance tracking in one
              system built around FAA and EASA workflows.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href="https://www.nxtmro.app/login"
                className="font-display font-semibold text-base bg-amber hover:bg-amber-strong text-ink px-7 py-3.5 rounded-md transition-colors text-center"
              >
                Get started
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-1.5 text-base font-medium text-ink hover:text-amber-text px-7 py-3.5 rounded-md border border-line hover:border-amber transition-colors"
              >
                See the platform
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Technical diagram */}
          <div className="md:col-span-5 instrument-settle">
            <AircraftDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function AircraftDiagram() {
  return (
    <svg
      viewBox="0 0 340 420"
      className="w-full h-auto max-w-sm mx-auto"
      role="img"
      aria-label="Technical top-view diagram of an aircraft with station reference lines"
    >
      {/* Graticule frame + corner ticks */}
      <g stroke="var(--color-amber)" strokeWidth="2" fill="none">
        <path d="M20,42 L20,18 L44,18" />
        <path d="M296,18 L320,18 L320,42" />
        <path d="M320,378 L320,402 L296,402" />
        <path d="M44,402 L20,402 L20,378" />
      </g>

      {/* Station reference lines */}
      <g stroke="var(--color-line-strong)" strokeWidth="1" strokeDasharray="3 4">
        <line x1="40" y1="70" x2="300" y2="70" />
        <line x1="40" y1="330" x2="300" y2="330" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-ink-faint)">
        <text x="252" y="66">STA 070</text>
        <text x="248" y="344">STA 330</text>
      </g>

      {/* Heading tick arc */}
      <g stroke="var(--color-line-strong)" strokeWidth="1" fill="none">
        <path d="M280,50 A40,40 0 0 1 300,80" />
      </g>
      <text x="284" y="46" fontFamily="var(--font-mono)" fontSize="9" fill="var(--color-ink-faint)">
        360
      </text>

      {/* Wings */}
      <g fill="var(--color-ink)" fillOpacity="0.05" stroke="var(--color-ink)" strokeWidth="1.5">
        <path d="M150,175 L25,255 L25,272 L150,235 Z" />
        <path d="M190,175 L315,255 L315,272 L190,235 Z" />
      </g>

      {/* Horizontal stabilizers */}
      <g fill="var(--color-ink)" fillOpacity="0.05" stroke="var(--color-ink)" strokeWidth="1.5">
        <path d="M155,345 L100,380 L100,390 L155,365 Z" />
        <path d="M185,345 L240,380 L240,390 L185,365 Z" />
      </g>

      {/* Fuselage */}
      <path
        d="M170,20 C158,20 150,45 150,70 L150,330 C150,360 158,385 170,392 C182,385 190,360 190,330 L190,70 C190,45 182,20 170,20 Z"
        fill="var(--color-paper-raised)"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
      />

      {/* Engines */}
      <g fill="var(--color-amber)">
        <ellipse cx="95" cy="228" rx="15" ry="6.5" />
        <ellipse cx="245" cy="228" rx="15" ry="6.5" />
      </g>

      {/* Forward marker */}
      <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--color-ink-faint)">
        <text x="176" y="15">FWD</text>
      </g>
      <line x1="170" y1="0" x2="170" y2="14" stroke="var(--color-ink-faint)" strokeWidth="1" />
    </svg>
  );
}
