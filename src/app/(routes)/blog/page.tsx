import BlogCardSec from '@/sections/(Blogsec)/BlogCardSec'
import BlogHero from '@/sections/(Blogsec)/BlogHero'
import JoinUsSection from '@/sections/JoinUsSection'
import React from 'react'

const Blog = () => {
  return (
    <div>

      <div>
      <BlogHero />
      </div>

       <div>
        <BlogCardSec />
      </div>
     <div className="py-6 md:py-0  md:pt-16 ">
        <div className='bg-color-yellow'>

        <JoinUsSection />
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Blog