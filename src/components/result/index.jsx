// import React from "react";
// import HeroContentHeading from "@/app/components/headings/heroContentHeading/Index";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// const index = ({ title, description, content, is_visible }) => {
//   return (
//     <>
//       {is_visible && (
//         <div className="bg-white-200 lg:pb-20 lg:pt-8">
//           <div className="flex flex-col  justify-center container mx-auto my-12 lg:my-0 px-[20px] lg:px-0">
//             <HeroContentHeading
//               subtitle={title}
//               short_description={description}
//               BgColor={"violet"}
//               pageType={"case_details"}
//             />
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-6 items-center gap-6 sm:h-0 lg:h-[300px]">
//               {content?.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex flex-col items-center justify-center text-center  rounded-xl w-[280px] p-6 h-[100%] gap-4"
//                 >
//                   {item?.title && (
//                     <div className="flex items-end flex-1">
//                       <p className="text-[32px] font-[600] md:text-[56px] leading-[55px]">
//                         {item.title}
//                       </p>
//                     </div>
//                   )}
//                   {item?.content && (
//                     <div className="flex items-start flex-1">
//                       <p className="text-[#A5A4B7] text-[20px] md:text-[20px] leading-[26px] lg:mb-3 flex items-start">
//                         {item.content}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default index;
