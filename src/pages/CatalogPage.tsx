import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/productsApi";
import ProductCard from "../components/ProductCard/ProductCard";

export default function CatalogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading)
    return (
      <div className="text-center py-20 font-black text-blue-900/20 text-4xl animate-pulse">
        AQVEX...
      </div>
    );

  // Логіка фільтрації та сортування
  const processedProducts = products
    ?.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="space-y-10">
      {/* Панель керування */}
      <section className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-5 rounded-[32px] shadow-sm border border-gray-50">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Який засіб шукаємо?.."
            className="w-full pl-12 pr-6 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none text-sm font-medium"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <select
          className="w-full md:w-auto px-8 py-4 bg-slate-50 rounded-2xl border-none outline-none text-sm font-bold text-gray-600 cursor-pointer transition-all hover:bg-slate-100"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Сортування</option>
          <option value="low">Найдешевші</option>
          <option value="high">Найдорожчі</option>
        </select>
      </section>

      {/* Сітка товарів */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {processedProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {processedProducts?.length === 0 && (
        <div className="text-center py-32">
          <p className="text-2xl font-bold text-gray-200 italic">
            На жаль, за запитом "{searchTerm}" нічого не знайдено 🕵️‍♀️
          </p>
        </div>
      )}
    </div>
  );
}
