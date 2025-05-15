"use client";
import React, { useRef } from "react";
import Image from "next/image";
// import useScrollAnimation from "../../hook/useScrollAnimation";
import { team } from "../../constans/team";

const Teacherteam: React.FC = () => {
  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const textRef = useRef<HTMLParagraphElement>(null);

  const memberRefs = React.useMemo(() => team.map(() => React.createRef<HTMLDivElement>()), []);

  // useScrollAnimation(titleRef, 0);
  // useScrollAnimation(textRef, 0.2);

  // useScrollAnimation(memberRefs[0], 0.4);
  // useScrollAnimation(memberRefs[1], 0.6);
  // useScrollAnimation(memberRefs[2], 0.8);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl font-serif custom-color text-center mb-4  transition-opacity duration-1000 ease-in-out"
      >
        Meet the team
      </h2>
      <p
        className="text-lg custom-color text-center mb-12  transition-opacity duration-1000 ease-in-out"
      >
        We are dedicated to give you the best experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 duration-300  transition-all group"
            ref={memberRefs[index]}
          >
            <div className="w-full h-64 relative rounded-xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl cursor-pointer transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-medium custom-color mt-4">{member.name}</h3>
            <p className="custom-color opacity-80 mb-4">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacherteam;
