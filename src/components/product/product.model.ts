export interface IProductModel {
  category: string;
  title: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}

export interface IPropsText {
  text: string,
}

export interface IProductStateModel {
  products: IProductModel[],
  loading: boolean,
  error: string | null
}
