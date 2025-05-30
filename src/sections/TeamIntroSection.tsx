import { getTeams } from "@/lib/getTeamBySlug";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const TeamIntroSection: React.FC = async () => {
  const data = await getTeams();
  const teachers = data;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.5} yOffset={40}>
          <h2 className="text-4xl font-serif custom-color text-center mb-4">
            Komanda ilə tanış olun
          </h2>
        </Reveal>
        <Reveal duration={0.7} yOffset={50}>
          <p className="text-lg color-desc text-center mb-12">
            Sizə ən yaxşı təcrübəni yaşatmaq üçün çalışırıq.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teachers.map((member, index) => (
            <Reveal key={index} duration={0.7 + index * 0.4} yOffset={50 + index * 20}>
              <Link
                href={`/team/${member.slug}`}
                className="flex flex-col items-center hover:scale-105 duration-300"
              >
                <div className="w-full h-64 relative rounded-xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium custom-color mt-4">{member.name}</h3>
                <p className="custom-color opacity-80">{member.profession}</p>
              </Link>
            </Reveal>
          ))}
          <Reveal duration={0.9} yOffset={60}>
            <div className="w-full h-64 bg-white rounded-lg p-6 flex flex-col justify-between">
              <p className="color-desc text-lg">
                FitVibe sahənin ən peşəkar mütəxəssislərini toplayaraq sizə mükəmməl təcrübə yaşatmaq üçün çalışır.
              </p>
              <Link
                href="/team"
                className="w-fit border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
              >
                Daha çox bax
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroSection;