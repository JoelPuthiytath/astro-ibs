// import React, { useEffect, useState } from "react";
// import clsx from "clsx";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Icons } from "../../../../public/images/clients/icons";
// import HoveredButton from "@/app/components/buttons/hoverButton";
// import { HidePages } from "@/app/lib/constant";
// const Index = ({
//   headerData,
//   button,
//   openForm,
//   setActiveNav,
//   activeNav,
//   isScrolled,
// }) => {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [showMobileSubMenu, setShowMobileSubMenu] = useState(false);
//   const [subItems, setSubItems] = useState([]);
//   const [openAccordion, setOpenAccordion] = useState(null);

//   useEffect(() => {
//     // Set the openAccordion state to the index of the "About" item if it exists
//     const aboutIndex = subItems.findIndex(
//       (item) => item.title === "Who We Are"
//     );
//     if (aboutIndex !== -1) {
//       setOpenAccordion(aboutIndex);
//     }
//   }, [subItems]);

//   useEffect(() => {
//     if (isScrolled || showMobileMenu) {
//       setActiveNav(true);
//     } else {
//       setActiveNav(false);
//     }
//   }, [isScrolled, showMobileMenu]);

//   const toggleAccordion = (index) => {
//     // Prevent toggling if the item is "About"
//     if (subItems[index].title !== "Who We Are") {
//       setOpenAccordion(openAccordion === index ? null : index);
//     }
//   };

//   const closeOnNotLink = () => {
//     setShowMobileSubMenu(false);
//   };

//   const closeDropdownOnClick = () => {
//     setShowMobileMenu(!showMobileMenu);
//     setShowMobileSubMenu(false);
//   };

//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);
//     setShowMobileSubMenu(false);
//     // setActiveNav(!activeNav);

//     // window.scrollTo(0, 0);
//   };

//   const toggleMobileSubMenu = (subMenuData, title) => {
//     setShowMobileSubMenu(!showMobileSubMenu);

//     if (Array.isArray(subMenuData)) {
//       setSubItems(subMenuData);
//     } else {
//       setSubItems([]);
//     }
//   };

//   return (
//     <>
//       <div
//         className={`menu-btn-1  ${showMobileMenu ? "active" : ""} `}
//         onClick={toggleMobileMenu}
//       >
//         <span></span>
//       </div>

//       <div
//         className={clsx(
//           "fixed inset-0 z-[9999] overflow-y-auto bg-white top-[70px] left-0 w-full min-h-[calc(100vh-70px)] transition-all duration-500 flex flex-col justify-between",
//           showMobileMenu
//             ? "translate-x-0 opacity-100 visible"
//             : "translate-x-full opacity-0 invisible"
//         )}
//         style={{
//           willChange: "transform",
//           backfaceVisibility: "hidden",
//           WebkitBackfaceVisibility: "hidden",
//           transform: showMobileMenu ? "translateX(0)" : "translateX(100%)",
//         }}
//       >
//         <div className="flex flex-col gap-4 justify-between  ">
//           <ul className="flex flex-col  font-medium capitalize  px-8  ">
//             {headerData?.map((item, index) => (
//               <div
//                 className={`text-[18px]  flex justify-between items-center font-bold py-5 transition-transform ease-in-out duration-300  hover:text-blue-700 cursor-pointer ${
//                   index !== item.length - 1 ? "border-b border-gray-300" : ""
//                 }`}
//                 key={index}
//               >
//                 <a href={item.path} className="flex justify-between w-full ">
//                   <li id="menuData">
//                     <span
//                       onClick={() => {
//                         if (
//                           item.path === "/case-studies" ||
//                           (item.path === "/clients" &&
//                             (!Array.isArray(item.items) ||
//                               item.items.length === 0))
//                         ) {
//                           closeDropdownOnClick();
//                         } else if (
//                           Array.isArray(item.items) ||
//                           item.items.length > 0
//                         ) {
//                           toggleMobileSubMenu(item.items);
//                         }
//                       }}
//                     >
//                       {item.title}
//                     </span>
//                   </li>
//                   {Array.isArray(item.items) && item.items.length > 0 && (
//                     <button
//                       aria-label="toggle sub menu"
//                       onClick={() => {
//                         if (
//                           item.path === "/case-studies" ||
//                           (item.path === "/clients" &&
//                             (!Array.isArray(item.items) ||
//                               item.items.length === 0))
//                         ) {
//                           closeDropdownOnClick();
//                         } else if (
//                           Array.isArray(item.items) ||
//                           item.items.length > 0
//                         ) {
//                           toggleMobileSubMenu(item.items);
//                         }
//                       }}
//                     >
//                       <Icons.rightArrow className="w-[30px] h-[30px] font-semibold" />
//                     </button>
//                   )}
//                 </a>
//               </div>
//             ))}
//           </ul>
//         </div>

