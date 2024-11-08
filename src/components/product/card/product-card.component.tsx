import React, { memo, FC, useEffect, useState } from 'react';
import { productListData } from '../../../data/product.data';
import { IProductModel } from '../product.model';
import { SDescription, SImage, SList, SPrice, STitle, SUl, SWrap } from '../../../style/style';


const ProductCard: FC = () => {
  const [data, setData] = useState<IProductModel[]>();
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await productListData()
        setData(datas)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(error)
      }
    }
    fetchData()
  }, [])

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
        Ошибка загрузки: {error.message}
      </div>
    )
  }
  return (
    <SUl>
      {data.map((product => {
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
