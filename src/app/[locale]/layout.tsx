import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MetaTagsType } from "@/types/type";
import { getMetaTags } from "@/lib/metatags";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import TopLoader from "@/components/TopLoader";
import { getMessages } from "next-intl/server";

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

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const {locale} = await params;
  const messages = (await getMessages()) as Record<string, string>;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body className="bg-[#f3f3f3] custom-color n">
        <TopLoader />
         <NextIntlClientProvider messages={messages} >
        <header className="fixed w-full z-50">
          <Navbar />
        </header>
        <main >
          {children}
        </main>
        <footer className="w-full z-50">
          <Footer />
        </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}