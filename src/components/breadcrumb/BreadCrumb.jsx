// // // components/Breadcrumb.js
// // import React from "react";
// // import Link from "next/link";
// // import { Icons } from "../../../../public/images/clients/icons";

// // const Breadcrumb = ({
// //   title,
// //   path,
// //   name,
// //   slug,
// //   service,
// //   sub_service,
// //   color,
// // }) => {
// //   return (
// //     <nav aria-label="Breadcrumb ">
// //       <ol className="flex items-center flex-wrap gap-1 mb-[40px] text-sm text-gray-600">
// //         <li>
// //           <Link href="/" className="block transition hover:text-gray-700">
// //             <span
// //               className={`text-[14px] font-[400]  ${
// //                 color === "black" ? "text-black" : "text-white"
// //               }`}
// //             >
// //               Home
// //             </span>
// //           </Link>

// //           {/* <Link href="/" className="block transition hover:text-gray-700">
// //             <span
// //               className={`text-[14px] font-[400]  ${
// //                color==="black" && slug ? "text-[#0036A3] underline" : "text-[#FAED15] underline"
// //               }`}
// //             >
// //               Home
// //             </span>
// //           </Link> */}
// //         </li>

// //         {slug && (
// //           <>
// //             <Icons.rightSideArrow
// //               className={`w-[16px] h-[16px] items-center flex ${
// //                 color === "black" ? "text-black" : "text-white"
// //               }`}
// //             />
// //             <li>
// //               <Link
// //                 href={`/${slug}`}
// //                 className="block transition hover:text-gray-700"
// //               >
// //                 <span
// //                   className={`text-[14px] font-[400]  capitalize ${
// //                     color === "black" ? "text-black" : "text-white"
// //                   } `}
// //                 >
// //                   {slug.split("-").join(" ")}
// //                 </span>
// //               </Link>
// //               {/* {
// //                 service ? <Link
// //                 href={`/${slug}`}
// //                 className="block transition hover:text-gray-700"
// //               >
// //                 <span
// //                   className={`text-[14px] font-[400]  capitalize ${
// //                     color === "black" && service? "text-[#0036A3] underline" : service ? "underline":"text-black"
// //                   } `}
// //                 >
// //                   {slug.split("-").join(" ")}
// //                 </span>
// //               </Link>: <span
// //                   className={`text-[14px] font-[400]  capitalize ${
// //                     color === "black" && service? "text-[#0036A3] underline" : service ? "underline":"text-black"
// //                   } `}
// //                 >
// //                   {slug.split("-").join(" ")}
// //                 </span>
// //               } */}
// //             </li>
// //           </>
// //         )}

// //         {service && (
// //           <>
// //             <Icons.rightSideArrow
// //               className={`w-[16px] h-[16px] items-center flex ${
// //                 color === "black" ? "text-black" : "text-white"
// //               }`}
// //             />
// //             <li>
// //               <Link
// //                 href={`/${slug}/${service}`}
// //                 className="block transition hover:text-gray-700"
// //               >
// //                 <span
// //                   className={`text-[14px] font-[400] capitalize line-clamp-1 ${
// //                     color === "black" ? "text-black" : "text-white"
// //                   }`}
// //                 >
// //                   {service.split("-").join(" ")}
// //                 </span>
// //               </Link>
// //             </li>
// //           </>
// //         )}

// //         {sub_service && (
// //           <>
// //             <Icons.rightSideArrow
// //               className={`w-[16px] h-[16px] items-center flex ${
// //                 color === "black" ? "text-black" : "text-white"
// //               }`}
// //             />
// //             <li>
// //               <Link
// //                 href={`${slug}/${service}/${sub_service}`}
// //                 className="block transition hover:text-gray-700"
// //               >
// //                 <span
// //                   className={`text-[14px] font-[400] capitalize ${
// //                     color === "black" ? "text-black" : "text-white"
// //                   }`}
// //                 >
// //                   {sub_service.split("-").join(" ")}
// //                 </span>
// //               </Link>
// //             </li>
// //           </>
// //         )}

// //         {/* <li>
// //         <Link href="/services" className="block transition hover:text-gray-700">
// //           <span className="text-[14px] font-[400] text-white">Services</span>
// //         </Link>
// //       </li>

// //        <Icons.rightSideArrow className='w-[16px] h-[16px] items-center flex text-white'/> */}

