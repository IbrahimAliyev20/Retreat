import Image from 'next/image';
import { TeamsType } from '@/types/type'; // SocialMediaType burdan silindi, çünki istifadə edilmir
import Link from 'next/link';

interface TeamSinglePageProps {
  team: TeamsType;
}

// TeamsType-ın təxmini necə göründüyünü fərz edək:
// interface TeamsType {
//   name: string;
//   profession: string;
//   image: string;
//   description: string;
//   instagram?: string; // Sual işarəsi bu sahələrin məcburi olmadığını göstərir
//   twitter?: string;
//   tiktok?: string;
// }

export default function TeamSinglePage({ team }: TeamSinglePageProps) {
  if (!team) {
    return <div>Team member not found</div>;
  }

  const cleanDescription = team.description
    ? team.description.replace(/<[^>]+>/g, '')
    : 'No description available.';

  return (
    <div className="container mx-auto p-6">
      {/* BU HİSSƏ DƏYİŞDİRİLMƏYİB */}
      <div className="text-center mb-8">
        <div className="relative w-[18rem] h-[18rem] md:w-[23rem] md:h-[23rem] mx-auto mb-4">
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
        
        <div className="flex justify-center items-center space-x-4 mt-4">
          {team.instagram && (
            <Link
              href={team.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${team.name} on Instagram`}
              className="text-textColor hover:opacity-75 transition-opacity duration-300"
            >
              Instagram
            </Link>
          )}
          {team.twitter && (
            <Link
              href={team.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${team.name} on Twitter`}
              className="text-textColor hover:opacity-75 transition-opacity duration-300"
            >
              Twitter
            </Link>
          )}
          {team.tiktok && (
            <Link
              href={team.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${team.name} on TikTok`}
              className="text-textColor hover:opacity-75 transition-opacity duration-300"
            >
              TikTok
            </Link>
          )}
        </div>
      </div>

      <article className="space-y-8 w-ful md:w-[60%] mx-auto">
        <h2 className="text-2xl font-semibold text-accent">Müəllim haqqında</h2>
        <p className="text-textColor">{cleanDescription}</p>
      </article>
    </div>
  );
}