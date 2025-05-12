import React from "react";

const Index = ({ data, openForm }) => {
  return (
    <>
      <button
        className="c-button c-button--gooey"
        onClick={openForm}
        aria-label={data?.title ? data.title : "Submit"}
        role="button"
      >
        <span>{data?.title || "Submit"}</span>
        <div className="c-button__blobs">
          <div />
          <div />
          <div />
        </div>
      </button>
    </>
  );
};

export default Index;
