import React from "react";

import Accordions from "../accordions/accordions";

const footer = ({ sectionData, sectionNavigation }) => {
  const { logo, socials, copyright_text } =
    sectionData.data.attributes.company_info;
  const logoImg = logo.data?.attributes;
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-2 py-14 bg-white shadow-inner lg:flex-row  px-6 lg:px-6 flex-wrap justify-between lg:items-start">
      <div className="container mx-auto flex flex-col lg:justify-between lg:flex-row">
        <div className="flex flex-col p-0 lg:p-0 gap-2 lg:leading-[26px] items-start lg:basis-[30%]">
          {logoImg && (
            <a href="/" aria-label="Fulcro">
              <img
                className="pb-2 "
                src={logoImg.url}
                width={logoImg.width}
                height={logoImg.height}
                alt={
                  logoImg.alternativeText ? logoImg.alternativeText : "Logos"
                }
              />
            </a>
          )}

          <div className=" pt-0 flex gap-5 lg:leading-[26px] pb-2 md:pt-3 justify-center items-center">
            {socials &&
              socials.map(({ link, icon, name }, i) => {
                const socialIcon = icon.data.attributes;

                return (
                  <a
                    href={link}
                    target="_blank"
                    key={i}
                    aria-label={`visit our ${name} page`}
                  >
                    {icon && (
                      <img
                        className="pb-2"
                        src={socialIcon.url}
                        width={socialIcon.width}
                        height={socialIcon.height}
                        alt={
                          socialIcon.alternativeText
                            ? socialIcon.alternativeText
                            : name
                        }
                      />
                    )}
                  </a>
                );
              })}
          </div>

          <p className="hidden lg:w-full lg:block lg:text-[14px] lg:font-[400]">
            &copy; {currentYear} {copyright_text}
          </p>
        </div>

        <div className="hidden lg:flex lg:justify-between lg:flex-row gap-6 lg:basis-[70%]">
          {sectionNavigation?.map(({ title, items }, i) =>
            title === "Services" ? (
              <div className="flex flex-col py-2 " key={i}>
                <h3 className="text-[18px] font-[700] pb-3 leading-[21.78px]">
                  {title}
                </h3>
                {items.map((ele, i) => (
                  <ul
                    className="pb-[0.8rem] text-[16px] text-slate-700"
                    key={i}
                  >
                    <div key={i}>
                      <li className="Footer_menu_links">
                        <a href={ele.path}>
                          {ele.title}
                          <span className="foo inline-block w-3">&nbsp;</span>
                        </a>
                      </li>
                    </div>

                    {/* {ele.items &&
                      ele.items?.map((linkItem, i) => (
                        <div key={i}>
                          <ul className="pb-[0.8rem] text-[16px] text-slate-700">
                            <li className=" Footer_menu_links">
                              <Link href={linkItem.path}>
                                {linkItem.title}

                                <span className="foo inline-block w-3">
                                  &nbsp;
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      ))} */}
                  </ul>
                ))}
              </div>
            ) : (
              <div className="flex flex-col py-2 md:px-4" key={i}>
                <h3 className="text-[18px] font-[700] pb-3 leading-[21.78px]">
                  {title}
                </h3>

                {items.map((ele, i) =>
                  ele.title === "Insight" ? null : (
                    <ul
                      className="pb-[0.8rem] text-[16px] text-slate-700"
                      key={i}
                    >
                      <li className="Footer_menu_links">
                        <a href={ele.path}>
                          {ele.title}{" "}
                          <span className="foo inline-block w-3">&nbsp;</span>
                        </a>
                      </li>

                      {/* {ele.items &&
                      ele.items?.map((linkItem, i) => (
                        <div key={i}>
                          <ul className="pl-4">
                            <Link href={linkItem.path}>
                              <li className="py-2 px-2">{linkItem.title}</li>
                            </Link>
                          </ul>
                        </div>
                      ))} */}
                    </ul>
                  )
                )}
              </div>
            )
          )}
        </div>

        <div className="lg:hidden">
          <Accordions data={sectionNavigation} />
        </div>

        <div className="flex flex-col mt-5 py-2 lg:hidden">
          <div className="hidden gap-3 pb-2 items-center sm:hidden">
            {socials?.map(({ link, icon }, i) => {
              const socialIcon = icon.data.attributes;

              return (
                <a href={link} key={i}>
                  {socialIcon && (
                    <img
                      className="pb-2"
                      src={socialIcon.url}
                      width={socialIcon.width}
                      height={socialIcon.height}
                      alt={socialIcon.alternativeText}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* <p className=" font-semibold w-full lg:hidden">{copyright_text}</p> */}
          <p className="font-semibold w-full lg:hidden">
            &copy; {currentYear} {copyright_text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;

