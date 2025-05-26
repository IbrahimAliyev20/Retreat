import Image from "next/image";
import { getServices } from "@/lib/service";
import Link from "next/link";

const ServiceCard = async () => {
  const data = await getServices();
  const cards = data.data;

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-54">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between gap-12"
          >
            {/* Text Section */}
            <div className="w-full md:w-1/3 text-left md:sticky top-24 self-start">
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

            {/* Image Card Section */}
            <div className="w-full md:w-2/3 flex flex-col gap-6 bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-3xl font-serif custom-color">
                {card.title}
              </h3>
              <div className="relative w-full h-[40vh]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <p className="text-lg color-desc opacity-80">
                {card.short_description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi, adipisci quasi architecto at aliquam, earum, eveniet impedit ratione assumenda nesciunt eos. Sint quaerat, facilis molestias corporis explicabo laborum consectetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reiciendis sunt ut laudantium numquam totam. Adipisci a aut quas molestiae explicabo repellendus quisquam recusandae, eligendi, placeat nesciunt quia fuga tenetur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard
