import { useRef, useState } from "react";
import type { FilterTypeProps } from "./LargeFilter";
import { IconX } from "@tabler/icons-react";

export const MobileFilter = ({
  filters,
  ActiveFilters,
  setActiveFilters,
  handleClick,
}: FilterTypeProps) => {
  const filterRef = useRef(null);
  const [filterDdmActive, setFilterDdmActive] = useState(false);

  return (
    <div className="flex md:hidden w-full justify-between items-center">
      <div className="clear-filters flex items-center h-full justify-center">
        {ActiveFilters.length > 0 && (
          <button
            onClick={() => setActiveFilters([])}
            className="cursor-pointer p-1 hover:bg-gray-400 hover:shadow-lg hover:text-white transition-all duration-300 ease-in-out rounded-md flex items-center gap-1 border-1 border-gray-200"
          >
            <span className="text-xs">Clear Filters</span>
            <IconX size={16} />
          </button>
        )}
      </div>
      <div
        className="relative shadow-md px-3 py-1 rounded-md border-gray-200 border-1 flex gap-1 items-center justify-between"
        onClick={() => setFilterDdmActive(!filterDdmActive)}
      >
        <span className="text-xs text-gray-800">Select Filters</span>
        <div
          ref={filterRef}
          className={`${
            filterDdmActive
              ? "flex flex-col bg-white shadow-lg w-full top-10 right-0 absolute "
              : "hidden"
          } absolute`}
        >
          {filters.map((filter, index) => (
            <div
              key={index}
              className={` ${
                ActiveFilters.includes(filter) ? "bg-gray-600 text-white" : ""
              }  px-3 py-1 rounded-md  hover:bg-gray-400 cursor-pointer hover:text-white transition-all duration-300 ease-in-out text-xs `}
              onClick={() => handleClick(filter)}
            >
              {filter}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
