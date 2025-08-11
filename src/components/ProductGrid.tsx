import type { ProductProps } from "../types/types";
import { Card } from "./Card";

export const ProductGrid = ({ data }: { data: ProductProps[] }) => {
  return (
    <div className=" p-3 lg:py-5 flex flex-wrap items-center justify-between gap-5">
      {data.map((d) => (
        <Card data={d} />
      ))}
    </div>
  );
};
