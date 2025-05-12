import React from "react";

const Index = ({ label, bgColor, textColor, loading }) => {
  return (
    <>
      <button
        type="submit"
        className={`${
          loading ? "bg-[##000000]" : bgColor
        } mt-[20px] lg:mt-0 py-4 px-10 text-[18px] leading-5 font-semibold rounded-xl shadow-lg w-40 ${
          textColor ? textColor : "text-white"
        }`}
        aria-label={label ? label : "Primary Button"}
        disabled={loading ? true : false}
      >
        {label}
      </button>
    </>
  );
};

export default Index;
