
import TeamList from '@/components/(Team)/TeamList';
import { getTeams } from '@/lib/getTeamBySlug';
import { TeamMemberType } from '@/types/servicetype';

export default async function Teacherteam() {
  const teachers: TeamMemberType[] = await getTeams();

  return (
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-serif custom-color text-center mb-4 transition-opacity duration-1000 ease-in-out">
        Komanda ilə tanış olun
      </h2>
      <p className="text-lg color-desc text-center mb-12 transition-opacity duration-1000 ease-in-out">
        Sizə ən yaxşı təcrübəni yaşatmaq üçün çalışırıq.
      </p>
      
      <TeamList allTeachers={teachers} />
    </div>
  );
}