//         <div className="flex items-center gap-4 mx-auto my-2  h-full">
//           <HoveredButton data={button} openForm={openForm} />
//         </div>
//       </div>

//       <div
//         className={clsx(
//           "fixed inset-0 z-[9999] overflow-y-auto top-[80px] left-0 w-full min-h-[calc(100vh-80px)] transition-all duration-500 flex flex-col justify-between",
//           showMobileSubMenu && showMobileMenu && activeNav
//             ? "translate-x-0 opacity-100 visible bg-white"
//             : "translate-x-full opacity-0 invisible bg-white"
//         )}
//         style={{
//           willChange: "transform",
//           backfaceVisibility: "hidden",
//           WebkitBackfaceVisibility: "hidden",
//           transform:
//             showMobileSubMenu && showMobileMenu
//               ? "translateX(0)"
//               : "translateX(100%)",
//         }}
//       >
//         <div className="flex flex-col">
//           <p
//             onClick={toggleMobileSubMenu}
//             className=" m-4 px-2 font-bold text-[18px] flex items-center gap-3 cursor-pointer"
//           >
//             <Icons.leftArrow
//               onClick={toggleMobileSubMenu}
//               className="w-[30px] h-[30px] cursor-pointer"
//             />
//             Go Back
//           </p>

//           <div className="flex flex-col font-medium capitalize px-4">
//             {subItems &&
//               subItems.map((item, index) => (
//                 <div key={index} className="">
//                   {item.title !== "Who We Are" && (
//                     <div
//                       className="flex justify-between items-center capitalize cursor-pointer font-bold px-2"
//                       onClick={() => toggleAccordion(index)}
//                     >
//                       <p className="text-gray-900 text-[18px] font-bold py-[20px] pb-[20px]">
//                         {/* <Link href={item.path}></Link> */}
//                         {item.title}
//                       </p>
//                       {openAccordion === index ? (
//                         <Icons.sub className="w-[30px] h-[30px] font-bold" />
//                       ) : (
//                         <Icons.add className="w-[30px] h-[30px] font-bold" />
//                       )}
//                     </div>
//                   )}

//                   <AnimatePresence initial={false}>
//                     {openAccordion === index && (
//                       <motion.section
//                         key="content"
//                         initial="collapsed"
//                         animate="open"
//                         exit="collapsed"
//                         variants={{
//                           open: {
//                             opacity: 1,
//                             height: "auto",
//                             transition: {
//                               duration: 0.4,
//                               ease: "easeOut",
//                             },
//                           },
//                           collapsed: {
//                             opacity: 0,
//                             height: "0px",
//                             transition: { duration: 0.4, ease: "easeIn" },
//                           },
//                         }}
//                         style={{
//                           overflow: "hidden",
//                           borderBottom: "0px solid #ccc",
//                           paddingTop: "0px",
//                           paddingBottom: "20px",
//                         }}
//                       >
//                         {item.title === "Who We Are" ? (
//                           <ul className="flex flex-col px-4">
//                             {item.items.map((linkItem, i) =>
//                               linkItem.title === HidePages.NEWS_INSIGHT ||
//                               linkItem.title ===
//                                 HidePages.CLIENT_PAGE ? null : (
//                                 <a href={linkItem.path} key={i}>
//                                   <li
//                                     className="py-5 text-[18px] border-b border-slate-200 w-full font-bold"
//                                     onClick={closeDropdownOnClick}
//                                   >
//                                     {linkItem.title}
//                                   </li>
//                                 </a>
//                               )
//                             )}
//                           </ul>
//                         ) : (
//                           item.items.map((linkItem, i) => (
//                             <div key={i}>
//                               <ul className="pl-4">
//                                 <a href={linkItem.path}>
//                                   <li
//                                     className="py-2 px-2 text-[18px]"
//                                     onClick={closeDropdownOnClick}
//                                   >
//                                     {linkItem.title}
//                                   </li>
//                                 </a>
//                               </ul>
//                             </div>
//                           ))
//                         )}
//                       </motion.section>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;
