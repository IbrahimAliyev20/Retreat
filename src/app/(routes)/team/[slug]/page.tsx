import TeamCard from '@/components/TeamCard';
import { getTeamBySlug, getTeams } from '@/lib/getTeamBySlug';
import TeamSinglePage from '@/sections/(Teamsec)/TeamSinglePage';
import { notFound } from 'next/navigation';
import { TeamsType } from '@/types/type';
import Reveal from '@/components/Reveal';

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  const allTeams = await getTeams();

  if (!team) {
    notFound(); 
  }

  return (
    <div className="container mx-auto py-20 flex flex-col gap-32">
      <Reveal>
      <div>
        <TeamSinglePage team={team} />
      </div>
      </Reveal>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="text-5xl font-semibold text-center">Meet others</p>
          <p className="text-lg font-semibold text-center">We are dedicated to give you the best experience.</p>
        </div>
        <Reveal>
        <TeamCard team={allTeams} />
        </Reveal>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const teams = await getTeams();
  return teams.map((team: TeamsType) => ({
    slug: team.slug,
  }));
}