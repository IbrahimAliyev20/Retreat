import Image from 'next/image';
import { SocialMediaType, TeamsType } from '@/types/type';
import Link from 'next/link';

interface TeamSinglePageProps {
  team: TeamsType;
  socialLinks: SocialMediaType[];
}

export default function TeamSinglePage({ team, socialLinks }: TeamSinglePageProps) {
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
        
        {/* SADƏCƏ BU HİSSƏ YENİLƏNİB */}
        <div className="flex justify-center items-center space-x-4 mt-4">
          {socialLinks && socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${team.name} `}
              className="text-textColor hover:opacity-75 transition-opacity duration-300"
            >
              <div className="relative w-8 h-8">
                <Image
                  src={`https://fitvibe.markup.az${social.image}`}
                  alt="icon"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* BU HİSSƏ DƏ DƏYİŞDİRİLMƏYİB */}
      <article className="space-y-8 w-[60%] mx-auto">
        <h2 className="text-2xl font-semibold text-accent">Müəllim haqqında</h2>
        <p className="text-textColor">{cleanDescription}</p>
      </article>
    </div>
  );
}