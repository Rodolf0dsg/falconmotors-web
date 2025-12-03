import { VehicleProps } from "@/src/Types/VehicleProps"
import Link from "next/link"
import { IoCalendarClearOutline, IoPricetagsOutline } from "react-icons/io5"
import { MdOutlineCalendarToday } from "react-icons/md"
import { PiGear } from "react-icons/pi"
import { SiSpeedtest } from "react-icons/si"
import { TbManualGearbox } from "react-icons/tb"


export const VehicleCard = ({
  id, model, brand, mileage, transmission, year, price, imageUrl, sold, used
}:VehicleProps) => {
  return (
       <Link
          href={ `/vehicles/${id}` }
          className="flex flex-col gap-3 rounded-xl bg-whire border border-gray-300 overflow-hidden group cursor-pointer"
        >
          <div className="relative">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
              data-alt={`${brand} ${model} ${year}`}
              style={{backgroundImage: `url("${imageUrl}")`}}>
            </div>
            <span
              className={`absolute top-2 left-2 ${used ? 'bg-gray-500' : 'bg-blue-500'} text-white text-xs font-bold px-2 py-1 rounded-full`}
            >
              {used ? 'USADO' : 'NUEVO'}
            </span>
            {
              (sold) &&
              (<div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span
                  className="text-white text-3xl font-black tracking-widest -rotate-12 border-4 border-white p-4">VENDIDO</span>
              </div>)
            }
          </div>
          <div className="p-4 pt-0 grow flex flex-col">
            <h3 className="text-black text-xl font-bold leading-normal mb-3">{ brand } { model }</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-600 text-sm mt-auto">
              <p className="flex items-center gap-2">
                {/* <span className="material-symbols-outlined text-base">calendar_today</span>  */}
                {/* <IoCalendarClearOutline size={ 20 } /> */}
                <MdOutlineCalendarToday size={ 21 }/> 
                { year }
              </p>
              <p className="flex items-center gap-2">
                {/* <span className="material-symbols-outlined text-base">settings</span> */}
                {/* <PiGear size={ 23 } /> */}
                <TbManualGearbox size={ 23 } />
                { transmission }
              </p>
              <p className="flex items-center gap-2">
                {/* <span className="material-symbols-outlined text-base">speed</span>  */}
                <SiSpeedtest size={ 20 } />
                { mileage.toLocaleString('en-US') } km
              </p>
              <p className="flex items-center gap-2">
                {/* <span className="material-symbols-outlined text-base">sell</span>  */}
                <IoPricetagsOutline size={ 23 } />
                { brand }
              </p>
            </div>
            {/* <p className="text-2xl font-black price-highlight">${ price.toLocaleString('en-US') }</p> */}
          </div>
        </Link>
  )
}
