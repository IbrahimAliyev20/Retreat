"use client";

const TeamHero: React.FC = () => {

  return (
    <div
      className="relative pt-40  flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 text-center z-10">
        <h1
          className="text-6xl md:text-8xl font-serif custom-color mb-6 "
        >
         Meet the team
        </h1>
        <p
          className="text-xl md:text-2xl custom-color mb-8 "
        >
         Dedicated to give you top experience
        </p>
      </div>
    </div>
  );
};

export default TeamHero;