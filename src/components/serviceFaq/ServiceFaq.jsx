"use client";
import React, { useEffect, useRef, useState } from "react";

import { Icons } from "../../../../public/images/clients/icons";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ServiceFaq = ({ data }) => {
  const [openFaqs, setOpenFaqs] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  const setSectionBgColor = (bgcolor) => {
    if (bgcolor === "grey") {
      return "bg-[#F5F5F5]";
    } else if (bgcolor === "secondGradient") {
      return "bg-secondGradient";
    } else if (bgcolor === "gradientBG") {
      return "bg-gradientBG";
    } else {
      return "bg-[#FFFFFF]";
    }
  };

  useEffect(() => {
    const handleWindowChange = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleWindowChange();

    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleWindowChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);
  const sideComponentMain = useRef(null);
  useEffect(() => {
    gsap.from(sideComponentMain.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sideComponentMain.current,
        start: "top 80%",
      },
    });
  }, []);

  const handleToggleFaq = (index) => {
    setOpenFaqs((prev) => (prev.includes(index) ? [] : [index]));
  };

  function convertServiceFaqData(serviceFaqs) {
    const faqData = [];
    serviceFaqs?.faq_content?.forEach((faq) => {
      const faqEntry = {
        question: faq.question,
        answer: faq.answer,
      };
      faqData.push(faqEntry);
    });

    return faqData;
  }

  const faqData = convertServiceFaqData(data);

  return (
    <div
      className={`flex flex-col py-20 px-[20px] ${setSectionBgColor(
        data?.faq_bg_color
      )}`}
    >
      <div className="container gap-[20px] lg:gap-[50px] flex flex-col lg:flex-col lg:mx-auto lg:p-2 lg-gap-[20px]">
        <div className="flex flex-col flex-1 " ref={sideComponentMain}>
          <h2 className="bg-gradientBG capitalize text-[40px] xl:text-[40px] 2xl:text-[50px] font-[700] leading-[50px] inline-block text-transparent bg-clip-text">
            {data.section_title}
          </h2>
        </div>
        <div className="flex-1 h-[100%]">
          <div className="flex flex-col gap-[20px]">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col border-2 p-4 ${
                  openFaqs.includes(index) ? "gap-[15px]" : ""
                } rounded-md`}
                onClick={() => handleToggleFaq(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <h4 className="text-[16px] font-[500] leading-[24px] text-[#636D79]">
                    {item.question}
                  </h4>
                  <AnimatePresence mode="wait">
                    {openFaqs.includes(index) ? (
                      <motion.div>
                        <Icons.sub className="w-[30px] h-[30px] text-[#3A86FF]  cursor-pointer transition-transform ease-in-out" />
                      </motion.div>
                    ) : (
                      <motion.div>
                        <Icons.add className="w-[30px] h-[30px] text-[#3A86FF]  cursor-pointer transition-transform ease-in-out" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openFaqs.includes(index) ? 1 : 0,
                    height: openFaqs.includes(index) ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[16px] font-[400] leading-[24px] text-[#A2A9B0] overflow-hidden"
                >
                  <span dangerouslySetInnerHTML={{ __html: item.answer }} />
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;
