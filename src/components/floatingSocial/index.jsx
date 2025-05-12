// // // components/FloatingShareButton.js

// // import { useState } from "react";
// // import { Icons } from "../../../../public/images/clients/icons";
// // import Image from "next/image";

// // const FloatingShareButton = ({ socialData }) => {
// //   const [out, setOut] = useState(false);

// //   const handleClick = () => {
// //     setOut(!out);
// //   };

// //   return (
// //     <div>
// //       <button
// //         id="share"
// //         className="cursor-pointer transition duration-200 fixed rounded-full z-10 bg-white right-[40px] bottom-[40px] lg:bottom-[75px] lg:right-[40px] text-gray-800 h-[50px] w-[50px] text-2xl shadow-md hover:shadow-inner hover:text-gray-900 flex items-center justify-center"
// //         onClick={handleClick}
// //       >
// //         {out ? (
// //           <Icons.close className="h-7 w-7" />
// //         ) : (
// //           <Image src='images/contactIcon.svg' width={30} height={30} alt="icon"/>
// //         )}
// //       </button>
// //       {socialData?.content.map((item, index) => (
// //         <div
// //           key={index}
// //           className={`cursor-pointer transition duration-200 fixed z-999 rounded-full right-[40px] bottom-[40px] lg:bottom-[75px] lg:right-[40px] h-[45px] w-[45px] text-lg shadow-lg hover:shadow-none bg-white flex items-center justify-center ${
// //             out ? `icon-${index + 1}-open` : "icon-closed"
// //           }`}
// //         >
// //           <a
// //             href={item?.cta}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="block h-full w-full "
// //           >
// //             <Image
// //               src={item?.image?.data?.attributes.url}
// //               width={item?.image?.data?.attributes.width}
// //               height={item?.image?.data?.attributes.height}
// //               alt="contact logo"
// //               className="w-[30px] h-[30px] m-2"
// //             />
// //           </a>
// //         </div>
// //       ))}
// //       <style jsx>{`
// //         .icon-1-open {
// //           right: 95px;
// //           bottom: 10px;
// //         }
// //         .icon-2-open {
// //           right: 95px;
// //           bottom: 70px;
// //         }
// //         .icon-3-open {
// //           right: 60px;
// //           bottom: 115px;
// //         }
// //         .icon-4-open {
// //           right: 10px;
// //           bottom: 95px;
// //         }
// //         .icon-closed {
// //           right: 40px;
// //           bottom: 40px;
// //         }
// //           @media(min-width:1024px){
// //             .icon-1-open {
// //           right: 60px;
// //           bottom: 15px;
// //         }
// //         .icon-2-open {
// //           right: 100px;
// //           bottom: 60px;
// //         }
// //         .icon-3-open {
// //           right: 95px;
// //           bottom: 115px;
// //         }
// //         .icon-4-open {
// //           right: 45px;
// //           bottom: 140px;
// //         }
// //         .icon-closed {
// //           right: 43px;
// //           bottom: 78px;
// //         }

// //           }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default FloatingShareButton;

// import React, { useState, useEffect } from "react";
// import { Icons } from "../../../../public/images/clients/icons";
// import Image from "next/image";

// const Tooltip = ({ text }) => (
//   <div className="absolute top-1/2 right-full mr-1 transform -translate-y-1/2 whitespace-nowrap px-3 py-2 text-sm bg-white rounded-3xl font-semibold shadow-lg">
//     <div>{text}</div>
//   </div>
// );

// const StickySocial = ({ socialData }) => {
//   const [active, setActive] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const toggleActive = () => {
//     setActive(!active);
//   };

//   return (
//     <div
//       className={`fixed bottom-10 right-6  lg:right-10 z-50 w-14 h-14 ${
//         active ? "social-active" : ""
//       }`}
//     >
//       <button
//         aria-label="toggle social menu"
//         className="sticky-social-icon bg-slate-100 w-14 rounded-full h-14 cursor-pointer shadow-lg flex items-center justify-center transform active:scale-95 transition-transform duration-300"
//         onClick={toggleActive}
//       >
//         {active ? (
//           <Icons.close className="w-7 h-7" />
//         ) : (
//           <Image
//             src="/images/contactIcon.svg"
//             width={30}
//             height={30}
//             alt="icon"
//           />
//         )}
//       </button>
//       <ul
//         className={`absolute bottom-full mb-4 left-0 flex flex-col gap-4 transition-opacity duration-500 ${
//           active ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         {socialData?.content.map((item, index) => (
//           <li
//             key={index}
//             className={`relative transition-all duration-500 bg-contain flex w-12 h-12 bg-white shadow-md rounded-full items-center justify-center ${
//               active ? "animateSlideIn" : ""
//             }`}
//             style={{
//               top: active ? "0" : `${40 - index * 12}px`,
//               transitionDelay: `${index * 100}ms`,
//             }}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <a
//               href={item?.cta}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block"
//             >
//               <Image
//                 src={item?.image?.data?.attributes.url}
//                 width={item?.image?.data?.attributes.width}
//                 height={item?.image?.data?.attributes.height}
//                 alt="contact logo"
//                 className="w-[25px] md:w-[30px] h-[25px] md:h-[30px] m-2"
//               />
//             </a>
//             {hoveredIndex === index && <Tooltip text={item?.description} />}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StickySocial;
