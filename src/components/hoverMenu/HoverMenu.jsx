import React, { useEffect, useRef, useState } from "react";
import HoveredButton from "../buttons/hoverButton";
// import { HidePages } from "@/app/lib/constant";

const HidePages ={
    CLIENT_PAGE:"Our Clients",
    NEWS_INSIGHT:"News & Insight",
    ABOUT:"About"
}

const HoverMenu = ({
  hoveredItem,
  newsInsights,
  connect,
  openForm,
  setIsDropdownOpen,
  setIsActive,
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const closeDropdownOnClick = () => {
    setIsDropdownOpen(false);
    setIsActive(false);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`pt-3 ${
            hoveredItem.title === HidePages.ABOUT ? "w-0" : "w-[40%]"
          }`}
        >
          <ul className="list-none">
            {hoveredItem.items.map((subItems, index) => (
              <a
                href={subItems.path}
                onMouseEnter={() => setActiveTab(index)}
                onClick={closeDropdownOnClick}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`tab-panel-${index}`}
                tabIndex={activeTab === index ? 0 : -1}
                className="block"
              >
                <li
                  className={`text-[16px] font-bold py-6 px-5 text-black cursor-pointer ${
                    activeTab === index
                      ? "bg-hoverBGcolor text-white font-bold"
                      : ""
                  } ${
                    index !== hoveredItem.items.length - 1
                      ? "border-b border-b-slate-200"
                      : ""
                  } border-r border-b-slate-200 ${
                    hoveredItem.title === "About" ? "hidden" : "flex"
                  }`}
                >
                  {subItems.title}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div
          className={`bg-white w-full my-3 mr-3 ${
            hoveredItem.title === "About" ? "w-full" : "w-[60%]"
          }`}
        >
          <div className="flex">
            <div
              className={`${
                hoveredItem.title === HidePages.ABOUT
                  ? "mx-8"
                  : "h-[360px] overflow-y-auto w-full"
              }`}
              data-lenis-prevent
              ref={scrollRef}
              role="tabpanel"
              id={`tab-panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
            >
              <ul
                className={`grid ${
                  hoveredItem.title === HidePages.ABOUT
                    ? "grid-cols-3"
                    : "grid-cols-2"
                }`}
              >
                {hoveredItem.items[activeTab]?.items.map(
                  (subContent, subIndex) =>
                    subContent.title === HidePages.NEWS_INSIGHT ||
                    subContent.title === HidePages.CLIENT_PAGE ? null : (
                      <li
                        key={subIndex}
                        className="h-auto mx-4 my-4 font-normal flex items-start gap-2"
                      >
                        <a
                          href={subContent.path}
                          className="flex items-start flex-col text-[18px] font-[600] leading-5 text-[#292929] Footer_menu_links"
                          onClick={closeDropdownOnClick}
                        >
                          <img
                            src={
                              subContent.related.attributes.feature_img?.data
                                .attributes.url || "/images/default.png"
                            }
                            width="40"
                            height="40"
                            alt={subContent.title}
                            className="pb-2"
                          />

                          {subContent.title}
                          <span className="foo inline-block w-3">&nbsp;</span>
                          <p className="text-[16px] font-normal text-[#7C7C7C] mt-2">
                            {subContent.related.attributes.short_description}
                            {subContent.related.attributes.hero_banner?.subtitle
                              ? subContent.related.attributes.hero_banner
                                  ?.subtitle
                              : ""}
                          </p>
                        </a>
                      </li>
                    )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`flex bg-[#EDEDED] justify-around items-center min-h-[120px] rounded-b-3xl ${
          hoveredItem.title === HidePages.ABOUT ? "hidden" : "flex"
        }`}
      >
        <h3 className="font-bold text-royalBule leading-5 text-[20px]">
          {connect?.title}
        </h3>
        <p className="font-normal text-[16px] w-[510px] text-[#737171]">
          {connect?.description}
        </p>
        <HoveredButton data={connect?.button} openForm={openForm} />
      </div>
    </>
  );
};

export default HoverMenu;
