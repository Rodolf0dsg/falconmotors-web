import { Metadata } from "next";
import { Filters } from "../components/main/vehicles/Filters";
import { VehicleList } from "../components/main/vehicles/VehicleList";
import { SearchBar } from "../components/main/vehicles/SearchBar";

export const metadata: Metadata = {
  title: 'Inventario de Autos | Encuentra tu Vehículo | FalconMotors',
  description: 'Explora nuestro amplio y actualizado inventario de vehículos nuevos y usados. Los mejores modelos, precios y opciones de financiamiento en Punto Fijo.',
};

export default function VehiclePage() {

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <Filters />

        <div className="w-full lg:w-3/4 xl:w-4/5">
          <SearchBar />
          <VehicleList />

        </div>

      </div>
    </main>
  );
}