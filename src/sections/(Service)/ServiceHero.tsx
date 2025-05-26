"use client";

const ServiceHero: React.FC = () => {

  return (
    <div
      className="relative  min-h-[350px]  flex items-end justify-center overflow-hidden">

      <div className="container mx-auto px-4 text-center z-10">
        <h1
          className="text-6xl md:text-8xl font-serif custom-color mb-6 "
        >
          Upcoming FitVibe
        </h1>
        <p
          className="text-xl md:text-2xl color-desc mb-8 "
        >
          Check our schedule and free spots, book the date and let&apos;s have fun!
        </p>
      </div>
    </div>
  );
};

export default ServiceHero;