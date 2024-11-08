
export const ProductModel = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const json = await response.json()
  return json
}