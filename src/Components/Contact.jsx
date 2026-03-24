import { calcChildStagger, motion } from "framer-motion";

import { useState } from "react";

import { Github, Linkedin, Mail } from "lucide-react";
import { fadeUp, staggerContainer } from "../utils/animations";

function Contact() {
  const [formData, setFormData] = useState ({
    name: "",
    email: "",
    message: "",
  }) 

  const [formNote, setFormNote]= useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormNote("✅ Message saved (demo). Connect EmailJS later.")
    setFormData({ name: "", email: "", message: ""});
  };


  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 light:text-cyan-700">
          Contact
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl light:text-slate-900">
          Let’s work together
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
                            {/*  SOCIAL DIV  */}
            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
            >
              <h3 className="text-xl font-semibold text-white light:text-slate-900">
              Social Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="https://github.com/SriSahithiN"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
              >
                <Linkedin size={18} /> LinkedIn
              </a>

              <a
                href="mailto:nsahithi2000@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-800 hover:shadow-[0_12px_30px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-slate-50 light:text-slate-700 light:hover:bg-slate-100"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </motion.div>

          {/* FORM CARD */}
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
          >
            <h3 className="text-xl font-semibold text-white light:text-slate-900">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400 light:border-slate-300 light:bg-white light:text-slate-900"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400 light:border-slate-300 light:bg-white light:text-slate-900"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none focus:border-cyan-400 light:border-slate-300 light:bg-white light:text-slate-900"
              />

              <button
                type="submit"
                className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-cyan-400 hover:shadow-[0_16px_40px_rgba(34,211,238,0.25)]"
              >
                Send Message
              </button>

              {formNote && (
                <p className="text-sm text-emerald-500">{formNote}</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
