import { TeamsType } from "@/types/type";
import TeamCardClient from "./TeamCardClient";

interface TeamCardProps {
  team: TeamsType[];
}

export default async function TeamCard({ team }: TeamCardProps) {
  
 
    
  return (
    <TeamCardClient team={team}  />
  );
}