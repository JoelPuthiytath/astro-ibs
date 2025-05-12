import React from "react";
import { motion } from "framer-motion";

const Features = ({ data, titles }) => {
  return (
    <div className="bg-white w-full container mx-auto p-2 py-20">
      <div className="flex flex-col gap-6 mx-4 lg:mx-0 lg:flex-row lg:space-x-6">
        <div className="lg:w-1/3 sticky-header self-start">
          <p className="text-[24px] uppercase font-[600] leading-[24px] mb-[15px] lg:mb-2">
            {titles.features_title}
          </p>
          <h2 className="text-[#482C9A] capitalize text-[40px] xl:text-[40px] 2xl:text-[48px]  leading-[64px] inline-block">
            {titles?.features_heading}
          </h2>
          <p className="lg:font-[400] lg:text-[16px] text-gray-500 lg:w-96 leading-12">
            {titles?.features_subheading}
          </p>
        </div>
        <div className="lg:w-2/3 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-10 lg:mt-0">
            {data.data.map((item, index) => (
              <motion.div
                className="flex flex-col h-[130px] gap-4"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1 }}
              >
                <h3 className="lg:text-[24px] font-semibold leading-[29px]">
                  {item.attributes.title}
                </h3>
                <p className="lg:text-[20px] font-[400] leading-[26px] text-gray-500">
                  {item.attributes.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
