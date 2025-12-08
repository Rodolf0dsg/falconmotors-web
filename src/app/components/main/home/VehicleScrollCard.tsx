import { Color } from "@/src/Types/VehicleResponse"
import Link from "next/link";
import { FaCalendarAlt, FaCar, FaCogs, FaRoad } from "react-icons/fa"

interface VehicleScrollCardProps {
  brand:        string
  mileage:      number
  type:         string
  year:         number
  transmission: string
  vehicleModel: string
  colors:       Color[];
  _id:          string
}

export const VehicleScrollCard = ({  
  brand, mileage, type, year, transmission, vehicleModel, colors, _id,
 }: VehicleScrollCardProps) => {

  return (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-card-light shadow-xl min-w-72 border border-gray-400">
      <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg"
        data-alt="Front view of a white Audi A4"
        style={{
          backgroundImage: `url("${colors[0].images[0].url}")`
        }}>
      </div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="text-black text-lg font-bold leading-normal">{brand} {vehicleModel}</p>

           <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-primary" />
              <span>{ year }</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRoad className="text-primary" />
              <span>{ mileage } km</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCar className="text-primary" />
              <span>{ type }</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCogs className="text-primary" />
              <span>{ transmission }</span>
            </div>
          </div>

        </div>
        <Link
          href={`/vehicles/${ _id }`}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-card-border-light text-black border-red-400 border text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary transition-colors">
          <span className="truncate">Ver Detalles</span>
        </Link>
      </div>
    </div>
  )
}
