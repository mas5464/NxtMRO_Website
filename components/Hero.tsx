import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
          AI-Powered Aviation MRO Platform
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          We built NxtMRO.{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            The MRO platform
          </span>{" "}
          that thinks ahead.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          AI-powered maintenance software built for airlines that can&apos;t afford downtime.
          Predict failures, automate compliance, and keep every tail number airworthy.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Get started
          </Link>
          <a
            href="#features"
            className="text-slate-300 hover:text-white font-semibold text-base px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-200"
          >
            See what we do
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 text-sm">
          {["FAA Compliant", "EASA Certified", "SOC 2 Type II", "99.99% Uptime SLA"].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
