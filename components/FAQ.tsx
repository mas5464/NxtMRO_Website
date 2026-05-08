"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is NxtMRO a good fit for my airline?",
    a: "NxtMRO works for operators of any size — from regional carriers with 10 aircraft to large fleets of 200+. If your team is still managing maintenance on spreadsheets or a legacy CMMS, we're built for you.",
  },
  {
    q: "How long does implementation take?",
    a: "Most customers are fully live in 30–60 days. We assign a dedicated implementation specialist who handles data migration, system integration, and crew training — so your team isn't doing it alone.",
  },
  {
    q: "Can NxtMRO integrate with our existing systems?",
    a: "Yes. We integrate with major ERP platforms, flight operations systems, and ACARS providers via REST API or file import. If you use a niche system, our team will assess compatibility during onboarding.",
  },
  {
    q: "Is our data secure?",
    a: "NxtMRO is SOC 2 Type II certified and hosted on enterprise-grade infrastructure with end-to-end encryption. Your maintenance records and fleet data are never shared with third parties.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Every plan includes dedicated support with guaranteed response times. Enterprise customers get a named account manager and priority escalation for critical issues.",
  },
  {
    q: "Can we cancel at any time?",
    a: "Absolutely. We don't believe in locking customers in. You can cancel or pause your subscription at any time — no penalties, no fine print.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Answers
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Questions you might have.
          </h2>
          <p className="text-slate-400 text-lg">
            We&apos;ve gone ahead and answered the ones we hear most.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-semibold text-sm md:text-base">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
