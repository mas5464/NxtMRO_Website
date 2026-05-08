const stats = [
  { value: "150+", label: "Aircraft tails managed on platform" },
  { value: "62%", label: "Reduction in average maintenance TAT" },
  { value: "3.2M+", label: "Work orders processed to date" },
  { value: "100%", label: "Customer satisfaction across all deployments" },
];

const testimonials = [
  {
    quote:
      "NxtMRO took our planning team from reactive firefighting to proactive scheduling. We were live in under 60 days and haven't looked back.",
    name: "Director of Maintenance",
    company: "Regional Airline — North America",
  },
  {
    quote:
      "The AI scheduling paid for the platform in the first quarter. Hangar utilization jumped from 68% to 91%. The numbers speak for themselves.",
    name: "VP Technical Operations",
    company: "Charter Operator — Latin America",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Our statistics
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Results that matter.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <p className="text-slate-400 text-xs leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            What our customers say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8"
            >
              <svg className="w-8 h-8 text-blue-500/40 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-slate-300 text-base leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-slate-500 text-xs">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
