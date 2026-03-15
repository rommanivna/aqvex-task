import { useCartStore } from "../../store/cartStore";

export default function CartDropdown() {
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="absolute top-full right-0 mt-3 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl p-4 z-50">
      <h3 className="text-lg font-bold text-blue-900 mb-3 px-1 text-left">
        Твій кошик
      </h3>

      {items.length === 0 ? (
        <p className="text-gray-400 text-sm py-4 text-center">
          Кошик порожній 🕸️
        </p>
      ) : (
        <>
          <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl
                transition-all duration-300 ease-out
                hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] hover:bg-white"
              >
                <div className="h-12 w-12 bg-white rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-contain h-full"
                  />
                </div>

                <div className="flex-grow text-left">
                  <h4 className="text-[10px] font-bold text-gray-800 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-blue-600 font-bold">
                    {item.price} ₴ × {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors p-1 text-sm"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center px-1">
            <span className="text-xs text-gray-500 font-medium">Разом:</span>
            <span className="text-lg font-black text-blue-900">
              {totalPrice} ₴
            </span>
          </div>

          <button className="w-full mt-3 bg-blue-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 hover:shadow-lg transition-all duration-200">
            Оформити
          </button>
        </>
      )}
    </div>
  );
}
