import TeamCard from "@/components/(Team)/TeamCard";
import Reveal from "@/components/Reveal";
import { getTeams } from "@/lib/getTeamBySlug";
import TeamHero from "@/sections/(Teamsec)/TeamHero";
import Experience from "@/sections/Experience";
import JoinUsSection from "@/sections/JoinUsSection";
import ServiceScheduleSection from "@/sections/ServiceScheduleSection";
import { MetaTagsType } from "@/types/type";
import { getMetaTags } from "@/lib/metatags";


export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Team') || {
    meta_title: 'FıtVıbe | Team title',
    meta_description: 'FıtVıbe | Team title',
    meta_keywords: 'FıtVıbe | Team title',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}
export default async function TeamPage() {
  const team = await getTeams();

  return (
    <div>
      <Reveal>
        <div>
          <TeamHero />
        </div>
      </Reveal>
        <div className="py-6 md:py-16">
          <TeamCard team={team} />
        </div>

      <Reveal>
        <div className="py-6 md:py-16">
          <Experience />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-6 md:py-16">
          <ServiceScheduleSection />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-6  md:py-16">
          <JoinUsSection />
        </div>
      </Reveal>
    </div>
  );
}
