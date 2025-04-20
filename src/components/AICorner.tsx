
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

const AICorner: React.FC = () => {
  const aiProjects = [
    {
      title: "AI-Powered Screen Reader Enhancement",
      description: "A machine learning model that improves screen reader experiences by providing contextual information about complex UI elements.",
      link: "#"
    },
    {
      title: "Natural Language Accessibility Checker",
      description: "Tool that analyzes content for accessibility issues using NLP, identifying jargon, complex sentences, and readability concerns.",
      link: "#"
    },
    {
      title: "Adaptive Interface Generator",
      description: "AI system that dynamically adjusts UI based on user needs, preferences, and usage patterns to improve accessibility.",
      link: "#"
    }
  ];

  return (
    <section id="ai-corner" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-accent3/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent1/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">AI Corner</h2>
        
        <p className="text-light/80 max-w-3xl mb-12">
          Exploring the intersection of artificial intelligence and accessibility to create innovative solutions
          that help bridge gaps and provide more inclusive experiences for all users.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiProjects.map((project, index) => (
            <Card key={index} className="border-muted bg-card/50 backdrop-blur-sm hover:border-accent3/50 transition-all duration-300 h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent3/10 mb-4">
                  <Brain className="h-8 w-8 text-accent3" />
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-light/70">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full group" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Link size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Explore Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Missing Brain icon component, let's add it
const Brain: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
};

export default AICorner;
