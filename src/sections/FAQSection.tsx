"use client";
import { useState, } from 'react';

const FAQSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Location');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);


  const faqData = {
    Location: [
      { question: 'Where are you located?', answer: 'We are located in Thailand.' },
      { question: 'Where in Thailand are you located?', answer: 'Our retreat is in the mountain-side region of Chiang Mai, Thailand.' },
    ],
    Retreat: [
      { question: 'Is Retreat You good for me?', answer: 'Absolutely! Retreat You is designed for anyone looking to disconnect and rejuvenate.' },
      { question: 'I have no yoga experience, can I join?', answer: 'Yes, our retreats are suitable for all levels, including beginners.' },
      { question: 'I have allergies, can I join?', answer: 'Yes, please inform us of your allergies, and we’ll accommodate your needs.' },
      { question: 'What is the price of the retreat?', answer: 'Prices vary depending on the program. Please check our schedule for details.' },
    ],
    General: [
      { question: 'Do you offer discounts?', answer: 'Yes, we offer seasonal discounts. Contact us for more information.' },
      { question: 'What is the cost of Webflow Retreat Template?', answer: 'This is not applicable to our services. We offer real retreat experiences!' },
    ],
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenQuestion(null);
  };

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        className="text-4xl font-serif text-[#564418] text-center mb-4 "
      >
        Frequently asked questions
      </h2>
      <p
        className="text-lg text-[#564418] text-center mb-8 "
      >
        Pellentesque habitant morbi tristique senectus.
      </p>
      <div
        className="flex justify-center space-x-4 mb-8 "
      >
        {['Location', 'Retreat', 'General'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`py-2 px-6 rounded-full font-medium transition ${
              activeTab === tab
                ? 'custom-color-bg text-[#F5E8C7]'
                : 'bg-[#f5ecd7] custom-color hover:bg-opacity-80'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        className="bg-[#f5ecd73a2e1f] rounded-xl p-6 "
      >
        {faqData[activeTab as keyof typeof faqData].map((faq, index) => (
          <div key={index} className="border-b border-[#564418] border-opacity-20 py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <p className="text-[#564418] text-lg">{faq.question}</p>
              <span className="text-[#564418] text-2xl">
                {openQuestion === index ? '−' : '+'}
              </span>
            </div>
            {openQuestion === index && (
              <p className="text-[#3A2E1F] mt-2 opacity-80">
                {faq.answer || 'No answer provided.'}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;