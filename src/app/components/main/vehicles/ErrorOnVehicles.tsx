import { Loader } from "../../Query/Loader";

type ErrorOnVehiclesProps = {
  onRetry: () => void;
  isFetching: boolean;
};


export const ErrorOnVehicles = ({ onRetry, isFetching }: ErrorOnVehiclesProps) => {

  

  return (
    <div
      className="mt-8 flex h-[50%] flex-col items-center justify-center text-center py-20 lg:py-32 bg-gray-100 rounded-xl border border-gray-300 shadow-2xl">
      <div className="mb-4">
        <span className="material-symbols-outlined text-primary"
          style={{ fontSize: '80px', fontVariationSettings: '"wght" 300',}}>
            error
          </span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Hubo un error al cargar</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-6">No pudimos cargar los vehículos en este
        momento. Por favor, verifica tu conexión a internet e inténtalo de nuevo.</p>
      <button
        className="bg-linear-to-b cursor-pointer from-red-500 to-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:from-red-600 hover:to-red-800 transition-all duration-300 transform hover:scale-105 active:scale-100"
        style={{textShadow: '0 1px 2px rgba(0,0,0,0.5);'}}
        onClick={ onRetry }
        >
        { isFetching ? <Loader size={ 24 }/> : 'Cargar de nuevo' }
      </button>
    </div>
  )
}
