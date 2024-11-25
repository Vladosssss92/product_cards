import { useDispatch, useSelector } from "react-redux";
import { SContainer, SUl, SList, SImage, STitle, SPrice, SButtonCloseModal, SButtonBuy } from "../style/style"
import { Description } from "./Description"
import { AppDispatch, RootState } from "../store/store";
import { Link } from "react-router-dom";
import { removeAllProductFromBasket } from "../store/product/basket.slice";
import { IProductModel } from "./product/product.model";
import { ButtonCountByuProduct } from "./ButtonCountBuyProduct.component";


export const Basket = () => {
  const { productInBasket } = useSelector((state: RootState) => state.baskedProducts);
  const dispatch: AppDispatch = useDispatch()

  const uniqProduct: IProductModel[] = productInBasket.reduce((uniq, product) => {
    const uniqProduct = uniq.find(item => item.id === product.id);
    if (uniqProduct) {
      uniqProduct.quantity += 1
    } else {
      uniq.push({ ...product, quantity: 1 })
    }
    return uniq.sort((a, b) => a.sort - b.sort)
  }, [] as IProductModel[])

  return (
    <SContainer>
      <Link to='/product_cards'>
        <SButtonCloseModal />
      </Link>
      <h2>Корзина</h2>
      <SUl>
        {uniqProduct.map((product => {
          return (
            <SList key={product.idFromBasket}>
              <SImage src={product.image} alt={product.title} />
              <STitle>
                {product.title.length > 20 ? product.title.slice(0, 20) + '...' : product.title}  
              </STitle>
              <div>
                <p>Рейтинг {product.rating.rate}</p>
                <SPrice>
                  {product.price}$
                </SPrice>
              </div>
              <ButtonCountByuProduct product={product} idProductToBasket={product.idFromBasket} count={product.quantity} />
              <SButtonBuy onClick={() => dispatch(removeAllProductFromBasket(product))}>Удалить</SButtonBuy>
            </SList>
          )
        }))}
      </SUl>
    </SContainer>
  )
}
