

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
  { name: 'Rojo', 
    code: 'rgb(217, 4, 41)',  
    images: [
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Rojo+Corolla+1', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Rojo+Corolla+2', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Rojo+Corolla+3', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Rojo+Corolla+4', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Rojo+Corolla+5', alt: 'Corolla' },
    ]
  },
  { 
    name: 'Negro', 
    code: 'rgb(33, 37, 41)',
    images: [
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Negro+Corolla+1', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Negro+Corolla+2', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Negro+Corolla+3', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Negro+Corolla+4', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Negro+Corolla+5', alt: 'Corolla' },
    ]
  },
  { 
    name: 'Plata', 
    code: 'rgb(206, 212, 218)',
    images: [
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Plata+Corolla+1', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Plata+Corolla+2', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Plata+Corolla+3', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Plata+Corolla+4', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Plata+Corolla+5', alt: 'Corolla' },
    ]
  },
  { 
    name: 'Blanco', 
    code: 'rgb(255, 255, 255)',
        images: [
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Corolla+1', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Corolla+2', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Corolla+3', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Corolla+4', alt: 'Corolla' },
      { url: 'https://placehold.co/800x600/000000/FFFFFF?text=Blanco+Corolla+5', alt: 'Corolla' },
    ]
   },
];

export default async function DetailedVehiclePage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

        <VehicleGallery 
          colors={ colorOptions }
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