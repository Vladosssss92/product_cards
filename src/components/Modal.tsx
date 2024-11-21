import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SButton, SModal, SButtonCloseModal, SOverlay } from "../style/style";
import { IPropsModal } from "./product/product.model";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { addNewCustomProduct } from "../store/product/product.slice";
import noPhoto from '../style/icons/no-photos-svgrepo-com.svg'


export const Modal: FC<IPropsModal> = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState('')
  const [productDiscription, setproductDiscription] = useState('')
  const [productPrice, setproductPrice] = useState('')
  const [requiredInput, setRequired] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null);
  const { products } = useSelector((state: RootState) => state.productList);
  const dispatch: AppDispatch = useDispatch();

  const inputProductName = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  }

  const inputProductDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setproductDiscription(e.target.value);
  }

  const inputProductPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setproductPrice(e.target.value);
  }

  const handlerAddNewProduct = () => {
    if (productName && productDiscription && productPrice) {
      const numberLastId = products[products.length - 1].id
      const newProduct = {
        category: 'any',
        title: productName,
        description: productDiscription,
        id: numberLastId + 1,
        image: noPhoto,
        price: +productPrice,
        custom: true,
        rating: {
          count: 0,
          rate: 0,
        },
      }
      dispatch(addNewCustomProduct(newProduct));
      onClose(false);
      setProductName('');
      setproductDiscription('');
      setproductPrice('')
      setRequired(false);
    } else {
      setRequired(true)
    }
  }

  const handleCloseModal = () => {
    setProductName('');
    setproductDiscription('');
    setproductPrice('')
    onClose(false);
    setRequired(false);
  }


  useEffect(() => {
    const handleClickOutModal = (event: MouseEvent) => {
      if (!modalRef.current.contains(event.target as Node)) {
        onClose(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mouseup', handleClickOutModal);
    }
    return () => document.removeEventListener('mouseup', handleClickOutModal)
  }, [isOpen, onClose])

  if (!isOpen) return null;
  return createPortal(
    <>
      <SOverlay />
      <SModal ref={modalRef} $requiredInput={requiredInput}>
        <SButtonCloseModal onClick={handleCloseModal} />
        <div>
          <input type="text" value={productName} onChange={inputProductName} placeholder="Введите название продукта" required />
          <input type='text' value={productDiscription} onChange={inputProductDescription} placeholder="Введите описание продукта" required />
          <input type="number" value={productPrice} onChange={inputProductPrice} placeholder="Введите цену продукта" required />
        </div>
        <SButton $modalButton={isOpen} onClick={handlerAddNewProduct}>Сохранить изменения</SButton>
      </SModal>
    </>,
    document.getElementById('modal')
  )
}