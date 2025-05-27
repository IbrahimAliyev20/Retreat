import { getTeams } from '@/lib/getTeamBySlug';
import Image from 'next/image';
import Link from 'next/link';

export default async function Teacherteam() {
  const teachers = await getTeams();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-serif custom-color text-center mb-4 transition-opacity duration-1000 ease-in-out">
        Komanda ilə tanış olun
      </h2>
      <p className="text-lg color-desc text-center mb-12 transition-opacity duration-1000 ease-in-out">
        Sizə ən yaxşı təcrübəni yaşatmaq üçün çalışırıq.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teachers.map((member, index) => (
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
                className="rounded-xl cursor-pointer transition-transform duration-500 hover:scale-110"
                priority={index < 3}
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
    </div>
  );
}