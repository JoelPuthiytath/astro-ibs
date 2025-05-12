// "use client";
// import React, { useRef, useState } from "react";
// import { Icons } from "../../../../public/images/clients/icons";
// import { useFormik } from "formik";
// import { createResumeSubmission, uploadResume } from "@/app/utils/_apiCalls";
// import { PhoneInput } from "react-international-phone";
// import NormalButton from "@/app/components/buttons/normalButton/normalButton";
// import { resumeValidationSchema } from "@/app/utils/validationSchema";
// import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// const CareerJobDesc = ({
//   onClose,
//   position,
//   showCloseButton,
//   disabledPostition,
//   formId,
// }) => {
//   const [successMessage, setSuccessMessage] = useState("");
//   const [fileName, setFileName] = useState("");
//   const fileInputRef = useRef(null);
//   const [loading, setLoading] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       full_name: "",
//       country_code: "+91",
//       phone_number: "",
//       email: "",
//       resume: null,
//       position: position.attributes.position,
//       comment: "",
//       linkedin_url: "",
//     },
//     validationSchema: resumeValidationSchema,

//     onSubmit: async (values, { resetForm }) => {
//       try {
//         setLoading(true);
//         const res = await uploadResume(values.resume);

//         if (res.upload.data.id) {
//           const {
//             full_name,
//             email,
//             phone_number,
//             resume,
//             position,
//             comment,
//             linkedin_url,
//           } = values;

//           const formData = {
//             full_name,
//             phone_number: phone_number,
//             email: email,
//             resume: res.upload.data.id,
//             position: position,
//             comment: comment,
//             resume_url: res.upload.data.attributes.url,
//             linkedin_url: linkedin_url,
//           };

//           const response = await createResumeSubmission(formData);

//           setLoading(false);

//           // Reset form and show success message
//           resetForm();

//           setFileName(""); // Reset file name
//           if (fileInputRef.current) {
//             fileInputRef.current.value = ""; // Reset file input
//           }

//           swal({
//             title: "Thank you",
//             text: "Sit tight, we’ll be in touch shortly!",
//             icon: "success",
//             timer: 5000,
//             confirm: {
//               text: "OK",
//               value: true,
//               visible: false,
//               className: "swal-button",
//               closeModal: true,
//             },
//           });
//         }
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

//   const preventNumericInput = (e) => {
//     const pattern = /[0-9]/;
//     if (pattern.test(e.key)) {
//       e.preventDefault();
//     }
//   };

//   const positionInputAttributes = {
//     id: `${formId}-position`,
//     name: "position",
//     type: "text",
//     placeholder: "Position apply for *",
//     className: `${
//       disabledPostition === true ? "bg-[#e7e7e7] p-1" : ""
//     } w-full border-b border-slate-300 text-black py-4 md:py-3 focus:outline-none placeholder-black bg-transparent`,
//     // onChange: (e) => handleChange("email", e.target.value)
//     value: formik.values.position,
//     onChange: formik.handleChange,
//   };

//   if (disabledPostition) {
//     positionInputAttributes.readOnly = true;
//   }

//   return (
//     <div className="container mx-auto my-auto rounded-md h-full relative ">
//       <div
//         id="resume-form"
//         className="container mx-auto my-auto rounded-md relative"
//       >
//         <div className="flex flex-col h-[500px] lg:h-[600px] ">
//           <div className="flex flex-row items-center justify-between">
//             <h2 className="text-black font-bold text-[18px] mb-[15px] lg:my-[5px] lg:p-0 leading-[24px] md:text-2xl">
//               {position.attributes.title}
//             </h2>
//             {showCloseButton && (
//               <Icons.close
//                 onClick={onClose}
//                 className="absolute top-[-20px] w-[30px] h-[30px] md:w-[40px] md:h-[40px] right-[-18px] md:top-[-34px] md:right-[-34px] font-bold text-4xl mb-0 lg:mb-0  cursor-pointer active:scale-90 "
//               />
//             )}
//           </div>

