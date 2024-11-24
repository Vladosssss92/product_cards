import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IProductInBasketStateModel,
  IProductModel,
} from "../../components/product/product.model";

export const initialState: IProductInBasketStateModel = {
  productInBasket: [
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      description:
        "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
  ],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket(state, action: PayloadAction<IProductModel>) {
      state.productInBasket.push(action.payload);
    },
    removeProductFromBasket(state, action: PayloadAction<IProductModel>) {
      const indexDeleteProduct = state.productInBasket.findIndex(
        (element) => element === action.payload
      );
      state.productInBasket = state.productInBasket.filter(
        (_, index) => index !== indexDeleteProduct
      );
    },
  },
});

export const { addProductToBasket, removeProductFromBasket } =
  basketSlice.actions;
