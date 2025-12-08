import { Main } from "../main/Main";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "FalconMotors | Venta de autos en Falcón",
  description: "Compra y venta de autos nuevos y usados en Falcón, Venezuela. Amplio inventario, financiamiento flexible y garantía confiable.",
  keywords: ["autos en Falcón", "carros Venezuela", "venta de vehículos", "FalconMotors", "autos usados", "financiamiento"],
};

export default function Home() {
  return (
    <>
      <Main/>
    </>
  );
}
