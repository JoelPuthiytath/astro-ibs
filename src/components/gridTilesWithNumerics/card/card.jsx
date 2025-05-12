import React from "react";

const Card = ({ title, subtitle,description, index }) => {
  return (
    <div className={`group w-full `}>
      <div className="flex h-full ">
        <div className="flex flex-col min-h-full bg-white rounded-xl w-full p-6 card-hover hover:bg-gradientBG">
          <h2 className="text-[60px] font-extrabold leading-[72px] outlined-text mb-4 leading-1">
            {index < 10 ? `0${index + 1}` : index}
          </h2>

          {title && (
            <p className="text-[24px] font-semibold leading-[26px] mb-3 group-hover:text-white">
              {title}
            </p>
          )}

          {description && (
            <p className="text-[16px] font-[500] leading-[24px] text-[#545454]  grow group-hover:text-white">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
