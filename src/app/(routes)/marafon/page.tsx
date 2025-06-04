import Reveal from '@/components/Reveal'
import { getFaq } from '@/lib/faq'
import MarafonHero from '@/sections/(Marafonsec)/MarafonHero'
import MarafonCards from '@/sections/(Marafonsec)/MarafonPage'
import FAQSection from '@/sections/FAQSection'
import JoinUsSection from '@/sections/JoinUsSection'
import React from 'react'

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