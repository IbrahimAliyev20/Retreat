import CustomCarousel from '@/components/caruselembla/CustomCarusel';
import HeroSection from '@/components/HeroSection';
import { getComments } from '@/lib/comments';
import { getFaq } from '@/lib/faq';
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

  return (
    <div>
      <div className="py-0">
        <HeroSection />
      </div>

      <div className="py-16">
        <Aboutsec />
      </div>

      <div className="py-16">
        <Experience />
      </div>

      <div className="py-16">
        
              <CustomCarousel direction="left" />
              <div className="mt-4">
                <CustomCarousel direction="right" />
              </div>
        
      </div>

      <div className="py-16">
        <YogaEscapeSection />
      </div>

      <div className="py-16">
        <TestimonialSlider comment={comment} />
      </div>

      <div className="py-16">
        <RetreatScheduleSection />
      </div>

      <div className="py-16">
        <TeamIntroSection />
      </div>

      <div className="py-16">
        <FAQSection faqs={faqs} />
      </div>

      <div className="py-16">
        <JoinUsSection />
      </div>
    </div>
  );
}