import BlogCardSec from '@/sections/(Blogsec)/BlogCardSec';
import BlogSingle from '@/sections/(Blogsec)/Blogsinglepage';
import React from 'react';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const Blogpage = ({ params }: BlogPageProps) => {
  return (
    <div className='container mx-auto'>
      <BlogSingle params={params} />
      <div>
        <p className='text-6xl font-semibold'>Other blog posts</p>
        
      </div>
      <BlogCardSec/>

    </div>
  );
};

export default Blogpage;

export async function generateStaticParams() {
  return [{ slug: 'nutrition-tips-for-yogis' }];
}