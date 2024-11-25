import { memo, FC } from 'react';
import { SButtonBuy, SContainer, SImage, SList, SPrice, STitle, SUl } from '../style/style';
import { useProduct } from '../customHooks/Products.hook';
import { Description } from './Description';
import { addProductToBasket } from '../store/product/basket.slice';
import { IProductModel } from './product/product.model';
import { v4 as uuidv4 } from 'uuid';

const ProductCard: FC = () => {
  const { products, loading, error, dispatch } = useProduct()
  let sort = 1;
  const handlerAddProductToBasked = (product: IProductModel) => {
    const newIdProduct = {
      ...product,
      idFromBasket: uuidv4(),
      sort: sort + 1
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
              <SImage src={product.image} alt={product.title} />
              <STitle>
                {product.title}
              </STitle>
              <div>
                <p>Рейтинг {product.rating.rate}</p>
                <SPrice>
                  {product.price}$
                </SPrice>
              </div>
              <Description product={product} />
              <SButtonBuy onClick={() => handlerAddProductToBasked(product)}>Купить</SButtonBuy>
            </SList>
          )
        }))}
      </SUl>
    </SContainer>
  )
};
export default memo(ProductCard);
