
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

interface TrainingItemProps {
  image: string;
  caption: string;
  altText: string;
}

const TrainingItem: React.FC<TrainingItemProps> = ({ image, caption, altText }) => (
  <div className="p-1">
    <Card className="border-muted bg-card/50 backdrop-blur-sm overflow-hidden">
      <div className="relative h-64 bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-light/50 text-center px-4">
            [Training image here]<br />
            <span className="text-sm">{altText}</span>
          </p>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-light/80">{caption}</p>
      </CardContent>
    </Card>
  </div>
);

const Training: React.FC = () => {
  const trainingItems = [
    {
      image: "workshop.jpg",
      caption: "Led 50+ workshops on alt-text best practices, teaching teams how to create meaningful image descriptions.",
      altText: "Workshop with diverse participants around a table discussing accessibility"
    },
    {
      image: "webinar.jpg",
      caption: "Developed a comprehensive webinar series on ARIA attributes that has trained over 2,000 developers worldwide.",
      altText: "Online webinar presentation showing slides about ARIA attributes"
    },
    {
      image: "conference.jpg",
      caption: "Regular speaker at accessibility conferences, sharing insights on creating inclusive digital experiences.",
      altText: "Presenter at a conference podium discussing digital accessibility"
    }
  ];

  return (
    <section id="training" className="py-20 relative bg-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Training Highlights</h2>
        
        <Carousel 
          opts={{ loop: true }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {trainingItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <TrainingItem
                  image={item.image}
                  caption={item.caption}
                  altText={item.altText}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-4">
            <CarouselPrevious className="relative static transform-none" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Training;
