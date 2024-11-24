import { memo, FC } from 'react';
import { SButtonBuy, SContainer, SImage, SList, SPrice, STitle, SUl } from '../style/style';
import { useProduct } from '../customHooks/Products.hook';
import { Description } from './Description';

const ProductCard: FC = () => {
  const { products, loading, error } = useProduct()

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
              <Description text={product.description} product={product} />
              <SButtonBuy>Купить</SButtonBuy>
            </SList>
          )
        }))}
      </SUl>
    </SContainer>
  )
};
export default memo(ProductCard);
