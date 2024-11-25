import { FC, useState } from "react"
import { IPropsEditProduct } from "./product/product.model"
import { SButton } from "../style/style"
import { ModalEditProduct } from "./ModalEditProduct"

export const EditProduct: FC<IPropsEditProduct> = ({product}) => {
  const [isOpenModalEditProduct, setOpenModalEditProduct] = useState(false)
  
  const handlerEditProduct = () => {
    setOpenModalEditProduct(true);
  }

  if(product.custom){
    return (
    <>
      <SButton onClick={handlerEditProduct}>Редактировать</SButton>
      <ModalEditProduct isOpen={isOpenModalEditProduct} onClose={setOpenModalEditProduct} product={product}/>
    </>
    )
  }
  return null
}
