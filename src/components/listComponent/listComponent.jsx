// // import Image from "next/image";
// // import Link from "next/link";
// // import React from "react";
// // import HeroContentHeading from "@/app/components/headings/heroContentHeading/Index";

// // const ListComponent = ({ title, content, section_name, is_visible }) => {
// //   if (!is_visible && !title) {
// //     return;
// //   } else if (!title) {
// //     return;
// //   }

// //   return (
// //     <div className="h-full flex justify-center gap-8 min-w-[0] px-[20px] lg:px-0">
// //       <div className="container flex flex-col gap-5 py-20 md:gap-6 ">
// //         <div className="flex justify-between">
// //           {/* <h2 className="text-[33px] md:text-[52px] text-center font-[800] leading-[50px]  capitalize text-[#001B94] mb-[20px] lg:mb-[35px]">
// //             {title}
// //           </h2> */}

// //           <HeroContentHeading
// //             title={""}
// //             subtitle={title}
// //             description={""}
// //             contentImg=""
// //             BgColor={"violet"}
// //           />
// //         </div>
// //         <div className="grid grid-col-1 md:grid-cols-2 justify-between gap-[48px] lg:gap-[24px]">
// //           {content &&
// //             content.map((item, index) => (
// //               <div key={index} className="relative flex flex-col gap-[1.2rem]">
// //                 <div className="group relative cursor-pointer overflow-hidden rounded-lg border-[3px] border-white-300 carousel-image">
// //                   <Image
// //                     unoptimized="true"
// //                     // src={
// //                     //   section_name === "news_and_insight"
// //                     //     ? `${item?.attributes?.feature_image?.data?.attributes?.url}`
// //                     //     : `${item?.attributes?.feature_image?.data?.attributes?.url}`
// //                     // }
// //                     src={
// //                       item?.attributes?.feature_image?.data?.attributes?.url
// //                         ? `${item?.attributes?.feature_image?.data?.attributes?.url}`
// //                         : "/images/project-laptop.png"
// //                     }
// //                     width={100}
// //                     height={100}
// //                     alt="img"
// //                     className="w-full h-full  ease-in-out object-cover transition-transform duration-300 transform hover:scale-105"
// //                   />
// //                 </div>

// //                 {section_name === "case_study" && (
// //                   <div className="bg-white w-[160px] h-[40px] px-[10px] absolute bottom-[90px] text-center shadow-lg rounded-r-md left-[-16px] drop-shadow-lg z-30 brand-image">
// //                     <Image
// //                       loading="lazy"
// //                       src={`${item?.attributes.client?.data?.attributes.logo.data?.attributes.url}`}
// //                       width={100}
// //                       height={100}
// //                       alt="img"
// //                       className="w-full h-full transition ease-in-out object-cover relative"
// //                     />
// //                   </div>
// //                 )}

// //                 <div className="flex flex-col gap-3">
// //                   <Link href={`/case-studies/${item.attributes.slug}`}>
// //                     <h3 className="mt-0.5 text-[18px] lg:text-[24px] font-[600] text-gray-900 leading-[28px]">
// //                       {item?.attributes.title}
// //                     </h3>
// //                   </Link>

// //                   {section_name === "case_study" && (
// //                     <div className="flex flex-wrap gap-1">
// //                       {item.attributes?.case_study_tags?.data.map(
// //                         (ele, index) => (
// //                           <span
// //                             key={index}
// //                             className="text-[#5A5757] opacity-60 text-[16px] font-[500] leading-[24px] capitalize"
// //                           >
// //                             {ele?.attributes.name}{" "}
// //                             {index !==
// //                             item.attributes.case_study_tags.data.length - 1
// //                               ? ","
// //                               : ""}
// //                           </span>
// //                         )
// //                       )}
// //                     </div>
// //                   )}

