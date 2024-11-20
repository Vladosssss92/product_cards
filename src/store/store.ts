import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product/product.slice";

export const store = configureStore({
  reducer: {
    productList: productSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
