'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceType, Attribute1Type, Attribute2Type } from "@/types/servicetype";

const CARDS_PER_PAGE = 4;

const ServiceCard = () => {
  const [cards, setCards] = useState<ServiceType[]>([]);
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
      headers: {
        "Accept-Language": "az",
      },
      cache: "no-store",
    })
      .then(res => res.json())
      .then(data => {
        setCards(Array.isArray(data?.data) ? data.data : []);
      });
  }, []);

  const visibleCards = cards.slice(0, visibleCount);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-16 md:gap-20">
        {visibleCards.map((card, index) => (
          <div key={index} className="flex flex-col">
            {index > 0 && (
                <div className="border-b-[0.5px] border-gray-300 opacity-55 shadow-md mb-40"></div>
            )}
            
            <div className="flex flex-col md:flex-row justify-between gap-12">
              {/* Text Section (Sol tərəf) */}
              <div className="w-full md:w-1/3 text-left md:sticky top-24 self-start">
                {/* Tarix */}
                <p className="text-4xl custom-color mb-4 whitespace-pre-line">
                  {card.date_range?.split(" - ")[0]}
                </p>
                <p className="text-2xl color-desc mb-4 whitespace-pre-line">
                  {card.date_range?.split(" - ")[1]}
                </p>

                <div className="my-6 space-y-4">
                  {card.attribute_1 && card.attribute_1.length > 0 && (
                    <div className="border-t border-gray-300 pt-4">
                      {card.attribute_1.map((attr: Attribute1Type, attrIndex: number) => (
                        <div
                          key={attrIndex}
                          className="flex justify-between color-desc mb-2"
                        >
                          <span>{attr.key}</span>
                          <span className="font-semibold">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {card.attribute_2 && card.attribute_2.length > 0 && (
                    <div className="border-t border-gray-300 pt-4">
                      {card.attribute_2.map((attr: Attribute2Type, attrIndex: number) => (
                        <div
                          key={attrIndex}
                          className="flex items-center color-desc mb-2"
                        >
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
                    </div>
                  )}
                </div>

                <Link
                  href={`/service/${card.slug}`}
                  className="inline-block border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
                >
                  İndi sifariş et
                </Link>
              </div>

              <Link href={`/service/${card.slug}`} className="w-full md:w-2/3">
                <div className="flex flex-col gap-6 bg-white p-8 rounded-xl shadow-lg h-full transition-transform duration-300  hover:shadow-xl cursor-pointer">
                  <h3 className="text-3xl font-serif custom-color">
                    {card.title}
                  </h3>
                  <div className="relative w-full h-[40vh]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-xl"
                    />
                  </div>
                  <p className="text-lg color-desc opacity-80">
                    {card.short_description}
                  </p>
                </div>
              </Link>

            </div>
          </div>
        ))}
      </div>
      {visibleCount < cards.length && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisibleCount(c => c + CARDS_PER_PAGE)}
            className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
          >
            Daha çox bax
          </button>
        </div>
      )}
    </section>
  );
};

export default ServiceCard;