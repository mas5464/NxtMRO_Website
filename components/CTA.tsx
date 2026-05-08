import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-blue-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide uppercase">
          Ready to modernize your MRO?
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Your fleet deserves{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            intelligent maintenance
          </span>
        </h2>

        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Join the operators who've moved beyond spreadsheets and legacy CMMS systems.
          NxtMRO is the MRO platform built for what's next.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/login"
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-10 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5"
          >
            Log In to NxtMRO →
          </Link>
          <a
            href="mailto:info@nxtmro.com"
            className="text-slate-300 hover:text-white font-semibold text-base px-10 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-200"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
