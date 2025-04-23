
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-accent1/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-accent2/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-accent1 mb-4 font-medium tracking-wider">WELCOME TO MY PORTFOLIO</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            I'm <span className="text-gradient">Abdul Haneef Mohamad</span>
          </h1>
          <p className="text-2xl md:text-3xl text-light/80 mb-4">Digital Accessibility & UI Leader</p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-light/70">
            Creating inclusive digital experiences that empower all users, 
            bridging the gap between cutting-edge technology and universal accessibility.
          </p>
          
          <Button size="lg" className="group">
            <Download size={20} className="mr-2 group-hover:-translate-y-1 transition-transform" />
            Download CV
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-light/50 hover:text-light/80 transition-colors"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0V23H9V0H7Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
