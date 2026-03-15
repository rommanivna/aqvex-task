import type { Product } from "../../types/product"; // Імпортуємо тип
import { useProducts } from "./useProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCardSkeleton from "../../components/ProductCard/ProductCardSkeleton";

export default function ProductGrid() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Додаємо : Product для аргументу та використовуємо спред {...product} */}
      {data?.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
