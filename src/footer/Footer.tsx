import Image from "next/image"


export const Footer = () => {
  return (
    <footer className="bg-card-light text-gray-600 font-semibold py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-6 w-40 text-primary relative">
                {/* <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd"
                    d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                    fillRule="evenodd"></path>
                </svg> */}
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
                <a className="hover:text-primary" href="#">
                  +58 (414) 685-3207
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
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
