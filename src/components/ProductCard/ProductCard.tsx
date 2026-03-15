import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  // Розрахунок відсотка знижки
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <div className="group relative bg-white border border-gray-100 rounded-[32px] p-5 flex flex-col h-full transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,112,184,0.12)] hover:scale-[1.02]">
      {/* Лейбл знижки */}
      {discount && (
        <div className="absolute top-5 left-5 z-10 bg-red-500 text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-red-200 animate-pulse">
          -{discount}%
        </div>
      )}

      {/* Контейнер картинки з ефектом  */}
      <div className="relative h-52 w-full mb-6 bg-slate-50 rounded-[24px] overflow-hidden flex items-center justify-center border border-gray-50 transition-all duration-500 group-hover:bg-blue-50/50">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full p-6 transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:scale-110"
        />
      </div>

      {/* Контентна частина */}
      <div className="flex-grow flex flex-col gap-2 px-1">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black text-blue-950">
            {product.price} <span className="text-lg">₴</span>
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-300 line-through decoration-red-400/40">
              {product.oldPrice} ₴
            </span>
          )}
        </div>

        <h3 className="text-gray-800 text-sm font-bold leading-snug line-clamp-2 min-h-[40px]">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-2 py-1 rounded-md uppercase tracking-tighter">
            {product.volume}
          </span>
          <span className="text-[10px] text-gray-300 font-medium italic">
            В наявності
          </span>
        </div>
      </div>

      {/* Кнопка з покращеним ефектом */}
      <button
        onClick={() => addToCart(product)}
        className="w-full mt-6 bg-blue-600 text-white py-4 rounded-2xl font-bold text-sm transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 active:scale-95 flex items-center justify-center gap-2"
      >
        <span>Додати в кошик</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
