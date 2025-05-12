// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import HeroContentHeading from "@/app/components/headings/heroContentHeading/Index";

// const Features = ({ title, content, subtitle, description }) => {
//   return (
//     <div className="bg-white w-full container mx-auto p-2 py-20">
//       <div className="flex flex-col gap-6 mx-4 lg:mx-0 lg:flex-row lg:space-x-6 ">
//         <div className="lg:w-1/3 md:sticky md:top-[6rem] self-start">
//           <HeroContentHeading
//             title={""}
//             subtitle={title}
//             description={description}
//           />
//         </div>

//         <div className="lg:w-2/3 h-full">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]  mt-5 lg:mt-0">
//             {content?.map((item, index) => (
//               <motion.div
//                 className="flex flex-col gap-4"
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 whileHover={{ scale: 1 }}
//               >
//                 <h3 className="text-[22px] lg:text-[24px] font-semibold leading-[29px]">
//                   {item.title}
//                 </h3>
//                 {item.description && (
//                   <p className="text-[16px] font-[500] leading-[24px] text-[#545454]">
//                     {item.description}
//                   </p>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;
