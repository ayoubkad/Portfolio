import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import AvailabilityBadge from "./AvailabilityBadge";

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div
            className="reveal inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300"
            data-reveal
          >
            <Sparkles className="h-4 w-4 text-[#f2c261]" />
            DevOps · Cloud · Platform
          </div>
          <div className="reveal" data-reveal>
            <AvailabilityBadge />
          </div>
          <h1
            className="reveal text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            data-reveal
          >
            Hi, I'm Ayoub Kaddioui,
            <span className="block text-[#f2c261]">
              DevOps, Cloud & Platform Engineering.
            </span>
          </h1>
          <p className="reveal text-lg text-slate-200" data-reveal>
            Computer engineering student at FST Errachidia, preparing an
            Ingénieur d'État degree and seeking a PFA internship. I ship
            Dockerized services, automate CI and DevSecOps checks, and build
            APIs with FastAPI and Spring Boot.
          </p>
          <div className="reveal flex flex-wrap items-center gap-4" data-reveal>
            <a
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d79b2e] to-[#f2c261] px-6 py-3 text-sm font-semibold text-[#0b2f3a] shadow-lg shadow-[#d79b2e]/30 transition hover:-translate-y-0.5"
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-[#f2c261]/60 hover:text-white"
              href="#projects"
            >
              View Projects
            </a>
          </div>
          <div
            className="reveal grid max-w-xl grid-cols-2 gap-4 text-sm text-slate-300 sm:grid-cols-3"
            data-reveal
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">PFA</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                Internship
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white"><AnimatedCounter end={5} /></p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                Projects
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold text-white">FST</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                Errachidia
              </p>
            </div>
          </div>
        </div>
        <div className="reveal" data-reveal>
          <div className="relative rounded-3xl border border-white/10 bg-[#0f3e4c]/70 p-6 shadow-xl shadow-[#0b2f3a]/60">
            <div className="absolute -top-10 right-8 h-24 w-24 rounded-full bg-[#d79b2e]/20 blur-2xl" />
            <div className="absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-[#1a6a7e]/30 blur-2xl" />
            <div className="relative space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  My Toolkit
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Docker · GitHub Actions · FastAPI
                </h2>
              </div>
              <div className="space-y-4 text-sm text-slate-200">
                <p>
                  I containerize multi-service applications and automate CI and
                  DevSecOps checks with GitHub Actions, CodeQL, and Qodana.
                </p>
                <p>
                  I also profile application performance, and I build backend
                  services with FastAPI, Spring Boot, and PostgreSQL.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Linux", "Spring Boot", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b2f3a]/70 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-200">
                <ShieldCheck className="h-4 w-4 text-[#f2c261]" />
                PFA in Morocco
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
