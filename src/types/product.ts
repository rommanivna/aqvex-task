export interface Product {
  id: string
  title: string
  image: string
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  volume: string
  inStock: boolean
}