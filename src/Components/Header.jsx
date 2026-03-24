import { motion } from "framer-motion";

function Header() {
  return (
    <header
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 transition-colors duration-300 light:border-slate-200 light:from-white light:via-slate-50 light:to-sky-50"
    >
      <div className="absolute inset-0">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl light:bg-cyan-300/30" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl light:bg-orange-200/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl px-4 text-center"
      >
        
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400 light:text-cyan-700">
          Web Developer Portfolio
        </p>

        <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white md:text-6xl light:text-slate-900">
          Sri Sahithi
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent light:from-cyan-600 light:to-blue-700">
            Nagulavancha
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg light:text-slate-600">
          Frontend-focused web developer building responsive, modern, and
          user-friendly web applications using JavaScript, React, and MERN.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">

          <a
            href="#projects"
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-cyan-400 hover:shadow-[0_16px_40px_rgba(34,211,238,0.25)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-white/10 light:border-slate-300 light:bg-white light:text-slate-900 light:hover:bg-slate-100"
          >
            Contact Me
          </a>

          <a
            href="/assets/SriSahithiN-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-white/10 light:border-slate-300 light:bg-white light:text-slate-900 light:hover:bg-slate-100"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
}

export default Header;