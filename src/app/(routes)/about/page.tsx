import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { getContact } from "@/lib/contact";
import { getFaq } from "@/lib/faq";
import AboutContactScroll from "@/sections/(Aboutsec)/AboutContactScroll";
import AboutHero from "@/sections/(Aboutsec)/AboutHero";
import Teacherteam from "@/sections/(Aboutsec)/Teacherteam";
import Experience from "@/sections/Experience";
import FAQSection from "@/sections/FAQSection";
import JoinUsSection from "@/sections/JoinUsSection";

export default async function AboutPage() {
  const faqs = await getFaq();
  const data = await getContact();

  return (
    <div>
      <Reveal>
        <div>
          <AboutHero />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-24">
          <AboutContactScroll />
        </div>
      </Reveal>
      <Reveal>
        <div className="py-24">
          <Experience />
        </div>
      </Reveal>
      <Reveal>
        <div className="py-24">
          <Teacherteam />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-24">
          <FAQSection faqs={faqs} />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-24">
          <ContactForm contactData={data} />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-6 md:py-16 ">
            <JoinUsSection />
        </div>
      </Reveal>
    </div>
  );
}
