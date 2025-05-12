// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const ContactInfo = () => {
//   const buttonVariants = {
//     hidden: { opacity: 0, y: 20, scale: 0 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 }, scale: 1 },
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { staggerChildren: 0.4 } },
//   };

//   return (
//     <motion.div
//       className="contact-info flex flex-col space-y-2 mt-4 w-[75%] md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%]"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <motion.div className="flex space-x-2" variants={containerVariants}>
//         <motion.a
//           href="https://wa.me/message/BI3SI7KSJTK7P1"
//           className="flex-1 flex items-center justify-center px-1 py-2 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg text-white text-[16px]  font-[400]  hover:bg-opacity-30 transition-all duration-300"
//           variants={buttonVariants}
//           target="_blank"
//         >
//           <Image
//             src="/images/smartsearch/whatsapp.png"
//             width={16}
//             height={16}
//             className="mr-1"
//             alt="whatsapp"
//             id="hideMobile"
//           />
//           Chat with us
//         </motion.a>
//         <motion.a
//           href="mailto:enquiry@ibsfulcro.com"
//           className="flex-1 flex items-center justify-center px-1 py-2 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg text-white text-[16px]  font-[400] hover:bg-opacity-30 transition-all duration-300"
//           variants={buttonVariants}
//         >
//           <Image
//             src="/images/smartsearch/mail.png"
//             width={16}
//             height={16}
//             className="mr-2"
//             alt="email"
//             id="hideMobile"
//           />
//           Mail us
//         </motion.a>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ContactInfo;