//           <div className="flex flex-col lg:my-[20px] overflow-y-scroll no-scrollbar">
//             {position.attributes.description && (
//               <div className="flex flex-col pr-[10px] lg:pr-0">
//                 {/* {position.attributes.subtitle && (
//                 <p className="mb-4 text-[16px] font-[600] lg:text-[18px] lg:font-normal md:font-[600] leading-[27px]">
//                   {position.attributes.subtitle}
//                 </p>
//               )} */}
//                 <BlocksRenderer
//                   content={position.attributes.description}
//                   blocks={{
//                     paragraph: ({ children }) => (
//                       <p className="mb-4 text-[14px] lg:text-[18px] lg:font-normal font-normal  leading-[27px]">
//                         {children}
//                       </p>
//                     ),
//                     list: ({ children, format }) => {
//                       if (format === "unordered") {
//                         return (
//                           <ul className="list-disc ms-5 flex flex-col gap-2 text-[14px] lg:text-[18px] lg:font-normal font-normal leading-[27px]">
//                             {children}
//                           </ul>
//                         );
//                       } else if (format === "ordered") {
//                         return (
//                           <ol className="list-decimal mb-4 flex flex-col gap-2 text-[14px] lg:text-[18px] lg:font-normal font-normal leading-[27px]">
//                             {children}
//                           </ol>
//                         );
//                       } else {
//                         return null;
//                       }
//                     },
//                     listItem: ({ children }) => (
//                       <li className="mb-2 text-[14px] lg:text-[18px] lg:font-normal font-normal  leading-[27px]">
//                         {children}
//                       </li>
//                     ),
//                     heading: ({ children, level }) => {
//                       const HeadingTag = `h${level}`;
//                       return (
//                         <HeadingTag
//                           className={`text-[${32 - level * 4}px] lg:text-[${
//                             36 - level * 4
//                           }px] lg:font-bold font-bold md:font-[${
//                             800 - level * 100
//                           }] leading-[${40 - level * 4}px] mb-4`}
//                         >
//                           {children}
//                         </HeadingTag>
//                       );
//                     },
//                     quote: ({ children }) => (
//                       <blockquote className="border-l-4 border-gray-400 pl-4 italic text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px] mb-4">
//                         {children}
//                       </blockquote>
//                     ),
//                     code: ({ children }) => (
//                       <pre className="bg-gray-100 p-4 rounded mb-4 text-[14px] lg:text-[16px] font-mono">
//                         <code>{children}</code>
//                       </pre>
//                     ),
//                   }}
//                   modifiers={{
//                     bold: ({ children }) => <strong>{children}</strong>,
//                     italic: ({ children }) => (
//                       <span className="italic text-[16px] lg:text-[18px] lg:font-normal font-normal md:font-[600] leading-[27px]">
//                         {children}
//                       </span>
//                     ),
//                   }}
//                 />
//               </div>
//             )}

//             {/* <div></div> */}

//             <div className="flex flex-col justify-between w-full pr-[20px]">
//               <form
//                 id={formId}
//                 className="w-full flex flex-col lg:gap-[20px] lg:mt-[28px]"
//                 onSubmit={formik.handleSubmit}
//               >
//                 <h2 className="text-black font-bold text-[18px] my-[20px] lg:my-[5px] lg:p-0 leading-[24px] md:text-2xl">
//                   Application Form
//                 </h2>
//                 <div className="grid grid-cols-1 lg:grid-cols-1 lg:gap-10">
//                   {/* <div className="flex-1 mb-5 md:mb-0">
//                     <input
//                       id={`${formId}-first_name`}
//                       name="first_name"
//                       type="text"
//                       placeholder="First Name &#42;"
//                       className="w-full border-b border-slate-300 text-black py-4 md:py-3  focus:outline-none placeholder-black bg-transparent "
//                       value={formik.values.first_name}
//                       onChange={formik.handleChange}
//                     />
//                     {formik.errors.first_name && formik.touched.first_name && (
//                       <p className="text-[14px] text-[#ee1c25]">
//                         {formik.errors.first_name}
//                       </p>
//                     )}
//                   </div>
//                   <div className="flex-1 mb-5 md:mb-0">
//                     <input
//                       id={`${formId}-last_name`}
//                       name="last_name"
//                       type="text"
//                       placeholder="Last Name &#42;"
//                       className="w-full border-b border-slate-300 text-black py-4 md:py-3  focus:outline-none placeholder-black bg-transparent  "
//                       value={formik.values.last_name}
//                       onChange={formik.handleChange}
//                     />
//                     {formik.errors.last_name && formik.touched.last_name && (
//                       <p className="text-[14px] text-[#ee1c25]">
//                         {formik.errors.last_name}
//                       </p>
//                     )}
//                   </div> */}
//                   <div className="">
//                     <input
//                       name="full_name"
//                       id={`${formId}-full_name`}
//                       type="text"
//                       placeholder="Full Name &#42;"
//                       className="phone-input w-full border-b border-slate-300 text-black  py-4 md:py-3   focus:outline-none placeholder-black bg-transparent"
//                       // onChange={(e) => handleChange("name", e.target.value)}
//                       value={formik.values.full_name}
//                       onChange={formik.handleChange}
//                       onKeyDown={preventNumericInput}
//                     />
//                     {formik.errors.full_name && formik.touched.full_name && (
//                       <p className="text-[14px] text-[#ee1c25]">
//                         {formik.errors.full_name}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 ">
//                   <div className="flex-1 mb-5 md:mb-0">
//                     <div
//                       className="flex gap-2 bg-transparent"
//                       data-lenis-prevent
//                     >
//                       <PhoneInput
//                         id={`${formId}-phone_number`}
//                         name="phone_number"
//                         defaultCountry="in"
//                         value={formik.values.phone_number}
//                         onChange={(value) =>
//                           formik.setFieldValue("phone_number", value)
//                         }
//                         onBlur={formik.handleBlur}
//                         className="phone-input w-full border-b border-slate-300 text-black pt-3  focus:outline-none placeholder-black bg-transparent"
//                         placeholder="Phone Number &#42;"
//                         disableFormatting={true}
//                         disableDialCodeAndPrefix={false}
//                         disableCountryGuess={true}
//                         forceDialCode={true}
//                       />
//                     </div>
//                     {formik.errors.phone_number &&
//                       formik.touched.phone_number && (
//                         <p className="text-[14px] text-[#ee1c25]">
//                           {formik.errors.phone_number}
//                         </p>
//                       )}
//                   </div>
//                   <div className="flex-1 mb-5 md:mb-0">
//                     <div className="flex flex-col gap-2 bg-transparent">
//                       <input
//                         id={`${formId}-email`}
//                         name="email"
//                         type="email"
//                         placeholder="Email Address &#42;"
//                         className="w-full border-b border-slate-300 text-black py-4 md:py-3  focus:outline-none placeholder-black bg-transparent"
//                         // onChange={(e) => handleChange("email", e.target.value)}
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                       />
//                       {formik.errors.email && formik.touched.email && (
//                         <p className="text-[14px] text-[#ee1c25]">
//                           {formik.errors.email}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
//                   <div className="flex flex-col mb-4 cursor-pointer  md:mb-0">
//                     <label
//                       htmlFor={`${formId}-resume`}
//                       className="w-full border-b border-slate-300 text-black py-4 md:py-3 focus:outline-none placeholder-black bg-transparent flex gap-[10px] items-center cursor-pointer"
//                     >
//                       <Icons.upload className="w-[20px] h-[20px] " />
//                       <span>{fileName ? fileName : "Add resume here"}</span>
//                     </label>
//                     <input
//                       id={`${formId}-resume`}
//                       name="resume"
//                       type="file"
//                       accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//                       className="hidden"
//                       onChange={(event) => {
//                         let file = event.currentTarget.files[0];

