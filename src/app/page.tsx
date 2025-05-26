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
import ServiceScheduleSection from '@/sections/ServiceScheduleSection';
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
      <div className="pt-34  pb-16" id='home'>
        <HeroSection />
      </div>
      </Reveal>
 
   <Reveal>
      <div className="py-6 md:py-20" id='about'>
        <Aboutsec />
      </div>
   </Reveal>

      <Reveal>
      <div className="py-6 md:py-20" >
        <Experience />
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6 md:py-20">
        <div className='container mx-auto text-center w-full md:w-[40%] flex flex-col'>
        <h1 className='text-4xl md:text-5xl font-serif text-brown mb-2 leading-snug'>Experience the location</h1>
        <h3  className='text-lg color-desc mb-8 '>Located in mountain side in Thailand our location offers peace and tranquility.</h3>
        </div>
        
              <CustomCarousel direction="left" images={images}/>
              <div className="mt-4">
                <CustomCarousel direction="right" images={images} />
              </div>
        
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6 md:py-20">
        <YogaEscapeSection />
      </div>
      </Reveal>

     <Reveal>
      <div className="py-6  md:py-20">
        <TestimonialSlider comment={comment} />
      </div>
     </Reveal>

      <Reveal>
      <div className="py-6 md:py-20" id='retreat'>
        <ServiceScheduleSection />
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6  md:py-20" id='team'>
        <TeamIntroSection />
      </div>
      </Reveal>

      <Reveal>
      <div className="py-6  md:py-20">
        <FAQSection faqs={faqs} />
      </div>
      </Reveal>

      <Reveal>
      <div className='py-6 md:py-20'>

        <JoinUsSection />
      </div>
      </Reveal>
    </div>
  );
}
