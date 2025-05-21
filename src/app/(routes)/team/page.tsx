import TeamCard from '@/components/TeamCard';
import { getTeams } from '@/lib/getTeamBySlug';
import TeamHero from '@/sections/(Teamsec)/TeamHero';
import Experience from '@/sections/Experience';
import JoinUsSection from '@/sections/JoinUsSection';
import RetreatScheduleSection from '@/sections/RetreatScheduleSection';

export default async function TeamPage() {

  const team = await getTeams()

  return (
    <div>
      <div>
        <TeamHero />
      </div>
      <div className="py-16">
        <TeamCard team={team}/>
      </div>
      <div className="py-16">
        <Experience />
      </div>
      <div className="py-16">
        <RetreatScheduleSection />
      </div>
      <div className="py-6 md:py-0 md:pt-16">
        <div className="bg-color-yellow">
          <JoinUsSection />
        </div>
      </div>
    </div>
  );
}