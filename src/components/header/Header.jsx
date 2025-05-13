import { useContext, useEffect, useRef, useState } from "react";
import HoverMenu from "../hoverMenu/HoverMenu";

const Header = ({ data, headerData, newsInsights }) => {
  const [showForm, setShowForm] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const [activeNav, setActiveNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  
  // const { headerNavData, setHeaderData } = useContext(HeaderContext);
  const headerNavData = "white";

  let closeTimer;

  const handleMouseEnter = (item, index) => {
    if (Array.isArray(item.items) && item.items.length > 0) {
      clearTimeout(closeTimer); // Clear any existing close timer
      setIsDropdownOpen(true);
      setHoveredItem(item);
      setIsActive(index);
    }
  };

  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setIsDropdownOpen(false);
      setHoveredItem(null);
      setIsActive(null);
    }, 100);
    // Set a delay of 300 milliseconds before closing the dropdown
  };

  const handleMouseEnterDropdown = () => {
    clearTimeout(closeTimer);
    // Clear the close timer when entering the dropdown
  };

  const handleMouseLeaveDropdown = () => {
    closeTimer = setTimeout(() => {
      setIsDropdownOpen(false);
      setHoveredItem(null);
      setIsActive(null);
    }, 100); // Set a delay of 300 milliseconds before closing the dropdown
  };

  useEffect(() => {
    const changeNav = () => {
      if (headerNavData === "white" || window.scrollY >= 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    changeNav();
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, [headerNavData]);

  useEffect(() => {
    if (isDropdownOpen) {
      const dropdownMenu = dropdownRef.current;
      dropdownMenu.addEventListener("mouseenter", handleMouseEnterDropdown);
      dropdownMenu.addEventListener("mouseleave", handleMouseLeaveDropdown);

      return () => {
        dropdownMenu.removeEventListener(
          "mouseenter",
          handleMouseEnterDropdown
        );
        dropdownMenu.removeEventListener(
          "mouseleave",
          handleMouseLeaveDropdown
        );
      };
    }
  }, [isDropdownOpen]);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const { logo, logo_alternate, button, connect } = data?.attributes || {};

//   const getCustomStyles = (isMobile) => ({
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-40%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 1001,
//     borderRadius: "15px",
//     padding: isMobile ? "30px" : "60px",
//     backgroundColor: "#fff",
//     width: isMobile ? "85%" : "auto",
//   },
//   overlay: {
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     backdropFilter: "blur(5px)",
//     WebkitBackdropFilter: "blur(5px)",
//     zIndex: 1001,
//   },
// });

//   const customStyles = getCustomStyles(isMobile);

// console.log(logo, logo_alternate, 'logo')



  return (
    <>
      <div
        className={`fadeDownHeader flex justify-between w-full  items-center fixed top-0   navbar  h-[70px] lg:h-[80px] ${
          activeNav ? "active-nav " : ""
        }`}
        style={{ zIndex: 1001 }}
      >
        <div className="container w-full md:mx-auto flex justify-between items-center px-8 md:px-0 ">
          <div>
           <a href="/" aria-label="home page">
              <img
                // priority="true"
                src={
                  // activeNav
                  //   ? logo?.data.attributes.url
                  //   : logo_alternate?.data.attributes.url
                  logo?.data.attributes.url
                }
                width={logo?.data.attributes.width}
                height={logo?.data.attributes.height}
                alt={
                  logo?.data.attributes.alternativeText
                    ? logo?.data.attributes.alternativeText
                    : "fulcro-logo"
                }
                // quality={100}
                className="w-[70%]  md:w-[65%] lg:w-[80%]"
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-between gap-4">
            <ul className="flex justify-between items-center gap-6 md:gap-2 text-[14px]">
              {headerData?.map((item, index) =>
                item.path !== "/" ? (
                  <a href={item.path} key={index} aria-label="sub pages">
                    <li
                      className={` flex items-center  px-2 text-[15px] font-[600] leading-[19.36px] nav-item dropdown  md:px-2  capitalize cursor-pointer blue-on-hover lg:px-4  transition-none  ${
                        Array.isArray(item.items) && item.items.length > 0
                          ? "h-[80px]"
                          : "Footer_menu_links"
                      }  
                    wrapper ${isActive === index ? "active" : ""} 
                    `}
                      onMouseEnter={() => handleMouseEnter(item, index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.title}
                      {Array.isArray(item.items) && item.items.length > 0 && (
                        <span className="arrow_head"></span>
                      )}
                      <span className="foo inline-block w-3">&nbsp;</span>
                    </li>
                  </a>
                ) : (
                  <li
                    key={index}
                    aria-label="sub pages"
                    className={` flex items-center text-black px-2 text-[15px] font-[600] leading-[19.36px] nav-item dropdown  md:px-2  capitalize cursor-pointer blue-on-hover lg:px-4  transition-none  ${
                      Array.isArray(item.items) && item.items.length > 0
                        ? "h-[80px]"
                        : "Footer_menu_links"
                    }  
                    wrapper ${isActive === index ? "active" : ""} 
                    `}
                    onMouseEnter={() => handleMouseEnter(item, index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.title}
                    {Array.isArray(item.items) && item.items.length > 0 && (
                      <span className="arrow_head"></span>
                    )}
                    <span className="foo inline-block w-3">&nbsp;</span>
                  </li>
                )
              )}

              <>
                {hoveredItem && isDropdownOpen && (
                  <li
                    ref={dropdownRef}
                    onClick={handleMouseEnterDropdown}
                    onMouseLeave={handleMouseLeaveDropdown}
                    className={`dropdown-menu bg-white flex container mx-auto flex-col rounded-b-3xl overflow-hidden absolute top-[80px] border-t border-slate-100 left-1/2 -translate-x-1/2 shadow-xl  ${
                      activeNav ? "active " : ""
                    }`}
                  >
                    {/* ********************Dropdown header work start here************************* */}
                    <HoverMenu
                      hoveredItem={hoveredItem}
                      newsInsights={newsInsights}
                      connect={connect}
                      openForm={openForm}
                      isDropdownOpen={isDropdownOpen}
                      setIsDropdownOpen={setIsDropdownOpen}
                      setHoveredItem={setHoveredItem}
                      setIsActive={setIsActive}
                    />

                    {/* ********************Dropdown header work end here************************* */}
                  </li>
                )}
              </>
            </ul>
          </div>

          {/* <div className="lg:hidden">
            <MobileMenu
              headerData={headerData}
              button={button}
              openForm={openForm}
              setActiveNav={setActiveNav}
              activeNav={activeNav}
              isScrolled={isScrolled}
            />
          </div> */}

          {/* ********************Mobile header work end here************************* */}
        </div>
      </div>
    </>
  );
};

export default Header;
