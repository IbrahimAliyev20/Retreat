import RetreatCard from '@/components/RetreatCard'
import Teacherteam from '@/sections/(Aboutsec)/Teacherteam'
import RetreatHero from '@/sections/(Retreatsec)/RetreatHero'
import FAQSection from '@/sections/FAQSection'
import React from 'react'

const RetreatsPage = () => {
  return (
    <div>
      <div >
      <RetreatHero />
      </div >
      <div className='py-16'>
      <RetreatCard />
      </div>
      <div className='py-16'>
      <Teacherteam />
      </div>
      <div className='py-16'>
      <FAQSection />
      </div>
    </div>
  )
}

export default RetreatsPage