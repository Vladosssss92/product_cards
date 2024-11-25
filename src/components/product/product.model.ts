import { Dispatch, SetStateAction } from "react";

export interface IProductModel {
  category: string;
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
  custom?: boolean;
  idFromBasket?: string;
  quantity?: number;
  sort?: number;
  rating: {
    count: number;
    rate: number;
  };
}

export interface IPropsTextAndCustom {
  product: IProductModel;
  idProductToBasket?: string;
  count?: number
}

export interface IProductStateModel {
  products: IProductModel[];
  loading: boolean;
  error: string | null;
}

export interface IProductInBasketStateModel {
  productInBasket: IProductModel[];
}

export interface IPropsModal {
  isOpen?: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  product?: IProductModel;
}

export interface IPropsButtonsAddProductAndButton {
  isOpenAddProduct: Dispatch<SetStateAction<boolean>>;
  isVisibility: boolean;
}

export interface IPropsEditProduct {
  product: IProductModel;
}

export interface IButtonAddProductVisibilityProps {
  $isVisible: boolean;
  $isVisibilityLoadind: boolean;
}

export interface IButtonBasketVisibilityProps {
  $isVisibilityLoadind: boolean;
}

export interface IButtonProps {
  $modalButton?: boolean;
  $counter?: string
}

export interface IRequriedInput {
  $requiredInput?: boolean;
}

