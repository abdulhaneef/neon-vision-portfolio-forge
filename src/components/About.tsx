
import React from 'react';
import { Card } from '@/components/ui/card';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="w-full aspect-square bg-gradient-to-br from-muted/50 to-muted border-none overflow-hidden relative">
              {/* Placeholder for profile photo */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <p className="text-light/50 text-center px-4">
                  [Your professional photo here]<br />
                  <span className="text-sm">Recommended size: 800x800px</span>
                </p>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-gradient">14+ years</span> of Creating Accessible Digital Experiences
            </h3>
            
            <p className="text-light/80 leading-relaxed text-lg">
              Throughout my 14-year journey in UI engineering, I've dedicated my career to making digital 
              experiences accessible to all users. My passion for inclusive design started when I realized 
              the significant impact that thoughtfully crafted interfaces have on people with disabilities.
            </p>
            
            <p className="text-light/80 leading-relaxed text-lg">
              As an advocate for digital accessibility, I've worked with organizations across various sectors 
              to implement WCAG standards and create truly inclusive products. My approach combines technical 
              expertise with empathetic design thinking, ensuring that accessibility is never an afterthought 
              but a fundamental aspect of the development process.
            </p>
            
            <p className="text-light/80 leading-relaxed text-lg">
              My recent focus has been exploring how AI can enhance accessibility tools and create new 
              opportunities for inclusive experiences. I believe that the intersection of AI and accessibility 
              represents one of the most promising frontiers in tech today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
