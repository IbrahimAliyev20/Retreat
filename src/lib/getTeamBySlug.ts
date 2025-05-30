import { TeamsType } from "@/types/type";
import { cookies } from 'next/headers';

export async function getTeamBySlug(slug: string): Promise<TeamsType | null> {
  try {
    const cookieStore = await cookies();
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/team/${slug}`, {
      headers: {
        "Accept-Language": localeFromCookie,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Team fetch failed: ${res.status}`);
      return null;
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching team member:', error);
    return null;
  }
}

export async function getTeams(): Promise<TeamsType[]> {
  try {
    const cookieStore = await cookies();
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az';

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/teams`, {
      headers: {
        "Accept-Language": localeFromCookie,
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Teams fetch failed: ${res.status}`);
      return [];
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
}