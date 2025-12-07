import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectSection from './components/ProjectSection';
import BrightSection from './components/BrightSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
  
    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
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

      <Footer />
    </div>
  );
}

export default App;
