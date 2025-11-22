import { vehicles } from "@/src/Types/VehicleProps"
import { CustomPagination } from "./CustomPagination"
import { VehicleCard } from "./VehicleCard";

export const VehicleList = () => {
  return (
    <div className="w-full lg:w-3/4 xl:w-4/5">
      

      <div className="mb-6">
        <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] mb-4">
          Automóviles Disponibles</p>
        <label className="flex flex-col min-w-40 h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-gray-100 dark:bg-card-border-dark">
            <div className="text-gray-500 dark:text-text-muted-dark flex items-center justify-center pl-4">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-gray-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 dark:placeholder:text-text-muted-dark px-4 pl-2 text-base font-normal leading-normal"
              placeholder="Buscar por marca, modelo o año..." />
          </div>
        </label>
      </div>
      


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          vehicles.map( vehicle => (
            <VehicleCard
              id=          { vehicle. id }
              key=         { vehicle.imageUrl + vehicle.brand }
              brand=       { vehicle.brand }
              model=       { vehicle.model }
              mileage=     { vehicle.mileage }
              imageUrl=    { vehicle.imageUrl }
              price=       { vehicle.price }
              sold=        { vehicle.sold }
              transmission={ vehicle.transmission }
              used=        { vehicle.used }
              year=        { vehicle.year }
            />
          ))
        }
      </div>

      <CustomPagination/>
    </div>
  )
}
