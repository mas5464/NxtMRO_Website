const capabilities = [
  {
    tag: "Predictive Intelligence",
    headline: "Catch failures before they happen",
    body: "Our ML models analyze sensor data, historical maintenance records, and manufacturer bulletins to predict component failures up to 72 hours ahead. Your team acts before the AOG — not after.",
    stat: "70% fewer unscheduled removals",
    color: "from-blue-500 to-indigo-500",
  },
  {
    tag: "Intelligent Scheduling",
    headline: "AI that plans your hangar",
    body: "Our scheduling engine balances aircraft availability, mechanic qualifications, parts stock, and slot constraints simultaneously — producing optimal maintenance plans in seconds that would take a planner hours.",
    stat: "40% improvement in hangar utilization",
    color: "from-violet-500 to-purple-500",
  },
  {
    tag: "Natural Language Interface",
    headline: "Ask NxtMRO anything",
    body: "Query fleet status, pull compliance reports, or open a work order in plain language. Our AI understands aviation terminology and returns the right answer instantly — no training required.",
    stat: "5× faster information retrieval",
    color: "from-cyan-500 to-blue-500",
  },
  {
    tag: "Anomaly Detection",
    headline: "Problems flagged before they ground aircraft",
    body: "We continuously analyze FDM feeds, borescope images, and ACARS messages. Deviations are flagged and routed to the right technician automatically — while there's still time to act.",
    stat: "90% reduction in missed defects",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function AICapabilities() {
  return (
    <section id="ai" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            AI capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Built to think,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              not just track.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            NxtMRO doesn&apos;t just digitize your processes — it learns from them, optimizes them, and keeps improving your operation automatically.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.tag}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col gap-4"
            >
              <div>
                <span
                  className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${cap.color} bg-clip-text text-transparent`}
                >
                  {cap.tag}
                </span>
                <h3 className="text-white font-black text-2xl mt-2 mb-3 leading-snug">
                  {cap.headline}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{cap.body}</p>
              </div>

              {/* Stat pill */}
              <div
                className={`self-start mt-2 px-4 py-2 rounded-full bg-gradient-to-r ${cap.color} text-white text-xs font-bold`}
              >
                {cap.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
