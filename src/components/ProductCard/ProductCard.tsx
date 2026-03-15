import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/product";

export default function ProductCard(product: Product) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
      {/* Картинка */}
      <div className="h-40 w-full mb-3 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full p-2"
        />
      </div>

      {/* Інфо */}
      <div className="flex-grow flex flex-col gap-1">
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-blue-900">
            {product.price} грн
          </span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              {product.oldPrice} грн
            </span>
          )}
        </div>
        <h3 className="text-gray-700 text-sm font-medium leading-tight line-clamp-2 mb-2">
          {product.title}
        </h3>
        <div className="text-[10px] text-gray-400 uppercase tracking-wider">
          {product.volume}
        </div>
      </div>

      {/* Кнопка */}
      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100"
      >
        В кошик
      </button>
    </div>
  );
}
