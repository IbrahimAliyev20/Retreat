import Reveal from "@/components/Reveal";
import TeamCard from "@/components/TeamCard";
import { getTeams } from "@/lib/getTeamBySlug";
import TeamHero from "@/sections/(Teamsec)/TeamHero";
import Experience from "@/sections/Experience";
import JoinUsSection from "@/sections/JoinUsSection";
import RetreatScheduleSection from "@/sections/ServiceScheduleSection";

export default async function TeamPage() {
  const team = await getTeams();

  return (
    <div>
      <Reveal>
        <div>
          <TeamHero />
        </div>
      </Reveal>
      <Reveal>
        <div className="py-16">
          <TeamCard team={team} />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-16">
          <Experience />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-16">
          <RetreatScheduleSection />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-6  md:pt-16">
          <JoinUsSection />
        </div>
      </Reveal>
    </div>
  );
}
