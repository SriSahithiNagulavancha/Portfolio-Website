import { motion } from "framer-motion";
import { Github, Star, GitFork, Activity } from "lucide-react";
import { fadeUp, staggerContainer } from "../utils/animations";

function GitHubStats() {
  const username = "SriSahithiNagulavancha";

  const stats = [
    {
      title: "GitHub Profile",
      value: `@${username}`,
      icon: Github,
      link: `https://github.com/${username}`,
    },
    {
      title: "Projects",
      value: "Portfolio + Apps",
      icon: Star,
      link: `https://github.com/${username}?tab=repositories`,
    },
    {
      title: "Open Source",
      value: "Learning & Building",
      icon: GitFork,
      link: `https://github.com/${username}`,
    },
    {
      title: "Activity",
      value: "Consistent Practice",
      icon: Activity,
      link: `https://github.com/${username}`,
    },
  ];

  return (
    <section id="github" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 light:text-cyan-700">
          GitHub
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl light:text-slate-900">
          Code and contribution highlights
        </h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                variants={fadeUp}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-white light:text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
                  {item.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-sm light:border-slate-200 light:bg-white">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8&icon_color=22d3ee`}
              alt="GitHub stats"
              className="w-full rounded-2xl"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-sm light:border-slate-200 light:bg-white">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=22d3ee&text_color=94a3b8`}
              alt="Top languages"
              className="w-full rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHubStats;