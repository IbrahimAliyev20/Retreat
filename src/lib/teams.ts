import { TeamsType } from "@/types/type";

export async function getTeams(): Promise<TeamsType[]> {
  const res = await fetch(`${process.env.BASE_URL}/teams`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}