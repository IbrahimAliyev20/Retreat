import React from 'react';
import { getMaraphon } from '@/lib/marafon';
import MarafonList from '@/components/(Marafon)/MarafonList';

export default async function MarafonCards() {
  const marathons = await getMaraphon();

  return (
    <div className="container mx-auto py-12 px-4">
      <MarafonList allMarathons={marathons} />
    </div>
  );
}