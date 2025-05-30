"use client";

import Reveal from "@/components/Reveal";
import Image from "next/image";

const ServiceHero: React.FC = () => {
  return (
    <div className="relative min-h-[350px] flex items-end justify-center overflow-hidden">
        <Image
              width={96}
              height={96}
              src="/icons/star.png"
              alt="star decorative"
              className="hidden md:block absolute left-50 top-30 w-14 h-14 opacity-80 z-0 filter hue-rotate-[95deg]"
            />
            <Image
              width={60}
              height={60}
              src="/icons/star.png"
              alt="star decorative"
              className="hidden md:block absolute right-40 bottom-2 w-15 h-15 opacity-70 z-0 filter hue-rotate-[95deg]"
            />
            <Image
              width={60}
              height={60}
              src="/icons/star.png"
              alt="star decorative"
              className="hidden md:block absolute right-70 top-22 w-8 h-8 opacity-70 z-0 filter hue-rotate-[95deg]"
            />
            <Image
              width={60}
              height={60}
              src="/icons/star.png"
              alt="star decorative"
              className="hidden md:block absolute left-40 bottom-2 w-10 h-10 opacity-70 z-0 filter hue-rotate-[95deg]"
            />
      <div className="container mx-auto px-4 text-center z-10">
        <Reveal duration={0.5} yOffset={40}>
          <h1 className="text-6xl md:text-8xl font-serif custom-color mb-6">
            Gələcək FitVibe
          </h1>
        </Reveal>
        <Reveal duration={0.7} yOffset={50}>
          <p className="text-xl md:text-2xl color-desc mb-8">
            Cədvəlimizə və boş yerlərə bax, tarixi seç və əylənək!
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default ServiceHero;