import { useSelector } from "react-redux";
import { Filter } from "../../../components/Filter";
import { ProductGrid } from "../../../components/ProductGrid";
import type { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import type { ProductProps } from "../../../types/types";

export const MainGrid = () => {
  const products = useSelector((state: RootState) => state.products);
  const [data, setData] = useState<ProductProps[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [ActiveFilters, setActiveFilters] = useState<string[]>([]);

  useEffect(() => {
    if (products?.products?.length > 0) {
      const categories = Array.from(
        new Set(
          products.products.map((item) =>
            item.category
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )
        )
      );

      setFilters([...categories]);
    }
  }, [products]);

  useEffect(() => {
    if (ActiveFilters.length > 0) {
      setData(
        products.products.filter((item) =>
          ActiveFilters.map((f) => f.toLowerCase()).includes(
            item.category.toLowerCase()
          )
        )
      );
    } else {
      setData(products.products);
    }
  }, [ActiveFilters, products.products]);

  useEffect(() => {
    console.log(data, "data");
  }, [data]);

  return (
    <div className="h-full w-full lg:px-[200px] lg:py-20">
      <Filter
        filters={filters}
        setActiveFilters={setActiveFilters}
        ActiveFilters={ActiveFilters}
      />
      <ProductGrid data={data} />
    </div>
  );
};
