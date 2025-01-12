"use client";
import React from 'react';
import Link from 'next/link';
import {
  IconError404
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e : React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };

  return (
    <div className="min-h-[calc(100vh-7.1rem)] flex flex-col items-center justify-center bg-background">
      <div 
        className="text-center max-w-3xl mx-auto"
        onMouseMove={handleMouseMove}
      >
        <div className="relative inline-block">
          <div 
            className="text-[12rem] font-bold text-primary/10 select-none"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: 'transform 0.2s ease-out'
            }}
          >
            404
          </div>
          <IconError404 
            size={120} 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary"
          />
        </div>

        <h1 className="text-4xl font-bold tracking-tight mb-4">
        Oops! Lost in Cyberspace?
        </h1>
        
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          Oops! Looks like you&apos;ve ventured into uncharted territory. 
          Let&apos;s help you find your way back.
        </p>

        <div className="flex gap-4 justify-center my-8">
          <Button asChild size="lg">
            <Link href="/">
              Take Me Home
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/contact">
              Report Issue
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;