import { FC } from "react";
import { SButton } from "../style/style";
import { IProductModel, IPropsTextAndCustom } from "./product/product.model";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addProductToBasket, removeProductFromBasket } from "../store/product/basket.slice";
import { v4 as uuidv4 } from 'uuid';


export const ButtonCountByuProduct: FC<IPropsTextAndCustom> = ({ product, idProductToBasket, count }) => {
  const dispatch: AppDispatch = useDispatch()

  const handlerAddProductToBasked = (product: IProductModel) => {
    const newIdProduct = {
      ...product,
      idFromBasket: uuidv4()
    }
    dispatch(addProductToBasket(newIdProduct))
  }

  return (
    <>
      <div>
        <SButton onClick={() => dispatch(removeProductFromBasket(product))} $counter={idProductToBasket}>-</SButton>
        <span>
          {count}
        </span><SButton onClick={() => handlerAddProductToBasked(product)} $counter={idProductToBasket}>+</SButton>
      </div>
    </>
  )
}
