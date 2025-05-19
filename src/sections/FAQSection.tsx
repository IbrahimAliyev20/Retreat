// "use client";
// import { useState } from "react";
// import { FAQType } from "../types/type";

// interface FaqSectionProps {
//   faqData: FAQType;

// }

// const FaqSection: React.FC<FaqSectionProps> = ({ faqData }) => {
 

//   const [activeTab, setActiveTab] = useState(faqData[0].title);
//   const [openQuestion, setOpenQuestion] = useState<number | null>(null);

//   const handleTabChange = (tab: string) => {
//     setActiveTab(tab);
//     setOpenQuestion(null);
//   };

//   const toggleQuestion = (index: number) => {
//     setOpenQuestion(openQuestion === index ? null : index);
//   };

//   const activeCategory = faqData.find((category) => category.title === activeTab);

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <h2 className="text-4xl font-serif text-[#564418] text-center mb-4">
//         Frequently asked questions
//       </h2>
//       <p className="text-lg text-[#564418] text-center mb-8">
//         Pellentesque habitant morbi tristique senectus.
//       </p>
//       <div className="flex justify-center space-x-4 mb-8">
//         {faqData.map((category) => (
//           <button
//             key={category.slug}
//             onClick={() => handleTabChange(category.title)}
//             className={`py-2 px-6 rounded-full font-medium transition ${
//               activeTab === category.title
//                 ? "custom-color-bg custom-color"
//                 : "bg-[#f5ecd7] custom-color hover:bg-opacity-80"
//             }`}
//           >
//             {category.title}
//           </button>
//         ))}
//       </div>
//       <div className="bg-[#f5ecd73a2e1f] rounded-xl p-6">
//         {activeCategory?.faqs.length ? (
//           activeCategory.faqs.map((faq, index) => (
//             <div
//               key={index}
//               className="border-b border-[#564418] border-opacity-20 py-4"
//             >
//               <div
//                 className="flex justify-between items-center cursor-pointer"
//                 onClick={() => toggleQuestion(index)}
//               >
//                 <p className="text-[#564418] text-lg">{faq.question}</p>
//                 <span className="text-[#564418] text-2xl">
//                   {openQuestion === index ? "−" : "+"}
//                 </span>
//               </div>
//               {openQuestion === index && (
//                 <p className="text-[#3A2E1F] mt-2 opacity-80">
//                   {faq.answer || "No answer provided."}
//                 </p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className="text-[#3A2E1F] text-center">No FAQs available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FaqSection;
