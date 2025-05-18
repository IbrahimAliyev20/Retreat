import { FAQType } from "@/types/type";

export async function getFaq(): Promise<FAQType[]> {
  const res = await fetch(`${process.env.BASE_URL}/faq`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}