export const NoVehiclesFound = () => {
  return (
    <div
      className="flex flex-col h-[50%] items-center justify-center text-center py-20 lg:py-32 bg-gray-100 rounded-xl border border-gray-300">
      <div className="mb-4">
        <span className="material-symbols-outlined text-gray-400"
          style={{ fontSize: '80px', fontVariationSettings: '"wght" 300',}}>
            search_off
          </span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron automóviles</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-6">Parece que no hay vehículos que coincidan
        con tus criterios de búsqueda. Intenta ajustar los filtros o ampliar tu búsqueda.</p>
      <button
        className="bg-linear-to-b from-red-500 to-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 active:scale-100"
        style={{textShadow: '0 1px 2px rgba(0,0,0,0.5);'}}>
        Reintentar Búsqueda
      </button>
    </div>
  )
}
