import { Code2, Database, Layout, GitBranch, Globe } from "lucide-react";

import { fadeUp, staggerContainer } from "../utils/animations";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Frontend", icon: Layout },
    { name: "Javascript", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "Backend", icon: Database },
    { name: "Git & Github", icon: GitBranch },
    { name: "Web", icon: Globe },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 light:text-cyan-700">
          Skills
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl light:text-slate-900">
          Tools and Technologies I Use
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={fadeUp}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_16px_40px_rgba(34,211,238,0.15)] "
              >
                <div className="rounded-xl bg-cyan-500/20 p-2 text-cyan-400 transition duration-300 group-hover:bg-cyan-500/25">
                  <Icon size={20} />
                </div>

                <span className="text-sm text-white light:text-slate-900">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
