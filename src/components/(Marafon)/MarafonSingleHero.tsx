import React from 'react';
import { ChevronDown } from 'lucide-react';
import { getMaraphon } from '@/lib/marafon';
import Image from 'next/image';

export async function MaratonSingleHero() {
  const date = await getMaraphon();
  const item = date[0];


  return (
    <section className="relative min-h-screen bg-gradient-to-br text-white">
      {item.image && (
        <Image
          fill
          src={item.image}
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
          <p className="text-sm md:text-base font-light mb-6 tracking-wide">
         {item.start_date} - {item.end_date}
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            {item.name}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl opacity-90">
           {item.short_description}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
}
