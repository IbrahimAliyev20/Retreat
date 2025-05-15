import React from "react"
import Image from "next/image"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fff9e9] text-[#4A3C31] py-12 px-6 font-sans">
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
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">&nbsp;</h3>
            <ul className="text-md space-y-2">
              <li><a href="#" className="hover:underline">Retreats</a></li>
              <li><a href="#" className="hover:underline">Legal</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
            </ul>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-[#f5ecd7] p-8 rounded-lg shadow-sm">
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

      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-[#4A3C31]/20 flex flex-col md:flex-row justify-between text-md">
        <p>
          Template designed by <a href="#" className="underline">Wavesdesign</a>, powered by no-code <a href="#" className="underline">Webflow</a>
        </p>
        <a href="#" className="underline mt-4 md:mt-0">See all templates</a>
      </div>
    </footer>
  )
}

export default Footer
