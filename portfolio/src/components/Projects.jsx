import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "TURATH.ai: RAG System for Cultural Heritage",
    description:
      "AI-powered system developed during a hackathon to preserve Hassani cultural heritage. Features an intelligent conversational agent using LLaMA 3.1 and ChromaDB for accurate knowledge retrieval with a modern Next.js interface.",
    tags: ["Next.js 16", "Spring Boot", "LLaMA 3.1", "ChromaDB", "RAG", "AI"],
    github: "https://github.com/yosayman/TURATH.ai.git",
    demo: null,
  },
  {
    title: "Decentralized Library DApp",
    description:
      "Decentralized library application on Ethereum featuring role management, reputation system, 7-day borrowing logic, and book covers hosted on IPFS.",
    tags: ["React", "Solidity", "Ethereum", "IPFS", "Truffle"],
    github: "https://github.com/ayoubkad/ApplicationeDcentraliser.git",
    demo: null,
  },
  {
    title: "Student DB Engine",
    description:
      "Custom in-memory database engine built in C implementing linked lists, hash tables, and BSTs with full CRUD, undo/redo, and binary persistence.",
    tags: ["C", "Data Structures", "Hashing", "BST", "CLI"],
    github: "https://github.com/ayoubkad/Mini-Database.git",
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
            Selected work that blends product strategy with engineering execution.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="reveal group flex h-full flex-col rounded-3xl border border-white/10 bg-[#0f3e4c]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f2c261]/50"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-1">
                <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#d79b2e] to-[#f2c261]" />
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
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
              <div className="mt-6 flex items-center gap-4 text-sm">
                <a
                  className="inline-flex items-center gap-2 font-semibold text-[#f2c261] transition hover:text-[#ffd98a]"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
