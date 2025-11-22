
export const Filters = () => {
  return (
    <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 sticky top-24 self-start">
      <div className="p-6 rounded-xl bg-gray-100 dark:bg-[#1c1c1c] border border-gray-200 dark:border-card-border-dark">
        <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Filtros</h3>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="brand">Marca</label>
            <select
              className="w-full rounded-lg bg-gray-200 dark:bg-card-border-dark border-transparent dark:text-white focus:ring-2 focus:ring-primary focus:border-primary"
              id="brand">
              <option>Todas</option>
              <option>Toyota</option>
              <option>Ford</option>
              <option>Honda</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="model">Modelo</label>
            <input
              className="w-full rounded-lg bg-gray-200 dark:bg-card-border-dark border-transparent placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:ring-primary focus:border-primary"
              id="model" placeholder="Ej: Corolla" type="text" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2" htmlFor="price">Rango de
              Precio</label>
            <input
              className="w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
              id="price" type="range" />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>$5,000</span>
              <span>$100,000+</span>
            </div>
          </div>
          <div>
            <p className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Estado</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                <input className="h-4 w-4 text-primary bg-gray-200 dark:bg-gray-700 border-transparent focus:ring-primary"
                  name="condition" type="radio" />
                Nuevo
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
                <input className="h-4 w-4 text-primary bg-gray-200 dark:bg-gray-700 border-transparent focus:ring-primary"
                  name="condition" type="radio" />
                Usado
              </label>
            </div>
          </div>
          <button
            className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
            type="submit">Limpiar Filtros</button>
        </form>
      </div>
    </aside>
  )
}
