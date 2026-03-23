export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/3fdd6752-5b76-4868-8c21-90d476ab565b/files/f5482e76-a11a-43c8-a9f0-8a9a9b1e55c5.jpg"
          alt="Осада Порт-Артура"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Ключевые сражения войны</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Осада Порт-Артура, Мукденское сражение, Цусимский разгром — 
          каждый эпизод войны вписал новые страницы в историю военного искусства.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-32 shrink-0">1904, Январь</span>
            <span className="text-neutral-700">Нападение японского флота на Порт-Артур</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-32 shrink-0">1905, Февраль</span>
            <span className="text-neutral-700">Битва при Мукдене — крупнейшее сухопутное сражение</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-32 shrink-0">1905, Май</span>
            <span className="text-neutral-700">Цусимское сражение — гибель Второй эскадры</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Читать хронологию
        </button>
      </div>
    </div>
  );
}