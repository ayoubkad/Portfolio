import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "SmartTijara",
    period: "2026 – Present",
    description:
      "Dockerized multi-service AI commerce platform. FastAPI AI services, an API gateway, and background workers handle WhatsApp and Instagram webhook integrations. CI and DevSecOps checks run in GitHub Actions with CodeQL and Qodana. Inter-service retry handling was improved, and multilingual catalog retrieval was evaluated on a fixed 102-query offline benchmark.",
    tags: [
      "Docker",
      "FastAPI",
      "API Gateway",
      "GitHub Actions",
      "CodeQL",
      "Qodana",
      "Evolution API",
      "Gemini",
    ],
    github: "https://github.com/ayoubkad/SmartTijara.git",
    demo: null,
  },
  {
    title: "Custom In-Memory Database Engine",
    period: "2025 – 2026",
    description:
      "In-memory storage engine in C with hash tables, binary search trees, binary disk persistence, and undo/redo recovery. GitHub Actions and CMake provide repeatable builds and automated regression checks.",
    tags: ["C", "CMake", "GitHub Actions", "Linux", "Hash Tables", "BST"],
    github: "https://github.com/ayoubkad/Mini-Database.git",
    demo: null,
  },
  {
    title: "E-Wallet Backend",
    period: "2026 – Present",
    description:
      "Account and transaction services with monetary validation, ledger modeling, and idempotency patterns for reliable request processing.",
    tags: ["Java", "Spring Boot", "JPA/Hibernate", "REST APIs", "SQL"],
    github: null,
    demo: null,
  },
  {
    title: "TURATH.ai",
    period: "2025 – 2026",
    description:
      "Dataset-preparation and LoRA/DoRA fine-tuning workflows for LLaMA 3.1, alongside two-stage RAG retrieval and re-ranking services.",
    tags: ["Python", "LLaMA 3.1", "MLX", "FastAPI", "Hugging Face", "ChromaDB"],
    github: "https://github.com/yosayman/TURATH.ai.git",
    demo: null,
  },
  {
    title: "Decentralized Library DApp",
    period: null,
    description:
      "Decentralized library application on Ethereum featuring role management, a reputation system, 7-day borrowing logic, and book covers hosted on IPFS.",
    tags: ["React", "Solidity", "Ethereum", "IPFS", "Truffle"],
    github: "https://github.com/ayoubkad/ApplicationeDcentraliser.git",
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl" data-reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Selected engineering projects in DevOps, backend, and applied AI.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="reveal group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0f3e4c]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f2c261]/50"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-1">
                <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#d79b2e] to-[#f2c261]" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  {project.period ? (
                    <p className="shrink-0 text-xs uppercase tracking-[0.2em] text-[#f2c261]">
                      {project.period}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-slate-200">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.github || project.demo ? (
                <div className="mt-6 flex items-center gap-4 text-sm">
                  {project.github ? (
                    <a
                      className="inline-flex items-center gap-2 font-semibold text-[#f2c261] transition hover:text-[#ffd98a]"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a
                      className="inline-flex items-center gap-2 font-semibold text-slate-100 transition hover:text-white"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
