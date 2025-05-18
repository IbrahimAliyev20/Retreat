import { CountersType } from "@/types/type";

export async function getFaq(): Promise<CountersType[]> {
  const res = await fetch(`${process.env.BASE_URL}/counters`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}