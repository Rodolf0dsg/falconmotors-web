import Link from "next/link"
import { FaChevronRight } from "react-icons/fa"
import { LuSprayCan } from "react-icons/lu"
import { MdConstruction, MdOutlineOilBarrel } from "react-icons/md"
import { PiEngineBold, PiWrenchBold } from "react-icons/pi"


export const ServicesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden metal-texture">
      <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent z-0"></div>
      <div className="container mx-auto px-6 relative z-10">

       <div className="space-y-8 block lg:relative lg:hidden">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <MdConstruction size={ 25 } className="text-primary service-glow text-xl!" />
            <span className="text-primary text-sm font-bold uppercase tracking-wider">Taller Oficial</span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Servicios de Taller <span className="text-primary">Especializados</span>
            </h2>
       </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative hidden lg:block">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <MdConstruction size={ 25 } className="text-primary service-glow text-xl!" />
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Taller Oficial</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Servicios de Taller <span className="text-primary">Especializados</span>
            </h2>
            <p className="text-text-light sm:text-text-muted-dark text-lg leading-relaxed max-w-xl">
              Cuidamos tu vehículo con la mejor tecnología y técnicos certificados. Mantenimiento, revisiones y
              reparaciones con garantía de fábrica para tu total seguridad.
            </p>
            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex flex-col items-start gap-2">
                {/* <span className="material-symbols-outlined text-primary service-glow text-4xl!">earth_engine</span> */}
                <PiEngineBold size={ 40 } className="text-primary"/>
                <span className="text-white font-semibold">Motor</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <PiWrenchBold size={ 40 } className="text-primary"/>
                <span className="text-white font-semibold">Frenos</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <MdOutlineOilBarrel size={ 40 } className="text-primary"/>
                <span className="text-white font-semibold">Lubricación</span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <LuSprayCan size={40} className="text-primary" />
                <span className="text-white font-semibold">Chapa y Pintura</span>
              </div>
            </div>
            <div className="flex pt-4">
              <Link className="relative group inline-flex items-center justify-center overflow-hidden rounded-lg p-0.5 font-bold"
                href="/services">
                <span
                  className="absolute inset-0 h-full w-full bg-linear-to-br from-[#ff0000] via-primary to-[#800000] group-hover:from-[#ff4d4d] group-hover:to-[#b30000]"></span>
                <span
                  className="relative flex items-center gap-2 rounded-[7px] bg-background-dark px-10 py-4 transition-all duration-200 group-hover:bg-transparent">
                  <span className="text-white text-lg">Ver Todos los Servicios</span>
                  <FaChevronRight size={ 15 } className="text-white"/>
                </span>
              </Link>
            </div>
          </div>
          <div className="relative block">
            <div
              className="aspect-square rounded-2xl overflow-hidden border-2 border-card-border-dark rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <img alt="Taller mecánico especializado"
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlOSGgqw_4yttaoSNiuSyekLuO0KU3GIWN1T_1h4OK8XBtUjjHkMAlAi9cNa4cB8yCgKU_LpmTmDB25wJg1tPS-z9m3TfY8qwacfk4fTX7BZ1M4OVDbUgEem16bdYXV-isUb-DjTGNhTS6jYSZRdqUh54R8Ir8ot39-C7973LthY1INYVcd7Icfpk4ZBWi1fv3G7hZ_6RbK-BOgjh9zKQh_rAeS987nGoJV8kyKt5RS-nf-TFs6kWW_F-OxHzMynWBhG5S0P19mYMS" />
                src="/Servicios de taller.png" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-xl shadow-2xl animate-pulse">
              <span className="text-white font-bold text-xl block">Agendar Cita Hoy</span>
              <span className="text-white/80 text-sm">Disponibilidad inmediata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
