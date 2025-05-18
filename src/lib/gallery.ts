import { GalleryType } from "@/types/type";

export async function getFaq(): Promise<GalleryType[]> {
  const res = await fetch(`${process.env.BASE_URL}/gallery`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}