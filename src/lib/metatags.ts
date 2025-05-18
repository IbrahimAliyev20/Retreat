import { MetaTagsType } from "@/types/type";

export async function getFaq(): Promise<MetaTagsType[]> {
  const res = await fetch(`${process.env.BASE_URL}/metatags`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}