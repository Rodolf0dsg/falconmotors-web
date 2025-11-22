
export const TopSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-cover bg-center" data-alt="Red sports car on a road"
        style={{
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYejjbd_6GHYyL0Z5EX-E--lPTfu1mdz-BNovNgsiIDZ4KAjj_CaCCJcowcQ5pkfILsmL55THGQZZJPzkMHVyaAtlpYdWuCv_1Q_jnqVvB04mPF99nrzZVMGw0mARxb-nIky0zVvRMdQr9RlVusCyyW3MSyrxSf1e5mbGNRyzwwNpGdi1YMG-Yxx8_1DhDt-mgRUP4-Zsqy_xPuK9-1UszphEJ81XGJpfbBpOx54q9-5NQLB8ui3TzoIkEwnn3anhenbwhKTyQ9tEN")`
        }}>
      </div>
      <div className="relative z-10 p-6 flex flex-col gap-6">
        <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">Encuentra el auto de
          tus sueños</h1>
        <h2 className="text-white text-base md:text-lg font-normal leading-normal">Explora nuestro inventario de vehículos
          nuevos y usados de alta calidad.</h2>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors">
            <span className="truncate">Ver Inventario</span>
          </button>
          <button
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-card-border-dark text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-80 transition-opacity">
            <span className="truncate">Pedir una cita</span>
          </button>
        </div>
      </div>
    </section>
  )
}