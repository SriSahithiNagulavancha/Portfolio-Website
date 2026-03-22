import { useState } from "react";

import { motion } from "framer-motion";

import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formNote, setFormNote] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormNote("✅ Message saved (demo). We can connect real email next.");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 light:text-cyan-700">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl light:text-slate-900">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 light:text-slate-600">
            If you&apos;d like to work together, send a message or connect with
            me through my socials.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl transition duration-300 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
          >
            <h3 className="text-2xl font-semibold text-white light:text-slate-900">
              Social Links
            </h3>
            <p className="mt-2 text-slate-400 light:text-slate-600">
              Quick ways to reach me
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="https://github.com/SriSahithiN"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sri-sahithi-nagulavancha-2000/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              `
              <a
                href="mailto:nsahithi2000@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl transition duration-300 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
          >
            <h3 className="text-2xl font-semibold text-white light:text-slate-900">
              Send a Message
            </h3>
            <p className="mt-2 text-slate-400 light:text-slate-600">
              This form can be connected later with EmailJS or Formspree.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300 light:text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 light:border-slate-300 light:bg-white light:text-slate-900 light:placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300 light:text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 light:border-slate-300 light:bg-white light:text-slate-900 light:placeholder:text-slate-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300 light:text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 light:border-slate-300 light:bg-white light:text-slate-900 light:placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] hover:bg-cyan-400 hover:shadow-[0_16px_40px_rgba(34,211,238,0.25)]"
              >
                Send Message
              </button>

              {formNote && (
                <p className="text-sm text-emerald-500">{formNote}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
