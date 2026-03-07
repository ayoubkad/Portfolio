import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Le nom est requis.";
    if (!form.email.trim()) errs.email = "L'email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Email invalide.";
    if (!form.message.trim()) errs.message = "Le message est requis.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitted) setSubmitted(false);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal space-y-6" data-reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
              Contact
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Let's build something purposeful together.
            </h2>
            <p className="text-base text-slate-200">
              Have a product idea, engineering challenge, or collaboration in mind?
              I can help you shape the roadmap, design the architecture, and deliver a
              polished user experience.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-[#f2c261]/50"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4 text-[#f2c261]" />
                LinkedIn
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-[#f2c261]/50"
                href="https://github.com/ayoubkad"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4 text-[#f2c261]" />
                GitHub
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-200 transition hover:border-[#f2c261]/50"
                href="mailto:ayoub.kaddioui.eng@gmail.com"
              >
                <Mail className="h-4 w-4 text-[#f2c261]" />
                Email
              </a>
            </div>
          </div>
          <form
            className="reveal rounded-3xl border border-white/10 bg-[#0f3e4c]/70 p-6 shadow-lg shadow-[#0b2f3a]/50"
            data-reveal
            onSubmit={handleSubmit}
          >
            {submitted && (
              <div className="mb-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                ✓ Message envoyé avec succès !
              </div>
            )}
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Name
                </label>
                <input
                  className={`mt-2 w-full rounded-2xl border bg-[#0b2f3a]/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-[#f2c261]/60 ${
                    errors.name ? "border-red-400/60" : "border-white/10"
                  }`}
                  placeholder="Your name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Email
                </label>
                <input
                  className={`mt-2 w-full rounded-2xl border bg-[#0b2f3a]/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-[#f2c261]/60 ${
                    errors.email ? "border-red-400/60" : "border-white/10"
                  }`}
                  placeholder="you@email.com"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-300">
                  Message
                </label>
                <textarea
                  className={`mt-2 min-h-[140px] w-full resize-none rounded-2xl border bg-[#0b2f3a]/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-[#f2c261]/60 ${
                    errors.message ? "border-red-400/60" : "border-white/10"
                  }`}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>
            </div>
            <button
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#d79b2e] to-[#f2c261] px-4 py-3 text-sm font-semibold text-[#0b2f3a] shadow-lg shadow-[#d79b2e]/30 transition hover:-translate-y-0.5"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
