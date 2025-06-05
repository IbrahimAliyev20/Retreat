import React from 'react';
import { ChevronDown } from 'lucide-react';

export function MaratonSingleHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* Date */}
          <p className="text-sm md:text-base font-light mb-6 tracking-wide">
            10 İyul 2023 - 24 İyul 2023
          </p>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8">
            14 günlük Yoga Marafonu
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl opacity-90">
            Bədənini, zehnini və ruhunu yenilə! Tailandda keçirilən bu unikal yoga marafonunda qatıl və 
            14 gün boyunca professional təlimçilərlə nəfəs, meditasiya və yoga praktikasını kəşf et. 
            Sağlam qidalan, dincəl və öz daxili balansını tap!
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
