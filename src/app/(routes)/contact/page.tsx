import ContactForm from '@/components/ContactForm'
import FAQSection from '@/sections/FAQSection'
import JoinUsSection from '@/sections/JoinUsSection'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <div className='py-26'>
        <ContactForm />
      </div>
      <div className='py-16'>
        <FAQSection />
      </div>
      <div className='py-16'>
        <JoinUsSection />
      </div>
    </div>
  )
}

export default ContactPage