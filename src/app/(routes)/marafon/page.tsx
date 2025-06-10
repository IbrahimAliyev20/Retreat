import Reveal from '@/components/Reveal'
import { getFaq } from '@/lib/faq'
import MarafonHero from '@/sections/(Marafonsec)/MarafonHero'
import MarafonCards from '@/sections/(Marafonsec)/MarafonPage'
import FAQSection from '@/sections/FAQSection'
import JoinUsSection from '@/sections/JoinUsSection'
import React from 'react'
import { MetaTagsType } from '@/types/type'
import { getMetaTags } from '@/lib/metatags'


export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Maraphon') || {
    meta_title: 'FıtVıbe | Maraphon title',
    meta_description: 'FıtVıbe | Maraphon desc',
    meta_keywords: 'FıtVıbe | Maraphon keyw',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}

const MarafonPage = async () => {
    const faqs = await getFaq();
  

  return (
    <div>
      <Reveal >
      <MarafonHero />
      </Reveal>

      <Reveal>
        <div className="py-6 md:py-16">
      <MarafonCards /> 
        </div>
      </Reveal>

      <Reveal>
      <div className="py-6 md:py-16">
      <FAQSection faqs={faqs}  />
      </div>
      </Reveal>

      <Reveal>
        <div className="py-6 md:py-16">
      <JoinUsSection />
        </div>
      </Reveal>
    </div>
  )
}

export default MarafonPage