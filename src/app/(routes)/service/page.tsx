import ServiceCard from '@/components/ServiceCard'
import { getFaq } from '@/lib/faq'
import Teacherteam from '@/sections/(Aboutsec)/Teacherteam'
import RetreatHero from '@/sections/(Retreatsec)/RetreatHero'
import FAQSection from '@/sections/FAQSection'
import React from 'react'

const RetreatsPage =async () => {
    const faqs = await getFaq()
  return (
    <div>
      <div >
      <RetreatHero />
      </div >
      <div className='py-16 '>
      <ServiceCard />
      </div>
      <div className='py-16'>
      <Teacherteam />
      </div>
      <div className='py-16'>
        <FAQSection faqs ={faqs}/>
      </div>
    </div>
  )
}

export default RetreatsPage