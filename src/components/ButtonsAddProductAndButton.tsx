import { useSelector } from "react-redux";
import { SButtonAddProduct, SButtonBusket, SCountProductInBasket } from "../style/style"
import { RootState } from "../store/store";
import { FC } from "react";
import { IPropsButtonsAddProductAndButton } from "./product/product.model";
import { Link } from "react-router-dom";

export const ButtonsAddProductAndButton: FC<IPropsButtonsAddProductAndButton> = ({ isOpenAddProduct, isVisibility }) => {
  const { loading, error } = useSelector((state: RootState) => state.productList);
  const { productInBasket } = useSelector((state: RootState) => state.baskedProducts);

  let buttonVisibility = true;
  if (!loading && !error) {
    buttonVisibility = false;
  }
  return (
    <>
      <Link to='/basket'>
        <SButtonBusket $isVisibilityLoadind={buttonVisibility} />
        {productInBasket.length > 0 ? <SCountProductInBasket $isVisibilityLoadind={buttonVisibility}>{productInBasket.length}</SCountProductInBasket> : null}
      </Link>
        <SButtonAddProduct onClick={() => isOpenAddProduct(true)} $isVisible={isVisibility} $isVisibilityLoadind={buttonVisibility} />
    </>
  )
}