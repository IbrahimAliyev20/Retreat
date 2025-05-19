import Image from "next/image";
import { getTeams } from "@/lib/teams";
import Link from "next/link";

const TeamIntroSection: React.FC = async  () => {
    const data = await getTeams()

    const teachers = data

  return (
    <div className="bg-color-yellow  py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-serif custom-color text-center mb-4 "
        >
          Meet the team
        </h2>
        <p
          className="text-lg custom-color text-center mb-12 "
        >
          We are dedicated to give you the best experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teachers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center hover:scale-105 duration-300 "
            >
              <div className="w-full h-64 relative rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <h3 className="text-xl font-medium custom-color mt-4">{member.name}</h3>
              <p className="custom-color opacity-80">{member.profession}</p>
            </div>
          ))}
          <div className="bg-color-yellow rounded-xl p-6 flex flex-col justify-between " >
            <p className="custom-color text-lg">
              Retreat You gathered the best specialist in the industry to offer you the best experience. Our team consists of 10 dedicated members.
            </p>
            <Link href="/team" className="self-start bg-[#2e826a] text-[white] font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition">
              Meet all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroSection;
