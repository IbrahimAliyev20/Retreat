import Reveal from "@/components/Reveal";
import { getFaq } from "@/lib/faq";
import { getMetaTags } from "@/lib/metatags";
import AboutContactScroll from "@/sections/(Aboutsec)/AboutContactScroll";
import AboutHero from "@/sections/(Aboutsec)/AboutHero";
import Aboutsec from "@/sections/Aboutsec";
import Experience from "@/sections/Experience";
import FAQSection from "@/sections/FAQSection";
import JoinUsSection from "@/sections/JoinUsSection";
import { MetaTagsType } from "@/types/type";

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'About') || {
    meta_title: 'FıtVıbe | About meta',
    meta_description: 'FıtVıbe | About meta',
    meta_keywords: 'FıtVıbe | About meta',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keywords,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}


export default async function AboutPage() {
  
  const faqs = await getFaq();

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
            <JoinUsSection />
        </div>
      </Reveal>
    </div>
  );
}
