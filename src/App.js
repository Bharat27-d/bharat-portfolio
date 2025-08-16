import React, { useState } from 'react';
import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero.jsx';
import About from './components/sections/About.jsx';
import Projects from './components/sections/Projects.jsx';
import Services from './components/sections/Services.jsx';
import Contact from './components/sections/Contact.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import CustomCursor from './components/ui/CustomCursor.jsx';
import AnimatedBackground from './components/ui/AnimatedBackground.jsx';
import ScrollProgress from './components/ui/ScrollProgress.jsx';
import VirtualCard from './components/ui/VirtualCard.jsx';
import SEO from './components/layout/SEO.jsx';
import './index.css';

// Remove unused lazy loading since ParallaxHero isn't being used
// const ParallaxHero = lazy(() => import('./components/sections/ParallaxHero.jsx'));

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Apply theme class to body or html element
    document.documentElement.classList.toggle('light-theme');
  };

  return (
    <>
      <SEO />
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />
      <Layout darkMode={darkMode} toggleTheme={toggleTheme}>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </Layout>
      <VirtualCard />
    </>
  );
}

export default App;