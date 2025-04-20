
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Training from '@/components/Training';
import AICorner from '@/components/AICorner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <AICorner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
