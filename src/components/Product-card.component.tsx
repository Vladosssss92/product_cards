import { memo, FC } from 'react';
import { SButtonBuy, SContainer, SImage, SImageWrap, SList, SPrice, STitle, SUl, SWrapDescription, SWrapRaiting } from '../style/style';
import { useProduct } from '../customHooks/Products.hook';
import { Description } from './Description';
import { addProductToBasket } from '../store/product/basket.slice';
import { IProductModel } from './product/product.model';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Title } from './Title';

const ProductCard: FC = () => {
  const { products, loading, error, dispatch } = useProduct()
  const { sort } = useSelector((state: RootState) => state.baskedProducts)

  const handlerAddProductToBasked = (product: IProductModel) => {
    const newIdProduct = {
      ...product,
      sort: sort,
    }
    dispatch(addProductToBasket(newIdProduct))
  }

  if (loading) {
    return (
      <div>
        Загрузка списка товаров...
      </div>
    )
  }

  if (error) {
    return (
      <div>
        Ошибка загрузки: {error}
      </div>
    )
  }

  return (
    <SContainer>
      <SUl>
        {products.map((product => {
          return (
            <SList key={product.id}>
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
                <Description product={product} />
              </SWrapDescription>
              <SButtonBuy onClick={() => handlerAddProductToBasked(product)}>Купить</SButtonBuy>
            </SList>
          )
        }))}
      </SUl>
    </SContainer>
  )
};
export default memo(ProductCard);
