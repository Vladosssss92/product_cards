import React, { memo, FC, useEffect, useState } from 'react';
import { productListData } from '../../../data/product.data';


const ProductCard: FC = () => {
  const [data, setData] = useState([]);
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
  console.log(data);

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
    <ul>
      {data.map((product => {
        return (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <p>
              {product.title}
            </p>
            <p>
              {product.description}
            </p>
            <p>
              {product.price} $
            </p>
          </li>
        )
      }))}
    </ul>
  )
};
export default memo(ProductCard);

