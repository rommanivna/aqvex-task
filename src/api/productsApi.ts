import type { Product } from "../types/product";
// Спробуй вказати шлях відносно файлу productsApi.ts
// Якщо products.json в корені проекту, то шлях буде таким:
import productsData from "../../db.json"; 

export async function fetchProducts(): Promise<Product[]> {
  // Виведемо в консоль, щоб побачити чи завантажились дані
  console.log("Дані з JSON:", productsData);
  
  return productsData as Product[];
}