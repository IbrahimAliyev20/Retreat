import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import Link from 'next/link';
import { getMaraphon } from '@/lib/marafon';

export default async function MarafonCards() {
  const marathons = await getMaraphon();

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {marathons.map((marathon, index) => (
          <div key={index} className="p-5 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="flex flex-col sm:flex-row">
              
              {/* Şəkil */}
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
    </div>
  );
}
