'use client'
import { useQuery } from "@tanstack/react-query";
import { CustomPagination } from "./CustomPagination"
import { VehicleCard } from "./VehicleCard";
import { getVehicles } from "@/src/api/Vehicles";
import { Loader } from "../../Query/Loader";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export const VehicleList = () => {

  const searchParams = useSearchParams();

  const offset = Number(searchParams.get('page')) ?? undefined;
  const brand =  searchParams.get('brand') ?? undefined;
  const type =   searchParams.get('type') ?? undefined;
  const search = searchParams.get('search') ?? undefined;


  const { data, isLoading } = useQuery({
    queryKey: ['vehicles', offset, brand, type, search],
    queryFn: () => getVehicles({
      offset, 
      brand, 
      type,
      search
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
    <>
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

      <Suspense fallback={<Loader size={ 16 }/>}>
        <CustomPagination pages={ data?.pages }/>
      </Suspense>
    </>
  )
}
