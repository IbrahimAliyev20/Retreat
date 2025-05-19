"use client"
import type React from "react"

const AboutHero: React.FC = () => {
  return (
    <div>
      <div
        className="relative opacity-90 custom-color py-16"
        style={{
          height: "100vh",
          backgroundImage: "url(/images/abouthero.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col items-start justify-center">
          <h1 className="text-7xl font-serif mb-4 " >
            We are here to help you!
          </h1>
          <p className="text-2xl opacity-80 mb-8 " >
            Retreat You is a team of dedicated professionals so you can heal.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="">
              <h3 className="text-7xl font-serif text-[#3A2E1F] mb-2">10</h3>
              <p className="text-[#3A2E1F] opacity-80">professionals</p>
            </div>
            <div className="">
              <h3 className="text-7xl font-serif text-[#3A2E1F] mb-2">1</h3>
              <p className="text-[#3A2E1F] opacity-80">amazing location</p>
            </div>
            <div className="">
              <h3 className="text-7xl font-serif text-[#3A2E1F] mb-2">1000+</h3>
              <p className="text-[#3A2E1F] opacity-80">people healed</p>
            </div>
            <div className="">
              <h3 className="text-7xl font-serif text-[#3A2E1F] mb-2">∞</h3>
              <p className="text-[#3A2E1F] opacity-80">experiences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
