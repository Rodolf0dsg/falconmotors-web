

export const QuestionSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-card-light">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-black text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          <details className="group bg-background-light p-6 rounded-lg border border-black">
            <summary className="flex justify-between items-center cursor-pointer text-black font-medium list-none">
              ¿Qué tipo de financiamiento ofrecen?
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <p className="text-black mt-4">Ofrecemos múltiples opciones de financiamiento, incluyendo crédito
              convencional, leasing y opciones de pago flexibles. Trabajamos con varios bancos para encontrar la mejor
              tasa para ti.</p>
          </details>
          <details className="group bg-background-light p-6 rounded-lg border border-black">
            <summary className="flex justify-between items-center cursor-pointer text-black font-medium list-none">
              ¿Puedo entregar mi auto actual como parte de pago?
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <p className="text-black mt-4">¡Claro que sí! Aceptamos vehículos <span className="text-primary">en consignacion</span> como parte de pago. Realizamos una
              tasación profesional y transparente para ofrecerte el mejor valor por tu auto actual.</p>
          </details>
          <details className="group bg-background-light p-6 rounded-lg border border-black">
            <summary className="flex justify-between items-center cursor-pointer text-black font-medium list-none">
              ¿Los vehículos usados tienen garantía?
              <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </summary>
            <p className="text-black mt-4">Todos nuestros vehículos usados certificados vienen con una garantía
              limitada, que cubre <span className="text-primary">los primeros 2 años</span> o <span className="text-primary">50.000 Kilometros</span> lo que se cumpla primero</p>
          </details>
        </div>
      </div>
    </section>
  )
}
