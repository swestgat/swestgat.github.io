import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import WhatIDo from './components/WhatIDo.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Publications from './components/Publications.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-linen text-ink">
      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Projects />
        <Experience />
        <Publications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
