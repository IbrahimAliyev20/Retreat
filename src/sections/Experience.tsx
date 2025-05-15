"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
// import useScrollAnimation from '../hook/useScrollAnimation';

const Experience: React.FC = () => {
  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const textRef = useRef<HTMLParagraphElement>(null);
  // const stat1Ref = useRef<HTMLDivElement>(null);
  // const stat2Ref = useRef<HTMLDivElement>(null);
  // const imageRef = useRef<HTMLDivElement>(null);

  // useScrollAnimation(titleRef, 0); 
  // useScrollAnimation(textRef, 0.2);  
  // useScrollAnimation(stat1Ref, 0.4); 
  // useScrollAnimation(stat2Ref, 0.6); 
  // useScrollAnimation(imageRef, 0.8); 

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-4">
        {/* Sol tərəf - Mətn və statistika */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2
            className="text-4xl md:text-5xl font-serif text-brown mb-6 leading-snug "
          >
            Dedicated to give you
            <br />
            top experience
          </h2>
          <p
            className="text-brown mb-8 max-w-md "
          >
            Suspendisse eu ligula. Nullam tincidunt adipiscing enim. Nunc nonummy metus. Vestibulum ullamcorper mauris at ligula.
          </p>

          {/* Statistika */}
          <div className="flex flex-col sm:flex-row gap-6 text-brown font-semibold text-xl">
            <div
              className=""
            >
              <p className="text-5xl mb-1">1000+</p>
              <p className="text-base font-normal">people healed</p>
            </div>
            <div
              className=""
            >
              <p className="text-5xl mb-1">8</p>
              <p className="text-base font-normal">years of experience</p>
            </div>
          </div>
        </div>

        {/* Sağ tərəf - Şəkil */}
        <div
          className="md:w-2/5 "
        >
          <Image
            src="/images/experience-image.webp"
            alt="Experience Retreat Image"
            width={600}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;