import { Dispatch, SetStateAction } from "react";

export interface IProductModel {
  category: string;
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
  custom?: boolean,
  rating: {
    count: number;
    rate: number;
  };
}

export interface IPropsText {
  text: string;
}

export interface IProductStateModel {
  products: IProductModel[];
  loading: boolean;
  error: string | null;
}

export interface IPropsModal {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export interface IButtonVisibilityProps {
  $isVisible: boolean;
}

export interface IButtonSaveNewProducr {
  $modalButton?: boolean,
}

export interface IRequriedInput {
  $requiredInput: boolean,
}