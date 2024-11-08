import { IProductModel } from "../components/product/product.model"

export const productListData = async (): Promise<IProductModel[]> => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
}
