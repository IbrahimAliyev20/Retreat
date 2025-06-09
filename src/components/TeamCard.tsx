import { TeamsType } from "@/types/type";
import { getSocialMedia } from "@/lib/sociallink";
import TeamCardClient from "./TeamCardClient";

interface TeamCardProps {
  team: TeamsType[];
}

export default async function TeamCard({ team }: TeamCardProps) {
  
  const data = await getSocialMedia();
  const socialLinksMap = data[0]; 
    
  return (
    <TeamCardClient team={team} socialLinksMap={socialLinksMap} />
  );
}