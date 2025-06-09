import { cookies } from 'next/headers';
import { MaraphonApiResponse, MaraphonType } from '@/types/maraphon';

export async function getMaraphon(): Promise<MaraphonType[]> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/maraphons`, {
    headers: {
      "Accept-Language": localeFromCookie,
    },
    cache: "no-store",
  });

  const json: MaraphonApiResponse = await res.json();

  return json.data;
}