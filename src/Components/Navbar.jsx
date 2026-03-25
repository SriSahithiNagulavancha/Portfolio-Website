function Navbar({
  menuOpen,
  setMenuOpen,
  activeSection,
  onNavClick,
  theme,
  toggleTheme,
}) {
  const links = [
    "about",
    "skills",
    "experience",
    "certifications",
    "projects",
    "github",
    "contact",
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl transition-colors duration-300 light:border-slate-200 light:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          onClick={onNavClick}
          className="text-base font-bold tracking-wide text-white light:text-slate-900 sm:text-lg"
        >
          Sri Sahithi Nagulavancha
        </a>

        <button
          type="button"
          className="rounded-xl border border-white/10 px-3 py-2 text-white transition duration-300 hover:scale-[1.03] active:scale-[0.97] md:hidden light:border-slate-300 light:text-slate-900"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          ☰
        </button>

        <div className="hidden items-center gap-3 md:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={onNavClick}
              className={`rounded-xl px-4 py-2 text-sm capitalize transition ${
                activeSection === item
                  ? "bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.10)] light:bg-cyan-100 light:text-cyan-700"
                  : "text-slate-300 hover:bg-white/5 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
              }`}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={onNavClick}
            className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-cyan-400"
          >
            Hire Me
          </a>

          <button
            type="button"
            aria-label="Toggle Theme"
            onClick={toggleTheme}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-white/10 light:border-slate-300 light:bg-white light:text-slate-900 light:hover:bg-slate-100"
          >
            {theme === "light" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[32rem] border-t border-white/10 light:border-slate-200"
            : "max-h-0"
        }`}
      >
        <div className="space-y-3 bg-slate-950/95 px-4 py-4 light:bg-white">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={onNavClick}
              className={`block rounded-xl px-4 py-3 text-base capitalize transition ${
                activeSection === item
                  ? "bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.10)] light:bg-cyan-100 light:text-cyan-700"
                  : "text-slate-300 hover:bg-white/5 hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-900"
              }`}
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={onNavClick}
            className="block rounded-xl bg-cyan-500 px-4 py-3 text-sm font-medium text-slate-950 transition duration-300 hover:scale-[1.03] active:scale-[0.97] hover:bg-cyan-400"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white transition duration-300 hover:scale-[1.03] active:scale-[0.97] light:border-slate-300 light:bg-slate-50 light:text-slate-900"
          >
            {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;