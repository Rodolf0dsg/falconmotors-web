import { HiOutlineClock } from "react-icons/hi"
import { MdMailOutline, MdOutlinePhone } from "react-icons/md"


export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div
        className="bg-background-light dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-[#543b3b]">
        <h3 className="text-xl font-bold text-text-light dark:text-white mb-4">Información de Contacto</h3>
        <ul className="space-y-4 text-text-muted-light dark:text-text-muted-dark">
          <li className="flex items-center">
            {/* <span className="material-symbols-outlined text-primary mr-3">mail</span> */}
            <MdMailOutline size={ 24 } className="text-primary mr-3" />
            <a className="hover:text-primary" href="mailto:contacto@concesionario.com">contacto@concesionario.com</a>
          </li>
          <li className="flex items-center">
            {/* <span className="material-symbols-outlined text-primary mr-3">call</span> */}
            <MdOutlinePhone size={ 24 } className="text-primary mr-3" />
            <a className="hover:text-primary" href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
        </ul>
      </div>
      <div
        className="bg-background-light dark:bg-card-dark p-6 rounded-xl border border-gray-200 dark:border-[#543b3b]">
        <h3 className="text-xl font-bold text-text-light dark:text-white mb-4 flex items-center">
          {/* <span className="material-symbols-outlined text-primary mr-2">schedule</span> */}
          <HiOutlineClock size={ 25 } className="text-primary mr-2" />
          
          Horarios de Atención
        </h3>
        <ul className="space-y-2 text-text-muted-light dark:text-text-muted-dark">
          <li className="flex justify-between"><span>Lunes a Viernes:</span> <span>9:00 AM - 6:00 PM</span></li>
          <li className="flex justify-between"><span>Sábado:</span> <span>10:00 AM - 2:00 PM</span></li>
          <li className="flex justify-between"><span>Domingo:</span> <span>Cerrado</span></li>
        </ul>
      </div>
      <div className="text-sm text-text-muted-light dark:text-gray-400">
        <p>Todos nuestros vehículos, servicios y productos pasan por una rigurosa inspección para garantizar su calidad y tu tranquilidad.
          Nos especializamos en ofrecerte las mejores opciones del mercado, adaptadas a tus necesidades y presupuesto.
        </p>
      </div>
    </div>
  )
}
