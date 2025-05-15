// "use client";
// import { useEffect } from "react";
// import type React from "react";

// const useScrollAnimation = (ref: React.RefObject<HTMLElement | null> | null, delay = 0.1) => {
//   useEffect(() => {
//     if (!ref || !ref.current) return;

//     const currentRef = ref.current;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const el = entry.target as HTMLElement;
//             setTimeout(() => {
//               el.style.opacity = "1";
//               el.style.transform = "translateY(0)";
//             }, delay * 1000);
//             observer.unobserve(el);
//           }
//         });
//       },
//       { threshold: 0.1 },
//     );

//     observer.observe(currentRef);

//     return () => {
//       observer.unobserve(currentRef);
//     };
//   }, [ref, delay]);
// };

// export default useScrollAnimation;