const steps = [
  {
    number: "01",
    title: "Connect Your Fleet",
    description:
      "Onboard your aircraft registrations, component trees, and historical maintenance records. NxtMRO integrates with existing CMMS, ERP, and flight ops systems via REST APIs or file imports.",
  },
  {
    number: "02",
    title: "Configure Your Operation",
    description:
      "Define your stations, hangars, crew certifications, and approval workflows. Set compliance rules by regulation, aircraft type, and operator-specific requirements.",
  },
  {
    number: "03",
    title: "Let AI Optimize",
    description:
      "NxtMRO's models go to work — learning your operation's patterns, building predictive baselines, and surfacing proactive recommendations to your planning and technical teams.",
  },
  {
    number: "04",
    title: "Execute & Improve",
    description:
      "Mechanics work from digital job cards, compliance records close automatically, and every completed task makes the model smarter. Your MRO operation continuously improves.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Getting Started
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Up and running{" "}
            <span className="text-slate-400">in days, not months</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our onboarding team gets your operation live fast — with dedicated
            aviation-domain specialists who understand your workflows.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col gap-4">
                {/* Number */}
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-400 font-black text-lg">{step.number}</span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow connector for mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-start">
                    <svg className="w-5 h-5 text-slate-600 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
