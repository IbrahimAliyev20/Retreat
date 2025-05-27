'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (moreOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [moreOpen]);

  const toggleMenu = () => {
    setMoreOpen(!moreOpen);
  };

  return (
    <header className="py-4 px-6 bg-[#fff]  ">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#5c4c1e]">
          <Image
            src="/images/logo.png"
            alt="Retreat You Logo"
            width={143}
            height={63}
            className="object-contain filter invert"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[#5b5b5b]">
          <Link
            href="/"
            className={`transition-colors text-lg font-semibold ${pathname === '/' ? 'text-[#8a7229] font-bold' : ''}`}
          >
            Ana səhifə
          </Link>
          <Link
            href="/about"
            className={`transition-colors text-lg font-semibold ${pathname === '/about' ? 'text-[#8a7229] font-bold' : ''}`}
          >
            Haqqımızda
          </Link>
          <Link
            href="/team"
            className={`transition-colors text-lg font-semibold ${pathname === '/team' ? 'text-[#8a7229] font-bold' : ''}`}
          >
            Komanda
          </Link>
          <Link
            href="/service"
            className={`transition-colors text-lg font-semibold ${pathname === '/service' ? 'text-[#8a7229] font-bold' : ''}`}
          >
            Xidmətlər
          </Link>
          <Link
            href="/blog"
            className={`transition-colors text-lg font-semibold ${pathname === '/blog' ? 'text-[#8a7229] font-bold' : ''}`}
          >
            Bloqlar
          </Link>
          <Link
            href="/contact"
            className={`transition-colors text-lg font-semibold ${pathname === '/contact' ? 'text-[#8a7229] font-bold' : ''}`}
          >
            Əlaqə
          </Link>
        </nav>

        <button
          className="md:hidden text-[#5c4c1e]"
          onClick={toggleMenu}
          aria-label={moreOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          {moreOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white   transform transition-transform duration-300 ease-in-out ${
            moreOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-50`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-[#5c4c1e]"
              aria-label="Menüyü kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className={`hover:text-[#8a7229] transition-colors text-lg font-semibold ${pathname === '/' ? 'text-[#8a7229] font-bold' : ''}`}
              onClick={toggleMenu}
            >
              Ana səhifə
            </Link>
            <Link
              href="/about"
              className={`hover:text-[#8a7229] transition-colors text-lg font-semibold ${pathname === '/about' ? 'text-[#8a7229] font-bold' : ''}`}
              onClick={toggleMenu}
            >
              Haqqımızda
            </Link>
            <Link
              href="/team"
              className={`hover:text-[#8a7229] transition-colors text-lg font-semibold ${pathname === '/team' ? 'text-[#8a7229] font-bold' : ''}`}
              onClick={toggleMenu}
            >
              Komanda
            </Link>
            <Link
              href="/service"
              className={`hover:text-[#8a7229] transition-colors text-lg font-semibold ${pathname === '/service' ? 'text-[#8a7229] font-bold' : ''}`}
              onClick={toggleMenu}
            >
              Xidmətlər
            </Link>
            <Link
              href="/blog"
              className={`hover:text-[#8a7229] transition-colors text-lg font-semibold ${pathname === '/blog' ? 'text-[#8a7229] font-bold' : ''}`}
              onClick={toggleMenu}
            >
              Bloqlar
            </Link>
            <Link
              href="/contact"
              className={`hover:text-[#8a7229] transition-colors text-lg font-semibold ${pathname === '/contact' ? 'text-[#8a7229] font-bold' : ''}`}
              onClick={toggleMenu}
            >
              Əlaqə
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;