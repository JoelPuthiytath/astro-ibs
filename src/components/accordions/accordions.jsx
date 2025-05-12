
"use client";
import React, { useEffect, useState } from "react";
import { Icons } from "../../utils/constants.js";   

const Accordions = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Reset open panel when pathname changes — you can omit or replace with a prop if you need routing awareness
  useEffect(() => {
    setActiveIndex(null);
  }, [/* e.g. a location prop */]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row w-full">
      <div className="container py-4 w-full md:min-h-full">
        {data.map(({ title, items }, i) => (
          <div
            key={i}
            className={`border-b border-slate-500 ${
              activeIndex === i ? "border-b-0" : ""
            }`}
          >
            <button
              onClick={() => toggleAccordion(i)}
              className="w-full flex justify-between items-center capitalize font-bold py-4 focus:outline-none"
              aria-expanded={activeIndex === i}
              aria-controls={`accordion-panel-${i}`}
              id={`accordion-header-${i}`}
            >
              <span className="text-gray-900 text-[16px]">{title}</span>
              {activeIndex === i ? (
                <Icons.sub className="w-6 h-6" />
              ) : (
                <Icons.add className="w-6 h-6" />
              )}
            </button>

            <div
              id={`accordion-panel-${i}`}
              role="region"
              aria-labelledby={`accordion-header-${i}`}
              className={`overflow-hidden transition-[max-height] duration-300 ${
                activeIndex === i ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="pl-4 pb-4">
                {items.map((ele, j) =>
                  ele.title === "Insight" ? null : (
                    <li key={j} className="py-2">
                      <a
                        href={ele.path}
                        className="text-[14px] hover:underline"
                      >
                        {ele.title}
                      </a>
                      {ele.items && (
                        <ul className="pl-4 mt-2">
                          {ele.items.map((linkItem, k) => (
                            <li key={k} className="py-1">
                              <a
                                href={linkItem.path}
                                className="text-[14px] hover:underline"
                              >
                                {linkItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordions;
