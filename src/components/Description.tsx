import { FC, useState } from "react";
import { MAX_LENGTH } from "../constants/constants";
import { SButton, SWrapDescription } from "../style/style";
import { IProductModel, IPropsTextAndCustom } from "./product/product.model";
import { EditProduct } from "./EditProduct";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addProductToBasket, removeProductFromBasket } from "../store/product/basket.slice";
import { v4 as uuidv4 } from 'uuid';

export const Description: FC<IPropsTextAndCustom> = ({ product, idProductToBasket, count }) => {
  const [toogleDescription, setToogleDescription] = useState(true)
  const dispatch: AppDispatch = useDispatch()
  

  const handlerToogleDescription = () => {
    setToogleDescription(!toogleDescription)
  }

  const handlerAddProductToBasked = (product: IProductModel) => {
    const newIdProduct = {
      ...product,
      idFromBasket: uuidv4()
    }
    dispatch(addProductToBasket(newIdProduct))
  }

  

  const basketButton = <>
    {idProductToBasket ?
      <>
        <SButton onClick={() => dispatch(removeProductFromBasket(product))} $counter={idProductToBasket}>-</SButton>
        <span>
          {count}
        </span><SButton onClick={() => handlerAddProductToBasked(product)} $counter={idProductToBasket}>+</SButton>
      </> :
      <EditProduct product={product} />}
  </>


  if (product.description.length < MAX_LENGTH) {
    return (
      <SWrapDescription>
        <p>
          {product.description}
        </p>
        <div>
        {basketButton}
        </div>
      </SWrapDescription>
    )
  }

  return (
    <SWrapDescription>
      <p>
        {toogleDescription ? product.description.slice(0, MAX_LENGTH) + '...' : product.description}
      </p>
      <div>
        <SButton onClick={handlerToogleDescription}>
          {toogleDescription ? 'Развернуть' : "Свернуть"}
        </SButton>
        {basketButton}
      </div>
    </SWrapDescription>
  )
}
