'use client'
import { useQuery } from "@tanstack/react-query";
import { CustomPagination } from "./CustomPagination"
import { VehicleCard } from "./VehicleCard";
import { getVehicles } from "@/src/api/Vehicles";
import { Loader } from "../../Query/Loader";
import { useSearchParams } from "next/navigation";

export const VehicleList = () => {

  const searchParams = useSearchParams();

  const offset = Number(searchParams.get('page')) ?? undefined;
  const brand = searchParams.get('brand') ?? undefined;
  const type = searchParams.get('type') ?? undefined;

  const { data, isLoading } = useQuery({
    queryKey: ['vehicles', offset, brand, type],
    queryFn: () => getVehicles({
      offset, 
      brand, 
      type
    }),
    staleTime: 2629800000,
  });

  if( isLoading ) {
    return (
      <div className="w-full lg:w-3/4 xl:w-4/5 text-gray-100 dark:text-red-600 flex justify-center items-start">
        <Loader size={ 64 }/>
      </div>
    )
  }

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
          data?.data.map( vehicle => (
            <VehicleCard
              id=          { vehicle._id }
              key=         { vehicle._id }
              brand=       { vehicle.brand }
              model=       { vehicle.vehicleModel }
              mileage=     { vehicle.mileage }
              imageUrl=    { vehicle.colors[0].images[0].url }
              price=       { vehicle.price }
              sold=        { vehicle.sold }
              transmission={ vehicle.transmission }
              used=        { vehicle.used }
              year=        { vehicle.year }
            />
          ))
        }
      </div>

      <CustomPagination pages={ data?.pages }/>
    </div>
  )
}
