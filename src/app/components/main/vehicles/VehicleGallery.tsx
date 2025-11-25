'use client';
import { useState } from "react";
import { ColorSelector } from "./ColorSelector";
import { ThumbnailGallery } from "./ThumbnailGallery";

interface Thumbnail {
  url: string;
  alt: string;
}
interface ColorOption {
  name: string;
  code: string;
  images: Thumbnail[];
}

//TODO: Implementar si es necesario
// interface PricingData {
//   model: string;
//   finalPrice: number;
//   basePrice: number;
//   taxRate: number;
// }

interface VehicleGalleryProps {
  colors: ColorOption[];
  // pricing?: PricingData; //TODO: Implementar si es necesario
}


export const VehicleGallery = ({
  colors,
}: VehicleGalleryProps) => {

  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const selectedColorObj = colors.find(c => c.name === selectedColor);
  const selectedThumbnails = selectedColorObj?.images ?? [];

  const handleColorChange = (colorName: string) => {
    setSelectedColor(colorName);
  };

  const handleThumbnailSelect = (index: number) => {
      setSelectedThumbnailIndex(index);
  };

  // Determina la URL de la imagen principal basada en el color seleccionado.
  // const mainColorImageUrl = imagesByColor[selectedColor] ?? imagesByColor[colors[0].name];
  // const thumbnailOverrideUrl = thumbnails[selectedThumbnailIndex]?.url;
  
  // Si la primera miniatura (índice 0) está seleccionada, se usa la imagen del color principal,
  // si no, se usa la imagen de la miniatura seleccionada.
  // const currentImageUrl = selectedThumbnailIndex === 0 ? mainColorImageUrl : thumbnailOverrideUrl;  
  const currentImageUrl = selectedThumbnails[selectedThumbnailIndex]?.url ?? "";

  return (
    <div className="lg:col-span-3">
      <div className="flex flex-col md:flex-row gap-4">

        <ThumbnailGallery 
          images={selectedThumbnails}
          selectedImageIndex={selectedThumbnailIndex}
          onThumbnailSelect={handleThumbnailSelect}
        />

        <div className="flex-1 order-1 md:order-2">
          <div
            className="aspect-[4/3] w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl cursor-pointer"
            data-alt={`Vista frontal del Toyota Corolla XSE color ${selectedColor}`}
            style={{ backgroundImage: `url("${ currentImageUrl }")`}}
            >
            <div className="p-4 bg-gradient-to-t from-black/50 to-transparent">
              <span
                className="inline-flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                <span className="material-symbols-outlined !text-base">zoom_in</span>
                Haz clic para ampliar
              </span>
            </div>
          </div>
          
            <ColorSelector 
              colors={ colors } 
              selectedColorName={ selectedColor }
              onColorChange={ handleColorChange }
            />
        </div>
      </div>
    </div>
  )
}