import { MaratonSingleHero } from '@/components/(Marafon)/MarafonSingleHero';
import { MaratonSinglePage } from '@/components/(Marafon)/MarafonSinglePage';
import Reveal from '@/components/Reveal';
import MarafonCards from '@/sections/(Marafonsec)/MarafonPage';
import React from 'react';
import { getMaraphon } from '@/lib/marafon';

interface MarafonPageProps {
   params: Promise<{ slug: string }>;
}

export default async function MarafonPage({ params }: MarafonPageProps) {
  const { slug } = await params;
  const allMarathons = await getMaraphon();
  const marathon = allMarathons.find(m => m.slug === slug);

  if (!marathon) return <div>Marafon tapılmadı</div>;

  return (
    <div>
      <MaratonSingleHero marathon={marathon} />
      <div className='container mx-auto py-20 flex flex-col gap-16'>
        <MaratonSinglePage marathon={marathon} />
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