export default function Footer() {
  return (
    <footer className="mt-32 py-12 border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-black text-blue-900 tracking-tighter">
            AQVEX <span className="text-blue-500 italic">SHOP</span>
          </h2>
          <p className="text-gray-400 text-xs mt-2 font-medium">
            Ваш надійний партнер у чистоті
          </p>
        </div>

        <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest text-gray-400">
          <a href="#" className="hover:text-blue-600 transition-colors">
            Каталог
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            Про нас
          </a>
          <a href="#shipping" className="hover:text-blue-600 transition-colors">
            Доставка
          </a>
        </div>

        <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">
          © 2026 Crafted with ❤️ for AQVEX
        </p>
      </div>
    </footer>
  );
}
