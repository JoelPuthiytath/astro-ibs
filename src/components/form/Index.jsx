// // "use client";

// // import React, { useState } from "react";
// // import Image from "next/image";
// // import Arrow from "../../../../public/images/PaperRocket.svg";
// // import { createBusinessEnquiry } from "@/app/utils/_apiCalls";
// // import { Icons } from "../../../../public/images/clients/icons";
// // import { useFormik } from "formik";
// // import { validationSchema } from "@/app/utils/validationSchema";
// // import { PhoneInput } from "react-international-phone";
// // import "react-international-phone/style.css";
// // import NormalButton from "@/app/components/buttons/normalButton/normalButton";

// // const Index = ({ onClose }) => {
// //   const [successMessage, setSuccessMessage] = useState("");

// //   const formik = useFormik({
// //     initialValues: {
// //       first_name: "",
// //       last_name: "",
// //       country_code: "+91",
// //       phone_number: "",
// //       email: "",
// //       purpose: "",
// //       company: "",
// //       project_details: "",
// //     },
// //     validationSchema,
// //     onSubmit: async (values, { resetForm }) => {
// //       const {
// //         first_name,
// //         last_name,
// //         email,
// //         purpose,
// //         company,
// //         project_details,
// //         country_code,
// //         phone_number,
// //       } = values;

// //       const formData = {
// //         first_name: first_name,
// //         last_name: last_name,
// //         phone_number: phone_number,
// //         email: email,
// //         purpose: purpose,
// //         project_details: project_details,
// //         company: company,
// //       };

// //       try {
// //         const res = await createBusinessEnquiry(formData);
// //         // Reset form and show success message
// //         resetForm();
// //         setSuccessMessage("Your enquiry has been successfully submitted!");
// //       } catch (error) {
// //         setSuccessMessage("Something went wrong!");
// //         console.error("Form submission error:", error);
// //       }
// //     },
// //   });

// //   return (
// //     <>
// //       <div className="bg-white container mx-auto my-auto rounded-md md:w-[800px] h-full relative">
// //         <Icons.close
// //           onClick={onClose}
// //           className="absolute top-[-20px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] right-[-18px] md:top-[-34px] md:right-[-34px] font-bold text-4xl mb-8  cursor-pointer active:scale-90 "
// //         />
// //         <div className="flex flex-col justify-between">
// //           <form
// //             className="flex flex-col gap:[20px] gap-5 lg:gap-[20px]"
// //             onSubmit={formik.handleSubmit}
// //           >
// //             <h2 className="md:w-full text-black font-bold text-[18px] lg:p-0 leading-[24px] md:text-2xl">Share your info and get an expert take on where your platform stands.</h2>

// //             <div className="grid grid-cols-1 mt-3 lg:mt-0 lg:grid-cols-2 gap-5 lg:gap-10">
// //               <div className="flex-1">
// //                 <input
// //                   name="first_name"
// //                   type="text"
// //                   placeholder="First Name &#42;"
// //                   className="w-full  border-b border-gray-600 text-black py-3 pl-[4px] rounded-none  focus:outline-none placeholder-black  "
// //                   // onChange={(e) => handleChange("name", e.target.value)}
// //                   value={formik.values.first_name}
// //                   onChange={formik.handleChange}
// //                 />
// //                 {formik.errors.first_name && formik.touched.first_name && (
// //                   <p className="text-[14px] text-[#ee1c25]">
// //                     {formik.errors.first_name}
// //                   </p>
// //                 )}
// //               </div>
// //               <div className="flex-1">
// //                 <input
// //                   name="last_name"
// //                   type="text"
// //                   placeholder="Last Name &#42;"
// //                   className={`w-full border-b border-gray-600 text-black py-3 pl-[4px] rounded-none  focus:outline-none placeholder-black `}
// //                   // onChange={(e) => handleChange("name", e.target.value)}
// //                   value={formik.values.last_name}
// //                   onChange={formik.handleChange}
// //                 />
// //                 {formik.errors.last_name && formik.touched.last_name && (
// //                   <p className="text-[14px] text-[#ee1c25]">
// //                     {formik.errors.last_name}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>

// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
// //               <div className="flex-1">
// //                 <div className="flex gap-2" data-lenis-prevent>
// //                   <PhoneInput
// //                     name="phone_number"
// //                     defaultCountry="in"
// //                     value={formik.values.phone_number}
// //                     onChange={(value) =>
// //                       formik.setFieldValue("phone_number", value)
// //                     }
// //                     onBlur={formik.handleBlur}
// //                     className="w-full border-b border-gray-600 text-black lg:pt-3 pl-[4px]  focus:outline-none placeholder-black"
// //                     placeholder="Enter Phone number &#42;"
// //                     disableDialCodeAndPrefix={true}
// //                   />
// //                 </div>
// //                 {formik.errors.phone_number && formik.touched.phone_number && (
// //                   <p className="text-[14px] text-[#ee1c25]">
// //                     {formik.errors.phone_number}
// //                   </p>
// //                 )}
// //               </div>
// //               <div>
// //                 <input
// //                   name="email"
// //                   type="email"
// //                   placeholder="Email Address &#42;"
// //                   className=" w-full  border-b border-gray-600 text-black py-3 pl-[4px] rounded-none  focus:outline-none placeholder-black"
// //                   // onChange={(e) => handleChange("email", e.target.value)}
// //                   value={formik.values.email}
// //                   onChange={formik.handleChange}
// //                 />
// //                 {formik.errors.email && formik.touched.email && (
// //                   <p className="text-[14px] text-[#ee1c25]">
// //                     {formik.errors.email}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //             <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 lg:gap-10">
// //               <div className="cursor-pointer">
// //                 <select
// //                   name="purpose"
// //                   className="mobile_bg w-full bg-white border-b border-gray-600 text-black py-3  rounded-none focus:outline-none placeholder-black"
// //                   value={formik.values.purpose}
// //                   onChange={formik.handleChange}
// //                 >
// //                   <option value="" disabled selected hidden>
// //                     Select Purpose &#42;
// //                   </option>
// //                   <option>Project Related</option>
// //                   <option>Service Related</option>
// //                   <option>Other</option>
// //                 </select>
// //                 {formik.errors.purpose && formik.touched.purpose && (
// //                   <p className="text-[14px] text-[#ee1c25]">
// //                     {formik.errors.purpose}
// //                   </p>
// //                 )}
// //               </div>

// //               <div>
// //                 <input
// //                   name="company"
// //                   type="text"
// //                   placeholder="Company &#42;"
// //                   className=" w-full  border-b border-gray-600 text-black py-3 pl-[4px] rounded-none focus:outline-none placeholder-black"
// //                   // onChange={(e) => handleChange("email", e.target.value)}
// //                   value={formik.values.company}
// //                   onChange={formik.handleChange}
// //                 />
// //                 {formik.errors.company && formik.touched.company && (
// //                   <p className="text-[14px] text-[#ee1c25]">
// //                     {formik.errors.company}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>

// //             <div>
// //               <textarea
// //                 name="project_details"
// //                 placeholder="Project Details &#42;"
// //                 className=" w-[90%]  border-b border-gray-600 text-black rounded-none py-3 pl-[4px] focus:outline-none resize-none placeholder-black "
// //                 rows={2}
// //                 // onChange={(e) => handleChange("project_details", e.target.value)}
// //                 value={formik.values.project_details}
// //                 onChange={formik.handleChange}
// //               />
// //               {formik.errors.project_details &&
// //                 formik.touched.project_details && (
// //                   <p className="text-[14px] text-[#ee1c25]">
// //                     {formik.errors.project_details}
// //                   </p>
// //                 )}
// //             </div>

// //             <NormalButton label={"Submit"} bgColor={"bg-royalBule"} />

// //             <p className="text-[12px] lg:text-[16px] font-[700] text-[#48cf43]">
// //               {successMessage}
// //             </p>
// //           </form>
// //         </div>
// //         <div className="absolute bottom-[-30px] right-[-30px] md:bottom-[-60px] md:right-[-60px]">
// //           <Image
// //             src={Arrow}
// //             width={100}
// //             height={100}
// //             alt="paperRocket"
// //             className="w-[190px] md:w-[300px]"
// //           />
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Index;

// // --------------------------new Form design---------------------

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Arrow from "../../../../public/images/PaperRocket.svg";
// import { createBusinessEnquiry } from "@/app/utils/_apiCalls";
// import { Icons } from "../../../../public/images/clients/icons";
// import { useFormik } from "formik";
// import { quickValidationSchema } from "@/app/utils/validationSchema";

// import { PhoneInput } from "react-international-phone";
// import "react-international-phone/style.css";
// import NormalButton from "@/app/components/buttons/normalButton/normalButton";
// import { usePathname } from "next/navigation";
// import swal from "sweetalert";

// const Index = ({ onClose }) => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const path = usePathname();

//   const leadSource = path;

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
//       setLoading(true);

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
//         const res = await createBusinessEnquiry(formData);
//         // Reset form and show success message
//         // toast("Your enquiry has been successfully submitted!");

