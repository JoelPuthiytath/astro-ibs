import React from "react";
import { Icons } from "../../../../public/images/clients/icons";

const Pagination = ({ activePage, totalPages, handlePageChange }) => {
  const handlePrevious = (e) => {
    e.preventDefault();
    if (activePage > 1) {
      handlePageChange(activePage - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (activePage < totalPages) {
      handlePageChange(activePage + 1);
    }
  };

  return (
    <div className="flex w-full">
      <ol className="flex items-center justify-center w-full gap-1 text-xs font-medium">
        <li
          className={`flex-1 ${
            activePage <= 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handlePrevious}
        >
          <a
            className={`flex size-8 w-full gap-[5px] items-center justify-center rounded border border-gray-100 bg-white text-gray-900`}
          >
            <Icons.leftArrow
              className={`w-[20px] h-[20px] ${
                activePage <= 1 ? "text-gray-300" : "text-[#667085]"
              }`}
            />
            <span
              className={`text-[14px] font-[500] leading-[20px] ${
                activePage <= 1 ? "text-gray-300" : "text-[#667085]"
              }`}
            >
              Previous
            </span>
          </a>
        </li>

        <div className="flex flex-1 justify-center gap-[15px]">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <a
                  className={`block size-9 text-[14px] rounded border border-gray-100 text-center leading-8 ${
                    activePage === page
                      ? "bg-[#001B94] text-white"
                      : "bg-white text-[#667085]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page);
                  }}
                >
                  {page}
                </a>
              </li>
            )
          )}
        </div>

        <li
          className={`flex-1 ${
            activePage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleNext}
        >
          <a
            className={`flex size-8 w-full gap-[5px] items-center justify-center rounded border border-gray-100 bg-white text-gray-900`}
          >
            <span
              className={`text-[14px] font-[500] leading-[20px] ${
                activePage === totalPages ? "text-gray-300" : "text-[#667085]"
              }`}
            >
              Next
            </span>
            <Icons.rightArrow
              className={`w-[20px] h-[20px] ${
                activePage === totalPages ? "text-gray-400" : "text-[#667085]"
              }`}
            />
          </a>
        </li>
      </ol>
    </div>
  );
};

export default Pagination;
