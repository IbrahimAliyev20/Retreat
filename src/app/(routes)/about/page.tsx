import ContactForm from '@/components/ContactForm';
import { getContact } from '@/lib/contact';
import { getFaq } from '@/lib/faq';
import AboutContactScroll from '@/sections/(Aboutsec)/AboutContactScroll';
import AboutHero from '@/sections/(Aboutsec)/AboutHero';
import Teacherteam from '@/sections/(Aboutsec)/Teacherteam';
import Experience from '@/sections/Experience';
import FAQSection from '@/sections/FAQSection';
import JoinUsSection from '@/sections/JoinUsSection';

export default async function AboutPage() {
  const faqs = await getFaq();
  const data = await getContact(); 

  return (
    <div>
      <div>
        <AboutHero />
      </div>
      <div className="py-24">
        <AboutContactScroll />
      </div>
      <div className="py-24">
        <Experience />
      </div>
      <div className="py-24">
        <Teacherteam />
      </div>
      <div className="py-24">
        <FAQSection faqs={faqs} />
      </div>
      <div className="py-24">
        <ContactForm contactData={data} />
      </div>
      <div className="py-6 md:py-0 md:pt-16">
        <div className="bg-color-yellow">
          <JoinUsSection />
        </div>
      </div>
    </div>
  );
}