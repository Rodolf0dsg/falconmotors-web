import { getVehicle } from '@/src/api/Vehicles';
import { PriceAndActions } from '../../components/main/vehicles/PriceAndActions';
import { VehicleGallery } from '../../components/main/vehicles/VehicleGallery';
import { Metadata } from 'next';

interface Props{
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const vehicle = await getVehicle( id );

  return {
    title: `FalconMotors | ${vehicle.brand} ${vehicle.vehicleModel} ${vehicle.year}`,
    description: `Descubre el ${vehicle.brand} ${vehicle.vehicleModel} ${vehicle.year}. Precio: ${vehicle.price}. Disponible en FalconMotors con garantía y opciones de financiamiento.`,
    keywords: [
      vehicle.brand,
      vehicle.vehicleModel,
      `${vehicle.year}`,
      "autos nuevos",
      "autos usados",
      "vehículos FalconMotors",
      "compra de autos",
      "financiamiento de autos",
    ],
  };
}



export default async function DetailedVehiclePage({ params }: Props) {

  const { id } = await params;
  const vehicle = await getVehicle( id );
  
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 lg:items-start">

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
          description=  { vehicle.description }
        />
        
      </div>
    </main>
  );
}