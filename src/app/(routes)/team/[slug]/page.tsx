import TeamCard from "@/components/TeamCard";
import TeamSinglePage from "@/sections/(Teamsec)/TeamSinglePage";

interface TeamPageProps {
  params: {
    slug: string;
  };
}

const TeamPage = ({ params }: TeamPageProps) => {
  return (
    <div className="container mx-auto py-20 flex flex-col gap-32">
      <div>
      <TeamSinglePage params={params} />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
        <p className='text-5xl font-semibold text-center'>Meet others</p>
        <p className='text-lg font-semibold text-center'>We are dedicated to give you the best experience.</p>
        </div>
        
        <TeamCard />
      </div>
    </div>
  );
};

export default TeamPage;

