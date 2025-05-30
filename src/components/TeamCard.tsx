
import Image from "next/image";
import Link from "next/link";
import { TeamsType } from "@/types/type";
import Reveal from "@/components/Reveal";
import { getSocialMedia } from "@/lib/sociallink";

interface TeamCardProps {
  team: TeamsType[];
}


export default async function  TeamCard({ team }: TeamCardProps) {
  const data = await getSocialMedia();
  const socialLinksMap = data[0]
      
  return (
    <section>
      {team.map((member, index) => (
        <Reveal key={member.slug} duration={0.7 + index * 0.2} yOffset={50 + index * 10}>
          <div className="flex items-center justify-center transition-opacity duration-1000 ease-in-out">
            <div className="mb-10 bg-white md:w-[60%] mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 py-5 rounded-lg shadow-md">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <Reveal duration={0.6} yOffset={50}>
                  <div className="relative w-48 h-48 mb-6">
                    <Image
                      src={member.image || '/placeholder.svg'}
                      alt={member.name}
                      fill
                      className="rounded-full transform transition-transform duration-500 hover:scale-105 object-cover"
                      priority={index < 3}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/OhfPQAJJAN4L7D6vgAAAABJRU5ErkJggg=="
                      aria-label={`Profile image of ${member.name}`}
                    />
                  </div>
                </Reveal>
                <Reveal duration={0.8} yOffset={60}>
                  <div className="flex space-x-4">
                    <Link
                      href={socialLinksMap.link || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow ${member.name} on Instagram`}
                    >
                    </Link>
                    <Image
                    src={socialLinksMap.image}
                    alt="Instagram" 
                    width={30} 
                    height={30} 
                    />
                  </div>
                </Reveal>
              </div>
              <div className="w-full md:w-2/3 p-8 rounded-lg">
                <Reveal duration={0.6} yOffset={50}>
                  <h3 className="text-4xl font-serif custom-color mb-2 transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    {member.name}
                  </h3>
                </Reveal>
                <Reveal duration={0.8} yOffset={60}>
                  <p className="text-xl custom-color opacity-80 mb-4">{member.profession}</p>
                </Reveal>
                <Reveal duration={1.0} yOffset={70}>
                  <p className="color-desc opacity-80 mb-6">
                    {member.description
                      ? member.description.replace(/<[^>]+>/g, '').slice(0, 100) + '...'
                      : 'No description available.'}
                  </p>
                </Reveal>
                <Reveal duration={1.2} yOffset={80}>
                  <Link
                    href={`/team/${member.slug}`}
                    className="w-fit border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
                    aria-label={`Read more about ${member.name}`}
                  >
                    Ətraflı oxu
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}