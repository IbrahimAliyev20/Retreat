'use client'; 

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { MaraphonType } from '@/types/maraphon';

const CARDS_PER_PAGE = 4;

type MarafonListProps = {
  allMarathons: MaraphonType[]; 
};

export default function MarafonList({ allMarathons }: MarafonListProps) {
  const [visibleCount, setVisibleCount] = useState(CARDS_PER_PAGE);
  const visibleMarathons = allMarathons.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + CARDS_PER_PAGE);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleMarathons.map((marathon) => (
          <div key={marathon.slug} className="p-5 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row">
              
              <div className="sm:w-2/3">
                <Image
                  src={marathon.thumb_image}
                  alt={marathon.short_description}
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                  width={400}
                  height={300}
                />
              </div>

              {/* Mətn hissəsi */}
              <div className="px-5 sm:w-2/3 space-y-3 mt-4 sm:mt-0">
                <Reveal duration={0.3} yOffset={40}>
                  <p className="text-primary text-sm font-medium">{marathon.start_date}</p>
                  <p className="text-primary text-sm font-medium">{marathon.end_date}</p>
                </Reveal>

                <Reveal duration={0.5} yOffset={60}>
                  <h3 className="text-black text-xl font-semibold">{marathon.name}</h3>
                </Reveal>

                <Reveal duration={0.7} yOffset={80}>
                  <p className="text-muted-foreground color-desc">{marathon.short_description}</p>
                </Reveal>

                  <Link 
                    href={`/marafon/${marathon.slug}`}
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Ətraflı 
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allMarathons.length && (
        <div className="text-center mt-10">
          <button
            onClick={loadMore}
            className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
          >
            Daha çox bax
          </button>
        </div>
      )}
    </>
  );
}