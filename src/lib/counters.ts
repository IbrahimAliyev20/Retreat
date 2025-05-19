import { CountersType } from "@/types/type";
import {cookies} from 'next/headers'


export async function getCounter(): Promise<CountersType[]> {

   const cookieStore= await cookies()
   const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/counters`, {
       headers: {
            "Accept-Language": localeFromCookie, 
        },
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}