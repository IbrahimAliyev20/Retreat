import { JoinUsType } from "@/types/type";

export async function getFaq(): Promise<JoinUsType[]> {
  const res = await fetch(`${process.env.BASE_URL}/join-us`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}