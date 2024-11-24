import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import noPhoto from '../style/icons/no-photos-svgrepo-com.svg'
import { addNewCustomProduct, editCustomProduct } from "../store/product/product.slice"
import { IProductModel } from "../components/product/product.model"

export const useModalAddProduct = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState('')
  const [productDiscription, setproductDiscription] = useState('')
  const [productPrice, setproductPrice] = useState('')
  const [requiredInput, setRequired] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedFileUrl, setSelectedFileUrl] = useState<string | null>(null)
  const { products } = useSelector((state: RootState) => state.productList);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const handleClickOutModal = (event: MouseEvent) => {
      if (!modalRef.current.contains(event.target as Node)) {
        onClose(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutModal);
    }
    return () => document.removeEventListener('mousedown', handleClickOutModal)
  }, [isOpen, onClose])

  const inputProductName = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  }

  const inputProductDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setproductDiscription(e.target.value);
  }

  const inputProductPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setproductPrice(e.target.value);
  }

  const handlerFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files[0]) {
      setSelectedFileUrl(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handlerAddNewProduct = () => {
    if (productName && productDiscription && productPrice) {
      const numberLastId = products[products.length - 1].id
      const newProduct = {
        category: 'any',
        title: productName,
        description: productDiscription,
        id: numberLastId + 1,
        image: selectedFileUrl ? selectedFileUrl : noPhoto,
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
    setSelectedFileUrl(null);
  }

  const handlerEditProduct = (product: IProductModel) => {
    const newProduct = {
      category: 'any',
      title: productName ? productName : product.title,
      description: productDiscription ? productDiscription : product.description,
      id: product.id,
      image: selectedFileUrl ? selectedFileUrl : product.image,
      price: productPrice ? +productPrice : product.price,
      custom: true,
      rating: {
        count: 0,
        rate: 0,
      },
    }
    dispatch(editCustomProduct(newProduct));
    onClose(false);
    setProductName('');
    setproductDiscription('');
    setproductPrice('')
    setRequired(false);
    setSelectedFileUrl(null);
  }



  const handleCloseModal = () => {
    setProductName('');
    setproductDiscription('');
    setproductPrice('')
    onClose(false);
    setRequired(false);
    setSelectedFileUrl(null);
  }

  return {
    modalRef,
    requiredInput,
    handleCloseModal,
    productName,
    inputProductName,
    inputProductDescription,
    productDiscription,
    inputProductPrice,
    productPrice,
    handlerFileChange,
    handlerAddNewProduct,
    handlerEditProduct,
  }
}
