export default function InfoSections() {
  return (
    <div className="space-y-16 my-24">
      {/* Секція ПРО НАС */}
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-blue-950 tracking-tighter uppercase">
            Про <span className="text-blue-600">AQVEX</span> 🧪
          </h2>
          <p className="text-gray-500 leading-relaxed font-medium">
            Ми не просто продаємо автохімію — ми створюємо культуру правильного
            догляду за автомобілем. Кожен продукт у нашому каталозі пройшов
            тестування в реальних умовах українських доріг.
          </p>
          <p className="text-gray-400 text-sm">
            Наша місія — надати преміальну якість за доступною ціною, щоб кожен
            водій міг відчути гордість за вигляд свого авто.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="px-4 py-2 bg-white border border-gray-100 rounded-xl shadow-sm text-xs font-bold text-blue-900">
              #PremiumQuality
            </div>
            <div className="px-4 py-2 bg-white border border-gray-100 rounded-xl shadow-sm text-xs font-bold text-blue-900">
              #EcoFriendly
            </div>
          </div>
        </div>
        <div className="bg-blue-600 h-64 rounded-[40px] shadow-2xl shadow-blue-100 flex items-center justify-center text-white font-black text-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          AQVEX PHILOSOPHY
        </div>
      </section>

      {/* Секція ДОСТАВКА */}
      <section
        id="shipping"
        className="bg-blue-900 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden"
      >
        {/* Декоративний елемент на фоні */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="max-w-md">
            <h2 className="text-3xl font-black tracking-tighter uppercase mb-6">
              Швидка доставка 📦
            </h2>
            <p className="text-blue-200 font-medium">
              Ми знаємо, як ви чекаєте на свої замовлення. Тому відправка
              відбувається в день оплати або наступного ранку.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <h4 className="font-bold text-lg mb-2">Нова Пошта</h4>
              <p className="text-xs text-blue-200">
                1-2 дні по всій Україні. До відділення або кур'єром.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/10">
              <h4 className="font-bold text-lg mb-2">Укрпошта</h4>
              <p className="text-xs text-blue-200">
                Вигідна доставка для невеликих замовлень (3-5 днів).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
