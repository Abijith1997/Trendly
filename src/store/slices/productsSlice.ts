import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductProps } from "../../types/types";

interface ProductsState {
  products: ProductProps[];
}

// Load from localStorage on init
const savedProducts = localStorage.getItem("products");
const initialState: ProductsState = {
  products: savedProducts ? JSON.parse(savedProducts) : [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsSuccess(state, action: PayloadAction<ProductProps[]>) {
      state.products = action.payload;

      // Save to localStorage for persistence
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    clearProducts(state) {
      state.products = [];
      localStorage.removeItem("products");
    },
  },
});

export const { fetchProductsSuccess, clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
