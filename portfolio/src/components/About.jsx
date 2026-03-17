import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "Engineering Principles",
    text: "Solid architecture, clean abstractions, and reliable patterns drive every build.",
  },
  {
    title: "Problem Solving",
    text: "I break down complex challenges into clear steps and measurable wins.",
  },
  {
    title: "Collaboration",
    text: "Transparent communication and shared ownership keep teams aligned and shipping.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="reveal space-y-6" data-reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
            About Me
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Learning with curiosity, building with purpose.
          </h2>
          <p className="text-base text-slate-200">
            I'm an Engineering student at FST Errachidia specializing in Computer Engineering. I built a full-stack Ethereum DApp for my PFE and designed a custom in-memory database engine in C with CI/CD pipelines.
          </p>
          <p className="text-base text-slate-200">
            Outside class, I co-organize tech events at the Bisoft Engineering Club. I love low-level systems as much as modern web tech — and I'm always building something.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Always learning", "Builder mentality", "Detail-oriented"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="reveal rounded-3xl border border-white/10 bg-[#0f3e4c]/70 p-5 transition duration-300 hover:border-[#f2c261]/50"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 text-[#f2c261]" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-200">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
