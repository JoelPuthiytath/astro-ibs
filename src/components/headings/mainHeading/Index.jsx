// "use client";
// import React from "react";
// import Image from "next/image";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";
// import { useTextAnimation } from "@/app/hooks/textAnimation";

// const Index = ({
//   title,
//   subtitle,
//   description,
//   short_description,
//   contentImg,
//   BgColor,
//   case_details,
// }) => {
//   const sideComponentMain = useTextAnimation();
//   return (
//     <>
//       <div
//         ref={sideComponentMain}
//         className="flex flex-col gap-[10px] relative z-20"
//       >
//         {title && (
//           <h1
//             className={`text-[18px] lg:text-[20px] uppercase font-[600] leading-[24px] mb-2 ${
//               BgColor === "white" ? "text-white" : ""
//             }`}
//           >
//             {title}
//           </h1>
//         )}

//         {subtitle && (
//           <div className="demo-text">
//             <h1
//               className={`${
//                 BgColor === "white"
//                   ? `bg-white`
//                   : BgColor === "violet"
//                   ? "bg-[#482C9A]"
//                   : BgColor === "blue"
//                   ? "bg-[#001B94]"
//                   : `bg-gradientBG`
//               }  text-[32px] 
//             ${
//               BgColor === "blue" ? "md:text-[52px]" : "md:text-[45px]"
//             } font-[800] lg:leading-[55px] inline-block text-transparent bg-clip-text `}
//             >
//               {subtitle}
//             </h1>
//           </div>
//         )}
//         {description && (
//           <p
//             className={`text-[15px] md:text-[16px] font-[500] lg:pr-8 lg:pt-3 ${
//               BgColor === "white" ? "text-white" : "text-[#7C7C7C]"
//             } leading-7 `}
//           >
//             {description}
//           </p>
//         )}

//         {short_description && (
//           <BlocksRenderer
//             content={short_description}
//             blocks={{
//               paragraph: ({ children }) => (
//                 <p
//                   className={`text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px] ${
//                     BgColor === "white" ? "text-white" : "text-[#7C7C7C]"
//                   }`}
//                 >
//                   {children}
//                 </p>
//               ),
//               list: ({ children, format }) => {
//                 if (format === "unordered") {
//                   return (
//                     <ul className="list-disc ms-5 flex flex-col gap-2 text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                       {children}
//                     </ul>
//                   );
//                 } else if (format === "ordered") {
//                   return (
//                     <ol className="list-decimal pl-5 mb-4 flex flex-col gap-2 text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                       {children}
//                     </ol>
//                   );
//                 } else {
//                   return null;
//                 }
//               },
//               listItem: ({ children }) => (
//                 <li className="mb-2 text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                   {children}
//                 </li>
//               ),
//               heading: ({ children, level }) => {
//                 const HeadingTag = `h${level}`;
//                 return (
//                   <HeadingTag
//                     className={`text-[${32 - level * 4}px] lg:text-[${
//                       36 - level * 4
//                     }px] lg:font-bold font-bold md:font-[${
//                       800 - level * 100
//                     }] leading-[${40 - level * 4}px] mb-4`}
//                   >
//                     {children}
//                   </HeadingTag>
//                 );
//               },
//               quote: ({ children }) => (
//                 <blockquote className="border-l-4 border-gray-400 pl-4 italic text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px] mb-4">
//                   {children}
//                 </blockquote>
//               ),
//               code: ({ children }) => (
//                 <pre className="bg-gray-100 p-4 rounded mb-4 text-[14px] lg:text-[16px] font-mono">
//                   <code>{children}</code>
//                 </pre>
//               ),
//               link: ({ children, url }) => (
//                 <a
//                   href={url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="underline text-[#001D95] text-[16px] leading-[27px]"
//                 >
//                   {children}
//                 </a>
//               ),
//             }}
//             modifiers={{
//               bold: ({ children }) => <strong>{children}</strong>,
//               italic: ({ children }) => (
//                 <span className="italic text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                   {children}
//                 </span>
//               ),
//             }}
//           />
//         )}

//         {/* {short_description && (
//           <p
//             // ref={headingRefNewsPara}
//             className={`text-[16px] mt-[12px] lg:text-[18px] lg:font-normal  2xl:mt-[30px] font-normal md:font-[600] leading-[27px] ${
//               BgColor === "white" ? "text-white" : "text-[#7C7C7C]"
//             } `}
//           >
//             {short_description?.map((data, i) => (
//               <React.Fragment key={i}>
//                 {data.type === "paragraph" &&
//                   data.children &&
//                   data.children.map((item, j) =>
//                     item.bold ? (
//                       <p className="mb-2" key={j}>
//                         <strong>{item.text}</strong>
//                       </p>
//                     ) : (
//                       <p className="mb-4" key={j}>
//                         {item.text}
//                       </p>
//                     )
//                   )}
//               </React.Fragment>
//             ))}
//           </p>
//         )} */}

//         {contentImg && (
//           <div className="hidden md:flex items-start">
//             <Image
//               src={contentImg}
//               width={350}
//               height={350}
//               alt="news_insight"
//               className="pt-3"
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Index;
