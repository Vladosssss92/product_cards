import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product/product.slice";
import { basketSlice } from "./product/basket.slice";

export const store = configureStore({
  reducer: {
    productList: productSlice.reducer,
    baskedProducts: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;