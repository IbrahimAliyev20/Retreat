import ContactForm from '@/components/(Contact)/ContactForm'
import Reveal from '@/components/Reveal'
import { getContact } from '@/lib/contact'
import { getFaq } from '@/lib/faq'
import FAQSection from '@/sections/FAQSection'
import JoinUsSection from '@/sections/JoinUsSection'
import React from 'react'

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