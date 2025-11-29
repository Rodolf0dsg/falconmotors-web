import { HiOutlineClock } from "react-icons/hi"
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md"


export const LocationSection = () => {
  return (
    <section className="pb-16 pt-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-3xl font-bold text-center mb-12">Donde Ubicarnos</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
        

          <div className="w-full h-96 rounded-lg bg-gray-700 overflow-hidden">

            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4711.400339576367!2d-70.1822240554193!3d11.725816658127018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8593e23d597901%3A0xb99c17a791f5ecfe!2sFALCON%20MOTORS%20CA!5e0!3m2!1ses!2sve!4v1763761090160!5m2!1ses!2sve" 
              width="100%" 
              height="100%"
              className="w-full h-full object-cover" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>

          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              {/* <span className="material-symbols-outlined text-primary text-2xl mt-1">location_on</span> */}
              <MdOutlineLocationOn size={ 28 } className="text-primary"/>
              <div>
                <h4 className="text-white font-bold">Dirección</h4>
                <p className="text-text-muted-dark">Av. Intercomunal Alí Primera, Punto Fijo, Venezuela</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              {/* <span className="material-symbols-outlined text-primary text-2xl mt-1">phone</span> */}
              <MdOutlinePhone size={ 26 } className="text-primary" />
              <div>
                <h4 className="text-white font-bold">Teléfono</h4>
                <p className="text-text-muted-dark">+58 (412) 123-456</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              {/* <span className="material-symbols-outlined text-primary text-2xl mt-1">schedule</span> */}
              {/* <FiClock size={ 26 } className="text-primary" /> */}
              <HiOutlineClock size={ 26 } className="text-primary" />
              <div>
                <h4 className="text-white font-bold">Horario de Atención</h4>
                <p className="text-text-muted-dark">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-text-muted-dark">Sábados: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
