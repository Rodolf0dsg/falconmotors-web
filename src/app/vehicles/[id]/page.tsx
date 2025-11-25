

import { PriceAndActions } from '../../components/main/vehicles/PriceAndActions';
import { VehicleGallery } from '../../components/main/vehicles/VehicleGallery';

interface Props{
  params: { id: string | number };
}

const mockData = {
  brand:        'Toyota',
  model:        'Corolla XSE',
  year:         '2023',
  mileage:      15000,
  price:        25000,
  transmission: 'Automática',
  used:         true,
  horsePower:   169,
  type:         'Sedán Deportivo',
  motor:        '2.0L 4-Cyl',
  typeOfOil:    'Gasolina',
}

const colorOptions = [
  { name: 'Rojo', code: 'rgb(217, 4, 41)' },
  { name: 'Negro', code: 'rgb(33, 37, 41)' },
  { name: 'Plata', code: 'rgb(206, 212, 218)' },
  { name: 'Blanco', code: 'rgb(255, 255, 255)' },
];

const vehicleImages: Record<string, string> = {
  'Rojo': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmA-iG6l3bVfOhKoMW1fEweW2h8LtOJBFW0dazXgaa9M-uy3TLz0jWKNTGHIIOeIzFr6-VhVfjOc4Qq6tq2TaZb5LZF_aQB_kLjLF6rEpudFzw6X7m1kLe6pyw8bS1lOMBLI6GgmIY4YK3oP5xXMNbEqJmIPHAwqjdus55XQ4K-3JEvSolxpjJLdVAut1BWXIHrO-c5a_p1w86KDEqFsmTNsd6114DbtQ3--d3M2gSf5DS1a6pwU3BkYrXPyT1Ut-vk9eQH2UxcUd3',
  'Negro': 'https://placehold.co/800x600/000000/FFFFFF?text=Negro+Corolla',
  'Plata': 'https://placehold.co/800x600/CED4DA/000000?text=Plata+Corolla',
  'Blanco': 'https://placehold.co/800x600/FFFFFF/000000?text=Blanco+Corolla',
};


const staticThumbnails = [
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDTx5uKgwlldhtgZHuFXjBruhAZbtBhYSOdvPFZnpJIx5QYaswq6XXwH4rd51yanJBgx71cZ8vfxiGhV1QqIXnTK9O6EINCnk8c8t5t36Ff0XaMN-Cl-9VZdrKQ9t5rHbvtmmwj7MT-Z1LNgMgA1FSCrn8VvdytPHkacW_yuumCu2q1JEAAsEsDYbqfnPzdkv5eswUFaKe_GI5K_FmnZOZg3p3YrZrlkBb49ryq_ixEJhtQok5Y9Ok_DHY8Mb8GCXWW3U_Im-qq3rL", alt: "Vista lateral del Toyota Corolla" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGF0SlGriGaVvN4i2SBAe5UbpM3U0yAoVE5QGUu9GUnhbtwgQUBNlGdDQLWYS48gyZnEhELmIh35aMPV8A70NjI9fivdecWdQdvd1ku_aDOzySZnmlHx9mA23BllNcWhv0zupPQ0Yfk3Pz-t8OBYiZLKFM77Plmdkb2WhpENPzdE_-aCzqHvkqYQOxeChg8_oBEh1_UA-vuhIaBaXtrWX1ai3ISpl5wIoNIg2rxQu0chg2E0VNDs7F-r7Q9draQUxTlDzb2jQYH6BM", alt: "Vista interior del vehículo" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAafjSu4rRfUpcEIXZPjFQZ8V_C0XpYiuOPPXUbUY9O8vx179E7Trv2s8KD9c7p4hKhiWmlvXCJAjA-1G8Oll-3XtpBH2cChWr32AgppFf4TnynU-Ta6KySs1kTKEtlon2VhsIJDmGcTiqR4gRmAo_MM93hn3ZJ7GIk9I-HyRrHRCLzGlI05mtfXyU1hvxHECXSEvkExl10mqQv4zfMkmTjLk6pnzkXehCma6r0AEXpVlThlUYwSW7dblsS5ZJS6eXcyAl4kYIcRkb-", alt: "Detalle de la llanta y el rin" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFeUG_3_Nvnmb-ZTK3K_olTZzCGl536JjZ4FxZEqSWqszkcYoQWj9UOOU1EJ6N0u4CEtKL04AZjOq-5NRMG56EygrS7_QvC3794R2lSDmoC_DV_LdeQlKys_enORGMWot11EiGgb7buPAjicpyAlzfsvvsCwERkc4zcDbRBTMCnwcdXoQhxQB6bfRxNJ_D6M3aSVW5XrygeMN0UEg-KmmduecTKr44A7pc3by5gJgTS501RiK1pJSvuTLxux_GUlQiYP47NWdGqFzr", alt: "Vista trasera del vehículo" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaio1ckyIdMotr6MjeIF2NkRddCFkLHlaCTqGB2G-uHczgW54kUR1f6Pvwgew4x94eeNDYGuq100IwFSoHwd0sApM4NTq10bogXZFg0OqOJe-uv08OSYbCiKD_-V6zutlOOocnrBVi5OwLe9YS3dx_t-JCLJcLyjS67vaE1QVd_x6WNqiHnhnx9JJAJynW3mN7J7R3byTy-kAA6hIoQJykzCjbQ_utX6WNqiHnhnx9JJAJynW3mN7J7R3byTy-kAA6hIoQJykzCjbQ_utX6hdrNG8tBQ3q1chOn4PYFPxNV3IxNf4H2dPaUicaV-_GOfC", alt: "Motor del vehículo" },
];

export default async function DetailedVehiclePage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

        <VehicleGallery 
          colors={ colorOptions }
          imagesByColor={ vehicleImages }
          thumbnails={ staticThumbnails }
        />
        
        <PriceAndActions
          brand=        { mockData.brand }
          model=        { mockData.model }
          year=         { mockData.year }
          mileage=      { mockData.mileage }
          price=        { mockData.price }
          transmission= { mockData.transmission }
          used=         { mockData.used }
          horsePower=   { mockData.horsePower }
          type=         { mockData.type }
          motor=        { mockData.motor }
          typeOfOil=    { mockData.typeOfOil }
        />
        
      </div>
    </main>
  );
}