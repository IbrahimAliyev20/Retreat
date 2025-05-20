'use client'; // İstemci bileşeni olarak işaretliyoruz, çünkü animasyon için useEffect kullanılabilir

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const retreats = [
  {
    title: '5 day detox programme',
    date: 'May 10, 2023 - July 15, 2023',
    image: '/images/scrollsec1.jpg',
    description:
      'Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat',
  },
  {
    title: '7 day yoga retreat',
    date: 'June 1, 2023 - June 8, 2023',
    image: '/images/scrollsec2.jpg',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis faucibus accumsan odio.',
  },
  {
    title: '10 day wellness escape',
    date: 'August 5, 2023 - August 15, 2023',
    image: '/images/scrollsec3.jpg',
    description:
      'Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
];

const RetreatScheduleSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animasyon için useEffect (sadece masaüstünde çalışacak)
  useEffect(() => {
    if (window.innerWidth >= 768) { // md: kırılma noktası (768px)
      const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
      if (elements) {
        elements.forEach((el) => {
          el.classList.add('opacity-0', 'translate-y-20');
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.remove('opacity-0', 'translate-y-20');
                  entry.target.classList.add('opacity-100', 'translate-y-0');
                }
              });
            },
            { threshold: 0.1 }
          );
          observer.observe(el);
        });
      }
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row md:gap-72">
        <div className="ml-3  md:w-1/3 md:sticky md:top-26 md:self-start">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#2e826a] mb-6 animate-on-scroll transition-all duration-500 ease-in-out"
          >
            Upcoming retreats
          </h2>
          <p
            className="color-desc mb-8 animate-on-scroll transition-all duration-500 ease-in-out"
          >
            Check our schedule and free spots, book the date and lets have fun!
          </p>
          <Link
            href="/retreats"
            className="bg-[#2e826a] text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition"
          >
            See all retreats
          </Link>
        </div>

        {/* Sağ Taraf: Retreat Kartları */}
        <div className="md:w-2/5 space-y-12 mt-8 md:mt-0">
          {retreats.map((retreat, index) => (
            <div
              key={index}
              className="bg-color-yellow rounded-3xl p-12 shadow-md animate-on-scroll transition-all duration-500 ease-in-out"
            >
              <h3 className="text-xl font-semibold text-[#2e826a] mb-2">{retreat.title}</h3>
              <p className="text-xl font-light text-[#2e826a] mb-8">{retreat.date}</p>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={retreat.image || '/placeholder.svg'}
                  alt={retreat.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-2xl"
                />
              </div>
              <p className="text-[#2e826a] mb-4">{retreat.description}</p>
              <button className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition">
                Book now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetreatScheduleSection;