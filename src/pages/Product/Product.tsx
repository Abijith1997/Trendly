import { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { StarRating } from "../../components/StarRating";
import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import type { ProductProps } from "../../types/types";
import { ProductGrid } from "../../components/ProductGrid";

export const Product = () => {
  const allProducts = useSelector((state: RootState) => state.products);
  const [data, setData] = useState<ProductProps[]>([]);

  const location = useLocation();
  const { id } = useParams();

  // If location.state exists, use it, otherwise find from Redux
  const product = useMemo(() => {
    if (location.state?.product) return location.state.product;
    return allProducts.products.find((p) => p.id === Number(id));
  }, [location.state, allProducts.products, id]);

  useEffect(() => {
    if (product?.category && Array.isArray(allProducts.products)) {
      setData(
        allProducts.products.filter(
          (d) =>
            d.category?.toLowerCase() === product.category.toLowerCase() &&
            d.id !== product.id // exclude current product
        )
      );
    }
  }, [product, allProducts.products]);

  useEffect(() => {
    console.log(product, "product");
    console.log(data, "data");
    console.log(allProducts, "allProducts");
  }, [data]);

  return (
    <div className="lg:px-30 px-10 flex items-center justify-start flex-col w-full h-full gap-10 mt-25 mb-30">
      <div className="flex w-full gap-10 justify-center items-start flex-col lg:flex-row px-20 py-10">
        <div className="flex-1 flex w-full items-center justify-center border-1 border-gray-100 shadow-md rounded-xl p-10 hover:scale-110 transition-all duration-150 ease-in-out cursor-pointer">
          {product?.image && (
            <img
              src={product.image}
              alt={product.title}
              className="w-60 h-auto object-contain"
            />
          )}
        </div>

        <div className="flex-1/3 flex items-start justify-center flex-col gap-5 text-left px-10 py-20 border-l-1 h-full border-gray-200 shadow-md">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="italic text-sm text-gray-500">{product?.category}</p>
          <p className="text-lg font-semibold text-green-600">
            ${product?.price}
          </p>
          <p className="text-gray-700">{product?.description}</p>

          {product?.rating && (
            <div className="flex items-center gap-2">
              <span className="font-medium">{product.rating.rate} / 5</span>
              <span>
                <StarRating
                  rating={product.rating.rate}
                  count={product.rating.count}
                />
              </span>
            </div>
          )}
          <div className="flex gap-10 w-full justify-end items-center">
            <button className="bg-gray-500 px-4 py-2 rounded-lg shadow-md text-gray-50 font-semibold tracking-wider cursor-pointer flex gap-2">
              <IconShoppingCart size={24} /> Add to Cart
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-lg shadow-md text-gray-50 font-semibold tracking-wider cursor-pointer flex gap-2">
              <IconCreditCard size={24} /> Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full px-30 py-10 items-center justify-center">
        <h2 className="text-3xl font-bold tracking-wider underline underline-offset-8">
          Related Products
        </h2>
      </div>
      <ProductGrid data={data} />
    </div>
  );
};
