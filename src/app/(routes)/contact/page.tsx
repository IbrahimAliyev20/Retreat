import ContactForm from '@/components/(Contact)/ContactForm'
import Reveal from '@/components/Reveal'
import { getContact } from '@/lib/contact'
import { getFaq } from '@/lib/faq'
import { getMetaTags } from '@/lib/metatags'
import FAQSection from '@/sections/FAQSection'
import JoinUsSection from '@/sections/JoinUsSection'
import { MetaTagsType } from '@/types/type'
import React from 'react'

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Contact') || {
    meta_title: 'FıtVıbe | Contact title',
    meta_description: 'FıtVıbe | Contact title',
    meta_keywords: 'FıtVıbe | Contact title',
    
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

const ContactPage = async () => {
  const data = await getContact(); 
  const faqs = await getFaq()
  return (
    <div>
      <Reveal>
      <div className='py-26'>
        <ContactForm  contactData={data} />
      </div>
      </Reveal>
      <Reveal>
      <div className='py-16'>
        <FAQSection faqs ={faqs}/>
      </div>
      </Reveal>
      <Reveal>
      <div className='py-16'>
        <JoinUsSection />
      </div>
      </Reveal>
    </div>
  )
}

export default ContactPage