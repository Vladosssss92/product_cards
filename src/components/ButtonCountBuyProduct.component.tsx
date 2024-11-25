import { FC } from "react";
import { SButton, SWrapCounter } from "../style/style";
import { IPropsTextAndCustom } from "./product/product.model";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addProductToBasket, removeProductFromBasket } from "../store/product/basket.slice";

export const ButtonCountBuyProduct: FC<IPropsTextAndCustom> = ({ product, idProductToBasket, count }) => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <>
      <SWrapCounter>
        <SButton onClick={() => dispatch(removeProductFromBasket(product))} $counter={idProductToBasket}>-</SButton>
        <span>
          {count}
        </span>
        <SButton onClick={() => dispatch(addProductToBasket(product))} $counter={idProductToBasket}>+</SButton>
      </SWrapCounter>
    </>
  )
}
