function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 light:border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-400 light:text-slate-600">
          © {new Date().getFullYear()} Sri Sahithi N
        </p>

        <p className="text-sm text-slate-500 light:text-slate-500">
          Built with React, Vite, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;