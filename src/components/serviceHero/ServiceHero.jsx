// "use client";
// import React, { useContext, useEffect } from "react";
// import Image from "next/image";
// import Breadcrumb from "../breadcrumb/BreadCrumb";

// import gsap from "gsap";
// import { HeaderContext } from "@/app/providers/HeaderProvider";

// const ServiceHero = ({
//   name,
//   parent_service,
//   slug,
//   service,
//   sub_service,
//   hero_banner,
// }) => {
//   const { setHeaderData } = useContext(HeaderContext);
//   let parentServiceName = "";
//   let parentServiceSlug = "";

//   if (parent_service?.data !== null) {
//     parentServiceName = parent_service?.data?.attributes.name;
//     parentServiceSlug = parent_service?.data?.attributes.slug;
//   }

//   const breadcrumbprops = {
//     name: name,
//     title: parentServiceName,
//     path: parentServiceSlug,
//     slug,
//     service,
//     sub_service,
//   };

//   useEffect(() => {
//     const animate = () => {
//       const tl = gsap.timeline({ defaults: { duration: 1 } });

//       tl.from(
//         ".fadeDown",
//         {
//           y: "40",
//           opacity: 0,
//           ease: "power2.out",
//         },
//         "<0.5"
//       ).to(
//         ".fadeDown",
//         {
//           opacity: 1,
//         },
//         "<"
//       );

//       setHeaderData("transparent");
//     };

//     // Run animation on the next animation frame
//     requestAnimationFrame(animate);
//   }, [setHeaderData]);

//   return (
//     <div className="flex flex-col lg:overflow-hidden items-center bg-gradientBG">
//       <div className="container px-8 lg:px-0 lg:mx-auto">
//         <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-[20px] pt-[120px] lg:pb-[40px]">
//           <div className="flex flex-col gap-[30px] 2xl:gap-[10px] fadeDown lg:w-7/12">
//             <Breadcrumb {...breadcrumbprops} />
//             <div className="w-[100%] flex flex-col gap-[10px] 2xl:gap-[0px]">
//               <h1 className="text-[32px] md:text-[45px] font-[800] leading-[50px] inline-block text-white capitalize">
//                 {hero_banner?.title}
//               </h1>
//               <p className="text-[22px] mt-[12px] 2xl:mt-[30px] font-[600] leading-[27px] text-white">
//                 {hero_banner?.subtitle ? hero_banner?.subtitle : ""}
//               </p>
//             </div>

//             <div className="flex flex-col 2xl:mt-[20px] gap-[20px] w-[100%]">
//               <p className="text-[16px] font-[500] leading-[33px] text-white">
//                 {hero_banner?.short_description?.map((data, i) => (
//                   <React.Fragment key={i}>
//                     {data.type === "paragraph" &&
//                       data.children &&
//                       data.children.map((item, j) =>
//                         item.bold ? (
//                           <span className="mb-2" key={j}>
//                             <strong>{item.text}</strong>
//                           </span>
//                         ) : (
//                           <span className="mb-4" key={j}>
//                             {item.text}
//                           </span>
//                         )
//                       )}
//                   </React.Fragment>
//                 ))}
//               </p>
//             </div>
//           </div>
//           <div className="overflow-hidden md:w-[420px] lg:w-5/12 pb-[30px] lg:pb-0">
//             <Image
//               src={
//                 hero_banner?.image?.data?.attributes.url
//                   ? hero_banner?.image?.data?.attributes.url
//                   : "/images/discovery_page.webp"
//               }
//               width="560"
//               height="480"
//               alt="discovery"
//               className="w-full"
//               loading="eager"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceHero;
