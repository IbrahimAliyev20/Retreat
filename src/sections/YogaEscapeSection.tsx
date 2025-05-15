"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { RiCheckDoubleFill } from "react-icons/ri";
import useScrollAnimation from '../hook/useScrollAnimation';

const YogaEscapeSection: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const text1Ref = useRef<HTMLParagraphElement>(null);
  const text2Ref = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useScrollAnimation(imageRef, 0);  
  useScrollAnimation(titleRef, 0.2);  
  useScrollAnimation(text1Ref, 0.4);  
  useScrollAnimation(text2Ref, 0.6);  
  useScrollAnimation(listRef, 0.8);   

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div
          className="w-full md:w-1/2 opacity-0"
          ref={imageRef}
        >
          <div className="overflow-hidden">
            <Image
              src="/images/YogaEscapeSection.webp"
              alt="Retreat Yoga"
              width={600}
              height={400}
              className="w-[70%] h-auto object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6 opacity-0"
            ref={titleRef}
          >
            This retreat is for you if you want to disconnect
          </h2>
          <p
            className="text-gray-600 opacity-0"
            ref={text1Ref}
          >
            Suspendisse eu ligula. Nullam incidunt adipiscing enim. Nunc nonummy
            metus. Vestibulum ullamcorper, mauris at ligula.
          </p>
          <div className="w-full h-[0.5px] bg-black my-10"></div>
          <p
            className="font-semibold opacity-0"
            ref={text2Ref}
          >
            JOIN THE RETREAT IF:
          </p>
          <ul
            className="text-brown-600 space-y-2 mt-3 opacity-0"
            ref={listRef}
          >
            <li className="flex items-center">
              <RiCheckDoubleFill className="mr-1" />
              you need to disconnect
            </li>
            <li className="flex items-center">
              <RiCheckDoubleFill className="mr-1" />
              you want to focus on your body
            </li>
            <li className="flex items-center">
              <RiCheckDoubleFill className="mr-1" />
              improve your yoga
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YogaEscapeSection;