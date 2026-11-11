const experiences = [
  {
    role: "Backend & Full-Stack Engineering Intern",
    org: "AdoptAI — Helpdesk",
    period: "2026",
    tags: ["Java", "Spring Boot", "React", "Supabase", "PostgreSQL", "REST APIs"],
    points: [
      "Collaborated on deployment and maintenance of Helpdesk, an incident-ticket management platform using Spring Boot, React, and PostgreSQL/Supabase.",
      "Structured backend REST endpoints, database schemas, and service workflows supporting ticket tracking and resolution.",
    ],
  },
  {
    role: "HR Manager & Event Organizer",
    org: "Bisoft Engineering Club",
    period: "2025 – 2026",
    tags: ["FST Errachidia", "Hackathons"],
    points: [
      "Co-organized GitHub Copilot Dev Days and Global AI AgentCamp at FST Errachidia, coordinating operations for 400+ attendees per event.",
      "Hackathons: RallyIA (Merzouga), IBM AI Builders Challenge, and MIATHON'03 (UMP Oujda).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl" data-reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Internship work and student leadership.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {experiences.map((item, index) => (
            <article
              key={item.role}
              className="reveal flex h-full flex-col rounded-3xl border border-white/10 bg-[#0f3e4c]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f2c261]/50"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-2 text-sm text-slate-200">{item.org}</p>
                </div>
                <p className="shrink-0 text-xs uppercase tracking-[0.2em] text-[#f2c261]">
                  {item.period}
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f2c261]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
