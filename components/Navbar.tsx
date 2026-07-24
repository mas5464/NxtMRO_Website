"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Platform" },
  { href: "#ai", label: "AI" },
  { href: "#how-it-works", label: "Process" },
  { href: "#compliance", label: "Compliance" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-[6px] bg-[#1c1a17] flex items-center justify-center shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 32 32"
              fill="none"
              stroke="var(--color-amber)"
              strokeWidth="5"
              strokeLinecap="round"
            >
              <path d="M6 27V5" />
              <path d="M26 27V5" />
              <path d="M6 5l20 22" />
              <path d="M6 27 18 13.8" />
            </svg>
          </div>
          <span className="font-display text-2xl font-bold tracking-tight text-ink">
            Nxt<span className="text-amber-text">MRO</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-muted hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.nxtmro.app/login"
            className="text-sm font-medium text-ink-muted hover:text-ink transition-colors px-4 py-2"
          >
            Log in
          </a>
          <a
            href="https://www.nxtmro.app/login"
            className="text-sm font-display font-semibold tracking-wide bg-amber hover:bg-amber-strong text-ink px-5 py-2 rounded-md transition-colors"
          >
            Get started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink-muted hover:text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper border-t border-line px-6 py-4 flex flex-col gap-4 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.nxtmro.app/login"
            className="font-display font-semibold bg-amber text-ink px-5 py-2.5 rounded-md text-center mt-1"
          >
            Log in
          </a>
        </div>
      )}
    </header>
  );
}
