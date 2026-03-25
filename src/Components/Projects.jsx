import { motion } from "framer-motion";

import { ExternalLink, Github, Globe, ListTodo, CloudSun } from "lucide-react";

import { fadeUp, staggerContainer } from "../utils/animations";

import portfolioImg from "../assets/projects/portfolio.png";
import todoImg from "../assets/projects/to-do-list.png";
import weatherImg from "../assets/projects/weather.png";


function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built to showcase my projects, skills, and contact information.",
      tech: ["React", "Tailwind", "Vite"],
      live: "https://professionalportfolio-website.netlify.app/",
      code: "https://github.com/SriSahithiN/Portfolio-Website",
      image: portfolioImg,
      icon: Globe,
    },
    {
      title: "To Do List App",
      desc: "A task management app for creating, managing, and tracking daily tasks efficiently.",
      tech: ["JavaScript", "DOM"],
      live: "https://srisahithi-todolist.netlify.app/",
      code: "https://github.com/SriSahithiN/To-Do-List-App",
      image: todoImg,
      icon: ListTodo,
    },
    {
      title: "Weather App",
      desc: "A weather forecast application using public API data and asynchronous JavaScript.",
      tech: ["API", "Async JavaScript"],
      live: "https://srisahithi-weatherapp.netlify.app/",
      code: "https://github.com/SriSahithiN/Weather-App",
      image: weatherImg,
      icon: CloudSun,
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 light:text-cyan-700">
          Projects
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl light:text-slate-900">
          Some things I&apos;ve built
        </h2>

        <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
         className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent " />

                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/30">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300 light:text-slate-900 ">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 light:text-slate-600">
                    {project.desc}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <a href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:scale-[1.03] active:scale-[0.97] hover:bg-cyan-400"
                  >
                    Live
                  </a>

                   <a href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 px-4 py-2 text-sm text-white transition hover:scale-[1.03] active:scale-[0.97] hover:bg-white/10 light:border-slate-300 light:text-slate-900"
                  >
                    Code
                  </a>
                </div>
              </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
