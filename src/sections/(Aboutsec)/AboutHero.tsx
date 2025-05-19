import { getBreadCrumb } from "@/lib/breadcrumb";
import type React from "react";
import { CountersType } from "@/types/type";
import { getCounter } from "@/lib/counters";

const AboutHero: React.FC = async () => {
  const data = await getBreadCrumb();
  const counters = await getCounter();
  const heroabout = data[0];

  return (
    <div>
      <div
        className="relative opacity-90 custom-color py-16"
        style={{
          height: "100vh",
          backgroundImage: `url(${heroabout.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col items-start justify-center">
          <h1 className="text-7xl font-serif mb-4">{heroabout.title}</h1>
          <p className="text-2xl opacity-80 mb-8">{heroabout.desciption}</p>
        </div>
      </div>

    
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {counters.map((counter: CountersType, index: number) => (
              <div key={index}>
                <h3 className="text-7xl font-serif text-[#3A2E1F] mb-2">{counter.number}</h3>
                <p className="text-[#3A2E1F] opacity-80">{counter.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;