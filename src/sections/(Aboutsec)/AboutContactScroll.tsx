import React from "react";
import Image from "next/image";
import { getValues } from "@/lib/values";
import Link from "next/link";



const AboutContactScroll: React.FC = async  () => {
    
  const data = await getValues()

  const contactscrol = data

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-16 md:gap-72">
        <div className="md:w-1/3 inline-block md:sticky top-16 self-start ml-10 md:ml-0">
          <h2
            className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6 "
          >
            Bizim üçün önəmli olan dəyərlər
          </h2>
          <p className="bg-brown-600 mb-8 " >
            Peşəkarlıqla yanaşmaq bizim əsas prinsipimizdir.
          </p>
          <Link href="/contact"
            className="bg-[#2e826a] text-white px-7 py-2 rounded-full hover:bg-brown-700 transition "
          >
            Bizimlə Əlaqə
          </Link>
        </div>
        <div className="md:w-2/5 space-y-12">
          {contactscrol.map((retreat, index) => (
            <div
              key={index}
              className="bg-white hover:bg-beige-200 rounded-3xl p-12 shadow-md text-center "
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={retreat.image}
                  alt={retreat.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <h3 className="text-3xl font-semibold text-brown-800 mb-2">{retreat.title}</h3>
              <p className="text-lg color-desc mb-4">{retreat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContactScroll;