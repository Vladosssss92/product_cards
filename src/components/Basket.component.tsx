import { useDispatch, useSelector } from "react-redux";
import { SContainer, SUl, SList, SImage, SPrice, SButtonBuy, SWrapDescription, SImageWrap, SWrapRaiting, SButtonClose, SSummProduct } from "../style/style"
import { AppDispatch, RootState } from "../store/store";
import { Link } from "react-router-dom";
import { removeAllProductFromBasket } from "../store/product/basket.slice";
import { IProductModel } from "./product/product.model";
import { ButtonCountBuyProduct } from "./ButtonCountBuyProduct.component";
import { Title } from "./Title";

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

  const summProduct: number = +productInBasket.reduce((summ, product) => summ += product.price, 0).toFixed(2);

  const productWord = (countProduct: number) => {
    const remainderOf10 = countProduct % 10;
    const remainderOf100 = countProduct % 100;
    if (remainderOf100 >= 11 && remainderOf100 <= 19) return `${countProduct} товаров`;
    if (remainderOf10 === 1) return `${countProduct} товар`
    if (remainderOf10 >=2 && remainderOf10 <=4) return `${countProduct} товара`
    return `${countProduct} товаров`;
  }

  const correctWord = productWord(productInBasket.length)

  return (
    <>
      <h1>Корзина</h1>
      <SContainer>
        <Link to='/product_cards'>
          <SButtonClose />
        </Link>
        <SSummProduct>
          В корзине {productInBasket.length ? `${correctWord}, общей суммой ${summProduct}$` : 'пусто'}
        </SSummProduct>
        <SUl>
          {uniqProduct.map((product => {
            return (
              <SList key={product.sort}>
                <SWrapDescription>
                  <SImageWrap>
                    <SImage src={product.image} alt={product.title} />
                  </SImageWrap>
                  <Title product={product} />
                  <SWrapRaiting>
                    <p>Рейтинг {product.rating.rate}</p>
                    <SPrice>
                      {product.price}$
                    </SPrice>
                  </SWrapRaiting>
                </SWrapDescription>
                <ButtonCountBuyProduct product={product} idProductToBasket={product.sort} count={product.quantity} />
                <SButtonBuy onClick={() => dispatch(removeAllProductFromBasket(product))}>Удалить</SButtonBuy>
              </SList>
            )
          }))}
        </SUl>
      </SContainer>
    </>
  )
}
