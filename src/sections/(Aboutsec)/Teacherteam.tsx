import { getTeams } from "@/lib/teams";
import Image from "next/image";

const Teacherteam: React.FC = async () => {
  const data = await getTeams()
  const teachers = data

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl font-serif custom-color text-center mb-4  transition-opacity duration-1000 ease-in-out"
      >
        Komanda ilə tanış olun      </h2>
      <p
        className="text-lg custom-color text-center mb-12  transition-opacity duration-1000 ease-in-out"
      >
        Sizə ən yaxşı təcrübəni yaşatmaq üçün çalışırıq.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teachers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center hover:scale-105 duration-300  transition-all group"
          >
            <div className="w-full h-64 relative rounded-xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl cursor-pointer transition-transform duration-500 hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-medium custom-color mt-4">{member.name}</h3>
            <p className="custom-color opacity-80 mb-4">{member.profession}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teacherteam;
