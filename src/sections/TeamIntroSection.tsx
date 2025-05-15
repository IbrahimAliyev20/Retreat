"use client";
import React, { useRef } from "react";
import Image from "next/image";
import useScrollAnimation from "../hook/useScrollAnimation";
import { team, TeamMember } from "../constans/team";

const TeamIntroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);

  const memberRefs = React.useMemo(() => team.map(() => React.createRef<HTMLDivElement>()), []);

  useScrollAnimation(titleRef, 0);
  useScrollAnimation(textRef, 0.2);

  useScrollAnimation(memberRefs[0], 0.4);
  useScrollAnimation(memberRefs[1], 0.6);
  useScrollAnimation(memberRefs[2], 0.8);
  useScrollAnimation(memberRefs[3], 1.0);

  useScrollAnimation(infoCardRef, 1.2);

  return (
    <div className="custom-color-bg py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-serif text-[#F5E8C7] text-center mb-4 opacity-0"
          ref={titleRef}
        >
          Meet the team
        </h2>
        <p
          className="text-lg text-[#F5E8C7] text-center mb-12 opacity-0"
          ref={textRef}
        >
          We are dedicated to give you the best experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team.map((member: TeamMember, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 duration-300 opacity-0"
              ref={memberRefs[index]}
            >
              <div className="w-full h-64 relative rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-medium text-[#F5E8C7] mt-4">{member.name}</h3>
              <p className="text-[#F5E8C7] opacity-80">{member.role}</p>
            </div>
          ))}
          <div className="bg-[#625026] rounded-xl p-6 flex flex-col justify-between opacity-0" ref={infoCardRef}>
            <p className="text-[#F5E8C7] text-lg">
              Retreat You gathered the best specialist in the industry to offer you the best experience. Our team consists of 10 dedicated members.
            </p>
            <button className="self-start bg-[#fff7e3] text-[#3A2E1F] font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition">
              Meet all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroSection;
