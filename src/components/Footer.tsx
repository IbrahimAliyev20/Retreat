import React from "react"
import Image from "next/image"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import Link from "next/link"

const Footer: React.FC = () => {
  return (
    <footer className="bg-color-yellow text-[#4A3C31] py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
       <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={178}
                  height={35}
                  className="filter invert"
                />
          </div>
          <p className="text-md mb-4">
            Elit massa non eros, consectetur non ac consequat in nisl mattis adipiscing tellus egestas gravida.
          </p>
          <div className="flex gap-4 mb-4">
            <FaInstagram className="text-xl" />
            <FaTwitter className="text-xl" />
            <FaYoutube className="text-xl" />
          </div>
        </div>

        <div className="flex-1 flex flex-wrap gap-8">
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="text- space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">&nbsp;</h3>
            <ul className="text-md space-y-2">
              <li><Link href="/retreats" className="hover:underline">Retreats</Link></li>
              <li><Link href="/legal" className="hover:underline">Legal</Link></li>
              <li><Link href="/team" className="hover:underline">Team</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-color-yellow p-8 rounded-lg shadow-sm">
            <ul className="text-md space-y-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/posticon.png"
                  alt="Message Icon"
                  width={26}
                  height={26}
                />
                <a href="mailto:templates@wavesdesign.io" className="hover:underline">
                  templates@wavesdesign.io
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/locationicon.png"
                  alt="Location Icon"
                  width={26}
                  height={26}
                />
                <span>Bangkok, Thailand</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/messageicon.png"
                  alt="Post Icon"
                  width={26}
                  height={26}
                />
                <a href="#" className="hover:underline">@retreat_you</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

   
    </footer>
  )
}

export default Footer
