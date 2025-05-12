// "use client";

// import { useEffect, useState } from "react";
// import Cookie from "js-cookie";
// import Image from "next/image";

// // Constants for cookie name and expiry days
// const COOKIE_NAME = "fulcro-world";
// const COOKIE_EXPIRY_DAYS = 30;

// const CookieConsent = () => {
//   const [isCookieConsentVisible, setIsCookieConsentVisible] = useState(false);

//   useEffect(() => {
//     const cookieValue = Cookie.get(COOKIE_NAME);
//     if (!cookieValue) {
//       const timer = setTimeout(() => {
//         setIsCookieConsentVisible(true);
//       }, 4000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleAccept = () => {
//     // Set the cookie with secure attributes
//     Cookie.set(COOKIE_NAME, "accept", {
//       expires: COOKIE_EXPIRY_DAYS,
//       secure: true, // Ensure secure cookies only in production
//       sameSite: "Strict",
//     });
//     setIsCookieConsentVisible(false);
//     removeBanner();
//   };

//   const handleReject = () => {
//     // Set the cookie with secure attributes
//     Cookie.set(COOKIE_NAME, "reject", {
//       expires: COOKIE_EXPIRY_DAYS,
//       secure: true, // Ensure secure cookies only in production
//       sameSite: "Strict",
//     });
//     setIsCookieConsentVisible(false);
//     removeBanner();
//   };

//   const removeBanner = () => {
//     // Ensure the banner is removed from the DOM
//     setTimeout(() => document.getElementById("cookie-banner")?.remove(), 100); // Added delay to allow animation
//   };

//   if (!isCookieConsentVisible) return null;

//   return (
//     <div
//       id="cookie-banner"
//       className="cookie-banner fixed bottom-0 left-0 right-0 bg-gray-100 text-black p-4 flex items-center justify-between mx-auto w-full md:max-w-3xl lg:max-w-2xl rounded-tr-xl rounded-tl-xl drop-shadow-lg animate-slide-up z-[1001]"
//       role="dialog"
//       aria-labelledby="cookie-consent-title"
//       aria-describedby="cookie-consent-description"
//     >
//       <div className="flex items-center w-2/3 md:w-1/2 space-x-4 lg:gap-4 mb-4 lg:mb-0">
//         <Image src="/images/cooki.png" width={35} height={35} alt="cookie" />
//         <div className="flex-1">
//           <h2
//             id="cookie-consent-title"
//             className="text-base lg:text-lg font-bold"
//           >
//             We use cookies
//           </h2>
//           <p
//             id="cookie-consent-description"
//             className="text-xs lg:text-sm lg:w-80"
//           >
//             To give you a better experience. By using our website you agree to{" "}
//             <a href="/cookie-policy" className="text-blue-400 hover:underline">
//               our policies
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-col gap-3 w-1/3 md:w-1/2 md:flex-row lg:space-y-0 lg:space-x-2 md:justify-end md:gap-4">
//         <button
//           onClick={handleAccept}
//           className="bg-[#21b9e9] text-white px-2 py-1 lg:px-2 md:py-2 rounded-lg text-[13px] md:text-sm lg:text-base w-full lg:w-auto"
//           aria-label="Accept cookies"
//         >
//           Sweet!
//         </button>
//         <button
//           onClick={handleReject}
//           className="bg-red-800 text-white px-2 py-1 lg:px-2 md:py-2 rounded-lg hover:bg-red-600 text-[13px] md:text-sm lg:text-base w-full lg:w-auto"
//           aria-label="Reject cookies"
//         >
//           Sorry, I’m on a diet
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CookieConsent;
