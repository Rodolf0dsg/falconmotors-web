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

  const currentImageUrl = selectedThumbnails[selectedThumbnailIndex]?.url ?? "";
  
  return (
    <div className="lg:col-span-3 lg:sticky lg:top-24">
      <div className="flex flex-col md:flex-row gap-4 items-start">

        <div className="relative w-full md:w-auto order-2 md:order-1">
          <ThumbnailGallery 
            images={selectedThumbnails}
            selectedImageIndex={selectedThumbnailIndex}
            onThumbnailSelect={handleThumbnailSelect}
          />
          <div className="absolute bottom-0 left-0 right-4 h-16 bg-linear-to-t from-background-light to-transparent pointer-events-none hidden md:block"/>
        </div>

        <div className="flex-1 order-1 md:order-2 lg:sticky lg:top-24 w-full">
          <div
            className="aspect-4/3 w-full bg-center bg-no-repeat bg-contain flex flex-col justify-end overflow-hidden rounded-xl cursor-pointer"
            data-alt={`${selectedColor}`}
            style={{ backgroundImage: `url("${ currentImageUrl }")`}}
            >
            {/* <div className="p-4 bg-linear-to-t from-black/50 to-transparent">
              <span
                className="inline-flex items-center gap-2 text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                <span className="material-symbols-outlined text-base!">zoom_in</span>
                Haz clic para ampliar
              </span>
            </div> */}
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