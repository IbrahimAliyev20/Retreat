import { ServiceListResponse } from "@/types/servicetype";
import { cookies } from "next/headers";

export async function getServices(): Promise<ServiceListResponse> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "az";

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
    headers: {
      "Accept-Language": locale,
    },
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch services");

  return res.json();
}
