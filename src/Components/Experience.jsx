import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "../utils/animations";

function Experience() {
  const items = [
    {
      title: "Frontend Developer (Self Projects)",
      company: "Personal Projects",
      time: "2024 – Present",
      desc: "Built responsive web applications using React, Tailwind CSS, and JavaScript. Focused on UI design, performance, and clean code practices.",
    },
    {
      title: "B.Tech / Degree",
      company: "Your College Name",
      time: "2020 – 2024",
      desc: "Studied core computer science concepts including programming, web development, and data structures.",
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
      
        <p className="text-sm font-semibold uppercase tracking-[0.2rem] text-cyan-400 light:text-cyan-700">
                 Experience
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl light:text-slate-900">
          My Journey so far
        </h2>

                            {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mt-10 border-l border-white/10 pl-8 light:border-slate-200 "
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative mb-10"
            >
                               {/*    Dot   */}
              <div className="absolute -left-[42px] top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.35)] light:border-white light:bg-cyan-500"/>
                          
                              {/*  Card */}
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]">

                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">

                  <h3 className="text-xl font-semibold text-white light:text-slate-900">
                    {item.title}
                  </h3>

                  <span className="text-sm font-medium text-cyan-400 light:text-cyan-700">
                    {item.time}
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-400 light:text-slate-600">
                  {item.company}
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400 light:text-slate-600">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
