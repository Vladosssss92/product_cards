import React, { memo, FC } from 'react';
import { ProductModel } from '../product.model';

type ProductCardProps = {};


const ProductCard: FC<ProductCardProps> = () => {
  const productList = ProductModel()
  console.log(productList);
  return <div>ProductCard</div>;
};
export default memo(ProductCard);

