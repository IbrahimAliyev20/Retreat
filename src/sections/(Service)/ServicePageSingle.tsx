import { ServiceType } from "@/types/servicetype";
import Image from "next/image";

interface ServicePageSingleProps {
  service: ServiceType;
}0

export default function ServicePageSingle({ service }: ServicePageSingleProps) {
  return (
    <div>
      <section className="relative min-h-[700px] text-white overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center z-0"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="container flex flex-col items-start justify-center min-h-[700px] px-20 relative z-20">
          <p className="text-xl uppercase mb-4">{service.date_range}</p>
          <h1 className="text-5xl md:text-8xl font-semibold mb-6">{service.title}</h1>
          <p className="text-xl max-w-2xl mb-10">{service.short_description}</p>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:flex-row items-start justify-between py-10 md:py-20 ">
        <div className=" w-[90%] mx-auto md:w-[69%] pr-0 md:pr-15">
          <p className="text-[#5a4b3c] mb-4">{service.description}</p>

          {/* Teams bölməsi
          {service.teams.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-[#5a4b3c] mb-4">Our Team</h2>
              {service.teams.map((team, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold text-[#5a4b3c]">{team.name}</h3>
                  <p className="text-[#5a4b3c]">{team.profession}</p>
                  <div
                    className="text-[#5a4b3c]"
                    dangerouslySetInnerHTML={{ __html: team.description }}
                  />
                </div>
              ))}
            </>
          )} */}
        </div>

        <div className="mx-auto w-[90%] md:w-[30%] bg-white p-6 rounded-lg shadow-md mt-6 md:mt-0">
          <h4 className="text-xl font-semibold text-[#5a4b3c] mb-4">{service.title}</h4>
          <div className="border-t border-[#5a4b3c] my-4 "></div>

          {service.attribute_1.map((attr, index) => (
            <div key={index} className="flex justify-between text-[#5a4b3c] mb-2">
              <span>{attr.key}</span>
              <span className="font-semibold">{attr.value}</span>
            </div>
          ))}

          <div className="border-t border-[#5a4b3c] my-4"></div>

          {service.attribute_2.map((attr, index) => (
            <div key={index} className="flex items-center text-[#5a4b3c] mb-2">
              <span className="mr-2 relative w-6 h-6">
                <Image 
                  src={attr.image} 
                  alt={attr.value}
                  fill 
                  className="object-contain"
                />
              </span>
              <span>{attr.value}</span>
            </div>
          ))}

          <button className="w-full bg-[#2e826a] text-white py-3 px-6 rounded-full hover:bg-opacity-90 transition">
            Keçid et
          </button>
        </div>
      </section>
    </div>
  );
}
