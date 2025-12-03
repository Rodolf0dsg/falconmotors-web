import { BiGasPump } from "react-icons/bi";
import { HiOutlineBolt } from "react-icons/hi2";
import { MdOutlineCalendarToday } from "react-icons/md";
import { PiEngineBold } from "react-icons/pi";
import { SiSpeedtest } from "react-icons/si";
import { TbManualGearbox } from "react-icons/tb";
import { VehicleDescription } from "./VehicleDescription";

interface Props {
  brand:        string
  model:        string
  year:         number | string;
  mileage:      number;
  price:        number;
  transmission: string;
  used:         boolean;
  horsePower:   number;
  type:         string;
  motor:        string;
  typeOfOil:    string;
  features?:    string[];
}


export const PriceAndActions = ({
  brand, model, year, mileage, price, transmission, used, horsePower, type, motor, typeOfOil, features
}: Props) => {
  return (
    <div className="lg:col-span-2">
      <div
        className="bg-white rounded-xl border border-border-light p-6 flex flex-col gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-light">
            { brand } { model }
          </h2>
          <p className="text-lg text-text-muted-light">{ type } | Modelo { year }</p>
        </div>

        <div className="border-t border-border-light pt-6">
          <div className="flex flex-col items-start gap-4">
            {/* <div>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">Precio de venta</p>
              <p className="text-4xl font-black text-primary tracking-tighter">${ price.toLocaleString('en-US') }</p>
            </div> */}
            
            <button
              className="cursor-pointer w-full flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-linear-to-b from-primary to-red-700 text-white text-base font-bold shadow-lg hover:shadow-primary/40 transition-shadow">
              <span className="material-symbols-outlined">call</span>
              <span>Contactar Asesor</span>
            </button>
            <ul className="list-disc list-inside text-sm text-text-muted-light space-y-1">
              { used ? <li>Único dueño, servicios de agencia.</li> : <li>Vehículo nuevo con garantía de fábrica.</li>}
              {
                features && features.map((feature, index) => (
                  <li key={index}>{ feature }</li>
                ))
              }
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-black">Especificaciones</h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            <div className="flex items-center gap-3">
              {/* <span className="material-symbols-outlined text-primary text-2xl">calendar_today</span> */}
              <MdOutlineCalendarToday size={ 23 } className="text-primary"/> 
              
              <div>
                <p className="text-xs text-text-muted-light">Año</p>
                <p className="font-semibold text-black">{ year }</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <span className="material-symbols-outlined text-primary text-2xl">speed</span> */}
              <SiSpeedtest size={ 22 } className="text-primary"/>
              <div>
                <p className="text-xs text-text-muted-light">Kilometraje</p>
                <p className="font-semibold text-black">{ mileage.toLocaleString('en-US') } km</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <span className="material-symbols-outlined text-primary text-2xl">settings</span> */}
              <PiEngineBold size={ 22 } className="text-primary"/>
              <div>
                <p className="text-xs text-text-muted-light">Motor</p>
                <p className="font-semibold text-black">{ motor }</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <span className="material-symbols-outlined text-primary text-2xl">auto_transmission</span> */}
              <TbManualGearbox size={ 26 } className="text-primary"/>
              
              <div>
                <p className="text-xs text-text-muted-light">Transmisión</p>
                <p className="font-semibold text-black">{ transmission }</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <span className="material-symbols-outlined text-primary text-2xl">local_gas_station</span> */}
              <BiGasPump size={ 24 } className="text-primary"/>
              <div>
                <p className="text-xs text-text-muted-light">Combustible</p>
                <p className="font-semibold text-black">{ typeOfOil }</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* <span className="material-symbols-outlined text-primary text-2xl">bolt</span> */}
              <HiOutlineBolt size={ 23 } className="text-primary"/>
              <div>
                <p className="text-xs text-text-muted-light">Potencia</p>
                <p className="font-semibold text-black">{ horsePower } HP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VehicleDescription/>

    </div>
  )
}
