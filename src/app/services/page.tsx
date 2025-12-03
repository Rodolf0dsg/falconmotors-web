import { ServicesForm } from "../components/main/services/ServicesForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FalconMotors | Servicios de Taller",
  description:
    "Servicios profesionales y certificados para el cuidado de tu vehículo. Mantenimiento general, revisión completa, diagnóstico electrónico, lavado, cambio de aceite y más en FalconMotors.",
  keywords: [
    "servicios de taller",
    "mantenimiento de autos",
    "revisión completa",
    "diagnóstico electrónico",
    "lavado de autos",
    "cambio de aceite",
    "servicios FalconMotors",
    "taller mecánico",
    "autos nuevos",
    "autos usados",
  ],
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-10 md:gap-16">
      <section className="relative h-screen w-full flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-cover bg-center" data-alt="Red sports car on a road"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt_EVwL9DSuMxl7TRT9xiCetO2NUdKeL9NzAJ3MXFDfq8fsCrY9MDoWAAFT3Af5q4XLbVydLa3_5r_u28dXR8-gg1lYT4b57R71sMHrtcv51xawcENzTzAgKNmGjOZoWgyfp5w6ml6LEX6KiRG8bi15iQJzN8zWYqxW3BcomxhV7nK5D9tZUlz6N8Om9wy0YRfOJiNfEmSSCPKwIWuzfy51w9HJ9tM-UJ6JTxeDNCcLw5ugLPE4Ea2b15NXsIbs3qayHvzjqmZjr-z")`
          }}>
        </div>
        <div className="flex flex-col gap-2 text-center relative z-10">
          <h1
            className="text-white text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
            Servicios de Taller Profesionales y Certificados
          </h1>
          <h2
            className="text-white/90 text-lg font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
            Expertos en el cuidado de tu vehículo. Calidad y confianza garantizada en cada reparación.
          </h2>
        </div>
      </section>

      <section>
        <h2 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pt-5">Nuestros
          Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="Mechanic performing general maintenance on a car engine"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfdYBtZTQbj3_VsAoPPYyYGxln_a9Y7f0NdpcpaMWYbCOR6lKVOiCuRt_EqUoPJaGjkE9_SV0hHi22VrzUGOZQ3SXTPSCJL6hXCXPo7xCCEIF8p1ffhP4BMkuTSTv5UZ-GCvxuDCkxqA8MOhyam21JQ16j-rM9GhUzdXnkR03BRMd0GTJM_1QBK7svZ7LnIJO3ezb7hNL4fQxA1fGWqW2QXAoiNsVQrDhlz0nr_anu5RJYo9b4af6NoJ9qANo1da-e9Aop8TQuKeIj")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Mantenimiento General</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Servicios preventivos para mantener tu auto en óptimas condiciones.</p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="Technician checking vehicle systems with a diagnostic tool"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDH8GZO9T64Dk4aKb4tu_4RkYVjEj7WqcAknSacMaEl9nn0-g9HUHqnIt7z76Z2y3L3Vo0omdZZfJ4dHmhhPlpN2fmTvGrqmkFmvvZI61idGV9_BymPXrnG9dbGMWidyOfDjLAoVEEFLfyhjkN14YhmHiWpLnXxROYd5qVrloxeBAqSJJ2zimOcwrjRlXpYMm_cPIc0a5BWmA6J70asn5zxJn6rDVs2PJNx1lK0mx5Qxc4mPQCuPqLVX-g8vXmAKE8qvRFjtoBIBkq1")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Revisión Completa</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Inspección detallada de todos los puntos de seguridad y funcionamiento.</p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="Close-up of a computer scanner connected to a car's dashboard"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgikUXO8OdmzKyUasdDY-tnKPf1VExkBIP3eHZU_Ibwg5NmBxy4MTFaJ2rlTNiKzWZ661pKJR4WTEBNsmHcd3_oFTO1Z5MFPwSf-Qni1tr3sqJT83aLcnaCM8z-tI_-LaNWluPlTXLuNW3bD-5EFkh-4rbcRMGE2aIOCaMRzUytMu3_HdxGCDfJpNlYdKJyaKHk1ncPvNSZRiKTCwur6eK-sM-G4ZCW9UhNNpmECAQghrVT_ZkWBLo-yF6alSE7FuWR7vC2q3r24Nk")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Servicio de Escáner</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Diagnóstico electrónico para detectar fallas con precisión.</p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="Freshly washed car gleaming under lights"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUrwy0fhCBcuAJmHkp7EeJVnUSQnjV5wkw-r-P3QDJgEBiSIWUSgBZuL9XpN7Z1kt9Z4kXx_gZPTb96niQb6JAcOozfCFL160ZtXm1owMvnGdIDKyswyxfGyUvYcMFCxiZSTHrEzVOq-L8ziUvSO2Xx8t7aRUrxU5szbhjS5WwllJky0h-QgLgqkfL8hxT9o4EKbqzKsVyQbvEmIA0xCYaudn53E8MBOx5a6sMcMn0acKjnoWmCvbcHEkAuOzZVX1tY_hwKDfAwdFS")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Lavado Básico y Completo</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Limpieza exterior e interior para un acabado impecable.</p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="Mechanic pouring new oil into a car engine"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-U5kIa6VsSFRL6-5ExUnsosiyyP4FF4pvEUcyAyNRf_hZAi3sFvLVHm67ogJ7vFauhKzI3pKLs5OdDNmuNkz1-ofCi5reFMllnXtvnLLx9qz3FKyhvp0vZH-YBWfZFmdaxoQrk40pX8y7ZdsXT50iXksrjzcKfxmZzw0X0wo_EmeM6YblGaQUhwYhFdvqXMSX0R2q7TabLDPHxXV6ejvaMU3vA9tytx8oNclrtcNUquCIx6gxb9hyDWxWimodQ1nJFhwRjST18BiF")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Cambio de Aceite y Filtro</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Esencial para la vida y rendimiento del motor.</p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="Complex engine parts being assembled by a mechanic"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5H1_R-nIqS4-aNMavuReJDQeLILioZ2OvV1zUHIqRn9Aeluc2CojHLxA1hSlArY1j8lMrhnBfeEowgr-ocaTIii13BGE2g7JUa0Mwy_CKoGElKs6bFLNrwsiPMDumeTjPyKLiYNrbDxpIY7Imd_VAPy5m4uvBL_inKf33Y1bdPxUHfme__jaIk-dGoVaOl1md4X4BTyRrqVgM4cd-HtYE6JLbiNyX7BV8AtdcDT4sTb1LqnO3N6OAs95Bj1FtcCvT7QYpVpnGqi_l")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Reparaciones Mayores</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Soluciones avanzadas para mecánica ligera y pesada.</p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="High-pressure water cleaning a car engine"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJTgQLdMh-Pfc5AHVdx1BmyxXhemmVlJhh67A2mQEY9MVb0Vnwte9998u5YhinwThlWerE16WC9-9knPOgG1kdufKzonmM0JUY0ok5bez_dc3HgZtTrNV07rYrySBYouj3VpKoWLQoAHUCuBnxFMkLhm9moLTpAX7Dgy8iTMyjD3uPOKCrHhEtokQM_B3LOBMOJKBQNvEQ-6nPoOaaIQmYgZc6d996NCfw-bZMQv6VR3CY6qtbkqD64QN1Oc-w6-QrrGHcX2CwhyqC")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Lavado de Motor</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Limpieza profesional y segura de los componentes del motor.</p>
            </div>
          </div>
          <div
            className="group relative overflow-hidden bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-4/3 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            data-alt="Auto body technician applying a new coat of paint to a car in a spray booth"
            style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVBxEz1Bm6xcwLQE7Bw3IEIB4DAyjiq4cy0gz_o_CFrfQK-Yn5K1_bjVrlCnQR13OC1toAE6jtpHjPG4tc3g3bqj-Kyk8B3MsiL1N2Djc5rWE0LzXD8tFlfh8q0rhr74_nD2rek-t9jrQQKzhnTw1Ulvu9t23r-wQDTDH494kbt3IjvY0zzfkfPaPgm3hF5PFkOBGnXRFaNwwjiroTd-mA4_FGNBr6NKBolZTJxqqftXHnlsfJ80AHwUek0MD_d6fa8lSE9Oqvlwc7")' }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-primary/20 transition-colors duration-300">
            </div>
            <div className="relative z-10">
              <p className="text-white text-base font-bold leading-tight">Latonería y Pintura</p>
              <p
                className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Reparamos y devolvemos el brillo original a tu vehículo.</p>
            </div>
          </div>
        </div>
      </section>
      <div hidden id="form"></div>

      <ServicesForm/>
      
    </main>
  );
}