import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Analyze",
    description:
      "We start with a thorough review of your current workflows, fleet structure, and compliance requirements — so we understand exactly what your operation needs before we touch anything.",
  },
  {
    number: "02",
    title: "Connect & configure",
    description:
      "We onboard your aircraft, component trees, crew certifications, and existing systems. NxtMRO integrates with your CMMS, ERP, and flight ops tools via API or file import.",
  },
  {
    number: "03",
    title: "Go live",
    description:
      "Your team starts working from digital job cards, compliance closes automatically, and the platform begins learning your operation's patterns from day one.",
  },
  {
    number: "04",
    title: "Maintain & improve",
    description:
      "After go-live, our team keeps working with you — providing support, refining workflows, and continuously improving the platform as your operation evolves.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Up and running in days, not months.
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            Our aviation specialists handle the heavy lifting. You focus on
            flying.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          {/* Route line connecting waypoints, desktop only */}
          <div className="hidden lg:block absolute top-[15px] left-[15px] right-[15px] h-px bg-line-strong" />

          <div className="grid lg:grid-cols-4 gap-x-6 gap-y-10">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Waypoint marker, desktop */}
                <div className="hidden lg:flex relative z-10 w-[30px] h-[30px] rounded-full bg-paper border-2 border-amber items-center justify-center mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                </div>

                {/* Mobile connector */}
                {i > 0 && (
                  <div className="lg:hidden absolute -top-6 left-[13px] w-px h-5 bg-line-strong" />
                )}

                <span className="font-mono text-xs text-amber-text tracking-wider">
                  {step.number}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
