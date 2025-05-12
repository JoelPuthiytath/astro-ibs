// import Link from "next/link";
// import React from "react";
// import Image from "next/image";

// const ServiceGrid = ({ data, service, subService, titles }) => {
//   return (
//     <div className="flex flex-col lg:px-14 px-[20px] py-14 bg-[#F5F5F5]">
//       <div className="container mx-auto flex flex-col lg:p-2 lg:flex lg:flex-col lg-gap-[30px]">
//         <h2 className="text-[18px] uppercase font-[600] leading-[24px] mb-[15px] lg:mb-2">
//           {titles.subtitle}
//         </h2>

//         <h2 className=" text-[#482C9A] capitalize text-[40px] xl:text-[40px] 2xl:text-[48px] font-[700] leading-[64px] inline-block">
//           {titles.title}
//         </h2>

//         <p className="text-[16px] font-[600] mt-[15px] lg:mt-0 leading-[36px] xl:text-[18px] 2xl:text-[24px]">
//           {titles?.description}
//         </p>

//         <div className="grid lg:grid-cols-4 gap-[20px] lg:gap-[30px] mt-[30px] justify-start">
//           {data?.map((item, index) => (
//             <Link href={`${service}/${item.attributes.slug}`} key={index}>
//               <div className="card-container">
//                 <div className="card-content">
//                   <div className="svg flex justify-start">
//                     <Image
//                       className="xl:w-[50px] xl:h-[50px] 2xl:w-[50px] 2xl:h-[50px]"
//                       src="/images/Userreserach.png"
//                       alt="search_icon"
//                       width={50}
//                       height={50}
//                     />
//                   </div>

//                   <div className="flex flex-col h-[100%] gap-[10px]">
//                     <h2 className="text-[18px] xl:text-[18px] 2xl:text-[24px] font-[500] leading-[29.5px] grow">
//                       {item.attributes.title}
//                     </h2>

//                     <div className="flex">
//                       <p className="text-[16px] font-[500] leading-[24px] text-[#545454] grow">
//                         {item.attributes.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="card-overlay flex flex-col text-white">
//                   <div className="view-more flex-col">
//                     <span className="text-center"> {item.attributes.name}</span>

//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       className="w-2 h-2"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1"
//                         d="M17 8l4 4m0 0l-4 4m4-4H3"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceGrid;
