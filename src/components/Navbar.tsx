"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="w-full py-4 px-6 bg-[#fdf6e3] border-b border-[#e6d9b8]">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-[#5c4c1e]">
          <Image
            src="/images/logo.png"
            alt="Retreat You Logo"
            width={183}
            height={63}
            className="object-contain filter invert"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[#5c4c1e]">
          <Link href="/" className="hover:text-[#8a7229] transition-colors text-lg font-semibold">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#8a7229] transition-colors text-lg font-semibold">
            About
          </Link>
          <Link href="/blog" className="hover:text-[#8a7229] transition-colors text-lg font-semibold ">
                  Blog
          </Link>
            <Link href="/contact" className="hover:text-[#8a7229] transition-colors text-lg font-semibold ">
                  Contact
            </Link>
              <Link href="/retreats" className="hover:text-[#8a7229] transition-colors text-lg font-semibold">
                  Retreats
                </Link>

          <div className="relative">
            <button
              className="flex items-center gap-1 hover:text-[#8a7229] transition-colors text-lg font-semibold"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More Pages
              <ChevronDown className="h-4 w-4" />
            </button>

            {moreOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#f8f3e3] rounded-md shadow-lg py-2 z-10">
             
               
                 <Link href="/retreat-page" className="font-semibold block px-4 py-2 text-lg hover:bg-[#f0e9d2]">
                  Retreat page (CMS)
                </Link>
                
                <Link href="/team" className="font-semibold block px-4 py-2 text-lg hover:bg-[#f0e9d2]">
                  Team
                </Link>
                <Link href="/legal" className="font-semibold block px-4 py-2 text-lg hover:bg-[#f0e9d2]">
                  Legal
                </Link>
              </div>
            )}
          </div>
        </nav>

        <Link
          href="/cart"
          className="px-5 py-2 border border-[#5c4c1e] rounded-full text-[#5c4c1e] hover:bg-[#5c4c1e] hover:text-white transition-colors"
        >
          Cart
        </Link>

        <button className="md:hidden text-[#5c4c1e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
