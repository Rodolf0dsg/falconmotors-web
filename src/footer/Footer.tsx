import Image from "next/image"


export const Footer = () => {
  return (
    <footer className="bg-card-light text-gray-600 font-semibold py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-6 w-40 text-primary relative">
                <Image
                  src={'/logos/Logo-white.png'}
                  alt="Logo"
                  width={ 120 }
                  height={ 100 }
                  className="absolute -top-6 object-contain"
                >

                </Image>
              </div>
                <h2 className="text-black text-xl font-bold">Falcon Motors</h2>
            </div>
            <p className="text-sm">Tu concesionario de confianza para autos nuevos y usados. Calidad, transparencia y el
              mejor servicio al cliente.</p>
          </div>
          <div>
            <h4 className="text-black font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a className="hover:text-primary" href="mailto:Motorsfalconca@gmail.com" target="_blank">
                  Motorsfalconca@gmail.com
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="https://wa.me/584129257435">
                  +58 (412) 925-7435
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="https://wa.me/584224448128">
                  +58 (422) 444-8128
                </a>
              </li>
              <li>
                <span>Av. Intercomunal Alí Primera, Punto Fijo</span>
              </li>
            </ul>
          </div>
 
        </div>
        <div className="mt-8 border-t border-card-border-dark pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Falcon Motors. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a className="text-text-muted-dark hover:text-primary transition-colors" href="https://www.instagram.com/falconmotorsca/" target="_blank">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
