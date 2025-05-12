// import dayjs from "dayjs";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const GridListing = ({ dataList, parentSlug }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-[46px]">
//       {dataList?.map((item, index) => (
//         <article key={index} className="">
//           <div className="relative">
//             <div className="h-70 overflow-hidden border-[1px] rounded-lg cursor-pointer">
//               <Link
//                 href={`${parentSlug}/${item.attributes?.slug}`}
//                 className="block"
//               >
//                 <Image
//                   alt={item.attributes?.title}
//                   // src={
//                   //   item.attributes?.image?.data?.attributes?.url ? item.attributes?.image?.data?.attributes?.url:
//                   //   "/images/project-laptop.png"
//                   // }

//                   src={
//                     item.attributes?.feature_image?.data?.attributes?.url
//                       ? item.attributes?.feature_image?.data?.attributes?.url
//                       : "/images/project-laptop.png"
//                   }
//                   // src={
//                   //   item.attributes?.feature_image?.data?.attributes?.url
//                   //     ? item.attributes?.feature_image?.data?.attributes?.url
//                   //     : parentSlug === "news-and-insights" && item.attributes?.image?.data?.attributes?.url
//                   //       ? item.attributes?.image?.data?.attributes?.url
//                   //       : "/images/project-laptop.png"
//                   // }
//                   width={
//                     (
//                       parentSlug === "news-and-insights"
//                         ? item.attributes?.image?.data?.attributes?.width
//                         : item.attributes?.feature_image?.data?.attributes
//                             ?.width
//                     )
//                       ? "453"
//                       : "453"
//                   }
//                   height={
//                     (
//                       parentSlug === "news-and-insights"
//                         ? item.attributes?.image?.data?.attributes?.height
//                         : item.attributes?.feature_image?.data?.attributes
//                             ?.height
//                     )
//                       ? "282"
//                       : "282"
//                   }
//                   className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
//                 />
//               </Link>
//             </div>

//             {item?.attributes?.client?.data?.attributes.logo.data?.attributes
//               .url && (
//               <div className="bg-white w-[160px] h-[40px] px-[10px] absolute bottom-[14px] text-center shadow-xl rounded-r-md left-[-10px] drop-shadow-lg z-30 brand-image">
//                 <Image
//                   unoptimized={true}
//                   src={`${item?.attributes?.client?.data?.attributes.logo.data?.attributes.url}`}
//                   loading="lazy"
//                   // src='./images/meter-logo.png'
//                   alt="img"
//                   width={160}
//                   height={40}
//                   className="w-full h-full transition ease-in-out object-cover "
//                 />
//               </div>
//             )}
//           </div>

//           <div className="bg-white mt-[16px]  flex flex-col gap-[5px] lg:gap-[10px]"> 
//             {/* <time className="flex flex-col items-start gap-[10px] text-[14px] font-[400] text-gray-500">
//               {item.attributes?.insight_category &&
//                 item.attributes?.insight_category?.data?.attributes?.title && (
//                   <p className="text-[14px] text-[#C64141] font-[600] capitalize">
//                     {item.attributes?.insight_category?.data?.attributes?.title}
//                   </p>
//                 )}
//               {parentSlug==="news-and-insights" && dayjs(item.attributes?.publish_date).format("MMMM D, YYYY")}
//             </time> */}
//             <Link href={`${parentSlug}/${item.attributes?.slug}`}>
//               <h3 className="mt-0.5 text-[18px] lg:text-[22px] font-[600] text-gray-900 leading-[28px]">
//                 {item.attributes?.title}
//               </h3>
//             </Link>
//             <p className="mt-0.5 line-clamp-3 text-[16px] lg:text-[18px] font-[400] leading-[28px] text-gray-500">
//               {item.attributes?.content}
//             </p>
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// };

// export default GridListing;
