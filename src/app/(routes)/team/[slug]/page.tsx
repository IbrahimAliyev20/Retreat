import TeamCard from '@/components/TeamCard';
import { getTeamBySlug, getTeams } from '@/lib/getTeamBySlug';
import TeamSinglePage from '@/sections/(Teamsec)/TeamSinglePage';
import { notFound } from 'next/navigation';
import { TeamsType } from '@/types/type';
import Reveal from '@/components/Reveal';
import JoinUsSection from '@/sections/JoinUsSection';

export default async function TeamPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  const allTeams = await getTeams();

  if (!team) {
    notFound(); 
  }

  return (
    <div className="container mx-auto py-20 flex flex-col gap-16">
      <Reveal>
      <div>
        <TeamSinglePage team={team} />
      </div>
      </Reveal>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-5xl font-semibold text-center">Digərləri ilə tanış ol</p>
          <p className="text-lg font-semibold text-center">Sizə ən yaxşı təcrübəni təqdim etməyə sadiqik</p>
        </div>
        <Reveal>
        <TeamCard team={allTeams} />
        </Reveal>
      </div>
      <Reveal>
        <JoinUsSection />
      </Reveal>
    </div>
  );
}

export async function generateStaticParams() {
  const teams = await getTeams();
  return teams.map((team: TeamsType) => ({
    slug: team.slug,
  }));
}