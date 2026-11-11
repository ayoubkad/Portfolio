import { CheckCircle2 } from "lucide-react";

const highlights = [
  {
    title: "Ingénieur d'État, Computer Engineering",
    text: "FST Errachidia · 2025–2028. Élève-ingénieur d'État.",
  },
  {
    title: "B.Sc. in Software Engineering",
    text: "FST Errachidia · 2024–2025.",
  },
  {
    title: "DEUST, MIP track",
    text: "FST Errachidia · 2023–2024.",
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
            Computer engineering student focused on DevOps, cloud, and platform work.
          </h2>
          <p className="text-base text-slate-200">
            I am an Élève-ingénieur d'État in Computer Engineering at FST
            Errachidia. I am seeking a PFA internship in DevOps, Cloud, or
            Platform Engineering, and I am open to internships across Morocco.
          </p>
          <p className="text-base text-slate-200">
            I build Dockerized multi-service applications, automate CI and
            DevSecOps checks with GitHub Actions, CodeQL, and Qodana, and
            profile application performance. My background includes Linux,
            FastAPI, and Spring Boot.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Arabic · Native",
              "English · Professional working proficiency",
              "French · Intermediate",
            ].map((pill) => (
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
