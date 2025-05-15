"use client"
import React, { useRef, useMemo } from "react"
import Image from "next/image"
import useScrollAnimation from "../hook/useScrollAnimation"

const RetreatScheduleSection: React.FC = () => {
  const retreats = useMemo(
    () => [
      {
        title: "5 day detox programme",
        date: "May 10, 2023 - July 15, 2023",
        image: "/images/scrollsec1.jpg",
        description:
          "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae tortor. Maecenas ullamcorper, dui et placerat feugiat",
      },
      {
        title: "7 day yoga retreat",
        date: "June 1, 2023 - June 8, 2023",
        image: "/images/scrollsec2.jpg",
        description:
          "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis faucibus accumsan odio.",
      },
      {
        title: "10 day wellness escape",
        date: "August 5, 2023 - August 15, 2023",
        image: "/images/scrollsec3.jpg",
        description:
          "Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
      },
    ],
    [],
  ) 

  const stickyTitleRef = useRef<HTMLHeadingElement>(null)
  const stickyTextRef = useRef<HTMLParagraphElement>(null)
  const stickyButtonRef = useRef<HTMLButtonElement>(null)

  const cardRefs = useMemo(() => retreats.map(() => React.createRef<HTMLDivElement>()), [retreats])

  useScrollAnimation(stickyTitleRef, 0)
  useScrollAnimation(stickyTextRef, 0.2)
  useScrollAnimation(stickyButtonRef, 0.4)

  useScrollAnimation(cardRefs[0], 0.6)
  useScrollAnimation(cardRefs[1], 0.8)
  useScrollAnimation(cardRefs[2], 1.0)

  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row gap-72">
        <div className="md:w-1/3 sticky top-16 self-start">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#493913] mb-6 opacity-0"
            ref={stickyTitleRef}
            style={{ transition: "opacity 0.5s ease, transform 0.5s ease", transform: "translateY(20px)" }}
          >
            Upcoming retreats
          </h2>
          <p
            className="text-[#493913] mb-8 opacity-0"
            ref={stickyTextRef}
            style={{ transition: "opacity 0.5s ease, transform 0.5s ease", transform: "translateY(20px)" }}
          >
            Check our schedule and free spots, book the date and lets have fun!
          </p>
          <button
            className="bg-[#493913] text-white px-7 py-2 rounded-full hover:bg-[#5e4a1a] transition opacity-0"
            ref={stickyButtonRef}
            style={{ transition: "opacity 0.5s ease, transform 0.5s ease", transform: "translateY(20px)" }}
          >
            See all retreats
          </button>
        </div>
        <div className="md:w-2/5 space-y-12">
          {retreats.map((retreat, index) => (
            <div
              key={index}
              className="bg-[#f3e8ce] hover:bg-[#efe3c0] rounded-3xl p-12 shadow-md opacity-0"
              ref={cardRefs[index]}
              style={{ transition: "opacity 0.5s ease, transform 0.5s ease", transform: "translateY(20px)" }}
            >
              <h3 className="text-xl font-semibold text-[#493913] mb-2">{retreat.title}</h3>
              <p className="text-xl font-light text-[#493913] mb-8">{retreat.date}</p>
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={retreat.image || "/placeholder.svg"}
                  alt={retreat.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                />
              </div>
              <p className="text-[#493913] mb-4">{retreat.description}</p>
              <button className="border border-[#493913] cursor-pointer text-[#493913] px-6 py-2 rounded-full hover:bg-[#493913] hover:text-white transition">
                Book now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RetreatScheduleSection
