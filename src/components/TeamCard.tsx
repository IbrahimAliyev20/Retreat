"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import useScrollAnimation from '../hook/useScrollAnimation';

const TeamCard: React.FC = () => {
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useScrollAnimation(cardRefs[0], 0); 
  useScrollAnimation(cardRefs[1], 0.2); 
  useScrollAnimation(cardRefs[2], 0.4); 

  const teamMembers = [
    {
      name: 'Lisa Mango',
      role: 'Nutrition Expert',
      description:
        'Proin pretium, leo ac pellentesque mollis, felis nunc ultricies eros, sed gravida augue augue mollis justo. Donec elit libero, sodales nec, vulputate a, suscipit non.',
      imageSrc: '/images/teamintro1.jpg', 
    },
    {
      name: 'John Smith',
      role: 'Yoga Instructor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageSrc: '/images/teamintro2.jpg',
    },
    {
      name: 'Emma Wilson',
      role: 'Wellness Coach',
      description:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageSrc: '/images/teamintro3.jpg', 
    },
  ];

  return (
    <section >
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex items-center justify-center opacity-100"
          ref={cardRefs[index]}
        >
          <div className="mb-10 bg-[#f5ecd7] md:w-[50%] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-5">
            {/* Sol Teref Medya İkonları */}
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="flex space-x-4 ">
                <span className="cursor-pointer">📷</span>
                <span className="cursor-pointer">🐦</span>
                <span className="cursor-pointer">🎥</span>
              </div>
            </div>

            {/* Sağ Teref: Metin ve Buton */}
            <div className="w-full md:w-2/3 p-8 rounded-lg">
              <h3 className="text-4xl font-serif custom-color mb-2">{member.name}</h3>
              <p className="text-xl custom-color opacity-80 mb-4">{member.role}</p>
              <p className="custom-color opacity-80 mb-6">{member.description}</p>
              <button className=" custom-color border-1 py-2 px-6 rounded-full hover:bg-opacity-90 transition">
                Read more
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamCard;