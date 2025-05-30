import React from "react";
import Image from "next/image";
import { getValues } from "@/lib/values";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const AboutContactScroll: React.FC = async () => {
  const data = await getValues();
  const contactscrol = data;

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-16 md:gap-72 px-4">
        <div className="md:w-1/3 inline-block md:sticky top-16 self-start ml-10 md:ml-0">
          <Reveal duration={0.5} yOffset={40}>
            <h2 className="text-3xl md:text-4xl font-semibold text-brown-800 mb-6">
              Bizim üçün önəmli olan dəyərlər
            </h2>
          </Reveal>
          <Reveal duration={0.7} yOffset={50}>
            <p className="bg-brown-600 mb-8">
              Peşəkarlıqla yanaşmaq bizim əsas prinsipimizdir.
            </p>
          </Reveal>
          <Reveal duration={0.9} yOffset={60}>
            <Link
              href="/contact"
              className="w-fit border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
            >
              Bizimlə Əlaqə
            </Link>
          </Reveal>
        </div>
        <div className="md:w-2/5 space-y-12">
          {contactscrol.map((retreat, index) => (
            <Reveal key={index} duration={0.7 + index * 0.2} yOffset={50 + index * 10}>
              <div className="bg-white hover:bg-beige-200 rounded-lg p-12 shadow-md text-center">
                <div className="relative w-full h-58 mb-4">
                  <Image
                    src={retreat.image}
                    alt={retreat.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-3xl font-semibold text-brown-800 mb-2">{retreat.title}</h3>
                <p className="text-lg color-desc mb-4">{retreat.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContactScroll;