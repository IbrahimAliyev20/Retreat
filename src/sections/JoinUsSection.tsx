"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import useScrollAnimation from '../hook/useScrollAnimation';

const JoinUsSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(titleRef, 0); 
  useScrollAnimation(textRef, 0.2);  
  useScrollAnimation(buttonRef, 0.4);
  useScrollAnimation(statsRef, 0.6); 
  useScrollAnimation(imageRef, 0.8); 

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-10 custom-color-bg rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">
        <div className="p-8 md:p-15 flex-1">
          <h2
            className="text-4xl font-serif text-[#F5E8C7] mb-4 opacity-0"
            ref={titleRef}
          >
            Join us today!
          </h2>
          <p
            className="text-lg text-[#F5E8C7] opacity-80 mb-6 opacity-0"
            ref={textRef}
          >
            Let&apos;s disconnect and enjoy the power of nature improving your health.
          </p>
          <button
            className="bg-[#F5E8C7] text-[#3A2E1F] font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition mb-6 opacity-0"
            ref={buttonRef}
          >
            See schedule
          </button>
          <div
            className="flex items-center opacity-0"
            ref={statsRef}
          >
            <div className="flex -space-x-2 mr-3">
              <div className="w-8 h-8 rounded-full">
                <Image
                  src="/images/teamintro1.jpg"
                  alt="Person meditating in nature"
                  width={450}
                  height={400}
                  className="rounded-full m-auto"
                />
              </div>
              <div className="w-8 h-8 rounded-full">
                <Image
                  src="/images/teamintro2.jpg"
                  alt="Person meditating in nature"
                  width={450}
                  height={400}
                  className="rounded-full m-auto"
                />
              </div>
              <div className="w-8 h-8 rounded-full">
                <Image
                  src="/images/teamintro3.jpg"
                  alt="Person meditating in nature"
                  width={450}
                  height={400}
                  className="rounded-full m-auto"
                />
              </div>
            </div>
            <p className="text-[#F5E8C7] text-sm">We healed 1000+ students</p>
          </div>
        </div>
        <div
          className="flex w-full md:w-1/2 h-64 md:h-96 relative opacity-0"
          ref={imageRef}
        >
          <Image
            src="/images/JoinUsSection.jpg"
            alt="Person meditating in nature"
            width={450}
            height={400}
            className="rounded-xl m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;