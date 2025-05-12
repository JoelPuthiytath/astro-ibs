// "use client";
// import React from "react";
// import Link from "next/link";
// import Card from "../gridTilesWithNumerics/card/card";

// import Image from "next/image";
// import HeroContentHeading from "@/app/components/headings/heroContentHeading/Index";
// import Features from "@/app/components/subFeatures/Features"; // Import Features component
// import { TechnologySection } from "@/app/case-studies/[slug]/page"; // Import TechnologySection component
// import { motion } from "framer-motion";
// import { getTileClasses } from "@/app/utils/_constants";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// const ServiceGridCommon = (props) => {
//   const {
//     section_title,
//     section_subtitle,
//     section_desc,
//     short_description,
//     content,
//     section_template,
//     is_visible,
//     bgGradient,
//     service_details, // Add service_details prop
//     section_bg_color,
//     component_source,
//   } = props;

//   const setSectionBgColor = (bgcolor) => {
//     if (bgcolor === "grey") {
//       return "bg-[#F5F5F5]";
//     } else if (bgcolor === "secondGradient") {
//       return "bg-secondGradient";
//     } else if (bgcolor === "gradientBG") {
//       return "bg-gradientBG";
//     } else {
//       return "bg-white";
//     }
//   };

//   const getGridColsClass = (length) => {
//     if (length === 1) {
//       return "lg:grid-cols-1";
//     } else if (length === 2) {
//       return "lg:grid-cols-2";
//     } else {
//       return "md:grid-cols-2 lg:grid-cols-3";
//     }
//   };

//   const numColumns = content?.length === 1 ? 1 : content?.length === 2 ? 2 : 3;

//   return is_visible && section_template !== "GridWithSticky" ? (
//     <div
//       // className={`flex flex-col lg:px-14 px-[20px] py-20 lg:py-[100px]  ${
//       //   section_template == "GridWithNoCta"
//       //     ? "bg-white"
//       //     : bgGradient === "secondGradient"
//       //     ? "bg-secondGradient"
//       //     : "bg-[#F5F5F5]"
//       // }`}

//       className={`flex flex-col lg:px-14 px-[20px]  ${
//         component_source === "case_study"
//           ? "lg:pb-10 lg:pt-0"
//           : "py-20 lg:py-[100px]"
//       }  ${setSectionBgColor(section_bg_color)}`}
//     >
//       <div className="container mx-auto flex flex-col lg:p-2 lg:flex lg:flex-col lg-gap-[30px]">
//         <HeroContentHeading
//           title={section_subtitle}
//           subtitle={section_title}
//           description={section_desc}
//           short_description={short_description}
//           contentImg=""
//           BgColor={"violet"}
//         />

//         {section_template === "GridWithCta" && is_visible && (
//           <div
//             className={`grid md:grid-cols-2 lg:grid-cols-3 items-stretch gap-[20px] lg:gap-[30px] mt-[30px] justify-start`}
//           >
//             {content &&
//               content?.map(({ title, subtitle, description, cta }, i) =>
//                 props.service && cta ? (
//                   <Link
//                     href={
//                       props.service && cta
//                         ? props.service + "/" + cta
//                         : props.service
//                     }
//                     key={i}
//                     className={`${
//                       props.service && cta ? "cursor-pointer card-container" : "cursor-default"
//                     }`}
//                   >
//                     <div
//                       className={` ${
//                         cta ? "" : "contact-container "
//                       }`}
//                     >
//                       <div
//                         className={`card-content   ${
//                           cta ? "" : "contact-content"
//                         }`}
//                       >
//                         <div className="flex flex-col justify-between gap-[20px] ">
//                           {title && (
//                             <div className="flex flex-1 grow">
//                               <h3 className="bg-gradientBG text-[24px] md:text-[26px] font-[700] leading-[30px] inline-block text-transparent bg-clip-text">
//                                 {title}
//                               </h3>
//                             </div>
//                           )}

//                           {description && (
//                             <div className="flex ">
//                               <p className="text-[16px] font-[500] leading-[24px] text-[#545454]">
//                                 {description}
//                               </p>
//                             </div>
//                           )}
//                         </div>
//                       </div>