//                         setFileName(file?.name);
//                         formik.setFieldValue("resume", file);
//                       }}
//                     />
//                     {formik.errors.resume && formik.touched.resume && (
//                       <p className="text-[14px] text-[#ee1c25]">
//                         {formik.errors.resume}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <input {...positionInputAttributes} />

//                     {formik.errors.position && formik.touched.position && (
//                       <p className="text-[14px] text-[#ee1c25]">
//                         {formik.errors.position}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-1">
//                   <input
//                     name="linkedin_url"
//                     id={`${formId}-linkedin_url`}
//                     type="text"
//                     placeholder="LinkedIn url"
//                     className="w-full border-b border-slate-300 text-black py-4 md:py-3  focus:outline-none placeholder-black bg-transparent"
//                     // onChange={(e) => handleChange("name", e.target.value)}
//                     value={formik.values.linkedin_url}
//                     onChange={formik.handleChange}
//                   />
//                   {formik.errors.linkedin_url &&
//                     formik.touched.linkedin_url && (
//                       <p className="text-[14px] text-[#ee1c25]">
//                         {formik.errors.linkedin_url}
//                       </p>
//                     )}
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-1 lg:gap-10">
//                   <div>
//                     <textarea
//                       id={`${formId}-position`}
//                       name="comment"
//                       placeholder="Please add comment (if any)"
//                       className=" w-full border-b border-slate-300 text-black py-4 md:py-3 focus:outline-none placeholder-black bg-transparent flex gap-[10px] items-center  "
//                       rows={2}
//                       // onChange={(e) => handleChange("project_details", e.target.value)}
//                       value={formik.values.comment}
//                       onChange={formik.handleChange}
//                     />
//                     {formik.errors.comment && formik.touched.comment && (
//                       <p className="text-[14px] text-[#ee1c25]">
//                         {formik.errors.comment}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <NormalButton
//                   label={"Submit"}
//                   bgColor={"bg-black"}
//                   loading={loading}
//                 />
//               </form>
//             </div>
//             {/* <div className="absolute bottom-[-30px] right-[-30px] md:bottom-[-60px] md:right-[-60px]">
//           <Image
//             src={Arrow}
//             width={100}
//             height={100}
//             alt="paperRocket"
//             className="w-[190px] md:w-[300px]"
//           />
//         </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareerJobDesc;