//         setLoading(false);

//         resetForm();
//         onClose();
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

//         setLoading(false);

//         setSuccessMessage("Something went wrong!");
//         console.error("Form submission error:", error);
//       }
//     },
//   });

//   // Handler to prevent numeric input
//   const preventNumericInput = (e) => {
//     const pattern = /[0-9]/;
//     if (pattern.test(e.key)) {
//       e.preventDefault();
//     }
//   };

//   return (
//     <>
//       <div className="bg-white container mx-auto my-auto rounded-md  lg:w-[800px]  relative">
//         <Icons.close
//           onClick={onClose}
//           className="absolute top-[-20px] w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] right-[-18px] lg:top-[-34px] lg:right-[-34px] font-bold text-4xl mb-8  cursor-pointer active:scale-90"
//         />
//         <div className="flex flex-col justify-between">
//           <form
//             className="flex flex-col gap:[20px] gap-5 lg:gap-[20px]"
//             onSubmit={formik.handleSubmit}
//           >
//             <h2 className="lg:w-full text-black font-bold text-[18px] lg:p-0 leading-[24px] md:text-xl lg:text-2xl">Share your info and get an expert take on where your platform stands.</h2>

//             <div className="grid grid-cols-1 mt-3 lg:mt-0 lg:grid-cols-1 gap-5 lg:gap-10">
//               <div className="">
//                 <input
//                   name="full_name"
//                   type="text"
//                   placeholder="Full Name &#42;"
//                   className="w-full  border-b border-gray-600 text-black py-3 pl-[4px] rounded-none  focus:outline-none placeholder-black  "
//                   // onChange={(e) => handleChange("name", e.target.value)}
//                   value={formik.values.full_name}
//                   onChange={formik.handleChange}
//                   onKeyDown={preventNumericInput}
//                 />
//                 {formik.errors.full_name && formik.touched.full_name && (
//                   <p className="text-[14px] text-[#ee1c25]">
//                     {formik.errors.full_name}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
//               <div className="flex-1">
//                 <div className="flex items-center" data-lenis-prevent>
//                   <PhoneInput
//                     name="phone_number"
//                     defaultCountry="in"
//                     value={formik.values.phone_number}
//                     onChange={(value) =>
//                       formik.setFieldValue("phone_number", value)
//                     }
//                     onBlur={formik.handleBlur}
//                     className="w-full border-b border-gray-600 text-black lg:pt-3 pl-[4px]  focus:outline-none placeholder-black"
//                     placeholder="Phone Number &#42;"
//                     disableDialCodeAndPrefix={false}
//                     disableFormatting={true}
//                     disableCountryGuess={true}
//                     forceDialCode={true}
//                   />
//                 </div>
//                 {formik.errors.phone_number && formik.touched.phone_number && (
//                   <p className="text-[14px] text-[#ee1c25]">
//                     {formik.errors.phone_number}
//                   </p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email Address &#42;"
//                   className=" w-full  border-b border-gray-600 text-black py-3 pl-[4px] rouqueriesnded-none  focus:outline-none placeholder-black"
//                   // onChange={(e) => handleChange("email", e.target.value)}
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                 />
//                 {formik.errors.email && formik.touched.email && (
//                   <p className="text-[14px] text-[#ee1c25]">
//                     {formik.errors.email}
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <textarea
//                 name="project_details"
//                 placeholder="Share your challenges *"
//                 className=" w-[100%]  border-b border-gray-600 text-black rounded-none py-3 pl-[4px] focus:outline-none resize-none placeholder-black "
//                 rows={2}
//                 // onChange={(e) => handleChange("project_details", e.target.value)}
//                 value={formik.values.project_details}
//                 onChange={formik.handleChange}
//               />
//               {formik.errors.project_details &&
//                 formik.touched.project_details && (
//                   <p className="text-[14px] text-[#ee1c25]">
//                     {formik.errors.project_details}
//                   </p>
//                 )}
//             </div>

//             <NormalButton
//               label={"Submit"}
//               bgColor={"bg-royalBule"}
//               loading={loading}
//             />

//             {/* <p className="text-[12px] lg:text-[16px] font-[700] text-[#48cf43]">
//               {successMessage}
//             </p> */}
//           </form>
//         </div>
//         <div className="absolute bottom-[-30px]  right-[-30px] lg:bottom-[-60px] lg:right-[-60px]">
//           <Image
//             src={Arrow}
//             width={100}
//             height={100}
//             alt="paperRocket"
//             className="w-[190px] md:w-[250px] lg:w-[300px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;
