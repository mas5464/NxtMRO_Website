const navLinks = [
  { href: "#features", label: "Platform" },
  { href: "#ai", label: "AI" },
  { href: "#how-it-works", label: "Process" },
  { href: "#compliance", label: "Compliance" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-panel">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <span className="font-display text-2xl font-bold text-paper-on-panel tracking-tight">
              Nxt<span className="text-amber-text">MRO</span>
            </span>
            <p className="mt-3 text-sm text-paper-on-panel-muted max-w-xs leading-relaxed">
              AI-driven maintenance software for airlines that can&apos;t
              afford downtime.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-paper-on-panel-muted hover:text-paper-on-panel transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:info@nxtmro.com"
              className="text-paper-on-panel-muted hover:text-paper-on-panel transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.nxtmro.app/login"
              className="text-paper-on-panel-muted hover:text-paper-on-panel transition-colors"
            >
              Log in
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-panel-line">
          <p className="text-xs text-paper-on-panel-muted">
            © {new Date().getFullYear()} NxtMRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
