
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { BackgroundShapes } from './components/BackgroundShapes';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-taupe-gradient text-white selection:bg-[#c5b9ad]/30 selection:text-white">
      <BackgroundShapes />
      <Navbar scrolled={scrolled} />
      <main className="relative z-10">
        <section id="inicio"><Hero /></section>
        <section id="sobre"><About /></section>
        <section id="servicos"><Services /></section>
        <section id="depoimentos"><Testimonials /></section>
        <section id="contato"><Contact /></section>
      </main>
      <footer className="relative z-10 py-20 text-center text-white/30 text-[10px] tracking-[0.4em] font-light">
        <div className="flex flex-col items-center gap-10">
          <div className="space-y-3">
            <p>© {new Date().getFullYear()} Psicanálise & Psicoterapia | Denise Silva</p>
            <p className="opacity-40">Presença, cuidado e acolhimento.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
