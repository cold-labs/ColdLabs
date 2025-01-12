"use client";
import React from 'react';
import { Button } from '../ui/button';
import TechStackSlider from './tech-stack-slider';
import { Badge } from '../ui/badge';
import AnimatedShinyText from '../ui/animated-shiny-text';

const Hero = () => {
  const [dotIndex, setDotIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setDotIndex((prev) => (prev + 1) % 4);
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center bg-gradient-to-b from-background to-background/80">
      <div className='container mx-auto px-6'>
        <Badge variant="outline">
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out">
          <span>⚒️ Under evelopment</span>
        </AnimatedShinyText>
        </Badge>
        <h1 className='text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mt-4'>
          C<span className='text-gradient'>o</span>ldLabs
          <span className="Ww-24">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className={`text-primary inline-block transition-opacity duration-200 ${
                  i <= dotIndex ? 'opacity-100' : 'opacity-20'
                }`}
              >
                .
              </span>
            ))}
          </span>
        </h1>
        
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
          Building the future of web development, one component at a time.
        </p>
        
        <div className="mt-8">
          <Button
          variant={"outline"}
          >
            Contact
          </Button>
        </div>
      <TechStackSlider/>
      </div>
      
    </div>
  );
};

export default Hero;
