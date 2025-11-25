'use client';

interface ColorOption {
  name: string;
  code: string;
}

interface ColorLabelProps{
  name: string;
  code: string;
  isSelected: boolean; 
  onSelect: (name: string) => void;
}


const ColorLabel = ({ name, code, isSelected, onSelect }: ColorLabelProps) => {
  return (
    <button
      onClick={() => onSelect(name)} // Usamos un botón para manejar el evento de clic de React
      className={`
        size-8 rounded-full border-4 transition-all duration-200 shadow-md
        ${
          isSelected 
          ? 'border-primary ring-2 ring-offset-2 ring-primary/50' // ESTILO SELECCIONADO
          : 'border-surface-light dark:border-surface-dark hover:ring-2 hover:ring-offset-2 hover:ring-gray-400' // ESTILO NO SELECCIONADO
        }
      `}
      style={{ backgroundColor: code }}
      title={name}
      aria-pressed={isSelected}
    />
  );
};

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColorName: string; // El estado actual del color seleccionado, viene del padre
  onColorChange: (name: string) => void; // Función para actualizar el estado del color en el padre
}

export const ColorSelector = ({ colors, selectedColorName, onColorChange }: ColorSelectorProps) => {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark mb-2">
        Color: 
        <span className="font-semibold text-text-light dark:text-text-dark ml-1">
          {selectedColorName}
        </span>
      </p>
      <div className="flex flex-wrap gap-3">
        {colors.map(color => (
          <ColorLabel 
            key={color.code}
            name={color.name}
            code={color.code}
            isSelected={selectedColorName === color.name}
            onSelect={onColorChange}
          />
        ))}
      </div>
    </div>
  );
};