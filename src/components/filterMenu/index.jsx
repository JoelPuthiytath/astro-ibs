import React, { useState } from "react";
import FilterItem from "./FilteredItem";

const FilterComponent = ({ dataList, onFilter, onReset }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilter = (category) => {
    if (!selectedFilters.includes(category)) {
      const newSelectedFilters = [...selectedFilters, category];
      setSelectedFilters(newSelectedFilters);
      const filtered = dataList.filter((item) =>
        newSelectedFilters?.includes(
          item.attributes?.service_filter?.data.attributes.name
        )
      );
      onFilter(filtered);
    }
    setMenuVisible(false);
  };

  const handleRemoveFilter = (category) => {
    const newSelectedFilters = selectedFilters?.filter(
      (filter) => filter !== category
    );
    setSelectedFilters(newSelectedFilters);
    if (newSelectedFilters?.length > 0) {
      const filtered = dataList.filter((item) =>
        newSelectedFilters?.includes(
          item.attributes?.service_filter?.data.attributes.name
        )
      );
      onFilter(filtered);
    } else {
      handleReset();
    }
  };

  const handleReset = () => {
    setSelectedFilters([]);
    setMenuVisible(false);
    onReset();
  };

  const uniqueCategories = [
    ...new Set(
      dataList?.map(
        (item) => item.attributes?.service_filter?.data?.attributes?.name
      )
    ),
  ];

  return (
    <div className="relative flex   items-center z-50">
      <div className="lg:flex ">
        <button
          aria-label="toggle filter menu"
          className="px-4 py-2 bg-[#f5f5f5] rounded-[10px] shadow-lg flex gap-2 text-lg font-semibold items-center hover:text-royalBlue transition-transform duration-150 active:scale-95"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <img
            src="/images/filter.svg"
            width={20}
            height={20}
            alt="Filter icon"
          />
          Filter
        </button>
        <div className="flex flex-col lg:flex-row lg:flex-wrap mt-4 lg:mt-0 lg:ml-4 gap-2">
          {selectedFilters?.map((filter, index) => (
            <FilterItem
              key={index}
              filter={filter}
              onRemove={handleRemoveFilter}
            />
          ))}
        </div>
      </div>
      {menuVisible && (
        <div className="absolute top-[50px] lg:top-[60px] left-0 w-[310px] lg:w-[320px] bg-[#f5f5f5] rounded-2xl shadow-md py-4 z-10">
          <p
            className="py-3 px-3 mx-4 hover:bg-hoverBGcolor border-b border-b-slate-200 appearance-none hover:rounded-xl hover:text-white hover:mx-4 cursor-pointer text-lg font-medium transition-transform duration-150 active:scale-95"
            onClick={handleReset}
          >
            ALL
          </p>
          {uniqueCategories?.map((category, index) => (
            <p
              key={index}
              className={`py-3 px-3 mx-4 hover:bg-hoverBGcolor appearance-none hover:text-white hover:mx-4 hover:rounded-xl cursor-pointer text-lg font-medium transition-transform duration-150 active:scale-95 ${
                selectedFilters?.includes(category)
                  ? "text-gray-400 cursor-not-allowed"
                  : ""
              } ${
                index !== uniqueCategories?.length - 1
                  ? "border-b border-b-slate-200"
                  : ""
              }`}
              onClick={() =>
                !selectedFilters?.includes(category) && handleFilter(category)
              }
            >
              {category}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
