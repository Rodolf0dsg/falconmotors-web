import { Suspense } from "react";
import Head from "next/head";
import { ContactForm } from "../components/main/contact/ContactForm";
import { ContactInfo } from "../components/main/contact/ContactInfo";
import { Loader } from "../components/Query/Loader";

export const metadata = {
  title: 'FalconMotors | Contáctanos',
  description:
    '¿Tienes preguntas sobre nuestros autos nuevos y usados? Ponte en contacto con FalconMotors para recibir asesoría personalizada, opciones de financiamiento y atención rápida.',
  keywords: [
    'contacto',
    'contacto FalconMotors',
    'autos nuevos',
    'autos usados',
    'vehículos en venta',
    'financiamiento de autos',
    'servicio al cliente',
    'soporte FalconMotors',
  ],
  // openGraph: {
  //   title: 'FalconMotors | Contáctanos',
  //   description:
  //     'Comunícate con FalconMotors para resolver tus dudas sobre autos, financiamiento y servicios.',    
  //   siteName: 'FalconMotors',
  //   locale: 'es_ES',
  //   type: 'website',
  // },
};

export default function ContactPage() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "FalconMotors",
      "url": "https://falconmotorsca.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+58 422 4448128",
        "contactType": "customer service",
        "areaServed": "VE",
        "availableLanguage": ["es"]
      }
    },
    "@id": "https://falconmotorsca.com/contact"
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="mx-auto px-4 py-12 sm:px-6 lg:px-8 mt-10 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tighter text-text-light">Contáctanos</h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-text-muted-light">¿Tienes alguna pregunta o
              necesitas ayuda? Envíanos un mensaje y te responderemos a la brevedad.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <Suspense fallback={<Loader size={16} />} >
              <ContactForm />
            </Suspense>


            <ContactInfo />

          </div>
        </div>
      </main>
    </>
  );
}