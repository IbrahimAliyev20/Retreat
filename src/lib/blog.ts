import { BlogResponse, BlogPost } from '@/types/blog';
import { cookies } from 'next/headers';

// Tüm blog yazılarını çeken fonksiyon
export async function getBlogs(): Promise<BlogResponse> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; // Varsayılan dil 'az'

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    headers: {
      'Accept-Language': localeFromCookie, // Dil başlığını ekliyoruz
    },
    cache: 'no-store', // Dinamik veri için önbelleği devre dışı bırak
  });

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return res.json();
}

// Tek bir blog yazısını slug'a göre çeken fonksiyon
export async function getBlogBySlug(slug: string): Promise<BlogPost> {
  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value || 'az'; // Varsayılan dil 'az'

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?slug=${slug}`, {
    headers: {
      'Accept-Language': localeFromCookie, // Dil başlığını ekliyoruz
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blog with slug: ${slug}`);
  }

  const data = await res.json();
  const blog = data.data.find((b: BlogPost) => b.slug === slug);
  if (!blog) {
    throw new Error(`Blog with slug ${slug} not found`);
  }
  return blog;
}