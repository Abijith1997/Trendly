import { useEffect, useState } from "react";
import { Main } from "./components/Main";
import { type ProductProps } from "../../types/types";
import { useDispatch } from "react-redux";
import { fetchProductsSuccess } from "../../store/slices/productsSlice";
import { MainGrid } from "./components/MainGrid";

function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProductProps[]>([]);
  const dispatch = useDispatch();

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  useEffect(() => {
    dispatch(fetchProductsSuccess(data));
  }, [data]);

  return (
    <div className="lg:px-30 px-10 flex items-center justify-start flex-col w-full h-full gap-10">
      {loading ? (
        <>
          <div className="h-full w-full flex items-center justify-center">
            Loading
          </div>
        </>
      ) : (
        <>
          <Main />
          <MainGrid />
        </>
      )}
    </div>
  );
}

export default Home;
