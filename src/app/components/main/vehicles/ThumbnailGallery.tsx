'use client'

interface Props {
  url: string;
  alt: string;
  isSelected: boolean;
  onSelect: ( index: number ) => void;
  index: number;
}

const VehicleThumbnail = ({ url, alt, isSelected, onSelect, index }: Props) => {
  return (
    <img
      onClick={() => onSelect( index )}
      className={`
        w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg cursor-pointer transition-all flex-shrink-0
        ${isSelected 
          ? 'border-2 border-primary ring-2 ring-primary/50' 
          : 'border-2 border-transparent hover:border-primary/50' 
        }
      `}
      data-alt={alt}
      src={url}
    />
  );
};

interface ThumbnailGalleryProps {
  images: { url: string; alt: string }[];
  selectedImageIndex: number;
  onThumbnailSelect: (index: number) => void;
}


export const ThumbnailGallery = ({ images, selectedImageIndex, onThumbnailSelect }: ThumbnailGalleryProps) => {

  return (
    <div
      className="flex md:flex-col items-center gap-3 overflow-x-auto md:overflow-x-hidden md:max-h-[500px] md:h-full md:overflow-y-auto pb-2 md:pb-0 md:pr-4 [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {images.map((image, index) => (
        <VehicleThumbnail 
          index={index}
          key={index}
          url={image.url}
          alt={image.alt}
          onSelect={ onThumbnailSelect }
          isSelected={index === selectedImageIndex}
        />
      ))}
    </div>
  );
};
