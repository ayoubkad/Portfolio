import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 text-sm text-slate-300 md:flex-row md:items-center">
        <div>
          <p className="text-base font-semibold text-white">Ayoub Kaddioui</p>
          <p className="mt-2 text-xs text-slate-400">
            State Engineer in Software Engineering.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a className="transition hover:text-white" href="#about">
            About
          </a>
          <a className="transition hover:text-white" href="#stack">
            Stack
          </a>
          <a className="transition hover:text-white" href="#projects">
            Projects
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-[#f2c261]/60 hover:text-white"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-[#f2c261]/60 hover:text-white"
            href="https://github.com/ayoubkad"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:border-[#f2c261]/60 hover:text-white"
            href="mailto:ayoub.kaddioui.eng@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
