'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

const images = [
  "https://res.cloudinary.com/dsoeuisqi/image/upload/v1765075991/Replace_the_Porsche_ervkzo.png",
  "https://res.cloudinary.com/dsoeuisqi/image/upload/v1765075990/5c3609850ee6947048349675-suzuki-jimny-1-5-mode-3-superprueba-al-pequeno-y-autentico-4x4_gaxncn.jpg",
  "https://res.cloudinary.com/dsoeuisqi/image/upload/v1765075998/gal03_sqpd1d.jpg"
];

export const TopSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">

      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${img})`,
          }}
        />
      ))}

      <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-white to-transparent -mt-3"></div>

      <div className="relative z-10 p-6 flex flex-col gap-6">
        <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
          Encuentra el auto de tus sueños
        </h1>
        <h2 className="text-white text-base md:text-lg font-normal leading-normal">
          Explora nuestro inventario de vehículos nuevos y usados de alta calidad.
        </h2>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link
            href="/vehicles"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-700 transition-colors"
          >
            <span className="truncate">Ver Inventario</span>
          </Link>

          <Link
            href="/contact"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-card-border-dark text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-80 transition-opacity"
          >
            <span className="truncate">Pedir una cita</span>
          </Link>

        </div>
      </div>
    </section>
  );
};