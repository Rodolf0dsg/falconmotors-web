import Image from "next/image";

const text = '<p>JMC Grand Avenue 2025<br/>0 kilómetros</p><br/><ul><li>📌 Motor Ford Puma 2.3L Turbo con 250HP</li><li>📌 Torque aproximado de 380 Nm</li><li>📌 Transmisión automática de 8 velocidades 4x4</li><li>📌 Consumo combinado cercano a 10 km/L</li><li>📌 Capacidad de carga: 1000 Kg</li><li>📌 Suspensión reforzada para trabajo pesado</li><li>📌 Asientos ergonómicos con tapicería premium</li><li>📌 Sistema de frenos ABS + EBD</li><li>📌 2 airbags frontales y anclajes Isofix</li><li>📌 Cámara de retroceso y sensores de parqueo</li><li>📌 Interior amplio con tablero digital</li><li>📌 Tecnología Keyless Entry y control remoto</li></ul><br/><p>🏦 Crédito Automotriz<br/>💳 Cancela hasta el 50% de inicial<br/>✔️ Vehículo revisado y con garantía de 2 años y/o hasta 50.000 kilómetros</p><br/><p>\"Potencia y confianza en cada camino\"</p>';


export const VehicleDescription = () => {
  return (
    <div
      className="mt-8 bg-surface-light rounded-xl border border-border-light p-6">
      <h3 className="text-lg font-bold text-surface-dark">Descripción General</h3>
      <hr className="border-t border-border-light my-4" />
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-white shadow-sm shrink-0">
          {/* <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
          </svg> */}
          <Image
            alt="logo"
            src={'/logos/Logo-white.png'}
            width={100}
            height={10}
          />
        </div>
        <div>
          <p className="text-sm text-text-muted-light ">Vendido por</p>
          <p className="font-semibold text-text-light">Falcon Mortors</p>
        </div>
      </div>

      <div 
        className="text-sm text-text-muted-light leading-relaxed"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      
      {/* <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
        El Toyota Corolla XSE 2023 combina un diseño elegante y deportivo con un rendimiento excepcional. Equipado
        con un motor de 2.0 litros y 169 caballos de fuerza, ofrece una conducción ágil y eficiente. El interior
        cuenta con asientos de cuero sintético SofTex®, una pantalla táctil de 8 pulgadas compatible con Apple
        CarPlay® y Android Auto™, y el avanzado sistema de seguridad Toyota Safety Sense™ 2.0. Este vehículo es
        ideal para quienes buscan estilo, tecnología y confiabilidad en un solo paquete.
      </p> */}
    </div>
  )
}
