import TeamCard from '@/components/TeamCard'
import TeamHero from '@/sections/(Teamsec)/TeamHero'
import Experience from '@/sections/Experience'
import JoinUsSection from '@/sections/JoinUsSection'
import RetreatScheduleSection from '@/sections/RetreatScheduleSection'
import React from 'react'

const TeamPage = () => {
  return (
    <div>
      <div >
      <TeamHero />
      </div>
      <div className='py-16'>
        <TeamCard />
      </div>
      <div className='py-16'>
        <Experience />
      </div>
      <div className='py-16'>
      <RetreatScheduleSection />
      </div>
     <div className="py-6 md:py-0  md:pt-16 ">
        <div className='bg-color-yellow'>

        <JoinUsSection />
        </div>
      </div>
    </div>

  )
}

export default TeamPage