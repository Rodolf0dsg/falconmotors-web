'use client';

import { useEffect, useState } from "react";

interface ClockInputProps {
  value?: string;
  onChange: (val: string) => void;
  onClose: () => void;
}


export const ClockInput = ({ value, onChange, onClose }: ClockInputProps) => {

  const [selectedHour, setSelectedHour] = useState<number>(() => {
    if (value) {
      const [h] = value.split(":").map(Number);

      if (h === 0) return 12;
      if (h > 12) return h - 12;
      return h;
    }

    return 10;
  });

  const [ampm, setAmpm] = useState<"AM" | "PM">(() => {
    if (value) {
      const [h] = value.split(":").map(Number);
      return h >= 12 ? "PM" : "AM";
    }

    return "AM";
  });

  useEffect(() => {
    if (value) {
      const [h] = value.split(":").map(Number);
      setAmpm(h >= 12 ? "PM" : "AM");
      setSelectedHour(h > 12 ? h - 12 : h === 0 ? 12 : h);
    }
  }, [value]);


  const allowedHours: Record<"AM" | "PM", number[]> = {
    AM: [8, 9, 10, 11],
    PM: [2, 3, 4],
  };

  const handleAccept = () => {
    let hour24 = selectedHour;
    if (ampm === "PM" && hour24 < 12) hour24 += 12;
    if (ampm === "AM" && hour24 === 12) hour24 = 0;

    const formatted = `${hour24.toString().padStart(2, "0")}:00`;
    onChange(formatted);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
      <div
        className="bg-gray-100 w-[320px] rounded-[28px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex flex-col items-center justify-center p-6 pb-4 select-none">
          <span className="text-black/70 text-xs tracking-wider mb-2 font-medium uppercase">Selecciona la
            hora</span>
          <div className="flex items-end gap-3">
            <div className="bg-black/10 rounded-lg px-4 py-2 flex items-baseline gap-1">
              <span className="text-5xl text-black font-medium tracking-tight">{selectedHour}</span>
              <span className="text-5xl text-black/50 font-medium tracking-tight">:00</span>
            </div>
            <div className="flex flex-col border border-white/20 rounded-lg overflow-hidden bg-white/5">
              <div
                className={`px-3 py-1.5 text-xs font-bold cursor-pointer ${ampm === "AM"
                  ? "bg-primary text-black"
                  : "text-black/60 hover:bg-white/10 border-t border-white/10"
                  }`}
                onClick={() => setAmpm('AM')}
              >
                AM
              </div>
              <div
                className={`px-3 py-1.5 text-xs font-bold cursor-pointer ${ampm === "PM"
                  ? "bg-primary text-black"
                  : "text-black bg-black/10 hover:bg-black/20 border-t border-black"
                  }`}
                onClick={() => setAmpm('PM')}
              >
                PM
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex items-center justify-center select-none">
          <div className="relative w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center shadow-inner ring-1 ring-black">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => {
              const isAllowed = allowedHours[ampm].includes(hour);
              const isSelected = selectedHour === hour;

              // posiciones aproximadas de cada número en el círculo
              const positions: Record<number, string> = {
                12: "top-2 left-1/2 -translate-x-1/2",
                1: "top-[14%] right-[22%]",
                2: "top-[28%] right-[8%]",
                3: "top-1/2 right-2 -translate-y-1/2",
                4: "bottom-[28%] right-[8%]",
                5: "bottom-[14%] right-[22%]",
                6: "bottom-2 left-1/2 -translate-x-1/2",
                7: "bottom-[14%] left-[22%]",
                8: "bottom-[28%] left-[8%]",
                9: "top-1/2 left-2 -translate-y-1/2",
                10: "top-[28%] left-[8%]",
                11: "top-[14%] left-[22%]",
              };

              return (
                <button
                  type="button"
                  key={hour}
                  disabled={!isAllowed}
                  onClick={() => isAllowed && setSelectedHour(hour)}
                  className={`absolute ${positions[hour]} w-8 h-8 rounded-full flex items-center justify-center
                    ${isAllowed ? "text-black hover:bg-black/40 cursor-pointer" : "text-black/30 cursor-not-allowed"}
                    ${isSelected ? "bg-primary text-black font-bold shadow-lg shadow-primary/40" : ""}`}
                >
                  {hour}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between p-4 px-6">
          <div className="text-[13px] text-black/60 max-w-[120px] leading-tight">
            Horario: 8AM-12PM, 2PM-4PM
          </div>
          <div className="flex gap-4">
            <button className="text-primary text-sm font-medium hover:text-white transition-colors"
              type="button"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all"
              type="button"
              onClick={handleAccept}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
