"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Is NxtMRO a good fit for my airline?",
    a: "NxtMRO works for operators of any size — from regional carriers with a handful of aircraft to large fleets. If your team is still managing maintenance on spreadsheets or a legacy CMMS, we're built for you.",
  },
  {
    q: "How long does implementation take?",
    a: "Timelines depend on fleet size and how many systems we're integrating with. A dedicated specialist handles data migration, system integration, and crew training, so your team isn't doing it alone.",
  },
  {
    q: "Can NxtMRO integrate with our existing systems?",
    a: "We integrate with ERP platforms, flight operations systems, and ACARS providers via REST API or file import. If you run a niche system, our team will assess compatibility during onboarding.",
  },
  {
    q: "Is our data secure?",
    a: "Security is built into the platform's architecture, with role-based access so technicians, planners, and auditors only see what applies to them. We'll walk through our current security posture and certifications in detail during a technical review.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Every customer has a support contact, and enterprise accounts get a named account manager with priority escalation for critical issues.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-24 bg-paper">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">
            Questions you might have.
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-line border-t border-b border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <button
                  className="w-full text-left py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-ink text-base">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 text-amber-text text-xl leading-none transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-ink-muted leading-relaxed max-w-xl">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
