// // import { Icons } from "../../../../public/images/clients/icons";

// // import Link from "next/link";
// // const Index = ({ data }) => {
// //   return (
// //     <>
// //       <div className="list-view-list">
// //         {data?.data.map((item, i) => (
// //           <div
// //             key={i}
// //             className={`flex flex-row justify-between items-start gap-[5px] lg:gap-[30px] pt-4  cursor-pointer ${
// //               i !== data?.data.length - 1
// //                 ? "border-b border-b-slate-400 pb-4"
// //                 : " pb-0"
// //             }`}
// //           >
// //             <div className="flex flex-col basis-[92%] lg:basis-[98%] items-start justify-between gap-2">
// //               <Link href={`/news-and-insights/${item.attributes.slug}`}>
// //                 <p className="flex gap-2 items-center justify-between text-[16px] md:text-[16px] font-[600] leading-[28px]">
// //                   {item.attributes.title}
// //                 </p>
// //               </Link>
// //             </div>
// //             <Icons.rightArrow className="flex basis-[8%] lg:basis-[4%] justify-end text-[14px] hover:translate-x-1 duration-200 cursor-pointer lg:mr-3" />
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Index;

// import { Icons } from "../../../../public/images/clients/icons";
// import Link from "next/link";

// const Index = ({ data }) => {
//   return (
//     <div className="list-view-list">
//       {data?.data.map((item, i) => (
//         <Link
//           key={i}
//           href={`/news-and-insights/${item.attributes.slug}`}
//           className="no-underline flex justify-between"
//         >
//           <div
//             className={`flex flex-row justify-between items-start gap-[5px] lg:gap-[30px] pt-4 cursor-pointer w-full ${
//               i !== data?.data.length - 1
//                 ? "border-b border-b-slate-400 pb-4"
//                 : " pb-0"
//             }`}
//           >
//             <div className="flex flex-col basis-[92%] lg:basis-[98%] items-start justify-between gap-2">
//               <p className="flex gap-2 items-center justify-between text-[16px] md:text-[16px] font-[600] leading-[28px]">
//                 {item.attributes.title}
//               </p>
//             </div>
//             <Icons.rightArrow className="flex basis-[8%] lg:basis-[4%] justify-end text-[14px] hover:translate-x-1 duration-200 cursor-pointer lg:mr-3" />
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Index;
