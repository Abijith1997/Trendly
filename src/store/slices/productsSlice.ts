import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductProps } from "../../types/types";

interface ProductsState {
  products: ProductProps[];
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsSuccess(state, action: PayloadAction<ProductProps[]>) {
      state.products = action.payload;
    },
  },
});

export const { fetchProductsSuccess } = productsSlice.actions;

export default productsSlice.reducer;
