import { ServiceType } from "@/types/servicetype";
import { cookies } from "next/headers";

export async function getServiceDetail(slug: string): Promise<ServiceType> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/service/${slug}`, {
    headers: {
      "Accept-Language": locale,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch service detail");

  const json = await res.json();
  return json.data;
}
