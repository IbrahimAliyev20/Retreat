import ContactForm from '@/components/ContactForm'
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
      <div className='py-26'>
        <ContactForm  contactData={data} />
      </div>
      <div className='py-16'>
        <FAQSection faqs ={faqs}/>
      </div>
      <div className='py-16'>
        <JoinUsSection />
      </div>
    </div>
  )
}

export default ContactPage