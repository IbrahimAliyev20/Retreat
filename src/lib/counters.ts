import { CountersType } from "@/types/type";

export async function getCounter(): Promise<CountersType[]> {
  const res = await fetch(`${process.env.BASE_URL}/counters`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}