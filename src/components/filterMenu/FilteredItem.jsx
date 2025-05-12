import React from "react";
import { Icons } from "../../../../public/images/clients/icons";
const FilterItem = ({ filter, onRemove }) => (
  <div className="flex items-center justify-between bg-royalBule text-lg font-medium shadow-md text-white px-2 py-1 rounded-lg">
    <span className="mr-2">{filter}</span>
    <button
      className="text-blue-500 hover:text-gray-200"
      onClick={() => onRemove(filter)}
      aria-label="Remove filter"
    >
      <Icons.close className="w-5 h-5" />
    </button>
  </div>
);

export default FilterItem;
