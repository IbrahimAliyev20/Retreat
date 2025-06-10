import React from 'react';
import { getMaraphon } from '@/lib/marafon';
import MarafonList from '@/components/(Marafon)/MarafonList';
import { MaraphonType } from '@/types/maraphon';

interface MarafonCardsProps {
  currentSlug?: string; 
}

export default async function MarafonCards({ currentSlug }: MarafonCardsProps) {
  const marathons: MaraphonType[] = await getMaraphon();

  const filteredMarathons = currentSlug
    ? marathons.filter(marathon => marathon.slug !== currentSlug)
    : marathons;

  return (
    <div className="container mx-auto py-12 px-4">
      <MarafonList allMarathons={filteredMarathons} />
    </div>
  );
}