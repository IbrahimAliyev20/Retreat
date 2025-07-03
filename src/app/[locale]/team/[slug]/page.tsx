import { notFound } from 'next/navigation';
import { getTeamBySlug, getTeams } from '@/lib/getTeamBySlug';
import TeamSinglePage from '@/sections/(Teamsec)/TeamSinglePage';
import Reveal from '@/components/Reveal';
import JoinUsSection from '@/sections/JoinUsSection';
import TeamCard from '@/components/(Team)/TeamCard';

interface TeamPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { slug } = await params;

  const team = await getTeamBySlug(slug);
  const allTeams = await getTeams();

  if (!team) {
    notFound(); 
  }

  const otherTeams = allTeams.filter((member) => member.slug !== slug);

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
          <p className="text-lg font-semibold text-center">
            Sizə ən yaxşı təcrübəni təqdim etməyə sadiqik
          </p>
        </div>
        <Reveal>
          <TeamCard team={otherTeams} />
        </Reveal>
      </div>
      <Reveal>
        <JoinUsSection />
      </Reveal>
    </div>
  );
}