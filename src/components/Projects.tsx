
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link }) => (
  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-accent1/10 transition-all duration-300 border-muted hover:border-accent1/50 h-full flex flex-col">
    <div className="h-48 bg-muted flex items-center justify-center">
      <p className="text-light/50 text-center px-4">
        [Project image here]<br />
        <span className="text-sm">Recommended size: 800x400px</span>
      </p>
    </div>
    <CardHeader className="pb-2">
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="py-2 flex-grow">
      <p className="text-light/70">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-muted text-xs rounded-full text-light/60">
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="pt-2">
      <Button variant="outline" size="sm" className="w-full group" asChild>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Link size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
          View Project
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Accessibility Audit Tool",
      description: "Automated web accessibility evaluation tool that identifies WCAG compliance issues and provides remediation guidance.",
      tags: ["Accessibility", "JavaScript", "WCAG", "Automation"],
      link: "#"
    },
    {
      title: "Inclusive UI Component Library",
      description: "A comprehensive library of fully accessible UI components built with React, following WAI-ARIA best practices.",
      tags: ["React", "TypeScript", "ARIA", "UI Design"],
      link: "#"
    },
    {
      title: "Color Contrast Analyzer",
      description: "Tool for designers and developers to ensure text legibility by verifying color combinations meet WCAG contrast requirements.",
      tags: ["Accessibility", "Design Tools", "WCAG"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
