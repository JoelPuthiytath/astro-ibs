"use client";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { BrandCarousel } from "../carousel/carousel";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Icons } from "../../utils/constants.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Custom debounce function
function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const OurWork = ({ data }) => {
  const { title, subtitle, case_studies, cta } = data || {};
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  const handleWindowChange = useCallback(() => {
    const windowWidth = window.innerWidth;
    setIsMobile(windowWidth < 567);
  }, []);

  const debouncedHandleWindowChange = useMemo(() => debounce(handleWindowChange, 300), [handleWindowChange]);

  useEffect(() => {
    handleWindowChange();
    window.addEventListener("resize", debouncedHandleWindowChange);
    return () => {
      window.removeEventListener("resize", debouncedHandleWindowChange);
    };
  }, [debouncedHandleWindowChange, handleWindowChange]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    gsap.from(".fadeDownCase", {
      y: "40",
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".bg-royalBule",
        start: "top 70%",
      },
    });
  }, []);

  return (
    <div className="bg-royalBule h-full flex justify-center gap-8 min-w-[0] ">
      <div className="container flex flex-col gap-2 px-8 md:px-2 py-14 md:gap-6">
        <div className="flex justify-between">
          <h2 className="fadeDownCase text-white text-[24px] uppercase font-[600] leading-[36px]">
            {title}
          </h2>
          <a
            href={cta?.link ? cta?.link : "/case-studies"}
            className="hidden md:flex learn-more text-[18px]"
          >
            <span
              className={isMobile ? "mobile-circle" : "circle"}
              aria-hidden="true"
            >
              <span
                className={
                  isMobile
                    ? "mobile-circle-icon mobile-circle-arrow"
                    : "icon arrow relative"
                }
              >
                <Icons.rightSideArrow className="absolute left-[50%] top-[50%] transform -translate-x-1 -translate-y-1/2 text-[#001b94] h-[20px] w-[20px]" />
              </span>
            </span>
            <span
              className={
                isMobile
                  ? "mobile-circle-button"
                  : "button-text leading-[24px]"
              }
            >
              {cta?.name}
            </span>
          </a>
        </div>

        <div className="demo-text">
          <h2 className="fadeDownCase font-[700] mt-[15px] lg:mt-0 text-[20px] md:text-[28px] lg:text-[28px] md:text-wrap text-white md:w-[70%]">
            {subtitle}
          </h2>
        </div>

        <BrandCarousel data={case_studies?.data} />

        {isMobile && (
          <div className="mx-auto md:mx-0">
            <a
              href={`${cta?.link}`}
              className="flex items-center gap-[20px] bg-white w-[192px] rounded-[26px] px-[10px] py-[5px]"
            >
              <img
                src="/images/blue_arrow.svg"
                className="w-[28px] h-[32px]"
                width={28}
                height={32}
                alt="arrow_logo"
              />
              <span className="text-[#001b94] text-[18px] font-[700]">
                {cta?.name}
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurWork;
