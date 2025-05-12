// "use client"

// import React, { useEffect } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import TestPage from "../components/scroller/Scroller";
// import "../styles/OurService.css";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// function OurService({ data }) {
//   const { image_svg, services, title } = data || {};
  

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

//       const animation = gsap.to(".photo:not(:first-child)", {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         stagger: 1,
//       });

//       ScrollTrigger.create({
//         trigger: ".gallery",
//         start: "top top",
//         end: "bottom bottom",
//         pin: ".rightblock",
//         animation: animation,
//         // markers: {
//         //   startColor: "black",
//         //   endColor: "black",
//         //   fontSize: "18px",
//         //   fontWeight: "bold",
//         //   indent: 20,
//         // },
//       });
//     });

//     return () => {
//       ctx.revert();
//     };
//   }, []);

//   return (
//     <React.Fragment>
//       <div className="container relative mx-auto gallery flex px-4 overflow-hidden w-full h-auto">
//         <div className="leftblock relative lg:w-1/2 py-4 mt-12 ">
//           <h2 className="text-black text-[24px] uppercase font-[600] ">
//             {title}
//           </h2>
//           <TestPage data={services} />
//           <div
//             className="hidden lg:block sticky bottom-0 left-0 h-[35vh] w-full"
//             style={{
//               background: "none",
//             }}
//           ></div>
//         </div>
//         <div className="hidden relative  lg:flex rightblock  w-3/4 flex-col justify-start items-start mt-0 py-0">
//           <div className="w-full  mx-auto mt-0">
//             <div className="photo absolute  overflow-hidden mt-0 py-0 expertise-img">
//               <Image
//                 src={"/images/expertise.png"}
//                 alt="expertise"
//                 className="w-full h-full mt-0 py-0 "
//                 width={auto}
//                 height={auto}
//               />
//             </div>
//           </div>
//         </div>
//         {/* <div className="absolute h-full w-full z-100 bg-gradient-to-t from-white via-transparent to-transparent bg-opacity-0"></div> */}
//         <div className="absolute h-full w-full z-100 bg-gradient-to-t from-white via-transparent to-transparent bg-opacity-0"></div>
//       </div>
//     </React.Fragment>
//   );
// }
// export default OurService;
