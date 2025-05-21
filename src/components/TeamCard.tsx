import Image from 'next/image';
import Link from 'next/link';
import { TeamsType } from '@/types/type';

interface TeamCardProps {
  team: TeamsType[];
}

export default function TeamCard({ team }: TeamCardProps) {
  const socialLinksMap: Record<string, { instagram: string; twitter: string; tiktok: string }> = {
    'kelly-kapor': {
      instagram: 'https://instagram.com/kellykapor',
      twitter: 'https://twitter.com/kellykapor',
      tiktok: 'https://tiktok.com/@kellykapor',
    },
    'mini-cooper': {
      instagram: 'https://instagram.com/minicooper',
      twitter: 'https://twitter.com/minicooper',
      tiktok: 'https://tiktok.com/@minicooper',
    },
  };

  return (
    <section>
      {team.map((member, index) => (
        <div
          key={member.slug}
          className="flex items-center justify-center transition-opacity duration-1000 ease-in-out"
        >
          <div className="mb-10 bg-color-yellow md:w-[60%] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-5 rounded-lg shadow-md">
            <div className="w-full md:w-1/3 flex flex-col items-center">
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-full transform transition-transform duration-500 hover:scale-105"
                  priority={index < 3}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhfPQAJJAN4L7D6vgAAAABJRU5ErkJggg=="
                  aria-label={`Profile image of ${member.name}`}
                />
              </div>
              <div className="flex space-x-4">
                <a
                  href={socialLinksMap[member.slug]?.instagram || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${member.name} on Instagram`}
                >
                  <span className="cursor-pointer text-2xl hover:text-blue-500 transition-colors duration-300">📷</span>
                </a>
                <a
                  href={socialLinksMap[member.slug]?.twitter || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${member.name} on Twitter`}
                >
                  <span className="cursor-pointer text-2xl hover:text-blue-500 transition-colors duration-300">🐦</span>
                </a>
                <a
                  href={socialLinksMap[member.slug]?.tiktok || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${member.name} on TikTok`}
                >
                  <span className="cursor-pointer text-2xl hover:text-blue-500 transition-colors duration-300">🎥</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-8 rounded-lg">
              <h3 className="text-4xl font-serif custom-color mb-2 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                {member.name}
              </h3>
              <p className="text-xl custom-color opacity-80 mb-4">{member.profession}</p>
              <p className="custom-color opacity-80 mb-6">
                {member.description
                  ? member.description.replace(/<[^>]+>/g, '').slice(0, 100) + '...'
                  : 'No description available.'}
              </p>
              <Link
                href={`/team/${member.slug}`}
                className="custom-color border border-[#2e826a] py-2 px-6 rounded-full hover:bg-[#2e826a] hover:text-white transition-transform duration-300 hover:scale-105"
                aria-label={`Read more about ${member.name}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}