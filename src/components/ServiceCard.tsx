import Image from "next/image";
import { getServices } from "@/lib/service";
import Link from "next/link";
const ServiceCard = async () => {
  const data = await getServices();
  const cards = data.data;

  return (
    <section>
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex mb-45 items-center justify-center"
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 sm:px-6 lg:px-8">
            <div className="w-full md:w-1/2 text-left md:pr-8">
              <p className="text-4xl custom-color mb-4 whitespace-pre-line">
                {card.date_range.split(" - ")[0]}
              </p>
              <p className="text-2xl color-desc mb-4 whitespace-pre-line">
                {card.date_range.split(" - ")[1]}
              </p>
       
              <Link
                href={`/service/${card.slug}`}
                className="bg-[#2e826a] text-xl text-white py-2 px-7 rounded-full hover:bg-opacity-90 transition"
              >
                İndi sifariş et
              </Link>
            </div>

            <div className="flex flex-col gap-12 bg-white w-full md:w-1/2 mt-8 md:mt-0 p-10">
              <div className="flex justify-between">
                <h3 className="text-4xl font-serif custom-color">
                  {card.title}
                </h3>
              </div>
              <div className="relative w-full h-[50vh]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="mt-4">
                <p className="text-xl color-desc opacity-80">
                  {card.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServiceCard;