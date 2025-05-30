import { GalleryType } from "@/types/type";
import {cookies} from 'next/headers'


export async function getGallery(): Promise<GalleryType[]> {

    const cookieStore= await cookies()
    const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery`, {
    headers: {
            "Accept-Language": localeFromCookie, 
        },
    next: { revalidate: 3600 },
  });
  const json = await res.json();
  return json.data;
}