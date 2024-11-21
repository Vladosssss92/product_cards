import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductModel,
  IProductStateModel,
} from "../../components/product/product.model";

const initialState: IProductStateModel = {
  products: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    axiosProductLoading(state) {
      state.loading = true;
      state.error = null;
    },
    axiosProductSuccess(state, action: PayloadAction<IProductModel[]>) {
      state.loading = false;
      state.products = action.payload;
    },
    axiosProductFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addNewCustomProduct(state, action: PayloadAction<IProductModel>) {
      state.products.push(action.payload);
    },
  },
});

export const { axiosProductLoading, axiosProductSuccess, axiosProductFailure, addNewCustomProduct } =
  productSlice.actions;
