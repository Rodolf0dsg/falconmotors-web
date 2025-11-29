import { FaMoneyBills } from "react-icons/fa6"
import { MdSupportAgent } from "react-icons/md"
import { PiShieldCheck } from "react-icons/pi"

export const WhySection = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-card-dark p-4 rounded-full text-primary">
              {/* <span className="material-symbols-outlined text-4xl!">verified_user</span> */}
              {/* <IoShieldCheckmarkOutline size={ 40 }/> */}
              <PiShieldCheck size={ 40 } />
            </div>
            <h3 className="text-white text-xl font-bold">Inspeccionados y Garantizados</h3>
            <p className="text-text-muted-dark max-w-xs">Cada vehículo pasa por una rigurosa inspección de más de 150
              puntos para asegurar su calidad y tu tranquilidad.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-card-dark p-4 rounded-full text-primary">
              {/* <span className="material-symbols-outlined text-4xl!">payments</span> */}
              <FaMoneyBills size={ 40 } />
            </div>
            <h3 className="text-white text-xl font-bold">Financiamiento Flexible</h3>
            <p className="text-text-muted-dark max-w-xs">Ofrecemos planes de financiamiento a tu medida, trabajando con
              las principales entidades financieras del país.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-card-dark p-4 rounded-full text-primary">
              {/* <span className="material-symbols-outlined text-4xl!">support_agent</span> */}
              <MdSupportAgent size={ 40 } />
            </div>
            <h3 className="text-white text-xl font-bold">Atención Personalizada</h3>
            <p className="text-text-muted-dark max-w-xs">Nuestro equipo de expertos te asesorará en cada paso del proceso
              para que tomes la mejor decisión.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
