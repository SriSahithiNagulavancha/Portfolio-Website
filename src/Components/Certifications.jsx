import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

function Certifications() {
  const certs = [
    {
      title: "Frontend Development",
      provider: "Coursera / Udemy",
      year: "2024",
      link: "#",
    },
    {
      title: "JavaScript Essentials",
      provider: "Udemy",
      year: "2023",
      link: "#",
    },
    {
      title: "Java Full Stack Web Development",
      provider: "TAP Academy",
      year: "July 2023 - Feb 2024",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 light:text-cyan-700">
          Certifications
        </p>

        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl light:text-slate-900">
          Courses & Certifications
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] light:border-slate-200 light:bg-white light:hover:shadow-[0_20px_60px_rgba(14,165,233,0.08)]"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-cyan-500/20 p-2 text-cyan-400">
                  <Award size={20} />
                </div>

                <h3 className="text-lg font-semibold text-white light:text-slate-900">
                  {cert.title}
                </h3>
              </div>

              <p className="mt-2 text-sm text-slate-400 light:text-slate-600">
                {cert.provider}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-cyan-400 light:text-cyan-700">
                  {cert.year}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-cyan-400 transition hover:text-cyan-300 light:text-cyan-700"
                >
                  View <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
