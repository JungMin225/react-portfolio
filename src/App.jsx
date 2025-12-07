import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import BrightSection from "./components/BrightSection";
import AboutSection from "./components/AboutSection";

function App() {
  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const headerOffset = 90;
    const rect = el.getBoundingClientRect();
    const offsetTop = window.scrollY + rect.top - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="site-root">
      <Header onNavClick={handleNavClick} />

      <main className="site-main">
        {/* Hero */}
        <section id="home" className="section hero-section">
          <Hero />
        </section>

        {/* 소개 */}
        <BrightSection />

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <ProjectSection />

        {/* About */}
        <AboutSection />
      </main>
    </div>
  );
}

export default App;
