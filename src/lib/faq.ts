import { FAQType } from "@/types/type";
import {cookies} from 'next/headers'

export async function getFaq(): Promise<FAQType> {
   const cookieStore= await cookies()
   const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; 


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faq`, {
       headers: {
            "Accept-Language": localeFromCookie, 
        },
    cache: "no-store",
  });

  const json = await res.json();
  console.log(json)
  return json.data;

}