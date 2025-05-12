import React from "react";

function SectionsLayout({ children }) {
  return (
    <>
      <div className="container flex flex-col px-[20px] lg:px-0 md:mx-auto">{children}</div>
    </>
  );
}

export default SectionsLayout;
