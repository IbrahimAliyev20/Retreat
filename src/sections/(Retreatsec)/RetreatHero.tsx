"use client";
import React, { useRef } from 'react';
import useScrollAnimation from '../../hook/useScrollAnimation';

const RetreatHero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useScrollAnimation(titleRef, 0);    
  useScrollAnimation(textRef, 0.2);   

  return (
    <div
      className="relative min-h-screen  flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 text-center z-10">
        <h1
          className="text-6xl md:text-8xl font-serif text-[#3A2E1F] mb-6 opacity-0"
          ref={titleRef}
        >
          Upcoming retreats
        </h1>
        <p
          className="text-xl md:text-2xl text-[#3A2E1F] mb-8 opacity-0"
          ref={textRef}
        >
          Check our schedule and free spots, book the date and let's have fun!
        </p>
      </div>
    </div>
  );
};

export default RetreatHero;