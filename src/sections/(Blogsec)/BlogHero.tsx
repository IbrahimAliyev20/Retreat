"use client";

const BlogHero: React.FC = () => {

  return (
    <div
      className="relative pt-30  flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 text-center z-10">
        <h1
          className="text-6xl md:text-7xl font-serif custom-color mb-6 "
        >
          Sharing knowledge
        </h1>
        <p
          className="text-xl md:text-xl color-desc mb-8 "
        >
            Check our recent blog articles about yoga and diet.
        </p>
      </div>
    </div>
  );
};

export default BlogHero;