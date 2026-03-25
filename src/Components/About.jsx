import { motion } from "framer-motion";

import { fadeUp } from "../utils/animations";

function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show">
          <h2 className="text-3xl font-bold text-white md:text-4xl light:text-slate-900">
            Building modern, clean and responsive web experiences.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 light:text-slate-600">
            I am Sri Sahithi Nagulavancha, a frontend-focused web developer
            passionate about creating visually appealing and user-friendly
            applications.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 light:text-slate-600">
            I enjoy turning ideas into real-world projects using React, Tailwind
            CSS, and modern web technologies while continuously improving my
            skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
