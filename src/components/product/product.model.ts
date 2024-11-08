export interface IProductModel {
  category: string,
  title: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    count: number,
    rate: number
  },
}
