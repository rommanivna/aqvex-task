import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCartStore } from "../store/cartStore";
import CatalogPage from "../pages/CatalogPage";

const queryClient = new QueryClient();

function App() {
  const items = useCartStore((state) => state.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-slate-50">
        {/* Header з кошиком */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-black text-blue-900 tracking-tighter">
              AQVEX <span className="text-blue-500">SHOP</span>
            </h1>

            <div className="flex items-center gap-4 bg-blue-900 text-white px-5 py-2.5 rounded-2xl shadow-xl shadow-blue-200">
              <span className="text-sm font-medium">Кошик</span>
              <div className="w-px h-4 bg-blue-700"></div>
              <span className="font-bold">{totalCount} шт.</span>
              <span className="font-black text-blue-300">{totalPrice} ₴</span>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto py-8">
          <CatalogPage />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
