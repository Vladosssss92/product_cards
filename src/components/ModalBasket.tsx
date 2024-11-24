import { createPortal } from "react-dom";
import { useModalAddProduct } from "../customHooks/Modal.hook";
import { SModal, SOverlay } from "../style/style";



export const ModalBasket = ({ isOpen, onClose }) => {
  const {
    modalRef,
    requiredInput,
  } = useModalAddProduct({isOpen, onClose})

  if (!isOpen) return null;
  return createPortal(
    <>
      <SOverlay />
      <SModal ref={modalRef} $requiredInput={requiredInput}>
      <h2>Корзина</h2>
      </SModal>
    </>,
    document.getElementById('modal-basket')
  )
}