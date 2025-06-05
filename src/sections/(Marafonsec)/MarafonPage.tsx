import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';

export default function MarafonCards() {
  const marathons = [
    {
      id: 1,
      title: "Marafonun adı",
      date: "6 Iyun - 14 Iyun",
      description: "Lorem ipsum dolor sit amet consectetur. Posuere feugiat commodo senectus elementum feugiat faucibus commodo egestas.",
      image: "/images/marafon.png"
    },
    {
      id: 2,
      title: "Marafonun adı",
      date: "6 Iyun - 14 Iyun",
      description: "Lorem ipsum dolor sit amet consectetur. Posuere feugiat commodo senectus elementum feugiat faucibus commodo egestas.",
      image: "/images/marafon.png"
    },
    {
      id: 3,
      title: "Marafonun adı",
      date: "6 Iyun - 14 Iyun",
      description: "Lorem ipsum dolor sit amet consectetur. Posuere feugiat commodo senectus elementum feugiat faucibus commodo egestas.",
      image: "/images/marafon.png"
    },
    {
      id: 4,
      title: "Marafonun adı",
      date: "6 Iyun - 14 Iyun",
      description: "Lorem ipsum dolor sit amet consectetur. Posuere feugiat commodo senectus elementum feugiat faucibus commodo egestas.",
      image: "/images/marafon.png"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {marathons.map((marathon, index) => (
          <div key={index} className="p-5 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row">
              
              {/* Şəkil */}
                <div className="sm:w-2/3">
                  <Image
                    src={marathon.image}
                    alt={marathon.title}
                    className="w-full aspect-[4/3] object-cover rounded-2xl"
                    width={400}
                    height={300}
                  />
                </div>

              {/* Mətn hissəsi */}
              <div className="px-5 sm:w-2/3 space-y-3 mt-4 sm:mt-0">
                <Reveal duration={0.3} yOffset={40}>
                  <p className="text-primary text-sm font-medium">{marathon.date}</p>
                </Reveal>

                <Reveal duration={0.5} yOffset={60}>
                  <h3 className="text-black text-xl font-semibold">{marathon.title}</h3>
                </Reveal>

                <Reveal duration={0.7} yOffset={80}>
                  <p className="text-muted-foreground color-desc">{marathon.description}</p>
                </Reveal>

                  <Link 
                    href={`/marafon/${marathon.id}`}
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
    </div>
  );
}
