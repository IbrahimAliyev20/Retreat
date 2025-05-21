import Reveal from "@/components/Reveal";
import BlogCardSec from "@/sections/(Blogsec)/BlogCardSec";
import BlogHero from "@/sections/(Blogsec)/BlogHero";
import JoinUsSection from "@/sections/JoinUsSection";
import React from "react";

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
