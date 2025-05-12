import React from "react";
import Card from "./card/card";

const GridTilesWithNumerics = (props) => {
  const { section_title, section_subtitle, section_desc, content, bgcolor } =
    props;

  const getTileClasses = (index, totalItems) => {
    const numRows = Math.ceil(totalItems / 3);
    const isLastInRow = (index + 1) % 3 === 0;
    const isLastItem = index === totalItems - 1;
    const isLastRow = Math.ceil((index + 1) / 3) === numRows;

    let classes = "";

    if (totalItems === 1) {
      return "p-0"; // No borders for a single item and no padding
    }

    if (!isLastItem) {
      classes += "border-b-2 border-slate-200 ";
    }

    if (!isLastInRow) {
      classes += "md:border-r-2 ";
    }

    if (isLastRow) {
      classes += "md:border-b-0 ";
    }

    return classes.trim();
  };

  return (
    <div
      className={`lg:min-h-[600px] flex flex-col py-14 lg:py-[100px] px-8 lg:px-14 bg-[#f1f1f1]`}
    >
      <div className="container mx-auto lg:p-2 lg:flex lg:flex-col">
        <h2 className=" text-[18px] uppercase font-[600] leading-[24px] mb-[15px] lg:mb-2">
          {section_title}
        </h2>

        <h2 className="text-[#482C9A] capitalize text-[40px] xl:text-[40px] 2xl:text-[48px] font-[700] lg:leading-[64px] inline-block">
          {section_subtitle}
        </h2>

        <p className="text-[16px] font-[600] mt-[15px] lg:mt-0 lg:leading-[36px] xl:text-[18px] 2xl:text-[24px]">
          {section_desc}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px] justify-center mt-[30px]">
          {content &&
            content?.map((item, i) => {
              const cardProps = {
                ...item,
                index: i,
              };

              return <Card key={i} {...cardProps} bgcolor="grey" />;
            })}
        </div>
      </div>
    </div>
  );
};

export default GridTilesWithNumerics;
