import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, CheckCircle, AlertTriangle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

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
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        setSubmitError("Configuration EmailJS incomplète. Vérifiez les variables d'environnement.");
        return;
      }

      setIsSending(true);
      setSubmitError(null);
      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: form.name,
            to_name: "Ayoub",
            from_email: form.email,
            user_name: form.name,
            user_email: form.email,
            name: form.name,
            email: form.email,
            message: form.message,
            reply_to: form.email,
          },
          publicKey
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setIsSending(false);
          },
          (error) => {
            console.error("EmailJS Error:", error);
            setIsSending(false);
            const errorMessage = error.text || JSON.stringify(error) || "Erreur inconnue";
            setSubmitError(`Erreur: ${errorMessage}. Veuillez vérifier la console.`);
          }
        );
    }
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitted) setSubmitted(false);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 relative">
      <div className="mx-auto max-w-6xl px-6">
        {/* Toast Notifications */}
        <div className="fixed left-1/2 top-24 z-50 flex -translate-x-1/2 flex-col gap-4">
            {submitted && (
              <div className="animate-fade-up flex items-start gap-4 rounded-xl border border-green-500/30 bg-[#0b2f3a] p-4 shadow-xl shadow-black/50 backdrop-blur-md">
                <div className="shrink-0 rounded-full bg-green-500/20 p-2 text-green-400">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-green-100">
                    Message envoyé !
                  </h4>
                  <p className="mt-1 text-xs text-green-200/80">
                    Merci ! Je vous répondrai très vite.
                  </p>
                </div>
              </div>
            )}
            {submitError && (
              <div className="animate-fade-up flex items-start gap-4 rounded-xl border border-red-500/30 bg-[#0b2f3a] p-4 shadow-xl shadow-black/50 backdrop-blur-md">
                <div className="shrink-0 rounded-full bg-red-500/20 p-2 text-red-400">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div className="text-xs text-red-200">
                  {submitError}
                </div>
              </div>
            )}
        </div>

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
                href="https://www.linkedin.com/in/ayoubkaddioui"
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
              className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#d79b2e] to-[#f2c261] px-4 py-3 text-sm font-semibold text-[#0b2f3a] shadow-lg shadow-[#d79b2e]/30 transition hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
