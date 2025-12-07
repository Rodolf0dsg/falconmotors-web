import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <div className="flex max-w-2xl flex-col items-center gap-6">
        
        <h1 className="text-black tracking-tighter text-glow text-8xl sm:text-9xl md:text-[160px] font-black leading-none">
          404
        </h1>
        
        <div className="flex flex-col items-center gap-4">
          <p className="text-black text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">¡Oops! Parece que este
            camino no existe</p>
          <p className="text-text-muted-light text-base font-normal leading-normal max-w-md">La página que buscas no pudo ser
            encontrada. Puede haber sido movida o eliminada.</p>
        </div>
        
        <div className="flex w-full max-w-sm flex-col gap-3 pt-4 sm:flex-row">
          <Link
            href={'/'}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform duration-200 hover:scale-105 grow">
            <span className="truncate">Volver a la Página de Inicio</span>
          </Link>
          <Link
            href={'/vehicles'}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-black/20 text-black text-base font-bold leading-normal tracking-[0.015em] transition-colors duration-200 hover:bg-black/60 grow">
            <span className="truncate">Ver Automóviles Disponibles</span>
          </Link>
        </div>
      </div>
    </main>
  );
}