import { motion } from "framer-motion";

import { ExternalLink, Github, Globe, ListTodo, CloudSun } from "lucide-react";

import portfolioImg from "../assets/projects/portfolio.png";
import todoImg from "../assets/projects/to-do list.png";
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.12)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent light:from-slate-900/20 light:via-transparent light:to-transparent" />

                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/30">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-300 light:text-slate-900 light:group-hover:text-cyan-700">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400 light:text-slate-600">
                    {project.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/30 light:border-slate-200 light:bg-slate-100 light:text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 light:border-slate-300 light:bg-slate-50 light:text-slate-900 light:hover:bg-slate-100"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
