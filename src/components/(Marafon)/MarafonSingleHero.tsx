import React from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { MaraphonType } from '@/types/maraphon';

interface MaratonSingleHeroProps {
  marathon: MaraphonType;
}

export function MaratonSingleHero({ marathon }: MaratonSingleHeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br text-white">
      {marathon.image && (
        <Image
          fill
          src={marathon.image}
          alt=""
          className="absolute inset-0 object-cover w-full h-full"
        />
      )}
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* Date */}
          <p className="text-xl md:text-base font-light mb-6 tracking-wide">
            {marathon.start_date} - {marathon.end_date}
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            {marathon.name}
          </h1>

          {/* Description */}
          <p className="text-xl md:text-lg font-light leading-relaxed max-w-2xl opacity-90">
            {marathon.short_description}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-15 h-15 text-white/70" />
        </div>
      </div>
    </section>
  );
}
