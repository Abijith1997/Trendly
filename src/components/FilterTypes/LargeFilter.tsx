import { IconX } from "@tabler/icons-react";

export interface FilterTypeProps {
  handleClick: (filter: string) => void;
  filters: string[];
  ActiveFilters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

export const LargeFilter = ({
  handleClick,
  filters,
  ActiveFilters,
  setActiveFilters,
}: FilterTypeProps) => {
  return (
    <div className="hidden md:flex w-full justify-end items-center gap-5">
      {filters.map((filter, index) => (
        <div
          key={index}
          className={` ${
            ActiveFilters.includes(filter) ? "bg-gray-600 text-white" : ""
          } border-1 px-3 py-1 rounded-md border-gray-200 hover:bg-gray-400 cursor-pointer hover:text-white transition-all duration-300 ease-in-out shadow-lg`}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </div>
      ))}
      {ActiveFilters.length > 0 && (
        <div className="clear-filters flex items-center h-full justify-center">
          <button
            onClick={() => setActiveFilters([])}
            className="cursor-pointer p-1 hover:bg-gray-400 hover:shadow-lg hover:text-white transition-all duration-300 ease-in-out rounded-md"
          >
            <IconX size={16} />
          </button>
        </div>
      )}
    </div>
  );
};
