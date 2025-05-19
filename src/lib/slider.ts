import { SliderType } from "@/types/type";

export async function getSlider(): Promise<SliderType[]> {
  const res = await fetch(`${process.env.BASE_URL}/slider`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}