"use client";
import React, { useEffect, useState } from "react";
// import HeroContentHeading from "../headings/heroContentHeading/Index";
import { ClientsCarousel } from "../carousel/carousel";
import { Icons } from "../../utils/constants.js";

const OurClients = ({ brands }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { title, subtitle, description } = brands?.client || {};
  const { data } = brands?.client.clients || {};


  useEffect(() => {
    const handleWindowChange = () => setIsMobile(window.innerWidth < 567);

    handleWindowChange();
    window.addEventListener("resize", handleWindowChange);

    return () => window.removeEventListener("resize", handleWindowChange);
  }, []);
  return (
    <div
      className="min-h-[550px] px-8 md:px-0 flex flex-col justify-start relative bg-[#F5F5F5] lg:pt-14 pb-[100px] lg:pb-[115px] 
      py-14 main-section-clients"
    >
      <div className="container md:mx-auto lg:mt-[2.5rem]">
        <div className="relative   md:px-0 md:gap-3 flex flex-col  md:mx-0 justify-center items-start lg:flex-row lg:justify-between">
          <div className="flex flex-col  md:basis-1/3">
            {/* <HeroContentHeading
              title={title}
              subtitle={subtitle}
              description={description}
            /> */}
            <div className="flex md:justify-end items-center md:flex-row">
              {/* {cta && (
              <div className="group hidden gap-2 items-center text-[18px] font-[600] md:flex cursor-pointer">
                <Link href={cta.link} className="learn-more-blue">
                  <span className="circle">
                    <span className="icon arrow relative">
                      <Icons.rightSideArrow className="absolute left-[50%] top-[50%] transform -translate-x-1 -translate-y-1/2 text-white h-[20px] w-[20px]" />
                    </span>
                  </span>
                  <span className="button-text leading-[24px]">{cta.name}</span>
                </Link>
              </div>
            )} */}



            </div>
          </div>
          <div className="w-full h-full mt-[60px] mr-4 md:mr-0 md:mx-0 lg:mt-0 md:basis-2/3 md:flex md:flex-col items-stretch gap-14">
          <div className="flex md:justify-end items-center md:flex-row">
          <div className="group hidden gap-2 items-center text-[18px] font-[600] md:flex cursor-pointer">
              <a href='/clients' className=" client_cta">
                <span className="circle">
                  <span className="icon arrow relative">
                    <Icons.rightSideArrow className="absolute left-[50%] top-[50%] transform -translate-x-1 -translate-y-1/2 text-white h-[20px] w-[20px] " />
                  </span>
                </span>
                <span className="button-text leading-[24px] left-5">{'View All Clients'}</span>
              </a>
            </div>
          </div>
        
            <ClientsCarousel data={data} />
          </div>
          {isMobile && (
            <div className="mx-auto md:mx-0 pt-14 lg:pt-0">
              <a
                href='/clients'
                className="flex items-center gap-[16px] bg-[#001b94] w-[220px] rounded-[26px] px-[10px] py-[5px]"
              >
                <img
                  src="/images/white_arrow.svg"
                  className="w-[32px] h-[40px]"
                  alt="arrow_icon"
                  width={28}
                  height={32}
                />
                <span className="text-[#ffffff] text-[18px] font-[700] mt-2 mb-2">
                  View All Clients
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
