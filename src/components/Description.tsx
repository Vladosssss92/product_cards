import { FC, useState } from "react";
import { MAX_LENGTH } from "../constants/constants";
import { SButton, SDescription } from "../style/style";
import { IPropsText } from "./product/product.model";

export const Description: FC<IPropsText> = ({ text }) => {
  const [toogleDescription, setToogleDescription] = useState(true)

  const handlerToogleDescription = () => {
    setToogleDescription(!toogleDescription)
  }

  if (text.length < MAX_LENGTH) {
    return (
      <SDescription>
        {text}
      </SDescription>
    )
  }
  
  return (
    <>
      <SDescription>
        {toogleDescription ? text.slice(0, MAX_LENGTH) + '...' : text}
        <SButton onClick={handlerToogleDescription}>
          {toogleDescription ? 'Показать описание' : "Скрыть описание"}
        </SButton>
      </SDescription>
    </>
  )
}
