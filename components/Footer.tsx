const links = {
  Platform: ["Features", "AI Capabilities", "Compliance", "Integrations", "Security"],
  Company: ["About", "Careers", "Press", "Contact"],
  Resources: ["Documentation", "API Reference", "Status Page", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-black text-white tracking-tight">
              Nxt<span className="text-blue-400">MRO</span>
            </span>
            <p className="text-slate-500 text-sm mt-3 leading-relaxed">
              The AI-powered MRO platform for modern airlines.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} NxtMRO. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            FAA · EASA · ICAO compliant platform. Aviation-grade security.
          </p>
        </div>
      </div>
    </footer>
  );
}
