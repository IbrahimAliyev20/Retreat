import React from "react";
import Image from "next/image";
import { getTeams } from "@/lib/teams";

const TeamCard: React.FC = async () => {
  const data = await getTeams()
  const team = data

  return (
    <section>
      {team.map((member, index) => (
        <div
          key={index}
          className="flex items-center justify-center  transition-opacity duration-1000 ease-in-out"
        >
          <div className="mb-10 bg-color-yellow md:w-[60%] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-5 rounded-lg shadow-md">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex space-x-4">
             
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span className="cursor-pointer text-2xl hover:text-blue-500 transition-colors duration-300">📷</span>
                  </a>
               
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span className="cursor-pointer text-2xl hover:text-blue-500 transition-colors duration-300">🐦</span>
                  </a>
          
               
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span className="cursor-pointer text-2xl hover:text-blue-500 transition-colors duration-300">🎥</span>
                  </a>
            
              </div>
            </div>
            <div className="w-full md:w-2/3 p-8 rounded-lg">
              <h3 className="text-4xl font-serif custom-color mb-2 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                {member.name}
              </h3>
              <p className="text-xl custom-color opacity-80 mb-4">{member.profession}</p>
              <p className="custom-color opacity-80 mb-6">ssss</p>
              <button className="custom-color border-1 py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamCard;
