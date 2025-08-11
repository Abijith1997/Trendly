import { configureStore } from "@reduxjs/toolkit";
import handleCart from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";

const store = configureStore({
  reducer: {
    cart: handleCart, // use the reducer under the key "cart"
    products: productsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
