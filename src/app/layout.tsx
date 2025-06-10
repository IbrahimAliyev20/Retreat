import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MetaTagsType } from "@/types/type";
import { getMetaTags } from "@/lib/metatags";

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'home') || {
    meta_title: 'Fitvibe',
    meta_description: 'Fitvibe',
    meta_keywords: 'Fitvibe',
    
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f3f3f3] custom-color n">
        <header className="fixed w-full z-50">
          <Navbar />
        </header>
        <main >
          {children}
        </main>
        <footer className="w-full z-50">
          <Footer />
        </footer>
      </body>
    </html>
  );
}