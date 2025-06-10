
import { MaratonSingleHero } from '@/components/(Marafon)/MarafonSingleHero';
import { MaratonSinglePage } from '@/components/(Marafon)/MarafonSinglePage';
import Reveal from '@/components/Reveal';
import MarafonCards from '@/sections/(Marafonsec)/MarafonPage';
import React from 'react';

interface MarafonPageProps {
  params: {
    slug: string;
  };
}

export default async function MarafonPage({ params }: MarafonPageProps) {
  const { slug } = params;

  return (
    <div>
      <MaratonSingleHero  />

      <div className='container mx-auto py-20 flex flex-col gap-16'>
        <MaratonSinglePage />

        <Reveal>
            <div className='mb-8'>
              <p className="text-4xl md:text-5xl font-semibold">Digər Marafonlar</p>
            </div>
            <MarafonCards currentSlug={slug} />
        </Reveal>
      </div>
    </div>
  );
}