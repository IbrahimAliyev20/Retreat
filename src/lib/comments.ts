import { CommentsType } from "@/types/type";

export async function getFaq(): Promise<CommentsType[]> {
  const res = await fetch(`${process.env.BASE_URL}/comments`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}