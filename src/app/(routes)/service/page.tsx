import Reveal from '@/components/Reveal'
import ServiceCard from '@/components/ServiceCard'
import { getFaq } from '@/lib/faq'
import Teacherteam from '@/sections/(Aboutsec)/Teacherteam'
import ServiceHero from '@/sections/(Service)/ServiceHero'
import FAQSection from '@/sections/FAQSection'
import React from 'react'
import { getMetaTags } from '@/lib/metatags'
import { MetaTagsType } from '@/types/type'

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Service') || {
    meta_title: 'FıtVıbe | Service title',
    meta_description: 'FıtVıbe | Service title',
    meta_keywords: 'FıtVıbe | Service title',
    
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

const RetreatsPage =async () => {
    const faqs = await getFaq()
  return (
    <div>
      <Reveal>
            <div >
            <ServiceHero />
            </div >
      </Reveal>
      <Reveal>
      <div className='py-6 md:py-16'>
      <ServiceCard />
      </div>

      </Reveal>

      <Reveal>
   <div className='py-6 md:py-16'>
      <Teacherteam />
      </div>
      </Reveal>
   <Reveal>
       <div className='py-6 md:py-16'>
        <FAQSection faqs ={faqs}/>
      </div>
   </Reveal>
    
    </div>
  )
}

export default RetreatsPage