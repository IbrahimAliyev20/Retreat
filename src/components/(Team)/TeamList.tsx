'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TeamMemberType } from '@/types/servicetype';

const MEMBERS_PER_PAGE = 6; 

type TeamListProps = {
  allTeachers: TeamMemberType[];
};

export default function TeamList({ allTeachers }: TeamListProps) {
  const [visibleCount, setVisibleCount] = useState(MEMBERS_PER_PAGE);

  const visibleTeachers = allTeachers.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + MEMBERS_PER_PAGE);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {visibleTeachers.map((member, index) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="flex flex-col items-center hover:scale-105 duration-300 transition-all group"
          >
            <div className="w-full h-80 relative rounded-xl overflow-hidden">
              <Image
                src={member.image || '/placeholder.svg'}
                alt={member.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-xl cursor-pointer transition-transform duration-500 group-hover:scale-110"
                priority={index < 4} 
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhfPQAJJAN4L7D6vgAAAABJRU5ErkJggg=="
                aria-label={`View profile of ${member.name}`}
              />
            </div>
            <h3 className="text-xl font-medium custom-color mt-4">{member.name}</h3>
            <p className="color-desc opacity-80 mb-4">{member.profession}</p>
          </Link>
        ))}
      </div>

      {visibleCount < allTeachers.length && (
        <div className="text-center mt-12">
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