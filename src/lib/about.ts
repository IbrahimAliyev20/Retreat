import { AboutType } from "@/types/type";

export async function getFaq(): Promise<AboutType[]> {
  const res = await fetch(`${process.env.BASE_URL}/about`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}