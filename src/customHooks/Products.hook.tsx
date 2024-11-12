import { useEffect, useState } from "react"
import { IProductModel } from "../components/product/product.model";
import { productListData } from "../data/product.data";
import { AxiosError } from "axios";

export const useProduct = (url: string) => {
  const [products, setProducts] = useState<IProductModel[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await productListData(url)
        setProducts(datas)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setError(e)
      }
    }
    fetchData()
  }, [url])

  return {
    products, loading, error
  }

}