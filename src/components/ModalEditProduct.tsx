import { FC } from "react";
import { createPortal } from "react-dom";
import { SButton, SButtonClose, SModal, SOverlay } from "../style/style";
import { IPropsModal } from "./product/product.model";
import { useModalAddProduct } from "../customHooks/Modal.hook";

export const ModalEditProduct: FC<IPropsModal> = ({ isOpen, onClose, product }) => {
  const {
    modalRef,
    inputProductName,
    inputProductDescription,
    inputProductPrice,
    handlerFileChange,
    handleCloseModal,
    requiredInput,
    handlerEditProduct } = useModalAddProduct({ isOpen, onClose });

  if (!isOpen) return null;
  return createPortal(
    <>
      <SOverlay />
      <SModal ref={modalRef} $requiredInput={requiredInput}>
        <SButtonClose onClick={handleCloseModal} />
        <h2>Отредактируйте карточку товара</h2>
        <div>
          <input type="text" defaultValue={product.title} onChange={inputProductName} placeholder="Измените название продукта" required />
          <input type='text' defaultValue={product.description} onChange={inputProductDescription} placeholder="Измените описание продукта" required />
          <input type="number" defaultValue={product.price} onChange={inputProductPrice} placeholder="Измените цену продукта" required />
          <label>
            <input type="file" onChange={handlerFileChange} />
          </label>
        </div>
        <SButton $modalButton={isOpen} onClick={() => handlerEditProduct(product)}>Сохранить изменения</SButton>
      </SModal>
    </>,
    document.getElementById('modal-edit-product')
  )
}
