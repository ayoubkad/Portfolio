import { Code2, Database, GitBranch, Globe, Layers, Server } from "lucide-react";

const stack = [
  {
    name: "React",
    detail: "Component-driven UI engineering",
    icon: Layers,
  },
  {
    name: "Spring Boot",
    detail: "Robust backend services",
    icon: Server,
  },
  {
    name: "JavaScript",
    detail: "ES6+ product logic",
    icon: Code2,
  },
  {
    name: "SQL",
    detail: "Relational data modeling",
    icon: Database,
  },
  {
    name: "REST APIs",
    detail: "Secure system integration",
    icon: Globe,
  },
  {
    name: "Git",
    detail: "Versioned collaboration",
    icon: GitBranch,
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl" data-reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
            Tech Stack
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Tools I rely on to deliver modern, resilient products.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="reveal group rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-[#f2c261]/50 hover:bg-white/10"
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b2f3a] text-[#f2c261] shadow-lg shadow-[#0b2f3a]/50">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
