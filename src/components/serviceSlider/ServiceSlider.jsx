// "use client";
// import React, { useEffect, useState } from "react";
// import { isMobile } from "react-device-detect";
// import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from "./EmblaCarouselArrowButtons";
// import useEmblaCarousel from "embla-carousel-react";
// import MacBookLayout from "../macLayout/MacBookLayout";

// import "../../styles/embla.css";

// const ServiceSlider = ({ data }) => {
//   const axis = isMobile ? "x" : "y";
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     axis: axis,
//   });
//   const [activeIndex, setActiveIndex] = useState(0);

//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);

//   const {
//     prevBtnDisabled,
//     nextBtnDisabled,
//     onPrevButtonClick,
//     onNextButtonClick,
//   } = usePrevNextButtons(emblaApi);

//   useEffect(() => {
//     if (emblaApi) {
//       const onSelect = () => {
//         setActiveIndex(emblaApi.selectedScrollSnap());
//       };
//       emblaApi.on("select", onSelect);
//       onSelect();
//     }
//   }, [emblaApi]);

//   return (
//     <div
//       className="lg:min-h-[60vh] flex flex-row py-10 px-[10px] bg-[linear-gradient(105.96deg,_#001B94_13.43%,_#7C90EA_100.53%)] justify-center  "
//       data-lenis-prevent
//     >
//       <div className="flex flex-row flex-1 justify-center items-center 2xl:ml-[5em] ">
//         <div className="flex-1 flex flex-col gap-[33px]  md:ml-[5em]  mb-[1em] ">
//           {data?.section_title && (
//             <div className="flex flex-col md:mt-[10px] justify-start lg:mt-[1em] mt-[0em] ml-[1em] lg:ml-[1em] ">
//               <h2 className="  text-left bg-gradient-to-r from-[#FFFFFF] to-[#001B94] capitalize text-[20px] lg:text-[35px] font-[800] leading-[50px] inline-block text-transparent bg-clip-text  ">
//                 {data?.section_title}
//               </h2>
//             </div>
//           )}

//           <section className="embla ">
//             <div className="embla__viewport" ref={emblaRef}>
//               <div className="embla__container">
//                 {data?.case_studies &&
//                   data?.case_studies.data?.map((project, i) => (
//                     <div
//                       className="project-content flex flex-col embla__slide gap-[20px]   lg:ml-[1em] lg:mt-[1em]"
//                       key={i}
//                     >
//                       {/* <Image
//                       src={project.logo}
//                       width={150}
//                       height={150}
//                       alt="project-logo"
//                     /> */}
//                       <div className="flex flex-col  text-start ">
//                         <p className="font-[700] leading-[45px] text-[#FFFFFF] text-[28px] lg:text-[32px] lg:w-[80%]">
//                           {project.attributes.title}
//                         </p>
//                       </div>
//                       <div className="flex flex-col lg:w-[80%]">
//                         {/* <p className="text-[18px] overflow-ellipsis overflow-hidden font-[400] leading-[30px]  lg:leading-[30px] text-start text-[#FFFFFF] line-clamp">
//                           {project.attributes.content}
//                         </p> */}

//                         {project?.attributes?.common_banner
//                           ?.short_description &&
//                           project?.attributes?.common_banner?.short_description.map(
//                             (data, i) => (
//                               <React.Fragment key={i}>
//                                 {data.type === "paragraph" &&
//                                   data.children &&
//                                   data.children.map((item, j) =>
//                                     item.bold ? (
//                                       <p
//                                         className="mb-2 text-[18px] overflow-ellipsis overflow-hidden font-[400] leading-[30px]  lg:leading-[30px] text-start text-[#FFFFFF] line-clamp"
//                                         key={j}
//                                       >
//                                         <strong>{item.text}</strong>
//                                       </p>
//                                     ) : (
//                                       <p
//                                         className="mb-4 text-[18px] overflow-ellipsis overflow-hidden font-[400] leading-[30px]  lg:leading-[30px] text-start text-[#FFFFFF] line-clamp"
//                                         key={j}
//                                       >
//                                         {item.text}
//                                       </p>
//                                     )
//                                   )}
//                               </React.Fragment>
//                             )
//                           )}
//                       </div>
//                       <div className="flex flex-col gap-[16px] w-[350px] text-start cursor-pointer">
//                         <p className="cursor-pointer text-[20px] font-[700] leading-[52px] tracking-[5px] underline text-[#ffffff] capitalize">
//                           {project?.attributes?.casestudy_tags?.section_title}
//                         </p>

//                         <div className="flex flex-wrap gap-[20px] ">
//                           {project.attributes.casestudy_tags?.tags &&
//                             project.attributes.casestudy_tags?.tags.map(
//                               (tech, i) => (
//                                 <div
//                                   className="bg-white rounded-[30px] drop-shadow-2xl"
//                                   key={i}
//                                 >
//                                   <p className="text-black px-4 py-2">
//                                     {tech.name}
//                                   </p>
//                                 </div>
//                               )
//                             )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>

//             <div className="embla__controls ml-[1em] ">
//               <div className="embla__buttons">
//                 <PrevButton
//                   onClick={onPrevButtonClick}
//                   disabled={prevBtnDisabled}
//                 />
//                 <NextButton
//                   onClick={onNextButtonClick}
//                   disabled={nextBtnDisabled}
//                 />
//               </div>

//               <div className="embla__dots">
//                 {scrollSnaps.map((_, index) => (
//                   <DotButton
//                     key={index}
//                     onClick={() => onDotButtonClick(index)}
//                     className={"embla__dot".concat(
//                       index === selectedIndex ? " embla__dot--selected" : ""
//                     )}
//                   />
//                 ))}
//               </div>
//             </div>
//           </section>
//         </div>

//         <div className="flex-1 flex flex-col  bg-[#7790FF]  justify-center items-center project-laptop xl:pl-20 xl:pr-20 mb-5 -mr-5 py-10">
//           <MacBookLayout
//             projectImage={
//               data?.case_studies?.data[activeIndex]?.attributes.common_banner
//                 .banner_image.data.attributes.url
//                 ? data?.case_studies?.data[activeIndex]?.attributes
//                     .common_banner.banner_image.data.attributes.url
//                 : ""
//             }
//             xlHeight={"xl:h-[600px]"}
//             xlWidth={"xl:w-[600px]"}
//             mdHeight={"md:h-[400px]"}
//             mdWidth={"md:w-[400px]"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceSlider;
