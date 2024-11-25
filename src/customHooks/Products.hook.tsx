import { useEffect, } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { axiosProducts } from "../store/product/productThink";
import { PRODUCTS_URL } from "../constants/constants";

export const useProduct = () => {
  const { products, loading, error } = useSelector((state: RootState) => state.productList);
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    // if (!products && !loading) 
    dispatch(axiosProducts(PRODUCTS_URL))

  }, [dispatch])

  return {
    products, loading, error, dispatch
  }
}
