import React, { memo, FC } from 'react';
import { SDescription, SImage, SList, SPrice, STitle, SUl, SWrap } from '../style/style';
import { useProduct } from '../customHooks/Products.hook';
import { PRODUCTS_URL } from '../constants/api.constants';



const ProductCard: FC = () => {
  const { products, loading, error } = useProduct(PRODUCTS_URL)

  if (loading) {
    return (
      <div>
        Loading product card...
      </div>
    )
  }
  if (error) {
    return (
      <div>
        Something went wrong! Error: {error.message}
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
