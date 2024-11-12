import axios from "axios"
import { IProductModel } from "../components/product/product.model"

export const productListData = async (url: string): Promise<IProductModel[]> => {
  const response = await axios.get(url)
  return response.data
}
