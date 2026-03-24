function BackToTop({ show }) {
  return (
    <button
      aria-label="Back to Top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 rounded-full border border-white/10 bg-slate-900/80 p-3 text-white shadow-lg backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_12px_30px_rgba(34,211,238,0.30)] light:border-slate-300 light:bg-white light:text-slate-900 hover:scale-[1.03] active:scale-[0.97] ${
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}

export default BackToTop;
