import Reveal from "@/components/Reveal";
import { getMetaTags } from "@/lib/metatags";
import BlogCardSec from "@/sections/(Blogsec)/BlogCardSec";
import BlogHero from "@/sections/(Blogsec)/BlogHero";
import JoinUsSection from "@/sections/JoinUsSection";
import { MetaTagsType } from "@/types/type";
import React from "react";

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Blog') || {
    meta_title: 'FıtVıbe | Blog title',
    meta_description: 'FıtVıbe | Blog title',
    meta_keywords: 'FıtVıbe | Blog title',
    
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

const Blog = () => {
  return (
    <div>
      <Reveal>
        <div>
          <BlogHero />
        </div>
      </Reveal>

      <Reveal>
        <div>
          <BlogCardSec />
        </div>
      </Reveal>
      <Reveal>
        <div className="py-6  md:pt-16 ">
          <JoinUsSection />
        </div>
      </Reveal>
    </div>
  );
};

export default Blog;
