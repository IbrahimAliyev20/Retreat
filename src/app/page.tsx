
import Carousel from "@/components/Carusel";
import HeroSection from "@/components/HeroSection";
import Aboutsec from "@/sections/Aboutsec";
import Experience from "@/sections/Experience";
// import FAQSection from "@/sections/FAQSection";
import JoinUsSection from "@/sections/JoinUsSection";
import RetreatScheduleSection from "@/sections/RetreatScheduleSection";
import TeamIntroSection from "@/sections/TeamIntroSection";
import TestimonialSlider from "@/sections/TestimonialSlider";
import YogaEscapeSection from "@/sections/YogaEscapeSection";

export default function Home() {
  return (
          <div>

            <div className="py-0 ">
          <HeroSection />
            </div>

            <div className="py-16">
          <Aboutsec />
            </div>
            <div className="py-16">
          <Experience />
            </div>
            <div className="py-16">
          <Carousel />
            </div>
            <div className="py-16">
              <YogaEscapeSection />
            </div>
            <div className="py-16">
              <TestimonialSlider />
            </div>
            <div className="py-16">
              <RetreatScheduleSection />
            </div>
            <div className="py-16">
              <TeamIntroSection />
            </div>
            <div className="py-16">
              {/* <FAQSection /> */}
            </div>
            <div className="py-16">
              <JoinUsSection />
            </div>
          </div>
  );
}
