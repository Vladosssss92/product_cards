import { memo, FC } from 'react';
import { SDescription, SImage, SList, SPrice, STitle, SUl, SWrap } from '../style/style';
import { useProduct } from '../customHooks/Products.hook';

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
    <SUl>
      {products.map((product => {
        return (
          <SList key={product.id}>
            <STitle>
              {product.title}
            </STitle>
            <SWrap>
              <SImage src={product.image} alt={product.title} />
              <SDescription>
                {product.description}
              </SDescription>
              <SPrice>
                {product.price}$
              </SPrice>
            </SWrap>
          </SList>
        )
      }))}
    </SUl>
  )
};
export default memo(ProductCard);
