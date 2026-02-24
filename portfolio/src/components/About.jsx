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
            Engineering with clarity, intention, and real-world impact.
          </h2>
          <p className="text-base text-slate-200">
            I approach software engineering as a system of thoughtful choices. From
            problem framing to delivery, I prioritize clean architecture, predictable
            performance, and maintainable codebases. I enjoy turning ambiguity into
            focused roadmaps and building products that remain resilient as they grow.
          </p>
          <p className="text-base text-slate-200">
            My work blends front-end craft with backend rigor. Whether I'm optimizing
            a complex React interface or designing Spring Boot services, I rely on
            strong engineering principles and a bias for pragmatic solutions.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Product strategy", "System design", "UX clarity"].map((pill) => (
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
