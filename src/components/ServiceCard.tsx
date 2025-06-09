import Image from "next/image";
import { getServices } from "@/lib/service";
import Link from "next/link";

const ServiceCard = async () => {
  const data = await getServices();
  const cards = data.data;


  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-16 md:gap-40">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col">
            <div className="border-b-[0.5px] bg-gray-700 opacity-55 shadow-md mb-40"></div>

            <div
              key={index}
              className="flex flex-col md:flex-row justify-between gap-12"
            >
              {/* Text Section (Sol tərəf) */}
              <div className="w-full md:w-1/3 text-left md:sticky top-24 self-start">
                {/* Tarix */}
                <p className="text-4xl custom-color mb-4 whitespace-pre-line">
                  {card.date_range.split(" - ")[0]}
                </p>
                <p className="text-2xl color-desc mb-4 whitespace-pre-line">
                  {card.date_range.split(" - ")[1]}
                </p>

                {/* --- YENİ ƏLAVƏ OLUNAN HİSSƏ BAŞLADI --- */}
                <div className="my-6 space-y-4">
                  {/* Attribute 1 (Açar-Dəyər) */}
                  {card.attribute_1 && card.attribute_1.length > 0 && (
                    <div className="border-t border-gray-300 pt-4">
                      {card.attribute_1.map((attr, attrIndex) => (
                        <div
                          key={attrIndex}
                          className="flex justify-between color-desc mb-2"
                        >
                          <span>{attr.key}</span>
                          <span className="font-semibold">{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Attribute 2 (Şəkil-Dəyər) */}
                  {card.attribute_2 && card.attribute_2.length > 0 && (
                    <div className="border-t border-gray-300 pt-4">
                      {card.attribute_2.map((attr, attrIndex) => (
                        <div
                          key={attrIndex}
                          className="flex items-center color-desc mb-2"
                        >
                          <span className="mr-2 relative w-6 h-6">
                            <Image
                              src={attr.image}
                              alt={attr.value}
                              fill
                              className="object-contain"
                            />
                          </span>
                          <span>{attr.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {/* --- YENİ ƏLAVƏ OLUNAN HİSSƏ BİTDİ --- */}

                {/* Sifariş Düyməsi */}
                <Link
                  href={`/service/${card.slug}`}
                  className="border border-[#2e826a] cursor-pointer text-[#2e826a] px-6 py-2 rounded-full hover:bg-[#2e826a] hover:text-white transition"
                >
                  İndi sifariş et
                </Link>
              </div>

              {/* Image Card Section (Sağ tərəf) */}
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
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;