"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        <div className="w-full md:w-1/2 text-center md:text-left ">
          <Reveal duration={0.4} yOffset={30}>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight">
              Yoga və
              <br />
              detoks FitVibe
            </h1>
          </Reveal>

          <Reveal duration={0.7} yOffset={50}>
            <p className="text-lg color-desc mb-8 ">
              FitVibe , gündəlik həyatın qaçaqaçından uzaqlaşmaq üçün
              <br />
              Azərbaycanda hərtərəfli bir FitVibe təcrübəsi təklif edir.
            </p>
          </Reveal>

          <Reveal duration={1} yOffset={70}>
            <Link
              className="bg-[#2e826a] text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition"
              href="/service"
            >
              Daha Çox
            </Link>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 relative mt-10 md:mt-0 pl-0 md:pl-34">
          <Reveal duration={1.3} yOffset={100}>
            <div className="relative w-full max-w-lg ">
              <Image
                src="/images/hero2sec.png"
                alt="Yoga Retreat 1"
                width={700}
                height={730}
                className="rounded-2xl w-[80%] md:w-[90%] mx-auto h-auto"
              />
              <div className="absolute -bottom-12 left-0 md:-left-12 w-70">
                <Image
                  src="/images/herosec.png"
                  alt="Yoga Retreat 2"
                  width={320}
                  height={400}
                  className="rounded-2xl w-[80%] md:w-full mx-auto h-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
