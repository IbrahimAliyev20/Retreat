"use client";
import React, { useRef } from 'react';
import useScrollAnimation from '../../hook/useScrollAnimation';

const BlogHero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useScrollAnimation(titleRef, 0);    
  useScrollAnimation(textRef, 0.2);   

  return (
    <div
      className="relative pt-40  flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 text-center z-10">
        <h1
          className="text-6xl md:text-7xl font-serif custom-color mb-6 opacity-0"
          ref={titleRef}
        >
          Sharing knowledge
        </h1>
        <p
          className="text-xl md:text-2xl custom-color mb-8 opacity-0"
          ref={textRef}
        >
            Check our recent blog articles about yoga and diet.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;