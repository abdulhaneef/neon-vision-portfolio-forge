
import React from 'react';
import { AccessibilityIcon, Code, Users, GraduationCap, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon }) => (
  <Card className="border border-muted bg-card/50 backdrop-blur-sm hover:border-accent1/50 transition-all duration-300 neon-border">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-accent1/10 text-accent1">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-light/70">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const Skills: React.FC = () => {
  const skills = [
    {
      title: "Accessibility",
      description: "WCAG expert with deep knowledge of assistive technologies and inclusive design practices to ensure digital experiences work for everyone.",
      icon: <AccessibilityIcon size={28} />
    },
    {
      title: "UI Engineering",
      description: "Crafting elegant, performant user interfaces with modern technologies while maintaining a focus on accessibility and usability.",
      icon: <Code size={28} />
    },
    {
      title: "Training",
      description: "Passionate educator who has developed comprehensive accessibility training programs and workshops for developers and designers.",
      icon: <GraduationCap size={28} />
    },
    {
      title: "Leadership",
      description: "Experienced team lead who fosters inclusive cultures and guides organizations in implementing accessibility at scale.",
      icon: <Users size={28} />
    },
    {
      title: "AI Trends",
      description: "Exploring cutting-edge AI applications for enhancing accessibility, with a focus on language models and adaptive interfaces.",
      icon: <Brain size={28} />
    }
  ];

  return (
    <section id="skills" className="py-20 relative bg-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Roles</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