// //                   {section_name === "news_and_insight" && (
// //                     <div className="flex flex-wrap gap-1">
// //                       {item.attributes?.news_insight_tags?.data.map(
// //                         (ele, index) => (
// //                           <span
// //                             key={index}
// //                             className="text-[#5A5757] opacity-60 text-[16px] font-[500] leading-[24px] capitalize"
// //                           >
// //                             {ele?.attributes.name}
// //                             {""}
// //                             {index !==
// //                             item.attributes.news_insight_tags.data.length - 1
// //                               ? ","
// //                               : ""}
// //                           </span>
// //                         )
// //                       )}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //             ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListComponent;

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import HeroContentHeading from "@/app/components/headings/heroContentHeading/Index";

// const ListComponent = ({ title, content, section_name, is_visible }) => {
//   if (!is_visible && !title) {
//     return;
//   } else if (!title) {
//     return;
//   } else if (title && content.length === 0) {
//     return;
//   }

//   return (
//     <div className="h-full flex justify-center gap-8 min-w-[0] px-[20px] lg:px-0">
//       <div className="container flex flex-col gap-5 py-20 md:gap-6 ">
//         <div className="flex justify-between">
//           <HeroContentHeading
//             title={""}
//             subtitle={title}
//             description={""}
//             contentImg=""
//             BgColor={"violet"}
//           />
//         </div>
//         <div className="grid grid-col-1 md:grid-cols-3 justify-between gap-[48px] lg:gap-[24px]">
//           {content &&
//             content.map((item, index) => (
//               <div key={index} className="relative flex flex-col gap-[1.2rem]">
//                 <Link
//                   href={
//                     section_name === "news_and_insight"
//                       ? `/news-and-insights/${item.attributes.slug}`
//                       : `/case-studies/${item.attributes.slug}`
//                   }
//                   className="group relative cursor-pointer overflow-hidden rounded-lg border-[3px] border-white-300 carousel-image"
//                 >
//                   <Image
//                     unoptimized="true"
//                     src={
//                       item?.attributes?.feature_image?.data?.attributes?.url
//                         ? `${item?.attributes?.feature_image?.data?.attributes?.url}`
//                         : "/images/project-laptop.png"
//                     }
//                     width={100}
//                     height={100}
//                     alt="img"
//                     className="w-full h-full ease-in-out object-cover transition-transform duration-300 transform hover:scale-105"
//                   />
//                 </Link>

//                 {section_name === "case_study" && (
//                   <div className="bg-white w-[160px] h-[40px] px-[10px] absolute bottom-[90px] text-center shadow-lg rounded-r-md left-[-16px] drop-shadow-lg z-30 brand-image">
//                     <Image
//                       loading="lazy"
//                       src={`${item?.attributes.client?.data?.attributes.logo.data?.attributes.url}`}
//                       width={100}
//                       height={100}
//                       alt="img"
//                       className="w-full h-full transition ease-in-out object-cover relative"
//                     />
//                   </div>
//                 )}

//                 <div className="flex flex-col gap-3">
//                   <Link href={`/case-studies/${item.attributes.slug}`}>
//                     <h3 className="mt-0.5 text-[18px] lg:text-[24px] font-[600] text-gray-900 leading-[28px]">
//                       {item?.attributes.title}
//                     </h3>
//                   </Link>

//                   {section_name === "case_study" && (
//                     <div className="flex flex-wrap gap-1">
//                       {item.attributes?.case_study_tags?.data.map(
//                         (ele, index) => (
//                           <span
//                             key={index}
//                             className="text-[#5A5757] opacity-60 text-[16px] font-[500] leading-[24px] capitalize"
//                           >
//                             {ele?.attributes.name}{" "}
//                             {index !==
//                             item.attributes.case_study_tags.data.length - 1
//                               ? ","
//                               : ""}
//                           </span>
//                         )
//                       )}
//                     </div>
//                   )}

//                   {section_name === "news_and_insight" && (
//                     <div className="flex flex-wrap gap-1">
//                       {item.attributes?.news_insight_tags?.data.map(
//                         (ele, index) => (
//                           <span
//                             key={index}
//                             className="text-[#5A5757] opacity-60 text-[16px] font-[500] leading-[24px] capitalize"
//                           >
//                             {ele?.attributes.name}
//                             {""}
//                             {index !==
//                             item.attributes.news_insight_tags.data.length - 1
//                               ? ","
//                               : ""}
//                           </span>
//                         )
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ListComponent;
