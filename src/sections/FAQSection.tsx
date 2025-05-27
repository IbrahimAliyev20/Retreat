"use client";
import { useState } from "react";
import { FAQType } from "@/types/type";
import Reveal from "@/components/Reveal";

interface FAQSectionProps {
  faqs: FAQType;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [activeTab, setActiveTab] = useState(faqs[0]?.title || "");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  if (!faqs || faqs.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal duration={0.5} yOffset={40}>
          <h2 className="text-4xl font-serif text-[#564418] text-center mb-4">
            Frequently asked questions
          </h2>
        </Reveal>
        <Reveal duration={0.7} yOffset={50}>
          <p className="text-lg text-[#564418] text-center mb-8">
            No FAQs available at the moment.
          </p>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal duration={0.5} yOffset={40}>
        <h2 className="text-4xl font-serif custom-color text-center mb-4">
          Tez-tez verilən suallar
        </h2>
      </Reveal>
      <Reveal duration={0.7} yOffset={50}>
        <p className="text-lg color-desc text-center mb-8">
          İnsanlar həyatın müxtəlif mərhələlərində fərqli təcrübələr yaşayırlar.
        </p>
      </Reveal>
      <Reveal duration={0.9} yOffset={60}>
        <div className="flex justify-center space-x-4 mb-8">
          {faqs.map((category) => (
            <button
              key={category.slug}
              onClick={() => handleTabChange(category.title)}
              className={`py-2 px-6 rounded-full font-medium transition ${
                activeTab === category.title
                  ? "custom-color-bg1 text-white"
                  : "bg-color-yellow text-black hover:bg-opacity-80"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </Reveal>
      <div className="bg-[#f5ecd73a2e1f] rounded-xl p-6">
        {faqs
          .find((category) => category.title === activeTab)
          ?.faqs.map((faq, index) => (
            <Reveal key={index} duration={0.7 + index * 0.2} yOffset={50 + index * 10}>
              <div className="border-b border-[#564418] border-opacity-20 py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <p className="text-[#564418] text-lg">{faq.question}</p>
                  <span className="text-[#564418] text-2xl">
                    {openQuestion === index ? "−" : "+"}
                  </span>
                </div>
                {openQuestion === index && (
                  <p className="text-[#3A2E1F] mt-2 opacity-80">{faq.answer || "No answer provided."}</p>
                )}
              </div>
            </Reveal>
          ))}
      </div>
    </div>
  );
};

export default FAQSection;