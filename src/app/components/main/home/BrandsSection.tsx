import Image from "next/image"


export const BrandsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-card-light">
      <div className="container mx-auto px-6">
        <h2 className="text-black text-3xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">Nuestras Marcas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <Image
            alt="JMC logo"
            width={ 12 }
            height={ 12 }
            className="h-18 w-auto mx-auto filter opacity-80 hover:scale-[1.4] hover:opacity-100 transition-all duration-300"
            data-alt="JMC logo"
            src="/logos/jmc-logo.svg"
           />

          <Image
            alt="Isuzu logo"
            width={ 12 }
            height={ 12 }
            className="h-18 w-auto mx-auto opacity-80 hover:scale-[1.4] hover:opacity-100 transition-all duration-300"
            data-alt="Isuzu logo"
            src="/logos/isuzu-logo.svg" 
          />

          <Image
            alt="Forthing logo"
            width={ 12 }
            height={ 12 }
            className="h-18 w-auto mx-auto opacity-80 hover:scale-[1.4] hover:opacity-100 transition-all duration-300"
            data-alt="Forthing logo"
            src="/logos/forthing-logo.svg" 
          />

          <Image
            alt="Suzuki logo"
            width={ 12 }
            height={ 12 }
            className="h-18 w-auto mx-auto opacity-80 hover:scale-[1.4] hover:opacity-100 transition-all duration-300"
            data-alt="Suzuki logo"
            src="/logos/suzuki.svg" 
          />

        </div>
      </div>
    </section>
  )
}
