import { Metadata } from "next";
import { Filters } from "../components/main/vehicles/Filters";
import { VehicleList } from "../components/main/vehicles/VehicleList";
import { SearchBar } from "../components/main/vehicles/SearchBar";
import { Suspense } from "react";
import { Loader } from "../components/Query/Loader";

export const metadata: Metadata = {
  title: 'Inventario de Autos | Encuentra tu Vehículo | FalconMotors',
  description: 'Explora nuestro amplio y actualizado inventario de vehículos nuevos y usados. Los mejores modelos, precios y opciones de financiamiento en Punto Fijo.',
  keywords: [
    "autos nuevos",
    "autos usados",
    "vehículos FalconMotors",
    "compra de autos",
    "financiamiento de autos",
  ]
};

export default function VehiclePage() {

  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16 bg-gray-100">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <Suspense fallback={
          <Loader size={24} className="text-primary" />
        }>
          <Filters />
        </Suspense>

        <div className="w-full lg:w-3/4 xl:w-4/5">
          <Suspense fallback={
            <Loader size={24} className="text-primary" />
          }>
            <SearchBar />
          </Suspense>

          <Suspense fallback={
            <div
              className="w-full lg:w-3/4 xl:w-4/5 text-red-600 flex flex-1 justify-center items-start">
              <Loader size={64} />
            </div>
          }>
            <VehicleList />
          </Suspense>

        </div>
      </div>
    </main>
  );
}