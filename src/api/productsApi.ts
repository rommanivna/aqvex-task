import type { Product } from "../types/product";
import productsData from "../../db.json"; 

export async function fetchProducts(): Promise<Product[]> {
  console.log("Дані з JSON:", productsData);
  
  return productsData as Product[];
}