// //         {/* {(title !== '' && path !== '') ? (
// //         <>
// //           <li>
// //             <Link href={`/services/${path}`} className="block transitiontext-[14px] font-[400] text-white ">
// //               {title}
// //             </Link>
// //           </li>

// //            <Icons.rightSideArrow className='w-[16px] h-[16px] items-center flex text-white'/>

// //            <li>
// //             <Link href={`/services/${path}/${path}`} className="block transitiontext-[14px] font-[400] text-white ">
// //               {title}
// //             </Link>
// //           </li>

// //            <Icons.rightSideArrow className='w-[16px] h-[16px] items-center flex text-white'/>

// //           <li className="block transitiontext-[14px] font-[400] text-white cursor-pointer">{name}</li>
// //         </>
// //       ) : (
// //         <li className="block transitiontext-[14px] font-[400] text-white cursor-pointer">{name}</li>
// //       )} */}
// //       </ol>
// //     </nav>
// //   );
// // };

// // export default Breadcrumb;
// // components/Breadcrumb.js
// import React from "react";
// import Link from "next/link";
// import { Icons } from "../../../../public/images/clients/icons";

// const transformBreadcrumbString = (string) => {
//   const replaceWords = [
//     {
//       originalString: "iso-iec-27001-2022",
//       replaceString: "ISO/IEC 27001:2022",
//     },
//   ];

//   replaceWords.forEach((item) => {
//     if (string.includes(item.originalString)) {
//       string = string.replace(item.originalString, item.replaceString);
//     }
//   });
//   return string.split("-").join(" ");
// };

// const Breadcrumb = ({
//   title,
//   path,
//   name,
//   slug,
//   service,
//   sub_service,
//   color,
// }) => {
//   const getTextColor = (isCurrent) => {
//     if (isCurrent) return color === "black" ? "text-black" : "text-white";
//     return color === "black"
//       ? "text-[#0036A3] underline"
//       : "text-[#FFFFFF] underline";
//   };

//   return (
//     <nav aria-label="Breadcrumb ">
//       <ol className="flex items-center flex-wrap gap-1 lg:mb-[40px] text-sm leading-7 text-gray-600">
//         <li>
//           <Link href="/" className="block transition hover:text-gray-700">
//             <span
//               className={`text-[14px] font-[400] ${getTextColor(
//                 slug === undefined
//               )}`}
//             >
//               Home
//             </span>
//           </Link>
//         </li>

//         {slug && (
//           <>
//             <Icons.rightSideArrow
//               className={`w-[16px] h-[16px] items-center flex ${
//                 color === "black" ? "text-black" : "text-white"
//               }`}
//             />
//             <li>
//               <Link
//                 href={`/${slug}`}
//                 className="block transition hover:text-gray-700"
//               >
//                 <span
//                   className={`text-[14px] font-[400] capitalize ${getTextColor(
//                     service === undefined
//                   )}`}
//                 >
//                   {slug.split("-").join(" ")}
//                 </span>
//               </Link>
//             </li>
//           </>
//         )}

//         {service && (
//           <>
//             <Icons.rightSideArrow
//               className={`w-[16px] h-[16px] items-center flex ${
//                 color === "black" ? "text-black" : "text-white"
//               }`}
//             />
//             <li>
//               <Link
//                 href={`/${slug}/${service}`}
//                 className="block transition hover:text-gray-700"
//               >
//                 <span
//                   className={`text-[14px] font-[400] capitalize line-clamp-1 ${getTextColor(
//                     sub_service === undefined
//                   )}`}
//                 >
//                   {/* {service.split("-").join(" ")} */}
//                   {transformBreadcrumbString(service)}
//                 </span>
//               </Link>
//             </li>
//           </>
//         )}

//         {sub_service && (
//           <>
//             <Icons.rightSideArrow
//               className={`w-[16px] h-[16px] items-center flex ${
//                 color === "black" ? "text-black" : "text-white"
//               }`}
//             />
//             <li>
//               <Link
//                 href={`${slug}/${service}/${sub_service}`}
//                 className="block transition hover:text-gray-700"
//               >
//                 <span
//                   className={`text-[14px] font-[400] capitalize ${
//                     color === "black" ? "text-black" : "text-white"
//                   }`}
//                 >
//                   {sub_service.split("-").join(" ")}
//                 </span>
//               </Link>
//             </li>
//           </>
//         )}
//       </ol>
//     </nav>
//   );
// };

// export default Breadcrumb;
