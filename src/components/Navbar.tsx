"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

const Navbar = () => {
  const [moreOpen, setMoreOpen] = useState(false)

  return (
    <header className="w-full py-4 px-6 bg-color-yellow border-b border-[#e6d9b8]">
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

        <nav className="hidden md:flex items-center gap-8 text-[black]">
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
                  <Link href="/team" className="hover:text-[#8a7229] transition-colors text-lg font-semibold">
                  Team
                </Link>

          
        </nav>

        

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
