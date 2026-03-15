import ProductGrid from "../features/products/ProductGrid";
import { products } from "../data/products";

const AnyProductGrid = ProductGrid as any;

export default function CatalogPage() {
  return (
    <main className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Каталог</h1>

      <AnyProductGrid products={products} />
    </main>
  );
}