//                       {cta && (
//                         <div
//                           className={`card-overlay flex flex-col text-white`}
//                         >
//                           <div className="view-more flex-col">
//                             <span className="text-center">{title}</span>
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                               className="w-2 h-2"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="1"
//                                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </Link>
//                 ) : (
//                   <div
//                     className={`card-container ${
//                       cta ? "" : "contact-container "
//                     }`}
//                     key={i}
//                   >
//                     <div
//                       className={`card-content h-full ${
//                         cta ? "" : "contact-content"
//                       }`}
//                     >
//                       <div className="flex flex-col justify-between gap-[20px]">
//                         {title && (
//                           <div className="flex flex-1 grow">
//                             <h3 className="bg-gradientBG text-[24px] md:text-[26px] font-[700] leading-[30px] inline-block text-transparent bg-clip-text">
//                               {title}
//                             </h3>
//                           </div>
//                         )}

//                         {description && (
//                           <div className="flex flex-1 grow">
//                             <p className="text-[16px] font-[500] leading-[24px] text-[#545454]">
//                               {description}
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     {cta && (
//                       <div className={`card-overlay flex flex-col text-white`}>
//                         <div className="view-more flex-col">
//                           <span className="text-center">{title}</span>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             className="w-2 h-2"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="1"
//                               d="M17 8l4 4m0 0l-4 4m4-4H3"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )
//               )}
//           </div>
//         )}

//         {section_template === "GridWithNoCta" && is_visible && (
//           <div
//             className={`grid ${getGridColsClass(
//               content.length
//             )} gap-[20px] lg:gap-[0] lg:justify-center items-stretch mt-[30px]`}
//           >
//             {content &&
//               content?.map(
//                 (
//                   { title, subtitle, description, short_description, cta },
//                   i
//                 ) => (
//                   <div
//                     className={`
//               max-w-[100%] lg:rounded-none flex flex-col text-start pb-[24px] ${
//                 i == 0 || i % 3 == 0
//                   ? "pl-[0px] lg:pt-[38px] lg:pb-[38px] lg:pr-[38px]"
//                   : "lg:p-[38px]"
//               } 
//               ${getTileClasses(i, content.length, numColumns)}
//             `}
//                     key={i}
//                   >
//                     <div className="svg flex justify-center"></div>
//                     <div className="flex flex-col h-full gap-[20px] lg:gap-[20px]">
//                       <div className="flex flex-1 grow">
//                         <h3 className="bg-gradientBG text-[22px] md:text-[26px] font-[700] leading-[29.5px] inline-block text-transparent bg-clip-text">
//                           {title}
//                         </h3>
//                       </div>
//                       {description && (
//                         <p className="text-[16px] font-[500] leading-[24px] text-[#545454] grow">
//                           {description}
//                         </p>
//                       )}

//                       {/* {short_description && (
//                         <BlocksRenderer
//                           content={short_description}
//                           blocks={{
//                             paragraph: ({ children }) => (
//                               <p
//                                 className={`text-[16px] lg:text-[16px] lg:font-normal font-normal md:font-[600] leading-[27px] ${
//                                   "black" === "white"
//                                     ? "text-white"
//                                     : "text-[#7C7C7C]"
//                                 }`}
//                               >
//                                 {children}
//                               </p>
//                             ),
//                             list: ({ children, format }) => {
//                               if (format === "unordered") {
//                                 return (
//                                   <ul className="list-disc ms-5 flex flex-col gap-2 text-[16px] lg:text-[16px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                                     {children}
//                                   </ul>
//                                 );
//                               } else if (format === "ordered") {
//                                 return (
//                                   <ol className="list-decimal pl-5 mb-4 flex flex-col gap-2 text-[16px] lg:text-[16px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                                     {children}
//                                   </ol>
//                                 );
//                               } else {
//                                 return null;
//                               }
//                             },
//                             listItem: ({ children }) => (
//                               <li className="mb-2 text-[16px] lg:text-[16px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                                 {children}
//                               </li>
//                             ),
//                             heading: ({ children, level }) => {
//                               const HeadingTag = `h${level}`;
//                               return (
//                                 <HeadingTag
//                                   className={`text-[${
//                                     32 - level * 4
//                                   }px] lg:text-[${
//                                     36 - level * 4
//                                   }px] lg:font-bold font-bold md:font-[${
//                                     800 - level * 100
//                                   }] leading-[${40 - level * 4}px] mb-4`}
//                                 >
//                                   {children}
//                                 </HeadingTag>
//                               );
//                             },
//                             quote: ({ children }) => (
//                               <blockquote className="border-l-4 border-gray-400 pl-4 italic text-[16px] lg:text-[16px] lg:font-normal font-normal md:font-[600] leading-[27px] mb-4">
//                                 {children}
//                               </blockquote>
//                             ),
//                             code: ({ children }) => (
//                               <pre className="bg-gray-100 p-4 rounded mb-4 text-[14px] lg:text-[16px] font-mono">
//                                 <code>{children}</code>
//                               </pre>
//                             ),
//                             link: ({ children, url }) => (
//                               <a
//                                 href={url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="underline text-[#001D95] text-[16px] leading-[27px]"
//                               >
//                                 {children}
//                               </a>
//                             ),
//                           }}
//                           modifiers={{
//                             bold: ({ children }) => <strong>{children}</strong>,
//                             italic: ({ children }) => (
//                               <span className="italic text-[16px] lg:text-[16px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                                 {children}
//                               </span>
//                             ),
//                           }}
//                         />
//                       )} */}
//                     </div>
//                   </div>
//                 )
//               )}
//           </div>
//         )}

//         {section_template === "NumericGrid" && is_visible && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] justify-center mt-[30px]">
//             {content &&
//               content?.map((item, i) => {
//                 const cardProps = {
//                   ...item,
//                   index: i,
//                 };

//                 return <Card key={i} {...cardProps} bgcolor="grey" />;
//               })}
//           </div>
//         )}

//         {section_template === "GridWithImage" && is_visible && (
//           <div className="grid lg:grid-cols-3 items-stretch gap-5 lg:gap-7 mt-7 justify-start">
//             {content &&
//               content.map(({ title, subtitle, description, image, cta }, i) => (
//                 <div
//                   key={i}
//                   className="bg-white w-full border rounded-[1.25rem] p-1 shadow-md flex flex-col h-auto  "
//                 >
//                   <div className=" flex flex-col justify-between  p-[2.3rem]">
//                     <div className=" flex justify-start py-5">
//                       <Image
//                         className="xl:w-30 xl:h-30 2xl:w-30 2xl:h-30"
//                         src={image.data.attributes.url}
//                         width={image.data.attributes.width}
//                         height={image.data.attributes.height}
//                         alt="logo"
//                       />
//                     </div>
//                     <div className="flex flex-col bg-white ">
//                       <div className="flex flex-col justify-between gap-5">
//                         {title && (
//                           <div className="flex-1">
//                             <h3 className="bg-gradientBG text-3xl md:text-3xl font-bold leading-snug inline-block text-transparent bg-clip-text">
//                               {title}
//                             </h3>
//                           </div>
//                         )}
//                         {description && (
//                           <div className="flex-1">
//                             <p className=" text-[16px]  font-medium leading-8 text-gray-700">
//                               {description}
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     </div>
//   ) : (
//     section_template === "GridWithSticky" && (
//       <div
//         className={`flex flex-col items-center lg:px-14 px-[20px] py-20 lg:py-[100px] ${setSectionBgColor(
//           section_bg_color
//         )}`}
//       >
//         <div className="flex container flex-col gap-6 mx-4 lg:mx-0 lg:flex-row lg:space-x-6 ">
//           <div className="lg:w-1/3 lg:sticky md:top-[6rem] self-start">
//             <HeroContentHeading
//               title={section_subtitle}
//               subtitle={section_title}
//               description={section_desc}
//               // contentImg=""
//               BgColor={"violet"}
//             />
//           </div>

//           <div className="lg:w-2/3 h-full">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]  mt-5 lg:mt-0">
//               {content?.map((item, index) => (
//                 <motion.div
//                   className="flex flex-col gap-4"
//                   key={index}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   whileHover={{ scale: 1 }}
//                 >
//                   <h3 className="text-[22px] lg:text-[24px] font-semibold leading-[29px]">
//                     {item.title}
//                   </h3>
//                   {item.description && (
//                     <p className="text-[16px] font-[500] leading-[24px] text-[#545454]">
//                       {item.description}
//                     </p>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default ServiceGridCommon;
