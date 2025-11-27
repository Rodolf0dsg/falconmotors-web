

import { getVehicle } from '@/src/api/Vehicles';
import { PriceAndActions } from '../../components/main/vehicles/PriceAndActions';
import { VehicleGallery } from '../../components/main/vehicles/VehicleGallery';

interface Props{
  params: { id: string };
}

export default async function DetailedVehiclePage({ params }: Props) {

  const { id } = await params;
  const vehicle = await getVehicle( id );
  
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

        <VehicleGallery 
          colors={ vehicle.colors }
        />
        
        <PriceAndActions
          brand=        { vehicle.brand }
          model=        { vehicle.vehicleModel }
          year=         { vehicle.year }
          mileage=      { vehicle.mileage }
          price=        { vehicle.price }
          transmission= { vehicle.transmission }
          used=         { vehicle.used }
          horsePower=   { vehicle.horsePower }
          type=         { vehicle.type }
          motor=        { vehicle.motor }
          typeOfOil=    { vehicle.typeOfOil }
          features=     { vehicle.features }
        />
        
      </div>
    </main>
  );
}