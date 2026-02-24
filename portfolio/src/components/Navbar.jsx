import { Download } from "lucide-react";

export default function Navbar({ links }) {
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
              className="transition hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d79b2e] to-[#f2c261] px-4 py-2 text-xs font-semibold text-[#0b2f3a] shadow-lg shadow-[#d79b2e]/30 transition hover:-translate-y-0.5"
          href="/resume.pdf"
          download
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </div>
    </nav>
  );
}
