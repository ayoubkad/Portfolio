import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

export default function Navbar({ links }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [links]);

  return (
    <nav className="sticky top-4 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0b2f3a]/80 px-6 py-3 backdrop-blur-xl">
        <a className="flex items-center gap-3" href="#top">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#f2c261] to-[#d79b2e] text-sm font-semibold text-[#0b2f3a]">
            AK
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">Ayoub Kaddioui</p>
            <p className="text-xs text-slate-300">Ingénieur d'État</p>
          </div>
        </a>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              className={`transition hover:text-white ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#f2c261] font-semibold"
                  : ""
              }`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d79b2e] to-[#f2c261] px-4 py-2 text-xs font-semibold text-[#0b2f3a] shadow-lg shadow-[#d79b2e]/30 transition hover:-translate-y-0.5"
            href="/CV.pdf"
            download
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download CV</span>
            <span className="sm:hidden">CV</span>
          </a>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b2f3a]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <a
              key={link.href}
              className={`rounded-xl px-4 py-3 text-sm transition hover:bg-white/10 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#f2c261] font-semibold bg-white/5"
                  : "text-slate-200"
              }`}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
