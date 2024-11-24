import { FC, useState } from "react";
import { MAX_LENGTH } from "../constants/constants";
import { SButton, SWrapDescription } from "../style/style";
import { IPropsTextAndCustom } from "./product/product.model";
import { EditProduct } from "./EditProduct";

export const Description: FC<IPropsTextAndCustom> = ({ text, product }) => {
  const [toogleDescription, setToogleDescription] = useState(true)

  const handlerToogleDescription = () => {
    setToogleDescription(!toogleDescription)
  }

  if (text.length < MAX_LENGTH) {
    return (
      <SWrapDescription>
        <p>
          {text}
        </p>
        <div>
          <EditProduct product={product} />
        </div>
      </SWrapDescription>
    )
  }

  return (
    <SWrapDescription>
      <p>
        {toogleDescription ? text.slice(0, MAX_LENGTH) + '...' : text}
      </p>
      <div>
        <SButton onClick={handlerToogleDescription}>
          {toogleDescription ? 'Развернуть' : "Свернуть"}
        </SButton>
        <EditProduct product={product} />
      </div>
    </SWrapDescription>
  )
}
