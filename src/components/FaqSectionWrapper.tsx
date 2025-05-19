// import { getFaq } from "@/lib/faq";
// // import FAQSection from "@/sections/FAQSection";

// export default async function FaqSectionWrapper() {
//   try {
//     const faqCategories = await getFaq();
//     return <FAQSection faqData={faqCategories} />;
//   } catch (error) {
//     return (
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-serif text-[#564418] text-center mb-4">
//           Frequently asked questions
//         </h2>
//         <p className="text-red-500 text-center">Xəta: {(error as Error).message}</p>
//       </div>
//     );
//   }
// }