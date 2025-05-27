import Image from 'next/image';
import { TeamsType } from '@/types/type';

interface TeamSinglePageProps {
  team: TeamsType;
}

export default function TeamSinglePage({ team }: TeamSinglePageProps) {
  if (!team) {
    return <div>Team member not found</div>;
  }

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

  const socialLinks = socialLinksMap[team.slug] || {
    instagram: '#',
    twitter: '#',
    tiktok: '#',
  };

  // HTML teqlərini təmizləmək üçün sadə regex
  const cleanDescription = team.description
    ? team.description.replace(/<[^>]+>/g, '')
    : 'No description available.';

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <div className="relative w-[23rem] h-[23rem] mx-auto mb-4">
          <Image
            src={team.image || '/placeholder.svg'}
            alt={team.name}
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-full"
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhfPQAJJAN4L7D6vgAAAABJRU5ErkJggg=="
            aria-label={`Profile image of ${team.name}`}
          />
        </div>
        <p className="text-sm uppercase text-textColor">{team.profession}</p>
        <h1 className="text-4xl font-bold text-accent">{team.name}</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href={socialLinks.instagram}
            className="text-textColor hover:text-blue-500 transition-colors duration-300"
            aria-label={`Follow ${team.name} on Instagram`}
          >
            Instagram
          </a>
          <a
            href={socialLinks.twitter}
            className="text-textColor hover:text-blue-500 transition-colors duration-300"
            aria-label={`Follow ${team.name} on Twitter`}
          >
            Twitter
          </a>
          <a
            href={socialLinks.tiktok}
            className="text-textColor hover:text-blue-500 transition-colors duration-300"
            aria-label={`Follow ${team.name} on TikTok`}
          >
            TikTok
          </a>
        </div>
      </div>

      <article className="space-y-8 w-[60%] mx-auto">
        <h2 className="text-2xl font-semibold text-accent">Müəllim haqqında</h2>
        <p className="text-textColor">{cleanDescription}</p>
      </article>
    </div>
  );
}