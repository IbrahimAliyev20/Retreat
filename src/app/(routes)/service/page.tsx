import Reveal from '@/components/Reveal'
import ServiceCard from '@/components/ServiceCard'
import { getFaq } from '@/lib/faq'
import Teacherteam from '@/sections/(Aboutsec)/Teacherteam'
import RetreatHero from '@/sections/(Service)/RetreatHero'
import FAQSection from '@/sections/FAQSection'
import React from 'react'

const RetreatsPage =async () => {
    const faqs = await getFaq()
  return (
    <div>
      <Reveal>
            <div >
            <RetreatHero />
            </div >
      </Reveal>
      <Reveal>
      <div className='py-16 '>
      <ServiceCard />
      </div>

      </Reveal>

      <Reveal>
   <div className='py-16'>
      <Teacherteam />
      </div>
      </Reveal>
   <Reveal>
       <div className='py-16'>
        <FAQSection faqs ={faqs}/>
      </div>
   </Reveal>
    
    </div>
  )
}

export default RetreatsPage