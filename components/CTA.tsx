import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 md:py-24 bg-paper border-t border-line">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">
          Ready to modernize your <span className="text-amber-text">MRO</span>?
        </h2>

        <p className="mt-5 text-lg text-ink-muted leading-relaxed">
          Tell us about your operation. We&apos;ll show you exactly how
          NxtMRO fits — no generic demos, no pressure.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://www.nxtmro.app/login"
            className="font-display font-semibold text-base bg-amber hover:bg-amber-strong text-ink px-8 py-3.5 rounded-md transition-colors"
          >
            Get started
          </Link>
          <a
            href="mailto:info@nxtmro.com"
            className="font-medium text-base text-ink hover:text-amber-text px-8 py-3.5 rounded-md border border-line hover:border-amber transition-colors"
          >
            Request a demo
          </a>
        </div>
      </div>
    </section>
  );
}
