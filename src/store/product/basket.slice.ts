import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductInBasketStateModel,
  IProductModel,
} from "../../components/product/product.model";

export const initialState: IProductInBasketStateModel = {
  productInBasket: [],
  sort: 1,
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket(state, action: PayloadAction<IProductModel>) {
      state.productInBasket.push(action.payload);
      state.sort = ++state.sort
    },
    removeProductFromBasket(state, action: PayloadAction<IProductModel>) {
      const indexDeleteProduct = state.productInBasket.findIndex(
        (element) => element.id === action.payload.id
      );
      state.productInBasket = state.productInBasket.filter(
        (_, index) => index !== indexDeleteProduct
      );
    },
    removeAllProductFromBasket(state, action: PayloadAction<IProductModel>) {
      state.productInBasket = state.productInBasket.filter(
        (product) => product.id !== action.payload.id  
      );
    },
  },
});

export const { addProductToBasket, removeProductFromBasket, removeAllProductFromBasket } =
  basketSlice.actions;
