// import React from "react";
// import Image from "next/image";
// import HeroContentHeading from "@/app/components/headings/heroContentHeading/Index";
// const ProjectScreens = ({ title, imageData,is_visible }) => {
//   return (
//     <>
//       {imageData?.data.length > 0 && is_visible && (
//         <div className="bg-[#F5F5F5] py-20 h-auto w-full">
//           <div className="container px-8 md:px-0 md:mx-auto flex flex-col h-full gap-[30px]">
//             <HeroContentHeading
//               title={""}
//               subtitle={title}
//               description={""}
//               contentImg=""
//               BgColor={"violet"}
//             />
//             {imageData?.data && (
//               <>
//                 {imageData?.data.map((item, i) => (
//                   <div
//                     className="w-full min-h-full  items-center flex flex-col gap-8 py-4 md:py-0 "
//                     key={i}
//                   >
//                     <Image
//                       src={item?.attributes?.url}
//                       className="w-full h-full "
//                       alt={`Project image ${i}`}
//                       width={1280}
//                       height={720}
//                     />
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProjectScreens;
