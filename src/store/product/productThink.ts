import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  axiosProductFailure,
  axiosProductLoading,
  axiosProductSuccess,
} from "./product.slice";
import axios from "axios";
import { IProductModel } from "../../components/product/product.model";

export const axiosProducts = createAsyncThunk(
  "axiosProducts",
  async (url: string, { dispatch }) => {
    dispatch(axiosProductLoading());
    try {
      const response = await axios.get(url);
      const data: IProductModel[] = response.data;
      dispatch(axiosProductSuccess(data));
    } catch (error) {
      dispatch(axiosProductFailure(error.message));
    }
  }
);
