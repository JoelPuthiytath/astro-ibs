// "use client";

// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import Link from "next/link";
// import Image from "next/image";


// // Dynamic Imports
// const ListViewCta = dynamic(() => import("@/app/components/listViewCta/Index"));
// const HeroContentHeading = dynamic(() =>
//   import("@/app/components/headings/heroContentHeading/Index")
// );
// import { Icons } from "../../../../public/images/clients/icons";

// const Insights = ({ data }) => {
//   const { title, heading, cta, news_and_insights, image } = data || {};
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleWindowChange = () => setIsMobile(window.innerWidth < 567);
    
//     handleWindowChange();
//     window.addEventListener("resize", handleWindowChange);

//     return () => window.removeEventListener("resize", handleWindowChange);
//   }, []);

//   return (
//     <div className="container md:mx-auto flex flex-col px-8 md:px-0 py-14 overflow-hidden">
//       <div className="flex justify-between  md:gap-3 flex-col md:flex-row">
//         <div className="basis-1/3">
//           <HeroContentHeading
//             title={title}
//             subtitle={heading}
//             description=""
//             contentImg={image?.data[0]?.attributes?.url}
//           />
//         </div>
//         <div className="basis-2/3 md:flex md:flex-col items-stretch gap-24 ">
//           <div className="flex md:justify-end items-center md:flex-row">
//             {cta && (
//               <div className="group hidden gap-2 items-center text-[18px] font-[600] md:flex cursor-pointer">
//                 <Link href={cta.link} className="learn-more-blue">
//                   <span className="circle">
//                     <span className="icon arrow relative">
//                       <Icons.rightSideArrow className="absolute left-[50%] top-[50%] transform -translate-x-1 -translate-y-1/2 text-white h-[20px] w-[20px]" />
//                     </span>
//                   </span>
//                   <span className="button-text leading-[24px]">{cta.name}</span>
//                 </Link>
//               </div>
//             )}
//           </div>
//           <ListViewCta data={news_and_insights} />
//         </div>
//         {isMobile && cta && (
//           <div className="mx-auto md:mx-0 pt-14 lg:pt-0">
//             <Link
//               href={cta.link}
//               className="flex items-center gap-[20px] bg-[#001b94] w-[192px] rounded-[26px] px-[10px] py-[5px]"
//             >
//               <Image
//                 src="/images/white_arrow.svg"
//                 className="w-[28px] h-[32px]"
//                 alt="arrow_icon"
//                 width={28}
//                 height={32}
//               />
//               <span className="text-[#ffffff] text-[18px] font-[700]">
//                 {cta.name}
//               </span>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Insights;
