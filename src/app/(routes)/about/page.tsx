import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { getContact } from "@/lib/contact";
import { getFaq } from "@/lib/faq";
import AboutContactScroll from "@/sections/(Aboutsec)/AboutContactScroll";
import AboutHero from "@/sections/(Aboutsec)/AboutHero";
import Aboutsec from "@/sections/Aboutsec";
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
        <div className="py-6 md:py-16">
          <AboutContactScroll />
        </div>
      </Reveal>
      <Reveal>
        <div className="py-6 md:py-16">
          <Experience />
        </div>
      </Reveal>
      <Reveal>
        <div className="py-6 md:py-16">
          <Aboutsec />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-6 md:py-16">
          <FAQSection faqs={faqs} />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-6 md:py-16">
          <ContactForm contactData={data} />
        </div>
      </Reveal>

      <Reveal>
        <div className="py-6 md:py-16">
            <JoinUsSection />
        </div>
      </Reveal>
    </div>
  );
}
