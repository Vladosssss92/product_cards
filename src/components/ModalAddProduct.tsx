import { FC } from "react";
import { createPortal } from "react-dom";
import { SButton, SModal, SOverlay } from "../style/style";
import { IPropsModal } from "./product/product.model";
import { useModalAddProduct } from "../customHooks/Modal.hook";

export const ModalAddProduct: FC<IPropsModal> = ({ isOpen, onClose }) => {
  const {
    modalRef,
    requiredInput,
    productName,
    inputProductName,
    inputProductDescription,
    productDiscription,
    inputProductPrice,
    productPrice,
    handlerFileChange,
    handlerAddNewProduct,
  } = useModalAddProduct({isOpen, onClose})

  if (!isOpen) return null;
  return createPortal(
    <>
      <SOverlay />
      <SModal ref={modalRef} $requiredInput={requiredInput}>
        <h2>Добавьте новый продукт</h2>
        <div>
          <input type="text" value={productName} onChange={inputProductName} placeholder="Введите название продукта" required />
          <input type='text' value={productDiscription} onChange={inputProductDescription} placeholder="Введите описание продукта" required />
          <input type="number" value={productPrice} onChange={inputProductPrice} placeholder="Введите цену продукта" required />
          <label>
            <input type="file" onChange={handlerFileChange} />
          </label>
        </div>
        <SButton $modalButton={isOpen} onClick={handlerAddNewProduct}>Сохранить изменения</SButton>
      </SModal>
    </>,
    document.getElementById('modal-add-product')
  )
}
