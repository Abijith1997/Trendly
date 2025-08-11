import { IconShoppingCart } from "@tabler/icons-react";
import type { ProductProps } from "../types/types";
import { StarRating } from "./StarRating";

interface StarRatingProps {
  rating: number; // e.g., 3.7
  totalStars?: number; // default 5
  size?: number; // px size of each star, default 20
  filledColor?: string; // color of filled stars
  emptyColor?: string; // color of empty stars
}

export const Card = ({ data }: { data: ProductProps }) => {
  return (
    <div className="w-[400px] cursor-pointer h-[500px] border-1 border-gray-200 flex flex-col items-center justify-start gap-5 hover:shadow-lg rounded-md px-10 py-5">
      <div className="product-image w-[290px] h-[300px] overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex justify-end items-center w-full top-0 right-0 ">
        <span>
          <StarRating rating={data.rating.rate} count={data.rating.count} />
        </span>
      </div>
      <div className="card-content flex flex-col w-full text-sm text-center">
        {data.title.toUpperCase()}
      </div>
      <div className="w-full flex items-center justify-between text-sm">
        <span className="text-gray-500 bg-gray-200 px-2 py-1 rounded-md shadow-sm font-semibold">
          {data.category.toUpperCase()}
        </span>
        <span className="text-lg font-bold">${data.price}</span>
      </div>
      <div className="w-full flex items-center justify-end">
        <button className="bg-gray-500 px-4 py-2 rounded-lg shadow-md text-gray-50 font-semibold tracking-wider cursor-pointer flex gap-2">
          <IconShoppingCart size={24} /> Add to Cart
        </button>
      </div>
    </div>
  );
};
