"use client";
// contexts/HeaderContext.js
import React, { createContext, useState } from "react";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [headerNavData, setHeaderData] = useState(null);
  const [activeNav, setActiveNav] = useState(false);

  const [offBodyScroll, setOffBodyScroll] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        headerNavData,
        setHeaderData,
        activeNav,
        setActiveNav,
        offBodyScroll,
        setOffBodyScroll,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderProvider };
