import React from "react"
import Image from "next/image"
import Link from "next/link"
import { getSocialMedia } from "@/lib/sociallink"

const Footer: React.FC = async () => {
  const data = await getSocialMedia()

  return (
    <footer className="bg-white w-full text-[#4A3C31] py-8 px-6 font-sans">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
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
            Elit proqramla sağlamlığınızı və enerjinizi artırın.
          </p>
          <div className="flex gap-4 mb-4">
            {data.map((item, index) => (
              <Link key={index} href={item.link} target="_blank">
                <Image
                  src={item.image}
                  alt={`social-icon-${index}`}
                  width={30}
                  height={30}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-wrap gap-8">
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Ana səhifə</Link></li>
              <li><Link href="/about" className="hover:underline">Haqqımızda</Link></li>
              <li><Link href="/contact" className="hover:underline">Əlaqə</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">&nbsp;</h3>
            <ul className="text-md space-y-2">
              <li><Link href="/blog" className="hover:underline">Bloqlar</Link></li>
              <li><Link href="/service" className="hover:underline">Xidmətlər</Link></li>
              <li><Link href="/marafon" className="hover:underline">Marafon</Link></li>
              <li><Link href="/team" className="hover:underline">Komanda</Link></li>
            </ul>
          </div>
        </div>

        <div className="bg-[#2e826a] text-white p-6 rounded-lg flex-1">
          <div>
            <ul className="text-md space-y-4">
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/posticon.png"
                  alt="Message Icon"
                  width={26}
                  height={26}
                  className="filter brightness-[10]"
                />
                <a href="mailto:fitvibe@wavesdesign.io" className="hover:underline">
                  Fitvibe@wavesdesign.io
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/locationicon.png"
                  alt="Location Icon"
                  width={26}
                  height={26}
                  className="filter brightness-[10]"
                />
                <span>Baku, Azerbaijan</span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/icons/messageicon.png"
                  alt="Post Icon"
                  width={26}
                  height={26}
                  className="filter brightness-[10]"
                />
                <a href="#" className="hover:underline">@FitVibe</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center pt-4 mt-10 border-t-1 border-[#00000038]">
        Bütün hüquqlar Fitvibe tərəfindən qorunur. Veb sayt
        <Link href={"https://markup.az/"} target="_blank" className="mx-1">
          Markup
        </Link>
        tərəfindən hazırlanıb.
      </p>
    </footer>
  )
}

export default Footer
