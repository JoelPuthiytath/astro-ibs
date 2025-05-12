// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Icons } from "../../../../public/images/clients/icons";
// import HoveredButton from "@/app/components/buttons/hoverButton";

// const Index = ({
//   hoveredItem,
//   newsInsights,
//   connect,
//   openForm,
//   setIsDropdownOpen,
//   setIsActive,
// }) => {
//   const closeDropdownOnClick = () => {
//     setIsDropdownOpen(false);
//     setIsActive(false);
//   };

//   return (
//     <>
//       <div className="flex w-full">
//         <div className="w-full py-6 ml-4">
//           {hoveredItem.items.map((item, index) => (
//             <div key={index}>
//               <Link href={item.path}>
//                 <h2 className="text-[26px] font-[700] leading-[24px] text-[#001B94] px-6 pb-8 cursor-pointer">
//                   {item.title}
//                 </h2>
//               </Link>
//               <div className="mx-2">
//                 {Array.isArray(item.items) && item.items.length > 0 && (
//                   <ul className="grid grid-cols-3">
//                     {item.items.map((subContent, subIndex) => (
//                       <li
//                         key={`${index}-${subIndex}`}
//                         className="h-auto mx-8 my-4 font-normal flex items-start gap-2"
//                       >
//                         <Link
//                           href={subContent.path}
//                           className="flex items-start flex-col text-[20px] font-semibold leading-5 text-[#292929] hover:text-royalBule"
//                           onClick={closeDropdownOnClick}
//                         >
//                           <Image
//                             src={
//                               subContent.related.attributes.feature_img?.data
//                                 ?.attributes.url || "/images/Userreserach.png"
//                             }
//                             width="40"
//                             height="40"
//                             alt={subContent.title || "featureImage"}
//                             className="pb-2"
//                           />
//                           {subContent.title}
//                           <span className="text-[16px] font-normal text-[#7C7C7C] mt-2">
//                             {subContent.related.attributes.short_description}
//                             {subContent.related.attributes.hero_banner?.subtitle}
//                           </span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <div
//           className={`w-1/3 p-5 bg-[#F6F6F6] ${
//             hoveredItem.title === "About1" ? "hidden" : "flex"
//           }`}
//         >
//           <div className="flex flex-col justify-start mt-5">
//             <div
//               className={`flex flex-col justify-center items-centergap-[10px] p-[10px]`}
//             >
//               <h2 className="text-[26px] mb-8 font-[700] leading-[24px] text-[#001B94] cursor-pointer">
//                 {hoveredItem.title === "Expertise"
//                   ? "Case studies"
//                   : "News and Insights"}
//               </h2>

//               <div className="flex flex-col justify-center  gap-[30px]">
//                 {hoveredItem.items[0]?.related?.attributes?.case_studies?.data.map(
//                   (ele, i) => (
//                     <div className="flex gap-2 justify-center items-center w-[300px]">
//                       <div className="w-[40%]">
//                         <Image
//                           src={
//                             ele.attributes.feature_image.data.attributes?.url ||
//                             "/images/project-laptop.png"
//                           }
//                           alt={ele.attributes.slug}
//                           width={74}
//                           height={90}
//                           className="w-[100px] h-[100px] rounded-lg"
//                         />
//                       </div>
//                       <div className="w-[60%]">
//                         <div className="flex flex-col gap-2">
//                           <h3 className="text-black font-bold text-[16px]">
//                             {ele.attributes.title}
//                           </h3>
//                           <p className="text-[#7C7C7C]  font-normal text-[14px] w-auto leading-4 overflow-hidden whitespace-nowrap text-ellipsis">
//                             {ele.attributes.content}
//                           </p>
//                           <Link

//                             href={`/case-studies/${ele.attributes.slug}`}
//                             className="text-royalBule font-medium text-[14px] leading-4 flex gap-1 items-center cursor-pointer"
//                             onClick={closeDropdownOnClick}
//                           >
//                             View More
//                             <Icons.rightArrow className="w-[20px] h-[20px]" />
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>

//             <div className="flex flex-col justify-center items-center gap-[30px]">
//               {hoveredItem.title === "About" &&
//                 newsInsights.data.slice(0, 2).map((ele, i) => (
//                   <div className="flex gap-2 justify-center items-center w-[300px]">
//                     <div className="w-[40%]">
//                       <Image
//                         src={
//                           ele.attributes.image.data.attributes?.url ||
//                           "/images/project-laptop.png"
//                         }
//                         alt={ele.attributes.slug}
//                         width={100}
//                         height={100}
//                         className="w-[100px] h-[100px] rounded-lg"
//                       />
//                     </div>
//                     <div className="w-[60%]">
//                       <div className="flex flex-col gap-2">
//                         <h3 className="text-black font-bold text-[16px]">
//                           {ele.attributes.title}
//                         </h3>
//                         <p className="text-[#7C7C7C]  font-normal text-[14px] leading-4 w-auto overflow-hidden whitespace-nowrap text-ellipsis">
//                           {ele.attributes.content}
//                         </p>
//                         <Link
//                           href={`/`}
//                           className="text-royalBule font-medium text-[14px] leading-4 flex gap-1 items-center cursor-pointer"
//                         >
//                           View More
//                           <Icons.rightArrow className="w-[20px] h-[20px]" />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div> */}
//       </div>
//       <div
//         className={`flex bg-[#EDEDED] justify-around items-center min-h-[120px] rounded-b-3xl ${
//           hoveredItem.title === "About" ? "hidden" : "flex"
//         }`}
//       >
//         <h3 className="font-bold text-royalBule leading-5 text-[20px]">
//           {connect?.title}
//         </h3>
//         <p className="font-normal text-[16px] w-[510px] text-[#737171]">
//           {connect?.description}
//         </p>
//         <HoveredButton data={connect?.button} openForm={openForm} />
//       </div>
//     </>
//   );
// };

// export default Index;
