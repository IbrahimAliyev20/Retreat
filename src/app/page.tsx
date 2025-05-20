import CustomCarousel from '@/components/caruselembla/CustomCarusel';
import HeroSection from '@/components/HeroSection';
import Reveal from '@/components/Reveal';
import { getComments } from '@/lib/comments';
import { getFaq } from '@/lib/faq';
import { getGallery } from '@/lib/gallery';
import Aboutsec from '@/sections/Aboutsec';
import Experience from '@/sections/Experience';
import FAQSection from '@/sections/FAQSection';
import JoinUsSection from '@/sections/JoinUsSection';
import RetreatScheduleSection from '@/sections/RetreatScheduleSection';
import TeamIntroSection from '@/sections/TeamIntroSection';
import TestimonialSlider from '@/sections/TestimonialSlider';
import YogaEscapeSection from '@/sections/YogaEscapeSection';

export default async function Home() {
  const comment = await getComments();
  const faqs = await getFaq();
  const images = await getGallery();

  return (
    <div>
      <Reveal>
<<<<<<< HEAD
      <div className="pt-34 md:pt-25 pb-10">
=======
      <div className="pt-34 md:pt-25" id='home'>
>>>>>>> 1b52a0d (Homepage)
        <HeroSection />
      </div>
      </Reveal>
 
   <Reveal>
      <div className="py-6 md:py-16" id='about'>
        <Aboutsec />
      </div>
   </Reveal>

      <Reveal>
      <div className="py-6 md:py-16" >
        <Experience />
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6 md:py-16">
        
              <CustomCarousel direction="left" images={images}/>
              <div className="mt-4">
                <CustomCarousel direction="right" images={images} />
              </div>
        
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6 md:py-16">
        <YogaEscapeSection />
      </div>
      </Reveal>

     <Reveal>
      <div className="py-6  md:py-16">
        <TestimonialSlider comment={comment} />
      </div>
     </Reveal>

      <Reveal>
      <div className="py-6 md:py-16" id='retreat'>
        <RetreatScheduleSection />
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6  md:py-16" id='team'>
        <TeamIntroSection />
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6  md:py-16">
        <FAQSection faqs={faqs} />
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6 md:py-0  md:pt-16 ">
        <div className='bg-color-yellow'>

        <JoinUsSection />
        </div>
      </div>
      </Reveal>
    </div>
  );
}
