import React from "react";

const Index = ({ label, bgColor, textColor, loading }) => {
  return (
    <>
      <div
        type="submit"
        className={`${
          loading ? "bg-[##000000]" : bgColor
        }  lg:mt-0 py-1 px-4 text-[14px] leading-5 font-semibold rounded-full shadow-lg fit-content ${
          textColor ? textColor : "text-[#000000]"
        }`}
        aria-label={label ? label : "Primary Button"}
        disabled={loading ? true : false}
      >
        {label}
      </div>
    </>
  );
};

export default Index;
