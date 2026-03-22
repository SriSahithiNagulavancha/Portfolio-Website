import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-sm transition duration-300 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 light:text-cyan-700">
            About Me
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl light:text-slate-900">
            Building clean, responsive, modern web experiences
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg light:text-slate-600">
            I am Sri Sahithi Nagulavancha, a web developer focused on creating
            responsive, user-friendly, and visually appealing websites.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400 light:text-slate-500">
            My goal is to keep improving as a frontend developer, build
            real-world projects, and create websites that look professional and
            perform well across devices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;