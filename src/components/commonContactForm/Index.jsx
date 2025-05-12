// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// // import { createBusinessEnquiry } from "@/app/utils/_apiCalls";
// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
// import NormalButton from "@/app/components/buttons/normalButton/normalButton";
// import { useFormik } from "formik";
// import { quickValidationSchema } from "../../utils/validationSchema";
// import HoveredButton from "@/app/components/buttons/hoverButton";
// import { createBusinessEnquiry } from "@/app/utils/_apiCalls";
// import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";
// import swal from "sweetalert";

// gsap.registerPlugin(ScrollTrigger);
// const Index = ({ data, leadSource }) => {
//   const { heading, explore_cta } = data || {};
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const path = usePathname();

//   const formik = useFormik({
//     initialValues: {
//       full_name: "",
//       country_code: "+91",
//       phone_number: "",
//       email: "",
//       project_details: "",
//     },

//     validationSchema: quickValidationSchema,
//     onSubmit: async (values, { resetForm }) => {
//       const { full_name, email, project_details, country_code, phone_number } =
//         values;

//       const formData = {
//         full_name: full_name,
//         phone_number: phone_number,
//         email: email,
//         project_details: project_details,
//         lead_source: leadSource ? leadSource : "",
//       };

//       try {
//         setLoading(true);
//         const res = await createBusinessEnquiry(formData);
//         // Reset form and show success message

//         setLoading(false);
//         resetForm();

//         swal({
//           title: "Thank you",
//           text: "Sit tight, we’ll be in touch shortly!",
//           icon: "success",
//           timer: 5000,
//           confirm: {
//             text: "OK",
//             value: true,
//             visible: false,
//             className: "swal-button",
//             closeModal: true,
//           },
//         });

//         setSuccessMessage("Your enquiry has been successfully submitted!");
//       } catch (error) {
//         setLoading(false);
//         swal({
//           title: "Something Went Wrong!",
//           icon: "error",
//           timer: 3000,
//           confirm: {
//             text: "OK",
//             value: true,
//             visible: false,
//             className: "",
//             closeModal: true,
//           },
//         });

//         setSuccessMessage("Something went wrong!");
//         console.error("Form submission error:", error);
//       }
//     },
//   });
//   const sideComponentMain = useRef(null);
//   useEffect(() => {
//     gsap.from(sideComponentMain.current, {
//       y: 40,
//       opacity: 0,
//       duration: 1,
//       ease: "power2.out",
//       scrollTrigger: {
//         trigger: sideComponentMain.current,
//         start: "top 100%",
//       },
//     });
//   }, []);

//   // bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-8 shadow-lg

//   const preventNumericInput = (e) => {
//     const pattern = /[0-9]/;
//     if (pattern.test(e.key)) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <>
//       <div className=" h-[560px] lg:h-[720px] w-full py-20 bg-gradientBG relative overflow-hidden backdrop-blur-md   ">
//         <Image
//           src="/images/InnerContactBG.webp"
//           width={1024}
//           height={720}
//           alt="bg"
//           className="absolute top-0 left-0 w-full h-full opacity-20 m-auto bottom-0 right-0"
//         />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 container -translate-y-1/2 z-20 mx-auto px-8 md:px-0 ">
//           <div className="flex flex-col justify-between items-center w-full h-full">
//             <form
//               className="flex flex-col gap:[20px] gap-5 lg:gap-[20px] w-full lg:w-[80%]"
//               onSubmit={formik.handleSubmit}
//             >
//               <h2
//                 className=" text-white font-bold text-[24px] lg:p-0 md:text-[40px] md:leading-[50px] lg:leading-[65px] leading-[40px] lg:text-[50px] text-center "
//                 ref={sideComponentMain}
//               >
//                 {heading
//                   ? heading
//                   : "Share your info and get an expert take on where your platform stands."}
//               </h2>

