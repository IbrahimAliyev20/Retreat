import BlogPostCard from '@/components/BlogPostCard';
import React from 'react';

const BlogCardSec: React.FC = () => {
  const blogPosts = [
    {
      title: 'Nutrition Tips',
      description:
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
      imageSrc: '/images/scrollsec1.jpg', 
      delay: 0,
    },
    {
      title: 'Yoga Benefits',
      description:
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
      imageSrc: '/images/scrollsec2.jpg', 
      delay: 0.2,
    },
    {
      title: 'Mindfulness Guide',
      description:
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut.',
      imageSrc: '/images/scrollsec3.jpg',
      delay: 0.4,
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              description={post.description}
              imageSrc={post.imageSrc}
              delay={post.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCardSec;