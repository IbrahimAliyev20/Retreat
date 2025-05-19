import BlogSingle from '@/sections/(Blogsec)/Blogsinglepage';
import React from 'react';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const Blogpage = ({ params }: BlogPageProps) => {
  return (
    <div>
      <BlogSingle params={params} />
    </div>
  );
};

export default Blogpage;

export async function generateStaticParams() {
  return [{ slug: 'nutrition-tips-for-yogis' }];
}