//               <div className="grid grid-cols-1 mt-3 lg:mt-0 lg:grid-cols-1 gap-5 lg:gap-10 ">
//                 <div className="">
//                   <input
//                     name="full_name"
//                     type="text"
//                     placeholder="Full Name &#42;"
//                     className="w-full  border-b border-gray-300 text-white py-3 pl-[4px] rounded-none  focus:outline-none placeholder-gray-300 bg-transparent  "
//                     // onChange={(e) => handleChange("name", e.target.value)}
//                     value={formik.values.full_name}
//                     onChange={formik.handleChange}
//                     onKeyDown={preventNumericInput}
//                   />
//                   {formik.errors.full_name && formik.touched.full_name && (
//                     <p className="text-[14px] text-[#ffcc00]">
//                       {formik.errors.full_name}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
//                 <div className="flex-1">
//                   <div
//                     className="white_phone flex gap-2 custom-phone-input"
//                     data-lenis-prevent
//                   >
//                     <PhoneInput
//                       name="phone_number"
//                       defaultCountry="in"
//                       value={formik.values.phone_number}
//                       onChange={(value) =>
//                         formik.setFieldValue("phone_number", value)
//                       }
//                       // onBlur={formik.handleBlur}
//                       className="w-full border-b border-gray-300 text-white lg:pt-3 pl-[4px]  focus:outline-none  bg-transparent placeholder-red"
//                       placeholder="Phone Number &#42;"
//                       style={{ "--placeholder-color": "#dddddd" }}
//                       disableFormatting={true}
//                       disableDialCodeAndPrefix={false}
//                       disableCountryGuess={true}
//                       forceDialCode={true}
//                     />
//                   </div>
//                   {formik.errors.phone_number &&
//                     formik.touched.phone_number && (
//                       <p className="text-[14px] text-[#ffcc00]">
//                         {formik.errors.phone_number}
//                       </p>
//                     )}
//                 </div>
//                 <div>
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="Email Address &#42;"
//                     className=" w-full  border-b border-gray-300 text-white py-3 pl-[4px] rounded-none  focus:outline-none placeholder-gray-300 bg-transparent"
//                     // onChange={(e) => handleChange("email", e.target.value)}
//                     value={formik.values.email}
//                     onChange={formik.handleChange}
//                   />
//                   {formik.errors.email && formik.touched.email && (
//                     <p className="text-[14px] text-[#ffcc00]">
//                       {formik.errors.email}
//                     </p>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <textarea
//                   name="project_details"
//                   placeholder="More Details &#42;"
//                   className=" w-[100%]  border-b border-gray-300 text-white rounded-none py-3 pl-[4px] focus:outline-none resize-none placeholder-gray-300 bg-transparent "
//                   rows={2}
//                   // onChange={(e) => handleChange("project_details", e.target.value)}
//                   value={formik.values.project_details}
//                   onChange={formik.handleChange}
//                 />
//                 {formik.errors.project_details &&
//                   formik.touched.project_details && (
//                     <p className="text-[14px] text-[#ffcc00]">
//                       {formik.errors.project_details}
//                     </p>
//                   )}
//               </div>
//               <div className="flex justify-center">
//                 {/* <NormalButton
//                   label={"Submit"}
//                   bgColor={"bg-white"}
//                   textColor={"text-black"}
//                 /> */}
//                 {/* <HoveredButton label={"Submit"} data={{ title: "SUBMIT" }} /> */}

//                 <button
//                   type="submit"
//                   aria-label="Submit"
//                   initial={{ scale: 1 }}
//                   whilehover={{ scale: 1 }}
//                   whiletap={{ scale: 1 }}
//                   className={`ca-button--gooey text-black bg-white rounded-xl cursor-pointer inline-block align-middle text-[14px] font-[600] capitalize py-4 px-10 relative`}
//                   disabled={loading ? true : false}
//                 >
//                   <span className="relative z-10">SUBMIT</span>

//                   <div
//                     className={`${loading ? "bg-grey-100" : "c-button__blobs"}`}
//                   >
//                     <div />
//                     <div />
//                     <div />
//                   </div>
//                 </button>
//               </div>

//               {/* <p className="text-[12px] lg:text-[16px] font-[700] text-[#48cf43]">
//                 {successMessage}
//               </p> */}
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;
