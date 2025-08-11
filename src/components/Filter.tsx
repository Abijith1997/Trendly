import type React from "react";
import { LargeFilter } from "./FilterTypes/LargeFilter";
import { MobileFilter } from "./FilterTypes/MobileFilter";

interface filterProps {
  filters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
  ActiveFilters: string[];
}

export const Filter = ({
  filters,
  setActiveFilters,
  ActiveFilters,
}: filterProps) => {
  const handleClick = (filter: string) => {
    if (ActiveFilters.includes(filter)) {
      setActiveFilters(ActiveFilters.filter((item) => item !== filter));
    } else {
      setActiveFilters([...ActiveFilters, filter]);
    }
  };

  return (
    <div className="flex w-full h-full gap-5 items-center justify-end pb-10 border-b-1 border-gray-200">
      <LargeFilter
        handleClick={handleClick}
        filters={filters}
        ActiveFilters={ActiveFilters}
        setActiveFilters={setActiveFilters}
      />
      <MobileFilter
        handleClick={handleClick}
        filters={filters}
        ActiveFilters={ActiveFilters}
        setActiveFilters={setActiveFilters}
      />
    </div>
  );
};
