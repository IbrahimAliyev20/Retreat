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
      <div>
        <JoinUsSection />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Blog