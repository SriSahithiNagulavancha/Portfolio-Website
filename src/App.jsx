import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Certifications from "./Components/Certifications";
import Projects from "./Components/Projects";
import GitHubStats from "./Components/GitHubStats";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import CustomCursor from "./Components/CustomCursor";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [showToTop, setShowToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [loading, setLoading] = useState(true);

  const sections = [
    "about",
    "skills",
    "experience",
    "certifications",
    "projects",
    "github",
    "contact",
  ];

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 400);

      let current = "about";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const top = el.getBoundingClientRect().top;
        if (top <= 140) current = id;
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);

    setTimeout(() => {
      history.replaceState(null, "", window.location.pathname);
    }, 300);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white transition-colors duration-300 light:bg-slate-50 light:text-slate-900">
      <CustomCursor />
      <LoadingScreen isVisible={loading} />

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        onNavClick={handleNavClick}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Header />

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>

      <Footer />
      <BackToTop show={showToTop} />
    </div>
  );
}

export default App;