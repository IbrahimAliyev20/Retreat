import ContactForm from '@/components/ContactForm'
import AboutContactScroll from '@/sections/(Aboutsec)/AboutContactScroll'
import AboutHero from '@/sections/(Aboutsec)/AboutHero'
import Teacherteam from '@/sections/(Aboutsec)/Teacherteam'
import Experience from '@/sections/Experience'
import FAQSection from '@/sections/FAQSection'
import JoinUsSection from '@/sections/JoinUsSection'
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
      <div>

      <AboutHero />
      </div>
      <div className='py-26'>
        <AboutContactScroll />
      </div>
      <div className='py-26'>
        <Experience />
      </div>
      <div className='py-26'>
        <Teacherteam />
      </div>
      <div className='py-26'>
        <FAQSection />
      </div>
      <div className='py-26'>
        <ContactForm />
      </div>
      <div className='py-26'>
        <JoinUsSection />
      </div>
      
 
    </div>
  )
}

export default Aboutpage