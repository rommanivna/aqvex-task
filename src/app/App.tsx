import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCartStore } from "../store/cartStore";
import CatalogPage from "../pages/CatalogPage";
import CartDropdown from "../components/ProductCard/CartDropdown";
import Footer from "../components/ProductCard/Footer";
import InfoSections from "../components/ProductCard/InfoSections";

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
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
        {/* 1. HEADER */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-black text-blue-900 tracking-tighter cursor-default">
              AQVEX <span className="text-blue-500 uppercase">Shop</span>
            </h1>

            <div className="relative group">
              <div className="flex items-center gap-4 bg-blue-900 text-white px-5 py-2.5 rounded-2xl shadow-xl shadow-blue-200 cursor-pointer active:scale-95 transition-transform">
                <span className="text-sm font-bold uppercase tracking-tight">
                  Кошик
                </span>
                <div className="w-px h-4 bg-blue-700"></div>
                <span className="font-bold">{totalCount} шт.</span>
                <span className="font-black text-blue-300">{totalPrice} ₴</span>
              </div>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <CartDropdown />
              </div>
            </div>
          </div>
        </header>

        {/* 2. HERO SECTION */}
        <section className="max-w-6xl mx-auto pt-20 pb-10 px-6 text-center">
          <span className="bg-blue-50 text-blue-600 text-[11px] font-black uppercase tracking-[3px] px-4 py-2 rounded-full">
            Premium Car Care
          </span>
          <h2 className="mt-8 text-5xl md:text-7xl font-black text-blue-950 leading-[1.05] tracking-tighter">
            Твоє авто заслуговує <br />
            <span className="text-blue-600 italic">на досконалий блиск.</span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            AQVEX — це не просто хімія. Це німецька якість та професійний підхід
            до кожної деталі твого автомобіля. Чистота ще ніколи не була такою
            простою.
          </p>
        </section>

        {/* 3. ОСНОВНИЙ КОНТЕНТ */}
        <main className="max-w-6xl mx-auto py-10 px-4 flex-grow w-full">
          {/*  */}
          <CatalogPage />
          <InfoSections />
        </main>

        {/* 4. FOOTER */}
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
