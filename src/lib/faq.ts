import { FAQType } from "@/types/type";
import { cookies } from 'next/headers';

export async function getFaq(): Promise<FAQType> {
  try {
    const cookieStore = await cookies();
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faq`, {
      headers: {
        "Accept-Language": localeFromCookie,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`FAQ fetch failed: ${res.status}`);
      return [];
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}