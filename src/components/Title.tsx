import { FC, useState } from "react";
import { STitle } from "../style/style";
import { IPropsTextAndCustom } from "./product/product.model";

export const Title: FC<IPropsTextAndCustom> = ({ product }) => {
  const [toogleDescription, setToogleDescription] = useState(true)

  const handlerToogleDescription = () => {
    setToogleDescription(!toogleDescription)
  }

  if (product.title.length <= 20) {
    return (
      <STitle>
        {product.title}
      </STitle>
    )
  }

  return (
    <STitle>
      {toogleDescription ? product.title.slice(0, 20) : product.title}
      <span onClick={handlerToogleDescription}>...</span>
    </STitle>

  )
}